/* eslint-disable lit-a11y/list */

import { ItDropdownBase } from '@italia/dropdown/it-dropdown-base.js';
import { html, nothing } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FooterAlign, FooterPosition } from './types.js';

import styles from './megamenu.scss';

@customElement('it-megamenu')
export class ItMegamenu extends ItDropdownBase {
  static override styles = [ItDropdownBase.styles, styles];

  private static readonly FOCUSABLE_SELECTORS = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';

  @state() private _hasDescription = false;

  @state() private _hasHeader = false;

  @state() private _hasFooter = false;

  // change default value for these properties

  @property({ type: Boolean, attribute: 'full-width', reflect: true }) fullWidth = true; // sovrascritto per settare un valore fisso e cambiarne il default

  @property({ type: String }) itRole: string = 'menu'; // sovrascritto per settare un valore fisso e cambiarne il default

  @property({ type: Boolean, reflect: true }) active = false;

  @property({ type: Number, attribute: 'columns', reflect: true }) columns: number = 2;

  @property({ type: String, attribute: 'footer-align', reflect: true }) footerAlign: FooterAlign = 'left'; // allineamento del contento interno del footer

  @property({ type: String, attribute: 'footer-position', reflect: true }) footerPosition: FooterPosition = 'bottom'; // posizione del footer

  @queryAssignedElements({ slot: 'description', flatten: true }) private _descriptionItems!: Array<HTMLElement>;

  @queryAssignedElements({ slot: 'header', flatten: true }) private _headerItems!: Array<HTMLElement>;

  @queryAssignedElements({ slot: 'footer', flatten: true }) private _footerItems!: Array<HTMLElement>;

