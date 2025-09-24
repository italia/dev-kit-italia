import { Constructor } from '../index.js';
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @param Base The base class.
 * @returns A mix-in implementing `.setCustomValidity()` method.
 */
const ValidityMixin = <T extends Constructor<HTMLElement>>(Base: T) => {
  abstract class ValidityMixinImpl extends Base {
    /**
     * Field is touched
     */
    _touched: boolean = false;

    // HANDLERS FOR TOUCHES. Questi li manteniamo
    _handleBlur() {
      this._touched = true;
      this.dispatchEvent(new FocusEvent('it-blur', { bubbles: true, composed: true }));
    }

    _handleFocus() {
      this.dispatchEvent(new FocusEvent('it-focus', { bubbles: true, composed: true }));
    }

    _handleClick() {
      this.dispatchEvent(new MouseEvent('it-click', { bubbles: true, composed: true }));
    }

    _handleChange(e: Event) {
      const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      let value: unknown;

      if (target instanceof HTMLInputElement) {
        switch (target.type) {
          case 'checkbox':
          case 'radio':
            value = target.checked;
            break;
          case 'file':
            value = target.files; // FileList
            break;
          default:
            value = target.value;
        }
      } else if (target instanceof HTMLSelectElement) {
        if (target.multiple) {
          value = Array.from(target.selectedOptions).map((o) => o.value);
        } else {
          value = target.value;
        }
      } else {
        // textarea o altri input con value
        value = (target as any).value;
      }

      this.dispatchEvent(
        new CustomEvent('it-change', {
          detail: { value, el: target },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  return ValidityMixinImpl;
};

export default ValidityMixin;
