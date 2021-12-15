import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListingNavigationComponent } from 'src/app/components/listing-navigation/listing-navigation.component';
import { ListColorsPipe } from './pipes/list-colors/list-colors.pipe';
import { CarNamePipe } from './pipes/car-name/car-name.pipe';
import { ColorNamePipe } from './pipes/color-name/color-name.pipe';


@NgModule({
  declarations: [
    ListingNavigationComponent,
    ListColorsPipe,
    CarNamePipe,
    ColorNamePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListingNavigationComponent,
    ListColorsPipe,
    FormsModule,
    ReactiveFormsModule,
    CarNamePipe,
    ColorNamePipe,
  ]
})
export class SharedModule { }
