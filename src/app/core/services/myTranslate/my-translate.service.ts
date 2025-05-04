import { isPlatformBrowser } from '@angular/common';
import { Inject, inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  private render2:Renderer2


  constructor( private TranslateService:TranslateService  , 
    @Inject(PLATFORM_ID) private id:object
  ,  private renderer:RendererFactory2)
   {


    this.render2=this.renderer.createRenderer(null , null)
   
    if(isPlatformBrowser(id))
     {
      this.TranslateService.setDefaultLang('en')
      const savedLang  = localStorage.getItem('lang'); 
      if(savedLang){
        this.TranslateService.use(  savedLang  );
      }
      }
      this.changeDirection()
     }

 
     changeDirection():void
     {
      if(localStorage.getItem('lang')=== 'en')
      {
        this.render2.setAttribute(document.documentElement,'dir' ,'ltr');
        this.render2.setAttribute(document.documentElement,'lang' ,'en');
      }
      else if(localStorage.getItem('lang')=== 'ar')
      {
        this.render2.setAttribute(document.documentElement,'dir' ,'rtl');
        this.render2.setAttribute(document.documentElement,'lang' ,'ar');
      }
     }
  
}
