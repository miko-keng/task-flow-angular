import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.html',
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}

  get todos() {
    return this.todoService.getTodos();
  }

  delete(index: number) {
    this.todoService.deleteTodo(index);
  }
}