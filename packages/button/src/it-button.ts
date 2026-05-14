import { BaseComponent, setAttributes } from '@italia/globals';
import { html, type PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type Sizes, type Variants } from './types.js';
import styles from './button.scss';

@customElement('it-button')
export class ItButton extends BaseComponent {
  static styles = styles;

  static get formAssociated() {
    return true;
  }

  @query('button') private _nativeButton!: HTMLButtonElement;

  @property({ type: String, reflect: true }) type: HTMLButtonElement['type'] = 'button';

  @property({ type: String, reflect: true }) variant: Variants = '';

  @property({ type: String, reflect: true }) size: Sizes = '';

  @property({ type: Boolean, reflect: true }) outline = false;

  @property({ type: Boolean, reflect: true }) block = false;

  @property({ type: String }) value = '';

  @property({ type: Boolean, reflect: true, attribute: 'it-inert' }) itInert = false;

  @property() internals = this.attachInternals();

  @property({ type: Boolean, reflect: true }) disabled?: boolean;

  @property({ type: Boolean, reflect: true, attribute: 'it-aria-expanded' }) expanded?: boolean;

  @state() private _hasIcon = false;

  @state() private _hasProgress = false;

  surfaceSubmitEvent(event: any) {
    if (this.form && !this.disabled) {
      event.preventDefault();
      event.stopPropagation();

      let someInvalid = false;
      // valido ogni campo
      const itItems = Array.from(this.form.querySelectorAll('*')).filter((el: any) =>
        el.tagName.toLowerCase().startsWith('it-'),
      );

      itItems.forEach((itItem: any) => {
        // Accedi allo Shadow DOM del web component
        if (itItem.checkValidity) {
          itItem.checkValidity();
        }
        const isValid = itItem?.isValid ? itItem.isValid() : true;

        // Controlla se l'input interno esiste e se non è valido
        if (!isValid) {
          someInvalid = true;
          // eslint-disable-next-line no-console
          console.error(`Invalid field: [name]=${itItem.name}, [id]=${itItem.id}`);
        }
      });
      if (!someInvalid) {
        this.form.requestSubmit();
      }
    }
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  get form() {
    return this.internals ? this.internals.form : null;
  }

  public override focus() {
    this._nativeButton?.focus();
  }

  public setDescribedBy(element: Element | null): void {
    const btn = this.shadowRoot?.querySelector('button');
    if (!btn) return;
    if ('ariaDescribedByElements' in Element.prototype) {
      btn.ariaDescribedByElements = element ? [element] : null;
    } else if (element?.id) {
      btn?.setAttribute('aria-describedby', element.id);
    } else {
      btn?.removeAttribute('aria-describedby');
    }
  }

  private _onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!this.disabled) {
        this._nativeButton?.click();
      } else {
        e.stopPropagation();
      }
    }
  };

  connectedCallback(): void {
    super.connectedCallback?.();

    if (this.block) {
      this.classList.add('d-block', 'w-100');
    }

    this.addEventListener('keydown', this._onKeyDown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('keydown', this._onKeyDown);
    super.disconnectedCallback?.();
  }

  private static hasMatchingElement(elements: Element[], selector: string): boolean {
    return elements.some((element) => element.matches(selector) || element.querySelector(selector) !== null);
  }

  override firstUpdated(changedProperties: PropertyValues<this>): void {
    super.firstUpdated?.(changedProperties);
    this._updateSlottedStates(Array.from(this.children));
  }

  private _updateSlottedStates = (elements: Element[]) => {
    this._hasIcon = ItButton.hasMatchingElement(elements, 'it-icon');
    this._hasProgress = ItButton.hasMatchingElement(elements, 'it-progress');
  };

  private _onSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    const assignedElements = slot.assignedElements({ flatten: true });

    this._updateSlottedStates(assignedElements);
  };

  // Render the UI as a function of component state
  override render() {
    const classes = this.composeClass('btn', this.className, {
      [`btn-${this.variant}`]: !!this.variant && !this.outline,
      [`btn-outline-${this.variant}`]: !!this.variant && this.outline,
      [`btn-${this.size}`]: !!this.size,
      disabled: this.disabled,
      'btn-icon': this._hasIcon,
      'btn-progress': this._hasProgress,
      'd-block w-100': this.block,
    });
    const part = this.composeClass('button', 'focusable', {
      [this.variant]: this.variant?.length > 0,
      outline: this.outline,
    });
    return html`
      <button
        id=${ifDefined(this.id || undefined)}
        part="${part}"
        type="${this.type}"
        class="${classes}"
        @click="${this.type === 'submit' ? this.surfaceSubmitEvent : undefined}"
        .value="${ifDefined(this.value ? this.value : undefined)}"
        aria-disabled="${ifDefined(this.disabled ? this.disabled : undefined)}"
        ${setAttributes(this._ariaAttributes)}
        aria-expanded="${ifDefined(this.expanded !== undefined ? this.expanded : undefined)}"
        ?inert="${this.itInert}"
      >
        <slot @slotchange="${this._onSlotChange}"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-button': ItButton;
  }
}
