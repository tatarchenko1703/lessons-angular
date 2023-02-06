import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/blog/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public authUserIdx = 0;
  public currUser!: IUser;
  public loginMode = false;
  public isAuthUser = false;
  public addMode = false;
  
  private users: Array<IUser> = [
    {
      id: 1,
      username: "admin",
      email: 'admin@gmail.com',
      password: 'admin'
    },
    {
      id: 2,
      username: "user",
      email: 'user@gmail.com',
      password: 'user'
    }
  ];

  constructor() { }

  getUsers(): Array<IUser> {
    return this.users;
  }

  addNewUser(user: IUser): void{
    this.users.push(user);
    this.isAuthUser = true;
    this.authUserIdx = this.users.length - 1;
    this.currUser = this.users[this.authUserIdx];
    this.loginMode = this.authUserIdx < 0;
    this.addMode = false;
  }

  findUser(userEMail: string, userPsw: string): number {
    // let customArr: Array<IUser>;
    let idx = this.users.findIndex(user => user.email.toLowerCase() == userEMail.toLowerCase() && user.password == userPsw);
    console.log(idx);
    this.authUserIdx = idx;
    this.loginMode = this.authUserIdx < 0;
    if (!this.loginMode) { 
      this.isAuthUser = true;  
      this.currUser = this.users[this.authUserIdx];
    }
    // this.isAuthUser = this.loginMode;
    return idx;
  }

};

