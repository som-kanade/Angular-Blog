import { Injectable } from '@angular/core';

//import HTTP services..
import {HttpClient,HttpErrorResponse} from '@angular/common/http'; 

// import observables
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { observable } from 'rxjs';


@Injectable()


export class BlogHttpService {

  public allBlogs;
  public CurrentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authKey = `YjQ0MTgwMGNmNThiZGJjMzc3ZjI3YWMwZWJjYTFhMDg3OTQwNzFlMjgzY2ZkO
  TA4Mzc1NzIyMjg2OWQ4YTFmZDgyYTg3MTI5NmVhMjk5Njc0MzNiZWY1NjIwOWFmYTZjZGI2ZTdhY2Fl
  MDA3MWM1Y2EzMzNlZTU1OTNiYWY4NGM3NA==`;

  constructor(public _http:HttpClient) {
    console.log("blog-http Service was called");
  }


  // To handle HTTP Errors
  private handleError(err:HttpErrorResponse){
    console.log("Handle Http Error was called");
    console.log(err.message);
    return Observable.throw(err.message);
  }


  public getAllBlogs():any{
    let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.authKey);
    console.log(myResponse);
    return myResponse;

  }

  // to get Particular Blog
  public getSingleBlogInformation(currentBlogId):any{

    let myResponse = this._http.get(this.baseUrl+ '/view' + '/' +currentBlogId+'?authToken='+this.authKey);
    return myResponse;

  } // end for single blog info

  // create a blog
  public createBlog(blogData):any{
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.authKey,blogData);
    return myResponse;
  }

  public deleteBlog(blogId):any{
    let data = {};
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=' + this.authKey,data);
    return myResponse;
  }

  public editBlog(blogId,blogData){
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.authKey,blogData);
    return myResponse;
  }


}










