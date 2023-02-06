import { Injectable } from '@angular/core';
import { IBlog } from '../../interfaces/blog/blog.interface';

@Injectable({
  providedIn: 'root'
})
  
export class BlogService {

  public addPostMode = false;
  public editPostMode = false;
  public baseDdate = new Date(2023, 1, 2, 10, 0, 0, 0);

  private blogs: Array<IBlog> = [
    {
      id: 1,
      userId: 1,
      postedBy: "admin",
      topic: 'Admin post',
      msgdate: this.baseDdate,
      message: 'This is the first admin post. Present by default.'
    },
    {
      id: 2,
      userId: 2,
      postedBy: "user",
      topic: 'First user post',
      msgdate: this.baseDdate,
      message: 'This is the first user post. Present by default.'
    }

  ];

  constructor() { }

  getBlogs(): Array<IBlog> { 
    return this.blogs;
  }

  addNewPost(post: IBlog): void { 
    this.blogs.push(post);
  }
}
