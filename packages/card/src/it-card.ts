import { BaseComponent } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import type { CardVariant } from './types.js';
import styles from './card.scss';

@customElement('it-card')
export class ItCard extends BaseComponent {
  static styles = styles;

  @property({ type: Boolean, reflect: true, attribute: 'full-height' })
  fullHeight = false;

  @property({ type: String, reflect: true })
  variant: CardVariant = 'default';

  @queryAssignedElements({ slot: 'title' })
  _titleElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'subtitle' })
  _subtitleElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'signature' })
  _signatureElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'text' })
  _textElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'image' })
  _imageElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'footer' })
  _footerElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'actions' })
  _actionsElements!: HTMLElement[];

  private handleSlotChange() {
    this.requestUpdate();
  }

  protected override updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (this._titleElements.length === 0) {
      // eslint-disable-next-line no-console
      console.warn('it-card: no title slot content found');
    }
  }

  override render() {
    const hasSubtitle = this._subtitleElements.length > 0;
    const hasSignature = this._signatureElements.length > 0;
    const hasText = this._textElements.length > 0;
    const hasImage = this._imageElements.length > 0;
    const hasFooter = this._footerElements.length > 0;
    const hasActions = this._actionsElements.length > 0;
    const hasTitleIcon = this._titleElements.some((el) => el.querySelector('.it-card-title-icon-wrapper') !== null);
    const isInline = this.variant.startsWith('inline');
    const imageRatio = isInline ? '1x1' : '16x9';

    const classes = this.composeClass('it-card', 'rounded', 'shadow-sm', 'border', {
      'it-card-inline': isInline,
      'it-card-inline-reverse': this.variant === 'inline-reverse',
      'it-card-inline-mini': this.variant === 'inline-mini',
      'it-card-inline-mini it-card-inline-reverse': this.variant === 'inline-mini-reverse',
      'it-card-image': hasImage,
      'it-card-height-full': this.fullHeight,
    });
    const titleClasses = this.composeClass('it-card-title', {
      'it-card-title-icon': hasTitleIcon,
      h4: this.variant === 'inline-mini' || this.variant === 'inline-mini-reverse',
    });

    // TODO custom h3 tag
    const cardTitle = html`
      <h3 class="${titleClasses}">
        <slot name="title"></slot>
      </h3>
    `;

    const cardImage = hasImage
      ? html`
          <div class="it-card-image-wrapper" part="image-wrapper">
            <div class="ratio ratio-${imageRatio}">
              <slot name="image" @slotchange=${this.handleSlotChange}></slot>
            </div>
          </div>
        `
      : html`<slot name="image" @slotchange=${this.handleSlotChange}></slot>`;

    const cardBody = html`
      <div class="it-card-body" part="body">
        ${hasSubtitle
          ? html`
              <p class="it-card-subtitle" part="subtitle">
                <slot name="subtitle" @slotchange=${this.handleSlotChange}></slot>
              </p>
            `
          : html`<slot name="subtitle" @slotchange=${this.handleSlotChange}></slot>`}
        ${hasSignature
          ? html`
              <address class="it-card-signature" part="signature">
                <slot name="signature" @slotchange=${this.handleSlotChange}></slot>
              </address>
            `
          : html`<slot name="signature" @slotchange=${this.handleSlotChange}></slot>`}
        ${hasText
          ? html`
              <p class="it-card-text" part="text">
                <slot name="text" @slotchange=${this.handleSlotChange}></slot>
              </p>
            `
          : html`<slot name="text" @slotchange=${this.handleSlotChange}></slot>`}
      </div>
    `;

    const cardFooter = hasFooter
      ? html`
          <footer class="it-card-footer" part="footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        `
      : html`<slot name="footer" @slotchange=${this.handleSlotChange}></slot>`;

    const cardActions = hasActions
      ? html`
          <div class="it-card-actions" part="actions">
            <slot name="actions" @slotchange=${this.handleSlotChange}></slot>
          </div>
        `
      : html`<slot name="actions" @slotchange=${this.handleSlotChange}></slot>`;

    if (isInline) {
      return html`
        <article class="${classes}">
          <div class="it-card-inline-content">${cardTitle}${cardBody}${cardFooter}${cardActions}</div>
          ${cardImage}
        </article>
      `;
    }
    return html` <article class="${classes}">${cardTitle}${cardImage}${cardBody}${cardFooter}${cardActions}</article> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-card': ItCard;
  }
}
