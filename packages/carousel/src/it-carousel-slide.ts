import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './carousel.scss';

@customElement('it-carousel-slide')
export class ItCarouselSlide extends BaseComponent {
  static styles = styles;

  // The host element itself is moved into it-carousel's shadow DOM and gets
  // the 'splide__slide' class added programmatically.
  //  <!-- ShadowDOM boundaries issues require div instead of li -->
  override render() {
    return html`<div class="splide__slide__container it-single-slide-wrapper" part="slide"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-carousel-slide': ItCarouselSlide;
  }
}
