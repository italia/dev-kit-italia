import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type ItRadioGroup } from '@italia/radio';

import styles from './radio.scss';

@customElement('it-radio')
export class ItRadio extends BaseComponent {
  static styles = styles;

  /** The radio's value attribute */
  @property({ type: String, reflect: true })
  value = '';

  /** Whether the radio is disabled */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Draws the radio in a checked state. */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** The input's help text. */
  @property({ type: String, attribute: 'support-text' })
  supportText = '';

  /**
   * Internal reactive state synced from group
   * These replace the old getters that read from this.group
   */
  @state()
  private _name = '';

  @state()
  private _grouped = false;

  @state()
  private _required = false;

  @state()
  private _inline = false;

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

  // Public getters now read from internal state (reactive)
  get name(): string {
    return this._name || this.group?.name || '';
  }

  get grouped(): boolean {
    return this._grouped;
  }

  get required(): boolean {
    return this._required;
  }

  get inline(): boolean {
    return this._inline;
  }

  get invalid(): boolean {
    // Read aria-invalid explicitly from the group: only the string "true" should be considered invalid
    const aria = this.group?.getAttribute ? this.group.getAttribute('aria-invalid') : null;
    return aria === 'true';
  }

  /**
   * PUBLIC API: Called by group to sync state
   * This replaces the need for requestUpdate() calls
   */
  syncFromGroup(groupState: { name?: string; grouped?: boolean; required?: boolean; inline?: boolean }): void {
    if (groupState.name !== undefined) this._name = groupState.name;
    if (groupState.grouped !== undefined) this._grouped = groupState.grouped;
    if (groupState.required !== undefined) this._required = groupState.required;
    if (groupState.inline !== undefined) this._inline = groupState.inline;
  }
  /**
   * Activate the radio via the group's public API
   */

  private activate(event: KeyboardEvent | PointerEvent | MouseEvent): void {
    if (this.checked || this.disabled) {
      return;
    }

    // Use the group's public API if available
    if (this.group) {
      this.group.selectRadio(this, event);
    } else {
      // Fallback if no group (shouldn't happen in normal usage)
      this.checked = true;
    }
  }

  /**
   * Handle keyup for Space key
   */
  private handleKeyup = (event: KeyboardEvent): void => {
    if (event.code === 'Space') {
      event.preventDefault();
      this.activate(event);
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
      this.group?.handleRadioKeyDown(this, event);
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
  private handleClick = (event: PointerEvent | MouseEvent): void => {
    this.activate(event);
  };

  override connectedCallback() {
    super.connectedCallback?.();

    // Set role on host for screen reader context
    this.setAttribute('role', 'radio');

    // Set initial tabindex if not already set (roving tabindex will be managed by group)
    if (!this.hasAttribute('tabindex')) {
      this.tabIndex = 0;
    }

    // Add event listeners on host
    this.addEventListener('click', this.handleClick);
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

    // Update ARIA attributes on host
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

    // Sync name attribute from internal state
    if (changedProperties.has('_name')) {
      if (this._name) {
        this.setAttribute('name', this._name);
      } else {
        this.removeAttribute('name');
      }
    }

    // Sync aria-required from internal state
    if (changedProperties.has('_required')) {
      if (this._required) {
        this.setAttribute('aria-required', 'true');
      } else {
        this.removeAttribute('aria-required');
      }
    }

    // logger
    if (!this.label) {
      this.logger.warn(`Label is required to ensure accessibility. Please, define a label for <it-radio/> .`);
    }
  }

  /**
   * Render internal structure (like Spectrum)
   * Just visual elements, no role/aria/events here (they're on the host)
   * Protected to allow subclasses (like it-rating-item) to override
   */
  // eslint-disable-next-line class-methods-use-this
  protected _renderInput() {
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

    const wrapperClasses = this.composeClass(
      'form-check',
      this.inline && !this.grouped ? 'form-check-inline' : '',
      this.grouped && !this.inline ? 'form-check-group' : '',
    );
    const ariaDescribedBy = this.composeClass(
      this.supportText?.length > 0 ? supportTextId : '',
      this._ariaAttributes['aria-describedby']?.length > 0 ? this._ariaAttributes['aria-describedby'] : '',
    );
    const controlClasses = this.composeClass('radio-control', this.grouped ? 'radio-control-grouped' : '');
    const labelClasses = this.composeClass('radio-control-label', this.disabled ? 'disabled' : '');

    return html`
      <div class="${wrapperClasses}" part="input-wrapper" aria-describedby="${ifDefined(ariaDescribedBy || undefined)}">
        <div id="radio-control" part="radio-control" class="${controlClasses}">
          ${this._renderInput()}
          <span part="label" class="${labelClasses}"><slot name="label">${this.label}</slot></span>
        </div>
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
