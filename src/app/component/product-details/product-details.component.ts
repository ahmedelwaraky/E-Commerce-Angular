import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/models/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
    productId :any ;
    productDetails :any;


    constructor(private _activeROute: ActivatedRoute , private _productService:ProductService) {}

    ngOnInit(): void {
        this._activeROute.paramMap.subscribe((params)=>{
            console.log(params.get('id'));  //from path
            this.productId = params.get('id')   //get id and equel by varible that i made it 
            this._productService.getproductById(this.productId).subscribe({
                next:((response)=>{
                    console.log(response.data);
                    this.productDetails = response.data
                    
                })
            })
        })
    }

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
        },
        nav: true
    }

}
