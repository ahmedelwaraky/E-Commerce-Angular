import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpclient:HttpClient) {}
  
  //get al; product
  getproducts () :Observable <any>{
    return this._httpclient.get(`https://route-ecommerce.onrender.com/api/v1/products`)
  }
  
//get product by id (product details)
  getproductById (id:string) :Observable <any>{
    return this._httpclient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }
}
