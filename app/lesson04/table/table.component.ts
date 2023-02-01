import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
  
export class TableComponent implements OnInit {
  public editMode = false;
  public _addMode = false;
  public editIndex = -1;
  public editTask!: string;
  public _getMode!: boolean;
  public close = false;

  public isAscending = false;
  public charUp = '▲';
  public charDown = '▼';
  public charClose = '×';
  public currCol = -1;

  @Input() searchText!: string;
  @Input()
  set addMode(value: boolean) {
    if (value) {
      this._addMode = true;
      this._getMode = false;
      this.currRec.fname = '';
      this.currRec.lname = '';
      this.currRec.phone = '';
      this.editMode = false;
      this.editIndex = -1;
    }
  }
  get addMode() {
    return this._addMode;
  }
    
  @Output() getMode = new EventEmitter<boolean>;
  
  sendGetMode(): void {
    this.getMode.emit(this._getMode);
  }

  public currRec: IPhone = {
    fname: '',
    lname: '',
    phone: ''
  }
  
  
  public arrPhone: IPhone[] = [
    {
      fname: 'RuSlan',
      lname: 'ZhUKov',
      phone: '0671893266'
    },
    {
      fname: 'Petro',
      lname: 'Ivanov',
      phone: '0977777777'
    },
    {
      fname: 'Iryna',
      lname: 'Petrova',
      phone: '0679008787'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  doOnEditRec(index: number): void {
    this.currRec.fname = this.arrPhone[index].fname;
    this.currRec.lname = this.arrPhone[index].lname;
    this.currRec.phone = this.arrPhone[index].phone;
    this.editMode = true;
    this.editIndex = index;
  }

  doOnDeleteRec(index: number): void {
    this.arrPhone.splice(index, 1);
    this.editMode = false;
    this.editIndex = -1;
}

  doOnSort(colNumber: number): void {
    this.currCol = colNumber;
    this.isAscending = !this.isAscending;
  }

  doOnSaveClick(value: boolean): void { 
    console.log(value);
    
    if (value) { 
      let lOk = (this.currRec.fname.length > 0) &&
        (this.currRec.lname.length > 0) &&
        (this.currRec.phone.length > 0);
      console.log(lOk);
      console.log(this.editMode);
      console.log(this._addMode);
      if (lOk) { 
        if (this.editMode) {
          this.arrPhone[this.editIndex].fname = this.currRec.fname;
          this.arrPhone[this.editIndex].lname = this.currRec.lname;
          this.arrPhone[this.editIndex].phone = this.currRec.phone;
        }

        if (this._addMode) { 
          this.arrPhone.push({
            fname: this.currRec.fname,
            lname: this.currRec.lname,
            phone: this.currRec.phone
          })
        }
      }
    }
    this.currRec.fname = '';
    this.currRec.lname = '';
    this.currRec.phone = '';
    this.editMode = false; 
    this._addMode = false;
    this.editIndex = -1;
    this.sendGetMode();
  }

}

export interface IPhone {
  fname: string;
  lname: string;
  phone: string;
}
