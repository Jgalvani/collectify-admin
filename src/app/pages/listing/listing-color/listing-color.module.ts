import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListingColorComponent } from './listing-color.component';
import { ListingColorRoutingModule } from './listing-color-routing.module';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    ListingColorComponent
  ],
  imports: [
    CommonModule,
    ListingColorRoutingModule,
    SharedModule,
  ]
})
export class ListingColorModule { }
