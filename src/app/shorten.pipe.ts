import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, limit: number) {
    const splittedVal = value.split(' ');
    if (splittedVal.length >= limit) {
      return value.split(' ').slice(0, limit).join(' ') + '...';
    } else {
      return value;
    }
  }
}
