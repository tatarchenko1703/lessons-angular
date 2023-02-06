import { Component } from '@angular/core';
import { IUser } from '../../../shared/interfaces/blog/user.interface';
import { UserService } from '../../../shared/services/user/user.service';

import { IBlog } from '../../../shared/interfaces/blog/blog.interface';
import { BlogService } from '../../../shared/services/blog/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public users!: IUser[];
  public blogs!: IBlog[];

  // public userEmail!: string;
  // public userPassword!: string;

  constructor(
    public blogService: BlogService,
    public userService: UserService

  ) { }

  ngOnInit(): void {
    this.getUsers();
    this.getBlogs();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  getBlogs(): void {
    this.blogs = this.blogService.getBlogs();
  }

  signInClick(): void {
    this.userService.loginMode = true;
    this.userService.addMode = false;
  }

  signUpClick(): void {
    this.userService.loginMode = false;
    this.userService.addMode = true;
  }

  addPostClick(): void { 
    this.blogService.editPostMode = false;
    this.blogService.addPostMode = true;
  }

  signOut(): void {
    this.userService.isAuthUser = false;
    this.userService.loginMode = false;
    this.blogService.editPostMode = false;
    this.blogService.addPostMode = false;
    // this.resetInput();
  }

  // resetInput(): void {
  //   this.userEmail = '';
  //   this.userPassword = '';
  // }

}
