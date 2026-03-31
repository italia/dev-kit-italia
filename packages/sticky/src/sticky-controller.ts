import { ReactiveController, ReactiveControllerHost } from 'lit';
import { type ScrollState, WindowManager } from '@italia/globals';

// ─── Config interface ────────────────────────────────────────────────────────

/**
 * Properties a host element must expose to be driven by StickyController.
 * Both `it-sticky` and any other component (e.g. `it-bottom-nav`) implement this.
 */
export interface StickyConfig {
  paddingTop?: number | string;
  stackable?: boolean;
  stickyClassName?: string;
  positionType?: 'fixed' | 'sticky';
  /** Which viewport edge to stick to. Defaults to `'top'`. */
  position?: 'top' | 'bottom';
  // eslint-disable-next-line no-use-before-define
  _stickyController?: StickyController<any>;
}

/** Intersection of HTMLElement and StickyConfig — the actual host element type. */
export type StickyElement = HTMLElement & StickyConfig;

// ─── Legacy alias kept for backwards compatibility ───────────────────────────

/** @deprecated Use StickyConfig instead. */
export interface StickyOptions {
  paddingTop?: number;
  stackable?: boolean;
  stickyClassName?: string;
  positionType?: 'fixed' | 'sticky';
}

// ─── Global singleton state ──────────────────────────────────────────────────
//
// Shared across all instances — including when the module is loaded more than
// once (e.g. bundler code-splitting). `declare global { var }` merges into the
// `globalThis` type without emitting a runtime `var` statement.

declare global {
  // eslint-disable-next-line no-var, vars-on-top
  var __itStickyState:
    | { activeFixedTopStickies: StickyElement[]; activeFixedBottomStickies: StickyElement[] }
    | undefined;
}

globalThis.__itStickyState ??= {
  activeFixedTopStickies: [],
  activeFixedBottomStickies: [],
};

const { activeFixedTopStickies, activeFixedBottomStickies } = globalThis.__itStickyState;

// ─── Controller ──────────────────────────────────────────────────────────────

export class StickyController<T extends StickyElement = StickyElement> implements ReactiveController {
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

  /** Whether this controller is managing a bottom-edge element. */
  private get isBottom(): boolean {
    return this.hostElement.position === 'bottom';
  }

  constructor(host: ReactiveControllerHost, hostElement: T) {
    this.host = host;
    this.hostElement = hostElement;

    host.addController(this);
  }

  hostConnected() {
    WindowManager.init();

    if (this.isBottom && this.hostElement.positionType === 'fixed') {
      // Bottom-fixed elements are always active — no scroll trigger needed.
      this.applySticky(0);
      this._isSticky = true;
    } else {
      this.computeLimit();
      this.originalLimit = this.hostElement.offsetTop;
      WindowManager.subscribe(this.onWindowUpdate.bind(this));
    }

    // ResizeObserver tracks height changes so stacked peers can reposition.
    if (this.hostElement.firstElementChild) {
      const content = this.hostElement.firstElementChild;
      this.resizeObserver = new ResizeObserver(() => {
        if (this.isBottom) {
          const currentHeight = this.hostElement.getBoundingClientRect().height;
          if (currentHeight !== this.height) {
            this.height = currentHeight;
            if (this._isSticky) this.updateAllActiveFixedBottomPositions();
          }
        } else {
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
        }
      });
      this.resizeObserver.observe(content);
    }
  }

  hostDisconnected() {
    this.host.removeController(this);
    this.resizeObserver?.disconnect();

    if (this.isBottom) {
      // Clean up the global bottom list and reposition remaining peers.
      if (this._isSticky) {
        this.resetSticky();
        this._isSticky = false;
      }
    } else {
      WindowManager.unsubscribe(this.onWindowUpdate.bind(this));
    }
  }

  hostUpdate() {
    if (this.isBottom) {
      // Bottom elements: only update the bottom offset when stackable and active.
      if (this._isSticky && this.hostElement.stackable) {
        this.hostElement.style.bottom = `${this.computeBottomOffset()}px`;
      }
      return;
    }

    // Top elements: recompute limit and enforce correct top position.
    this.computeLimit();
    this.prevHeight = this.hostElement.getBoundingClientRect().height + Number(this.hostElement.paddingTop || 0);
    if (this._isSticky) {
      const offset = this.hostElement.stackable ? this.computeOffset() : 0;
      this.hostElement.style.top = `${offset + Number(this.hostElement.paddingTop || 0)}px`;
    } else {
      this.hostElement.style.top = `${Number(this.hostElement.paddingTop || 0)}px`;
    }
  }

