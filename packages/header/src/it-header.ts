import { html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';

import styles from './header.scss';

@customElement('it-header')
export class ItHeader extends BaseComponent {
  static styles = styles;

  @property({ type: Number })
  breakpoint = 991;

  @property({ type: String, attribute: 'open-label' })
  openLabel = 'Menu';

  @property({ type: String, attribute: 'open-aria-label' })
  openAriaLabel = 'Apri/Chiudi menu del sito';

  @property({ type: String, attribute: 'back-label' })
  backLabel = 'Indietro';

  private mql?: MediaQueryList;

  private mode: 'inline' | 'modal' = 'inline';

  private wrapper?: HTMLElement;

  private menuWrapper?: HTMLElement;

  private modalEl?: HTMLElement;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback?.();
    this.setupMediaQuery();
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();
    this.mql?.removeEventListener('change', this.onMediaChange);
    this.modalEl?.remove();
    this.modalEl = undefined;
  }

  protected firstUpdated() {
    this.wrapper = this.querySelector('.it-header-responsive-wrapper') as HTMLElement;
    this.menuWrapper = this.querySelector('.menu-wrapper') as HTMLElement;

    if (!this.wrapper || !this.menuWrapper) {
      this.logger.error('<it-header> could not initialize wrappers.');
      return;
    }

    const children = Array.from(this.childNodes).filter((node) => node !== this.wrapper);
    children.forEach((child) => this.menuWrapper?.appendChild(child));
    this.wrapper.appendChild(this.menuWrapper);

    this.updateMode(this.mql?.matches ?? false);
  }

  protected updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('breakpoint')) {
      this.setupMediaQuery();
      this.updateMode(this.mql?.matches ?? false);
    }
  }

  private setupMediaQuery() {
    if (this.mql) {
      this.mql.removeEventListener('change', this.onMediaChange);
    }

    this.mql = window.matchMedia(`(max-width: ${this.breakpoint}px)`);
    this.mql.addEventListener('change', this.onMediaChange);
  }

  private onMediaChange = (event: MediaQueryListEvent) => {
    this.updateMode(event.matches);
  };

  private updateMode(isMobile: boolean) {
    const nextMode: 'inline' | 'modal' = isMobile ? 'modal' : 'inline';
    if (this.mode === nextMode) return;

    this.mode = nextMode;

    if (this.mode === 'modal') {
      this.enterModal();
    } else {
      this.exitModal();
    }
  }

  private enterModal() {
    if (!this.wrapper || !this.menuWrapper) return;

    if (!this.modalEl) {
      this.modalEl = this.createModal();
    }

    if (!this.modalEl.contains(this.menuWrapper)) {
      this.menuWrapper.setAttribute('slot', 'content');
      this.modalEl.appendChild(this.menuWrapper);
    }

    if (!this.wrapper.contains(this.modalEl)) {
      this.wrapper.appendChild(this.modalEl);
    }
  }

  private exitModal() {
    if (!this.wrapper || !this.menuWrapper) return;

    if (this.modalEl?.contains(this.menuWrapper)) {
      this.menuWrapper.removeAttribute('slot');
      this.wrapper.appendChild(this.menuWrapper);
    }

    this.modalEl?.remove();
    this.modalEl = undefined;
  }

  private createModal() {
    const modal = document.createElement('it-modal');
    modal.setAttribute('position', 'left');
    modal.setAttribute('scrollable', 'true');
    modal.setAttribute('hide-close-button', 'true');

    const trigger = document.createElement('it-button');
    trigger.setAttribute('class', 'custom-navbar-toggler');
    trigger.setAttribute('variant', 'link');
    trigger.setAttribute('slot', 'trigger');
    trigger.setAttribute('it-aria-label', this.openAriaLabel);
    trigger.innerHTML = `
      <it-icon name="it-burger" size="sm" color="primary"></it-icon>
      <span>${this.openLabel}</span>
    `;

    const backButton = document.createElement('it-button');
    backButton.setAttribute('slot', 'header');
    backButton.setAttribute('variant', 'link');
    backButton.setAttribute('block', '');
    backButton.innerHTML = `
      <it-icon name="it-chevron-left" size="sm" color="primary"></it-icon>
      <span>${this.backLabel}</span>
    `;
    backButton.addEventListener('click', () => {
      (modal as unknown as { hide?: () => void }).hide?.();
    });

    modal.addEventListener('it-modal-open', () => {
      document.body.classList.add('navbar-open');
    });

    modal.addEventListener('it-modal-close', () => {
      document.body.classList.remove('navbar-open');
    });

    modal.appendChild(trigger);
    modal.appendChild(backButton);

    return modal;
  }

  render() {
    return html`
      <div class="it-header-responsive-wrapper">
        <div class="menu-wrapper"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-header': ItHeader;
  }
}
