import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import styles from './collapse.scss';

@customElement('it-collapse')
export class ItCollapse extends BaseComponent {
  static styles = styles;

  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property()
  label: string = '';

  @property()
  as: string = 'h2';

  @property({ type: Boolean, attribute: 'left-icon' })
  leftIcon = false;

  @property({ type: Boolean, attribute: 'background-active' })
  backgroundActive = false;

  @property({ type: Boolean, attribute: 'background-hover' })
  backgroundHover = false;

  @property({ type: Boolean, attribute: 'default-open' })
  defaultOpen = false;

  @query('.collapse-content')
  private contentElement!: HTMLElement;

  @query('[slot="trigger"]')
  private triggerElement!: HTMLElement;

  private isAnimating = false;

  private isInitialized = false;

  private animation?: Animation;

  private readonly animationDuration = 350; // ms

  private _triggerId = this.generateId('it-collapse-trigger');

  private _contentId = this.generateId('it-collapse-content');

  override connectedCallback() {
    super.connectedCallback?.();
    // Initialize from default-open
    if (this.defaultOpen && !this.expanded) {
      this.expanded = this.defaultOpen;
    }
  }

  // private handleClick = (e: Event) => {
  //   // Verifica se il click è sul trigger o suoi discendenti
  //   const triggerSlot = this.shadowRoot?.querySelector('slot[name="trigger"]') as HTMLSlotElement;
  //   const triggerElements = triggerSlot?.assignedElements() || [];

  //   if (triggerElements.some((el) => el.contains(e.target as Node) || el === e.target)) {
  //     e.preventDefault();
  //     this.toggle();
  //   }
  // };
  private handleClick = (e: Event) => {
    // Blocca i click durante l'animazione
    if (this.isAnimating) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    e.preventDefault();
    this.toggle();
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    // Handle Enter and Space keys for accessibility
    if (e.key === 'Enter' || e.key === ' ') {
      // Blocca i keydown durante l'animazione
      if (this.isAnimating) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      this.toggle();
    }
  };

  async toggle() {
    // Blocca toggle durante animazione
    if (this.isAnimating) return;

    const nextValue = !this.expanded;
    this.expanded = nextValue;
    if (!this.isAnimating) {
      if (nextValue) {
        this.performExpand();
      } else {
        this.performCollapse();
      }
    }
    // L'evento verrà sparato alla fine dell'animazione
  }

  private setInitialState() {
    if (this.contentElement) {
      // this.contentElement.style.overflow = 'hidden';
      // this.contentElement.style.height = '0';
      if (this.expanded) {
        this.contentElement.style.height = 'auto';
        this.contentElement.style.visibility = 'visible';
      } else {
        this.contentElement.style.height = '0px';
        this.contentElement.style.visibility = 'hidden';
      }
    }
  }

  private cleanupAnimation() {
    if (this.animation) {
      try {
        this.animation.cancel();
      } catch {
        /* ignore */
      }
      this.animation = undefined;
    }
    this.isAnimating = false;
  }

  override firstUpdated() {
    this.updateAriaAttributes();
    // Set initial state and ensure overflow is hidden
    this.setInitialState();
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('defaultOpen')) {
      if (this.defaultOpen && !this.expanded) {
        this.expanded = this.defaultOpen;
      }
    }

    if (changedProperties.has('expanded')) {
      this.updateAriaAttributes();
      this.updateBackgroundStyles();

      // React to expanded property changes
      // if (!this.isAnimating) {
      //   if (this.expanded) {
      //     this.performExpand();
      //   } else {
      //     this.performCollapse();
      //   }
      // }
    }

