import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './callout-more.scss';

@customElement('it-callout-more')
export class ItCalloutMore extends BaseComponent {
  static override styles = styles;

  @property({ type: String, reflect: true }) variant: string = 'primary';

  @property({ type: String, reflect: true }) size: string | null = null;

  @property({ type: Boolean, reflect: true }) outline = false;

  @property({ type: String, reflect: true }) as: string | null = 'button';

  @property({ type: Boolean, attribute: 'default-open', reflect: true }) defaultOpen = false;

  @property({ type: Boolean, attribute: 'big-text', reflect: true }) bigText = false;

  render() {
    return html`
      <div class="callout-more">
        <it-callout-more-collapse
          variant="${this.variant}"
          ?default-open=${this.defaultOpen}
          ?big-text=${this.bigText}
          size=${ifDefined(this.size ?? undefined)}
          as=${ifDefined(this.as ?? undefined)}
          ?outline=${this.outline}
          exportparts="button, focusable, trigger, extra, content"
        >
          <span slot="label"><slot name="label"></slot></span>
          <div slot="content"><slot name="content"></slot></div>
          <slot name="extra" slot="extra"></slot>
        </it-callout-more-collapse>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-callout-more': ItCalloutMore;
  }
}
