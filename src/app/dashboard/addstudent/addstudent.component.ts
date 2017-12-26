import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../common/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  isNotSaved:boolean=true;
  
  constructor(private router:Router,private studentservice:StudentService) { }

  save(form)
  {
    let clg=form.college;
    console.log(form);
    if(clg=="GURUNANAK")
    {
      this.studentservice.savegform(form);
      this.isNotSaved = false;
      this.router.navigate(['students']);
    }
    else
    {
      this.studentservice.savesform(form);
      this.isNotSaved = false;
      this.router.navigate(['students']);
    }
  }

  cancel()
  {
    this.router.navigate(['students']);
  }
  
  ngOnInit() {
  }

}
