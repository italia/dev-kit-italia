/* eslint-disable lit-a11y/list */
import { BaseComponent, AriaKeyboardListController } from '@italia/globals';
import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './dropdown.scss';

type Size = 'sm' | 'lg';
type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'light';

@customElement('it-dropdown')
export class ItDropdown extends BaseComponent {
  static styles = styles;

  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: String }) label = 'Apri menu';

  @property({ type: Boolean, reflect: true }) disabled = false;

  @property({ type: String }) size?: Size;

  @property({ type: String }) variant?: Variant = 'primary';

  @property({ type: String }) alignment: string = 'bottom-start';

  @property({ type: Boolean }) dark = false;

  @property({ type: Boolean, attribute: 'full-width' }) fullWidth = false;

  @state() private _popoverOpen = false;

  private _buttonId = this.generateId('it-dropdown');

  @query('ul.link-list') private _menuEl!: HTMLUListElement;

  @query('slot:not([name])') private _slotEl!: HTMLSlotElement;

  private _ariaNav = new AriaKeyboardListController(this);

  private get _triggerEl(): HTMLElement | null {
    return this.shadowRoot?.getElementById(this._buttonId) ?? null;
  }

  private _onTriggerClick = () => {
    if (this.disabled) return;
    this._popoverOpen = !this._popoverOpen;
  };

  private get _menuItems() {
    if (!this._slotEl) return [];
    const items = this._slotEl.assignedElements({ flatten: true }).filter((el) => el.tagName === 'IT-DROPDOWN-ITEM');
    return (
      items
        // @ts-expect-error
        .map((item) => item.getFocusableElement())
        .filter((el): el is HTMLElement => !!el)
    );
  }

  private _onKeyDown = (event: KeyboardEvent) => {
    const items = this._menuItems;
    const active = this.getActiveElement();
    if (!active) return;

    const currentIndex = items.indexOf(active);

    if (event.key === 'Tab') {
      if (event.shiftKey && currentIndex === 0) {
        this._triggerEl?.focus();
      } else if (event.shiftKey && currentIndex === -1) {
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

    const handle = (e?: Event) => {
      e?.stopPropagation();
      this._ariaNav.setConfig({
        getItems: () => items,
        setActive: (idx) => items[idx]?.focus(),
        closeMenu: () => {
          this._popoverOpen = false;
        },
        trigger: this._triggerEl,
      });

      this.removeEventListener('popover-open', handle);
      this._ariaNav.handleKeyDown(event);
    };

    if (['ArrowDown', 'ArrowUp'].includes(event.key)) {
      if (!this._popoverOpen && currentIndex === -1) {
        this.addEventListener('popover-open', handle);
        this._popoverOpen = true;
        return;
      }
    }
    handle();
  };

  protected override updated(changedProps: PropertyValues) {
    super.updated(changedProps);
    if (changedProps.has('alignment') || changedProps.has('size') || changedProps.has('variant')) {
      this._applyAttributes();
    }
  }

  private _applyAttributes() {
    if (!this._triggerEl || !this._menuEl) return;

    if (this.role) this._menuEl.setAttribute('role', this.role);

    const cl = this.composeClass('btn', 'dropdown-toggle', {
      [`btn-${this.variant}`]: !!this.variant,
      [`btn-${this.size}`]: !!this.size,
    });
    this._triggerEl.className = cl;
  }

  render() {
    return html`
      <it-popover placement=${this.alignment} ?open=${this._popoverOpen}>
        <it-button
          id=${this._buttonId}
          slot="trigger"
          aria-disabled="${ifDefined(this.disabled ? 'true' : undefined)}"
          type="button"
          variant=${ifDefined(this.variant)}
          size=${ifDefined(this.size)}
          @click=${this._onTriggerClick}
          @keydown=${this._onKeyDown}
          aria-haspopup="true"
          aria-expanded=${String(this._popoverOpen)}
          class="dropdown-toggle"
        >
          ${this.alignment.startsWith('left')
            ? html`<it-icon
                name=${this._popoverOpen ? 'it-collapse' : 'it-expand'}
                class="dropdown-toggle-icon left"
                color=${this.variant === 'light' ? 'primary' : 'white'}
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
                color=${this.variant === 'light' ? 'primary' : 'white'}
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
              class="link-list"
              ?role=${ifDefined(this.role)}
              @keydown=${this._onKeyDown}
              aria-orientation=${ifDefined(this.fullWidth ? 'horizontal' : undefined)}
            >
              <slot></slot>
            </ul>
          </div>
        </div>
      </it-popover>
    `;
  }
}
