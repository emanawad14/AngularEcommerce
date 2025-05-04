import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private httpclient:HttpClient) { }
  myToken=localStorage.getItem('usertoken')!;
  cartNumber:WritableSignal<number>=signal(0);
  
  // *********************   Add  ******************************


  addProductToCart(id:string):Observable<any>
  {
    return this.httpclient.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        "productId": id
    },
    {
      headers:
      {
        token:this.myToken
      }
    }
    )
  }


 // *********************   logged  ******************************

 getLoggedCart():Observable<any>
 {
  return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers:
      {
        token:this.myToken
      }
    }
  )
 }

 // *********************   Delete  ******************************


 RemoveSpecificCartItem(id:string):Observable<any>
 {
  return this.httpclient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`
    ,{
      headers:
      {
        token:this.myToken
      }
    }
  )
 }


 //********************   UpDatae ************************************ */
 UpDataCartProduct(id:string,count:number):Observable<any>
 {
  return this.httpclient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
    {
      
        "count": count
    
    },
    {
      headers:
      {
        token:this.myToken
      }
    }
  )
 }

  //********************   Clear Item ************************************ */
  ClearItemsProducts():Observable<any>
  {
   return this.httpclient.delete(`https://ecommerce.routemisr.com/api/v1/cart` ,
    {
      headers:{
        token:this.myToken
      }
    }
   )
  }
}
