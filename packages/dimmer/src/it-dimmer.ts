/* eslint-disable class-methods-use-this */
import { BaseComponent } from '@italia/globals';
import { html, nothing, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { type DimmerVariant, type DimmerEventDetail } from './types.js';
import styles from './dimmer.scss';

/**
 * Componente Dimmer per focalizzare l'attenzione su un contenuto sovrapposto.
 *
 * Il dimmer occupa tutta l'altezza e la larghezza dell'elemento contenitore,
 *
 * @element it-dimmer
 *
 * @slot - Contenuto di sfondo (cards, immagini, testo da oscurare)
 * @slot content - Contenuto dell'overlay (testo, titolo, azioni) — a carico dell'utilizzatore;
 *   per i pulsanti wrappare in `<div class="dimmer-buttons bg-dark">`
 *
 * @fires it-dimmer-show - Quando il dimmer diventa visibile
 * @fires it-dimmer-hide - Quando il dimmer viene nascosto
 */
@customElement('it-dimmer')
export class ItDimmer extends BaseComponent {
  static styles = styles;

  /**
   * Se `true`, il dimmer è visibile e oscura il contenuto di sfondo.
   */
  @property({ type: Boolean, reflect: true })
  active = false;

  /**
   * Variante cromatica del dimmer. Con `"primary"` lo sfondo è il colore primario;
   * con `"dark"` lo sfondo è il colore scuro standard; senza valore (default) usa il colore scuro.
   */
  @property({ type: String, reflect: true })
  variant: DimmerVariant = 'primary';

  /**
   * Nome dell'icona Bootstrap Italia da mostrare nel dimmer (es. `"it-info-circle"`).
   * Se valorizzato, viene renderizzata automaticamente una `<it-icon>` nella sezione `.dimmer-icon`.
   */
  @property({ type: String, attribute: 'icon-name', reflect: true })
  iconName = '';

  @query('.dimmer')
  private _dimmerElement!: HTMLElement;

  private _dimmerAnimation: Animation | null = null;

  private readonly _animationDuration = 150;

  /**
   * Rende visibile il dimmer con un'animazione di fade-in.
   * Restituisce una Promise che si risolve al termine dell'animazione.
   */
  public async show(): Promise<void> {
    if (this.active) return;
    this.active = true;
    await this.updateComplete;
    this._dimmerAnimation?.cancel();
    this._dimmerAnimation = this._dimmerElement.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: this._animationDuration,
      easing: 'linear',
      fill: 'forwards',
    });
    await this._dimmerAnimation.finished;
  }

  /**
   * Nasconde il dimmer con un'animazione di fade-out.
   * Restituisce una Promise che si risolve al termine dell'animazione.
   */
  public async hide(): Promise<void> {
    if (!this.active) return;
    this._dimmerAnimation?.cancel();
    this._dimmerAnimation = this._dimmerElement.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: this._animationDuration,
      easing: 'linear',
      fill: 'forwards',
    });
    await this._dimmerAnimation.finished;
    this.active = false;
  }

  /**
   * Alterna lo stato di visibilità del dimmer.
   * Restituisce una Promise che si risolve al termine dell'animazione.
   */
  public async toggle(): Promise<void> {
    return this.active ? this.hide() : this.show();
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('active')) {
      if (this.active) {
        this._dispatchShow();
      } else {
        this._dispatchHide();
      }
      this._updateBackgroundInert();
    }

    // Quando cambia variant, ri-applica lo styling ai figli slottati
    if (changedProperties.has('variant') || changedProperties.has('active')) {
      this._applyChildStyles();
    }
  }

  private _dispatchShow(): void {
    this.dispatchEvent(
      new CustomEvent<DimmerEventDetail>('it-dimmer-show', {
        detail: { dimmer: this },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _dispatchHide(): void {
    this.dispatchEvent(
      new CustomEvent<DimmerEventDetail>('it-dimmer-hide', {
        detail: { dimmer: this },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Applica automaticamente colori e varianti agli elementi `it-icon`
   * slottati nello slot `content`, garantendo il contrasto visivo sull'overlay.
   *
   * - `it-icon` → riceve `color="inverse"` (il dimmer ha sempre sfondo scuro/primario)
   */
  private _applyChildStyles(): void {
    const contentSlot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="content"]');
    if (!contentSlot) return;

    const slottedElements = contentSlot.assignedElements({ flatten: true });

    // Applica il colore bianco a tutti gli it-icon slottati (direttamente o come discendenti)
    const icons = this._findSlottedByTag(slottedElements, 'it-icon');
    for (const icon of icons) {
      icon.setAttribute('color', 'inverse');
    }
  }

  /**
   * Cerca ricorsivamente tag specifici tra gli elementi slottati e i loro discendenti light DOM.
   */
  private _findSlottedByTag(elements: Element[], tagName: string): Element[] {
    const results: Element[] = [];
    for (const el of elements) {
      if (el.tagName.toLowerCase() === tagName) {
        results.push(el);
      }
      // Cerca nei discendenti in light DOM (non attraversa shadow DOM dei child WC)
      results.push(...Array.from(el.querySelectorAll(tagName)));
    }
    return results;
  }

  /**
   * Applica/rimuove `inert` sugli elementi slottati nel background slot.
   * Necessario per Safari, che non rispetta `aria-hidden` sull'overlay
   * e lascia interagibili gli elementi sotto il dimmer.
   */
  private _updateBackgroundInert(): void {
    const slot = this.shadowRoot?.querySelector<HTMLSlotElement>('slot:not([name])');
    if (!slot) return;
    for (const el of slot.assignedElements({ flatten: true })) {
      if (this.active) {
        el.setAttribute('inert', '');
      } else {
        el.removeAttribute('inert');
      }
    }
  }

  private _onBackgroundSlotChange = (): void => {
    this._updateBackgroundInert();
  };

  private _onContentSlotChange = (): void => {
    this._applyChildStyles();
    this.requestUpdate();
  };

  private get _dimmerClasses() {
    const classes: Record<string, boolean> = { dimmer: true };
    if (this.variant) {
      classes[`dimmer-${this.variant}`] = true;
    }
    return classes;
  }

  render() {
    return html`
      <div class="dimmable" part="dimmable">
        <div class="${classMap(this._dimmerClasses)}" aria-hidden="${this.active ? nothing : 'true'}" part="dimmer">
          <div class="dimmer-inner" part="dimmer-inner">
            ${this.iconName
              ? html`
                  <div class="dimmer-icon" part="dimmer-icon">
                    <it-icon name="${this.iconName}" size="lg" color="white"></it-icon>
                  </div>
                `
              : ''}
            <slot name="content" @slotchange="${this._onContentSlotChange}" part="content"></slot>
          </div>
        </div>
        <slot @slotchange="${this._onBackgroundSlotChange}"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-dimmer': ItDimmer;
  }
}
