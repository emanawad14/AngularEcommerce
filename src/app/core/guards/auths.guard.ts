import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authsGuard: CanActivateFn = (route, state) => {


 const router=inject(Router);
 const toastrService=inject(ToastrService);
 const id =inject(PLATFORM_ID)
 if(isPlatformBrowser(id))
  {
    if(localStorage.getItem('usertoken')!== null)
      {
        return true ;
      }
      else{
        toastrService.warning("You cannot access this page. Please enter your data first");
        router.navigate(['/login']);
        return false;
      }
  } 
  else{
    return false
  }
 
};
