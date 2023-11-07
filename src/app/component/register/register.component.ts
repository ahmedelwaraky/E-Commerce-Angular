import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/models/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
constructor(private _authService: AuthService, private _router: Router ,) {
    if(localStorage.getItem("userToken")!== null){
        this._router.navigate(['/home'])
    }
}

  //get Data From Input

    isLoading :boolean = false;
    apiError:string ="";

    registerForm: FormGroup = new FormGroup({
        name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
        ]),
        rePassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/),
        ]),
        phone: new FormControl(null, [Validators.required]),
        // Validators.pattern(/ ^01[0-2,5]{1}[0-9]{8}$/)
    });

    //Register Handeling
    handleRegister(registerForm: FormGroup) {
        this.isLoading = true;
        if (registerForm.valid) {
        //register
        this._authService.register(registerForm.value).subscribe({
            next: (response) => {
            console.log(response);
            if (response.message === 'success') {
                this.isLoading= false;
                this._router.navigate(['/login']);
            }
            },
            error: (err) => {
                this.isLoading= false;
                this.apiError =err.error.errors.msg
                console.log(err.error.errors.msg);
            },
        });
        }

        console.log(registerForm);
    }
}
