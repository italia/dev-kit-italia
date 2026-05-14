/// <reference types="mocha"/>
import '@italia/hero';
import { html, fixture, expect, elementUpdated, waitUntil } from '@open-wc/testing';
import { type ItHero } from '@italia/hero';

describe('it-hero component', () => {
  describe('structure and rendering', () => {
    it('renders a Hero with the default class', async () => {
      const el = await fixture<ItHero>(html`<it-hero></it-hero>`);
      const section = el.shadowRoot?.querySelector('section');

      expect(section).to.exist;
      expect(section?.classList.contains('it-hero-wrapper')).to.be.true;
    });

    it('applies "it-text-centered" class when center attribute is true', async () => {
      const el = await fixture<ItHero>(html`<it-hero center></it-hero>`);
      const section = el.shadowRoot?.querySelector('section');

      expect(section?.classList.contains('it-text-centered')).to.be.true;
    });

    it('applies "it-bottom-overlapping-content" class when overlap attribute is true', async () => {
      const el = await fixture<ItHero>(html`<it-hero overlap></it-hero>`);
      const section = el.shadowRoot?.querySelector('section');

      expect(section?.classList.contains('it-bottom-overlapping-content')).to.be.true;
    });

    it('passes it-aria-label to the section element', async () => {
      const label = 'In evidenza test';
      const el = await fixture<ItHero>(html`<it-hero it-aria-label="${label}"></it-hero>`);
      const section = el.shadowRoot?.querySelector('section');

      expect(section?.getAttribute('aria-label')).to.equal(label);
    });

    it('adds aria-labelledby when it-aria-label is not present and heading is in text slot', async () => {
      const el = await fixture<ItHero>(html`
        <it-hero>
          <div slot="text"><h2 id="hero-title">Titolo hero</h2></div>
        </it-hero>
      `);

      await elementUpdated(el);
      await waitUntil(
        () => !!el.shadowRoot?.querySelector('.container') || !!el.shadowRoot?.querySelector('slot[name="text"]'),
        'hero text slot did not render as expected',
      );
      await elementUpdated(el);

      const section = el.shadowRoot?.querySelector('section');
      const textContainer = el.shadowRoot?.querySelector('.container');
      const heading = el.querySelector('[slot="text"] h2') as HTMLHeadingElement | null;

      expect(section).to.exist;
      expect(textContainer).to.exist;
      expect(heading).to.exist;
      expect(heading?.id).to.equal('hero-title');
      expect(section?.getAttribute('aria-labelledby')).to.equal(heading?.id);
    });

    it('does not add aria-labelledby when it-aria-label is present', async () => {
      const el = await fixture<ItHero>(html`
        <it-hero it-aria-label="Hero accessibile">
          <div slot="text"><h3>Titolo hero</h3></div>
        </it-hero>
      `);

      await elementUpdated(el);

      const section = el.shadowRoot?.querySelector('section');
      expect(section?.getAttribute('aria-label')).to.equal('Hero accessibile');
      expect(section?.hasAttribute('aria-labelledby')).to.be.false;
    });

    it('removes aria-labelledby when it-aria-label is added dynamically', async () => {
      const el = await fixture<ItHero>(html`
        <it-hero>
          <div slot="text"><h2 id="hero-dynamic-title">Titolo hero</h2></div>
        </it-hero>
      `);

      await elementUpdated(el);

      const section = el.shadowRoot?.querySelector('section');
      expect(section?.getAttribute('aria-labelledby')).to.equal('hero-dynamic-title');

      el.setAttribute('it-aria-label', 'Hero aggiornata');
      await elementUpdated(el);

      expect(section?.getAttribute('aria-label')).to.equal('Hero aggiornata');
      expect(section?.hasAttribute('aria-labelledby')).to.be.false;
    });
  });

  describe('slots and conditional layouts', () => {
    it('renders the background wrapper only when background slot is populated', async () => {
      const el = await fixture<ItHero>(html`
        <it-hero>
          <img slot="background" src="test.jpg" alt="test" />
        </it-hero>
      `);

      // Attendiamo il trigger del @slotchange
      await elementUpdated(el);

      const bgWrapper = el.shadowRoot?.querySelector('.img-responsive-wrapper');
      expect(bgWrapper).to.exist;
      expect(bgWrapper?.getAttribute('part')).to.equal('img-responsive-wrapper');
    });

    it('renders the text container only when text slot is populated', async () => {
      const el = await fixture<ItHero>(html`
        <it-hero>
          <div slot="text"><h1>Hero Title</h1></div>
        </it-hero>
      `);

      await elementUpdated(el);

      const textContainer = el.shadowRoot?.querySelector('.container');
      expect(textContainer).to.exist;
      expect(textContainer?.getAttribute('part')).to.equal('text-container');
    });

    it('manages overlay classes correctly based on slots and overlay-color', async () => {
      // Caso 1: Entrambi gli slot presenti -> overlay default (dark)
      const el = await fixture<ItHero>(html`
        <it-hero>
          <img slot="background" src="x.jpg" alt="x" />
          <div slot="text">Text</div>
        </it-hero>
      `);
      await elementUpdated(el);

      const section = el.shadowRoot?.querySelector('section');
      expect(section?.classList.contains('it-overlay')).to.be.true;
      expect(section?.classList.contains('it-dark')).to.be.true;

      // Caso 2: Colore overlay custom
      el.overlayColor = 'primary';
      await elementUpdated(el);
      expect(section?.classList.contains('it-primary')).to.be.true;
    });
  });

  describe('dynamic updates', () => {
    it('updates state when slots are changed dynamically', async () => {
      const el = await fixture<ItHero>(html`<it-hero></it-hero>`);

      // Inizialmente non dovrebbe avere il wrapper dell'immagine
      expect(el.shadowRoot?.querySelector('.img-responsive-wrapper')).to.not.exist;

      // Aggiungiamo dinamicamente un elemento allo slot
      const img = document.createElement('img');
      img.setAttribute('slot', 'background');
      img.src = 'test.jpg';
      el.appendChild(img);

      // Attendiamo lo slotchange e il re-render
      await elementUpdated(el);

      expect(el.shadowRoot?.querySelector('.img-responsive-wrapper')).to.exist;
    });
  });
});
