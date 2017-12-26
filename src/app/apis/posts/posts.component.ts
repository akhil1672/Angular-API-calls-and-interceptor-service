import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';
import { Post } from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  start:number;
  limit:number;
  posts:Post[];
  selected:number=0;
  constructor(private post:ApisService,private router:Router) {
    this.start=0;
    this.limit=10;
   }

   selectUserId(value)
   {
     console.log(value);
     this.start=(value-1)*10;
     this.limit=10;
     this.selected = 1;
     return this.post.getPosts(this.start, this.limit).subscribe((response: Post[]) => {
       this.posts = response;
       console.log(response);
       if(response.length==0)
       {
         this.selected=0;
       }
     });
   }
  return()
  {
    this.selected=0;
    this.router.navigate(['apis']);
  }
  ngOnInit() {
  }
}
