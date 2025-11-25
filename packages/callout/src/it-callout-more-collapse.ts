import { ItCollapseBase } from '@italia/collapse';
import { html } from 'lit';
import { when } from 'lit/directives/when.js';
import { customElement, property } from 'lit/decorators.js';
import styles from './callout-more-collapse.scss';

@customElement('it-callout-more-collapse')
export class ItCalloutMoreCollapse extends ItCollapseBase {
  static override styles = [ItCollapseBase.styles, styles];

  @property({ type: Boolean, attribute: 'big-text', reflect: true }) bigText = false;

  protected override renderDefaultTrigger() {
    return html`<button
      type="button"
      class="callout-more-toggle"
      aria-expanded="${this.expanded}"
      aria-controls="${this._contentId}"
      id="${this._triggerId}"
      @click=${this.handleTriggerAction}
      @keyup=${this.handleTriggerAction}
      part="focusable trigger"
    >
      <slot name="label"></slot>
      <span aria-hidden="true"></span>
    </button>`;
  }

  override render() {
    const hasCustomTrigger = !!this.triggerElement;
    const classPrefix = this.isAccordion ? 'accordion-' : 'collapse-';

    return html`
      <div class="collapse-div" part="collapse-div">
        <div class="${classPrefix}item" part="${classPrefix}item">
          <div class="collapse-wrapper">
            <div class="collapse-header">
              ${when(!hasCustomTrigger, () => this.renderDefaultTrigger())}
              <slot name="trigger" @slotchange=${this.handleTriggerSlotChange} part="trigger"></slot>
              <slot name="extra" part="extra"></slot>
            </div>
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
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-callout-more-collapse': ItCalloutMoreCollapse;
  }
}
