import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class ForwardComponent {
  title = 'Forward';

  forwardStatus = '';

  onNavigate(e: Event) {
    e.preventDefault();
    const detail = (e as CustomEvent).detail;
    this.forwardStatus = `Navigazione intercettata verso "${detail.href}". Scorro io…`;
    if (detail.target) {
      (e.currentTarget as any).navigateTo(detail.target);
    }
  }
}
