import { Component, Output, Input, enableProdMode } from '@angular/core';
// enableProdMode();

@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss']
})
  
export class Lesson03Component {

  public newTask: string = ''; 
  public sendTask: string = ''; 
  public addTask: boolean = false; 
  public recCount = 0;

  addNewTask(): void {
    this.sendTask = this.newTask;
    this.newTask = '';
  }

  getCount(count: number): void { 
    this.recCount = count;
  }
 
}
