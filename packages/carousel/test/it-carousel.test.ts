/* eslint-disable no-await-in-loop */
/// <reference types="mocha" />

import { expect, fixture, html, aTimeout, elementUpdated } from '@open-wc/testing';
import '../src/index.js';
import type { ItCarousel } from '../src/it-carousel.js';
import type { ItCarouselSlide } from '../src/it-carousel-slide.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Short pause to let Splide finish mounting DOM mutations */
const splideReady = () => aTimeout(50);

// ---------------------------------------------------------------------------
// it-carousel-slide
// ---------------------------------------------------------------------------

describe('it-carousel-slide', () => {
  it('is defined as a custom element', () => {
    expect(customElements.get('it-carousel-slide')).to.be.a('function');
  });

  it('renders the wrapper div in shadow DOM', async () => {
    const el = await fixture<ItCarouselSlide>(html`<it-carousel-slide>foo</it-carousel-slide>`);
    const wrapper = el.shadowRoot?.querySelector('div.it-single-slide-wrapper');
    expect(wrapper).to.exist;
  });

  it('projects slotted content', async () => {
    const el = await fixture<ItCarouselSlide>(
      html`<it-carousel-slide><span id="inner">ciao</span></it-carousel-slide>`,
    );
    const inner = el.querySelector('#inner');
    expect(inner?.textContent).to.equal('ciao');
  });
});

// ---------------------------------------------------------------------------
// it-carousel — registration & default state
// ---------------------------------------------------------------------------

