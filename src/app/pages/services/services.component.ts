import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category/category.service';
import { IcartDetails } from '../../shared/interfaces/icart-details';
import { ICategory } from '../../shared/interfaces/icategory';
import { DatePipe } from '@angular/common';
import * as AOS from 'aos';
import { RouterLink } from '@angular/router';
import { SubCate } from '../../shared/interfaces/sub-cate';

@Component({
  selector: 'app-services',
  imports: [ DatePipe , RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  private readonly categoryServices=inject(CategoryService);
  Categories:ICategory[]=[];

  subCategorirs:SubCate[]=[]

  ngOnInit(): void {
      this.getCategory();
      this.getAllSubCategory();
      AOS.init();
  }

  getCategory():void
  {
    this.categoryServices.geTCategory().subscribe({
   next:(res)=>
   {
    console.log(res.data);
    this.Categories=res.data;
    
   },
   error:(rtt)=>
   {
    console.log(rtt);
    
   }
    })
  }



  getAllSubCategory():void
  {
    this.categoryServices.getAllSubCategory().subscribe(
      {
        next:(res)=>
        {

          this.subCategorirs=res.data;
           console.log(res.data);

        }
      }
    )
  }

}
