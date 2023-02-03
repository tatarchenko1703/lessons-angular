import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
  
export class TaskComponent {
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
