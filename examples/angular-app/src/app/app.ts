import { Component, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
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

  protected isFullHeaderPage = false;

  private readonly fullHeaderPaths = new Set([
    '/header-complete-full-example',
    '/header-complete-full-sticky-example',
  ]);

  constructor(private readonly router: Router) {
    this.updateShellMode();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateShellMode();
      }
    });
  }

  private updateShellMode() {
    const path = this.router.url.split('?')[0].split('#')[0];
    this.isFullHeaderPage = this.fullHeaderPaths.has(path);
  }
}
