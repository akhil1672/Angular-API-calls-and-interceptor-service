import { Injectable } from '@angular/core';
import { Album } from '../album/album';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AlbumService {
  
  constructor(private httpclient:HttpClient){
    }
  getAlbums(start,limit){
    const url = 'https://jsonplaceholder.typicode.com/photos?_start='+start+'&'+'_limit='+limit;  
    return this.httpclient.get<Album[]>(url);
    }
}
