import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpclient:HttpClient) { }

  getAllBrand():Observable<any>
  {
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  getSpecificAllBrand(id:string):Observable<any>
  {
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }

}
