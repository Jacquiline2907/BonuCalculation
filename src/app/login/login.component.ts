import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, Validator, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';


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
export class LoginComponent implements OnInit {
  userNameForm: FormGroup;
  passwordForm: FormGroup;
  userName = true;
  password = false;
  inValidUserError = false;


  matcher = new MyErrorStateMatcher();
  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
   
    //localStorage.clear();
    this.userNameForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9_-]{6,14}$')])
    });

    this.passwordForm = new FormGroup({
      passwordF: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9_-]{6,14}$')
      ])
    });

  }

  onChange() {
    this.inValidUserError = false;
  }

  next() {
    this.loginService.isValidUser(this.userNameForm.controls['username'].value).subscribe((res) => {
      if (res) {
        this.userName = false;
        this.password = true;
        console.log('inside if');
      } else {
        console.log('inside else');
        this.inValidUserError = true;
        console.log('username ', this.userName);
        console.log('password', this.password);
        console.log('this.inValidUserError = ', this.inValidUserError);
      }
    });

  }

  submit() {
    this.loginService.isValidPassword(this.passwordForm.controls['passwordF'].value).subscribe((res) => {
      if (res) {
        // this.password = false;
        console.log("Successfully logged in");
        this.router.navigate(['mainPlans']);
       
      
      }
      else {
        this.inValidUserError = true;
        console.log('this.inValidUserError = ', this.inValidUserError);
        alert("Password is wrong.\nEnter Valid password");
      }
    })
  }



}
