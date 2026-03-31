import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  template: `
    <h1>Angular Todo (Structured)</h1>
    <app-todo></app-todo>
  `,
})
export class AppComponent {}