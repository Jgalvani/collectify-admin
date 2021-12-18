import { Component, TrackByFunction } from "@angular/core";
import { combineLatest } from "rxjs";
import { Car } from "src/app/models/car";
import { Color } from "src/app/models/color";

import { User } from "src/app/models/user";
import { CarService } from "src/app/services/api/car/car.service";
import { ColorService } from "src/app/services/api/color/color.service";
import { UserService } from "src/app/services/api/user/user.service";

@Component({
  selector: "app-listing-user",
  templateUrl: "./listing-user.component.html",
  styleUrls: ["./listing-user.component.scss"],
})
export class ListingUserComponent {
  // Model based variables
  cars: Car[] = [];
  colors: Color[] = [];
  users: User[] = [];

  // Functions
  public trackByUser: TrackByFunction<User>;

  constructor(
    private carService: CarService,
    private colorService: ColorService,
    private userService: UserService
  ) {
    this.trackByUser = this.userService.trackByUser;
    combineLatest([
      this.userService.getUsers(),
      this.carService.getCars(),
      this.colorService.getColors(),
    ]).subscribe(([users, cars, colors]) => {
      this.users = users;
      this.cars = cars;
      this.colors = colors;
    });
  }
}
