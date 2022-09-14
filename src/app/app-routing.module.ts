import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllListingComponent } from './listing/all-listing/all-listing.component';

const routes: Routes = [
  { path: '',   redirectTo: '/listing', pathMatch: 'full' },
  {
      path: 'listings',
      loadChildren: () => import('./listing/listing.module').then(mod => mod.ListingModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
