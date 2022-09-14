import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/listings', pathMatch: 'full' },
  {
      path: 'listings',
      loadChildren: () => import('./listing/listing.module').then(mod => mod.ListingModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
  },
  { path: '**', component: PageNotFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
