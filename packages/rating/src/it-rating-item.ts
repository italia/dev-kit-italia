import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ItRadio } from '@italia/radio';
import '@italia/icon';

import styles from './rating-item.scss';

/**
 * Rating item component - extends it-radio to render a star icon
 *
 * @element it-rating-item
 *
 * @slot label - The accessibility label for the star (e.g., "Valuta 3 stelle su 5")
 */
@customElement('it-rating-item')
export class ItRatingItem extends ItRadio {
  static override styles = styles;

  /**
   * Override group getter to find parent it-rating instead of it-radio-group
   */
  override get group() {
    return this.closest('it-rating');
  }

  get icon(): string {
    return this.group?.icon || 'it-star-outline';
  }

  /**
   * Override _renderInput to render icon instead of radio circle
   * Now that _renderInput is protected in parent, we can override it
   */
  protected override _renderInput() {
    // Get the parent rating to determine which items should be filled
    const rating = this.closest('it-rating');
    const ratingValue = rating ? parseInt((rating as any).value || '0', 10) : 0;
    const thisValue = parseInt(this.value || '0', 10);

    // Icon should be filled if its value is <= the rating value
    const isFilled = thisValue <= ratingValue;

    // Use primary color only for filled icons
    const iconColor = isFilled ? 'primary' : 'secondary';
    let renderedIcon = this.icon;
    if (isFilled && this.icon === 'it-star-outline') {
      renderedIcon = 'it-star-full';
    }

    return html`
      <div id="input" part="input"></div>
      <it-icon id="star" part="star" name="${renderedIcon}" size="sm" aria-hidden="true" color="${iconColor}"></it-icon>
    `;
  }

  private handleSlotChange() {
    // Notify assistive technologies of label change
    this.labelElements.forEach((el) => {
      el.classList.add('visually-hidden');
    });
  }

  /**
   * Override render to use rating-specific structure
   */
  override render() {
    return html`
      <div class="rating-item-control">
        ${this._renderInput()}
        <slot name="label" @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-rating-item': ItRatingItem;
  }
}