    // Se cambiano le proprietà di background, aggiorna gli stili
    if (
      changedProperties.has('backgroundActive') ||
      changedProperties.has('backgroundHover') ||
      changedProperties.has('leftIcon')
    ) {
      this.updateBackgroundStyles();
    }
  }

  private updateAriaAttributes() {
    // Se abbiamo il trigger di default, aggiorna quello
    const defaultButton = this.shadowRoot?.querySelector('.accordion-button') as HTMLButtonElement;
    if (defaultButton) {
      defaultButton.setAttribute('aria-expanded', String(this.expanded));
      defaultButton.setAttribute('aria-controls', this._contentId);
      defaultButton.id = this._triggerId;
    }

    // Aggiorna anche gli stili e le icone
    this.updateBackgroundStyles();

    // // Se abbiamo un trigger slottato, cerca button nativi
    const triggerSlot = this.shadowRoot?.querySelector('slot[name="trigger"]') as HTMLSlotElement;
    const triggerElement = triggerSlot?.assignedElements()?.[0] as HTMLElement;

    if (triggerElement) {
      if (triggerElement.tagName.toLowerCase() === 'button' || triggerElement.getAttribute('role') === 'button') {
        const buttonElement = triggerElement as HTMLElement;
        buttonElement.id = this._triggerId;
        buttonElement.setAttribute('aria-expanded', String(this.expanded));
        buttonElement.setAttribute('aria-controls', this._contentId);
      } else {
        // Cerca un button all'interno
        const nestedButton = triggerElement.querySelector('button, [role="button"]') as HTMLElement;
        if (nestedButton) {
          nestedButton.id = this._triggerId;
          nestedButton.setAttribute('aria-expanded', String(this.expanded));
          nestedButton.setAttribute('aria-controls', this._contentId);
        }
      }
    }

    // Aggiorna il content - l'ID deve essere sull'elemento accordion-collapse
    // if (this.contentElement) {
    //   this.contentElement.id = this._contentId;
    //   this.contentElement.setAttribute('aria-labelledby', this._triggerId);
    // }
  }

  private updateBackgroundStyles() {
    // Aggiorna CSS custom properties per background
    const button = this.shadowRoot?.querySelector('.accordion-button') as HTMLElement;
    if (button) {
      if (this.backgroundActive && this.expanded) {
        button.style.setProperty('--accordion-button-bg', 'var(--bs-primary)');
        button.style.setProperty('--accordion-button-color', 'white');
      } else {
        button.style.removeProperty('--accordion-button-bg');
        button.style.removeProperty('--accordion-button-color');
      }

      if (this.backgroundHover) {
        button.style.setProperty('--accordion-button-hover-bg', 'var(--bs-primary-lighter)');
      } else {
        button.style.removeProperty('--accordion-button-hover-bg');
      }
    }

    // Aggiorna l'icona left se necessario
    if (this.leftIcon) {
      const iconElement = this.shadowRoot?.querySelector('.accordion-icon-left') as HTMLElement;
      if (iconElement) {
        const iconName = this.expanded ? 'it-minus' : 'it-plus';
        iconElement.setAttribute('name', iconName);

        if (this.backgroundActive && this.expanded) {
          iconElement.setAttribute('color', 'white');
        } else {
          iconElement.setAttribute('color', 'primary');
        }
      }
    }

    // Aggiorna l'icona normale (chevron)
    const normalIcon = this.shadowRoot?.querySelector('.accordion-icon') as HTMLElement;
    if (normalIcon) {
      if (this.expanded) {
        normalIcon.classList.add('expanded');
      } else {
        normalIcon.classList.remove('expanded');
      }

      if (this.backgroundActive && this.expanded) {
        normalIcon.setAttribute('color', 'white');
      } else {
        normalIcon.setAttribute('color', 'primary');
      }
    }
  }

  private performExpand() {
    if (!this.contentElement) return;

    this.cleanupAnimation();
    this.isAnimating = true;

    // Ensure overflow is hidden during animation
    this.contentElement.style.overflow = 'hidden';
    this.contentElement.style.visibility = 'visible';
    const startHeight = this.contentElement.offsetHeight;
    const endHeight = this.contentElement.scrollHeight;
    const duration = this.prefersReducedMotion ? 0 : this.animationDuration;

    this.animation = this.contentElement.animate([{ height: `${startHeight}px` }, { height: `${endHeight}px` }], {
      duration,
      easing: 'ease',
    });

    this.animation.finished
      .then(() => {
        this.contentElement.style.height = 'auto';
        // Keep overflow hidden as per CSS
        this.contentElement.style.overflow = 'hidden';
      })
      .catch(() => {
        // Animation cancelled
      })
      .finally(() => {
        this.cleanupAnimation();

        // SPARA L'EVENTO SOLO DOPO CHE L'ANIMAZIONE È FINITA
        this.dispatchEvent(
          new CustomEvent('collapse-toggle', {
            detail: {
              expanded: this.expanded,
              id: this.contentElement?.id,
            },
            bubbles: true,
            composed: true,
          }),
        );
      });
  }

  private performCollapse() {
    if (!this.contentElement) return;

    this.cleanupAnimation();
    this.isAnimating = true;

    const el = this.contentElement;
    // Ensure overflow is hidden during animation
    el.style.overflow = 'hidden';
    const startHeight = el.scrollHeight;
    const endHeight = 0;
    const duration = this.prefersReducedMotion ? 0 : this.animationDuration;

    el.style.height = `${startHeight}px`;

    this.animation = el.animate([{ height: `${startHeight}px` }, { height: `${endHeight}px` }], {
      duration,
      easing: 'ease',
    });

    this.animation.finished
      .then(() => {
        el.style.height = '0px';
        el.style.visibility = 'hidden';
        el.style.overflow = 'hidden';
      })
      .catch(() => {
        // Animation cancelled
      })
      .finally(() => {
        this.cleanupAnimation();

        // SPARA L'EVENTO SOLO DOPO CHE L'ANIMAZIONE È FINITA
        this.dispatchEvent(
          new CustomEvent('collapse-toggle', {
            detail: {
              expanded: this.expanded,
              id: this.contentElement?.id,
            },
            bubbles: true,
            composed: true,
          }),
        );
      });
  }

  private _onTriggerSlotChange = () => {
    // Aggiorna gli attributi ARIA quando il contenuto dello slot cambia
    this.updateAriaAttributes();
  };

  private renderDefaultTrigger() {
    if (!this.label) return null;

    const buttonClasses = ['accordion-button', !this.expanded && 'collapsed'].filter(Boolean).join(' ');

    // Scegli l'icona in base al tipo e allo stato
    let iconContent = null;
    if (this.leftIcon) {
      const iconName = this.expanded ? 'it-minus' : 'it-plus';
      iconContent = html`<it-icon size="sm" name="${iconName}" class="accordion-icon-left" color="primary"></it-icon>`;
    } else {
      // Icona di default sulla destra (chevron)
      iconContent = html`<it-icon
        size="sm"
        name="it-expand"
        class="accordion-icon ${this.expanded ? 'expanded' : ''}"
        color="primary"
      ></it-icon>`;
    }

    const buttonContent = this.leftIcon
      ? html`${iconContent}<span>${this.label}</span>`
      : html`<span>${this.label}</span>${iconContent}`;

    const buttonElement = html`<button
      type="button"
      class="${buttonClasses}"
      aria-expanded="${this.expanded}"
      aria-controls="${this._contentId}"
      id="${this._triggerId}"
      @click=${this.handleClick}
      @keydown=${this.handleKeyDown}
    >
      ${buttonContent}
    </button>`;

    switch (this.as) {
      case 'h3':
        return html`<h3 class="accordion-header">${buttonElement}</h3>`;
      case 'h4':
        return html`<h4 class="accordion-header">${buttonElement}</h4>`;
      case 'h5':
        return html`<h5 class="accordion-header">${buttonElement}</h5>`;
      case 'h6':
        return html`<h6 class="accordion-header">${buttonElement}</h6>`;
      default:
        return html`<h2 class="accordion-header">${buttonElement}</h2>`;
    }
  }

  private hasSlottedTrigger(): boolean {
    const triggerSlot = this.shadowRoot?.querySelector('slot[name="trigger"]') as HTMLSlotElement;
    const assignedElements = triggerSlot?.assignedElements() || [];
    return assignedElements.length > 0;
  }

  render() {
    const hasCustomTrigger = this.hasSlottedTrigger();
    return html`
      <div class="accordion-item" part="accordion-item">
        <div class="collapse-wrapper">
          ${when(!hasCustomTrigger && this.label, () => this.renderDefaultTrigger())}
          <slot name="trigger" @slotchange=${this._onTriggerSlotChange}></slot>
          <div
            class="collapse-content"
            part="content"
            role="region"
            aria-labelledby="${this._triggerId}"
            id="${this._contentId}"
          >
            <div class="accordion-body">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-collapse': ItCollapse;
  }
}
