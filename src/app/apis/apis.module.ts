import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { ApisService } from './apis.service';
import { RouterModule } from '@angular/router';
import { ApispageComponent } from './apispage/apispage.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';
import { PhotosComponent } from './photos/photos.component';
import { SelectModule } from 'ng2-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PhotosInterceptor } from './photos/photos.interceptor';

@NgModule({
  imports: [SelectModule, NgxPaginationModule,
    CommonModule,RouterModule.forChild([
      {path:'apis/posts',component:PostsComponent},
      {path:'apis/comments',component:CommentsComponent},
      {path:'apis/todos',component:TodosComponent},
      {path:'apis/photos',component:PhotosComponent},
      {path:'apis',component:ApispageComponent},
      {path:'',redirectTo:'/apis',pathMatch:'full'}
    ])
  ],
  declarations: [PostsComponent, ApispageComponent, CommentsComponent,TodosComponent,PhotosComponent],
  providers:[ApisService,{
    provide:HTTP_INTERCEPTORS,useClass:PhotosInterceptor,multi:true
  }]
})
export class ApisModule { }
