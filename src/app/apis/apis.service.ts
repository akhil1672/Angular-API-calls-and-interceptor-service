import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApisService {

  constructor(private httpclient:HttpClient) { }

  getPosts(start,limit){
    const url = 'https://jsonplaceholder.typicode.com/posts?_start=' + start + '&&' + '_limit=' + limit;
    return this.httpclient.get(url);
  }

  getComments(pid,id) {
    const url = 'https://jsonplaceholder.typicode.com/comments?postId=' + pid + '&&' + 'id=' + id;
    return this.httpclient.get(url);
  }

  getTodos(value){
    const url = 'https://jsonplaceholder.typicode.com/todos?completed='+value;
    return this.httpclient.get(url);
  }

  getPhotos()
  {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    return this.httpclient.get(url);
  }

}
