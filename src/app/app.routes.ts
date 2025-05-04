import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { authsGuard } from './core/guards/auths.guard';
import { homeGuard } from './core/guards/home/home.guard';

export const routes: Routes = 
[
    {path:'' ,redirectTo:'home' , pathMatch:'full' ,title:'home'},
    {path:'' , component:AuthLayoutComponent , canActivate:[homeGuard]  , children:
        [
            {path:'login' ,loadComponent:()=>import('./pages/login/login.component').then((c)=>c.LoginComponent) ,title:'login' },
            {path:'register' ,loadComponent:()=>import('./pages/register/register.component').then((c)=>c.RegisterComponent) ,title:'register' },
            {path:'forgetpassword' ,loadComponent:()=>import('./pages/forgetpassword/forgetpassword.component').then((c)=>c.ForgetpasswordComponent) ,title:'ForgetPassword' },
        ],
    },

    {path:'' , component:BlankLayoutComponent , canActivate:[authsGuard] ,children:
        [
          
            {path:'home' , loadComponent:()=> import('./pages/home/home.component').then((c)=>c.HomeComponent) ,title:'home'},
            {path:'details/:id' , loadComponent:()=> import('./pages/details/details.component').then((c)=>c.DetailsComponent) ,title:'details'},
            {path:'services' , loadComponent:()=> import('./pages/services/services.component').then((c)=>c.ServicesComponent) ,title:'services'},
            {path:'category/:id' , loadComponent:()=> import('./pages/categry-details/categry-details.component').then((c)=>c.CategryDetailsComponent) ,title:'category'},
            {path:'product' , loadComponent:()=> import('./pages/products/products.component').then((c)=>c.ProductsComponent),
                
                children:[
                    {path:'gaming' ,loadComponent:()=>import('./pages/gaming/gaming.component').then((c)=>c.GamingComponent)},
                    {path:'mobile' ,loadComponent:()=>import('./pages/mobile/mobile.component').then((c)=>c.MobileComponent)},
                   
                    {path:'laptops' ,loadComponent:()=>import('./pages/laptops/laptops.component').then((c)=>c.LaptopsComponent)},
                    {path:'tv' ,loadComponent:()=>import('./pages/tv/tv.component').then((c)=>c.TvComponent)},
                ],title:'product'},



            {path:'aboutus' , loadComponent:()=> import('./pages/aboutus/aboutus.component').then((c)=>c.AboutusComponent) ,title:'aboutus'},
            {path:'blog' , loadComponent:()=> import('./pages/blog/blog.component').then((c)=>c.BlogComponent) ,title:'blog'},
            {path:'contactus' , loadComponent:()=> import('./pages/contactus/contactus.component').then((c)=>c.ContactusComponent) ,title:'contactus'},
            {path:'cart' , loadComponent:()=> import('./pages/cart/cart.component').then((c)=>c.CartComponent) ,title:'cart'},
            {path:'wishlist' , loadComponent:()=> import('./pages/wishlist/wishlist.component').then((c)=>c.WishlistComponent) ,title:'wishlist'},
            {path:'checkout/:id' , loadComponent:()=> import('./pages/checkout/checkout.component').then((c)=>c.CheckoutComponent) ,title:'checkout'},
            {path:'allorders' , loadComponent:()=> import('./pages/allorders/allorders.component').then((c)=>c.AllordersComponent) ,title:'allorders'},
           
        ]
     },












];
