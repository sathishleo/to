import { Component, inject } from '@angular/core';
import { CardComponent } from './card/card.component';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  todoService: TodoService = inject(TodoService);

  constructor(){
    this.todoService.todos=JSON.parse(localStorage.getItem('todos') || "") as Todo[];
  }

}
