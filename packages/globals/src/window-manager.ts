export type ScrollState = { scrollY: number; width: number; height: number };
export type ScrollCallback = (state: ScrollState, forceRecalc?: boolean) => void;

export class WindowManager {
  private static initialized = false;

  private static subscribers = new Set<ScrollCallback>();

  private static lastScrollY = 0;

  private static lastWidth = 0;

  private static lastHeight = 0;

  private static ticking = false;

  // Body scroll lock (ref counting per modal nested)
  private static scrollLockCount = 0;

  private static scrollbarWidth = 0;

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

  /**
   * Blocca lo scroll del body. Usa ref counting per gestire modal nested.
   * Chiamare unlockBodyScroll() per ogni lockBodyScroll().
   */
  static lockBodyScroll(): void {
    this.scrollLockCount += 1;
    if (this.scrollLockCount === 1) {
      this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${this.scrollbarWidth}px`;
    }
  }

  /**
   * Sblocca lo scroll del body. Rimuove il lock solo quando tutti i consumer hanno chiamato unlock.
   */
  static unlockBodyScroll(): void {
    this.scrollLockCount = Math.max(0, this.scrollLockCount - 1);
    if (this.scrollLockCount === 0) {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  /** Ritorna la larghezza della scrollbar (utile per compensazioni) */
  static getScrollbarWidth(): number {
    return this.scrollbarWidth || window.innerWidth - document.documentElement.clientWidth;
  }
}
