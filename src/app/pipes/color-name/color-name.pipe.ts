import { Pipe, PipeTransform } from '@angular/core';
import { Color } from 'src/app/models/color';

@Pipe({
  name: 'colorName'
})
export class ColorNamePipe implements PipeTransform {

  transform(id: number, colors: Color[]): string {
    const color = colors.find(c => c.id === id);
    return color ? color.name : '';
  }

}
