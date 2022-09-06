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

  loginForm = new FormGroup({
    email : new FormControl("",Validators.required),
    password : new FormControl("", Validators.required)
  });

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    if(this.loginForm.valid){
      this.userService.Login(this.loginForm.value).subscribe(data=>{
        console.log(data);
        localStorage.setItem("token", data.token)
        this.loginForm.reset();
        this.router.navigate(['/listings']);
      },
      err=>{
        console.log(err);

      })
    }
  }

}
