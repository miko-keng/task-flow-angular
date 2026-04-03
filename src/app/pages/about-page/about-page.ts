import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>About Page</h2>
    <p>This is the About page content.</p>
  `
})
export class AboutPageComponent { }