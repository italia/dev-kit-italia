import { BaseComponent, AriaKeyboardAccordionController } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import styles from './accordion.scss';
import { ItAccordionItem } from './it-accordion-item.js';

@customElement('it-accordion')
export class ItAccordion extends BaseComponent {
  static styles = styles;

  // Ref automatica agli elementi slottati
  @queryAssignedElements({ selector: 'it-accordion-item' })
  private accordionItems!: ItAccordionItem[];

  @property({ type: Boolean, reflect: true })
  multiple = false;

  @property({ type: Boolean, attribute: 'background-active', reflect: true })
  backgroundActive = false;

  @property({ type: Boolean, attribute: 'background-hover', reflect: true })
  backgroundHover = false;

  private _ariaNav = new AriaKeyboardAccordionController(this);

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    // Propaga le proprietà background ai figli quando cambiano
    if (changedProperties.has('backgroundActive') || changedProperties.has('backgroundHover')) {
      this.updateChildrenBackgroundProperties();
    }
  }

  private updateChildrenBackgroundProperties() {
    this.accordionItems.forEach((item) => {
      item.setParentBackground(this.backgroundActive, this.backgroundHover);
    });
  }

  connectedCallback() {
    super.connectedCallback?.();
    this.addEventListener('accordion-toggle', this._onToggleWrapper);
    this.addEventListener('keydown', this._onKeyDown as EventListener);
  }

  firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated?.(changedProperties);
    // Inizializza le proprietà background sui figli
    this.updateChildrenBackgroundProperties();
  }

  disconnectedCallback(): void {
    this.removeEventListener('accordion-toggle', this._onToggleWrapper);
    this.removeEventListener('keydown', this._onKeyDown as EventListener);
    super.disconnectedCallback?.();
  }

  private _onToggleWrapper = (e: Event) => {
    this._onToggle(e as CustomEvent);
  };

  // // eslint-disable-next-line class-methods-use-this
  // private toggleAccordion(panelRef: HTMLDivElement, triggerRef: HTMLElement) {
  //   const isOpen = panelRef.classList.toggle('show');
  //   triggerRef.setAttribute('aria-expanded', String(isOpen));
  // }

  private async _onToggle(e: CustomEvent) {
    const targetId = e.detail.id;

    // Wait for any ongoing animations to complete before processing new toggle
    const animatingItems = this.accordionItems.filter((item) => {
      const collapseElement = item.shadowRoot?.querySelector('it-collapse') as any;
      return collapseElement?.isAnimating;
    });

    if (animatingItems.length > 0) {
      return; // Skip if any animation is in progress
    }

    for (const item of this.accordionItems) {
      const collapseElement = item.shadowRoot?.querySelector('it-collapse') as any;
      const panelRef = item.shadowRoot?.querySelector<HTMLDivElement>('div.accordion-collapse');

      if (collapseElement && panelRef) {
        if (!this.multiple) {
          // Close all other panels if multiple is false
          if (panelRef.id !== targetId) {
            if (collapseElement.expanded) {
              item.setExpanded(false); // Chiudi gli altri pannelli
            }
          } else {
            // Toggle the clicked panel
            item.setExpanded(!item.isExpanded); // Toggle del pannello cliccato
          }
        } else if (this.multiple && panelRef.id === targetId) {
          // In multiple mode, just toggle the target panel
          item.setExpanded(!item.isExpanded); // Toggle del pannello target
        }
      }
    }
  }

  private _onKeyDown(e: KeyboardEvent) {
    // Recupera tutti i trigger degli accordion
    const triggers: HTMLElement[] = [];
    // Per ogni item, cerca il button nel suo shadow DOM
    for (const item of this.accordionItems) {
      const trigger = item.shadowRoot?.querySelector<HTMLElement>(':is(h2,h3,h4,h5,h6) it-button');
      if (trigger) triggers.push(trigger?.shadowRoot?.querySelector('button') as HTMLElement);
    }

    if (!triggers.length) return;

    this._ariaNav.setConfig({
      getItems: () => triggers,
      setActive: (idx: number) => {
        triggers[idx]?.focus();
      },
      toggle: (id) => {
        this.dispatchEvent(new CustomEvent('accordion-toggle', { bubbles: true, composed: true, detail: { id } }));
      },
    });
    this._ariaNav.handleKeyDown(e);
  }

  render() {
    const classes = [
      'accordion',
      this.backgroundActive && 'accordion-background-active',
      this.backgroundHover && 'accordion-background-hover',
    ]
      .filter(Boolean)
      .join(' ');

    return html`<div class="${classes}" id="${this._id}" part="accordion"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-accordion': ItAccordion;
  }
}
