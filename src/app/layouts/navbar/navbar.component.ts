import { Component, computed, inject, Input, input, OnInit, Signal, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthsService } from '../../core/services/ayths/auths.service';
import { CartService } from '../../core/services/cart/cart.service';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit  {
 private readonly hamada=inject(AuthsService);
 private readonly CartService=inject(CartService);
 private readonly WishlistService=inject(WishlistService);

  countitem:Signal<number>=computed(()=>this.CartService.cartNumber());
  countWish:Signal<number>=computed(()=>this.WishlistService.wishNumber());
  @Input() isLogin:boolean=true;

  ngOnInit(): void {
 this.CartService.getLoggedCart().subscribe(
  {
    next:(ree)=>
    {
      this.CartService.cartNumber.set(ree.numOfCartItems);
      
    }

  }
 );

 this.WishlistService.getLoggedUserWishlist().subscribe({
  next:(res)=>
  {
   this.WishlistService.wishNumber.set(res.count)
  }
 })
  }

  
  signOut():void
  {
    this.hamada.signoutServices()

  }
      
  


}
