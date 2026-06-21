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

  ngOnInit(): void {
    // Cacher le loader après le chargement
    const loader = document.getElementById('loader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 500); // 500ms pour que les animations soient fluides
    }
  }







}
