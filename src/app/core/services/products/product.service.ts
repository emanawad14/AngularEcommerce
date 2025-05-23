import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }

  sendDataProduct():Observable<any>
  {
    return this.http.get('https://fakestoreapi.in/api/products?limit=150')

  }
}
