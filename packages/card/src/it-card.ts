import { BaseComponent } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, queryAssignedElements } from 'lit/decorators.js';
import styles from './card.scss';

@customElement('it-card')
export class ItCard extends BaseComponent {
  static styles = styles;

  @queryAssignedElements({ slot: 'title' })
  _titleElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'image' })
  _imageElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'footer' })
  _footerElements!: HTMLElement[];

  private handleSlotChange() {
    this.requestUpdate();
  }

  protected override updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (this._titleElements.length === 0) {
      // eslint-disable-next-line no-console
      console.warn('it-card: no title slot content found');
    }
  }

  override render() {
    const hasImage = this._imageElements.length > 0;
    const hasFooter = this._footerElements.length > 0;
    const classes = this.composeClass('it-card', 'rounded', 'shadow-sm', 'border', {
      'it-card-image': hasImage,
    });

    // TODO custom h3 tag
    return html`
      <article class="${classes}">
        <h3 class="it-card-title">
          <slot name="title" @slotchange=${this.handleSlotChange}></slot>
        </h3>
        <div class="it-card-image-wrapper" part="image-wrapper">
          <div class="ratio ratio-16x9">
            <slot name="image" @slotchange=${this.handleSlotChange}></slot>
          </div>
        </div>
        <div class="it-card-body" part="body">
          <p class="it-card-text" part="text">
            <slot></slot>
          </p>
        </div>
        ${hasFooter
          ? html`
              <footer class="it-card-footer" part="footer">
                <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
              </footer>
            `
          : html`<slot name="footer" @slotchange=${this.handleSlotChange}></slot>`}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-card': ItCard;
  }
}
