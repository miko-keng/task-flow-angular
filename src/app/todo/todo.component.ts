import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 400px; margin: auto;">
      <h2>Todo App</h2>

      <!-- Input -->
      <input
        [(ngModel)]="newTodo"
        placeholder="Enter a task"
      />
      <button (click)="addTodo()">Add</button>

      <!-- List -->
      <ul>
        <li *ngFor="let todo of todos; let i = index">
          {{ todo }}

          <button (click)="deleteTodo(i)">❌</button>
        </li>
      </ul>

      <!-- Empty state -->
      <p *ngIf="todos.length === 0">No tasks yet</p>
    </div>
  `,
})

export class TodoComponent {
  newTodo: string = '';
  todos: string[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}