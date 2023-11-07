import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs'   //refresh login
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData = new BehaviorSubject(null);   //token

    constructor(private _httpClient:HttpClient  ,  private _router: Router) {
        // to save user sign
        if(localStorage.getItem('userToken') !== null){
            this.decodeUserData()
        }
    }

    //register
    register(userData:object):Observable<any> {
        return this._httpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup' , userData)
    }

    //Login
    login(userData:object):Observable<any> {
        return this._httpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin' , userData)
    }

    //jwt
    decodeUserData(){
        let encodedToken = JSON.stringify(localStorage.getItem("userToken"))   //just encoded ut get from local storage
        let decodedToken:any  = jwtDecode(encodedToken)                        //transform from encoded to decoded 
        console.log(decodedToken);
        this.userData .next (decodedToken)        
    }


    //logOut
    logOut(){
        localStorage.removeItem('userToken')
        this.userData.next(null);
        this._router.navigate(['/login'])
    }
} 
