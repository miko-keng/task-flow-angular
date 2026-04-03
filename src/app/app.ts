import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <h1>My Angular App</h1>
    <nav>
      <a routerLink="">Todo</a> |
      <a routerLink="about">About</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }