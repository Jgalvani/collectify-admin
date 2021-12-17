import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListingColorComponent } from "./listing-color.component";

const routes: Routes = [
  {
    path: "",
    component: ListingColorComponent,
  },
  {
    path: "detail",
    loadChildren: () =>
      import("./listing-color-detail/listing-color-detail.module").then(
        (m) => m.ListingColorDetailModule
      ),
  },
  {
    path: "detail/:id",
    loadChildren: () =>
      import("./listing-color-detail/listing-color-detail.module").then(
        (m) => m.ListingColorDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingColorRoutingModule {}
