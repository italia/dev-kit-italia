import { BaseComponent, FormControl } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import styles from './radio.scss';
import { ItRadioGroup } from './it-radio-group.js';

@customElement('it-radio')
export class ItRadio extends BaseComponent {
  static styles = styles;

  /**
   * Consume the parent radio group from Lit Context
   */

  /** The radio's value attribute */
  @property({ type: String, reflect: true })
  value = '';

  /** The radio's name attribute */
  @property({ type: String, reflect: true })
  name = '';

  /** Whether the radio is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Draws the radio in a checked state. */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Draws radioes inline, side by side. */
  @property({ type: Boolean, reflect: true })
  inline = false;

  /** The input's help text. */
  @property({ type: String, attribute: 'support-text' })
  supportText = '';

  @queryAssignedElements({ slot: 'label' })
  labelElements!: HTMLElement[];

  get label(): string {
    if (this.labelElements.length > 0) {
      return this.labelElements[0].innerText.trim();
    }
    return '';
  }

  get group(): ItRadioGroup | null {
    return this.closest('it-radio-group');
  }

  /**
   * Activate the radio via the group's public API
   */

  private activate(): void {
    if (this.checked || this.disabled) {
      return;
    }

    // Use the group's public API if available
    if (this.group) {
      this.group.selectRadio(this);
    } else {
      // Fallback if no group (shouldn't happen in normal usage)
      this.checked = true;
      this.dispatchEvent(
        new Event('change', {
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  /**
   * Handle keyup for Space key
   */
  private handleKeyup = (event: KeyboardEvent): void => {
    if (event.code === 'Space') {
      event.preventDefault();
      this.activate();
    }
  };

  /**
   * Handle keydown - delegate arrow keys to the group
   */
  private handleKeydown = (event: KeyboardEvent): void => {
    // Prevent Space from scrolling the page
    if (event.code === 'Space') {
      event.preventDefault();
      return;
    }

    // Let Tab and Shift+Tab work normally for navigation
    if (event.key === 'Tab') {
      return;
    }

    // Only prevent default for arrow keys (to prevent page scrolling)
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
    }

    // Delegate keyboard navigation to the group's public API
    this.group?.handleRadioKeyDown(this, event);
  };

  /**
   * Handle click on the host
   */
  private handleClick = (): void => {
    this.activate();
  };

  override connectedCallback() {
    super.connectedCallback?.();
    // Set role on host like Spectrum (NOT on internal element)
    this.setAttribute('role', 'radio');

    // Set tabindex if not already set (roving tabindex will be managed by group)
    if (!this.hasAttribute('tabindex')) {
      this.tabIndex = 0;
    }

    // Add event listeners on host
    this.addEventListener('click', this.handleClick);
    // Use capture phase for keydown to prevent Space from scrolling
    this.addEventListener('keydown', this.handleKeydown, { capture: true });
    this.addEventListener('keyup', this.handleKeyup, { capture: true });
  }

  override disconnectedCallback() {
    super.disconnectedCallback?.();
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keydown', this.handleKeydown, { capture: true });
    this.removeEventListener('keyup', this.handleKeyup, { capture: true });
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    // Update ARIA attributes on host (like Spectrum does)
    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }

    if (changedProperties.has('disabled')) {
      if (this.disabled) {
        this.setAttribute('aria-disabled', 'true');
      } else {
        this.removeAttribute('aria-disabled');
      }
    }

    // logger
    if (!this.label) {
      this.logger.warn(
        `Label is required to ensure accessibility. Please, define a label for <it-radio name="${this.name}" ... /> .`,
      );
    }
  }

  /**
   * Render internal structure (like Spectrum)
   * Just visual elements, no role/aria/events here (they're on the host)
   */
  // eslint-disable-next-line class-methods-use-this
  private _renderInput() {
    // Render visual elements like Spectrum does
    // #input = container, #button = visual circle
    const inputRender = html`
      <div id="input" part="input"></div>
      <span id="button" part="button" class="form-check-input"></span>
    `;

    return inputRender;
  }

  // Render the UI as a function of component state
  override render() {
    const supportTextId = `${this._id}-support-text`;

    const supportTextRender = html` ${when(
      this.supportText,
      () =>
        html`<slot name="helpText"><small class="form-text" id="${supportTextId}">${this.supportText}</small></slot>`,
    )}`;

    // const showValidation = true; // this._touched || this.customValidation ;
    // const validityMessage = (showValidation ? (this.validationMessage ?? '') : '') ?? '';

    // const invalid =
    //   validityMessage?.length > 0 || (!this.customValidation && this.inputElement?.checkValidity() === false);

    // const validityMessageRender = html`<div
    //   role="alert"
    //   id="invalid-feedback-${this._id}"
    //   class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
    //   ?hidden=${!(validityMessage?.length > 0)}
    // >
    //   <span class="visually-hidden">${this.label}: </span>${validityMessage}
    // </div>`;

    const wrapperClasses = this.composeClass(
      'form-check',
      this.inline ? 'form-check-inline' : '',
      this.group ? 'form-check-group' : '',
      'it-form__control',
      // invalid ? 'is-invalid' : '',
      // !invalid && this._touched ? 'just-validate-success-field' : '',
    );
    const ariaDescribedBy = this.composeClass(
      this.supportText?.length > 0 ? supportTextId : '',
      this._ariaAttributes['aria-describedby']?.length > 0 ? this._ariaAttributes['aria-describedby'] : '',
      // validityMessage?.length > 0 ? `invalid-feedback-${this._id}` : '',
    );

    const labelClasses = this.composeClass(this.disabled ? 'disabled' : '');

    return html`
      <div class="${wrapperClasses}" part="input-wrapper" aria-describedby="${ifDefined(ariaDescribedBy || undefined)}">
        ${this._renderInput()}
        <span part="label" class="${labelClasses}"><slot name="label">${this.label}</slot></span>
        ${supportTextRender}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-radio': ItRadio;
  }
}
