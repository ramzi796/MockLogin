import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';
import { LoginService } from './login.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  user: UserModel = {
    email: "",
    password: ""
  };
  username: string;
  password: string;
  submitted: boolean = false;

  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private loginService: LoginService) { }

  login() {
    if(this.emailFormControl.valid && this.passwordFormControl.valid) {
      this.user.email = this.username;
      this.user.password = this.password;
      this.loginService.loaduser(this.user);

      this.router.navigateByUrl("/home");
    }
  }

}
