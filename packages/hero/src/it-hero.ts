/* eslint-disable lit-a11y/list */
import { BaseComponent, setAttributes } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { type OverlayColor } from './types.js';
import styles from './hero.scss';

@customElement('it-hero')
export class ItHero extends BaseComponent {
  static styles = styles;

  @state() private _hasBackground = false;

  @state() private _hasText = false;

  @property({ type: String, reflect: true, attribute: 'it-aria-label' }) itAriaLabel = 'In evidenza';

  @property({ type: Boolean, reflect: true }) center = false;

  @property({ type: Boolean, reflect: true }) overlap = false;

  @property({ type: String, reflect: true, attribute: 'overlay-color' }) overlayColor: OverlayColor = undefined;

  @queryAssignedElements({ slot: 'background', flatten: true }) private _backgroundItems!: Array<HTMLElement>;

  @queryAssignedElements({ slot: 'text', flatten: true }) private _textItems!: Array<HTMLElement>;

  private _handleSlotBackgroundChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasBackground = this._backgroundItems.length > 0;
  }

  private _handleSlotTextChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasText = this._textItems.length > 0;
  }

  override render() {
    const _hasOverlay = (this._hasBackground && this._hasText) || this.overlayColor;

    return html`
      <section
        class="${this.composeClass(
          'it-hero-wrapper',
          this.center ? 'it-text-centered' : '',
          _hasOverlay ? `it-overlay it-${this.overlayColor ?? 'dark'}` : '',
          this.overlap ? 'it-bottom-overlapping-content' : '',
        )}"
        ${setAttributes(this._ariaAttributes)}
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
