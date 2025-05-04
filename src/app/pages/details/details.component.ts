import { Component, inject, OnInit } from '@angular/core';
import { ProductrouteService } from '../../core/services/products/productroute.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Iproducts } from '../../shared/interfaces/iproducts';
import { Productsroute } from '../../shared/interfaces/productsroute';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  imports: [CarouselModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private readonly productServices=inject(ProductrouteService);
  private readonly ActivatedRoute=inject(ActivatedRoute);
   IDProducts:Productsroute ={} as Productsroute;
   productDetails:Productsroute|null=null


    imgsSrc:string='';

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe({
      next:(p)=>
      {
     let Idproduct= p.get('id');
        this.productServices.getAllSpaseficProducts(Idproduct).subscribe
        ({
          next:(res)=>
          {
            this.IDProducts=res.data;
            this.imgsSrc=this.productDetails?.imageCover!;

             console.log(res.data);
             
          },
          error:(err)=>
          {
                console.log(err);
                
          }
        })
      }
    })
      
  }

  imgScreen(src:string):void{
this.imgsSrc=src
  }

  ProductOneItem():void
  {
   
    
  }




  customOptions: OwlOptions = {
    
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
   
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navSpeed: 700,
   
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
  
  }

}
