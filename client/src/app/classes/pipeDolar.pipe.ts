import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dolar'})
export class DolarPipe implements PipeTransform {
  transform(value: any, exponent: string): string {
    var dolar = value / 27.5;
    return "U$S " + dolar;    
  }
}