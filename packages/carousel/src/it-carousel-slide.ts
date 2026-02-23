import { BaseComponent, setAttributes } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './carousel.scss';

@customElement('it-carousel-slide')
export class ItCarouselSlide extends BaseComponent {
  static styles = styles;

  // The host element itself is moved into it-carousel's shadow DOM and gets
  // the 'splide__slide' class added programmatically, so no <li> wrapper is needed here.
  override render() {
    return html`<div class="it-single-slide-wrapper"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-carousel-slide': ItCarouselSlide;
  }
}
