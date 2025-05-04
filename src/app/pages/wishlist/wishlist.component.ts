import { Component, inject, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';
import { IwishList } from '../../shared/interfaces/iwish-list';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  private readonly wishList=inject(WishlistService);
  iwishList:IwishList[]=[]

  ngOnInit(): void {
      this.getLOggrdWishList();

  }

  getLOggrdWishList():void
  {
    this.wishList.getLoggedUserWishlist().subscribe(
      {
        next:(res)=>
        {
          if(res.status === 'success')
          {
       this.iwishList= res.data;
       this.wishList.wishNumber.set(res.count);
       console.log(res.count);
       
          }
         
          
        }
      }
    )

  }




  removeWishList(id:string):void
  {
    this.wishList.removeWishlistUserData(id).subscribe(
      {
        next:(res)=>
        {
         
          this.iwishList=this.iwishList.filter((item)=>
          res.data.includes(item.id));
          this.wishList.wishNumber.update(res.data.length);
           

        }
      }
    )
  }

}
