// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Listing } from '../model/listing';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ListingService {
//   private ROOT_URL = "http://localhost:4000/api/crud";

//   constructor(private http : HttpClient) { }

//   getListings() : Observable<Listing[]>{
//     return this.http.get<Listing[]>(this.ROOT_URL);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from '../model/listing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  public base_Url = 'http://localhost:4000/';
  // public base_Url = '';
  constructor(private http$: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http$.get<Listing[]>(this.base_Url + 'api/listing');
  }
}
