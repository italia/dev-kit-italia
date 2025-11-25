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

  @property({ type: Boolean }) visible = false;

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
    if (window.scrollY > this.scrollLimit) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  };

  _scrollToTop = () => {
    const root = document.documentElement;

    const start = root.scrollTop;
    const target = this.offset || 0;
    const duration = this.duration || 500;
    const startTime = performance.now();

    const originalScrollBehavior = root.style.scrollBehavior;

    // disabilita temporaneamente lo smooth
    root.style.scrollBehavior = 'auto';

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Interpolazione lineare
      const current = start + (target - start) * progress;

      root.scrollTop = current;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Scroll to top completato
        // ripristina lo smooth originale
        root.style.scrollBehavior = originalScrollBehavior;

        // Aspetta che lo scroll finisca e focus sul body per evitare che lo screen reader rimanga sul pulsante
        setTimeout(() => {
          document.body.setAttribute('tabindex', '-1');
          document.body.focus({ preventScroll: true });
        }, 300);
      }
    };

    requestAnimationFrame(animate);
  };

  override render() {
    const classes = this.composeClass('back-to-top', {
      'back-to-top-small': this.small,
      dark: this.inverse,
      'back-to-top-show': this.visible,
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
          size="${this.small ? 'sm' : 'md'}"
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
