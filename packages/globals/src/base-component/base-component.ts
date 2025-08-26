import clsx from 'clsx';
import { LitElement } from 'lit';
import { LocalizeMixin } from '@italia/i18n';
import { Constructor } from '../index.js';
import { Logger } from '../utils/logger.js';

// import TrackFocus from '../utils/track-focus.js';

export interface BaseComponentInterface {
  addFocus(element: HTMLElement): void;
  composeClass: typeof clsx;
}

export type BaseComponentType = typeof LitElement & Constructor<BaseComponentInterface>;

/**
 * Factory function per creare una base class estendibile
 * con stili personalizzati.
 */

export class BaseComponent extends LitElement {
  protected logger: Logger;

  protected composeClass = clsx;

  protected _id?: string; // id interno del componente, da usare sui veri elementi HTML

  constructor() {
    super();
    this.logger = new Logger(this.tagName.toLowerCase());
  }

  protected get _ariaAttributes(): Record<string, string> {
    const attributes: Record<string, string> = {};
    for (const attr of this.getAttributeNames()) {
      if (attr.startsWith('aria-')) {
        attributes[attr] = this.getAttribute(attr)!;
      }
    }
    return attributes;
  }

  // eslint-disable-next-line class-methods-use-this
  generateId(prefix: string) {
    return `${prefix}-${Math.random().toString(36).slice(2)}`;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  addFocus(element: HTMLElement) {
    // new TrackFocus(element); // per il momento è stato disattivato perchè ci sono le pseudo classi ::focus-visible per fare quello che fa TrackFocus. Si possono aggiungere regole css in bsi-italia 3 dato che stiamo facendo una breaking release di bsi.
  }

  // eslint-disable-next-line class-methods-use-this
  protected getActiveElement<T extends HTMLElement>(): T | null {
    let active = document.activeElement;
    while (active && active.shadowRoot && active.shadowRoot.activeElement) {
      active = active.shadowRoot.activeElement;
    }
    return active as T | null;
  }

  connectedCallback() {
    super.connectedCallback();

    // generate internal _id
    const prefix = this.id?.length > 0 ? this.id : this.tagName.toLowerCase();
    this._id = this.generateId(prefix);
  }
}

export const BaseLocalizedComponent = LocalizeMixin(BaseComponent);
