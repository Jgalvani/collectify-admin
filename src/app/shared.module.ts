import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { ListingNavigationComponent } from 'src/app/components/listing-navigation/listing-navigation.component';

// Pipes
import { ListColorsPipe } from './pipes/list-colors/list-colors.pipe';
import { CarNamePipe } from './pipes/car-name/car-name.pipe';
import { ColorNamePipe } from './pipes/color-name/color-name.pipe';

// Directives
import { ClickOutsideDirective } from './directives/click-outside/click-outside.directive';


@NgModule({
  declarations: [
    ListingNavigationComponent,
    ListColorsPipe,
    CarNamePipe,
    ColorNamePipe,
    ClickOutsideDirective
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
    ClickOutsideDirective
  ]
})
export class SharedModule { }
