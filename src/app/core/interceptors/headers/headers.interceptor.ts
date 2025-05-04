import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {

  const hamad=inject(PLATFORM_ID)

  if(isPlatformBrowser(hamad)){
    if(localStorage.getItem('usertoken'))

   
      {
        req=req.clone({
          setHeaders:
          {
            token:localStorage.getItem('usertoken')!
          }
        })
      }

  }
  
  
  return next(req);
};
