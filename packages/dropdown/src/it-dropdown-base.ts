/* eslint-disable lit-a11y/list */
import { BaseComponent, AriaKeyboardListController } from '@italia/globals';
import { html, LitElement, nothing } from 'lit';
import { /* customElement, */ property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ItButton } from '@italia/button';
import styles from './dropdown.scss';
import { type ItDropdownItem } from './it-dropdown-item.js';

type Size = 'sm' | 'lg';
type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light';

// Base class without @customElement decorator for inheritance
export class ItDropdownBase extends BaseComponent {
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

  @property({ type: String, attribute: 'it-role' }) itRole: 'list' | 'menu' | 'listbox' | 'tree' = 'list';

  @property({ type: String, attribute: 'it-aria-label' }) itAriaLabel: string = '';

  @property({ type: Number, attribute: 'offset' }) offset: number | null = null;

  @property({ type: Boolean, attribute: 'no-flip' }) noFlip: boolean = false;

  /** When true, hides the expand (caret) icon next to the trigger label. Used e.g. by the avatar "+N" group balloon. */
  @property({ type: Boolean, attribute: 'hide-expand-icon', reflect: true }) hideExpandIcon: boolean = false;

  /** When true, centres the popover arrow on the trigger instead of the fixed notch position. Used by avatar dropdowns. */
  @property({ type: Boolean, attribute: 'center-arrow', reflect: true }) centerArrow: boolean = false;

  @state() protected _popoverOpen = false;

  protected _buttonId = this.generateId('it-dropdown');

  protected _menuId = this.generateId('it-dropdown-menu');

  @query('slot:not([name])') private _slotEl!: HTMLSlotElement;

  protected _ariaNav = new AriaKeyboardListController(this);

  private get _triggerEl(): HTMLElement | null {
    return this.shadowRoot?.getElementById(this._buttonId) ?? null;
  }

  override connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();

    // Ascolta i click fuori dal componente per chiudere il popover
    document.addEventListener('click', this._onDocumentClick, true);
  }

  override disconnectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.disconnectedCallback();
    document.removeEventListener('click', this._onDocumentClick, true);
  }

  protected _onTriggerClick = () => {
    if (this.disabled) return;
    this._popoverOpen = !this._popoverOpen;
  };

  protected _onPopoverOpen = () => {
    this._popoverOpen = true;
    this.setAttribute('data-it-aria-expanded', 'true');
  };

  protected _onPopoverClose = () => {
    this._popoverOpen = false;
    this.setAttribute('data-it-aria-expanded', 'false');
  };

  protected get _menuItems() {
    if (!this._slotEl) return [];
    return this._slotEl
      .assignedElements({ flatten: true })
      .filter((el) => el.tagName === 'IT-DROPDOWN-ITEM') as ItDropdownItem[];
  }

  protected _setChildrenProperties() {
    for (const item of this._menuItems) {
      item.dark = this.dark;
      item.fullWidth = this.fullWidth;

      if (this.itRole === 'menu') item.itRole = 'menuitem';
      else if (this.itRole === 'listbox') item.itRole = 'option';
      else if (this.itRole === 'tree') item.itRole = 'treeitem';
      else item.itRole = undefined;
    }
  }

  protected _onTabKeyDown = (
    event: KeyboardEvent,
    items: Element[],
    active: ItDropdownItem | ItButton,
    currentIndex: number,
  ) => {
    function isTrigger(el: ItDropdownItem | ItButton): el is ItButton {
      return currentIndex === -1;
    }
    if (event.key === 'Tab') {
      if (isTrigger(active)) {
        if (event.shiftKey) this._popoverOpen = false;
        return;
      }
      // if (event.shiftKey && currentIndex === -1) {
      //   // from the trigger item
      //   this._popoverOpen = false;
      // }
      if (!event.shiftKey && currentIndex === items.length - 1) {
        // from the last item
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
        if (!active.href) event.preventDefault();
      }
      if (!active.href) {
        // when the dropdown items don't have an href they are not natively tabbable, handle manually
        if (event.shiftKey && currentIndex > 0) {
          event.preventDefault();
          this._ariaNav.handleKeyDown(new KeyboardEvent('keydown', { ...event, key: 'ArrowUp' }));
        }
        if (!event.shiftKey && currentIndex < items.length - 1) {
          event.preventDefault();
          this._ariaNav.handleKeyDown(new KeyboardEvent('keydown', { ...event, key: 'ArrowDown' }));
        }
        if (!event.shiftKey && currentIndex === items.length - 1) {
          this._triggerEl?.dispatchEvent(new KeyboardEvent('keydown', { ...event }));
        }
      }
    }
  };

  protected _onKeyDown = (event: KeyboardEvent) => {
    const items = this._menuItems.map((item) => item.getFocusableElement()).filter((el) => !!el);
    const active = this.getActiveElement<ItDropdownItem | ItButton>();

    if (!active) return;

    const currentIndex = items.indexOf(active);

    // handle Tab keydown separately to anable overriding this bhv from consumer components that extend this.
    this._onTabKeyDown(event, items, active, currentIndex);

    const handle = () => {
      this._ariaNav.setConfig({
        getItems: () => items,
        setActive: (idx) => {
          items[idx]?.focus();
        },
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
      if (!this.disabled && !this._popoverOpen && currentIndex === -1) {
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

  private _onDocumentClick = (event: MouseEvent) => {
    if (this._popoverOpen && !this.contains(event.target as Node)) {
      this._popoverOpen = false;
    }
  };

  // https://github.com/primefaces/primeng/issues/14851 for conditional aria controls
  render() {
    return html`
      <it-popover
        placement=${this.alignment}
        @it-popover-open=${this._onPopoverOpen}
        @it-popover-close=${this._onPopoverClose}
        exportparts="focusable, icon, button, it-icon, it-button, dropdown-button, dropdown-icon-expand, popover-content"
        part="dropdown-popover"
        ?open=${this._popoverOpen}
        offset=${ifDefined(this.offset || undefined)}
        ?no-flip=${this.noFlip}
        ?center-arrow=${this.centerArrow}
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
          exportparts="focusable, button, icon, it-icon"
          part="dropdown-button"
          it-aria-haspopup="${this.itRole === 'list' ? 'true' : this.itRole}"
          it-aria-controls=${this._popoverOpen ? this._menuId : nothing}
        >
          ${this.alignment.startsWith('left') && !this.hideExpandIcon
            ? html`<it-icon
                name="it-expand"
                class="icon-expand left"
                size="sm"
                exportparts="icon"
                part="dropdown-icon-expand"
              ></it-icon>`
            : ''}

          <slot name="label">${this.label}</slot>
          ${!this.alignment.startsWith('left') && !this.hideExpandIcon
            ? html`<it-icon
                name="it-expand"
                class=${this.composeClass('icon-expand', {
                  right: this.alignment.startsWith('right'),
                  top: this.alignment.startsWith('top'),
                })}
                exportparts="icon"
                part="dropdown-icon-expand"
                size="sm"
              ></it-icon>`
            : ''}
        </it-button>
        <div
          slot="content"
          part="popover-content"
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
