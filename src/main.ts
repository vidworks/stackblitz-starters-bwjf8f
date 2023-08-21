import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MultiComboExComponent } from 'multi-combo-ex/multi-combo-ex.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <app-multi-combo-ex></app-multi-combo-ex>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
