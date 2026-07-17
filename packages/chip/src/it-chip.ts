import { html, nothing } from 'lit';
import {
  BaseComponent,
  dispatchCancelable,
  focusableFallbackAncestor,
  nearestFocusableInDocument,
} from '@italia/globals';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import type { ItIcon } from '@italia/icon';
import { ChipSize, ChipVariant, type ChipCloseEventDetail } from './types.js';

import styles from './chip.scss';

/**
 * Componente Chip.
 *
 * @element it-chip
 *
 * @slot dismiss-button - Pulsante di rimozione (richiesto quando `dismissable`)
 *
 * @fires it-chip-close - Quando si clicca il pulsante di rimozione (cancelable: `preventDefault()` impedisce la rimozione)
 */
@customElement('it-chip')
export class ItChip extends BaseComponent {
  static styles = styles;

  @property({ type: Boolean, reflect: true }) dismissable = false;

  @property({ type: String, reflect: true }) size: ChipSize = 'sm';

  @property({ type: String, reflect: true }) avatar = '';

  @property({ type: String, reflect: true, attribute: 'avatar-alt' }) avatarAlt = '';

  @property({ type: String, reflect: true }) label = '';

  @property({ type: String, reflect: true }) href = '';

  @property({ type: String, reflect: true, attribute: 'a11y-description' }) a11yDescription = '';

  @property({ type: String, reflect: true }) variant?: ChipVariant;

  @property({ type: Boolean, reflect: true, attribute: 'is-disabled' }) isDisabled = false;

  @queryAssignedElements({ slot: 'dismiss-button', flatten: true })
  closeButton!: HTMLButtonElement[];

  @queryAssignedElements({ slot: 'icon', flatten: true })
  icon!: ItIcon[];

  private getAvatarSize() {
    // Per chip lg usa avatar sm, per gli altri usa avatar xs
    return this.size === 'lg' ? 'sm' : 'xs';
  }

  private updateIcon() {
    if (this.icon.length) {
      const icon = this.icon[0];

      if (this.size === 'lg') {
        icon.size = 'sm';
      } else {
        icon.size = 'xs';
      }
      icon.color = this.variant;
    }
  }

  override updated() {
    if (this.dismissable) {
      if (!this.closeButton.length) {
        this.logger.warn(
          'The `dismissable` property is enabled, but no <button slot="dismiss-button"> was found. ' +
            'This button is required to allow chip removal.',
        );
      } else {
        this.closeButton.forEach((btn) => {
          if (
            (btn.tagName.toLowerCase() === 'it-button' &&
              !btn.hasAttribute('it-aria-label') &&
              btn.textContent?.trim().length === 0) ||
            (btn.tagName.toLowerCase() === 'button' &&
              !btn.hasAttribute('aria-label') &&
              btn.textContent?.trim().length === 0)
          ) {
            this.logger.warn(
              'Dismiss button lacks both a `label`, an `aria-label` and text content. ' +
                'Providing an accessible label or visually hidden text content is strongly recommended.',
            );
          }
        });
      }
    }

    if (this.avatar && !this.avatarAlt) {
      this.logger.warn(
        'Avatar image provided without an alternative text (`avatarAlt`). ' +
          'This negatively impacts accessibility compliance.',
      );
    }
    this.updateIcon();
  }

  override connectedCallback(): void {
    super.connectedCallback?.();
    // Clicks on the slotted dismiss button bubble through the host (light DOM child),
    // so a single host-level listener covers it without re-binding on every render.
    this.addEventListener('click', this._onHostClick);
  }

  override disconnectedCallback(): void {
    this.removeEventListener('click', this._onHostClick);
    super.disconnectedCallback?.();
  }

  private _onHostClick = (event: MouseEvent): void => {
    if (!this.dismissable) return;
    const buttons = this.closeButton;
    if (!buttons?.length) return;
    const path = event.composedPath();
    if (buttons.some((btn) => path.includes(btn))) {
      this._requestClose();
    }
  };

  private _requestClose(): void {
    dispatchCancelable<ChipCloseEventDetail>(this, 'it-chip-close', { chip: this }, () => this._removeWithFocusShift());
  }

  /**
   * Rimuove la chip dal DOM spostando il focus su una chip adiacente, se presente.
   * Utile dopo aver intercettato `it-chip-close` con `preventDefault()`.
   */
  public close(): void {
    this._removeWithFocusShift();
  }

  private _removeWithFocusShift(): void {
    const adjacent = this._adjacentChip();
    // No adjacent chip of the same type: fall back to a tabindex-bearing ancestor,
    // and if the author didn't provide one (the common case), to the nearest
    // focusable element anywhere in the document — better than losing focus to <body>.
    const fallback = !adjacent ? (focusableFallbackAncestor(this) ?? nearestFocusableInDocument(this)) : null;
    this.remove();
    if (adjacent) ItChip._focusChip(adjacent);
    else fallback?.focus();
  }

  private _adjacentChip(): ItChip | null {
    // Only a dismissable neighbor is an equivalent "next item to remove" — shifting
    // focus onto a plain label or link chip just because it's spatially adjacent
    // would steal focus onto an unrelated control the user never asked to interact with.
    const isDismissableChip = (el: Element | null): el is ItChip =>
      !!el && el.tagName.toLowerCase() === 'it-chip' && el.hasAttribute('dismissable');
    let el = this.nextElementSibling;
    while (el && !isDismissableChip(el)) el = el.nextElementSibling;
    if (isDismissableChip(el)) return el;
    el = this.previousElementSibling;
    while (el && !isDismissableChip(el)) el = el.previousElementSibling;
    return isDismissableChip(el) ? el : null;
  }

  private static _focusChip(chip: ItChip): void {
    const btn = chip.closeButton?.[0];
    if (btn) {
      btn.focus();
      return;
    }
    const link = chip.shadowRoot?.querySelector<HTMLAnchorElement>('a');
    link?.focus();
  }

  render() {
    const avatarSize = this.getAvatarSize();
    const avatarHeights = {
      xs: '1rem',
      sm: '1.5rem',
      md: '2.5rem',
      lg: '3.5rem',
      xl: '5rem',
      xxl: '7rem',
    };

    const avatarHeight = avatarHeights[avatarSize];

    const classes = {
      chip: true,
      [`chip-${this.size}`]: this.size,
      [`chip-${this.variant}`]: !!this.variant && !this.isDisabled,
      'chip-disabled': this.isDisabled,
    };

    const content = html`
      ${this.a11yDescription ? html`<span class="visually-hidden">${this.a11yDescription}</span>` : nothing}
      <slot name="icon"></slot>
      ${this.avatar
        ? html`
            <it-avatar
              size="${avatarSize}"
              src="${this.avatar}"
              alt="${this.avatarAlt}"
              style="height: ${avatarHeight}"
            ></it-avatar>
          `
        : null}
      <span class="chip-label">${this.label}</span>
      <slot name="dismiss-button"></slot>
    `;

    return this.href
      ? html`<a class="${classMap(classes)}" part="chip focusable" href="${this.href}">${content}</a>`
      : html`<div class="${classMap(classes)}" part="chip">${content}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-chip': ItChip;
  }
}
