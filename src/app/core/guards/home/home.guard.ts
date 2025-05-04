import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const homeGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const toastrService=inject(ToastrService);
   
  const id =inject(PLATFORM_ID);

  if(isPlatformBrowser(id))
  {
    if(localStorage.getItem('usertoken')!== null)
      {
       toastrService.warning("Do not leave the current page");
       router.navigate(['/home']);
        return false ;
      }
      else{
       
       
        return true;
      }
      
  }
  else
  {
    return false
  }
};
