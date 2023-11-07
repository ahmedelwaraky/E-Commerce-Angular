import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CartService {

    numberOfCartItem = new BehaviorSubject(0);


    constructor(private _httpclient: HttpClient) {
        this.getLoggedUserCart().subscribe({
            next:((response)=>{
                console.log(response);
                this.numberOfCartItem.next(response.numOfCartItems)

            }),
            error:((err)=>{
                console.log(err);
                
            })
        })
    }

Headers :any=  {
    token:localStorage.getItem('userToken') 
}

    addToCart(productIdx: string) : Observable <any> {
        return this._httpclient.post(
            `https://route-ecommerce.onrender.com/api/v1/cart`,
            {productId: productIdx,},    //product that i added it 
            {headers:this.Headers,}   //token 
        );
    }

    getLoggedUserCart(): Observable <any> {
        return this._httpclient.get(
            `https://route-ecommerce.onrender.com/api/v1/cart`,
            {headers:this.Headers,}   //token 
        );
    }


    removeCartItem(productIdx: string){
        return this._httpclient.delete(
            `https://route-ecommerce.onrender.com/api/v1/cart/${productIdx}`,
            {headers:this.Headers,}   //token 
        );
    }

    updateItemCount(productIdx: string ,countx:number){
        return this._httpclient.put(
            `https://route-ecommerce.onrender.com/api/v1/cart/${productIdx}`, 
            {count : countx},
            {headers:this.Headers}
        );
    }

    onlinePayment(shippingAdress:any , cartId :string){
        return this._httpclient.post(
            `https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`, 
            {shippingAddress:shippingAdress},
            {headers:this.Headers},
        );
    }
}
