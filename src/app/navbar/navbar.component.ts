import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService : UserService) { }

  ngOnInit(): void {
  }

}
