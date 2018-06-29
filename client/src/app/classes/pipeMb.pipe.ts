import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'MB'})
export class MBPipe implements PipeTransform {
  transform(value: any, exponent: string): string {
    return value + " MB";    
  }
}