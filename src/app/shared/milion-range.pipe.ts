import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milionRange',
  standalone: true
})
export class MilionRangePipe implements PipeTransform {

  transform(value: string): string {
    const parts = value.split('-');
    if (parts.length == 1){
      return `$${value} milion`;
    } else if (parts.length == 2){
      return `$${parts[0]}-${parts[1]} milion`;
    } else {
      return '';
    }
  }

}
