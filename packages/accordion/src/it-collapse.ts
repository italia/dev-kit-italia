import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import styles from './collapse.scss';

@customElement('it-collapse')
export class ItCollapse extends BaseComponent {
  static styles = styles;

  @property({ type: Boolean, reflect: true })
  expanded = false;

  @query('.collapse-content')
  private contentElement!: HTMLElement;

  @query('[slot="trigger"]')
  private triggerElement!: HTMLElement;

  private isAnimating = false;

  connectedCallback() {
    super.connectedCallback?.();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
    super.disconnectedCallback?.();
  }

  private handleClick = (e: Event) => {
    // Verifica se il click è sul trigger o suoi discendenti
    const triggerSlot = this.shadowRoot?.querySelector('slot[name="trigger"]') as HTMLSlotElement;
    const triggerElements = triggerSlot?.assignedElements() || [];

    if (triggerElements.some((el) => el.contains(e.target as Node) || el === e.target)) {
      e.preventDefault();
      this.toggle();
    }
  };

  async toggle() {
    this.expanded = !this.expanded;

    // Emetti evento per notificare l'accordion parent
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
  }

  firstUpdated() {
    this.updateAriaAttributes();
    // Set initial state
    if (this.expanded) {
      this.contentElement.style.height = 'auto';
    } else {
      this.contentElement.style.height = '0px';
    }
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);
    if (changedProperties.has('expanded')) {
      this.updateAriaAttributes();
      // React to expanded property changes
      if (this.expanded && !this.isAnimating) {
        this.performExpand();
      } else if (!this.expanded && !this.isAnimating) {
        this.performCollapse();
      }
    }
  }

  private updateAriaAttributes() {
    // Use querySelector to find trigger in slotted content
    const triggerSlot = this.shadowRoot?.querySelector('slot[name="trigger"]') as HTMLSlotElement;
    const triggerElement = triggerSlot?.assignedElements()?.[0] as HTMLElement;

    if (triggerElement) {
      // Find the actual button element within the trigger
      let buttonElement: HTMLElement | null = null;

      if (triggerElement.tagName.toLowerCase() === 'it-button') {
        // For it-button components, use the it-aria-expanded property
        (triggerElement as any).expanded = this.expanded;
        buttonElement = triggerElement;
      } else if (
        triggerElement.tagName.toLowerCase() === 'button' ||
        triggerElement.getAttribute('role') === 'button'
      ) {
        // For native buttons or elements with button role
        triggerElement.setAttribute('aria-expanded', String(this.expanded));
        buttonElement = triggerElement;
      } else {
        // Look for a button inside the trigger element
        const nestedButton = triggerElement.querySelector('it-button, button, [role="button"]') as HTMLElement;
        if (nestedButton) {
          if (nestedButton.tagName.toLowerCase() === 'it-button') {
            (nestedButton as any).expanded = this.expanded;
          } else {
            nestedButton.setAttribute('aria-expanded', String(this.expanded));
          }
          buttonElement = nestedButton;
        }
      }

      // Set aria-controls if content element has ID
      if (buttonElement && this.contentElement?.id) {
        if (buttonElement.tagName.toLowerCase() === 'it-button') {
          // For it-button, set aria-controls on the component
          buttonElement.setAttribute('it-aria-controls', this.contentElement.id);
        } else {
          buttonElement.setAttribute('aria-controls', this.contentElement.id);
        }
      }
    }
  }

  private async performExpand(): Promise<void> {
    if (this.isAnimating) return;

    this.isAnimating = true;

    // Get the natural height
    this.contentElement.style.height = 'auto';
    const targetHeight = this.contentElement.scrollHeight;
    this.contentElement.style.height = '0px';

    // Force reflow and add a small delay for smoother animation
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _reflow = this.contentElement.offsetHeight;
    
    // Piccolo delay per permettere al browser di processare il cambio height
    await new Promise<void>(resolve => {
      setTimeout(() => resolve(), 16); // ~1 frame @ 60fps
    });

    // Start animation
    this.contentElement.style.height = `${targetHeight}px`;

    // Wait for animation to complete
    await new Promise<void>((resolve) => {
      const onTransitionEnd = (e: TransitionEvent) => {
        if (e.target === this.contentElement && e.propertyName === 'height') {
          this.contentElement.removeEventListener('transitionend', onTransitionEnd);
          this.contentElement.style.height = 'auto';
          this.isAnimating = false;
          resolve();
        }
      };
      this.contentElement.addEventListener('transitionend', onTransitionEnd);

      // Fallback timeout - aumentiamo per permettere all'animazione CSS di completarsi
      setTimeout(() => {
        this.contentElement.removeEventListener('transitionend', onTransitionEnd);
        this.contentElement.style.height = 'auto';
        this.isAnimating = false;
        resolve();
      }, 500); // Aumentato da 100ms a 500ms per sicurezza
    });
  }

  private async performCollapse(): Promise<void> {
    if (this.isAnimating) return;

    this.isAnimating = true;

    // Get current height
    const currentHeight = this.contentElement.scrollHeight;
    this.contentElement.style.height = `${currentHeight}px`;

    // Force reflow with layout thrashing (or forced synchronous reflow)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _reflow2 = this.contentElement.offsetHeight;

    // Start animation
    this.contentElement.style.height = '0px';

    // Wait for animation to complete
    await new Promise<void>((resolve) => {
      const onTransitionEnd = (e: TransitionEvent) => {
        if (e.target === this.contentElement && e.propertyName === 'height') {
          this.contentElement.removeEventListener('transitionend', onTransitionEnd);
          this.isAnimating = false;
          resolve();
        }
      };
      this.contentElement.addEventListener('transitionend', onTransitionEnd);

      // Fallback timeout - aumentiamo per permettere all'animazione CSS di completarsi  
      setTimeout(() => {
        this.contentElement.removeEventListener('transitionend', onTransitionEnd);
        this.isAnimating = false;
        resolve();
      }, 500); // Aumentato da 100ms a 500ms per consistency
    });
  }

  async expand(): Promise<void> {
    if (this.expanded || this.isAnimating) return;
    this.expanded = true;
    // The actual animation will be triggered by the updated() lifecycle
  }

  async collapse(): Promise<void> {
    if (!this.expanded || this.isAnimating) return;
    this.expanded = false;
    // The actual animation will be triggered by the updated() lifecycle
  }

  render() {
    const contentId = `${this._id}-content`;

    return html`
      <div class="collapse-wrapper">
        <slot name="trigger"></slot>
        <div class="collapse-content" id="${contentId}">
          <slot name="content"></slot>
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
