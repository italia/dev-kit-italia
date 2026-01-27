import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { property, query, queryAssignedElements } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
import { html as staticHtml, unsafeStatic } from 'lit/static-html.js';
import { isKeyboardEvent, isMouseEvent, PressEvent } from './types.js';
import styles from './collapse.scss';

// Base class without @customElement decorator for inheritance
export class ItCollapseBase extends BaseComponent {
  static styles = styles;

  static override shadowRootOptions = {
    ...BaseComponent.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: String, reflect: true }) private variant = 'primary';

  @property({ type: String, reflect: true }) private size = '';

  @property({ type: Boolean, reflect: true }) private outline = false;

  @property({ type: Boolean, reflect: true })
  expanded = false;

  protected isAccordion: boolean = false;

  @property({ type: String, reflect: true })
  as: string = 'button';

  @property({ type: Boolean, attribute: 'default-open', reflect: true })
  defaultOpen = false;

  @query('.collapse-content')
  contentElement!: HTMLElement;

  @queryAssignedElements({ slot: 'trigger' })
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
  }

  private setInitialState() {
    if (this.contentElement) {
      if (this.expanded) {
        this.contentElement.style.height = 'auto';
        this.contentElement.style.display = 'block';
      } else {
        this.contentElement.style.height = '0px';
        this.contentElement.style.display = 'none';
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
    if (this.triggerElement) {
      if (
        this.triggerElement.tagName.toLowerCase() === 'button' ||
        this.triggerElement.getAttribute('role') === 'button'
      ) {
        const buttonElement = this.triggerElement as HTMLElement;
        buttonElement.id = this._triggerId;
        buttonElement.setAttribute('aria-expanded', String(this.expanded));
        buttonElement.setAttribute('aria-controls', this._contentId);
        buttonElement.addEventListener('click', this.handleTriggerAction.bind(this));
        buttonElement.addEventListener('keyup', this.handleTriggerAction.bind(this));
        if (!this.expanded) {
          buttonElement.classList.add('collapsed');
        } else {
          buttonElement.classList.remove('collapsed');
        }
      }
    }
    // Aggiorna anche gli stili e le icone di chi implementa questo metodo via estensione
    this.updateBackgroundStyles();
  }

  // eslint-disable-next-line class-methods-use-this
  protected updateBackgroundStyles() {}

  private performExpand() {
    if (!this.contentElement) return;

    this.cleanupAnimation();
    this.isAnimating = true;

    // Ensure overflow is hidden during animation
    this.contentElement.style.overflow = 'hidden';
    this.contentElement.style.display = 'block';
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
        this.contentElement.style.overflow = 'initial';
      })
      .catch(() => {
        // Animation cancelled
      })
      .finally(() => {
        this.cleanupAnimation();
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
        el.style.display = 'none';
        el.style.overflow = 'initial';
      })
      .catch(() => {
        // Animation cancelled
      })
      .finally(() => {
        this.cleanupAnimation();
      });
  }

  protected handleTriggerSlotChange = () => {
    // Aggiorna gli attributi ARIA quando il contenuto dello slot cambia
    this.updateAriaAttributes();
    // Forza un aggiornamento per il rendering, i getter sono stale altrimenti
    this.requestUpdate();
  };

  protected renderDefaultTrigger() {
    const buttonClasses = this.composeClass('btn', this.className, {
      collapsed: !this.expanded,
      [`btn-${this.variant}`]: !!this.variant && !this.outline,
      [`btn-outline-${this.variant}`]: !!this.variant && this.outline,
      [`btn-${this.size}`]: !!this.size,
    });
    const part = this.composeClass('button', 'focusable', {
      [this.variant]: this.variant?.length > 0,
      outline: this.outline,
    });
    const defaultButtonElement = html`<button
      type="button"
      part="${part}"
      variant="${this.variant}"
      class="${buttonClasses}"
      aria-expanded="${this.expanded}"
      aria-controls="${this._contentId}"
      id="${this._triggerId}"
      @click=${this.handleTriggerAction}
      @keyup=${this.handleTriggerAction}
    >
      <slot name="label"></slot>
    </button>`;

    if (!this.as || this.as === 'button') {
      return defaultButtonElement;
    }
    const tagName = this.isValidTag(this.as) ? this.as : 'button';
    const Tag = unsafeStatic(tagName);

    return html`${staticHtml`<${Tag} part="${part}" role="button" aria-expanded="${this.expanded}" aria-controls="${this._contentId}" id="${this._triggerId}"  @click=${this.handleTriggerAction}
      @keyup=${this.handleTriggerAction} tabindex="0" class="${buttonClasses}"><slot name="label"></slot></${Tag}>`}`;
  }

  protected hasSlottedTrigger(): boolean {
    return !!this.triggerElement;
  }

  // eslint-disable-next-line class-methods-use-this
  protected isValidTag(tag: string) {
    const safeTags = ['div', 'span', 'li', 'p', 'a', 'button'];
    return safeTags.includes(tag.toLowerCase());
  }

  render() {
    // Nota sull'estensione: quando passi this.renderDefaultTrigger come callback a when
    // la funzione viene chiamata senza contesto (this viene perso) — devi chiamare il metodo tramite closure
    // che mantiene il contesto, es. () => this.renderDefaultTrigger().
    const hasCustomTrigger = this.hasSlottedTrigger();
    const classPrefix = this.isAccordion ? 'accordion-' : 'collapse-';
    return html`
      <div class="${classPrefix}item" part="${classPrefix}item">
        <div class="collapse-wrapper">
          ${when(!hasCustomTrigger, () => this.renderDefaultTrigger())}
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange} part="trigger"></slot>
          <div
            class="collapse-content"
            part="content"
            role="region"
            aria-labelledby="${this._triggerId}"
            id="${this._contentId}"
          >
            <div class="${classPrefix}body">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
