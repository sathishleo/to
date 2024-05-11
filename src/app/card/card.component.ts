import { Component, Input, inject } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  todoService: TodoService = inject(TodoService);
  @Input() todoName: string = '';
  @Input() id: number = 0;
  isEdit:boolean=false

  toggleedit(){
    this.isEdit=!this.isEdit;
  }
  save(){
    let new_value = (document.getElementById(String(this.id)) as HTMLInputElement).value;
    this.todoService.editTodo(this.id,new_value)
    this.toggleedit()

  }
  cancel(){

  }
}
