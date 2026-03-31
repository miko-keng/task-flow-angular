import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from '../todo-input/todo-input';
import { TodoListComponent } from '../todo-list/todo-list';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoInputComponent, TodoListComponent],
  template: `
    <h2>Todo App</h2>

    <app-todo-input></app-todo-input>
    <app-todo-list></app-todo-list>
  `,
})
export class TodoComponent {}