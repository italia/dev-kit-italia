import { BaseComponent } from '@italia/globals';
import { html, type TemplateResult } from 'lit';
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

  @property({ type: Boolean, reflect: true }) more = false;

  @query('slot[name="title"]') private _titleSlot!: HTMLSlotElement;

  @query('slot[name="icon"]') private _iconSlot!: HTMLSlotElement;

  @query('slot[name="more-content"]') private _moreContentSlot!: HTMLSlotElement;

  private getCalloutClasses() {
    return classMap({
      callout: true,
      [`callout-${this.variant}`]: !!this.variant,
      'callout-highlight': this.highlight,
      'callout-more': this.more,
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
    assignedIcons.forEach((icon: any) => {
      if (icon.tagName?.toLowerCase() === 'it-icon') {
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
  }

  override firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated(changedProperties);
    // Aggiorna i colori delle icone al primo render
    this.updateIconColors();
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
    return html` <div class="callout-inner" part="inner">${this.renderTitle()} ${this.renderContent()}</div> `;
  }

  // eslint-disable-next-line class-methods-use-this
  private renderContent(): TemplateResult {
    return html`<slot></slot>`;
  }

  private renderHighlightContent() {
    return html`${this.renderTitle()} ${this.renderContent()}`;
  }

  render() {
    return html`
      <div class="${this.getCalloutClasses()}" part="callout">
        ${when(
          !this.highlight && !this.more,
          () => this.renderInner(),
          () => this.renderHighlightContent(),
        )}
        <div class="callout-more-content" part="more-content">
          <slot name="more-content"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-callout': ItCallout;
  }
}
