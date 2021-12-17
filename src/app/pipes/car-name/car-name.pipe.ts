import { Pipe, PipeTransform } from "@angular/core";
import { Car } from "src/app/models/car";

@Pipe({
  name: "carName",
})
export class CarNamePipe implements PipeTransform {
  transform(id: number, cars: Car[]): string {
    const car = cars.find((c) => c.id === id);
    return car ? car.name : "";
  }
}
