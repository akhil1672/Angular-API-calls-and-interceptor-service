import { Component, OnInit } from '@angular/core';
import { Photo } from './photo';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  private photos: Photo[];
  start: number;
  limit: number;
  event:any;
  pagesize:number;

  public limits = ['1', '10', '50', '100','500','1000'];
  constructor(private photo: ApisService,private router:Router) {
    this.start = 0;
    this.limit = 10;
    this.pagesize=20;
  }

  selected(value) {
    this.limit = value.text;
    this.pagesize = value.text;    
    console.log(this.limit);
    return this.photo.getPhotos().subscribe((response: Photo[]) => {
      this.photos = response;
      console.log(response)
    });
  }

  show(img) {
    this.event = img;
    //console.log(this.event);
  }

  ngOnInit() {
    this.photo.getPhotos().subscribe((response: Photo[]) => {
      this.photos = response;
      console.log(response)
    });
  }

}
