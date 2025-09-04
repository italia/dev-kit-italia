import { BaseComponent, AriaKeyboardAccordionController } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import type { ItAccordionItem } from './it-accordion-item.js';
import type { AccordionMode } from './types.js';
import styles from './accordion.scss';
import { ItCollapse } from './it-collapse.js';

@customElement('it-accordion')
export class ItAccordion extends BaseComponent {
  static styles = styles;

  // Ref automatica agli elementi slottati
  @queryAssignedElements({ selector: 'it-accordion-item' })
  private accordionItems!: ItAccordionItem[];

  @property({ type: String, reflect: true })
  mode: AccordionMode = 'multiple';

  @property({ type: Boolean, attribute: 'background-active', reflect: true })
  backgroundActive = false;

  @property({ type: Boolean, attribute: 'background-hover', reflect: true })
  backgroundHover = false;

  @property({ type: Boolean, attribute: 'left-icon', reflect: true })
  leftIcon = false;

  private _ariaNav = new AriaKeyboardAccordionController(this);

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    // super.updated?.(changedProperties);
    console.log('ItAccordion updated called with', changedProperties.get('mode'), this.mode);
    // Propaga le proprietà ai figli quando cambiano
    if (
      changedProperties.has('backgroundActive') ||
      changedProperties.has('backgroundHover') ||
      changedProperties.has('leftIcon')
    ) {
      this.updateChildrenProperties();
    }
    if (changedProperties.has('mode') && this.mode === 'single') {
      if (this.accordionItems.length) {
        this.accordionItems.forEach((item) => {
          if (item.defaultOpen) {
            // eslint-disable-next-line no-param-reassign
            item.expanded = true;
          } else {
            // eslint-disable-next-line no-param-reassign
            item.expanded = false;
          }
        });
      }
    }
  }

  private updateChildrenProperties() {
    this.accordionItems.forEach((item) => {
      if (this.backgroundActive) {
        item.setAttribute('background-active', '');
      } else {
        item.removeAttribute('background-active');
      }

      if (this.backgroundHover) {
        item.setAttribute('background-hover', '');
      } else {
        item.removeAttribute('background-hover');
      }

      if (this.leftIcon) {
        item.setAttribute('left-icon', '');
      } else {
        item.removeAttribute('left-icon');
      }
    });
  }

  connectedCallback() {
    super.connectedCallback?.();
    // this.addEventListener('collapse-toggle', this._onCollapseToggle);
    this.addEventListener('keydown', this._onKeyDown as EventListener);
  }

  override firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated?.(changedProperties);
    // Inizializza le proprietà sui figli
    this.updateChildrenProperties();
  }

  override disconnectedCallback(): void {
    // this.removeEventListener('collapse-toggle', this._onCollapseToggle);
    this.removeEventListener('keydown', this._onKeyDown as EventListener);
    super.disconnectedCallback?.();
  }

  private _onCollapseToggle = (e: Event) => {
    const customEvent = e as CustomEvent;
    const { expanded } = customEvent.detail;
    // debugger;
    // Se è in single mode e sta per essere espanso, chiudi tutti gli altri
    if (this.mode === 'single' && expanded) {
      for (const item of this.accordionItems) {
        if (item !== customEvent.target) {
          item.expanded = false;
        }
      }
    }
  };

  private _onSlotChange = () => {
    // Quando cambiano i children, aggiorna tutte le proprietà
    this.updateChildrenProperties();
  };

  private _onKeyDown(e: KeyboardEvent) {
    // Recupera tutti i trigger degli accordion
    const triggers: HTMLElement[] = [];
    // Per ogni item, cerca il button nel suo shadow DOM
    for (const item of this.accordionItems) {
      const trigger = item.shadowRoot?.querySelector<HTMLElement>('button');
      if (trigger) triggers.push(trigger);
    }
    if (!triggers.length) return;

    this._ariaNav.setConfig({
      getItems: () => triggers,
      setActive: (idx: number) => {
        triggers[idx]?.focus();
      },
    });
    this._ariaNav.handleKeyDown(e);
  }

  render() {
    const classes = [
      'accordion',
      this.backgroundActive && 'accordion-background-active',
      this.backgroundHover && 'accordion-background-hover',
      this.leftIcon && 'accordion-left-icon',
    ]
      .filter(Boolean)
      .join(' ');

    return html`<div class="${classes}" id="${this._id}" part="accordion">
      <slot @slotchange="${this._onSlotChange}" @it-collapse-toggle="${this._onCollapseToggle}"></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-accordion': ItAccordion;
  }
}
