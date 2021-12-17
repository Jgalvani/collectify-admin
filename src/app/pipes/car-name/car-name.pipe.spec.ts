import { Car } from "src/app/models/car";
import { CarNamePipe } from "./car-name.pipe";

describe("CarNamePipe", () => {
  let pipe: CarNamePipe;
  let cars: Car[];

  beforeAll(() => {
    pipe = new CarNamePipe();

    cars = [
      {
        id: 1,
        name: "Tesla",
      },
      {
        id: 2,
        name: "Mercedes",
      },
      {
        id: 3,
        name: "BMW",
      },
    ] as Car[];
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("return a string with car name", () => {
    const id = 2;
    const carName = pipe.transform(2, cars);
    expect(carName).toBe("Mercedes");
  });

  it('return an empty string if "id" is not found in "cars"', () => {
    const id = 4;
    const carName = pipe.transform(id, cars);
    expect(carName).toBe("");
  });

  it('return an empty string if "cars" is empty', () => {
    const emptyCars: Car[] = [];
    const id = 2;
    const carName = pipe.transform(id, emptyCars);
    expect(carName).toBe("");
  });
});
