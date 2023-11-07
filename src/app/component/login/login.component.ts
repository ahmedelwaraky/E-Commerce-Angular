import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/models/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private _authService: AuthService, private _router: Router ,private toastr: ToastrService) 
    {
        if(localStorage.getItem("userToken")!== null){
            this._router.navigate(['/home'])
        }
    }

  //get Data From Input

    isLoading :boolean = false;
    apiError:string ="";

    loginForm: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
        ]),
    });

    //login Handeling
    handlelogin(loginForm: FormGroup) {
        this.isLoading = true;
        if (loginForm.valid) {
        //login
        this._authService.login(loginForm.value).subscribe({
            next: (response) => {
            console.log(response);
            if (response.message === 'success') 
            {
                localStorage.setItem("userToken" , response.token)  //set at local storage
                this._authService.decodeUserData();
                this.isLoading= false;
                this.toastr.success("You logged In Successfuly")
                this._router.navigate(['/home']);
            }
            },
            error: (err) => {
                this.isLoading= false;
                this.apiError =err.error.errors.msg
                console.log(err.error.errors.msg);
                this.toastr.error("Something went wrong please try again")
            },
        });
        }

        console.log(loginForm);
    }
}
