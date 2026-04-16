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

  private menuNav?: HTMLElement;

  private modalEl?: HTMLElement;

  private modalContentEl?: HTMLElement;

  private modalNavEl?: HTMLElement;

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
    this.socialsWrapper = this.querySelector('.it-header-center-wrapper .it-socials') as HTMLElement;
    this.headerSlimMenu = this.querySelector('.it-header-slim-wrapper ul') as HTMLElement;
    this.menuNav = this.querySelector('.it-header-navbar-wrapper nav') as HTMLElement;

    if (
      !this.headerCenterWrapper ||
      !this.headerSlimMenu ||
      !this.brandWrapper ||
      !this.socialsWrapper ||
      !this.menuNav
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

  private cloneULForModalMenu(ul: HTMLElement) {
    const ulClone = ul.cloneNode(true) as HTMLElement;
    ulClone.setAttribute('class', 'navbar-nav');
    Array.from(ulClone.children).forEach((li) => {
      if (li instanceof HTMLElement) {
        const active = li.classList.contains('active');
        const disabled = li.classList.contains('disabled');
        li.setAttribute('class', `nav-item${active ? ' active' : ''}${disabled ? ' disabled' : ''}`);

        const link = li.querySelector('a');
        if (link) {
          const aDisabled = link.classList.contains('disabled');
          link.setAttribute('class', `nav-link${active ? ' active' : ''}${aDisabled || disabled ? ' disabled' : ''}`);
        }
      }
    });
    return ulClone;
  }

  private enterModal() {
    if (
      !this.headerCenterWrapper ||
      !this.headerSlimMenu ||
      !this.brandWrapper ||
      !this.socialsWrapper ||
      !this.menuNav
    )
      return;

    if (!this.modalEl) {
      this.modalEl = this.createModal();
    }

    if (this.brandWrapper) {
      const brandClone = this.brandWrapper.cloneNode(true) as HTMLElement;
      brandClone.setAttribute('slot', 'header');
      this.modalEl.appendChild(brandClone);
    }

    console.log(this.modalContentEl, this.menuNav, this.headerSlimMenu, this.socialsWrapper); // DEBUG

    //genero il contenuto della modale solo la prima volta che entro in modalità mobile
    if (!this.modalContentEl) {
      this.modalContentEl = document.createElement('div');
      this.modalContentEl.setAttribute('slot', 'content');

      if (!this.modalNavEl) {
        this.modalNavEl = document.createElement('nav');
        this.modalNavEl.setAttribute('class', 'modal-nav navbar navbar-collapsable');
        this.modalNavEl.setAttribute('aria-label', 'Menu di navigazione');
      }

      //aggiungo il nav principale: dentro al nav principale del sito, possono esserci piu ul, per esempio uno per la navigazione principale e uno per la navigazione secondaria, in questo modo clono tutti gli ul e li aggiungo alla modale
      if (this.menuNav) {
        if (this.menuNav.getAttribute('aria-label')) {
          this.modalNavEl.setAttribute('aria-label', this.menuNav.getAttribute('aria-label') ?? 'Menu di navigazione');
        }

        this.menuNav.querySelectorAll('.menu-wrapper > ul').forEach((ul) => {
          const ulClone = this.cloneULForModalMenu(ul as HTMLElement);
          this.modalNavEl?.appendChild(ulClone);
        });
      }

      // aggiungo il menu dell'headerslim
      if (this.headerSlimMenu) {
        const ulHeaderSlim = this.cloneULForModalMenu(this.headerSlimMenu as HTMLElement);
        this.modalNavEl?.appendChild(ulHeaderSlim);
      }

      //aggiungo il nav al contenuto della modale
      this.modalContentEl.appendChild(this.modalNavEl);

      //aggiungo i social al contenuto della modale
      if (this.socialsWrapper) {
        const socialsWrapperClone = this.socialsWrapper.cloneNode(true) as HTMLElement;
        socialsWrapperClone.setAttribute('class', 'it-socials');
        this.modalContentEl.appendChild(socialsWrapperClone);
      }

      //aggiungo il contenuto (modalContentEl) alla modale
      if (!this.modalEl?.contains(this.modalContentEl)) {
        this.modalEl.appendChild(this.modalContentEl);
      }
    }

    //aggiungo la modale in pagina
    if (!this.headerCenterWrapper.contains(this.modalEl)) {
      this.headerCenterWrapper.prepend(this.modalEl);
    }
  }

  private exitModal() {
    if (
      !this.headerCenterWrapper ||
      !this.menuNav ||
      !this.brandWrapper ||
      !this.socialsWrapper ||
      !this.headerSlimMenu
    )
      return;

    // if (this.modalEl?.contains(this.menuNav)) {
    //   this.menuNav.removeAttribute('slot');
    //   this.headerCenterWrapper.appendChild(this.menuNav);
    // }

    this.modalEl?.remove();
    this.modalContentEl?.remove();
    this.modalNavEl?.remove();

    this.modalEl = undefined;
    this.modalContentEl = undefined;
    this.modalNavEl = undefined;
  }

  private createModal() {
    const modal = document.createElement('it-modal');
    modal.setAttribute('position', 'left');
    modal.setAttribute('scrollable', 'true');
    modal.setAttribute('close-label', this.closeAriaLabel);
    modal.setAttribute('close-button-placement', 'backdrop');
    modal.setAttribute('custom-header', 'true');
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
