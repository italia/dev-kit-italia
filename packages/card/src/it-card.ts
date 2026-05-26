import { BaseComponent } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import {
  CARD_BORDER_COLORS,
  CARD_IMAGE_RATIOS,
  CARD_SHADOWS,
  CARD_VARIANTS,
  CARD_HEADING_LEVELS,
  CardShadow,
  type CardBorderColor,
  type CardImageRatio,
  type CardVariant,
  type CardHeadingLevel,
} from './types.js';
import styles from './card.scss';

@customElement('it-card')
export class ItCard extends BaseComponent {
  static styles = styles;

  @property({ type: Boolean, attribute: 'full-height' })
  fullHeight = false;

  @property({ type: String })
  variant: CardVariant = 'default';

  @property({ type: String, attribute: 'border-top' })
  borderTop?: CardBorderColor;

  @property({ type: String })
  ratio?: CardImageRatio;

  @property({ type: String })
  shadow: CardShadow = 'sm';

  @property({ type: String })
  border?: '0';

  @property({ type: String, attribute: 'heading-level' })
  headingLevel: CardHeadingLevel = 'h3';

  @property({ type: String, attribute: 'it-class' })
  itClass: string | undefined;

  @property({ type: String, attribute: 'actions-aria-label' })
  actionsAriaLabel?: string;

