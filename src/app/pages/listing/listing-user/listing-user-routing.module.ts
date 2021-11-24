import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingUserComponent } from './listing-user.component';

const routes: Routes = [
  {
    path: '',
    component: ListingUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingUserRoutingModule { }
