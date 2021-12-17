import { Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/api/car/car.service';

@Component({
  selector: 'app-listing-car',
  templateUrl: './listing-car.component.html',
  styleUrls: ['./listing-car.component.scss']
})
export class ListingCarComponent implements OnDestroy {
  // Elementrefs
  @ViewChild('background') background: ElementRef | undefined;
  @ViewChild('modal') modal: ElementRef | undefined;

  // Boolean
  private modalCanBeClosed: boolean = false;

  // Model based variables
  public cars: Car[] = [];
  public car: Car | undefined;

  // Subscriptions
  carSubscription: SubscriptionLike | undefined;
  deleteSubscription: SubscriptionLike | undefined;


  constructor(
    private carService: CarService,
  ) {
    this.carSubscription = this.carService.getCars()
      .subscribe(
        (cars: Car[]) => this.cars = cars
      );
  }

  ngOnDestroy(): void {
    if (this.carSubscription) {
      this.carSubscription.unsubscribe();
    }

    if (this.deleteSubscription) {
      this.deleteSubscription.unsubscribe();
    }
  }

  // API request
  public deleteCar(deleteCar: boolean): void {
    if (deleteCar && this.car) {

      this.deleteSubscription = this.carService.deleteCar(this.car.id)
        .pipe(
          concatMap(() => {
            return this.carService.getCars();
          })
        ).subscribe(
          (cars: Car[]) => this.cars = cars,
          (error: Error) => console.log('error:', error),
          () => this.closeDeleteModal(),
        );
    }
  }

  // Modal
  public openDeleteModal(car: Car): void {
    if (!this.background) return;

    this.car = car;
    this.background.nativeElement.classList.remove('hidden');
    this.modalCanBeClosed = false;
  }

  public closeDeleteModal() {
    if (!this.background) return;

    // Don't close the modal immediately after its opening
    if (!this.modalCanBeClosed) {
      this.modalCanBeClosed = true;
      return;
    }

    this.background.nativeElement.classList.add('hidden');
    this.car = undefined
    this.modalCanBeClosed = false;
  }
}
