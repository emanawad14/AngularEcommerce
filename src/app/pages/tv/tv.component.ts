import { Component, inject, OnInit } from '@angular/core';
import { AuthsService } from '../../core/services/ayths/auths.service';
import { ITV } from '../../shared/interfaces/itv';

@Component({
  selector: 'app-tv',
  imports: [],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.scss'
})
export class TvComponent implements OnInit {
  private readonly eman =inject(AuthsService);
  tv:ITV[]=[];

  getTV():void
  {
    this.eman.getApiTV().subscribe
    (
      {
        next:(tew)=>
          {
            if(tew.status === 'SUCCESS')
            {
           this.tv=tew.products;
            }
            console.log(tew.products);
        },
        error:(tre)=>
          {
            console.log(tre);
            


          }
      }
    )
  }

  ngOnInit(): void {
    this.getTV();
      
  }

}