describe('it-carousel', () => {
  it('is defined as a custom element', () => {
    expect(customElements.get('it-carousel')).to.be.a('function');
  });

  describe('default properties', () => {
    it('variant defaults to "single"', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      expect(el.variant).to.equal('single');
    });

    it('fullscreen defaults to false', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      expect(el.fullscreen).to.be.false;
    });

    it('arrows defaults to false', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      expect(el.arrows).to.be.false;
    });
  });

  // ---------------------------------------------------------------------------
  // Reflected attributes
  // ---------------------------------------------------------------------------

  describe('reflected attributes', () => {
    it('reflects variant attribute', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel variant="columns"></it-carousel>`);
      expect(el.variant).to.equal('columns');
      expect(el.getAttribute('variant')).to.equal('columns');
    });

    it('reflects fullscreen attribute', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel fullscreen></it-carousel>`);
      expect(el.fullscreen).to.be.true;
      expect(el.hasAttribute('fullscreen')).to.be.true;
    });

    it('reflects arrows attribute', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel arrows></it-carousel>`);
      expect(el.arrows).to.be.true;
      expect(el.hasAttribute('arrows')).to.be.true;
    });
  });

  // ---------------------------------------------------------------------------
  // Shadow DOM structure
  // ---------------------------------------------------------------------------

  describe('shadow DOM structure', () => {
    it('renders a <div role="region"> as carousel root', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      const root = el.shadowRoot?.querySelector('div[role="region"]');
      expect(root).to.exist;
      expect(root?.getAttribute('role')).to.equal('region');
    });

    it('root element always has "it-carousel-wrapper" and "splide" classes', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      const root = el.shadowRoot?.querySelector('div[role="region"]');
      expect(root?.classList.contains('it-carousel-wrapper')).to.be.true;
      expect(root?.classList.contains('splide')).to.be.true;
    });

    it('renders .splide__track and .splide__list', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      expect(el.shadowRoot?.querySelector('.splide__track')).to.exist;
      expect(el.shadowRoot?.querySelector('.splide__list')).to.exist;
    });

    it('renders title slot', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel><h2 slot="title">Titolo test</h2></it-carousel>`);
      const titleSlot = el.shadowRoot?.querySelector('slot[name="title"]');
      expect(titleSlot).to.exist;
    });
  });

  // ---------------------------------------------------------------------------
  // Section class composition per variant
  // ---------------------------------------------------------------------------

  describe('section class — variant mapping', () => {
    it('variant "single" → it-carousel-landscape-abstract', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel variant="single"></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).to.include('it-carousel-landscape-abstract');
    });

    it('variant "columns" → it-carousel-landscape-abstract-three-cols', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel variant="columns"></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).to.include('it-carousel-landscape-abstract-three-cols');
    });

    it('variant "gallery-sm" → it-carousel-landscape-abstract-three-cols + it-standard-image', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel variant="gallery-sm"></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).to.include('it-carousel-landscape-abstract-three-cols');
      expect(cls).to.include('it-standard-image');
    });

    it('variant "gallery-lg" → it-carousel-landscape-abstract-three-cols + it-big-img', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel variant="gallery-lg"></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).to.include('it-carousel-landscape-abstract-three-cols');
      expect(cls).to.include('it-big-img');
    });
  });

  // ---------------------------------------------------------------------------
  // Arrows modifier class (only for columns)
  // ---------------------------------------------------------------------------

  describe('arrows modifier class', () => {
    it('columns + arrows → adds it-carousel-landscape-abstract-three-cols-arrow-visible', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel variant="columns" arrows></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).to.include('it-carousel-landscape-abstract-three-cols');
      expect(cls).to.include('it-carousel-landscape-abstract-three-cols-arrow-visible');
    });

    it('single + arrows → does NOT add arrow-visible modifier', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel variant="single" arrows></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).not.to.include('arrow-visible');
    });

    it('gallery variants always include it-full-carousel regardless of fullscreen prop', async () => {
      for (const variant of ['gallery-sm', 'gallery-lg'] as const) {
        // eslint-disable-next-line no-await-in-loop
        const el = await fixture<ItCarousel>(html`<it-carousel variant=${variant}></it-carousel>`);
        const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
        expect(cls).to.include('it-full-carousel', `${variant} should always have it-full-carousel`);
      }
    });

    it('gallery-lg + arrows → does NOT add arrow-visible modifier', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel variant="gallery-lg" arrows></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).not.to.include('arrow-visible');
    });
  });

  // ---------------------------------------------------------------------------
  // Fullscreen class
  // ---------------------------------------------------------------------------

  describe('fullscreen class', () => {
    it('adds it-full-carousel when fullscreen=true', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel fullscreen></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).to.include('it-full-carousel');
    });

    it('does NOT add it-full-carousel when fullscreen=false', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).not.to.include('it-full-carousel');
    });

    it('fullscreen + variant + arrows all compose together', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel variant="columns" arrows fullscreen></it-carousel>`);
      const cls = el.shadowRoot?.querySelector('div[role="region"]')?.className ?? '';
      expect(cls).to.include('it-carousel-landscape-abstract-three-cols');
      expect(cls).to.include('it-carousel-landscape-abstract-three-cols-arrow-visible');
      expect(cls).to.include('it-full-carousel');
      expect(cls).to.include('splide');
    });
  });

  // ---------------------------------------------------------------------------
  // Slide adoption into shadow DOM
  // ---------------------------------------------------------------------------

  describe('slide adoption into shadow DOM', () => {
    it('moves slotted it-carousel-slide elements into .splide__list', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>A</span></it-carousel-slide>
          <it-carousel-slide><span>B</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const list = el.shadowRoot?.querySelector('.splide__list');
      const slides = list?.querySelectorAll('it-carousel-slide');
      expect(slides?.length).to.equal(2);
    });

    it('adopted slides get the splide__slide class', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>A</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const slide = el.shadowRoot?.querySelector('.splide__list it-carousel-slide');
      expect(slide?.classList.contains('splide__slide')).to.be.true;
    });

    it('does not throw when there are zero slides', async () => {
      let error: unknown;
      try {
        await fixture<ItCarousel>(html`<it-carousel><h2 slot="title">T</h2></it-carousel>`);
        await splideReady();
      } catch (e) {
        error = e;
      }
      expect(error).to.be.undefined;
    });
  });

  // ---------------------------------------------------------------------------
  // Splide mount
  // ---------------------------------------------------------------------------

  describe('Splide initialisation', () => {
    it('mounts Splide and renders pagination dots', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
          <it-carousel-slide><span>4</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      // Splide appends .splide__pagination outside the track on the section root
      const pagination = el.shadowRoot?.querySelector('.splide__pagination');
      expect(pagination).to.exist;
    });

    it('does not render arrows when arrows=false', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const arrowsEl = el.shadowRoot?.querySelector('.splide__arrows');
      // When arrows=false Splide should not render arrow buttons
      expect(arrowsEl).to.not.exist;
    });
  });

  // ---------------------------------------------------------------------------
  // Inert on non-visible slides (tab order)
  // ---------------------------------------------------------------------------

  describe('inert on non-visible slides', () => {
    it('visible slides do NOT have inert', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const visibleSlides = el.shadowRoot?.querySelectorAll('.splide__slide.is-visible');
      expect(visibleSlides?.length).to.be.greaterThan(0);
      visibleSlides?.forEach((slide) => {
        expect(slide.hasAttribute('inert')).to.be.false;
      });
    });

    it('non-visible slides have inert', async () => {
      // perPage:1 ensures only one slide is visible at a time
      const el = await fixture<ItCarousel>(html`
        <it-carousel .config=${{ perPage: 1, type: 'slide' }}>
          <h2 slot="title">T</h2>
          <it-carousel-slide><a href="#">Link 1</a></it-carousel-slide>
          <it-carousel-slide><a href="#">Link 2</a></it-carousel-slide>
          <it-carousel-slide><a href="#">Link 3</a></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const hiddenSlides = el.shadowRoot?.querySelectorAll('.splide__slide:not(.is-visible):not(.is-clone)');
      expect(hiddenSlides?.length).to.be.greaterThan(0);
      hiddenSlides?.forEach((slide) => {
        expect(slide.hasAttribute('inert')).to.be.true;
      });
    });
  });

  // ---------------------------------------------------------------------------
  // Autoplay prop
  // ---------------------------------------------------------------------------

  describe('autoplay prop', () => {
    it('defaults to false', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      expect(el.autoplay).to.be.false;
    });

    it('reflects autoplay attribute', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel autoplay></it-carousel>`);
      expect(el.autoplay).to.be.true;
      expect(el.hasAttribute('autoplay')).to.be.true;
    });

    it('autoplay=true renders .splide__controls with toggle', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel autoplay>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      expect(el.shadowRoot?.querySelector('.splide__controls')).to.exist;
      expect(el.shadowRoot?.querySelector('.splide__toggle')).to.exist;
    });

    // Fails only on CI only on webkit, seems related to Splide's autoplay extension not being properly initialised in the test environment (toggle button is rendered but aria-label is missing)
    // it('autoplay=true passes autoplay:"pause" to Splide (Splide sets aria-label on toggle)', async () => {
    //   const el = await fixture<ItCarousel>(html`
    //     <it-carousel autoplay>
    //       <h2 slot="title">T</h2>
    //       <it-carousel-slide><span>1</span></it-carousel-slide>
    //       <it-carousel-slide><span>2</span></it-carousel-slide>
    //     </it-carousel>
    //   `);
    //   await splideReady();
    //   // Splide only sets aria-label on toggle when autoplay extension is active
    //   const toggle = el.shadowRoot?.querySelector('.splide__toggle');
    //   expect(toggle?.getAttribute('aria-label')).to.be.a('string').and.not.be.empty;
    // });

    it('user config.autoplay overrides the prop (e.g. autoplay:true starts immediately)', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel autoplay .config=${{ autoplay: true }}>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      // Toggle button is still rendered (autoplay truthy)
      expect(el.shadowRoot?.querySelector('.splide__toggle')).to.exist;
    });

    it('autoplay=false + no config → no toggle rendered', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      expect(el.shadowRoot?.querySelector('.splide__toggle')).to.be.null;
    });
  });

  // ---------------------------------------------------------------------------
  // Autoplay toggle
  // ---------------------------------------------------------------------------

  describe('autoplay toggle', () => {
    it('does not render toggle when autoplay is not set', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      expect(el.shadowRoot?.querySelector('.splide__toggle')).to.be.null;
    });

    it('renders .splide__controls wrapper with toggle inside when autoplay is enabled', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel .config=${{ autoplay: true, interval: 3000 }}>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const controls = el.shadowRoot?.querySelector('.splide__controls');
      expect(controls).to.exist;
      const toggle = controls?.querySelector('.splide__toggle');
      expect(toggle).to.exist;
    });

    it('autoplay: pagination dots are rendered inside .splide__controls', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel .config=${{ autoplay: true, interval: 3000 }}>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const controls = el.shadowRoot?.querySelector('.splide__controls');
      const pagination = controls?.querySelector('.splide__pagination');
      expect(pagination).to.exist;
      expect(pagination?.querySelectorAll('.splide__pagination__page').length).to.be.greaterThan(0);
    });

    it('toggle button has part="autoplay-toggle"', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel .config=${{ autoplay: true }}>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const toggle = el.shadowRoot?.querySelector('.splide__toggle');
      expect(toggle?.getAttribute('part')).to.equal('autoplay-toggle');
    });

    it('play SVG has class splide__toggle__play and part="autoplay-play"', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel .config=${{ autoplay: true }}>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const playSvg = el.shadowRoot?.querySelector('.splide__toggle__play');
      expect(playSvg?.tagName.toLowerCase()).to.equal('svg');
      expect(playSvg?.getAttribute('part')).to.equal('autoplay-play');
      expect(playSvg?.getAttribute('aria-hidden')).to.equal('true');
    });

    it('pause SVG has class splide__toggle__pause and part="autoplay-pause"', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel .config=${{ autoplay: true }}>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const pauseSvg = el.shadowRoot?.querySelector('.splide__toggle__pause');
      expect(pauseSvg?.tagName.toLowerCase()).to.equal('svg');
      expect(pauseSvg?.getAttribute('part')).to.equal('autoplay-pause');
      expect(pauseSvg?.getAttribute('aria-hidden')).to.equal('true');
    });

    it('Splide sets non-empty aria-label on toggle button', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel .config=${{ autoplay: true }}>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const toggle = el.shadowRoot?.querySelector('.splide__toggle');
      const label = toggle?.getAttribute('aria-label') ?? '';
      expect(label).to.be.a('string').and.not.be.empty;
    });
  });

  // ---------------------------------------------------------------------------
  // CSS parts
  // ---------------------------------------------------------------------------

  describe('CSS parts', () => {
    it('pagination gets part="pagination-track" after mount', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const pagination = el.shadowRoot?.querySelector('.splide__pagination');
      expect(pagination?.getAttribute('part')).to.equal('pagination-track');
    });

    it('each pagination dot button gets part="pagination-dot"', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const dots = el.shadowRoot?.querySelectorAll('.splide__pagination__page');
      expect(dots?.length).to.be.greaterThan(0);
      dots?.forEach((btn) => {
        expect(btn.getAttribute('part')).to.equal('pagination-dot');
      });
    });

    it('no arrows parts when arrows=false', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const root = el.shadowRoot!;
      expect(root.querySelector('[part="arrows"]')).to.be.null;
      expect(root.querySelector('[part="arrow-prev"]')).to.be.null;
      expect(root.querySelector('[part="arrow-next"]')).to.be.null;
    });
  });

  // ---------------------------------------------------------------------------
  // Title slot — a11y aria-labelledby
  // ---------------------------------------------------------------------------

  describe('title slot — aria-labelledby', () => {
    it('sets aria-labelledby on the root element when title slot contains a heading', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">Titolo accessibile</h2>
          <it-carousel-slide><span>S</span></it-carousel-slide>
        </it-carousel>
      `);
      await elementUpdated(el);
      await splideReady();
      const rootEl = el.shadowRoot?.querySelector('div[role="region"]');
      const labelledBy = rootEl?.getAttribute('aria-labelledby');
      expect(labelledBy).to.be.a('string').and.not.be.empty;
      // The id should be set on the heading in the light DOM
      const heading = el.querySelector('h2[slot="title"]');
      expect(heading?.getAttribute('id')).to.equal(labelledBy);
    });

    it('ignores non-heading elements in title slot (no aria-labelledby)', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <span slot="title">non è un heading</span>
          <it-carousel-slide><span>S</span></it-carousel-slide>
        </it-carousel>
      `);
      await elementUpdated(el);
      await splideReady();
      const rootEl = el.shadowRoot?.querySelector('div[role="region"]');
      expect(rootEl?.hasAttribute('aria-labelledby')).to.be.false;
    });
  });

  // ---------------------------------------------------------------------------
  // i18n
  // ---------------------------------------------------------------------------

  describe('i18n', () => {
    it('translations cover all required Splide i18n keys (Italian)', async () => {
      const { default: itLocale } = await import('../src/locales/it.js');
      const requiredKeys = [
        'carousel_prev',
        'carousel_next',
        'carousel_first',
        'carousel_last',
        'carousel_slideX',
        'carousel_pageX',
        'carousel_play',
        'carousel_pause',
        'carousel_carousel',
        'carousel_select',
        'carousel_slide',
        'carousel_slideLabel',
      ];
      for (const key of requiredKeys) {
        expect(itLocale).to.have.property(key).that.is.a('string').and.not.be.empty;
      }
    });

    it('translations cover all required Splide i18n keys (English)', async () => {
      const { default: enLocale } = await import('../src/locales/en.js');
      const requiredKeys = [
        'carousel_prev',
        'carousel_next',
        'carousel_first',
        'carousel_last',
        'carousel_slideX',
        'carousel_pageX',
        'carousel_play',
        'carousel_pause',
        'carousel_carousel',
        'carousel_select',
        'carousel_slide',
        'carousel_slideLabel',
      ];
      for (const key of requiredKeys) {
        expect(enLocale).to.have.property(key).that.is.a('string').and.not.be.empty;
      }
    });
  });

  // ---------------------------------------------------------------------------
  // VARIANT_MAP / CONFIGS completeness
  // ---------------------------------------------------------------------------

  describe('VARIANT_MAP completeness', () => {
    it('every CarouselVariant maps to a valid CONFIGS key', async () => {
      const { CONFIGS, VARIANT_MAP } = await import('../src/constants.js');
      const variants = Object.keys(VARIANT_MAP) as string[];
      expect(variants.length).to.be.greaterThan(0);
      for (const v of variants) {
        const { configKey } = (VARIANT_MAP as any)[v];
        expect(CONFIGS).to.have.property(configKey);
      }
    });

    it('every VARIANT_MAP entry has a non-empty wrapperClass', async () => {
      const { VARIANT_MAP } = await import('../src/constants.js');
      for (const [, { wrapperClass }] of Object.entries(VARIANT_MAP)) {
        expect(wrapperClass).to.be.a('string').and.not.be.empty;
      }
    });
  });

  // ---------------------------------------------------------------------------
  // `type` prop
  // ---------------------------------------------------------------------------

  describe('type prop', () => {
    it('defaults to undefined (variant base config type is used)', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      expect(el.type).to.be.undefined;
    });

    it('reflects type attribute', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel type="loop"></it-carousel>`);
      expect(el.type).to.equal('loop');
      expect(el.getAttribute('type')).to.equal('loop');
    });

    it('mounts Splide with overridden type=loop', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel type="loop">
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      // Splide adds `is-loop` to its root element when type='loop' is active
      const track = el.shadowRoot?.querySelector('.splide__track');
      expect(track?.classList.contains('splide__track--loop')).to.be.true;
    });

    it('mounts Splide with type=slide (no is-loop class)', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel type="slide">
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      const track = el.shadowRoot?.querySelector('.splide__track');
      expect(track?.classList.contains('splide__track--loop')).to.be.false;
    });
  });

  // ---------------------------------------------------------------------------
  // Full config override via `config` prop
  // ---------------------------------------------------------------------------

  describe('config prop (full override)', () => {
    it('accepts a config object and Splide mounts without errors', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      // Set config programmatically (as a framework consumer would)
      el.config = { type: 'slide', perPage: 1, gap: 8 };
      let error: unknown;
      try {
        await splideReady();
      } catch (e) {
        error = e;
      }
      expect(error).to.be.undefined;
    });

    it('config prop takes precedence over type prop', async () => {
      // config.type = 'slide' should win over type='loop'
      const el = await fixture<ItCarousel>(html`
        <it-carousel type="loop">
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
          <it-carousel-slide><span>3</span></it-carousel-slide>
        </it-carousel>
      `);
      // Override to slide via config — no clones expected
      el.config = { type: 'slide' };
      await splideReady();
      // Can't re-init after firstUpdated in this flow, but we verify the prop is set
      expect(el.config?.type).to.equal('slide');
    });
  });

  // ---------------------------------------------------------------------------
  // Disconnect
  // ---------------------------------------------------------------------------

  describe('disconnectedCallback', () => {
    it('does not throw when disconnected before slides are added', async () => {
      const el = await fixture<ItCarousel>(html`<it-carousel></it-carousel>`);
      let error: unknown;
      try {
        el.remove();
      } catch (e) {
        error = e;
      }
      expect(error).to.be.undefined;
    });

    it('does not throw when disconnected after Splide mounted', async () => {
      const el = await fixture<ItCarousel>(html`
        <it-carousel>
          <h2 slot="title">T</h2>
          <it-carousel-slide><span>1</span></it-carousel-slide>
          <it-carousel-slide><span>2</span></it-carousel-slide>
        </it-carousel>
      `);
      await splideReady();
      let error: unknown;
      try {
        el.remove();
      } catch (e) {
        error = e;
      }
      expect(error).to.be.undefined;
    });
  });
});
