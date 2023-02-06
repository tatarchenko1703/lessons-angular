import { Component } from '@angular/core';
import { IUser } from '../../../shared/interfaces/blog/user.interface';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
  
export class LoginComponent {

  public users!: IUser[];
  public charClose = '×';
  public userEmail!: string;
  public userPassword!: string;
  public userName!: string;

  constructor(
    public userService: UserService

  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  onClose(): void {
    this.userService.loginMode = false;
    this.userService.addMode = false;
  }

  signOut(): void {
    this.userService.isAuthUser = false;
    this.userService.loginMode = false;
    this.resetInput();
  }

  resetInput(): void {
    this.userName = '';
    this.userEmail = '';
    this.userPassword = '';
  }

  onSubmit(): void {
    if (this.userService.loginMode) { 
      this.userService.findUser(this.userEmail, this.userPassword);
    }
    if (this.userService.addMode) { 
      let lBad = (this.userName.length == 0) ||
        (this.userEmail.length == 0) ||
        (this.userPassword.length == 0);
      if (lBad) { 
        return;
      }
      const newUser = {
        id: 1,
        username: this.userName,
        email: this.userEmail,
        password: this.userPassword
      }

      if (this.users.length > 0) {
        const id = this.users.slice(-1)[0].id;
        newUser.id = id + 1;
      }

      this.userService.addNewUser(newUser);
    }

    if (!this.userService.loginMode) {
      this.resetInput();
    }
  }

}
