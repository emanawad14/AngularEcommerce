import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderaService } from '../../core/services/orders/ordera.service';
import { CartService } from '../../core/services/cart/cart.service';
import { ActivatedRoute } from '@angular/router';
import { IcartDetails } from '../../shared/interfaces/icart-details';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  private readonly orderservices=inject(OrderaService);
  private readonly CartService=inject(CartService);
  private readonly ActivatedRoute=inject(ActivatedRoute);

  isLoading:boolean=false;
  CartID:string=''
  
  ngOnInit(): void {
      this.checkoutForm
      
      this.getCartOroductId()
  }

  checkoutForm:FormGroup=new FormGroup({
    details :new FormControl(null , [Validators.required]),
    city :new FormControl(null , [Validators.required]),
    phone :new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })



  getCartOroductId():void{
    this.ActivatedRoute.paramMap.subscribe({
      next:(p)=>
      {
        this.CartID=p.get('id')!
       
        
      }
    })
  }


  PaymentOnline():void
  {
    this.isLoading=true
   console.log(this.checkoutForm.value);
   this.orderservices.CheckSeesionOnline(this.CartID , this.PaymentOnline).subscribe
   ({
     next:(res)=>
     {
       console.log(res);
       if(res.status === 'success')
       {
        open(res.session.url , '_self')
       }

     },
     error:(rtt)=>
     {
       console.log(rtt);
       
     }
   })
    this.checkoutForm.value;
   
    // this.orderservices.CheckSeesionOnline(this.checkoutForm ,)
  }
  

}
