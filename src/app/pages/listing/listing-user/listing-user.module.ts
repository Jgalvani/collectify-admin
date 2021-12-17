import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListingUserComponent } from "./listing-user.component";
import { ListingUserRoutingModule } from "./listing-user-routing.module";
import { SharedModule } from "src/app/shared.module";

@NgModule({
  declarations: [ListingUserComponent],
  imports: [CommonModule, ListingUserRoutingModule, SharedModule],
})
export class ListingUserModule {}
