import { type PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ItRadioGroup } from '@italia/radio'; // eslint-disable-line import/no-extraneous-dependencies
import { registerTranslation } from '@italia/i18n';
import { type ItRatingItem } from '@italia/rating';
import it from './locales/it.js';

import styles from './rating.scss';

registerTranslation(it);

/**
 * Rating component - extends it-radio-group for star rating
 *
 * @element it-rating
 *
 * @slot - Contains the `<it-rating-item>` elements
 * @slot label - The label/legend text for the rating
 *
 * @fires {CustomEvent} change - Emitted when the rating value changes
 */
@customElement('it-rating')
export class ItRating extends ItRadioGroup {
  static override styles = styles;

  /**
   * Get all slotted rating items
   */
  @queryAssignedElements()
  protected _radios!: ItRatingItem[];

  /**
   * Maximum number of stars (to calculate "X out of Y")
   */
  @property({ type: Number, attribute: 'max-elements', reflect: true })
  maxElements = 5;

  /**
   * Whether the rating is read-only (non-interactive)
   */
  @property({ type: Boolean, reflect: true, attribute: 'read-only' })
  readOnly = false;

  /**
   * The icon name to use for the rating item
   * @default 'it-star-outline'
   */
  @property({ type: String, reflect: true })
  icon = 'it-star-outline';

  /**
   * Sync read-only state to all rating items
   */
  private _syncReadOnlyToItems() {
    const items = this.querySelectorAll('it-rating-item');
    items.forEach((item) => {
      if (this.readOnly) {
        item.setAttribute('disabled', '');
      } else {
        item.removeAttribute('disabled');
      }
    });
  }

  /**
   * Get the localized rating announcement for screen readers
   */
  private _getRatingAnnouncement(): string {
    const currentValue = parseInt(this.value || '0', 10);

    if (!currentValue || currentValue === 0) {
      return this.localize.term('noRating');
    }
    // Use singular or plural form based on rating value
    const termKey = currentValue === 1 ? 'ratingLabelSingle' : 'ratingLabelPlural';

    // Pass parameters directly to the translation function
    return this.localize.term(termKey, currentValue, this.maxElements);
  }

  /**
   * Override updated to refresh the rating items and announcement when value changes
   */
  override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    // Sync disabled state to all rating items when readOnly changes
    if (changedProperties.has('readOnly')) {
      this._syncReadOnlyToItems();
    }

    // Update aria-readonly attribute
    if (this.readOnly) {
      this.setAttribute('aria-readonly', 'true');
    } else {
      this.removeAttribute('aria-readonly');
    }

    // When value changes, force re-render of all rating items AND update their display
    if (changedProperties.has('value')) {
      this._updateRadiosState();
      this._updateRatingItemsDisplay();
      this._ensureAnnouncement();
    }
    if (changedProperties.has('icon')) {
      this._updateRatingItemsDisplay();
    }

    // When maxElements changes, update the announcement
    if (changedProperties.has('maxElements')) {
      this._ensureAnnouncement();
    }
  }

  /**
   * Force re-render of all rating items to update star colors
   * This ensures star colors reflect the current value
   */
  private _updateRatingItemsDisplay() {
    const items = this.querySelectorAll('it-rating-item');
    items.forEach((item) => {
      item.requestUpdate();
    });
  }

  /**
   * Create or update the visually-hidden announcement element
   * Following BSI pattern: announcement placed directly in the label slot
   */
  private _ensureAnnouncement() {
    // Find the label slot elements (assigned nodes)
    const labelSlot = this.shadowRoot?.querySelector('slot[name="label"]') as HTMLSlotElement;
    if (!labelSlot) return;

    // Get the first element in the label slot (the legend/label container)
    const labelElements = labelSlot.assignedElements();
    if (labelElements.length === 0) return;

    const labelContainer = labelElements[0];

    // Look for existing announcement span
    let announcement = labelContainer.querySelector('.rating-announcement') as HTMLElement;

    if (!announcement) {
      // Create the announcement element if it doesn't exist
      announcement = document.createElement('span');
      announcement.className = 'visually-hidden rating-announcement';

      // Append to the label container
      labelContainer.appendChild(announcement);
    }
    // Update the text content
    announcement.textContent = ` ${this._getRatingAnnouncement()}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-rating': ItRating;
  }
}
