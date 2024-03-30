import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourMinute',
  standalone: true
})
export class HourMinutePipe implements PipeTransform {

  transform(value: number): string {
    if (value > 0) {
      if (value/60 <1){
        return `${value}m`;
      } else {
        return `${ Math.floor(value / 60)}h ${Math.floor(value % 60)}m`;
      }
    } else {
      return '';
    }
  }

}
