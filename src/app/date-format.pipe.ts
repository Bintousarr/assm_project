import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): string {
    // Convertir la date string en objet Date
    const date = new Date(value);

    // Formatter la date en "dd MMMM yyyy" avec la locale française
    return format(date, 'dd MMMM yyyy', { locale: fr });
  }

}
 