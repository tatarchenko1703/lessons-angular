import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childtable',
  templateUrl: './childtable.component.html',
  styleUrls: ['./childtable.component.scss']
})
export class ChildtableComponent {

  private msgDone = 'Done';
  private msgPrgs = 'In Progress';

  public editMode = false;
  public editIndex = -1;
  public editTask!: string;
  public recCount = 0;

  ItemsTasks: any[] = [];

  public taskRec = {
    taskName: '',
    taskCheck: false,
    taskStatus: ''
  }

  @Input() 
  set sendTask(addtask: string) {
    if (addtask.length > 0) {
      this.ItemsTasks.push({
        taskName: addtask,
        taskCheck: false,
        taskStatus: this.msgPrgs
      })  
      this.recCount = this.ItemsTasks.length;
      this.sendCountRecord();
    }
  }

  doOnSetCheck(index : number): void { 
    this.ItemsTasks[index].taskCheck = !this.ItemsTasks[index].taskCheck;
    if (this.ItemsTasks[index].taskCheck) {
      this.ItemsTasks[index].taskStatus = this.msgDone;
    } else { 
      this.ItemsTasks[index].taskStatus = this.msgPrgs;
    }
  }

  doOnEditRec(index: number): void {
    this.editTask = this.ItemsTasks[index].taskName;
    this.editMode = true;
    this.editIndex = index;
  }

  doOnDeleteRec(index: number): void {
    this.ItemsTasks.splice(index, 1);
    this.editMode = false;
    this.editIndex = -1;
    this.recCount = this.ItemsTasks.length;
    this.sendCountRecord();
  }

  doOnSaveRec(): void { 
    this.ItemsTasks[this.editIndex].taskName = this.editTask;
    this.editMode = false;
    this.editTask = '';
    this.editIndex = -1;
  }

  @Output() countRecord = new EventEmitter<number>();

  sendCountRecord(): void { 
    this.countRecord.emit(this.recCount);
  }
}
  
