import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceArray',
  standalone: true
})
export class SpaceArrayPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.map(i => i.replace(',', '')).join(', ');
  }
}
