import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListingService } from './../service/listing.service';
import { Listing } from './../model/listing';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {
  id : any = "";

  listing :Listing;

  listingSub$ : Subscription;

  showForm: boolean;

  editListingForm = new FormGroup({
    title : new FormControl("", [Validators.required]),
    price : new FormControl("", [Validators.required]),
    locality : new FormControl("", [Validators.required]),
    details : new FormControl("", [Validators.required]),
  })

  constructor(private listingService : ListingService, private route : ActivatedRoute, private router : Router, public userService : UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.listingSub$ = this.listingService.getListing(this.id).subscribe(data=>{
      if(data){
        this.listing = data;
      }
    });
  }

  ngOnDestroy(): void {
    this.listingSub$.unsubscribe();
  }

  showEdit(){
    this.showForm = !this.showForm;
  }

  editListing(){
    this.id = this.route.snapshot.paramMap.get("id");
    if(this.editListingForm.valid){
      this.listingService.editListing(this.editListingForm.value,this.id).subscribe(data=>{
        this.editListingForm.reset();
        this.router.navigate(['/listings'])
      })
    }
  }

  removeListing(){
    this.id = this.route.snapshot.paramMap.get("id");
    this.listingService.deleteListing(this.id).subscribe(data=>
      {
        // console.log(data);
        this.router.navigate(['/listings'])
      }
      )
  }

}
