import { Component, signal } from '@angular/core';
import { HomePage } from "./components/home-page/home-page";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('restoApp');









}
