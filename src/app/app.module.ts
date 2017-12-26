import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { StudentService } from './common/student.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentdetailsComponent } from './dashboard/studentdetails/studentdetails.component';
import { UserModule } from './user/user.module';
import { AlbumComponent } from './album/album.component';
import {HttpClientModule} from '@angular/common/http'
import { AlbumService } from './common/album.service';
import {SelectModule } from 'ng2-select';
import { PagerService } from './common/pager.service';
import { ApisModule } from './apis/apis.module';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent,WelcomeComponent,PagenotfoundComponent, AlbumComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    UserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApisModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path:'welcome', component:WelcomeComponent},
      { path:'students', component: DashboardComponent },
      { path:'pagenotfound',component:PagenotfoundComponent },
      { path:'albums',component:AlbumComponent},
      { path: 'user', loadChildren:'./user/user.module#UserModule'},
      { path: 'apis', loadChildren:'./apis/apis.module#ApisModule'},
      { path:'', redirectTo:'welcome',pathMatch:'full' },
      { path: '**', redirectTo:'pagenotfound', pathMatch: 'full'},
    ])
  ],
  providers: [StudentService,AlbumService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