  protected computeLimit() {
    if (this._isSticky) {
      // Keep original limit — getBoundingClientRect is expensive when sticky.
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

  /**
   * Walks the DOM from `document.body` using a TreeWalker and collects every
   * element for which `predicate` returns true.
   *
   * Compared to `querySelectorAll` this avoids allocating a static NodeList,
   * allows arbitrary JS predicates (not just CSS selectors), and is the
   * idiomatic API for programmatic DOM traversal.
   */
  // eslint-disable-next-line class-methods-use-this
  private walkElements(predicate: (el: HTMLElement) => boolean): StickyElement[] {
    const results: StickyElement[] = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (node) => (predicate(node as HTMLElement) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP),
    });
    for (let node = walker.nextNode(); node !== null; node = walker.nextNode()) {
      results.push(node as unknown as StickyElement);
    }
    return results;
  }

  protected getPreviousFixedStickiesHeight(): number {
    const myContainingBlock = this.getFixedContainingBlockFor(this.hostElement);
    return this.walkElements(
      (el) =>
        !!(el as StickyElement)._stickyController &&
        !!(el as StickyElement).stackable &&
        (el as StickyElement).positionType === 'fixed',
    )
      .filter(
        (sticky) =>
          sticky !== this.hostElement &&
          this.getFixedContainingBlockFor(sticky) === myContainingBlock &&
          this.isBeforeInDOM(sticky, this.hostElement),
      )
      .reduce((acc, sticky) => {
        const rect = sticky.getBoundingClientRect();
        return acc + rect.height + Number(sticky.paddingTop || 0);
      }, 0);
  }

