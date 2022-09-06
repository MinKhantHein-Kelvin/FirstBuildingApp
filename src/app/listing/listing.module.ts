import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingRoutingModule } from './listing-routing.module';
import { AllListingComponent } from './all-listing/all-listing.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { AddListingComponent } from './add-listing/add-listing.component';


@NgModule({
  declarations: [
    AllListingComponent,
    ListingDetailComponent,
    AddListingComponent
  ],
  imports: [
    CommonModule,
    ListingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListingModule { }
