export type ScrollState = { scrollY: number; width: number; height: number };
export type ScrollCallback = (state: ScrollState, forceRecalc?: boolean) => void;

export class WindowManager {
  private static initialized = false;

  private static subscribers = new Set<ScrollCallback>();

  private static lastScrollY = 0;

  private static lastWidth = 0;

  private static lastHeight = 0;

  private static ticking = false;

  static init() {
    if (this.initialized) return;

    this.lastScrollY = window.scrollY;
    this.lastWidth = window.innerWidth;
    this.lastHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
      this.lastScrollY = window.scrollY;
      this.requestTick();
    });

    window.addEventListener('resize', () => {
      this.lastWidth = window.innerWidth;
      this.lastHeight = window.innerHeight;
      this.requestTick(true); // force recalculation
    });

    this.initialized = true;
  }

  private static requestTick(forceRecalc = false) {
    if (!this.ticking) {
      requestAnimationFrame(() => this.tick(forceRecalc));
      this.ticking = true;
    }
  }

  private static tick(forceRecalc: boolean) {
    this.ticking = false;
    const state: ScrollState = {
      scrollY: this.lastScrollY,
      width: this.lastWidth,
      height: this.lastHeight,
    };
    this.subscribers.forEach((cb) => cb(state, forceRecalc));
  }

  static subscribe(cb: ScrollCallback) {
    this.subscribers.add(cb);
  }

  static unsubscribe(cb: ScrollCallback) {
    this.subscribers.delete(cb);
  }
}
