import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService:BlogHttpService,public _route:ActivatedRoute,public router:Router) {
    //private toastr: ToastsManager, private vcr: ViewContainerRef
    //this.toastr.setRootViewContainerRef(vcr);
  }

    public blogTitle:string;
    public blogBodyHtml:string;
    public blogDescription:string;
    public blogCategory:string;
    public possibleCategories = ["comedy","Drama","Action","Technology"]
   

  ngOnInit() {
  }

  public createBlog():any{

    let blogData = {
      title : this.blogTitle,
      description : this.blogDescription,
      blogBody : this.blogBodyHtml,
      category : this.blogCategory
    }

    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("Blog Created");
        console.log(data);
        alert("Blog Posted successfully");
        // this.toastr.success("Blog Posted Successfully");

        setTimeout(()=> {
          this.router.navigate(['/blog', data.data.blogId])
        },1000)
      },

      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
        alert("Some error occured");
       // this.toastr.error("some error occured");
      }
    )

  } // end create blog

}
