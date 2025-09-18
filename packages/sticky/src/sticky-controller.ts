import { ReactiveController, ReactiveControllerHost } from 'lit';
import { type ScrollState, WindowManager } from '@italia/globals';
import { ItSticky } from './it-sticky.js';

export interface StickyOptions {
  paddingTop?: number;
  stackable?: boolean;
  stickyClassName?: string;
  positionType?: 'fixed' | 'sticky';
}

export class StickyController<T extends ItSticky = ItSticky> implements ReactiveController {
  private host: ReactiveControllerHost;

  private limit = 0;

  private originalLimit = 0;

  private height = 0;

  private prevHeight = 0;

  private hostElement: T;

  private _isSticky = false;

  get isSticky(): boolean {
    return this._isSticky;
  }

  // eslint-disable-next-line no-use-before-define
  private static registry: StickyController[] = [];

  private resizeObserver?: ResizeObserver;

  constructor(host: ReactiveControllerHost, hostElement: T) {
    this.host = host;
    this.hostElement = hostElement; // salva l'elemento reale

    host.addController(this);
  }

  hostConnected() {
    WindowManager.init();
    this.computeLimit();
    this.originalLimit = this.hostElement.offsetTop; // salva posizione iniziale
    WindowManager.subscribe(this.onWindowUpdate.bind(this));
    StickyController.registry.push(this);
    // Setup ResizeObserver per contenuto
    if (this.hostElement.firstElementChild) {
      const content = this.hostElement.firstElementChild;
      this.resizeObserver = new ResizeObserver(() => {
        // usa getBoundingClientRect().height invece di offsetHeight
        const currentHeight = this.hostElement.getBoundingClientRect().height;
        if (currentHeight !== this.height) {
          this.height = currentHeight; // aggiorna subpixel-safe
          this.computeLimit();

          if (this.hostElement.stackable && this._isSticky) {
            const offset = this.computeOffset();
            this.hostElement.style.top = `${offset + Number(this.hostElement.paddingTop || 0)}px`;
          }
        }
      });
      this.resizeObserver.observe(content);
    }
  }

  hostDisconnected() {
    WindowManager.unsubscribe(this.onWindowUpdate.bind(this));
    this.host.removeController(this);
    StickyController.registry = StickyController.registry.filter((ctrl) => ctrl !== this);
    this.resizeObserver?.disconnect();
  }

  hostUpdate() {
    // ricalcola il limite ad ogni update
    this.computeLimit();
    this.prevHeight = this.hostElement.offsetHeight;
    // se sono sticky, ricalcola la posizione
    if (this._isSticky) {
      const offset = this.hostElement.stackable ? this.computeOffset() : 0;
      this.hostElement.style.top = `${offset + Number(this.hostElement.paddingTop || 0)}px`;
    } else {
      this.hostElement.style.top = `${Number(this.hostElement.paddingTop || 0)}px`;
    }
  }

  protected computeLimit() {
    if (this._isSticky) {
      // Se siamo già sticky, non ricalcolare dal rect
      this.limit = this.originalLimit;
    } else {
      const rect = this.hostElement.getBoundingClientRect();
      const { scrollY } = window;
      this.limit = rect.top + scrollY;
      this.height = rect.height;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  protected isBeforeInDOM(a: Element, b: Element): boolean {
    // https:// developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
    // eslint-disable-next-line no-bitwise
    return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
  }

  /** Ritorna gli stickies attivi e stackable prima di me nel DOM */
  protected getPreviousActiveStickies(): StickyController[] {
    // console.log('getPreviousActiveStickies', StickyController.registry);
    return StickyController.registry.filter((ctrl) => {
      if (ctrl === this) return false;
      return ctrl.isSticky && ctrl.hostElement.stackable && this.isBeforeInDOM(ctrl.hostElement, this.hostElement);
    });
  }

  /** Calcola l'offset totale sommando l'altezza degli sticky precedenti */
  private computeOffset(): number {
    if (!this.hostElement.stackable) {
      return 0;
    }
    const prevStickies = this.getPreviousActiveStickies();
    const totalHeight = prevStickies.reduce((acc, ctrl) => acc + ctrl.height, 0);
    return totalHeight;
  }

  protected getClasses() {
    if (!this.hostElement.stickyClassName) return [];
    const stickyClasses = this.hostElement.stickyClassName.split(' ').filter((c) => c.trim());
    return stickyClasses.length ? [...new Set(stickyClasses)] : [this.hostElement.stickyClassName];
  }

  protected onWindowUpdate(state: ScrollState, forceRecalc?: boolean) {
    const currentHeight = this.hostElement.offsetHeight;
    if (forceRecalc && currentHeight !== this.prevHeight) {
      this.computeLimit();
      this.prevHeight = currentHeight;
    }

    const offset = this.hostElement.stackable ? this.computeOffset() : 0;
    const shouldBeSticky = state.scrollY > this.limit - (offset + Number(this.hostElement.paddingTop || 0));

    if (shouldBeSticky && !this._isSticky) {
      this.applySticky(offset);
      this._isSticky = true;
    } else if (!shouldBeSticky && this._isSticky) {
      this.resetSticky();
      this._isSticky = false;
    }
  }

  protected applySticky(offset = 0) {
    // console.log('applySticky', offset);
    const classes = this.getClasses();
    if (this.hostElement.positionType === 'fixed') {
      this.hostElement.classList.add(...classes, 'bs-is-fixed');
    } else this.hostElement.classList.add(...classes, 'bs-is-sticky');

    this.hostElement.style.top = `${offset + Number(this.hostElement.paddingTop || 0)}px`;
    this.hostElement.dispatchEvent(
      new CustomEvent('it-sticky-on', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: { id: this.hostElement.id },
      }),
    );
  }

  protected resetSticky() {
    const classes = this.getClasses();
    if (this.hostElement.positionType === 'fixed') {
      this.hostElement.classList.remove(...classes, 'bs-is-fixed');
    } else this.hostElement.classList.remove(...classes, 'bs-is-sticky');
    this.hostElement.style.top = '';

    this.hostElement.dispatchEvent(
      new CustomEvent('it-sticky-off', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: { id: this.hostElement.id },
      }),
    );
  }
}
