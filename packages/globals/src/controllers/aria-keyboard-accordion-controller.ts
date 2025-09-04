import { ReactiveController, ReactiveControllerHost } from 'lit';

export interface AriaKeyboardAccordionConfig {
  getItems: () => HTMLElement[];
  setActive: (idx: number) => void;
}

export class AriaKeyboardAccordionController implements ReactiveController {
  private host: ReactiveControllerHost;

  private config!: AriaKeyboardAccordionConfig;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.host.addController(this);
  }

  setConfig(config: AriaKeyboardAccordionConfig) {
    this.config = config;
  }

  hostDisconnected() {
    this.host.removeController(this);
  }

  // eslint-disable-next-line class-methods-use-this
  private getActiveElement(): HTMLElement | null {
    let active = document.activeElement;
    while (active && active.shadowRoot && active.shadowRoot.activeElement) {
      active = active.shadowRoot.activeElement;
    }
    return active as HTMLElement | null;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (!this.config) return;
    const items = this.config.getItems();
    const activeElement = this.getActiveElement();
    const currentIndex = items.indexOf(activeElement as HTMLButtonElement);
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (items.length) this.config.setActive(currentIndex < 0 ? 0 : (currentIndex + 1) % items.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (items.length)
          this.config.setActive(currentIndex < 0 ? items.length - 1 : (currentIndex - 1 + items.length) % items.length);
        break;
      case 'Home':
        console.log('Home pressed');
        event.preventDefault();
        if (items.length) this.config.setActive(0);
        break;
      case 'End':
        console.log('End pressed');
        event.preventDefault();
        if (items.length) this.config.setActive(items.length - 1);
        break;
      // case 'Enter':
      // case ' ':
      //   event.preventDefault();
      //   this.config.toggle(activeElement?.getAttribute('aria-controls') ?? '');
      //   break;
      default:
        break;
    }
  }
}
