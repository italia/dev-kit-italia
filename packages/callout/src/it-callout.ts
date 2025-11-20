import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { when } from 'lit/directives/when.js';
import { type CalloutVariant } from './types.js';
import styles from './callout.scss';

@customElement('it-callout')
export class ItCallout extends BaseComponent {
  static styles = styles;

  @property({ type: String, reflect: true }) variant: CalloutVariant = '';

  @property({ type: Boolean, reflect: true }) highlight = false;

  @property({ type: Boolean, reflect: true, attribute: 'big-text' }) bigText = false;

  @query('slot[name="title"]') private _titleSlot!: HTMLSlotElement;

  @query('slot[name="icon"]') private _iconSlot!: HTMLSlotElement;

  @query('slot[name="more-content"]') private _moreContentSlot!: HTMLSlotElement;

  private updateParagraphsSize() {
    if (!this.shadowRoot) return;
    const slot = this.shadowRoot.querySelector('slot:not([name])') as HTMLSlotElement;
    if (!slot) return;
    const assigned = slot.assignedElements({ flatten: true });
    assigned.forEach((el) => {
      if (el.tagName?.toLowerCase() === 'p') {
        if (this.bigText) {
          el.classList.add('callout-big-text');
        } else {
          el.classList.remove('callout-big-text');
        }
      }
    });
  }

  private getCalloutClasses() {
    return classMap({
      callout: true,
      [`callout-${this.variant}`]: !!this.variant,
      'callout-highlight': this.highlight,
      // 'callout-more' non più usato
    });
  }

  private onIconSlotChange = () => {
    // Usa requestAnimationFrame per dare tempo al DOM di stabilizzarsi
    requestAnimationFrame(() => {
      this.updateIconColors();
    });
  };

  private updateIconColors() {
    if (!this._iconSlot || !this.variant) return;

    const assignedIcons = this._iconSlot.assignedElements();
    assignedIcons.forEach((icon: Element) => {
      if (icon instanceof HTMLElement && icon.tagName?.toLowerCase() === 'it-icon') {
        icon.setAttribute('color', this.variant);
      }
    });
  }

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated(changedProperties);
    // Se cambia la variante, aggiorna i colori delle icone
    if (changedProperties.has('variant')) {
      this.updateIconColors();
    }
    // Aggiorna la dimensione dei <p> nel default slot se cambia bigText o slot
    if (changedProperties.has('bigText')) {
      this.updateParagraphsSize();
    }
    // Aggiorna sempre dopo ogni update (slotchange non sempre triggera updated)
    this.updateParagraphsSize();
  }

  override firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated(changedProperties);
    // Aggiorna i colori delle icone al primo render
    this.updateIconColors();
    // Aggiorna la dimensione dei <p> al primo render
    this.updateParagraphsSize();
    // Aggiorna anche su slotchange
    const slot = this.shadowRoot?.querySelector('slot:not([name])') as HTMLSlotElement;
    if (slot) {
      slot.addEventListener('slotchange', () => this.updateParagraphsSize());
    }
  }

  private renderTitle() {
    return html`
      <div class="callout-title" part="title">
        <slot name="icon" @slotchange="${this.onIconSlotChange}"></slot>
        <span class="text">
          <slot name="title"></slot>
        </span>
      </div>
    `;
  }

  private renderInner() {
    return html` <div class="callout-inner" part="inner">${this.renderTitle()} <slot></slot></div> `;
  }

  private renderHighlightContent() {
    return html`
      ${this.renderTitle()}
      <slot></slot>
      <div class="callout-more-content" part="more-content">
        <slot name="more-content"></slot>
      </div>
    `;
  }

  render() {
    return html`
      <div class="${this.getCalloutClasses()}" part="callout">
        ${when(
          !this.highlight,
          () => html`
            ${this.renderInner()}
            <div class="callout-more-content" part="more-content">
              <slot name="more-content"></slot>
            </div>
          `,
          () => this.renderHighlightContent(),
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-callout': ItCallout;
  }
}
