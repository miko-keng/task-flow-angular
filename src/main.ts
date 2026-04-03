import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { provideRouter } from '@angular/router';
import { TodoPageComponent } from './app/pages/todo-page/todo-page';
import { AboutPageComponent } from './app/pages/about-page/about-page';

const routes = [
    { path: '', component: TodoPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: '**', redirectTo: '' },
];

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
});