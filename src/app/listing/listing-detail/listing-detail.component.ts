import { ListingService } from './../service/listing.service';
import { Listing } from './../model/listing';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {
  id : any = "";

  listing :Listing;

  listingSub$ : Subscription;

  constructor(private listingService : ListingService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.listingSub$ = this.listingService.getListing(this.id).subscribe(listing=>{
      this.listing = listing;
    });
  }

  OnDestroy(): void {
    this.listingSub$.unsubscribe();
  }

}
