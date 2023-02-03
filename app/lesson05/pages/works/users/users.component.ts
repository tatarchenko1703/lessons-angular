import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  private errName = 'Login: може бути слово англійською з великої або маленької букви від 4 до 16 символів';
  private errMail = "Е-mail: обов'язково @. Усі букви повинні бути англійською";
  private errPsw = "Password: Від 4 до 16 символів можуть бути букви та цифри та '_-.'";

  // public isAdded = true;
  // public isOpenModal = false;
  public isEmpty = false;
  public editMode = false;
  public editIndex = -1;
  public textError = '';
  public isAddEnabled = false;

  private loginRegExp = /^\w{4,16}$/;
  private emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  private pswRegExp = /^[a-zA-Zа-яА-я0-9\.\_\-]{4,16}$/;
  public isValidLogin = true;
  public isValidPsw = true;
  public isValidEMail = true;

  ItemsUsers: any[] = [];

  public userRec = {
    userName: '',
    userPsw: '',
    userEMail: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doOnAddUser(): void {
    this.ItemsUsers.push({
      userName: this.userRec.userName,
      userPsw: this.userRec.userPsw,
      userEMail: this.userRec.userEMail
    })
    this.clearInput();
  }

  clearInput(): void {
    this.userRec.userName = '';
    this.userRec.userPsw = '';
    this.userRec.userEMail = '';

  }

  doOnUpdateUser(): void {
    this.ItemsUsers[this.editIndex].userName = this.userRec.userName;
    this.ItemsUsers[this.editIndex].userPsw = this.userRec.userPsw;
    this.ItemsUsers[this.editIndex].userEMail = this.userRec.userEMail;
    this.editIndex = -1;
    this.editMode = false;
    this.clearInput();
  }

  isReady(): void {
    let lOk = this.userRec.userName.length > 0 &&
      this.userRec.userPsw.length > 0 &&
      this.userRec.userEMail.length > 0;

    this.isAddEnabled = lOk && this.isValidLogin && this.isValidPsw && this.isValidEMail;
  }

  checkLogin(): void {
    this.textError = '';
    this.isValidLogin = true;
    if (this.userRec.userName.length > 0) {
      this.isValidLogin = this.loginRegExp.test(this.userRec.userName);
      if (!this.isValidLogin) {
        this.textError = this.errName;
      }
    }
    this.isReady();
  }

  checkPsw(): void {
    this.textError = '';
    this.isValidPsw = true;
    if (this.userRec.userPsw.length > 0) {
      this.isValidPsw = this.pswRegExp.test(this.userRec.userPsw);
      if (!this.isValidPsw) {
        this.textError = this.errPsw;
      }
    }
    this.isReady();
  }

  checkMail(): void {
    this.textError = '';
    this.isValidEMail = true;
    if (this.userRec.userEMail.length > 0) {
      this.isValidEMail = this.emailRegExp.test(this.userRec.userEMail);
      if (!this.isValidEMail) {
        this.textError = this.errMail;
      }
    }
    this.isReady();
  }

  editUser(idx: number): void {
    this.userRec.userName = this.ItemsUsers[idx].userName;
    this.userRec.userPsw = this.ItemsUsers[idx].userPsw;
    this.userRec.userEMail = this.ItemsUsers[idx].userEMail;
    this.editIndex = idx;
    this.editMode = true;
  }

  deleteUser(idx: number): void {
    this.ItemsUsers.splice(idx, 1);
    this.clearInput();
    this.isReady();
  }
}
