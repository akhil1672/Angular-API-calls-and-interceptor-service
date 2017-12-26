import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';
import { Todo } from './todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  selected:number=0;
  constructor(private todo: ApisService, private router: Router) { }

  todosfunc(value)
  {
    this.selected=1;
    return this.todo.getTodos(value).subscribe((response: Todo[]) => {
      this.todos = response;
      console.log(response);
      if (response.length == 0) {
        this.selected = 0;
      }
    });
  }
  return() {
    this.selected = 0;
    this.router.navigate(['apis']);
  }

  ngOnInit() {
  }

}
