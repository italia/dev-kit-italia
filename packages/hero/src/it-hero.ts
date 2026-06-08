/* eslint-disable lit-a11y/list */
import { BaseComponent, setAttributes } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type OverlayColor } from './types.js';
import styles from './hero.scss';

@customElement('it-hero')
export class ItHero extends BaseComponent {
  static styles = styles;

  @state() private _hasBackground = false;

  @state() private _hasText = false;

  @state() private _ariaLabelledBy?: string;

  @property({ type: Boolean, reflect: true }) center = false;

  @property({ type: Boolean, reflect: true }) overlap = false;

  @property({ type: String, attribute: 'it-aria-label' }) itAriaLabel?: string;

  @property({ type: String, reflect: true, attribute: 'overlay-color' }) overlayColor: OverlayColor = undefined;

  @queryAssignedElements({ slot: 'background', flatten: true }) private _backgroundItems!: Array<HTMLElement>;

  @queryAssignedElements({ slot: 'text', flatten: true }) private _textItems!: Array<HTMLElement>;

  private _handleSlotBackgroundChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasBackground = this._backgroundItems.length > 0;
  }

  private _handleSlotTextChange(event?: Event) {
    const slot =
      (event?.target as HTMLSlotElement | undefined) ??
      this.shadowRoot?.querySelector('slot[name="text"]') ??
      undefined;
    const textItems = (slot?.assignedElements({ flatten: true }) as Array<HTMLElement>) ?? this._textItems ?? [];

    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasText = textItems.length > 0;

    if (this.itAriaLabel) {
      this._ariaLabelledBy = undefined;
      return;
    }

    let firstHeading: HTMLElement | null = null;
    for (const textItem of textItems) {
      if (/^h[1-6]$/i.test(textItem.tagName)) {
        firstHeading = textItem;
        break;
      }

      const nestedHeading = textItem.querySelector<HTMLElement>('h1, h2, h3, h4, h5, h6');
      if (nestedHeading) {
        firstHeading = nestedHeading;
        break;
      }
    }

    if (!firstHeading) {
      this._ariaLabelledBy = undefined;
      return;
    }

    if (!firstHeading.id) {
      firstHeading.id = this.generateId('hero-heading');
    }

    this._ariaLabelledBy = firstHeading.id;
  }

  override firstUpdated() {
    this._handleSlotTextChange();
  }

  override willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('itAriaLabel')) {
      this._handleSlotTextChange();
    }
  }

  override render() {
    const _hasOverlay = (this._hasBackground && this._hasText) || this.overlayColor;
    const ariaLabelledBy = this.itAriaLabel ? undefined : this._ariaLabelledBy;

    return html`
      <section
        class="${this.composeClass(
          'it-hero-wrapper',
          this.center ? 'it-text-centered' : '',
          _hasOverlay ? `it-overlay it-${this.overlayColor ?? 'dark'}` : '',
          this.overlap ? 'it-bottom-overlapping-content' : '',
        )}"
        ${setAttributes(this._ariaAttributes)}
        aria-label=${ifDefined(this.itAriaLabel || undefined)}
        aria-labelledby=${ifDefined(ariaLabelledBy)}
      >
        ${this._hasBackground
          ? html`
              <div class="img-responsive-wrapper" part="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper">
                    <slot name="background" @slotchange=${this._handleSlotBackgroundChange}></slot>
                  </div>
                </div>
              </div>
            `
          : html` <slot name="background" @slotchange=${this._handleSlotBackgroundChange}></slot> `}
        ${this._hasText
          ? html`
              <div class="container" part="text-container">
                <slot name="text" @slotchange=${this._handleSlotTextChange}></slot>
              </div>
            `
          : html` <slot name="text" @slotchange=${this._handleSlotTextChange}></slot> `}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-hero': ItHero;
  }
}
