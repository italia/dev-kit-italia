import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { ItCheckboxBase } from '@italia/checkbox/it-checkbox-base.js';

import styles from './toggle.scss';

/**
 * @element it-toggle
 */
@customElement('it-toggle')
export class ItToggle extends ItCheckboxBase {
  static override styles = [ItCheckboxBase.styles, styles];

  type = 'checkbox'; // Toggle is still a checkbox input type

  override render() {
    const supportTextId = `${this._id}-support-text`;

    const supportTextRender = this.getSupportTextRender(supportTextId);

    const showValidation = this.formControlController.submittedOnce || this.customValidation; // true; // this._touched || this.customValidation ;
    const validityMessage = (showValidation ? (this.validationMessage ?? '') : '') ?? '';

    const invalid =
      validityMessage?.length > 0 || (!this.customValidation && this.inputElement?.checkValidity() === false);

    const validityMessageRender = this.getValidityMessageRender(validityMessage);

    const wrapperClasses = this.getWrapperClasses();
    return html`
      <div class="${wrapperClasses}" part="toggle-wrapper input-wrapper">
        <div class="toggles">
          <label for="${this._id}" part="label focusable">
            <slot name="label"></slot>
            ${this._renderInput(supportTextId, invalid, validityMessage)}
            <span class="lever"></span>
          </label>
        </div>
        ${validityMessageRender} ${supportTextRender}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-toggle': ItToggle;
  }
}
