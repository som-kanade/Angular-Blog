import { Component, OnInit, OnDestroy } from '@angular/core';

// routing components
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Location }  from '@angular/common';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;
  
  constructor( private _route:ActivatedRoute, private router:Router,public blogService:BlogService,public blogHttpService:BlogHttpService,public location:Location) {
    //private toastr: ToastsManager, private vcr: ViewContainerRef
    console.log("Blog-view constructor is called");
    //this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    console.log("Blog-View ngOnInit is called");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
   /* this.currentBlog = this.blogService.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);*/

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data => {
        console.log(data);
        this.currentBlog = data["data"];
      },
  
      error => {
        console.log("some error occured");
        console.log(error.erroeMessage);
      }
    )
  }

  public gobackToPreviousPage():any{
    this.location.back();
  }

  public deleteBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        console.log(data);
        alert("Blog Deleted successfully.");
       //this.toastr.success("blog deleted successfully");//
        setTimeout(() => {
          this.router.navigate(['/home']);
        },1000)
      },
  
      error => {
        console.log("some error occured");
        console.log(error.erroeMessage);
        alert("some error occured");
      }

    )
  }

  ngOnDestroy(){
    console.log("Blog-View Component is Destroyed");
  }

  


}




