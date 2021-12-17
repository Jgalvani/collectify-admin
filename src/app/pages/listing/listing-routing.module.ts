import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "user",
    pathMatch: "full",
  },
  {
    path: "user",
    loadChildren: () =>
      import("./listing-user/listing-user.module").then(
        (m) => m.ListingUserModule
      ),
  },
  {
    path: "car",
    loadChildren: () =>
      import("./listing-car/listing-car.module").then(
        (m) => m.ListingCarModule
      ),
  },
  {
    path: "color",
    loadChildren: () =>
      import("./listing-color/listing-color.module").then(
        (m) => m.ListingColorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingRoutingModule {}
