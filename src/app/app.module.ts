import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { FooterComponent } from './component/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './component/product-details/product-details.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './component/slider/slider.component';
import { SeeMorePipe } from './see-more.pipe';
import { SearchPipe } from './search.pipe';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    FooterComponent,
    ProductDetailsComponent,
    SliderComponent,
    SeeMorePipe,
    SearchPipe,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule, // Required for animations
    ToastrModule.forRoot({
      timeOut: 3000, // Toast timeout duration in milliseconds (optional)
      positionClass: 'toast-top-right', // Toast position (optional)
      preventDuplicates: true, // Prevent duplicate toasts (optional)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
