import { BaseComponent, setAttributes } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './back-to-top.scss';

@customElement('it-back-to-top')
export class ItBackToTop extends BaseComponent {
  static styles = styles;

  @property({ type: Number }) offset = 0; // Posizione Y espressa in pixel alla quale ritornarne al click sull'elemento

  @property({ type: Number, attribute: 'scroll-limit' }) scrollLimit = 100; // Posizione Y espressa in pixel alla quale far comparire l'elemento

  @property({ type: Number }) duration = 800; // Durata dell'animazione di scroll espressa in millisecondi

  @property({ type: Boolean }) small = false; // Variante di dimensione ridotta

  @property({ type: Boolean }) inverse = false; // Variante di colore invertito

  @property({ type: String, attribute: 'icon-color' }) iconColor = 'inverse'; // Variante di colore dell'icona

  connectedCallback() {
    super.connectedCallback?.();
    window.addEventListener('scroll', this._onScroll);
    this._onScroll();
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();
    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll = () => {
    console.log('Scroll position:', window.scrollY, this.scrollLimit);
    if (window.scrollY > this.scrollLimit) {
      this.style.display = 'block';
    } else {
      this.style.display = 'none';
    }
  };

  static _easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  _scrollToTop = () => {
    console.log('scrolltotop');
    const start = window.scrollY;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      const ease = ItBackToTop._easeInOutQuad(progress);
      window.scrollTo(0, (start - this.offset) * (1 - ease));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  override render() {
    const classes = this.composeClass('back-to-top', {
      'back-to-top-small': this.small,
      dark: this.inverse,
    });

    return html`
      <button
        id=${ifDefined(this.id || undefined)}
        part="button focusable"
        type="button"
        class="${classes}"
        @click="${this._scrollToTop}"
        ${setAttributes(this._ariaAttributes)}
      >
        <it-icon
          part="icon"
          name="it-arrow-up"
          size="lg"
          color="${this.iconColor === 'inverse' && this.inverse ? 'primary' : this.iconColor}"
        ></it-icon>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-button': ItBackToTop;
  }
}
