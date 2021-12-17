import { Color } from "src/app/models/color";
import { ColorNamePipe } from "./color-name.pipe";

describe("ColorNamePipe", () => {
  let pipe: ColorNamePipe;
  let colors: Color[];

  beforeAll(() => {
    pipe = new ColorNamePipe();

    colors = [
      {
        id: 1,
        name: "bleu",
      },
      {
        id: 2,
        name: "rouge",
      },
      {
        id: 3,
        name: "vert",
      },
    ] as Color[];
  });

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("return a string with color name", () => {
    const id = 2;
    const carName = pipe.transform(2, colors);
    expect(carName).toBe("rouge");
  });

  it('return an empty string if "id" is not found in "colors"', () => {
    const id = 4;
    const carName = pipe.transform(id, colors);
    expect(carName).toBe("");
  });

  it('return an empty string if "colors" is empty', () => {
    const emptyColors: Color[] = [];
    const id = 2;
    const carName = pipe.transform(id, emptyColors);
    expect(carName).toBe("");
  });
});
