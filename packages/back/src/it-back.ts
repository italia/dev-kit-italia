import { customElement } from 'lit/decorators.js';
import { BaseComponent, dispatchCancelable } from '@italia/globals';
import type { BackNavigateEventDetail } from './types.js';

/**
 * Componente Back.
 *
 * Web component _light DOM_ (senza shadow DOM) che avvolge un elemento `.go-back`
 * (link `<a>` o `<it-button>`) e ne implementa il comportamento di default "torna
 * indietro" tramite `window.history.back()`, sovrascrivibile dall'utilizzatore.
 *
 * @element it-back
 *
 * @fires it-back-navigate - Al click sull'elemento `.go-back` (cancelable: `preventDefault()` impedisce `history.back()`)
 */
@customElement('it-back')
export class ItBack extends BaseComponent {
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

  private get _trigger(): HTMLElement | null {
    return this.querySelector<HTMLElement>('.go-back');
  }

  private _onClick = (event: MouseEvent): void => {
    const trigger = this._trigger;
    if (!trigger) return;
    if (!event.composedPath().includes(trigger)) return;

    // Evita la navigazione del link (es. href="#") prima di gestire l'azione.
    event.preventDefault();

    dispatchCancelable<BackNavigateEventDetail>(this, 'it-back-navigate', {}, () => {
      window.history.back();
    });
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'it-back': ItBack;
  }
}
