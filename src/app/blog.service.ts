import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class BlogService {

  public allBlogs =[
    {
      "blogId": "1",
      "lastModified": "2017-10-19T99:20:47.854Z",
      "created" : "2017-10-19T99:20:47.854Z",
      "tags" : [],
      "author" : "Admin",
      "category" : "Comedy",
      "isPublished" : true,
      "views" : 0,
      "bodyHTML" : "This is blog body",
      "description" : "this is blog-1 Description",
      "title" : "this is blog-1"
    },

    {
      "blogId": "2",
      "lastModified": "2017-10-19T99:20:47.854Z",
      "created" : "2017-10-19T99:20:47.854Z",
      "tags" : [],
      "author" : "Admin",
      "category" : "Comedy",
      "isPublished" : true,
      "views" : 0,
      "bodyHTML" : "This is blog body",
      "description" : "this is blog-2 Description",
      "title" : "this is blog-2"
    },

    {
      "blogId": "3",
      "lastModified": "2017-10-19T99:20:47.854Z",
      "created" : "2017-10-19T99:20:47.854Z",
      "tags" : [],
      "author" : "Admin",
      "category" : "Comedy",
      "isPublished" : true,
      "views" : 0,
      "bodyHTML" : "This is blog body",
      "description" : "this is blog-3 Description",
      "title" : "this is blog-3"
    }
  ]

  public currentBlog;

  constructor() { 
    console.log("service constructor is called");
  }

  // to get all Blogs
  public getAllBlogs():any{
    return this.allBlogs;
  }

  // to get oarticular Blog
  public getSingleBlogInformation(currentBlogId):any{

    for(let blog of this.allBlogs){
      if(blog.blogId == currentBlogId){
        this.currentBlog = blog;
      }
    }

    console.log(this.currentBlog);
    return this.currentBlog;
  }

}
