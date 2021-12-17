import { Component, OnDestroy } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { combineLatest, SubscriptionLike } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";
import { Car } from "src/app/models/car";
import { Color } from "src/app/models/color";
import { CarService } from "src/app/services/api/car/car.service";
import { ColorService } from "src/app/services/api/color/color.service";

@Component({
  selector: "app-listing-car-detail",
  templateUrl: "./listing-car-detail.component.html",
  styleUrls: ["./listing-car-detail.component.scss"],
})
export class ListingCarDetailComponent implements OnDestroy {
  // Booleans
  public isEdition: boolean = false;
  public displayMessage: boolean = false;

  // Form
  public form: FormGroup;
  public colorsFormArray: FormArray;

  // Model based variables
  public car: Car | undefined;
  public colors: Color[] = [];

  //Subscriptions
  getSubscription: SubscriptionLike | undefined;
  actionSubscription: SubscriptionLike | undefined;

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    const car_id = this.route.snapshot.paramMap.get("id");
    this.form = this.getForm();
    this.colorsFormArray = this.form.controls.colors as FormArray;

    if (car_id !== null) {
      this.isEdition = true;

      this.getSubscription = combineLatest([
        this.carService.getCarFromId(+car_id),
        this.colorService.getColors(),
      ]).subscribe(([car, colors]) => {
        this.car = car;
        this.colors = colors;
        this.createForm();
      });
    } else {
      this.getSubscription = this.colorService
        .getColors()
        .subscribe((colors: Color[]) => {
          this.colors = colors;
          this.createForm();
        });
    }
  }

  ngOnDestroy(): void {
    if (this.getSubscription) {
      this.getSubscription.unsubscribe();
    }

    if (this.actionSubscription) {
      this.actionSubscription.unsubscribe();
    }
  }

  private createForm(): void {
    this.form = this.getForm();
    this.colorsFormArray = this.form.controls.colors as FormArray;
    this.addColorCheckboxes();
  }

  private getForm(): FormGroup {
    const name = this.car?.name || "";
    const colors = this.car?.colors || [];

    return this.formBuilder.group({
      name: new FormControl(name, [
        Validators.required,
        Validators.maxLength(255),
      ]),
      colors: new FormArray([], Validators.minLength(1)),
    });
  }

  private addColorCheckboxes() {
    if (!this.colorsFormArray) {
      return;
    }

    const colorsFormArray = this.colorsFormArray;
    const color_ids = this.car?.colors.map((c) => c.id) || [];

    this.colors.forEach((c) =>
      colorsFormArray.push(new FormControl(color_ids.includes(c.id)))
    );
  }

  private carSerializer(): Car {
    const colors = this.colors.filter((c, i) => this.form.value.colors[i]);

    const car = {
      name: this.form.value.name,
      colors,
    } as Car;

    if (this.car) {
      car.id = this.car.id;
    }

    return car;
  }

  public onSubmit() {
    const car: Car = this.carSerializer();

    if (this.isEdition) {
      this.carService.editCar(car).subscribe(
        (car: Car) => (this.car = car),
        (error: Error) => console.log("error:", error),
        () => this.resetForm()
      );

      return;
    }

    this.carService.addCar(car).subscribe(
      (car: Car) => (this.car = car),
      (error) => console.log("error:", error),
      () => this.resetForm()
    );
  }

  resetForm(): void {
    if (!this.isEdition) {
      this.car = undefined;
    }

    this.displayMessage = true;

    setTimeout(() => (this.displayMessage = false), 5000);

    this.createForm();
  }
}
