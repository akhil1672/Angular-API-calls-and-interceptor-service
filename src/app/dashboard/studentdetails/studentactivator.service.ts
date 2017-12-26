import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { StudentService } from '../../common/student.service';
import { Router } from '@angular/router';

@Injectable()
export class StudentactivatorService implements CanActivate{

  constructor(private studentService:StudentService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot){
    /*let id=+route.params['id'];
    if(id>24)
    {
      this.router.navigate(['pagenotfound']);
    }*/
    let studentexists= !!this.studentService.getsStudent(+route.params['id']);
    if(!studentexists){
      studentexists = !!this.studentService.getgStudent(+route.params['id']);}
    if(!studentexists){
      this.router.navigate(['pagenotfound']);}
    return studentexists;
  }

}
