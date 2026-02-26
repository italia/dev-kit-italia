/* eslint-disable lit-a11y/list */

import { ItDropdown } from '@italia/dropdown/it-dropdown.js';
import { html, nothing } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './megamenu.scss';

@customElement('it-megamenu')
export class ItMegamenu extends ItDropdown {
  static override styles = [ItDropdown.styles, styles];

  @state() private _hasDescription = false;

  // change default value for these properties

  @property({ type: Boolean, attribute: 'full-width', reflect: true }) fullWidth = true;

  @property({ type: String, attribute: 'it-role' }) itRole: string = ''; // TODO: valutare se serve davvero

  @property({ type: String, attribute: 'active' }) active: boolean = false;

  @property({ type: String, attribute: 'columns' }) columns: number = 3;

  @queryAssignedElements({ slot: 'description', flatten: true }) private _descriptionItems!: Array<HTMLElement>;

  private _handleSlotDescriptionChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasDescription = this._descriptionItems.length > 0;
  }

  override _setChildrenProperties() {
    super._setChildrenProperties();

    // disable full-width for dropdown items inside megamenu to let them inherit the width of their container and not stretch to the full width of the megamenu
    for (const item of this._menuItems) {
      item.fullWidth = false;
    }
  }

  override render() {
    return html`
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
          class="dropdown-toggle nav-link px-lg-2 px-xl-3 ${this.active ? 'active' : ''}"
          it-aria-label=${ifDefined(this.itAriaLabel ? this.itAriaLabel : undefined)}
          exportparts="focusable, button"
          it-aria-haspopup="${this.itRole === 'list' ? 'true' : this.itRole}"
          it-aria-controls=${this._popoverOpen ? this._menuId : nothing}
        >
          ${
            this.alignment.startsWith('left')
              ? html`<it-icon name="it-expand" class="icon-expand left" size="sm" exportparts="icon"></it-icon>`
              : ''
          }
          ${this.label}
          ${
            !this.alignment.startsWith('left')
              ? html`<it-icon
                  name="it-expand"
                  class=${this.composeClass('icon-expand', {
                    right: this.alignment.startsWith('right'),
                    top: this.alignment.startsWith('top'),
                  })}
                  exportparts="icon"
                  size="sm"
                ></it-icon>`
              : ''
          }
        </it-button>
        <div
          slot="content"
          class="${this.composeClass('dropdown-menu', 'show-lg', {
            show: this._popoverOpen,
            dark: this.dark,
            'full-width': this.fullWidth,
          })}"
          aria-labelledby=${this._buttonId}
          role="region"
        >
          <div class="megamenu pb-5 pt-3 py-lg-0 _px-0">
            <div class="row">
                    ${
                      this._hasDescription
                        ? html`
                            <div class="col-xs-12 col-lg-4 px-0">
                              <div class="row ms-0 me-0">
                                <div class="col-12 it-vertical it-description pb-lg-3 px-0">
                                  <div class="description-content ps-4 ps-sm-5 ms-3">
                                    <slot name="description" @slotchange=${this._handleSlotDescriptionChange}></slot>
                                  </div>
                                </div>
                              </div>
                            </div>
                          `
                        : html` <slot name="description" @slotchange=${this._handleSlotDescriptionChange}></slot> `
                    }
            <div class="${this.composeClass('col-12 px-0', {
              'col-lg-8': this._hasDescription,
            })}">
              <!-- HEADING PLACEHOLDER -->
              <!-- LINKS -->
              ${
                this._menuItems.length > 0
                  ? html` <div class="row ms-0 me-0">
                      <div class="col-12 px-0">
                        <div class="link-list-wrapper px-2">
                          <ul
                            id=${this._menuId}
                            class="link-list"
                            @keydown=${{ handleEvent: this._onKeyDown, capture: true }}
                            style="columns: ${this.columns};"
                          >
                            <slot @slotchange=${this._setChildrenProperties}></slot>
                          </ul>
                        </div>
                      </div>
                    </div>`
                  : html`<slot @slotchange=${this._setChildrenProperties}></slot>`
              }
              <!-- FOOTER PLACEHOLDER -->
            </div>
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
