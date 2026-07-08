/* eslint-disable lit-a11y/list */
import { BaseComponent, setAttributes } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type OverlayColor } from './types.js';
import styles from './hero.scss';

@customElement('it-hero')
export class ItHero extends BaseComponent {
  static styles = styles;

  @state() private _hasBackground = false;

  @state() private _hasText = false;

  @property({ type: Boolean, reflect: true }) center = false;

  @property({ type: Boolean, reflect: true }) overlap = false;

  @property({ type: String, attribute: 'it-aria-label' }) itAriaLabel?: string;

  @property({ type: String, reflect: true, attribute: 'overlay-color' }) overlayColor: OverlayColor = undefined;

  @queryAssignedElements({ slot: 'background', flatten: true }) private _backgroundItems!: Array<HTMLElement>;

  @queryAssignedElements({ slot: 'text', flatten: true }) private _textItems!: Array<HTMLElement>;

  @query('section') private _sectionEl?: HTMLElement;

  /** Direct reference to the heading element used to label the hero section. */
  private _labelledByEl?: HTMLElement;

  private _handleSlotBackgroundChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    const nextHasBackground = this._backgroundItems.length > 0;
    if (this._hasBackground !== nextHasBackground) {
      this._hasBackground = nextHasBackground;
    }
  }

  private _handleSlotTextChange(event?: Event) {
    const slot =
      (event?.target as HTMLSlotElement | undefined) ??
      this.shadowRoot?.querySelector('slot[name="text"]') ??
      undefined;
    const textItems = (slot?.assignedElements({ flatten: true }) as Array<HTMLElement>) ?? this._textItems ?? [];

    // Verifichiamo se l'array degli elementi assegnati è popolato
    const nextHasText = textItems.length > 0;
    if (this._hasText !== nextHasText) {
      this._hasText = nextHasText;
    }

    if (this.itAriaLabel) {
      this._labelledByEl = undefined;
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

    this._labelledByEl = firstHeading ?? undefined;
  }

  override firstUpdated() {
    this._handleSlotTextChange();
  }

  override willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('itAriaLabel')) {
      this._handleSlotTextChange();
    }
  }

  override updated() {
    const section = this._sectionEl;
    if (!section || !('ariaLabelledByElements' in section)) return;
    // ariaLabelledByElements accepts element references directly, so the browser
    // resolves the accessible name without requiring the ID to be in the same
    // root — it works across shadow boundaries without IDREFs.
    const nextLabelledBy = this._labelledByEl && !this.itAriaLabel ? [this._labelledByEl] : null;
    const currentLabelledBy = (section as any).ariaLabelledByElements as HTMLElement[] | null;

    const isSameLabelledBy =
      (nextLabelledBy === null && (!currentLabelledBy || currentLabelledBy.length === 0)) ||
      (nextLabelledBy !== null &&
        !!currentLabelledBy &&
        currentLabelledBy.length === 1 &&
        currentLabelledBy[0] === nextLabelledBy[0]);

    if (!isSameLabelledBy) {
      (section as any).ariaLabelledByElements = nextLabelledBy;
    }
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
        aria-label=${ifDefined(this.itAriaLabel || undefined)}
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
