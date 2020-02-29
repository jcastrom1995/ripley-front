import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'money' })
export class MoneyFormatPipe implements PipeTransform {
    transform(value) {
        return value.toLocaleString('es-CL');
    }
}
