import { Component } from '@angular/core';
import { IUser } from '../../../shared/interfaces/blog/user.interface';
import { UserService } from '../../../shared/services/user/user.service';

import { IBlog } from '../../../shared/interfaces/blog/blog.interface';
import { BlogService } from '../../../shared/services/blog/blog.service';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})

export class AddpostComponent {
  public blogs!: IBlog[];
  public users!: IUser[];
  public postTitle!: string;
  public postText!: string;
  public charClose = '×';

  constructor(
    public blogService: BlogService,
    public userService: UserService

  ) { }

  ngOnInit(): void {
    this.blogService.editPostMode = false;
    this.blogService.addPostMode = false;
    this.getBlogs();
    this.getUsers();
  }

  onClose(): void {
    this.blogService.editPostMode = false;
    this.blogService.addPostMode = false;
  }

  onAddPost(): void { 
    const newPost : IBlog = {
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
  }

  getBlogs(): void { 
    this.blogs = this.blogService.getBlogs();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }


}
