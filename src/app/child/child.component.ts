import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="border: 1px solid black; padding: 10px; margin-top: 10px;">
      <p>Message from parent:</p>
      <h3>{{ message }}</h3>

      <button (click)="sendBack()">Send Reply to Parent</button>
    </div>
  `,
})
export class ChildComponent {
  // receive data from parent
  @Input() message: string = '';

  // send data to parent
  @Output() reply = new EventEmitter<string>();

  sendBack() {
    this.reply.emit('Hello Parent! 👋');
  }
}