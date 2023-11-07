import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/models/cart.service';





@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private _cartservice : CartService){}


  shippingAddress :FormGroup = new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null),
  })

  handleSubmit(shippingAddress:FormGroup){
    console.log(shippingAddress.value);
    this._cartservice.onlinePayment(shippingAddress.value, "65248b49cae2040034abe3fa").subscribe ({
      next:((response:any)=>{
        console.log(response.session.url);
        this.navigateToPage(response.session.url)
      }),
      error:((err)=>{
        console.log(err);
        
      })
    }) 
  }

  navigateToPage(url:string){
    window.location.href=url
  }

}
