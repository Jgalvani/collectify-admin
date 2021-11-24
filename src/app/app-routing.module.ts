import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listing',
    pathMatch: 'full'
  },
  {
    path: 'listing',
    loadChildren: () => import('./pages/listing/listing.module').then( m => m.ListingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
