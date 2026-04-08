import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  protected readonly title = signal('angular-app');

  protected readonly approutes = routes;
}
