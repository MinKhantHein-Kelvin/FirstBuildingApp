import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Listing } from '../model/listing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  public base_Url = 'http://localhost:4000/api/listing';

  private httpOptions = {
      headers : new HttpHeaders().set('Content-Type','application/json').set('auth-token', localStorage.getItem('token')|| '{}')
    };

  constructor(private http$: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http$.get<Listing[]>(this.base_Url);
  }

  getListing(id:string){
    return this.http$.get<Listing>(`${this.base_Url}/${id}`);
  }

  addListing(listing : any){
    return this.http$.post<any>(`${this.base_Url}`, listing , this.httpOptions)
  }
}
