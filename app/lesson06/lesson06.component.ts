import { Component } from '@angular/core';

import { IBlog } from '../shared/interfaces/blog/blog.interface';
import { BlogService } from '../shared/services/blog/blog.service';

import { IUser } from '../shared/interfaces/blog/user.interface';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'app-lesson06',
  templateUrl: './lesson06.component.html',
  styleUrls: ['./lesson06.component.scss']
})
export class Lesson06Component {
  // public isAuthUser = false;
  // public currUser = '';
  public postTitle!: string;
  public postText!: string;
  public charClose = '×';
  public userName!: string;
  public userEmail!: string;
  public userPassword!: string;
  private postIdx = -1;

  public blogs!: IBlog[];

  constructor(
    public blogService: BlogService,
    public userService: UserService

  ) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogs = this.blogService.getBlogs();
  }

  editPost(post: IBlog, idx: number): void { 
    this.blogService.editPostMode = true;
    this.postTitle = post.topic;
    this.postText = post.message;
    this.postIdx = idx;
  }

  deletePost(idx: number): void {
    this.blogs.splice(1, idx);
  }

  onClose(): void {
    this.blogService.editPostMode = false;
    this.blogService.addPostMode = false;
    this.postTitle = '';
    this.postText = '';
  }

  onAddPost(): void {
    const newPost: IBlog = {
      id: 1,
      userId: this.userService.currUser.id,
      postedBy: this.userService.currUser.username,
      topic: this.postTitle,
      msgdate: new Date,
      message: this.postText
    };

    if (this.blogs.length > 0) {
      const id = this.blogs.slice(-1)[0].id;
      newPost.id = id + 1;
    }
    this.blogService.addNewPost(newPost);
    this.blogService.editPostMode = false;
    this.blogService.addPostMode = false;
    this.postTitle = '';
    this.postText = '';
  }

  onEditPost(): void { 
    this.blogs[this.postIdx].message = this.postText;
    this.blogs[this.postIdx].topic   = this.postTitle;
  }

  onCloseUser(): void { 
    this.userService.addMode = false;
    this.userName = '';
    this.userEmail = '';
    this.userPassword = '';

  }

  onAddUser(): void { 

  }
}
