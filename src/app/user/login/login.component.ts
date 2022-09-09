import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public error = true;
  message: any;
  messageClass: any;

  loginForm = new FormGroup({
    email : new FormControl("", Validators.compose([Validators.required, Validators.email])),
    password : new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
  });

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    if(this.loginForm.valid){
      this.userService.Login(this.loginForm.value).subscribe(data=>{
        // localStorage.setItem('token', data.token);
        // this.loginForm.reset();
        // this.router.navigate(['/listings']);
        if (!data.success) {
          this.error = true;
          this.messageClass = 'alert alert-warning';
          this.message = data.message;
        } else {
          this.error = false;
          localStorage.setItem('token', data.token);
          this.loginForm.reset();
          this.router.navigate(['/listings']);
        }
      },
      err=>{
        console.log(err);

      })
    }
  }

}
