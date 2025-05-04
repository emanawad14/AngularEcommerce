import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient:HttpClient) { }

  geTCategory():Observable<any>
  {
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }
  
  geTSpacificCategory(id:string |null):Observable<any>
  {
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }



  getAllSubCategory():Observable<any>
  {
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/subcategories`)
  }
  getAllSpesificSubCategory(id:string):Observable<any>
  {
    return this.httpclient.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`)
  }



}
