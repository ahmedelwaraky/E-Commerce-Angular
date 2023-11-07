import { Component } from '@angular/core';
import { AuthService } from 'src/app/models/auth.service';
import { CartService } from 'src/app/models/cart.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    })
    export class NavbarComponent {
    isLogin: Boolean = false;
    cartNumber:number= 0; 



    //logOut
    logOut(){   
        this._authService.logOut()   //=> logout from service 
    }



    constructor(private _authService: AuthService , private _cartservice :CartService) {
        _authService.userData.subscribe({
            next:()=>{
                if(_authService.userData.getValue() !==null){
                    this.isLogin=true
                }
                else{
                    this.isLogin = false
                }
            },
        })

        //number up the cart
            _cartservice.numberOfCartItem.subscribe({
                next:((x)=>{
                    this.cartNumber = x;
                })
            })
    }

    
}
