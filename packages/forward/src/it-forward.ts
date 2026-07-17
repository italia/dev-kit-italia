import { customElement } from 'lit/decorators.js';
import { BaseComponent, dispatchCancelable } from '@italia/globals';
import type { ForwardNavigateEventDetail } from './types.js';

/**
 * Componente Forward.
 *
 * Web component _light DOM_ (senza shadow DOM) che avvolge il link `.forward` di
 * Bootstrap Italia e ne implementa il comportamento di default: scorrimento fluido
 * fino alla sezione di destinazione e spostamento del focus su di essa.
 *
 * @element it-forward
 *
 * @fires it-forward-navigate - Al click sul link (cancelable: `preventDefault()` impedisce lo scorrimento di default)
 */
@customElement('it-forward')
export class ItForward extends BaseComponent {
  createRenderRoot() {
    return this;
  }

  override connectedCallback(): void {
    super.connectedCallback?.();
    this.addEventListener('click', this._onClick);
  }

  override disconnectedCallback(): void {
    this.removeEventListener('click', this._onClick);
    super.disconnectedCallback?.();
  }

  private get _link(): HTMLAnchorElement | null {
    return this.querySelector<HTMLAnchorElement>('.forward');
  }

  private _onClick = (event: MouseEvent): void => {
    const link = this._link;
    if (!link) return;
    if (!event.composedPath().includes(link)) return;

    // Gestiamo noi lo scorrimento: evitiamo il salto istantaneo all'àncora.
    event.preventDefault();

    const href = link.getAttribute('href') ?? '';
    const target = ItForward._resolveTarget(href);

    dispatchCancelable<ForwardNavigateEventDetail>(this, 'it-forward-navigate', { href, target }, () => {
      if (target) this._scrollToTarget(target);
    });
  };

  /**
   * Scorre fino all'elemento di destinazione e vi sposta il focus.
   * Può essere richiamato dopo aver intercettato `it-forward-navigate`.
   */
  public navigateTo(target: HTMLElement): void {
    this._scrollToTarget(target);
  }

  private _scrollToTarget(target: HTMLElement): void {
    target.scrollIntoView({
      behavior: this.prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }

  private static _resolveTarget(href: string): HTMLElement | null {
    if (!href.startsWith('#') || href.length <= 1) return null;
    return document.querySelector<HTMLElement>(href);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-forward': ItForward;
  }
}
