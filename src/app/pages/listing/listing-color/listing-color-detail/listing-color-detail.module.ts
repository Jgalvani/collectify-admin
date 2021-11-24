import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListingColorDetailComponent } from './listing-color-detail.component';
import { ListingColorDetailRoutingModule } from './listing-color-detail-routing.module';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    ListingColorDetailComponent
  ],
  imports: [
    CommonModule,
    ListingColorDetailRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ListingColorDetailModule { }
