import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpclient:HttpClient) { }
  myToken=localStorage.getItem('usertoken')!;


  wishNumber:WritableSignal<number>=signal(0);
  
  AddProductToWishList(id:string):Observable<any>
  {
    return this.httpclient.post(`https://ecommerce.routemisr.com/api/v1/wishlist` ,

      {
         productId:id
      },
      {
        headers:
        {
          token:this.myToken
        }
      }
    );
  }


  getLoggedUserWishlist():Observable<any>
  {
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/wishlist` ,
      {
        headers:
        {
          token:this.myToken
        }
      }
    )

  }


  removeWishlistUserData(id:string):Observable<any>
  {
  return  this.httpclient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
    {
      headers:
      {
        token:this.myToken
      }
    }
  )
  }
}
