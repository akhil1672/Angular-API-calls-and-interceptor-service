import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { PipesearchPipe } from '../pipesearch.pipe';
import { ButtoncolorDirective } from './buttoncolor.directive';
import { PercentagePipe } from '../percentage.pipe';
import { RouterModule } from '@angular/router';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { StudentactivatorService } from './studentdetails/studentactivator.service';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'students/:id', component: StudentdetailsComponent,canActivate:[StudentactivatorService] },
      { path: 'pagenotfound', component: PagenotfoundComponent},
      {path:'addstudent',component:AddstudentComponent,canDeactivate:['studentdeactivator']},
    ])
  ],
  declarations: [DashboardComponent, 
    PipesearchPipe, 
    ButtoncolorDirective,
    PercentagePipe, 
    StudentdetailsComponent,
     AddstudentComponent],
  exports:[
    DashboardComponent,StudentdetailsComponent
  ],
  providers:[StudentactivatorService,{provide:'studentdeactivator',useValue:isnotSaved}]
})
export class DashboardModule { }

function isnotSaved(component:AddstudentComponent){
  if(component.isNotSaved){
    return window.confirm("Not saved. Continue?");}
  return true;
}

