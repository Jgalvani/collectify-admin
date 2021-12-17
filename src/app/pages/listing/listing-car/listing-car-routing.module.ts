import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListingCarComponent } from "./listing-car.component";

const routes: Routes = [
  {
    path: "",
    component: ListingCarComponent,
  },
  {
    path: "detail",
    loadChildren: () =>
      import("./listing-car-detail/listing-car-detail.module").then(
        (m) => m.ListingCarDetailModule
      ),
  },
  {
    path: "detail/:id",
    loadChildren: () =>
      import("./listing-car-detail/listing-car-detail.module").then(
        (m) => m.ListingCarDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingCarRoutingModule {}