  private _handleSlotDescriptionChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasDescription = this._descriptionItems.length > 0;
  }

  override _setChildrenProperties() {
    super._setChildrenProperties();

    // disable full-width for dropdown items inside megamenu to let them inherit the width of their container and not stretch to the full width of the megamenu
    for (const item of this._menuItems) {
      item.fullWidth = false;
      item.itRole = 'menuitem';
    }
  }

  private _onSlotHeaderChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasHeader = this._headerItems.length > 0;
  }

  private _onSlotFooterChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasFooter = this._footerItems.length > 0;
  }

  private _getMegamenuFocusableItems(): Element[] {
    // Costruisce la lista completa: header items + menu items + footer items
    const allItems: Element[] = [];

    // Aggiungi elementi focusabili dall'header
    for (const headerItem of this._headerItems) {
      if (headerItem.matches(ItMegamenu.FOCUSABLE_SELECTORS)) {
        allItems.push(headerItem);
      }
      allItems.push(...Array.from(headerItem.querySelectorAll(ItMegamenu.FOCUSABLE_SELECTORS)));
    }

    // Aggiungi menu items
    const menuItems = this._menuItems.map((item) => item.getFocusableElement()).filter((el) => !!el);
    allItems.push(...menuItems);

    // Aggiungi elementi focusabili dal footer
    for (const footerItem of this._footerItems) {
      if (footerItem.matches(ItMegamenu.FOCUSABLE_SELECTORS)) {
        allItems.push(footerItem);
      }
      allItems.push(...Array.from(footerItem.querySelectorAll(ItMegamenu.FOCUSABLE_SELECTORS)));
    }

    return allItems;
  }

  override _onTabKeyDown = (event: KeyboardEvent, items: Element[], active: HTMLElement) => {
    if (event.key === 'Tab') {
      // Usa la lista completa che include tutti gli elementi focusabili di header, i dropdown-item, e quelli di footer
      const _items = this._getMegamenuFocusableItems();

      const _currentIndex = _items.indexOf(active);

      if (event.shiftKey && _currentIndex === -1) {
        // Shift+Tab dal primo elemento della lista completa: chiudi
        this._popoverOpen = false;
      }
      if (!event.shiftKey && _currentIndex === _items.length - 1) {
        // Tab dall'ultimo elemento della lista completa: chiudi
        this._popoverOpen = false;
      }
      if (active.ariaDisabled) {
        // as of the day of this implementation, tabbing through disabled items doesn't work natively
        // maybe because of some web components behavior
        if (event.shiftKey) {
          this._ariaNav.handleKeyDown(new KeyboardEvent('keydown', { ...event, key: 'ArrowUp' }));
        } else {
          this._ariaNav.handleKeyDown(new KeyboardEvent('keydown', { ...event, key: 'ArrowDown' }));
        }
      }
    }
  };

  private _onClickItems = (event: MouseEvent) => {
    // Chiudi il popover quando viene cliccato su uno degli elementi focusabili
    const target = event.target as HTMLElement;
    const focusableItems = [...this._getMegamenuFocusableItems(), ...this._menuItems];

    // Controlla se il click è su uno degli elementi focusabili del megamenu
    for (const focusableItem of focusableItems) {
      if (focusableItem === target || focusableItem.contains(target)) {
        this._popoverOpen = false;
        break;
      }
    }
  };

  override render() {
    return html`
      <it-popover
        placement=${this.alignment}
        @it-popover-open=${this._onPopoverOpen}
        @it-popover-close=${this._onPopoverClose}
        exportparts="focusable, icon, button, dropdown-button, dropdown-icon-expand, popover-content"
        part="dropdown-popover"
        ?open=${this._popoverOpen}
        offset="0"
        controlled
        ?no-flip=${true}
      >
        <it-button
          id=${this._buttonId}
          slot="trigger"
          ?disabled="${this.disabled}"
          type="button"
          variant=""
          size=${ifDefined(this.size)}
          @click=${this._onTriggerClick}
          @keydown=${{ handleEvent: this._onKeyDown, capture: true }}
          class="dropdown-toggle nav-link ${this.active ? 'active' : ''}"
          it-aria-label=${ifDefined(this.itAriaLabel ? this.itAriaLabel : undefined)}
          exportparts="focusable, button"
          part="dropdown-button"
          it-aria-haspopup="${this.itRole === 'list' ? 'true' : this.itRole}"
          it-aria-controls=${this._popoverOpen ? this._menuId : nothing}
        >
          ${this.alignment.startsWith('left')
            ? html`<it-icon
                name="it-expand"
                class="icon-expand left"
                size="xs"
                exportparts="icon"
                part="dropdown-icon-expand"
              ></it-icon>`
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
                part="dropdown-icon-expand"
                size="xs"
              ></it-icon>`
            : ''}
        </it-button>
        <div
          slot="content"
          part="popover-content"
          class="${this.composeClass('dropdown-menu', 'show-lg', {
            show: this._popoverOpen,
            'full-width': this.fullWidth,
          })}"
          aria-labelledby=${this._buttonId}
          role="region"
          @keydown=${{ handleEvent: this._onKeyDown, capture: true }}
          @click=${{ handleEvent: this._onClickItems, capture: true }}
          id=${this._menuId}
          tabindex="-1"
        >
          <div class="megamenu-content" part="megamenu-content">
            <div class="row">
              ${this._hasDescription
                ? html`
                    <div class="col-xs-12 col-lg-4 px-0">
                      <div class="row">
                        <div class="col-12 it-vertical it-description pb-lg-3">
                          <div class="description-content px-4 ps-sm-5 ms-4 ms-lg-3">
                            <slot name="description" @slotchange=${this._handleSlotDescriptionChange}></slot>
                          </div>
                        </div>
                      </div>
                    </div>
                  `
                : html` <slot name="description" @slotchange=${this._handleSlotDescriptionChange}></slot> `}
              <div
                class="${this.composeClass('col-12', {
                  'col-lg-8': this._hasDescription || this.footerPosition === 'right',
                })}"
              >
                <!-- HEADER PLACEHOLDER -->
                ${this._hasHeader
                  ? html`
                      <div class="it-heading-link-wrapper" part="megamenu-header">
                        <slot name="header" @slotchange=${this._onSlotHeaderChange}></slot>
                      </div>
                    `
                  : html`<slot name="header" @slotchange=${this._onSlotHeaderChange}></slot>`}

                <!-- LINKS -->
                ${this._menuItems.length > 0
                  ? html` <div class="row">
                      <div class="col-12">
                        <div class="link-list-wrapper" part="megamenu-link-list-wrapper">
                          <ul class="link-list" part="megamenu-link-list" style="columns: ${this.columns};">
                            <slot @slotchange=${this._setChildrenProperties}></slot>
                          </ul>
                        </div>
                      </div>
                    </div>`
                  : html`<slot @slotchange=${this._setChildrenProperties}></slot>`}
              </div>

              <!-- FOOTER -->
              <div
                class="${this.composeClass('col-12', {
                  'col-lg-4 px-0': this.footerPosition === 'right',
                })}"
              >
                ${this._hasFooter
                  ? html`
                      <div
                        class="${this.composeClass('', {
                          'text-end': this.footerAlign === 'right',
                          'it-footer-link-wrapper': this.footerPosition !== 'right',
                          'it-footer-link-wrapper-vertical': this.footerPosition === 'right',
                        })}"
                        part="megamenu-footer"
                      >
                        <slot name="footer" @slotchange=${this._onSlotFooterChange}></slot>
                      </div>
                    `
                  : html`<slot name="footer" @slotchange=${this._onSlotFooterChange}></slot>`}
              </div>
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
