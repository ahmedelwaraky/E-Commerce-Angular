import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/models/cart.service';
import { ProductService } from 'src/app/models/product.service';
import { ToastrService } from 'ngx-toastr';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    })
    export class HomeComponent implements OnInit {

    products :any[] = [];    
    constructor(private _productService: ProductService , private _cartservice:CartService , private toastr: ToastrService) {}
    
    ngOnInit(): void {
        this._productService.getproducts().subscribe({
            next: ((response)=>{
                this.products = response.data;
            })
        })
    }

    addCart(productId:string){
        this._cartservice.addToCart(productId).subscribe({
            next:((response)=>{
                this._cartservice.numberOfCartItem.next(response.numOfCartItem)
                this.toastr.success("Items already Added")
                console.log(response);
            })   ,      
            error:(err)=>console.log(err)
        })
    }


}
