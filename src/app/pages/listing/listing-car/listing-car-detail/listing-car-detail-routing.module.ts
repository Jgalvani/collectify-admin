import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListingCarDetailComponent } from "./listing-car-detail.component";

const routes: Routes = [
  {
    path: "",
    component: ListingCarDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingCarDetailRoutingModule {}
