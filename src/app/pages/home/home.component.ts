import { Component, inject, OnInit } from '@angular/core';


import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductrouteService } from '../../core/services/products/productroute.service';
import { IRoute } from '../../shared/interfaces/iroute';
import { CartService } from '../../core/services/cart/cart.service';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from '../../core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';
import { IwishList } from '../../shared/interfaces/iwish-list';

@Component({
  selector: 'app-home',
  imports: [CarouselModule , FormsModule,RouterLink , SearchPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit  {
  private readonly hamada=inject(ProductrouteService);
  private readonly CartService=inject(CartService);
  private readonly ToastrService=inject(ToastrService);
  private readonly WishlistService=inject(WishlistService);



  
  iwishList:IwishList[]=[];

 test:string='';

 
  products:IRoute[]=[]
  ngOnInit(): void {
    this.getProducts();
    this.getLOggrdWishList();
    AOS.init();
      
  }


//********************* cart id Data ************************************** */

  Addproduct(id:string):void
  {
    this.CartService.addProductToCart(id).subscribe(
      {
        next:(ree)=>
          {
          
            console.log(ree);
            this.CartService.cartNumber.set(ree.numOfCartItems)
            //show alert 
            this.ToastrService.show('🚐')

    
    
          },
          error:(eyy)=>
          {
            console.log(eyy);
          }

      }
    )
  }

//********************* Get Data ************************************** */

  getProducts():void
  {
    this.hamada.getAllProducts().subscribe({
      next:(ree)=>
      {
        this.products=ree.data;
        console.log(ree.data);


      },
      error:(eyy)=>
      {
        console.log(eyy);
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplayHoverPause:true,
    autoplay:true,
    dots: false,
    autoplayTimeout:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
//************************************************** */

addToWishList(id:string):void
{
this.WishlistService.AddProductToWishList(id).subscribe(
  {
    next:(res)=>
    {
    if(res.status === 'success')
    {
      console.log(res);
      this.iwishList=res.data
    }
      
    }
  }
)
}




removeWishList(id:string):void
  {
    this.WishlistService.removeWishlistUserData(id).subscribe(
      {
        next:(res)=>
        {
         
          this.iwishList=this.iwishList.filter((item)=>
          res.data.includes(item.id));
          this.WishlistService.wishNumber.update(res.data.length);
          this.iwishList=res.data;
           

        }
      }
    )
  }



  getLOggrdWishList():void
  {
    this.WishlistService.getLoggedUserWishlist().subscribe(
      {
        next:(res)=>
        {
          if(res.status === 'success')
          {
       this.iwishList= res.data;
       this.WishlistService.wishNumber.set(res.count);
       console.log(res.count);
       
          }
         
          
        }
      }
    )

  }

}
