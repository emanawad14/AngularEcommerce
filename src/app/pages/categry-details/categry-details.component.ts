import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category/category.service';
import { ActivatedRoute } from '@angular/router';
import { IcartDetails } from '../../shared/interfaces/icart-details';
import { ICategory } from '../../shared/interfaces/icategory';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-categry-details',
  imports: [DatePipe],
  templateUrl: './categry-details.component.html',
  styleUrl: './categry-details.component.scss'
})
export class CategryDetailsComponent implements OnInit {
  private readonly CategoryService =inject(CategoryService);
  private readonly ActivatedRoute =inject(ActivatedRoute);
  categoryId:ICategory={} as ICategory
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe({
      next:(p)=>
      {
         let IdPro=p.get('id');
         this.CategoryService.geTSpacificCategory(IdPro).subscribe(
          {
            next:(res)=>
            {
              this.categoryId=res.data
              console.log(res.data);
              
            }
          }
         )
      }
    })
  }

  
  
}
