import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingService } from './../service/listing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  listingForm = new FormGroup({
    title : new FormControl("", [Validators.required]),
    price : new FormControl("", [Validators.required]),
    locality : new FormControl("", [Validators.required]),
    details : new FormControl("", [Validators.required]),

  })

  constructor(private ListingService : ListingService, private router : Router) { }

  ngOnInit(): void {
  }

  newListing(){
    if(this.listingForm.valid){
      this.ListingService.addListing(this.listingForm.value).subscribe(data=>{
        if(data){
          this.listingForm.reset();
        this.router.navigate(['/listings']);
        }
      })
    }
  }

}
