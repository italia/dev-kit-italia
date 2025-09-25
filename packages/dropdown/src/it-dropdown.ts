/* eslint-disable lit-a11y/list */
import { BaseComponent, AriaKeyboardListController } from '@italia/globals';
import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './dropdown.scss';
import { type ItDropdownItem } from './it-dropdown-item.js';

type Size = 'sm' | 'lg';
type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light';

@customElement('it-dropdown')
export class ItDropdown extends BaseComponent {
  static styles = styles;

  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: String }) label?: string;

  @property({ type: Boolean, reflect: true }) disabled = false;

  @property({ type: String }) size?: Size;

  @property({ type: String }) variant?: Variant = 'primary';

  @property({ type: String }) alignment: string = 'bottom-start';

  @property({ type: Boolean }) dark = false;

  @property({ type: Boolean, attribute: 'full-width', reflect: true }) fullWidth = false;

  @property({ type: String, attribute: 'it-role' }) itRole: string = 'menu';

  @state() private _popoverOpen = false;

  private _buttonId = this.generateId('it-dropdown');

  private _menuId = this.generateId('it-dropdown-menu');

  @query('slot:not([name])') private _slotEl!: HTMLSlotElement;

  private _ariaNav = new AriaKeyboardListController(this);

  private get _triggerEl(): HTMLElement | null {
    return this.shadowRoot?.getElementById(this._buttonId) ?? null;
  }

  private _onTriggerClick = () => {
    if (this.disabled) return;
    this._popoverOpen = !this._popoverOpen;
  };

  private _onPopoverOpen = () => {
    this._popoverOpen = true;
  };

  private _onPopoverClose = () => {
    this._popoverOpen = false;
  };

  private get _menuItems() {
    if (!this._slotEl) return [];
    return this._slotEl
      .assignedElements({ flatten: true })
      .filter((el) => el.tagName === 'IT-DROPDOWN-ITEM') as ItDropdownItem[];
  }

  private _setChildrenProperties() {
    for (const item of this._menuItems) {
      item.dark = this.dark;
      item.fullWidth = this.fullWidth;

      if (this.itRole === 'menu') item.itRole = 'menuitem';
      else if (this.itRole === 'listbox') item.itRole = 'option';
      else if (this.itRole === 'tree') item.itRole = 'treeitem';
      else item.itRole = undefined;
    }
  }

  private _onKeyDown = (event: KeyboardEvent) => {
    const items = this._menuItems.map((item) => item.getFocusableElement()).filter((el) => !!el);
    const active = this.getActiveElement<ItDropdownItem>();
    if (!active) return;

    const currentIndex = items.indexOf(active);

    if (event.key === 'Tab') {
      if (event.shiftKey && currentIndex === -1) {
        this._popoverOpen = false;
      }
      if (!event.shiftKey && currentIndex === items.length - 1) {
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

    const handle = () => {
      this._ariaNav.setConfig({
        getItems: () => items,
        setActive: (idx) => items[idx]?.focus(),
        closeMenu: () => {
          this.addEventListener(
            'it-popover-close',
            () => {
              this._triggerEl?.focus();
            },
            { once: true, capture: true },
          );
          this._popoverOpen = false;
        },
        trigger: this._triggerEl,
      });

      this._ariaNav.handleKeyDown(event);
    };

    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      if (!this._popoverOpen && currentIndex === -1) {
        this.addEventListener('it-popover-open', handle, { once: true });
        this._popoverOpen = true;
        return;
      }
    }
    handle();
  };

  protected override updated() {
    this._setChildrenProperties();
  }

  render() {
    return html`
      <it-popover
        placement=${this.alignment}
        @it-popover-open=${this._onPopoverOpen}
        @it-popover-close=${this._onPopoverClose}
        ?open=${this._popoverOpen}
      >
        <it-button
          id=${this._buttonId}
          slot="trigger"
          ?it-aria-disabled="${this.disabled}"
          type="button"
          variant=${ifDefined(this.variant)}
          size=${ifDefined(this.size)}
          @click=${this._onTriggerClick}
          @keydown=${{ handleEvent: this._onKeyDown, capture: true }}
          class="dropdown-toggle"
          exportparts="focusable"
          it-aria-haspopup="${this.itRole === 'list' ? 'true' : this.itRole}"
          it-aria-controls=${this._menuId}
        >
          ${this.alignment.startsWith('left')
            ? html`<it-icon
                name=${this._popoverOpen ? 'it-collapse' : 'it-expand'}
                class="dropdown-toggle-icon left"
                size="sm"
              ></it-icon>`
            : ''}
          ${this.label}
          ${!this.alignment.startsWith('left')
            ? html`<it-icon
                name=${this._popoverOpen ? 'it-collapse' : 'it-expand'}
                class=${this.composeClass('dropdown-toggle-icon', {
                  right: this.alignment.startsWith('right'),
                  top: this.alignment.startsWith('top'),
                })}
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
    'it-dropdown': ItDropdown;
  }
}
