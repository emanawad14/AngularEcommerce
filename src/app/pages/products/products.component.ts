

import { Component, inject, OnInit } from '@angular/core';
import { AuthsService } from '../../core/services/ayths/auths.service';
import { Productsroute } from '../../shared/interfaces/productsroute';
import { ProductService } from '../../core/services/products/product.service';
import { Iproducts } from '../../shared/interfaces/iproducts';
import * as AOS from 'aos';
import { GamingComponent } from "../gaming/gaming.component";


import { MobileComponent } from "../mobile/mobile.component";
import { LaptopsComponent } from "../laptops/laptops.component";
import { TvComponent } from "../tv/tv.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from '../../core/services/cart/cart.service';



@Component({
  selector: 'app-products',
  imports: [ RouterOutlet , RouterLink, RouterLinkActive],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private readonly hamada=inject(AuthsService);
  private readonly ProductService=inject(ProductService);
  private readonly CartService=inject(CartService);
  products:Productsroute[]=[];

  marawanProducts:Iproducts[]=[];





 
  


  productServices():void
  {
    this.ProductService.sendDataProduct().subscribe(
              {
          next :(res)=>
          {
           
            this.marawanProducts=res.products
            console.log(res.products);
            
  
          }
          ,
          error:(ree)=>
          {
            console.log(ree);
            
          }
        }

      
    )
  }

  getData():void
  {
    this.hamada.getDataProductRoute().subscribe(
      {
        next :(res)=>
        {
           this.products = res.data
          console.log(res.data);
          

        }
        ,
        error:(ree)=>
        {
          console.log(ree);
          
        }
      }
    )
  }

  ngOnInit(): void {
  // this.getData();
  this. productServices();
  AOS.init();
      
  }

  
  
}
