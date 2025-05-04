import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class OrderaService {

  IDgetProduct:any=null
  myToken=localStorage.getItem('usertoken')!;

  constructor(private httpclient:HttpClient) { }

  CheckSeesionOnline(id:string ,data:object):Observable<any>
  {
    return this.httpclient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {
        "shippingAddress":data

      },
      {
        headers:
        {
          token:this.myToken
        }
      }
    )
  }



  //***************************************************** */

  getUserOrders(id:string):Observable<any>
  {
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}` ,
      {
        headers:{
          token:this.myToken
        }
      }
    )
  }


  getId():any
  {
  
    if(this.myToken!== null)
    {
      this.IDgetProduct=jwtDecode(this.myToken);
      return this.IDgetProduct.id
    }

  }
}
