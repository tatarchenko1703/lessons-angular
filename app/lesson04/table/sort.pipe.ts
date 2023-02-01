import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from './table.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arrBook: IPhone[], asc: boolean, column: number): IPhone[] {
    if (!arrBook) return [];
    if (column < 0) return arrBook;
    if (asc) {
      switch (column) {
        case 0:
          return arrBook.sort((r, l) => (r.fname > l.fname) ? 1 : ((r.fname < l.fname) ? -1 : 0));
        case 1:
          return arrBook.sort((r, l) => (r.lname > l.lname) ? 1 : ((r.lname < l.lname) ? -1 : 0));
        case 2:
          return arrBook.sort((r, l) => (r.phone > l.phone) ? 1 : ((r.phone < l.phone) ? -1 : 0));
        default:
          return arrBook;
      }     
    } else { 
      switch (column) {
        case 0:
          return arrBook.sort((r, l) => (r.fname < l.fname) ? 1 : ((r.fname > l.fname) ? -1 : 0));
        case 1:
          return arrBook.sort((r, l) => (r.lname < l.lname) ? 1 : ((r.lname > l.lname) ? -1 : 0));
        case 2:
          return arrBook.sort((r, l) => (r.phone < l.phone) ? 1 : ((r.phone > l.phone) ? -1 : 0));
        default:
          return arrBook;
      }     
    }
  }

}
