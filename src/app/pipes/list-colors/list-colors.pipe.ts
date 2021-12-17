import { Pipe, PipeTransform } from "@angular/core";
import { Color } from "../../models/color";

@Pipe({
  name: "listColors",
})
export class ListColorsPipe implements PipeTransform {
  transform(colors: Color[]): string {
    return colors.map((c) => c.name).join(" - ");
  }
}
