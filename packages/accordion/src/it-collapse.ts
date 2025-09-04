import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { unsafeStatic } from 'lit/static-html.js';
import styles from './collapse.scss';
import { isKeyboardEvent, isMouseEvent, PressEvent } from './types.js';

@customElement('it-collapse')
export class ItCollapse extends BaseComponent {
  static styles = styles;

  static override shadowRootOptions = {
    ...BaseComponent.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property()
  label: string = '';

  @property()
  as: string = 'button';

  @property({ type: Boolean, attribute: 'default-open', reflect: true })
  defaultOpen = false;

  @query('.collapse-content')
  contentElement!: HTMLElement;

  @queryAssignedElements()
  private triggerElements!: HTMLElement[];

  get triggerElement(): HTMLElement | null {
    return this.triggerElements.length > 0 ? this.triggerElements[0] : null;
  }

  private isAnimating = false;

  private animation?: Animation;

  private readonly animationDuration = 350; // ms

  protected _triggerId = this.generateId('it-collapse-trigger');

  protected _contentId = this.generateId('it-collapse-content');

  override connectedCallback() {
    super.connectedCallback?.();
    // Initialize from default-open
    if (this.defaultOpen && !this.expanded) {
      this.expanded = this.defaultOpen;
    }
  }

  protected handleTriggerAction = (e: PressEvent) => {
    if (this.isAnimating) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    //   // Verifica se il click è sul trigger o suoi discendenti
    //   const triggerSlot = this.shadowRoot?.querySelector('slot[name="trigger"]') as HTMLSlotElement;
    //   const triggerElements = triggerSlot?.assignedElements() || [];

    // debugger;
    // if (!this.triggerElement?.contains(e.target as Node) || this.triggerElement === e.target) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   return;
    // }
    if (isKeyboardEvent(e) && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      this.toggle();
    } else if (isMouseEvent(e)) {
      e.preventDefault();
      this.toggle();
    }
  };

  async toggle() {
    // Blocca toggle durante animazione
    if (this.isAnimating) return;

    const nextValue = !this.expanded;
    this.expanded = nextValue;
    this.dispatchEvent(
      new CustomEvent('it-collapse-toggle', {
        detail: {
          expanded: this.expanded,
          id: this.contentElement?.id,
        },
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    // if (!this.isAnimating) {
    //   if (nextValue) {
    //     this.performExpand();
    //   } else {
    //     this.performCollapse();
    //   }
    // }
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
      const prev = changedProperties.get('expanded') as boolean | undefined;

      // React to expanded property changes
      if (!this.isAnimating && prev !== undefined && prev !== this.expanded) {
        if (this.expanded) {
          this.performExpand();
        } else {
          this.performCollapse();
        }
      }
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

    // // Se abbiamo un trigger slottato, cerca button nativi
    // const triggerSlot = this.shadowRoot?.querySelector('slot[name="trigger"]') as HTMLSlotElement;
    // const triggerElement = triggerSlot?.assignedElements()?.[0] as HTMLElement;

    if (this.triggerElement) {
      if (
        this.triggerElement.tagName.toLowerCase() === 'button' ||
        this.triggerElement.getAttribute('role') === 'button'
      ) {
        const buttonElement = this.triggerElement as HTMLElement;
        buttonElement.id = this._triggerId;
        buttonElement.setAttribute('aria-expanded', String(this.expanded));
        buttonElement.setAttribute('aria-controls', this._contentId);
      } else {
        // Cerca un button all'interno
        const nestedButton = this.triggerElement.querySelector('button, [role="button"]') as HTMLElement;
        if (nestedButton) {
          nestedButton.id = this._triggerId;
          nestedButton.setAttribute('aria-expanded', String(this.expanded));
          nestedButton.setAttribute('aria-controls', this._contentId);
        }
      }
    }
    // Aggiorna anche gli stili e le icone di chi implementa questo metodo via estensione
    this.updateBackgroundStyles();
    // Aggiorna il content - l'ID deve essere sull'elemento accordion-collapse
    // if (this.contentElement) {
    //   this.contentElement.id = this._contentId;
    //   this.contentElement.setAttribute('aria-labelledby', this._triggerId);
    // }
  }

  // eslint-disable-next-line class-methods-use-this
  protected updateBackgroundStyles() {}

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
        // this.dispatchEvent(
        //   new CustomEvent('it-collapse-toggle', {
        //     detail: {
        //       expanded: this.expanded,
        //       id: this.contentElement?.id,
        //     },
        //     bubbles: true,
        //     composed: true,
        //     cancelable: true,
        //   }),
        // );
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
        // this.dispatchEvent(
        //   new CustomEvent('it-collapse-toggle', {
        //     detail: {
        //       expanded: this.expanded,
        //       id: this.contentElement?.id,
        //     },
        //     bubbles: true,
        //     composed: true,
        //     cancelable: true,
        //   }),
        // );
      });
  }

  private _onTriggerSlotChange = () => {
    // Aggiorna gli attributi ARIA quando il contenuto dello slot cambia
    this.updateAriaAttributes();
  };

  protected renderDefaultTrigger() {
    if (!this.label) return null;

    const buttonClasses = [!this.expanded && 'collapsed'].filter(Boolean).join(' ');

    const defaultButtonElement = html`<button
      type="button"
      part="trigger"
      class="${buttonClasses}"
      aria-expanded="${this.expanded}"
      aria-controls="${this._contentId}"
      id="${this._triggerId}"
      @click=${this.handleTriggerAction}
      @keydown=${this.handleTriggerAction}
    >
      ${this.label}
    </button>`;

    if (this.as === 'button') {
      return defaultButtonElement;
    }
    const tagName = this.isValidTag(this.as) ? this.as : 'div';
    const Tag = unsafeStatic(tagName);
    // eslint-disable-next-line lit/binding-positions, lit/no-invalid-html
    return html`<${Tag} part="trigger" role="button"  aria-expanded="${this.expanded}" aria-controls="${this._contentId}" id="${this._triggerId}">${this.label}</${Tag}>`;
  }

  private hasSlottedTrigger(): boolean {
    return !!this.triggerElement;
  }

  // eslint-disable-next-line class-methods-use-this
  private isValidTag(tag: string) {
    return /^[a-z][a-z0-9-]*$/.test(tag); // semplice validazione
  }

  render() {
    // Nota sull'estensione: quando passi this.renderDefaultTrigger come callback a when
    // la funzione viene chiamata senza contesto (this viene perso) — devi chiamare il metodo tramite closure
    // che mantiene il contesto, es. () => this.renderDefaultTrigger().
    // console.log('render collapse', this.triggerElement);
    const hasCustomTrigger = this.hasSlottedTrigger();
    return html`
      <div class="accordion-item" part="accordion-item">
        <div class="collapse-wrapper">
          ${when(!hasCustomTrigger && this.label, () => this.renderDefaultTrigger())}
          <slot name="trigger" @slotchange=${this._onTriggerSlotChange} part="trigger"></slot>
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
