import { Component, inject, OnInit } from '@angular/core';
import { BrandService } from '../../core/services/brand/brand.service';
import { Ibrand } from '../../shared/interfaces/ibrand';
import { DatePipe } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-aboutus',
  imports: [DatePipe,],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.scss'
})
export class AboutusComponent  implements OnInit {
  private readonly brandService=inject(BrandService);

  brands:Ibrand[]=[]

  ngOnInit(): void {
      this.getBrand();
      AOS.init();
  }

  getBrand():void
  {
  this.brandService.getAllBrand().subscribe({
    next:(res)=>
    {
      console.log(res.data);
      this.brands=res.data
      

    }
  })

  }


}
