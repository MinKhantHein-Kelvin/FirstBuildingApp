import { AddListingComponent } from './add-listing/add-listing.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllListingComponent } from './all-listing/all-listing.component';

const routes: Routes = [
  {
    path:"",
    component : AllListingComponent
  },
  {
    path : "add-listing",
    component : AddListingComponent
  },
  {
    path : ":id",
    component : ListingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule { }
