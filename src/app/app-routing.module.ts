import { SettingsModule } from './settings/settings.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './component/register/register.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { authGuard } from './component/auth.guard';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path : ''  ,component :LoginComponent },
  {path : 'home' , canActivate: [AuthGuard] , component :HomeComponent},
  {path : 'login' ,  component :LoginComponent  },
  {path : 'register' , component : RegisterComponent},
  {path : 'product/details/:id' ,  canActivate: [AuthGuard] , component : ProductDetailsComponent},
  {path : 'cart' , canActivate: [AuthGuard] ,  component : CartComponent},
  {path : 'checkout' , canActivate: [AuthGuard] ,  component : CheckoutComponent},
  {path : 'settings' ,  canActivate: [AuthGuard] , loadChildren:()=> import('./settings/settings.module').then((m)=>m.SettingsModule )},
  {path : '**' , component : NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
