import { property } from 'lit/decorators.js';
import { type Constructor } from '../index.js';

export default function A11yMixin<T extends Constructor<HTMLElement>>(superClass: T) {
  abstract class A11yMixinClass extends superClass {
    @property({ type: String, reflect: true, attribute: 'html-role' }) htmlRole?: string;

    @property({ type: Boolean, reflect: true }) disabled?: boolean;

    @property({ type: Boolean, reflect: true }) expanded?: boolean;
  }

  return A11yMixinClass;
}
