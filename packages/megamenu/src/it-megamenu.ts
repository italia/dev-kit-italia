/* eslint-disable lit-a11y/list */

import { ItDropdown } from '@italia/dropdown/it-dropdown.js';
import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './megamenu.scss';

@customElement('it-megamenu')
export class ItMegamenu extends ItDropdown {
  static override styles = [ItDropdown.styles, styles];

  // change default value for these properties

  @property({ type: Boolean, attribute: 'full-width', reflect: true }) fullWidth = true;

  @property({ type: String, attribute: 'it-role' }) itRole: string = '';

  override render() {
    return html`
      megamenu
      <it-popover
        placement=${this.alignment}
        @it-popover-open=${this._onPopoverOpen}
        @it-popover-close=${this._onPopoverClose}
        exportparts="focusable, icon, button"
        ?open=${this._popoverOpen}
        controlled
      >
        <it-button
          id=${this._buttonId}
          slot="trigger"
          ?disabled="${this.disabled}"
          type="button"
          variant=${ifDefined(this.variant)}
          size=${ifDefined(this.size)}
          @click=${this._onTriggerClick}
          @keydown=${{ handleEvent: this._onKeyDown, capture: true }}
          class="dropdown-toggle"
          it-aria-label=${ifDefined(this.itAriaLabel ? this.itAriaLabel : undefined)}
          exportparts="focusable, button"
          it-aria-haspopup="${this.itRole === 'list' ? 'true' : this.itRole}"
          it-aria-controls=${this._popoverOpen ? this._menuId : nothing}
        >
          ${this.alignment.startsWith('left')
            ? html`<it-icon name="it-expand" class="icon-expand left" size="sm" exportparts="icon"></it-icon>`
            : ''}
          ${this.label}
          ${!this.alignment.startsWith('left')
            ? html`<it-icon
                name="it-expand"
                class=${this.composeClass('icon-expand', {
                  right: this.alignment.startsWith('right'),
                  top: this.alignment.startsWith('top'),
                })}
                exportparts="icon"
                size="sm"
              ></it-icon>`
            : ''}
        </it-button>
        <div
          slot="content"
          class="${this.composeClass('dropdown-menu', {
            show: this._popoverOpen,
            dark: this.dark,
            'full-width': this.fullWidth,
          })}"
          aria-labelledby=${this._buttonId}
        >
          <div class="link-list-wrapper">
            <slot name="header"></slot>
            <ul
              id=${this._menuId}
              class="link-list"
              role=${ifDefined(this.itRole !== 'list' ? this.itRole : undefined)}
              @keydown=${{ handleEvent: this._onKeyDown, capture: true }}
              aria-orientation=${ifDefined(this.fullWidth ? 'horizontal' : undefined)}
            >
              <slot @slotchange=${this._setChildrenProperties}></slot>
            </ul>
          </div>
        </div>
      </it-popover>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-megamenu': ItMegamenu;
  }
}
