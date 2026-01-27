/* eslint-disable default-param-last */
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';
import { type Position, type DarkMode, type LinePosition } from './types.js';

import styles from './navscroll.scss';

@customElement('it-navscroll')
export class ItNavscroll extends BaseComponent {
  static styles = styles;

  /**
   * Breakpoint di usabilità (zoom-safe)
   */
  @property({ type: Number })
  breakpoint = 991;

  /**
   * Label del trigger modale
   */
  @property({ type: String, attribute: 'open-label' })
  openLabel = 'Indice di navigazione';

  /**
   * Aria-Label del trigger modale
   */
  @property({ type: String, attribute: 'open-aria-label' })
  openAriaLabel = 'Apri/Chiudi indice di navigazione';

  /**
   * Label per il pulsante di 'Torna indietro' nella modale
   */
  @property({ type: String, attribute: 'back-label' })
  backLabel = 'Indietro';

  /**
   * Selettore del contenitore scrollabile da monitorare per la progress bar
   */
  @property({ type: String })
  for: string | null = null;

  /**
   * Posizione dello navscroll su mobile quando è chiuso
   * */
  @property({ type: String, attribute: 'position' })
  position: Position = 'bottom';

  /**
   * If on desktop you want navscroll to be sticky on top
   * */
  @property({ type: Boolean, attribute: 'sticky' })
  sticky: boolean = false;

  /** Where you want to display separation line on desktop */
  @property({ type: String, attribute: 'line-position' })
  linePosition: LinePosition = null;

  /** If you want dark mode only on mobile or desktop, or both */
  @property({ type: String, attribute: 'dark-mode' })
  darkMode: DarkMode = null;

  private mql!: MediaQueryList;

  private navEl!: HTMLElement;

  private modalEl?: HTMLElement;

  private mode: 'inline' | 'modal' = 'inline'; // Modalità di visualizzazione corrente, a seconda che siamo su desktop o mobile

  private progressEl!: HTMLElement; // div della progressbar

  private scrollContainer!: HTMLElement; // contenitore scrollabile (quello indicato dall'attributo 'for', altrimenti il document)

  private wrapper!: HTMLElement; // navscroll-wrapper

  private menuWrapper!: HTMLElement; // menu-wrapper

  private activeTarget: string | null = null; // voce di menu attiva in questo momento

  createRenderRoot() {
    // nav deve restare nel light DOM
    return this;
  }

  connectedCallback() {
    super.connectedCallback?.();

    // nav deve esistere
    this.navEl = this.querySelector('nav') as HTMLElement;
    if (!this.navEl) {
      // eslint-disable-next-line no-console
      this.logger.error('<it-navscroll> requires a <nav> item as children.');
      return;
    }

    // media query per modalità modal / inline
    this.mql = window.matchMedia(this.mediaQuery);
    this.mql.addEventListener('change', this.onMediaChange);
  }

  protected firstUpdated() {
    // ora il DOM del render esiste
    this.wrapper = this.querySelector('.it-navscroll-wrapper') as HTMLElement;
    this.menuWrapper = this.querySelector('.menu-wrapper') as HTMLElement;

    if (!this.wrapper || !this.menuWrapper) {
      this.logger.error('Wrapper not found');
      return;
    }

    // prendi tutti i figli e spostali nel wrapper
    const children = Array.from(this.childNodes).filter((node) => node !== this.wrapper);
    children.forEach((child) => this.menuWrapper.appendChild(child));
    this.wrapper.appendChild(this.menuWrapper);

    // inizializzazioni che dipendono dal DOM
    this.initContainers();
    this.attachLinkListeners();

    // inizializza il mode corretto
    this.updateMode(this.mql.matches);
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();

    this.mql.removeEventListener('change', this.onMediaChange);
    try {
      this.scrollContainer.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('scroll', this.onScroll);
    } catch (e) {
      // do nothing. One of this.scrollContainer or window will not have this.onScroll on event scroll.
    }
  }

  /*
   * Gestione dimensione schermo
   */
  private get mediaQuery() {
    return `(max-width: ${this.breakpoint}px)`;
  }

  private onMediaChange = (e: MediaQueryListEvent) => {
    this.updateMode(e.matches);
  };

  /*
   * Gestione della modale
   */
  public updateMode(isConstrained: boolean) {
    const nextMode = isConstrained ? 'modal' : 'inline';
    if (this.sticky) {
      if (nextMode === 'inline' && !this.wrapper.classList.contains('affix-top')) {
        this.wrapper.classList.add('affix-top');
      }
      if (nextMode === 'modal' && this.wrapper.classList.contains('affix-top')) {
        this.wrapper.classList.remove('affix-top');
      }
    }

    if (this.mode === nextMode) return;

    this.mode = nextMode;

    if (this.mode === 'modal') {
      this.enterModal();
    } else {
      this.exitModal();
    }
  }

