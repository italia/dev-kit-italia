import { html, type PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';

import styles from './header.scss';

@customElement('it-header')
export class ItHeader extends BaseComponent {
  static styles = styles;

  @property({ type: Number })
  breakpoint = 991;

  @property({ type: String, attribute: 'open-aria-label' })
  openAriaLabel = 'Mostra la navigazione';

  @property({ type: String, attribute: 'close-aria-label' })
  closeAriaLabel = 'Chiudi la navigazione';

  @property({ type: String, attribute: 'back-label' })
  backLabel = 'Indietro';

  private mql?: MediaQueryList;

  private mode: 'inline' | 'modal' = 'inline';

  private headerCenterWrapper?: HTMLElement;

  private headerSlimMenu?: HTMLElement;

  private brandWrapper?: HTMLElement;

  private socialsWrapper?: HTMLElement;

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
    this.headerCenterWrapper = this.querySelector('.it-header-center-wrapper') as HTMLElement;

    this.brandWrapper = this.querySelector('.it-header-center-wrapper .it-brand-wrapper') as HTMLElement;
    this.headerSlimMenu = this.querySelector('.it-header-slim-wrapper ul') as HTMLElement;
    this.socialsWrapper = this.querySelector('.it-header-center-wrapper .it-socials') as HTMLElement;
    this.menuWrapper = this.querySelector('.it-header-navbar-wrapper nav') as HTMLElement;

    if (
      !this.headerCenterWrapper ||
      !this.headerSlimMenu ||
      !this.brandWrapper ||
      !this.socialsWrapper ||
      !this.menuWrapper
    ) {
      this.logger.error('<it-header> could not initialize wrappers.');
      return;
    }

    // const children = Array.from(this.childNodes).filter((node) => node !== this.headerCenterWrapper);
    // children.forEach((child) => this.headerCenterWrapper?.appendChild(child));

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
    if (
      !this.headerCenterWrapper ||
      !this.headerSlimMenu ||
      !this.brandWrapper ||
      !this.socialsWrapper ||
      !this.menuWrapper
    )
      return;

    if (!this.modalEl) {
      this.modalEl = this.createModal();
    }

    if (this.brandWrapper) {
      const brandClone = this.brandWrapper.cloneNode(true) as HTMLElement;
      brandClone.setAttribute('slot', 'custom-header');
      this.modalEl.appendChild(brandClone);
    }

    if (this.menuWrapper && !this.modalEl.contains(this.menuWrapper)) {
      this.menuWrapper.setAttribute('slot', 'content');
      this.modalEl.appendChild(this.menuWrapper);
    }

    if (this.headerSlimMenu && !this.modalEl.contains(this.headerSlimMenu)) {
      this.headerSlimMenu.setAttribute('slot', 'content');
      this.modalEl.appendChild(this.headerSlimMenu);
    }

    if (this.socialsWrapper && !this.modalEl.contains(this.socialsWrapper)) {
      this.socialsWrapper.setAttribute('slot', 'content');
      this.modalEl.appendChild(this.socialsWrapper);
    }

    if (!this.headerCenterWrapper.contains(this.modalEl)) {
      this.headerCenterWrapper.prepend(this.modalEl);
    }
  }

  private exitModal() {
    if (
      !this.headerCenterWrapper ||
      !this.menuWrapper ||
      !this.brandWrapper ||
      !this.socialsWrapper ||
      !this.headerSlimMenu
    )
      return;

    // if (this.modalEl?.contains(this.menuWrapper)) {
    //   this.menuWrapper.removeAttribute('slot');
    //   this.headerCenterWrapper.appendChild(this.menuWrapper);
    // }

    this.modalEl?.remove();
    this.modalEl = undefined;
  }

  private createModal() {
    const modal = document.createElement('it-modal');
    modal.setAttribute('position', 'left');
    modal.setAttribute('scrollable', 'true');
    modal.setAttribute('close-label', this.closeAriaLabel);
    modal.setAttribute('close-button-placement', 'backdrop');
    modal.setAttribute('id', 'it-nav-modal');

    const trigger = document.createElement('it-button');
    trigger.setAttribute('class', 'custom-navbar-toggler');
    trigger.setAttribute('variant', 'link');
    trigger.setAttribute('slot', 'trigger');
    trigger.setAttribute('it-aria-label', this.openAriaLabel);
    trigger.innerHTML = `
      <it-icon name="it-burger" size="sm"></it-icon>
    `;

    modal.addEventListener('it-modal-open', () => {
      document.body.classList.add('navbar-open');
    });

    modal.addEventListener('it-modal-close', () => {
      document.body.classList.remove('navbar-open');
    });

    modal.appendChild(trigger);

    return modal;
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-header': ItHeader;
  }
}
