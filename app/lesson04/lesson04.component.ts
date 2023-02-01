import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss']
})
  
export class Lesson04Component {
  public newSearchText: string = '';
  public searchText: string = '';
  public addMode = false;
  public recCount = 0;

  addNewPhone(): void {
    this.addMode = true;
  }

  resetAdd(value: boolean): void {
    this.addMode = value;
  }
}
