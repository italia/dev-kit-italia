import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import {
  TIMELINE_POINT_COLORS,
  TIMELINE_POINT_LIST_TAGS,
  TIMELINE_VARIANTS,
  type TimelinePointColor,
  type TimelinePointListTag,
  type TimelineVariant,
} from './types.js';
import styles from './timeline.scss';
import { ItTimelinePoint } from './it-timeline-point.js';

/**
 * Contenitore universale per entrambe le varianti di timeline di Bootstrap Italia.
 *
 * La variante è determinata dall'attributo `variant`:
 * - `classic` (default) — timeline classica con pin e card, layout `.row > .col-12`.
 * - `point-list` — lista compatta temporale, layout `ol/ul.it-timeline-point-list`.
 *
 * Usa **shadow DOM** con slot reali.
 *
 * @attr {string} variant - `classic` (default) o `point-list`.
 * @attr {string} color - Solo per `point-list`: colore predefinito per tutti i punti figlio che non ne specificano uno. Default: `primary`.
 * @attr {string} as - Solo per `point-list`: `ol` (default) o `ul`.
 * @attr {boolean} stack-mobile - Solo per `point-list`: laterale sopra il contenuto su mobile.
 *
 * @slot - Per `classic`: `<it-timeline-element>`. Per `point-list`: `<it-timeline-point>`.
 *
 * @example Timeline classica
 * ```html
 * <it-timeline>
 *   <it-timeline-element variant="past" date="MAGGIO 2026">
 *     <it-icon slot="pin-icon" name="it-file" aria-hidden="true"></it-icon>
 *     <it-card>
 *       <a slot="title" href="#">Titolo</a>
 *       <span slot="text">Descrizione.</span>
 *     </it-card>
 *   </it-timeline-element>
 * </it-timeline>
 * ```
 *
 * @example Timeline point list
 * ```html
 * <it-timeline variant="point-list">
 *   <it-timeline-point>
 *     <time slot="date" datetime="2025-10-14">
 *       <span class="visually-hidden">14 ottobre 2025</span>
 *       <span class="point-visual" aria-hidden="true">
 *         <span class="point-main">14</span>
 *         <span class="point-bottom">ott</span>
 *       </span>
 *     </time>
 *     <p slot="content">Lorem ipsum dolor sit amet.</p>
 *   </it-timeline-point>
 * </it-timeline>
 * ```
 */
@customElement('it-timeline')
export class ItTimeline extends BaseComponent {
  static styles = styles;

  /** Variante: `classic` (default) o `point-list`. */
  @property({ type: String })
  variant: TimelineVariant = 'classic';

  /**
   * Colore predefinito per i punti figlio — solo per `variant="point-list"`.
   * Viene propagato a tutti gli `<it-timeline-point>` che non hanno un attributo
   * `color` esplicito. Default: `primary`.
   */
  @property({ type: String })
  color: TimelinePointColor = 'primary';

  /** Tag della lista — solo per `variant="point-list"`. Default: `ol`. */
  @property({ type: String })
  as: TimelinePointListTag = 'ol';

  /** Layout mobile verticale — solo per `variant="point-list"`. */
  @property({ type: Boolean, attribute: 'stack-mobile', reflect: true })
  stackMobile = false;

  /**
   * Compatta ogni elemento it-timeline-point figlio se `true` e non ha un compact esplicito. Solo per `variant="point-list"`.
   */
  @property({ type: Boolean, attribute: 'compact', reflect: true })
  compact = false;

  override updated() {
    // Re-propagate color when the color property changes
    this._onSlotChange();
  }

  private _getVariant(): TimelineVariant {
    return TIMELINE_VARIANTS.includes(this.variant) ? this.variant : 'classic';
  }

  override render() {
    return this._getVariant() === 'point-list' ? this._renderPointList() : this._renderClassic();
  }

  private _renderClassic() {
    return html`
      <div class="it-timeline-wrapper it-timeline-wrapper--classic">
        <div class="row">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </div>
    `;
  }

  private _renderPointList() {
    const tag = unsafeStatic(TIMELINE_POINT_LIST_TAGS.includes(this.as) ? this.as : 'ol');
    const classes = this.composeClass('it-timeline-point-list', {
      'it-timeline-point-list-stack-mobile': this.stackMobile,
    });
    return staticHtml`
      <div class="it-timeline-wrapper">
        <div class="row">
          <${tag} class="${classes}">
            <slot @slotchange=${this._onSlotChange}></slot>
          </${tag}>
        </div>
      </div>
    `;
  }

  /** Propagates container color to child points and sets position on elements. */
  private _onSlotChange = () => {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement | null;
    if (!slot) return;
    const nodes = slot.assignedElements();

    if (this._getVariant() !== 'point-list') return;
    const defaultColor = TIMELINE_POINT_COLORS.includes(this.color) ? this.color : 'primary';
    for (const node of nodes) {
      if (node.tagName.toLowerCase() === 'it-timeline-point') {
        const point = node as unknown as ItTimelinePoint;
        if (!point._hasExplicitColor) {
          point.color = defaultColor;
        }
        if (this.compact && !point._hasExplicitCompact) {
          point.compact = this.compact;
        }
        // Propagate stack-mobile so timeline-point.scss can use :host([stack-mobile])
        point.toggleAttribute('stack-mobile', this.stackMobile);
      }
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'it-timeline': ItTimeline;
  }
}
