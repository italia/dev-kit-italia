import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class ForwardComponent {
  title = 'Forward';

  handleForwardClick(event: Event) {
    event.preventDefault();
    const link = event.currentTarget as HTMLAnchorElement;
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId || '');
    if (targetElement) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      targetElement.scrollIntoView({ 
        behavior: prefersReducedMotion ? 'auto' : 'smooth', 
        block: 'start' 
      });
    }
  }
}
