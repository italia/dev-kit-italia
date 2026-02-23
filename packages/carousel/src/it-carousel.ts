/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable lit-a11y/list */
import { BaseLocalizedComponent } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';
import { type Options, Splide } from '@splidejs/splide';
import styles from './carousel.scss';
import { CONFIGS, VARIANT_MAP } from './constants.js';
import { type CarouselVariants, type CarouselType } from './types.js';
import it from './locales/it.js';
import en from './locales/en.js';

registerTranslation(it);
registerTranslation(en);

/**
 * @csspart arrows         - Wrapper element containing the prev/next arrow buttons.
 * @csspart arrow-prev     - The "previous" arrow button.
 * @csspart arrow-next     - The "next" arrow button.
 * @csspart pagination     - The pagination list element (dots).
 * @csspart pagination-page - Each individual pagination dot button.
 */
@customElement('it-carousel')
export class ItCarousel extends BaseLocalizedComponent {
  static styles = styles;

  @property({ type: Object, reflect: true })
  config?: Options = {};

  @property({ type: String, attribute: 'variant', reflect: true })
  variant: CarouselVariants = 'single';

  @property({ type: Boolean, attribute: 'fullscreen', reflect: true })
  fullscreen?: boolean = false;

  @property({ type: Boolean, attribute: 'arrows', reflect: true })
  arrows: boolean = false;

  /**
   * Splide movement type. Overrides the variant's default type.
   * - `slide` (default for most variants) — linear slide
   * - `loop`  — infinite loop
   * - `fade`  — crossfade (perPage must be 1)
   */
  @property({ type: String, attribute: 'type', reflect: true })
  type?: CarouselType;

  @queryAssignedElements({ slot: 'title' })
  titleElements!: HTMLElement[];

  @query('section')
  wrapper!: HTMLElement;

  @query('.splide__list')
  list!: HTMLElement;

  private _splide?: Splide;

  override firstUpdated(_changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated?.(_changedProperties);
    const slot = this.shadowRoot!.querySelector('slot:not([name])') as HTMLSlotElement;
    this._initSplide(slot);
  }

  private _initSplide(slot: HTMLSlotElement) {
    const slides = slot.assignedElements();
    if (slides.length === 0) return;

    this._splide?.destroy(true);

    // Move slotted elements physically into the shadow DOM list so Splide can find them.
    // querySelectorAll() never crosses shadow boundaries, so elements must be real
    // children — not just distributed via <slot>.
    slot.remove();
    slides.forEach((el) => {
      el.classList.add('splide__slide');
      this.list.appendChild(el);
    });

    const { configKey } = VARIANT_MAP[this.variant];
    const baseConfig = CONFIGS[configKey];
    console.log('Initializing Splide with config:', baseConfig, ' type override ', this.type, ' resultant ', {
      ...baseConfig,
      arrows: this.arrows,
      ...this.config,
    });
    const splideI18n = {
      prev: this.$t('carousel_prev'),
      next: this.$t('carousel_next'),
      first: this.$t('carousel_first'),
      last: this.$t('carousel_last'),
      slideX: this.$t('carousel_slideX'),
      pageX: this.$t('carousel_pageX'),
      play: this.$t('carousel_play'),
      pause: this.$t('carousel_pause'),
      carousel: this.$t('carousel_carousel'),
      select: this.$t('carousel_select'),
      slide: this.$t('carousel_slide'),
      slideLabel: this.$t('carousel_slideLabel'),
    };

    this._splide = new Splide(this.wrapper, {
      ...baseConfig,
      ...(this.type ? { type: this.type } : {}),
      arrows: this.arrows,
      i18n: splideI18n,
      ...this.config,
    });
    this._splide.mount();
    this._applyParts();
  }

  /**
   * After Splide mounts it injects elements (arrows, pagination) directly into
   * the shadow DOM.  We annotate each one with a CSS `part` so that consumers
   * can reach them from outside the shadow root with `::part()`.
   *
   * Exposed parts:
   * - `arrows`          – the arrows wrapper element
   * - `arrow-prev`      – the "previous" button
   * - `arrow-next`      – the "next" button
   * - `pagination`      – the pagination `<ul>` (dots)
   * - `pagination-page` – each individual dot `<button>`
   */
  private _applyParts() {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelector('.splide__arrows')?.setAttribute('part', 'arrows');
    root.querySelector('.splide__arrow--prev')?.setAttribute('part', 'arrow-prev');
    root.querySelector('.splide__arrow--next')?.setAttribute('part', 'arrow-next');
    root.querySelector('.splide__pagination')?.setAttribute('part', 'pagination');
    root.querySelectorAll('.splide__pagination__page').forEach((btn) => {
      btn.setAttribute('part', 'pagination-page');
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback?.();
    this._splide?.destroy(true);
  }

  private handleTitleSlotChange() {
    if (this.titleElements.length === 0) {
      console.warn(
        'ItCarousel: no title element found in the "title" slot. Please provide a heading element (h1-h6) with the "title" slot for better accessibility.',
      );
      return;
    }
    this.titleElements.forEach((_el) => {
      if (!_el.tagName.match(/H[1-6]/)) return;
      const id = this.generateId('it-carousel-title');
      _el.setAttribute('id', id);
      this.wrapper.setAttribute('aria-labelledby', id);
    });
  }

  private _sectionClass(): string {
    console.log(
      'Calculating section classes with variant:',
      this.variant,
      'arrows:',
      this.arrows,
      'fullscreen:',
      this.fullscreen,
    );
    const { wrapperClass, imageClass } = VARIANT_MAP[this.variant];
    const classes = ['it-carousel-wrapper', wrapperClass];
    if (this.arrows && this.variant === 'columns') {
      classes.push('it-carousel-landscape-abstract-three-cols-arrow-visible');
    }
    // gallery variants always need it-full-carousel (structural, not opt-in)
    // + their image modifier class. Other variants respect the fullscreen prop.
    const isGallery = this.variant === 'gallery-sm' || this.variant === 'gallery-lg';
    if (isGallery || this.fullscreen) classes.push('it-full-carousel');
    if (imageClass) classes.push(imageClass);
    classes.push('splide');
    return classes.join(' ');
  }

  override render() {
    // eslint-disable-next-line lit-a11y/no-redundant-role
    return html`<section class=${this._sectionClass()} role="region">
      <div class="it-header-block">
        <div class="it-header-block-title">
          <slot name="title" @slotchange=${this.handleTitleSlotChange}></slot>
        </div>
      </div>
      <div class="splide__track">
        <div class="splide__list it-carousel-all" role="presentation">
          <slot>Carousel</slot>
        </div>
      </div>
    </section>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-carousel': ItCarousel;
  }
}
