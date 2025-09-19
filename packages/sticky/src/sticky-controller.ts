import { ReactiveController, ReactiveControllerHost } from 'lit';
import { type ScrollState, WindowManager } from '@italia/globals';
import { ItSticky } from './it-sticky.js';

// Shared global array to avoid duplicate instances when the module is
// loaded multiple times
const GLOBAL_ACTIVE_FIXED_KEY = '__it_sticky_active_fixed_stickies_v1__';
const activeFixedStickies: ItSticky[] =
  (globalThis as any)[GLOBAL_ACTIVE_FIXED_KEY] ?? ((globalThis as any)[GLOBAL_ACTIVE_FIXED_KEY] = []);

export interface StickyOptions {
  paddingTop?: number;
  stackable?: boolean;
  stickyClassName?: string;
  positionType?: 'fixed' | 'sticky';
}

export class StickyController<T extends ItSticky = ItSticky> implements ReactiveController {
  public visualOrder: number = 0;

  public setVisualOrder(order: number) {
    this.visualOrder = order;
  }

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

  private resizeObserver?: ResizeObserver;

  constructor(host: ReactiveControllerHost, hostElement: T) {
    this.host = host;
    this.hostElement = hostElement;

    host.addController(this);
  }

  hostConnected() {
    WindowManager.init();
    this.computeLimit();
    this.originalLimit = this.hostElement.offsetTop;
    WindowManager.subscribe(this.onWindowUpdate.bind(this));

    // Setup ResizeObserver
    if (this.hostElement.firstElementChild) {
      const content = this.hostElement.firstElementChild;
      this.resizeObserver = new ResizeObserver(() => {
        const currentHeight =
          this.hostElement.getBoundingClientRect().height + Number(this.hostElement.paddingTop || 0);
        if (currentHeight !== this.height) {
          this.height = currentHeight;
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
    this.resizeObserver?.disconnect();
  }

  hostUpdate() {
    // Compute limit on every update
    this.computeLimit();
    this.prevHeight = this.hostElement.getBoundingClientRect().height + Number(this.hostElement.paddingTop || 0);
    // If sticky, recalculate position
    if (this._isSticky) {
      const offset = this.hostElement.stackable ? this.computeOffset() : 0;
      this.hostElement.style.top = `${offset + Number(this.hostElement.paddingTop || 0)}px`;
    } else {
      this.hostElement.style.top = `${Number(this.hostElement.paddingTop || 0)}px`;
    }
  }

  protected computeLimit() {
    if (this._isSticky) {
      // If sticky, keep original limit, getBoundingClientRect is expensive
      this.limit = this.originalLimit;
    } else {
      const rect = this.hostElement.getBoundingClientRect();
      const { scrollY } = window;
      this.limit = rect.top + scrollY;
      this.height = rect.height + Number(this.hostElement.paddingTop || 0);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  protected isBeforeInDOM(a: Element, b: Element): boolean {
    // https:// developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
    // this is a bitmask operation
    // eslint-disable-next-line no-bitwise
    return !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);
  }

  protected getPreviousActiveStickies(): ItSticky[] {
    const allActiveStickies = Array.from(
      document.querySelectorAll('it-sticky[stackable].bs-is-sticky, it-sticky[stackable].bs-is-fixed'),
    ) as ItSticky[];

    return allActiveStickies.filter((sticky) => {
      if (sticky === this.hostElement) return false;
      return this.isBeforeInDOM(sticky, this.hostElement);
    });
  }

  protected getPreviousFixedStickiesHeight(): number {
    const allFixedStickies = Array.from(
      document.querySelectorAll('it-sticky[stackable][position-type="fixed"]'),
    ) as ItSticky[];

    return allFixedStickies
      .filter((sticky) => sticky !== this.hostElement && this.isBeforeInDOM(sticky, this.hostElement))
      .reduce((acc, sticky) => {
        const rect = sticky.getBoundingClientRect();
        return acc + rect.height + Number(sticky.paddingTop || 0);
      }, 0);
  }

  protected computeOffset(): number {
    // Get all stickies to determine visual order
    // 1. Get all stickies
    // 2. Active fixed first (in order of activation), then normal in DOM order
    // 3. Set visualOrder on all
    // 4. Find all with visualOrder < mine
    // 5. Sum their heights
    if (!this.hostElement.stackable) {
      return 0;
    }

    const allStickies = Array.from(document.querySelectorAll('it-sticky[stackable]')) as ItSticky[];
    const visualOrderList = [
      ...activeFixedStickies,
      ...allStickies.filter((el) => el.positionType !== 'fixed' && !activeFixedStickies.includes(el)),
    ];
    visualOrderList.forEach((el, idx) => {
      if (el._stickyController) el._stickyController.setVisualOrder(idx);
    });

    const myOrder = this.visualOrder;
    const relevantStickies = visualOrderList.filter(
      (el) => el !== this.hostElement && el._stickyController && el._stickyController.visualOrder < myOrder,
    );
    return relevantStickies.reduce((acc, sticky) => {
      const rect = sticky.getBoundingClientRect();
      // For all elements (fixed and sticky) we need to add paddingTop
      // it creates visual space that must be considered
      const addPad = Number(sticky.paddingTop || 0);
      return acc + rect.height + addPad;
    }, 0);
  }

  protected getClasses() {
    if (!this.hostElement.stickyClassName) return [];
    const stickyClasses = this.hostElement.stickyClassName.split(' ').filter((c) => c.trim());
    return stickyClasses.length ? [...new Set(stickyClasses)] : [this.hostElement.stickyClassName];
  }

  protected onWindowUpdate(state: ScrollState, forceRecalc?: boolean) {
    const currentHeight = this.hostElement.getBoundingClientRect().height;
    if (forceRecalc && currentHeight !== this.prevHeight) {
      this.computeLimit();
      this.prevHeight = currentHeight;
    }

    let offset = 0;
    if (this.hostElement.stackable) {
      offset = this.computeOffset();
    }

    let triggerPoint = this.limit;
    if (this.hostElement.stackable && this.hostElement.positionType !== 'fixed') {
      // Consider previous fixed stickies height and anticipate trigger
      const prevFixedHeight = this.getPreviousFixedStickiesHeight();
      // Anticipate trigger with larger buffer to avoid overlaps
      triggerPoint = this.limit - prevFixedHeight - 40;
    }

    const shouldBeSticky = state.scrollY > triggerPoint - (offset + Number(this.hostElement.paddingTop || 0));

    if (shouldBeSticky && !this._isSticky) {
      this.applySticky(offset);
      this._isSticky = true;
    } else if (!shouldBeSticky && this._isSticky) {
      this.resetSticky();
      this._isSticky = false;
    } else if (this._isSticky && this.hostElement.stackable) {
      // If still sticky and stackable, update position in case of other stickies changing
      const newOffset = this.computeOffset();
      this.hostElement.style.top = `${newOffset + Number(this.hostElement.paddingTop || 0)}px`;
    }
  }

  protected applySticky(offset = 0) {
    const classes = this.getClasses();
    if (this.hostElement.positionType === 'fixed') {
      this.hostElement.classList.add(...classes, 'bs-is-fixed');
      //  Add to active fixed stickies list if not already present
      if (!activeFixedStickies.includes(this.hostElement)) {
        activeFixedStickies.push(this.hostElement);
      }
      // Update position of all active fixed after applying classes
      // so getBoundingClientRect() returns correct dimensions
      this.updateAllActiveFixedPositions();
    } else {
      this.hostElement.classList.add(...classes, 'bs-is-sticky');
      this.hostElement.style.top = `${offset + Number(this.hostElement.paddingTop || 0)}px`;
    }

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
      // Remove from active fixed stickies list
      const idx = activeFixedStickies.indexOf(this.hostElement);
      if (idx !== -1) activeFixedStickies.splice(idx, 1);
      //  Update the position of all active fixed after removal
      this.updateAllActiveFixedPositions();
    } else {
      this.hostElement.classList.remove(...classes, 'bs-is-sticky');
    }
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

  // eslint-disable-next-line class-methods-use-this
  private updateAllActiveFixedPositions() {
    let offset = 0;
    activeFixedStickies.forEach((elParam) => {
      const el = elParam;
      const ctrl = el._stickyController;
      if (ctrl) {
        const paddingTop = Number(el.paddingTop || 0);
        el.style.top = `${offset + paddingTop}px`;

        const rect = el.getBoundingClientRect();
        offset += rect.height + paddingTop;
      }
    });
  }
}
