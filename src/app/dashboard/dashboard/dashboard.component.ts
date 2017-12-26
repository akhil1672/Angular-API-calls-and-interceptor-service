import { Component, OnInit,Output ,EventEmitter,Input} from '@angular/core';
import { Istudent } from '../students';
import { PipesearchPipe } from '../../pipesearch.pipe';
import { ToastrService } from 'ngx-toastr'
import { StudentService } from '../../common/student.service';
import { ButtoncolorDirective } from '../buttoncolor.directive'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  //@Input('dbtitle') title:string="Dashboard";
  title:string="Aspirants Dashboard"
  gstudents:Istudent[];
  gstudentsfiltered:Istudent[];
  sstudents: Istudent[];
  
  showperct(percent,name)
  {
    //console.log(percent);
    //alert("You are going to use toastr!")
    if (percent > 90) {
      this.toastr.success(name + " scored " + percent);
    }
    if (percent > 76 && percent <= 90) {
      this.toastr.info(name + " scored " + percent);
    }
    if (percent > 50 && percent <= 76) {
      this.toastr.show(name + " scored " + percent);
    }
    if (percent > 26 && percent <= 50) {
      this.toastr.warning(name + " scored " + percent);
    }
    if (percent < 26) {
      this.toastr.error(name + " scored " + percent);
    }    
  }
  
  search(value) {
    this.gstudentsfiltered = (this.gstudents).filter(
      gstudent => gstudent.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }
  constructor(private toastr: ToastrService,private studentservice:StudentService) { }

  ngOnInit() {
    this.gstudents= this.studentservice.getgStudents();
    this.gstudentsfiltered = this.studentservice.getgStudents();
    this.sstudents = this.studentservice.getsStudents();
  }
}