  @queryAssignedElements({ slot: 'title' })
  _titleElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'subtitle' })
  _subtitleElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'address' })
  _addressElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'signature' })
  _signatureElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'text' })
  _textElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'body' })
  _bodyElements!: HTMLElement[];

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
      this.logger.warn('it-card: no title slot content found');
    }
    if (this.variant && !CARD_VARIANTS.includes(this.variant)) {
      this.logger.warn(`Invalid variant value, falling back to default. Expected one of: ${CARD_VARIANTS.join(', ')}`);
    }
    if (this.borderTop && !CARD_BORDER_COLORS.includes(this.borderTop)) {
      this.logger.warn(
        `Invalid border-top value, falling back to default. Expected one of: ${CARD_BORDER_COLORS.join(', ')}`,
      );
    }
    if (this.ratio && !CARD_IMAGE_RATIOS.includes(this.ratio)) {
      this.logger.warn(
        `Invalid ratio value, falling back to default. Expected one of: ${CARD_IMAGE_RATIOS.join(', ')}`,
      );
    }
    if (this.shadow && !CARD_SHADOWS.includes(this.shadow)) {
      this.logger.warn(`Invalid shadow value, falling back to default. Expected one of: ${CARD_SHADOWS.join(', ')}`);
    }
    if (this.border && this.border !== '0') {
      this.logger.warn(`Invalid border value, falling back to default. Expected: '0' or undefined`);
    }
    if (this.headingLevel && !CARD_HEADING_LEVELS.includes(this.headingLevel)) {
      this.logger.warn(
        `Invalid heading-level value, falling back to default. Expected one of: ${CARD_HEADING_LEVELS.join(', ')}`,
      );
    }
  }

  protected getHeadingLevel(): CardHeadingLevel {
    if (CARD_HEADING_LEVELS.includes(this.headingLevel)) {
      return this.headingLevel;
    }
    return 'h3';
  }

  protected getRatio(): CardImageRatio {
    if (this.ratio && CARD_IMAGE_RATIOS.includes(this.ratio)) {
      return this.ratio;
    }
    const isInline = this.variant.startsWith('inline');
    return isInline || this.variant === 'location' ? '1x1' : '16x9';
  }

  protected getImageTemplate() {
    const hasImage = this._imageElements.length > 0;
    if (hasImage && this.variant !== 'profile' && this.variant !== 'location' && !this.variant.includes('banner')) {
      return html`
        <div class="it-card-image-wrapper" part="image-wrapper">
          <div class="ratio ratio-${this.getRatio()}">
            <slot name="image" @slotchange=${this.handleSlotChange}></slot>
          </div>
        </div>
      `;
    }
    if (hasImage && this.variant === 'location') {
      return html`
        <div class="it-card-profile-image ratio ratio-${this.getRatio()}" part="image-wrapper">
          <slot name="image" @slotchange=${this.handleSlotChange}></slot>
        </div>
      `;
    }
    if (hasImage && this.variant.includes('banner')) {
      return html`
        <div class="it-card-banner-icon-wrapper" part="image-wrapper">
          <slot name="image" @slotchange=${this.handleSlotChange}></slot>
        </div>
      `;
    }
    return html`<slot name="image" @slotchange=${this.handleSlotChange}></slot>`;
  }

  override render() {
    const shadowClass = CARD_SHADOWS.includes(this.shadow) ? `shadow-${this.shadow}` : 'shadow-sm';
    const borderClass = this.border === '0' ? 'border-0' : 'border';
    const hasSubtitle = this._subtitleElements.length > 0;
    const hasAddress = this._addressElements.length > 0;
    const hasSignature = this._signatureElements.length > 0;
    const hasText = this._textElements.length > 0;
    const hasBody = this._bodyElements.length > 0 || hasText || hasSubtitle || hasSignature;
    const hasImage = this._imageElements.length > 0;
    const hasFooter = this._footerElements.length > 0;
    const hasActions = this._actionsElements.length > 0;
    const hasTitleIcon = this._titleElements.some((el) => el.querySelector('.it-card-title-icon-wrapper') !== null);
    const isInline = this.variant.startsWith('inline');

    const classes = this.composeClass('it-card', 'rounded', shadowClass, borderClass, this.itClass, {
      'it-card-inline': isInline,
      'it-card-inline-reverse': this.variant.endsWith('reverse'),
      'it-card-inline-mini': this.variant.includes('mini'),
      'it-card-profile': this.variant === 'profile' || this.variant === 'location',
      'it-card-banner': this.variant.includes('banner'),
      'it-card-image':
        hasImage && this.variant !== 'profile' && this.variant !== 'location' && !this.variant.includes('banner'),
      'it-card-height-full': this.fullHeight,
      [`it-card-border-top it-card-border-top-${this.borderTop}`]: this.borderTop !== undefined,
    });
    const titleClasses = this.composeClass({
      'it-card-title': this.variant !== 'profile' && this.variant !== 'location',
      'it-card-profile-name': this.variant === 'profile' || this.variant === 'location',
      'it-card-title-icon': hasTitleIcon,
      h4:
        this.variant === 'inline-mini' ||
        this.variant === 'inline-mini-reverse' ||
        this.variant === 'profile' ||
        this.variant === 'location',
      h3:
        this.headingLevel !== 'h3' &&
        !(
          this.variant === 'inline-mini' ||
          this.variant === 'inline-mini-reverse' ||
          this.variant === 'profile' ||
          this.variant === 'location'
        ),
    });

    const headingTag = unsafeStatic(this.getHeadingLevel());

    const cardTitle = html`
      ${staticHtml`
        <${headingTag} class="${titleClasses}" part="title">
          <slot name="title" @slotchange=${this.handleSlotChange}></slot>
        </${headingTag}>
      `}
    `;

    const cardImage = this.getImageTemplate();

    const cardBody = hasBody
      ? html`
          <div class="it-card-body" part="body">
            ${hasSubtitle && this.variant !== 'profile' && this.variant !== 'location'
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
            <slot name="body" @slotchange=${this.handleSlotChange}></slot>
          </div>
        `
      : html`
          <slot name="subtitle" @slotchange=${this.handleSlotChange}></slot>
          <slot name="signature" @slotchange=${this.handleSlotChange}></slot>
          <slot name="text" @slotchange=${this.handleSlotChange}></slot>
          <slot name="body" @slotchange=${this.handleSlotChange}></slot>
        `;

    const cardFooter = hasFooter
      ? html`
          <footer class="it-card-footer ${this.variant === 'location' ? 'border-top pt-3' : ''}" part="footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        `
      : html`<slot name="footer" @slotchange=${this.handleSlotChange}></slot>`;

    const cardActions = hasActions
      ? html`
          <div
            class="it-card-actions"
            role="group"
            part="actions"
            aria-label=${this.actionsAriaLabel ? this.actionsAriaLabel : 'Link correlati:'}
          >
            <slot name="actions" @slotchange=${this.handleSlotChange}></slot>
          </div>
        `
      : html`<slot name="actions" @slotchange=${this.handleSlotChange}></slot>`;

    if (this.variant === 'profile') {
      return html`
        <article class="${classes}" part="card">
          <div class="it-card-profile-header">
            <div class="it-card-profile-content">
              ${cardTitle}
              ${hasSubtitle
                ? html`
                    <p class="it-card-profile-role" part="subtitle">
                      <slot name="subtitle" @slotchange=${this.handleSlotChange}></slot>
                    </p>
                  `
                : html`<slot name="subtitle" @slotchange=${this.handleSlotChange}></slot>`}
            </div>
            ${cardImage}
          </div>
          ${cardBody}${cardFooter}${cardActions}
        </article>
      `;
    }
    if (this.variant === 'location') {
      return html`
        <article class="${classes}" part="card">
          <div class="it-card-profile-header">
            <div class="it-card-profile">
              ${cardTitle}
              ${hasSubtitle
                ? html`
                    <p class="it-card-place-type" part="subtitle">
                      <slot name="subtitle" @slotchange=${this.handleSlotChange}></slot>
                    </p>
                  `
                : html`<slot name="subtitle" @slotchange=${this.handleSlotChange}></slot>`}
              ${hasAddress
                ? html`
                    <p class="it-card-place-address" part="address">
                      <slot name="address" @slotchange=${this.handleSlotChange}></slot>
                    </p>
                  `
                : html`<slot name="address" @slotchange=${this.handleSlotChange}></slot>`}
            </div>
            ${cardImage}
          </div>
          ${cardBody}${cardFooter}${cardActions}
        </article>
      `;
    }
    if (isInline) {
      return html`
        <article class="${classes}" part="card">
          <div class="it-card-inline-content">${cardTitle}${cardBody}${cardFooter}${cardActions}</div>
          ${cardImage}
        </article>
      `;
    }
    return html`
      <article class="${classes}" part="card">${cardTitle}${cardImage}${cardBody}${cardFooter}${cardActions}</article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-card': ItCard;
  }
}
