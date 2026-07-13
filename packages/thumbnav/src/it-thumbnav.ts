/* eslint-disable lit-a11y/no-redundant-role */
/* eslint-disable lit-a11y/list */
import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { ThumbnnavHoverEffect, ThumbnnavPosition, ThumbnnavAutoColumns } from './types.js';
import type { ItThumbnavItem } from './it-thumbnav-item.js';
import styles from './thumbnav.scss';

/**
 * Contenitore Thumbnav: lista di link con immagini thumbnail.
 * I singoli elementi vanno inseriti tramite `it-thumbnav-item`.
 *
 * ```html
 * <it-thumbnav>
 *   <it-thumbnav-item>
 *     <a href="#" class="ratio ratio-3x2"><img src="…" alt="…"></a>
 *   </it-thumbnav-item>
 * </it-thumbnav>
 * ```
 */
@customElement('it-thumbnav')
export class ItThumbnav extends BaseComponent {
  static styles = styles;

  /** Usa thumbnail di dimensione ridotta (120px invece di 240px). */
  @property({ type: Boolean, reflect: true })
  small = false;

  /**
   * Dispone le thumbnail in colonna verticale.
   * Viene applicato automaticamente quando `position` è `left` o `right`.
   */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  /** Larghezza fissa per ogni thumbnail (240px o 120px se `small`). */
  @property({ type: Boolean, reflect: true })
  fixed = false;

  /**
   * Effetto hover sull'immagine.
   * - `nozoom`: disabilita lo zoom al passaggio del mouse.
   * - `black`: overlay nero semitrasparente.
   * - `primary`: overlay di colore primary semitrasparente.
   */
  @property({ type: String, reflect: true })
  hover?: ThumbnnavHoverEffect;

  /**
   * Griglia a larghezza automatica: numero di thumbnail per riga (2–5).
   * Equivale alle classi `.thumb-nav-auto.thumb-nav-auto-N`.
   */
  @property({ type: Number, reflect: true })
  auto?: ThumbnnavAutoColumns;

  /**
   * Posizione in overlay all'interno di un contenitore `.position-relative`.
   * Valori: `bottom`, `top`, `left`, `right`.
   */
  @property({ type: String, reflect: true })
  position?: ThumbnnavPosition;

  @query('slot') private _slotEl!: HTMLSlotElement;

  protected get _items(): ItThumbnavItem[] {
    if (!this._slotEl) return [];
    return this._slotEl
      .assignedElements({ flatten: true })
      .filter((el) => el.tagName === 'IT-THUMBNAV-ITEM') as ItThumbnavItem[];
  }

  protected _setChildrenProperties = () => {
    for (const item of this._items) {
      item.role = 'listitem';
    }
  };

  protected override updated() {
    this._setChildrenProperties();
  }

  override render() {
    const effectiveVertical = this.vertical || this.position === 'left' || this.position === 'right';
    const classes = classMap({
      'thumb-nav': true,
      'thumb-nav-small': this.small,
      'thumb-nav-vertical': effectiveVertical,
      'thumb-nav-fixed': this.fixed,
      'thumb-nav-nozoom': this.hover === 'nozoom',
      'thumb-nav-black': this.hover === 'black',
      'thumb-nav-primary': this.hover === 'primary',
      'thumb-nav-auto': this.auto != null,
      [`thumb-nav-auto-${this.auto}`]: this.auto != null,
      'thumb-nav-bottom': this.position === 'bottom',
      'thumb-nav-top': this.position === 'top',
      'thumb-nav-left': this.position === 'left',
      'thumb-nav-right': this.position === 'right',
    });

    return html`<ul class="${classes}" part="thumbnav" role="list">
      <slot @slotchange=${this._setChildrenProperties}></slot>
    </ul>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-thumbnav': ItThumbnav;
  }
}
