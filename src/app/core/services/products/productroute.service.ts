import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductrouteService {

  constructor(private HttpClient:HttpClient) { }

  getAllProducts():Observable<any>
  {
    return this.HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  getAllSpaseficProducts(id:string |null):Observable<any>
  {
    return this.HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
}
