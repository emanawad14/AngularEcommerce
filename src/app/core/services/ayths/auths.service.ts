import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  constructor( private httpclient:HttpClient ) { }

  private readonly router=inject(Router);
  private readonly ToastrService=inject(ToastrService);
  userData:any =null;


  // Data Product Route 

  getDataProductRoute():Observable<any>
  {
    return this.httpclient.get('https://ecommerce.routemisr.com/api/v1/products/6428de2adc1175abc65ca05b')
  }
   //*********************************************** */
  // Marawan Product Audio
  getApiAudio():Observable<any>
  {
    return this.httpclient.get('https://fakestoreapi.in/api/products/1');
  }
//*********************************************** */
// Marawan Product mobile

getApiMobile():Observable<any>
{
  return this.httpclient.get('https://fakestoreapi.in/api/products/category?type=mobile');
}

//*********************************************** */
// Marawan Product tv

getApiTV():Observable<any>
{
  return this.httpclient.get('https://fakestoreapi.in/api/products?page=2');
}

//*********************************************** */
// Marawan Product gaming

getApigaming():Observable<any>
{
  return this.httpclient.get('https://fakestoreapi.in/api/products?limit=20');
}










  getregisterData(data:object):Observable<any>
  {
    return this.httpclient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,data)
  }

  
  getLoginData(data:object):Observable<any>
  {
    return this.httpclient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,data)
  }

saveUserToken():void
{
  if(localStorage.getItem('usertoken')!==null)
  {
   this.userData=  jwtDecode (localStorage.getItem('usertoken')!)
  }
}



signoutServices():void
{
  localStorage.removeItem('usertoken');
  this.userData=null;
   this.ToastrService.info('Please, my dear, fill out the information again')

  this.router.navigate(['/register']);

}


EmailSignUP(data:object):Observable<any>
{
  return this.httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords' ,data)
}



CodeSignUP(data:object):Observable<any>
{
  return this.httpclient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode' ,data)
}



PasswordSignUP(data:object):Observable<any>
{
  return this.httpclient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword' ,data)
}



}
