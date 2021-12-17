import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListingCarDetailComponent } from "./listing-car-detail.component";
import { ListingCarDetailRoutingModule } from "./listing-car-detail-routing.module";
import { SharedModule } from "src/app/shared.module";

@NgModule({
  declarations: [ListingCarDetailComponent],
  imports: [CommonModule, SharedModule, ListingCarDetailRoutingModule],
})
export class ListingCarDetailModule {}
