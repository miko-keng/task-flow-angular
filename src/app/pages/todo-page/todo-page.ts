import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Todo Page</h2>

    <input [(ngModel)]="newTask" placeholder="Enter new task" />
    <button (click)="addTask()">Add</button>

    <ul>
      <li *ngFor="let task of tasks; let i = index">
        <span *ngIf="!task.editing">{{ task.text }}</span>
        <input *ngIf="task.editing" [(ngModel)]="task.text" />
        
        <button *ngIf="!task.editing" (click)="editTask(i)">Edit</button>
        <button *ngIf="task.editing" (click)="doneEdit(i)">Save</button>
        <button (click)="removeTask(i)">Remove</button>
      </li>
    </ul>
  `
})
export class TodoPageComponent {
  newTask: string = '';
  tasks: { text: string; editing?: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim() });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  editTask(index: number) {
    this.tasks[index].editing = true;
  }

  doneEdit(index: number) {
    this.tasks[index].editing = false;
    // Optional: trim text
    this.tasks[index].text = this.tasks[index].text.trim();
  }
}