import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { unsafeStatic, html as staticHtml } from 'lit/static-html.js';
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

  @property({ type: Boolean, reflect: true, attribute: 'callout-more' }) calloutMore = false;

  @property({ type: Boolean, reflect: true, attribute: 'big-text' }) bigText = false;

  @property({ type: String, reflect: true, attribute: 'heading-level' }) headingLevel:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6' = 'h2';

  @query('slot[name="title"]') private _titleSlot!: HTMLSlotElement;

  @query('slot[name="icon"]') private _iconSlot!: HTMLSlotElement;

  private updateMoreContentBigText() {
    if (!this.shadowRoot) return;
    const slot = this.shadowRoot.querySelector('slot[name="more-content"]') as HTMLSlotElement;
    if (!slot) return;
    const assigned = slot.assignedElements({ flatten: true });
    assigned.forEach((el) => {
      if (el.tagName?.toLowerCase() === 'it-callout-more') {
        if (this.bigText) {
          el.setAttribute('big-text', '');
        } else {
          el.removeAttribute('big-text');
        }
      }
    });
  }

  private getCalloutClasses() {
    return classMap({
      callout: true,
      [`callout-${this.variant}`]: !!this.variant && !this.calloutMore,
      'callout-highlight': this.highlight,
      'callout-more': this.calloutMore,
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
    // Propaga big-text a it-callout-more
    if (changedProperties.has('bigText')) {
      this.updateMoreContentBigText();
    }
    // Aggiorna sempre dopo ogni update (slotchange non sempre triggera updated)
    this.updateMoreContentBigText();
  }

  private renderTitle() {
    const headingTag = unsafeStatic(this.headingLevel);
    const headingId = `${this._id}-title`;

    return html`
      <div class="callout-title" part="title">
        <slot name="icon" @slotchange="${this.onIconSlotChange}"></slot>
        <div class="text">
          ${staticHtml`
            <${headingTag} id="${headingId}">
              <slot name="title"></slot>
            </${headingTag}>
          `}
        </div>
      </div>
    `;
  }

  private renderInner() {
    return html`
      <div class="callout-inner" part="inner">
        ${this.renderTitle()}
        <slot></slot>
        <slot name="more-content"></slot>
      </div>
    `;
  }

  private renderHighlightContent() {
    return html`
      ${this.renderTitle()}
      <slot></slot>
      <slot name="more-content"></slot>
    `;
  }

  render() {
    const headingId = `${this._id}-title`;

    return html`
      <section class="${this.getCalloutClasses()}" part="callout" aria-labelledby="${headingId}">
        ${when(
          !this.highlight && !this.calloutMore,
          () => html` ${this.renderInner()} `,
          () => this.renderHighlightContent(),
        )}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-callout': ItCallout;
  }
}