  /**
   * Computes the top offset for top-edge stackable stickies.
   *
   * Visual order: active fixed-top first (activation order), then
   * non-fixed in DOM order. Returns the cumulative height of all elements
   * with a lower visual order than this one.
   */
  protected computeOffset(): number {
    if (!this.hostElement.stackable) return 0;

    const myContainingBlock = this.getFixedContainingBlockFor(this.hostElement);

    // Only consider fixed-top stickies within the same CSS containing block.
    const scopedFixed = activeFixedTopStickies.filter(
      (el) => this.getFixedContainingBlockFor(el) === myContainingBlock,
    );

    const allStickies = this.walkElements(
      (el) => !!(el as StickyElement)._stickyController && !!(el as StickyElement).stackable,
    );
    const visualOrderList = [
      ...scopedFixed,
      ...allStickies.filter((el) => el.positionType !== 'fixed' && !scopedFixed.includes(el)),
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
      // paddingTop creates visual space that must be included in the offset.
      const addPad = Number(sticky.paddingTop || 0);
      return acc + rect.height + addPad;
    }, 0);
  }

  /**
   * Returns the nearest ancestor element that creates a CSS fixed-position
   * containing block (i.e. has a non-none `transform`, `filter`, or
   * `perspective`), or `null` when the viewport is the containing block.
   *
   * Two bottom-fixed elements that share the same containing block should
   * stack against each other; elements in different containing blocks
   * (e.g. separate Storybook story previews) are fully independent.
   */
  // eslint-disable-next-line class-methods-use-this
  private getFixedContainingBlockFor(el: Element): Element | null {
    let parent: Element | null = el.parentElement;
    while (parent && parent !== document.documentElement) {
      const style = getComputedStyle(parent);
      if (style.transform !== 'none' || style.filter !== 'none' || style.perspective !== 'none') {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null; // viewport is the containing block
  }

  /**
   * Computes the bottom offset for bottom-edge stackable stickies.
   *
   * Only elements that share the same CSS fixed containing block are counted —
   * this prevents elements in separate story previews (or any transformed
   * containers) from stacking against each other.
   */
  protected computeBottomOffset(): number {
    if (!this.hostElement.stackable) return 0;

    const myContainingBlock = this.getFixedContainingBlockFor(this.hostElement);
    const myIndex = activeFixedBottomStickies.indexOf(this.hostElement);
    if (myIndex <= 0) return 0;

    return activeFixedBottomStickies
      .slice(0, myIndex)
      .filter((el) => this.getFixedContainingBlockFor(el) === myContainingBlock)
      .reduce((acc, el) => acc + el.getBoundingClientRect().height, 0);
  }

  protected getClasses() {
    if (!this.hostElement.stickyClassName) return [];
    const stickyClasses = this.hostElement.stickyClassName.split(' ').filter((c) => c.trim());
    return stickyClasses.length ? [...new Set(stickyClasses)] : [this.hostElement.stickyClassName];
  }

  protected onWindowUpdate(state: ScrollState, forceRecalc?: boolean) {
    // Bottom-fixed elements activate immediately on connect and never scroll-toggle.
    if (this.isBottom) return;

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
      // Still sticky and stackable: update position in case peers changed.
      const newOffset = this.computeOffset();
      this.hostElement.style.top = `${newOffset + Number(this.hostElement.paddingTop || 0)}px`;
    }
  }

  protected applySticky(offset = 0) {
    const classes = this.getClasses();

    if (this.isBottom) {
      this.hostElement.classList.add(...classes, 'bs-is-fixed-bottom');
      if (!activeFixedBottomStickies.includes(this.hostElement)) {
        activeFixedBottomStickies.push(this.hostElement);
      }
      // Update all bottom positions after adding class so getBoundingClientRect
      // returns the correct rendered dimensions.
      this.updateAllActiveFixedBottomPositions();
    } else if (this.hostElement.positionType === 'fixed') {
      this.hostElement.classList.add(...classes, 'bs-is-fixed');
      if (!activeFixedTopStickies.includes(this.hostElement)) {
        activeFixedTopStickies.push(this.hostElement);
      }
      // Update position of all active fixed after applying classes
      // so getBoundingClientRect() returns correct dimensions.
      this.updateAllActiveFixedTopPositions();
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

    if (this.isBottom) {
      this.hostElement.classList.remove(...classes, 'bs-is-fixed-bottom');
      const idx = activeFixedBottomStickies.indexOf(this.hostElement);
      if (idx !== -1) activeFixedBottomStickies.splice(idx, 1);
      this.updateAllActiveFixedBottomPositions();
      this.hostElement.style.bottom = '';
    } else if (this.hostElement.positionType === 'fixed') {
      this.hostElement.classList.remove(...classes, 'bs-is-fixed');
      const idx = activeFixedTopStickies.indexOf(this.hostElement);
      if (idx !== -1) activeFixedTopStickies.splice(idx, 1);
      this.updateAllActiveFixedTopPositions();
      this.hostElement.style.top = '';
    } else {
      this.hostElement.classList.remove(...classes, 'bs-is-sticky');
      this.hostElement.style.top = '';
    }

    this.hostElement.dispatchEvent(
      new CustomEvent('it-sticky-off', {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: { id: this.hostElement.id },
      }),
    );
  }

  /**
   * Restacks all active top-fixed stickies from the top of their respective
   * containing block downward.
   *
   * Symmetric with `updateAllActiveFixedBottomPositions`: elements grouped by
   * CSS containing block so that stickies in separate containers (e.g. different
   * Storybook previews) each start at `top: 0` independently.
   */
  private updateAllActiveFixedTopPositions() {
    const groups = new Map<Element | null, StickyElement[]>();
    activeFixedTopStickies.forEach((el) => {
      const cb = this.getFixedContainingBlockFor(el);
      if (!groups.has(cb)) groups.set(cb, []);
      groups.get(cb)!.push(el);
    });

    groups.forEach((elements) => {
      let offset = 0;
      elements.forEach((elParam) => {
        const el = elParam;
        const ctrl = el._stickyController;
        if (ctrl) {
          const paddingTop = Number(el.paddingTop || 0);
          el.style.top = `${offset + paddingTop}px`;
          const rect = el.getBoundingClientRect();
          offset += rect.height + paddingTop;
        }
      });
    });
  }

  /**
   * Restacks all active bottom-fixed stickies from the bottom of their
   * respective containing block upward.
   *
   * Elements are grouped by their CSS fixed containing block so that
   * stickies in separate containers (e.g. different Storybook previews)
   * each start at `bottom: 0` and don't affect one another.
   */
  private updateAllActiveFixedBottomPositions() {
    // Group by containing block (null = viewport).
    const groups = new Map<Element | null, StickyElement[]>();
    activeFixedBottomStickies.forEach((el) => {
      const cb = this.getFixedContainingBlockFor(el);
      if (!groups.has(cb)) groups.set(cb, []);
      groups.get(cb)!.push(el);
    });

    groups.forEach((elements) => {
      let offset = 0;
      elements.forEach((elParam) => {
        const el = elParam;
        el.style.bottom = `${offset}px`;
        offset += el.getBoundingClientRect().height;
      });
    });
  }
}
