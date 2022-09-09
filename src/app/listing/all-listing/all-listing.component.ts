import { map, Observable, startWith } from 'rxjs';
import { ListingService } from './../service/listing.service';
import { Component, OnInit } from '@angular/core';
import { Listing } from '../model/listing';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingComponent implements OnInit {

  originalData: Listing[];
  listings$ : Observable<Listing[]>

  obj = new FormControl('');
  frmGroup: FormGroup;

  constructor(private listingService : ListingService, private fb: FormBuilder) {
    this.frmGroup = fb.group({
      obj: [],
    });
  }

  ngOnInit(): void {
    // this.listings$ = this.listingService.getListings();
    this.listingService.getListings().subscribe((data: Listing[]) => {
      this.originalData = data;
      if (this.originalData && this.originalData.length > 0) {
        this.listings$ = this.frmGroup.get('obj')!.valueChanges.pipe(
          startWith(''),
          map((text) => this.search(text, this.originalData))
        );
      }
    });
  }
  search(text: string, listings: Listing[]): any {
    return listings.filter((listing: Listing) => {
      const term = text.toLowerCase();
      return listing.title && listing.title.toLowerCase().includes(term);
    });

  }

}
