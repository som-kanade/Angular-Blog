import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Location }    from '@angular/common';
//import { ToastsManager }  from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["comedy","Drama","Action","Technology"];
 

  constructor(public _route:ActivatedRoute, public router:Router, public blogHttpService:BlogHttpService) {
    //private toastr: ToastsManager, private vcr: ViewContainerRef
    //this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
        console.log("current blog is");
        console.log(this.currentBlog);
      },

      error => {
        console.log("Error occured")
        console.log(error.errorMessage)
      }
    )
  }

public editThisBlog():any{
  this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(

    data => {
      console.log(data);
      alert("Blog Edited Successfully");
     /* this.toastr.success("Blog edited successfully.");
      setTimeout(()=>{
        this.router.navigate(["/blog"],this.currentBlog.blogId);
      },1000)*/
    }, 
    error => {
      console.log("Error occured");
      console.log(error.errorMessage);
      alert("some error occured");
      //this.toastr.error("some error occured");
    }
  )

}

}












