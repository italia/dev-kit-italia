import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { consume } from '@lit/context';
import { when } from 'lit/directives/when.js';
import { radioGroupContext } from './radio-context.js';
import type { ItRadioGroup } from './it-radio-group.js';

import styles from './radio.scss';

@customElement('it-radio')
export class ItRadio extends BaseComponent {
  static styles = styles;

  /**
   * Consume the parent radio group from Lit Context
   */
  @consume({ context: radioGroupContext, subscribe: true })
  private _group?: ItRadioGroup;

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

  /** Draws radios in groups. */
  @property({ type: Boolean, reflect: true })
  group = false;

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

  /** Simulates a click on the radio. */
  click() {
    if (!this.disabled) {
      this.activate();
    }
  }

  /**
   * Activate the radio via the group's public API
   */
  private activate(): void {
    if (this.checked || this.disabled) {
      return;
    }

    // Use the group's public API if available
    if (this._group) {
      this._group.selectRadio(this);
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

    // Delegate arrow keys to the group's public API
    if (this._group && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      this._group.handleRadioKeyDown(this, event);
    }
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
    this.addEventListener('keyup', this.handleKeyup);
    // Use capture phase for keydown to prevent Space from scrolling
    this.addEventListener('keydown', this.handleKeydown, { capture: true });
  }

  override disconnectedCallback() {
    super.disconnectedCallback?.();
    this.removeEventListener('click', this.handleClick);
    this.removeEventListener('keyup', this.handleKeyup);
    this.removeEventListener('keydown', this.handleKeydown, { capture: true });
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
      () => html` <small class="form-text" id="${supportTextId}">${this.supportText}</small> `,
    )}`;

    const wrapperClasses = this.composeClass(
      'form-check',
      this.inline ? 'form-check-inline' : '',
      this.group ? 'form-check-group' : '',
    );

    const labelClasses = this.composeClass(this.disabled ? 'disabled' : '');

    return html`
      <div class="${wrapperClasses}" part="input-wrapper">
        ${this._renderInput()}
        <label part="label" class="${labelClasses}"><slot name="label">${this.label}</slot></label>
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
