import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobileData'
})
export class MobileDataPipe implements PipeTransform {
  transform(value: number, args?: any): string {
    return value < Infinity ? value.toString() + 'GB+' : 'Unlimited';
  }
}