  private enterModal() {
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
    // if (!this.shadowRoot?.contains(this.modalEl)) {
    //   this.shadowRoot?.appendChild(this.modalEl);
    // }
    this.updateTriggerText();
  }

  public exitModal() {
    if (this.modalEl?.contains(this.menuWrapper)) {
      this.wrapper.appendChild(this.menuWrapper);
      // this.shadowRoot?.appendChild(this.navEl);
    }

    this.modalEl?.remove();
    this.modalEl = undefined;
    this.menuWrapper.removeAttribute('slot');
  }

  private createModal(): HTMLElement {
    const modal = document.createElement('it-modal');

    modal.setAttribute('position', 'left');
    modal.setAttribute('scrollable', 'true');
    modal.setAttribute('hide-close-button', 'true');

    // trigger modale
    const trigger = document.createElement('it-button');
    trigger.setAttribute('class', 'custom-navbar-toggler');
    trigger.setAttribute('aria-label', this.openAriaLabel);
    trigger.setAttribute('variant', 'link');
    trigger.setAttribute('slot', 'trigger');
    trigger.innerHTML = `<span>${this.openLabel}</span>`;

    // pulsante di back
    const backButton = document.createElement('it-button');
    backButton.setAttribute('slot', 'header');
    backButton.setAttribute('variant', 'link');
    backButton.setAttribute('icon', 'it');
    backButton.setAttribute('block', '');
    backButton.innerHTML = `<it-icon name="it-chevron-left" size="sm" color="primary"></it-icon> <span>${this.backLabel}</span>`;
    backButton.addEventListener('click', () => {
      (modal as any).hide?.();
    });

    modal.appendChild(trigger);
    modal.appendChild(backButton);

    modal.addEventListener('it-modal-open', () => {
      document.body.classList.add('navbar-open');
    });
    modal.addEventListener('it-modal-close', () => {
      document.body.classList.remove('navbar-open');
    });

    return modal;
  }

  /*
   * Gestione dei container
   */
  private get scrollContainerTop() {
    return this.scrollContainer === document.documentElement ? window.scrollY : this.scrollContainer.scrollTop;
  }

  private initContainers() {
    // Cerco il main referenziato
    const targetContainer = this.for ? document.querySelector(this.for)! : (document.scrollingElement as HTMLElement);

    // Determino il container corretto
    const style = targetContainer ? getComputedStyle(targetContainer) : null;
    const overflowY = style?.overflowY;

    const isScrollableContainer = overflowY !== 'visible' && overflowY !== 'hidden';

    if (isScrollableContainer && targetContainer instanceof HTMLElement) {
      // container interno scrollabile
      this.scrollContainer = targetContainer;
      this.scrollContainer.addEventListener('scroll', () => this.onScroll());
    } else {
      // scroll della pagina → ascolto window
      this.scrollContainer = document.documentElement; // placeholder
      window.addEventListener('scroll', () => this.onScroll());
    }

    this.progressEl = this.querySelector('[role="progressbar"]')!; // diventerà this.querySelector('it-progress');
    if (!this.progressEl) return;

    // init a 0%
    this.updateProgress();
  }

  /*
   * Gestione della voce attiva
   */
  private setCurrent(hash: string) {
    const links = this.navEl.querySelectorAll('a[href^="#"]');

    // 1️⃣ reset: rimuovo active da tutti
    links.forEach((link) => {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    });

    // 2️⃣ applico active solo al link corrente e ai suoi parent
    const currentLink = this.navEl.querySelector(`a[href="${hash}"]`);

    if (currentLink) {
      currentLink.classList.add('active');
      currentLink.setAttribute('aria-current', 'location');

      let parentLi = currentLink.parentElement?.parentElement?.closest('li');
      while (parentLi) {
        parentLi.querySelector('a[href^="#"]')?.classList.add('active');
        parentLi = parentLi.parentElement?.parentElement?.closest('li');
      }
    }

    // Aggiorna trigger testo
    if (this.mode === 'modal') {
      this.updateTriggerText();
    }
  }

  // aggiorna il testo del trigger della modale in base al link attivo
  private updateTriggerText() {
    if (!this.modalEl) return;

    const trigger = this.modalEl.querySelector('[slot="trigger"]') as HTMLButtonElement;
    if (!trigger) return;

    const activeLink = this.navEl.querySelector('a[aria-current="location"]') as HTMLAnchorElement;

    if (activeLink) {
      trigger.textContent = activeLink.textContent;
    } else {
      // fallback
      trigger.textContent = this.openLabel;
    }
  }

  /*
   * Gestione dello scroll e della progressbar
   */
  private onScroll() {
    this.updateProgress();
    this.scrollHandler();
  }

