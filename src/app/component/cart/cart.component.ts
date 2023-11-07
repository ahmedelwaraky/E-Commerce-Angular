import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { CartService } from 'src/app/models/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    constructor(private _cartservice : CartService){}

    cartDetails:any = null; 

    ngOnInit(): void {
        this._cartservice.getLoggedUserCart().subscribe({
            next :((response)=>{
                console.log(response.data);
                this.cartDetails = response.data;
            }),
            error :((err)=>{
                console.log(err);
            }),
        })
    }

    //bridge
    removeItem(productIdx:string){
        this._cartservice.removeCartItem(productIdx).subscribe({
            next:((response:any)=>{
                console.log(response.data);
                this.cartDetails=response.data
            }),
            error:((err)=>{
                console.log(err);
            })
        })
    }

    // bridge
    update(productIdz: string, countz: number) {
        this._cartservice.updateItemCount(productIdz, countz).subscribe({
            next: (response: any) => {
                console.log(response.data);
                this.cartDetails = response.data;
            },
        });
    }
    

}
