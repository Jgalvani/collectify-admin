import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingCarComponent } from './listing-car.component';
import { ListingCarRoutingModule } from './listing-car-routing.module';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    ListingCarComponent
  ],
  imports: [
    CommonModule,
    ListingCarRoutingModule,
    SharedModule,
  ]
})
export class ListingCarModule { }