  private scrollHandler() {
    const links = Array.from(this.navEl.querySelectorAll('a[href^="#"]'));
    const sections = links
      .map((link) => document.getElementById(link.getAttribute('href')!.slice(1)))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const scrollTop = this.scrollContainer?.scrollTop;
    const viewportHeight = this.scrollContainer.clientHeight;

    let currentSection: HTMLElement | null = null;

    for (const section of sections) {
      const sectionTop = section.offsetTop;

      // se la sezione supera il 25% del viewport del container
      console.log(
        { scrollTop, viewportHeight, sectionTop },
        'scrollTop + viewportHeight * 0.25 >= sectionTop=',
        scrollTop + viewportHeight * 0.25 >= sectionTop,
      );
      if (scrollTop + viewportHeight * 0.25 >= sectionTop) {
        currentSection = section;
      } else {
        break;
      }
    }

    if (currentSection) {
      const id = currentSection?.id;
      this.activeTarget = `#${id}`;
      this.setCurrent(this.activeTarget);
    }
  }

  private updateProgress() {
    if (!this.progressEl || !this.scrollContainer) return;

    const isDocumentScroll = this.scrollContainer === document.documentElement;
    const scrollTop = this.scrollContainerTop;
    const clientHeight = isDocumentScroll ? window.innerHeight : this.scrollContainer.clientHeight;
    const scrollHeight = isDocumentScroll ? document.documentElement.scrollHeight : this.scrollContainer.scrollHeight;

    const maxScrollable = Math.max(scrollHeight - clientHeight, 1);

    let percent = (scrollTop / maxScrollable) * 100;
    percent = Math.min(100, Math.max(0, percent));

    this.progressEl.setAttribute('aria-valuenow', percent.toFixed(0));
    this.progressEl.style.width = `${percent.toFixed(0)}%`;
  }

  /*
   * Gestione dello scroll alle sezioni
   */
  private attachLinkListeners() {
    const links = this.navEl.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const hash = link.getAttribute('href')!;
        const targetId = hash.slice(1);
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        this.activeTarget = `#${targetId}`;
        this.setCurrent(this.activeTarget);

        // scroll animato
        this.scrollToElement(targetEl, 700, 0, () => {
          // focus senza scroll jump
          targetEl.setAttribute('tabindex', '-1');
          targetEl.focus({ preventScroll: true });

          // aggiorna URL
          window.history.replaceState(null, '', `#${targetId}`);
          const announcer = document.getElementById('aria-navscroll-announcer');
          if (announcer) {
            announcer.textContent = `Sezione ${targetEl.textContent} selezionata`;
          }
        });

        // chiude il modal se siamo in modal mode
        if (this.mode === 'modal' && this.modalEl) {
          (this.modalEl as any).hide?.();
        }
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private scrollToElement(targetEl: HTMLElement, duration = 700, offset = 0, callback?: () => void) {
    const container = this.scrollContainer ?? null;

    const style = container ? getComputedStyle(container) : null;
    const overflowY = style?.overflowY;
    const isScrollableContainer = !!container && overflowY !== 'visible' && overflowY !== 'hidden';

    const startY = this.scrollContainerTop;

    // offset per posizionare la sezione al 25% della viewport
    const viewportHeight = isScrollableContainer ? this.scrollContainer.clientHeight : window.innerHeight;
    const sectionOffset = viewportHeight * 0.25 - 30;

    const targetOffset = startY - sectionOffset - offset;
    const targetY = isScrollableContainer
      ? (() => {
          const containerRect = container!.getBoundingClientRect();
          const targetRect = targetEl.getBoundingClientRect();
          return targetRect.top - containerRect.top + targetOffset;
        })()
      : targetEl.getBoundingClientRect().top + targetOffset;

    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = startY + distance * easeInOutSine(progress);

      if (isScrollableContainer) {
        container!.scrollTop = value;
      } else {
        window.scrollTo(0, value);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        callback?.();
      }
    };

    requestAnimationFrame(step);
  }

  render() {
    const positionClass = this.position === 'bottom' ? 'it-bottom-navscroll' : 'it-top-navscroll';
    let themeClass = '';
    switch (this.darkMode) {
      case 'mobile':
        themeClass = 'theme-dark-mobile';
        break;
      case 'desktop':
        themeClass = 'theme-dark-desk';
        break;
      case 'always':
        themeClass = 'theme-dark-mobile theme-dark-desk';
        break;
      default:
        themeClass = '';
    }
    let lineClass = '';
    switch (this.linePosition) {
      case 'left':
        lineClass = 'it-left-side';
        break;
      case 'right':
        lineClass = 'it-right-side';
        break;
      default:
        lineClass = '';
    }

    const wrapperClasses = ['it-navscroll-wrapper', 'navbar', positionClass, themeClass, lineClass].join(' ');

    return html`
      <div class="${wrapperClasses}">
        <div class="menu-wrapper" tabindex="-1"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-navscroll': ItNavscroll;
  }
}
