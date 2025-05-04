import { IcartDetails } from './../../shared/interfaces/icart-details';
import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart/cart.service';

import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {

  isLoading:boolean=false;
  private readonly cartServices=inject(CartService);

  CartDetails:IcartDetails={} as IcartDetails;

  ngOnInit(): void {
      this.getLogged()
  }
//******************** Get Logged ************************************ */


  getLogged():void{
    this.cartServices.getLoggedCart().subscribe(
      {
        next:(res)=>
        {
          this.CartDetails=res.data;
         console.log(res.data);

        },
        error:(err)=>
        {
          console.log(err);
          
        }
      }
    )
  }
//********************  Delete ************************************ */

DeleteCaryItem(id:string):void
{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.cartServices.RemoveSpecificCartItem(id).subscribe({
        next:(res)=>
          {
            this.CartDetails=res.data;
            this.cartServices.cartNumber.set(res.numOfCartItems)
           console.log(res.data);
           Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
    
          },
          error:(err)=>
          {
            console.log(err);
            
          }
        
      })
      
  
  
    
      
    }
  });
 
  
}


//********************   UpDate ************************************ */

UpDateDate(id:string,count:number):void
{
  this.cartServices.UpDataCartProduct(id,count).subscribe({
    next:(res)=>
      {
        this.CartDetails=res.data;
       console.log(res.data);

      },
      error:(err)=>
      {
        console.log(err);
        
      }

  })
}




ClearItemss():void
{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      this.cartServices.ClearItemsProducts().subscribe(
        {
          next:(res)=>
            {
             console.log(res.data);
             this.cartServices.cartNumber.set(0)
             if(res.message === 'success')
             {
             this.CartDetails ={} as IcartDetails;

             Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
             }
      
            },
            error:(err)=>
            {
              console.log(err);
              
            }
    
        }
      )
     
      
    }
  });

 
  
}
}
