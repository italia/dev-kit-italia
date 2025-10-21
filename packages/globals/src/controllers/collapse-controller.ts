import { ReactiveController, ReactiveControllerHost } from 'lit';

export class CollapseAnimationController implements ReactiveController {
  private host: ReactiveControllerHost;

  private animating: WeakSet<HTMLElement>;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.animating = new WeakSet();
    this.host.addController(this);
  }

  // hostConnected() {}

  hostDisconnected() {
    this.host.removeController(this);
  }

  toggle(element: HTMLElement, triggerElement?: HTMLElement): void {
    // if (this.animating.has(element)) return;
    const isOpen = element.classList.contains('show');

    if (isOpen) {
      this.hide(element, triggerElement);
    } else {
      this.show(element, triggerElement);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  show(element: HTMLElement, triggerElement?: HTMLElement): void {
    const target = element;
    if (!target) return;
    if (triggerElement) {
      // eslint-disable-next-line no-param-reassign
      if ('expanded' in triggerElement) triggerElement.expanded = true;
      triggerElement.classList.remove('collapsed');
    }

    // Get target height
    target.style.display = 'block';
    const targetHeight = target.scrollHeight;
    target.style.display = '';
    target.style.setProperty('--collapse-target-height', `${targetHeight}px`);

    requestAnimationFrame(() => {
      // SOSTITUISCI .collapse con .collapsing durante l'animazione
      target.classList.remove('collapse');
      target.classList.add('collapsing');

      requestAnimationFrame(() => {
        // Quando l'animazione finisce: rimuovi .collapsing, ripristina .collapse + .show
        target.classList.remove('collapsing');
        target.classList.add('collapse', 'show');
        target.style.removeProperty('--collapse-target-height');
      });
    });
    // requestAnimationFrame(() => {
    //   target.style.height = `${targetHeight}px`;

    //   const onEnd = (e: TransitionEvent) => {
    //     if (e.propertyName !== 'height') return;
    //     target.removeEventListener('transitionend', onEnd);
    //     target.classList.remove('collapsing');
    //     target.classList.add('collapse', 'show');
    //     target.style.height = 'auto';
    //     this.animating.delete(target);
    //   };
    //   target.addEventListener('transitionend', onEnd);
    // });
  }

  // eslint-disable-next-line class-methods-use-this
  hide(element: HTMLElement, triggerElement?: HTMLElement): void {
    if (triggerElement) {
      // eslint-disable-next-line no-param-reassign
      if ('expanded' in triggerElement) triggerElement.expanded = false;
      triggerElement.classList.add('collapsed');
    }

    const currentHeight = element.offsetHeight;
    element.style.setProperty('--collapse-target-height', `${currentHeight}px`);
    requestAnimationFrame(() => {
      // SOSTITUISCI .collapse.show con .collapsing durante l'animazione
      element.classList.remove('collapse', 'show');
      element.classList.add('collapsing');

      requestAnimationFrame(() => {
        element.style.setProperty('--collapse-target-height', '0px');
        element.classList.remove('collapsing');
        element.classList.add('collapse');
        element.style.removeProperty('--collapse-target-height');

        // Quando l'animazione finisce: rimuovi .collapsing, ripristina .collapse
        setTimeout(() => {
          element.classList.remove('collapsing');
          element.classList.add('collapse');
          element.style.removeProperty('--collapse-target-height');
        }, 350); // Match transition duration
      });
    });
  }

  // ...existing code...

  // eslint-disable-next-line class-methods-use-this
  isOpen(element: HTMLElement): boolean {
    return element.classList.contains('show');
  }
}
