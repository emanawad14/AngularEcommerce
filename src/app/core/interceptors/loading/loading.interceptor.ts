import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const hamada=inject(NgxSpinnerService);

 // hamada.show();
  return next(req).pipe(finalize(()=>
  {
   hamada.hide();
  }));
};
