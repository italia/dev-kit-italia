import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class ForwardComponent {
  title = 'Forward';

  // eslint-disable-next-line class-methods-use-this
  handleForwardClick(event: Event) {
    event.preventDefault();
    const link = event.currentTarget as HTMLAnchorElement;
    const targetId = link.getAttribute('href');
    if (!targetId) return;
    const targetElement = document.querySelector(targetId) as HTMLElement;
    if (targetElement) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      targetElement.setAttribute('tabindex', '-1');
      targetElement.focus({ preventScroll: true });
    }
  }
}
