import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from './table.component';

@Pipe({
  name: 'search'
})
  
export class SearchPipe implements PipeTransform {

  transform(arrBook: IPhone[], search: string): IPhone[] {
    if (!arrBook) return [];
    if (!search) return arrBook;
    let customArrPhone: IPhone[];
    let len = 0;
    customArrPhone = arrBook.filter(recBook => (recBook.fname.toLowerCase().includes(search.toLowerCase())) ||
      (recBook.lname.toLowerCase().includes(search.toLowerCase())) ||
      (recBook.phone.toLowerCase().includes(search.toLowerCase()))
    );
    return customArrPhone;
  }
}
