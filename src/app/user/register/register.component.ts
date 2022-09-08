import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name : new FormControl("", Validators.compose([Validators.required, Validators.maxLength(25)])),
    email : new FormControl("", Validators.compose([Validators.required, Validators.email])),
    password : new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
    confirmPassword: new FormControl('', Validators.compose([
      Validators.required,
      this.passwordsMatch,
    ])),
  });

  get Username() {
    return this.registerForm.get('name');
  }

  get Email() {
    return this.registerForm.get('email');
  }

  get Password() {
    return this.registerForm.get('password');
  }

  get ConfirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  passwordsMatch(control: FormControl) {
    const password = control.root.get('password');
    return password && control.value != password.value
      ? {
          passwordMatch: true,
        }
      : null;
  }


  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  userRegister(){
    if(this.registerForm.valid){
      this.userService.Register(this.registerForm.value).subscribe(data=>{
          // console.log(data)
          this.registerForm.reset();
          this.router.navigate(['user/login']);
      })
    }

  }
}
