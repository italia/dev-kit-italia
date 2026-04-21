import { BaseComponent } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TIMELINE_POINT_COLORS, type TimelinePointColor } from './types.js';
import styles from './timeline-point.scss';

/**
 * Singolo punto della timeline point list di Bootstrap Italia.
 *
 * Usa **shadow DOM** con slot reali.
 *
 * @slot date - Contenuto laterale per date: usa `<time datetime="...">`.
 *   Al suo interno puoi usare `<span class="point-visual">`, `<span class="point-top">`,
 *   `<span class="point-main">`, `<span class="point-bottom">`.
 * @slot milestone - Contenuto laterale alternativo per milestone/step.
 * @slot content - Contenuto principale del punto.
 *
 * @attr {string} color - Colore: `primary` (default), `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.
 * @attr {boolean} align-top - Fissa verticalmente il punto all'inizio del contenuto.
 * @attr {boolean} compact - Sezione laterale più compatta.
 *
 * @example Date con giorno e mese
 * ```html
 * <it-timeline-point>
 *   <time slot="date" datetime="2025-10-14">
 *     <span class="point-visual" aria-hidden="true">
 *       <span class="point-main">14</span>
 *       <span class="point-bottom">ott</span>
 *     </span>
 *   </time>
 *   <p slot="content">Lorem ipsum dolor sit amet.</p>
 * </it-timeline-point>
 * ```
 *
 * @example Milestone con icona
 * ```html
 * <it-timeline-point color="success">
 *   <div slot="milestone">
 *     <span class="visually-hidden">Milestone completata</span>
 *     <span class="point-visual" aria-hidden="true">
 *       <span class="point-main">
 *         <it-icon name="it-check-circle" aria-hidden="true"></it-icon>
 *       </span>
 *     </span>
 *   </div>
 *   <p slot="content">Lorem ipsum dolor sit amet.</p>
 * </it-timeline-point>
 * ```
 */
@customElement('it-timeline-point')
export class ItTimelinePoint extends BaseComponent {
  static styles = styles;

  @property({ type: String, reflect: true })
  color: TimelinePointColor = 'primary';

  @property({ type: Boolean, attribute: 'align-top', reflect: true })
  alignTop = false;

  @property({ type: Boolean, reflect: true })
  compact = false;

  /**
   * `true` se l'utente ha impostato esplicitamente l'attributo `color` in HTML.
   * Usato da `<it-timeline>` per decidere se propagare il colore del contenitore.
   */
  _hasExplicitColor = false;

  /**
   * `true` se l'utente ha impostato esplicitamente l'attributo `compact` in HTML.
   * Usato da `<it-timeline>` per decidere se propagare il compact del contenitore.
   */
  _hasExplicitCompact = false;

  override connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'listitem');
    }
    // Detect explicit color BEFORE Lit reflects the default value
    this._hasExplicitColor = this.hasAttribute('color');
    this._hasExplicitCompact = this.hasAttribute('compact');
    // Get all icons slotted in slot pin-icon and set their size to "sm" (BSI default for timeline icons)
    const icons = document.querySelectorAll('it-icon');
    icons.forEach((icon) => {
      icon.setAttribute('size', 'sm');
    });
    super.connectedCallback?.();
  }

  protected override updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (this.color && !TIMELINE_POINT_COLORS.includes(this.color)) {
      this.logger.warn(
        `Invalid color value, falling back to "primary". Expected one of: ${TIMELINE_POINT_COLORS.join(', ')}`,
      );
    } else {
      // Recupera eventuali icone figlie slottate e aggiorna il loro colore per riflettere il colore di questo elemento
      const color = this.getColor();
      const icons = this.querySelectorAll('it-icon');
      icons.forEach((icon) => {
        if (icon.getAttribute('color') === 'inherit' || !icon.hasAttribute('color')) {
          icon.setAttribute('color', color);
        }
      });
    }
  }

  protected getColor(): TimelinePointColor {
    return TIMELINE_POINT_COLORS.includes(this.color) ? this.color : 'primary';
  }

  /**
   * Inspect the light DOM inside the slotted date/milestone elements and
   * set boolean host attributes `has-point-top` / `has-point-bottom` so that
   * shadow-DOM CSS can use reliable attribute selectors instead of the
   * browser-inconsistent `:host(:has(.point-top))` slotted-descendant form.
   */
  private _updatePointSpanAttrs() {
    const hasTop = !!this.querySelector('.point-top, .point-year');
    const hasBottom = !!this.querySelector('.point-bottom, .point-month');
    this.toggleAttribute('has-point-top', hasTop);
    this.toggleAttribute('has-point-bottom', hasBottom);
  }

  /**
   * Ensure every `.point-visual` element inside slotted content carries
   * `aria-hidden="true"` automatically — the accessible label should come
   * from a sibling `<span class="visually-hidden">`.
   */
  private _updatePointVisualAriaHidden() {
    this.querySelectorAll<HTMLElement>('.point-visual').forEach((el) => {
      el.setAttribute('aria-hidden', 'true');
    });
  }

  private _onAsideSlotChange() {
    this._updatePointSpanAttrs();
    this._updatePointVisualAriaHidden();
  }

  override render() {
    const itemClasses = this.composeClass('timeline-point', {
      'timeline-point-align-top': this.alignTop,
      'timeline-point-xs': this.compact,
      [`timeline-point-${this.getColor()}`]: true,
    });
    const asideClasses = this.composeClass('point-aside', `point-aside-${this.getColor()}`);

    return html`
      <div class="${itemClasses}" part="point">
        <div class="${asideClasses}">
          <slot name="date" @slotchange=${this._onAsideSlotChange}></slot>
          <slot name="milestone" @slotchange=${this._onAsideSlotChange}></slot>
        </div>
        <div class="point-content">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-timeline-point': ItTimelinePoint;
  }
}
