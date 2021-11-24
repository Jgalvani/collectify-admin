import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingColorDetailComponent } from './listing-color-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListingColorDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingColorDetailRoutingModule { }
