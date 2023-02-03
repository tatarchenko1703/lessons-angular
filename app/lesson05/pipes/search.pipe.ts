import { Pipe, PipeTransform } from '@angular/core';
// import { IPhone } from '../works/task/table/table.component';

// import { IPhone } from './pipes/table.component';

@Pipe({
  name: 'search'
})


export class SearchPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  // transform(arrBook: IPhone[], search: string): IPhone[] {
  //   if (!arrBook) return [];
  //   if (!search) return arrBook;
  //   let customArrPhone: IPhone[];
  //   let len = 0;
  //   customArrPhone = arrBook.filter(recBook => (recBook.fname.toLowerCase().includes(search.toLowerCase())) ||
  //     (recBook.lname.toLowerCase().includes(search.toLowerCase())) ||
  //     (recBook.phone.toLowerCase().includes(search.toLowerCase()))
  //   );
  //   return customArrPhone;
  // }
}
