import { Component, inject, OnInit } from '@angular/core';
import { AuthsService } from '../../core/services/ayths/auths.service';
import { IGAMINGg } from '../../shared/interfaces/igamingg';

@Component({
  selector: 'app-gaming',
  imports: [],
  templateUrl: './gaming.component.html',
  styleUrl: './gaming.component.scss'
})
export class GamingComponent  implements OnInit {
  private readonly x =inject(AuthsService);
  gaming:IGAMINGg[]=[];

  getApiGaming():void
  {
    this.x.getApigaming().subscribe(
      {
        next:(res)=>
        {
          if(res.status === 'SUCCESS')
          {
            this.gaming=res.products;

            console.log(res.products);
          }
         
          
          

        },
        error:(tyu)=>
        {
          console.log(tyu);
          
        }
      }
    )
  }


  ngOnInit(): void {
    this.getApiGaming()
      
  }

}
