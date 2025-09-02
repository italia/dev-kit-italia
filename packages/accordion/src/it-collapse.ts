import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import type { ItButton } from '@italia/button';
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

  private animation?: Animation;

  private readonly animationDuration = 350; // ms

  private _triggerId = this.generateId('it-collapse-trigger');

  private _contentId = this.generateId('it-collapse-content');

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

  // firstUpdated() {
  //   this.updateAriaAttributes();
  //   // Set initial state
  //   if (this.expanded) {
  //     this.contentElement.style.height = 'auto';
  //   } else {
  //     this.contentElement.style.height = '0px';
  //   }
  // }

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    // super.updated?.(changedProperties);
    if (changedProperties.has('expanded')) {
      this.updateAriaAttributes();
      try {
        // React to expanded property changes
        if (!this.isAnimating) {
          if (this.expanded) {
            this.performExpand();
          } else {
            this.performCollapse();
          }
        }
      } catch (error) {
        // Catch abort animation
      }
    }
  }

  private updateAriaAttributes() {
    // Use querySelector to find trigger in slotted content
    const triggerSlot = this.shadowRoot?.querySelector('slot[name="trigger"]') as HTMLSlotElement;
    const triggerElement = triggerSlot?.assignedElements()?.[0] as HTMLElement;

    if (triggerElement) {
      // Find the actual button element within the trigger
      // let buttonElement: HTMLElement | ItButton | null = null;

      if (triggerElement.tagName.toLowerCase() === 'it-button') {
        // For it-button components, use the it-aria-expanded property
        const itBtn = triggerElement as ItButton;
        itBtn.expanded = this.expanded;
        itBtn.setAttribute('it-aria-controls', this._contentId);

        // Safely get the inner native button and set its id if present
        const innerButton = itBtn.shadowRoot?.querySelector('button') as HTMLButtonElement | null;
        if (innerButton) innerButton.id = this._triggerId;
      } else if (
        triggerElement.tagName.toLowerCase() === 'button' ||
        triggerElement.getAttribute('role') === 'button'
      ) {
        // For native buttons or elements with button role
        const buttonElement = triggerElement as HTMLElement;
        buttonElement.id = this._triggerId;
        buttonElement.setAttribute('aria-expanded', String(this.expanded));
        buttonElement.setAttribute('aria-controls', this._contentId);
        // buttonElement = triggerElement;
      } else {
        // Look for a button inside the trigger element
        const nestedButton = triggerElement.querySelector('it-button, button, [role="button"]') as HTMLElement;
        if (nestedButton) {
          if (nestedButton.tagName.toLowerCase() === 'it-button') {
            const itBtn = nestedButton as ItButton;
            itBtn.expanded = this.expanded;
            itBtn.setAttribute('it-aria-controls', this._contentId);

            // Safely get the inner native button and set its id if present
            const innerButton = itBtn.shadowRoot?.querySelector('button') as HTMLButtonElement | null;
            if (innerButton) innerButton.id = this._triggerId;
          } else {
            nestedButton.setAttribute('aria-expanded', String(this.expanded));
            nestedButton.setAttribute('aria-controls', this._contentId);
          }
        }
      }
    }
    if (this.contentElement) {
      console.log(this.contentElement);
      this.contentElement.id = this._contentId;
      this.contentElement.setAttribute('aria-labelledby', this._triggerId);
      console.log(this.contentElement);
    }
  }

  private performExpand() {
    if (!this.contentElement) return;
    if (this.animation) {
      try {
        this.animation.cancel();
      } catch {
        /* ignore */
      }
      this.animation = undefined;
    }
    this.isAnimating = true;

    this.contentElement.style.visibility = 'visible';
    const startHeight = this.contentElement.offsetHeight;
    const endHeight = this.contentElement.scrollHeight;
    const duration = this.prefersReducedMotion ? 0 : this.animationDuration;
    this.animation = this.contentElement.animate([{ height: `${startHeight}px` }, { height: `${endHeight}px` }], {
      duration,
      easing: 'ease',
    });
    this.animation.finished.then(() => {
      this.contentElement.style.height = 'auto';
      this.animation = undefined;
      this.isAnimating = false;
    });

    // if (this.isAnimating) return;
    // this.isAnimating = true;
    // // Get the natural height
    // this.contentElement.style.height = 'auto';
    // const targetHeight = this.contentElement.scrollHeight;
    // this.contentElement.style.height = '0px';
    // // Force reflow with layout thrashing (or forced synchronous reflow)
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const _reflow = this.contentElement.offsetHeight;
    // // Start animation
    // this.contentElement.style.height = `${targetHeight}px`;
    // // Wait for animation to complete
    // await new Promise<void>((resolve) => {
    //   const onTransitionEnd = (e: TransitionEvent) => {
    //     if (e.target === this.contentElement && e.propertyName === 'height') {
    //       this.contentElement.removeEventListener('transitionend', onTransitionEnd);
    //       this.contentElement.style.height = 'auto';
    //       this.isAnimating = false;
    //       resolve();
    //     }
    //   };
    //   this.contentElement.addEventListener('transitionend', onTransitionEnd);
    //   // Fallback timeout
    //   setTimeout(() => {
    //     this.contentElement.removeEventListener('transitionend', onTransitionEnd);
    //     this.contentElement.style.height = 'auto';
    //     this.isAnimating = false;
    //     resolve();
    //   }, 100);
    // });
  }

  private performCollapse() {
    // if (this.isAnimating) return;

    // this.isAnimating = true;

    // // Get current height
    // const currentHeight = this.contentElement.scrollHeight;
    // this.contentElement.style.height = `${currentHeight}px`;

    // // Force reflow with layout thrashing (or forced synchronous reflow)
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const _reflow2 = this.contentElement.offsetHeight;

    // // Start animation
    // this.contentElement.style.height = '0px';

    // // Wait for animation to complete
    // await new Promise<void>((resolve) => {
    //   const onTransitionEnd = (e: TransitionEvent) => {
    //     if (e.target === this.contentElement && e.propertyName === 'height') {
    //       this.contentElement.removeEventListener('transitionend', onTransitionEnd);
    //       this.isAnimating = false;
    //       resolve();
    //     }
    //   };
    //   this.contentElement.addEventListener('transitionend', onTransitionEnd);

    //   // // Fallback timeout
    //   setTimeout(() => {
    //     this.contentElement.removeEventListener('transitionend', onTransitionEnd);
    //     this.isAnimating = false;
    //     resolve();
    //   }, 100);
    // });
    if (!this.contentElement) return;
    if (this.animation) {
      try {
        this.animation.cancel();
      } catch {
        /* ignore */
      }
      this.animation = undefined;
    }
    this.isAnimating = true;
    const el = this.contentElement;
    const startHeight = el.scrollHeight; // parte dall’altezza piena
    const endHeight = 0;

    const duration = this.prefersReducedMotion ? 0 : this.animationDuration;

    el.style.height = `${startHeight}px`;

    this.animation = el.animate([{ height: `${startHeight}px` }, { height: `${endHeight}px` }], {
      duration,
      easing: 'ease',
    });

    this.animation.finished.then(() => {
      el.style.height = '0px';
      el.style.visibility = 'hidden';
      this.animation = undefined;
      this.isAnimating = false;
    });
  }

  private _onSlotChange = () => {
    // Aggiorna gli attributi ARIA quando il contenuto dello slot cambia
    this.updateAriaAttributes();
  };

  render() {
    return html`
      <div class="collapse-wrapper">
        <slot name="trigger" @slotchanged=${this._onSlotChange}></slot>
        <div class="collapse-content">
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
