import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../common/album.service';
import { Album } from './album';
import { PagerService } from '../common/pager.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private albums: Album[]; 
  start:number;
  limit:any;  
  event:any;

  public limits=['1','10','50','100'];
  constructor(private album: AlbumService) {
    this.start=0;
    this.limit=10;      
   }
  
   selected(value)
   {
      this.limit=value.text;
      console.log(this.limit); 
     return this.album.getAlbums(this.start, this.limit).subscribe((response: Album[]) => {
       this.albums = response;
      // console.log(response)
     });
   }

   show(img){
     this.event=img;
   }

  ngOnInit() {
    this.album.getAlbums(this.start,this.limit).subscribe((response:Album[])=>{
      this.albums=response;
      console.log(response);
    });

}
}
