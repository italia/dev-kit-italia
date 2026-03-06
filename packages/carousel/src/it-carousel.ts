/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable lit-a11y/list */
import { BaseLocalizedComponent } from '@italia/globals';
import { registerTranslation } from '@italia/i18n';
import { html } from 'lit';
import { Intersection } from '@splidejs/splide-extension-intersection';
import { customElement, property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { type Options, Splide } from '@splidejs/splide';
import { when } from 'lit/directives/when.js';
import { CONFIGS, VARIANT_MAP } from './constants.js';
import { type CarouselVariants, type CarouselType } from './types.js';
import en from './locales/en.js';
import it from './locales/it.js';
import styles from './carousel.scss';

registerTranslation(it);
registerTranslation(en);

/**
 * @csspart arrows           - Wrapper element containing the prev/next arrow buttons.
 * @csspart arrow-prev       - The "previous" arrow button.
 * @csspart arrow-next       - The "next" arrow button.
 * @csspart pagination-track - The pagination list element (dots). When autoplay is enabled it lives inside the controls wrapper; otherwise Splide appends it to the carousel root.
 * @csspart pagination-dot   - Each individual pagination dot button.
 * @csspart autoplay-toggle  - The play/pause toggle button (rendered when `autoplay` prop is true or `config.autoplay` is set).
 * @csspart autoplay-play    - The play SVG icon inside the toggle button.
 * @csspart autoplay-pause   - The pause SVG icon inside the toggle button.
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
   * - `fade`  — crossfade
   */
  @property({ type: String, attribute: 'type', reflect: true })
  type?: CarouselType;

  /**
   * If true, enables Splide autoplay in `'pause'` mode: the carousel
   * auto-advances but starts paused so the user must explicitly press Play.
   * A play/pause toggle button is rendered automatically.
   * To customise the interval or other autoplay options use `config.autoplay`.
   */
  @property({ type: Boolean, attribute: 'autoplay', reflect: true })
  autoplay: boolean = false;

  @queryAssignedElements({ slot: 'title' })
  titleElements!: HTMLElement[];

  @queryAssignedElements({})
  mainSlot!: HTMLSlotElement;

  @query('div[role="region"]')
  wrapper!: HTMLElement;

  @query('.splide__list')
  list!: HTMLElement;

  @state()
  private _autoplayActive = false;

  private _isInitialized = false;

  private _liveAnnouncerTimeout?: number;

  private _splide?: Splide;

  public pauseAutoplay() {
    this._splide?.Components.Autoplay.pause();
  }

  public playAutoplay() {
    this._splide?.Components.Autoplay.play();
  }

  // Move slotted elements physically into the shadow DOM list so Splide can find them.
  // querySelectorAll() never crosses shadow boundaries, so elements must be real
  // children — not just distributed via <slot>.
  private _handleSlotChange(e: Event) {
    if (this._isInitialized) return; // Evita loop quando spostiamo i nodi

    const slot = e.target as HTMLSlotElement;
    const slides = slot.assignedElements();

    if (slides.length > 0) {
      this._initSplide(slides);
    }
  }

  private _initSplide(slides?: Element[]) {
    if (!slides || slides?.length === 0) return;

    this._splide?.destroy(true);

    // Move slotted elements physically into the shadow DOM list so Splide can find them.
    // querySelectorAll() never crosses shadow boundaries, so elements must be real
    // children — not just distributed via <slot>.
    slides.forEach((el) => {
      el.classList.add('splide__slide');
      this.list.appendChild(el);
    });
    requestAnimationFrame(() => {
      if (!this.wrapper) return;
      const { configKey } = VARIANT_MAP[this.variant];
      const baseConfig = CONFIGS[configKey];
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
        ...(this.autoplay
          ? {
              autoplay: 'pause',
              intersection: {
                outView: {
                  autoplay: false,
                },
              },
            }
          : {}),
        i18n: splideI18n,
        // label: splideI18n.carousel,
        // role: 'region',
        isNavigation: false,
        ...this.config,
        live: true,
      });
      this._splide.mount({ Intersection });
      this._applyParts();
      // Set inert on non-visible slides so their focusable children are excluded
      // from the tab order. Splide sets aria-hidden but that alone isn't enough.
      this._updateInert();
      // On `move` (fires BEFORE the transition): pro-actively remove inert from
      // the destination slide so AT can follow aria-controls and read its content.
      // On `moved` (fires AFTER): re-sync all slides to the new visibility state.
      this._splide.on('move', () => {
        this._updateInert();
      });
      this._splide.on('moved', () => {
        // 1. Aggiorna immediatamente l'albero di accessibilità del DOM
        this._updateInert();
        setTimeout(() => {}, 100);
      });

      // Safeguard: pause any possible playing it-video children when their slide becomes inactive.
      this._splide.on('inactive', () => {
        const itvideos = this.list.querySelectorAll('it-video');
        itvideos.forEach((video) => {
          const player = (video as any).getPlayer();
          if (!player) return;
          if (!player.paused()) player.pause();
        });
      });
      this._splide.on('autoplay:play', () => {
        this.dispatchEvent(
          new CustomEvent('it-carousel-play', { bubbles: true, composed: true, detail: { id: this._splide?.root.id } }),
        );
      });
      this._splide.on('autoplay:pause', () => {
        this.dispatchEvent(
          new CustomEvent('it-carousel-pause', {
            bubbles: true,
            composed: true,
            detail: { id: this._splide?.root.id },
          }),
        );
      });
    });
    this._isInitialized = true;
  }

  /**
   * Adds `inert` to every slide that Splide has not marked as visible,
   * and removes it from the ones that are. Called after mount and on every
   * `moved` event so the tab order always reflects what is on screen.
   * Clone slides (loop mode) are always inert per splide docs.
   */
  private _updateInert() {
    if (!this._splide) return;
    this._splide.Components.Slides.forEach((slideComponent) => {
      const isVisible = slideComponent.slide.classList.contains('is-visible');
      if (!isVisible || slideComponent.isClone) {
        slideComponent.slide.setAttribute('inert', '');
      } else {
        slideComponent.slide.removeAttribute('inert');
      }
    });
    setTimeout(() => {}, 50);
  }

  /**
   * After Splide mounts it injects elements (arrows, pagination) directly into
   * the shadow DOM.  We annotate each one with a CSS `part` so that consumers
   * can reach them from outside the shadow root with `::part()`.
   *
   * Exposed parts:
   * - `arrows`            – the arrows wrapper element
   * - `arrow-prev`        – the "previous" button
   * - `arrow-next`        – the "next" button
   * - `pagination-track`  – the pagination `<ul>` (dots)
   * - `pagination-dot`    – each individual dot `<button>`
   */
  private _applyParts() {
    const root = this.shadowRoot;
    if (!root) return;

    root.querySelector('.splide__arrows')?.setAttribute('part', 'arrows');
    root.querySelector('.splide__arrow--prev')?.setAttribute('part', 'arrow-prev');
    root.querySelector('.splide__arrow--next')?.setAttribute('part', 'arrow-next');
    // .splide__pagination already gets part="pagination-track" from the Lit template
    // when autoplay is on; handle the non-autoplay case where Splide appends it dynamically.
    const paginationEl = root.querySelector('.splide__pagination');
    if (paginationEl && !paginationEl.hasAttribute('part')) {
      paginationEl.setAttribute('part', 'pagination-track');
    }
    root.querySelectorAll('.splide__pagination__page').forEach((btn) => {
      btn.setAttribute('part', 'pagination-dot');
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
    return html`<div class=${this._sectionClass()} role="region">
      <div class="it-header-block">
        <div class="it-header-block-title">
          <slot name="title" @slotchange=${this.handleTitleSlotChange}></slot>
        </div>
      </div>
      <div class="splide__track">
        <div class="splide__list it-carousel-all">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
      ${when(
        this.autoplay || this.config?.autoplay,
        () =>
          html`<div class="splide__controls">
            <button class="splide__toggle" type="button" part="autoplay-toggle">
              <svg
                class="splide__toggle__play"
                part="autoplay-play"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path d="m22 12-20 11v-22l10 5.5z" />
              </svg>
              <svg
                class="splide__toggle__pause"
                part="autoplay-pause"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </button>
            <!-- Placeholder: Splide finds this and populates dots in-place -->
            <ul class="splide__pagination" part="pagination-track"></ul>
          </div>`,
      )}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-carousel': ItCarousel;
  }
}
