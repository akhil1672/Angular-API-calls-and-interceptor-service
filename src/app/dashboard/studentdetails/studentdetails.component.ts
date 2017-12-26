import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../common/student.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {
  
  student: any;
  //sstudent: any;
  constructor(private studentservice: StudentService, private aroute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.student = this.studentservice.getsStudent(+this.aroute.snapshot.params['id']);
    if(!this.student){
    this.student = this.studentservice.getgStudent(+this.aroute.snapshot.params['id']);}
  }

  return()
  {
    this.router.navigate(['/students']);
  }

}
