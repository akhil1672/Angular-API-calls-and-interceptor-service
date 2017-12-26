import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments:Comment[];
  selected:number=0;

  constructor(private comment: ApisService, private router: Router) { }

  commentfunc(pid,id)
  {
    this.selected=1;
    return this.comment.getComments(pid,id).subscribe((response: Comment[]) => {
      this.comments = response;
      console.log(response);
      if (response.length == 0) {
        this.selected = 0;
      }
    });
  }
  return() {
    this.selected=0;
    this.router.navigate(['apis']);
  }

  ngOnInit() {
  }

}
