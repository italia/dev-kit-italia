import { ReactiveController, ReactiveControllerHost } from 'lit';
import { type ScrollState, WindowManager } from '@italia/globals';

export interface StickyOptions {
  paddingTop?: number;
  dynamicStack?: boolean;
  isMobileStack?: boolean;
}

export class StickyController implements ReactiveController {
  private host: ReactiveControllerHost;

  private options: StickyOptions;

  private limit = 0;

  private height = 0;

  private hostElement: HTMLElement;

  constructor(host: ReactiveControllerHost, hostElement: HTMLElement, options?: StickyOptions = {}) {
    this.host = host;
    this.hostElement = hostElement; // salva l'elemento reale
    this.options = options;

    host.addController(this);
  }

  hostConnected() {
    WindowManager.init();
    this.computeLimit();
    WindowManager.registerSticky(this);
  }

  hostDisconnected() {
    WindowManager.unregisterSticky(this);
    this.host.removeController(this);
  }

  // hostUpdate() {}

  computeLimit() {
    const rect = this.hostElement.getBoundingClientRect();
    const { scrollY } = window;
    this.limit = rect.top + scrollY;
    this.height = rect.height;
  }

  onWindowUpdate(state: ScrollState, forceRecalc?: boolean) {
    if (forceRecalc) this.computeLimit();
    if (state.scrollY > this.limit) this.applySticky();
    else this.resetSticky();
  }

  applySticky(offset = 0) {
    this.hostElement.classList.add('sticky');
    this.hostElement.style.top = `${offset + (this.options.paddingTop || 0)}px`;
  }

  resetSticky() {
    this.hostElement.classList.remove('sticky');
    this.hostElement.style.top = '';
  }
}
