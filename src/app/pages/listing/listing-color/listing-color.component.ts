import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/api/color/color.service';

@Component({
  selector: 'app-listing-color',
  templateUrl: './listing-color.component.html',
  styleUrls: ['./listing-color.component.scss']
})
export class ListingColorComponent {

 // Elementrefs
 @ViewChild('background') background: ElementRef | undefined;
 @ViewChild('modal') modal: ElementRef | undefined;

 // Boolean
 private modalCanBeClosed: boolean = false;

 // Model based variables
 public colors: Color[] = [];
 public color: Color | undefined;

 // Subscriptions
 colorSubscription: SubscriptionLike | undefined;
 deleteSubscription: SubscriptionLike | undefined;


 constructor(
   private colorService: ColorService,
 ) {
   this.colorSubscription = this.colorService.getColors()
     .subscribe(
       (colors: Color[]) => this.colors = colors
     );
 }

 ngOnDestroy(): void {
   if (this.colorSubscription) {
     this.colorSubscription.unsubscribe();
   }

   if (this.deleteSubscription) {
     this.deleteSubscription.unsubscribe();
   }
 }

 // API request
 public deleteColor(deleteColor: boolean): void {
   if (deleteColor && this.color) {

     this.deleteSubscription = this.colorService.deleteColor(this.color.id)
       .pipe(
         concatMap(() => {
           return this.colorService.getColors();
         })
       ).subscribe(
         (colors: Color[]) => this.colors = colors,
         (error: Error) => console.log('error:', error),
         () => this.closeDeleteModal(),
       );
   }
 }

 // Modal
 @HostListener('document:click', ['$event.target'])
 onClick(targetElement: ElementRef) {
   if (!this.modal) return;

   const clickedInside = this.modal.nativeElement.contains(targetElement);
   if (!clickedInside && this.modalCanBeClosed) {
     this.closeDeleteModal();
     return;
   }

   this.modalCanBeClosed = true;
 }

 public openDeleteModal(color: Color): void {
   if (!this.background) return;

   this.color = color;
   this.background.nativeElement.classList.remove('hidden');
   this.modalCanBeClosed = false;
 }

 public closeDeleteModal() {
   if (!this.background) return;

   this.background.nativeElement.classList.add('hidden');
   this.color = undefined
   this.modalCanBeClosed = false;
 }
}