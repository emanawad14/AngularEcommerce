import { Component, inject, OnInit } from '@angular/core';
import { AuthsService } from '../../core/services/ayths/auths.service';
import { log } from 'console';
import { Mobile } from '../../shared/interfaces/mobile';

@Component({
  selector: 'app-mobile',
  imports: [],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.scss'
})
export class MobileComponent implements OnInit {

  private readonly x=inject (AuthsService);

  mobile:Mobile[]=[];

  getMobile():void{
    this.x.getApiMobile().subscribe(
      {
        next:(rwe)=>
        {
          if(rwe.status === 'SUCCESS')
          {
         this.mobile =rwe.products;
          }
          console.log(rwe.products);
          
        }
        ,
        error:(tyu)=>
        {
          console.log(tyu);
          
        }
      }
    )
  }

  ngOnInit(): void {
  this.getMobile()
      
  }



}
