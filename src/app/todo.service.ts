import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [] as Todo[];

  constructor() { }

  addTodo() {
    let todo = (document.getElementById('inputData') as HTMLInputElement).value,
        id = Math.round(Math.random() * 100),
        obj = {id: id, todoName: todo};
    
    this.todos.push(obj);
    (document.getElementById('inputData') as HTMLInputElement).value=''
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

  deleteTodo(id: number) {
    let newTodos = this.todos.filter(obj => obj.id !== id);
    this.todos = newTodos;
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

  editTodo(id:number,val:string) {
    this.todos.forEach((obj)=>{
      if (obj.id === id){
        obj.todoName = val;
      }

    })
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }

}
