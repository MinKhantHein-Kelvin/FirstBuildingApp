import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public base_Url = 'http://localhost:4000/api/user';

  constructor(private http$ : HttpClient) { }

  Register(user:any){
    return this.http$.post<any>(`${this.base_Url}/register`,user);
  }

  Login(user:any){
    return this.http$.post<any>(`${this.base_Url}/login`,user);
  }
}
