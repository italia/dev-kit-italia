/// <reference types="mocha"/>

import '@italia/card';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import type { ItCard } from '@italia/card';

describe('<it-card>', () => {
  describe('structure and rendering', () => {
    it('renders a card with default classes', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article).to.exist;
      expect(article?.classList.contains('it-card')).to.be.true;
      expect(article?.classList.contains('rounded')).to.be.true;
      expect(article?.classList.contains('shadow-sm')).to.be.true;
      expect(article?.classList.contains('border')).to.be.true;
    });

    it('renders the title slot with correct heading level', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const heading = el.shadowRoot?.querySelector('h3');
      expect(heading).to.exist;
      expect(heading?.classList.contains('it-card-title')).to.be.true;
    });

    it('renders without image wrapper when no image slot is provided', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const imageWrapper = el.shadowRoot?.querySelector('.it-card-image-wrapper');
      expect(imageWrapper).to.not.exist;
    });

    it('is accessible', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await expect(el).to.be.accessible();
    });
  });

  describe('property: fullHeight', () => {
    it('applies full height class when fullHeight is true', async () => {
      const el = await fixture<ItCard>(html`
        <it-card full-height>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-height-full')).to.be.true;
    });

    it('does not apply full height class when fullHeight is false', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-height-full')).to.be.false;
    });
  });

  describe('property: shadow', () => {
    it('applies shadow-sm class by default', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('shadow-sm')).to.be.true;
    });

    it('applies shadow-none class when shadow is "none"', async () => {
      const el = await fixture<ItCard>(html`
        <it-card shadow="none">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('shadow-none')).to.be.true;
    });

    it('applies shadow-md class when shadow is "md"', async () => {
      const el = await fixture<ItCard>(html`
        <it-card shadow="md">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('shadow-md')).to.be.true;
    });

    it('applies shadow-lg class when shadow is "lg"', async () => {
      const el = await fixture<ItCard>(html`
        <it-card shadow="lg">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('shadow-lg')).to.be.true;
    });
  });

  describe('property: border', () => {
    it('applies border class by default', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('border')).to.be.true;
    });

    it('applies border-0 class when border is "0"', async () => {
      const el = await fixture<ItCard>(html`
        <it-card border="0">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('border-0')).to.be.true;
      expect(article?.classList.contains('border')).to.be.false;
    });
  });

  describe('property: borderTop', () => {
    const colors: Array<'primary' | 'secondary' | 'success' | 'danger' | 'warning'> = [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
    ];

    colors.forEach((color) => {
      it(`applies border-top-${color} class when borderTop is "${color}"`, async () => {
        const el = await fixture<ItCard>(html`
          <it-card border-top="${color}">
            <span slot="title">Card Title</span>
          </it-card>
        `);

        const article = el.shadowRoot?.querySelector('article');
        expect(article?.classList.contains('it-card-border-top')).to.be.true;
        expect(article?.classList.contains(`it-card-border-top-${color}`)).to.be.true;
      });
    });

    it('does not apply border-top classes when borderTop is not set', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-border-top')).to.be.false;
    });
  });

  describe('property: headingLevel', () => {
    const levels: Array<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    levels.forEach((level) => {
      it(`renders ${level} when headingLevel is "${level}"`, async () => {
        const el = await fixture<ItCard>(html`
          <it-card heading-level="${level}">
            <span slot="title">Card Title</span>
          </it-card>
        `);

        await elementUpdated(el);

        const heading = el.shadowRoot?.querySelector(level);
        expect(heading).to.exist;
      });
    });

    it('defaults to h3 when headingLevel is not specified', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const heading = el.shadowRoot?.querySelector('h3');
      expect(heading).to.exist;
    });
  });

  describe('property: headingSize', () => {
    it('applies h4 CSS class to the title when heading-size is "sm"', async () => {
      const el = await fixture<ItCard>(html`
        <it-card heading-size="sm">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const heading = el.shadowRoot?.querySelector('h3');
      expect(heading).to.exist;
      expect(heading?.classList.contains('h4')).to.be.true;
      expect(heading?.classList.contains('h3')).to.be.false;
    });

    it('applies h3 CSS class to the title when heading-size is "md"', async () => {
      const el = await fixture<ItCard>(html`
        <it-card heading-size="md">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const heading = el.shadowRoot?.querySelector('h3');
      expect(heading).to.exist;
      expect(heading?.classList.contains('h3')).to.be.true;
      expect(heading?.classList.contains('h4')).to.be.false;
    });

    it('does not apply h4 or h3 CSS class to the title when heading-size is not set (default variant)', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const heading = el.shadowRoot?.querySelector('h3');
      expect(heading).to.exist;
      expect(heading?.classList.contains('h4')).to.be.false;
      expect(heading?.classList.contains('h3')).to.be.false;
    });

    it('applies h4 CSS class when heading-size is "sm" on variant inline-mini (same result as default variant behavior)', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-mini" heading-size="sm">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const heading = el.shadowRoot?.querySelector('h3');
      expect(heading).to.exist;
      expect(heading?.classList.contains('h4')).to.be.true;
    });

    it('overrides inline-mini variant h4 CSS class to h3 when heading-size is "md"', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-mini" heading-size="md">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const heading = el.shadowRoot?.querySelector('h3');
      expect(heading).to.exist;
      expect(heading?.classList.contains('h3')).to.be.true;
      expect(heading?.classList.contains('h4')).to.be.false;
    });

    it('applies h4 CSS class when heading-size is "sm" on default variant (overrides default absence of size class)', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="default" heading-size="sm">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const heading = el.shadowRoot?.querySelector('h3');
      expect(heading).to.exist;
      expect(heading?.classList.contains('h4')).to.be.true;
      expect(heading?.classList.contains('h3')).to.be.false;
    });

    it('updates title CSS class when headingSize property changes dynamically', async () => {
      const el = await fixture<ItCard>(html`
        <it-card heading-size="sm">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      let heading = el.shadowRoot?.querySelector('h3');
      expect(heading?.classList.contains('h4')).to.be.true;
      expect(heading?.classList.contains('h3')).to.be.false;

      el.headingSize = 'md';
      await elementUpdated(el);

      heading = el.shadowRoot?.querySelector('h3');
      expect(heading?.classList.contains('h3')).to.be.true;
      expect(heading?.classList.contains('h4')).to.be.false;
    });
  });

  describe('variant: default', () => {
    it('renders default card without variant-specific classes', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="default">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-inline')).to.be.false;
      expect(article?.classList.contains('it-card-profile')).to.be.false;
      expect(article?.classList.contains('it-card-banner')).to.be.false;
    });

    it('renders image wrapper with correct ratio for default variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="default">
          <span slot="title">Card Title</span>
          <img slot="image" src="test.jpg" alt="test" />
        </it-card>
      `);

      await elementUpdated(el);

      const imageWrapper = el.shadowRoot?.querySelector('.it-card-image-wrapper');
      const ratioDiv = el.shadowRoot?.querySelector('.ratio-16x9');
      expect(imageWrapper).to.exist;
      expect(ratioDiv).to.exist;
    });
  });

  describe('variant: inline', () => {
    it('applies inline class for inline variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-inline')).to.be.true;
    });

    it('applies inline and reverse classes for inline-reverse variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-reverse">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-inline')).to.be.true;
      expect(article?.classList.contains('it-card-inline-reverse')).to.be.true;
    });

    it('applies inline and mini classes for inline-mini variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-mini">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-inline')).to.be.true;
      expect(article?.classList.contains('it-card-inline-mini')).to.be.true;
    });

    it('applies inline, mini and reverse classes for inline-mini-reverse variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-mini-reverse">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-inline')).to.be.true;
      expect(article?.classList.contains('it-card-inline-mini')).to.be.true;
      expect(article?.classList.contains('it-card-inline-reverse')).to.be.true;
    });

    it('renders inline content wrapper for inline variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const inlineContent = el.shadowRoot?.querySelector('.it-card-inline-content');
      expect(inlineContent).to.exist;
    });

    it('uses 1x1 ratio by default for inline variants', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline">
          <span slot="title">Card Title</span>
          <img slot="image" src="test.jpg" alt="test" />
        </it-card>
      `);

      await elementUpdated(el);

      const ratioDiv = el.shadowRoot?.querySelector('.ratio-1x1');
      expect(ratioDiv).to.exist;
    });

    it('renders title with h4 class for inline-mini variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-mini">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const heading = el.shadowRoot?.querySelector('h3');
      expect(heading?.classList.contains('h4')).to.be.true;
    });
  });

  describe('variant: profile', () => {
    it('applies profile class for profile variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="profile">
          <span slot="title">John Doe</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-profile')).to.be.true;
    });

    it('renders profile header structure', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="profile">
          <span slot="title">John Doe</span>
        </it-card>
      `);

      const profileHeader = el.shadowRoot?.querySelector('.it-card-profile-header');
      const profileContent = el.shadowRoot?.querySelector('.it-card-profile-content');
      expect(profileHeader).to.exist;
      expect(profileContent).to.exist;
    });

    it('renders profile name instead of card title', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="profile">
          <span slot="title">John Doe</span>
        </it-card>
      `);

      await elementUpdated(el);

      const profileName = el.shadowRoot?.querySelector('.it-card-profile-name');
      expect(profileName).to.exist;
      expect(profileName?.tagName.toLowerCase()).to.equal('h3');
      expect(profileName?.classList.contains('h4')).to.be.true;
    });

    it('renders profile role for subtitle slot', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="profile">
          <span slot="title">John Doe</span>
          <span slot="subtitle">Software Engineer</span>
        </it-card>
      `);

      await elementUpdated(el);

      const profileRole = el.shadowRoot?.querySelector('.it-card-profile-role');
      expect(profileRole).to.exist;
    });
  });

  describe('variant: location', () => {
    it('applies profile class for location variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="location">
          <span slot="title">Location Name</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-profile')).to.be.true;
    });

    it('renders location header structure', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="location">
          <span slot="title">Location Name</span>
        </it-card>
      `);

      const profileHeader = el.shadowRoot?.querySelector('.it-card-profile-header');
      const profile = el.shadowRoot?.querySelector('.it-card-profile');
      expect(profileHeader).to.exist;
      expect(profile).to.exist;
    });

    it('renders place type for subtitle slot', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="location">
          <span slot="title">Location Name</span>
          <span slot="subtitle">Museum</span>
        </it-card>
      `);

      await elementUpdated(el);

      const placeType = el.shadowRoot?.querySelector('.it-card-place-type');
      expect(placeType).to.exist;
    });

    it('renders location profile image with correct aspect ratio', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="location">
          <span slot="title">Location Name</span>
          <img slot="image" src="test.jpg" alt="test" />
        </it-card>
      `);

      await elementUpdated(el);

      const profileImage = el.shadowRoot?.querySelector('.it-card-profile-image');
      const ratioDiv = el.shadowRoot?.querySelector('.ratio-1x1');
      expect(profileImage).to.exist;
      expect(ratioDiv).to.exist;
    });
  });

  describe('variant: banner', () => {
    it('applies banner class for banner variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="banner">
          <span slot="title">Banner Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-banner')).to.be.true;
    });

    it('renders banner icon wrapper for image slot', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="banner">
          <span slot="title">Banner Title</span>
          <it-icon slot="image" name="it-star-full"></it-icon>
        </it-card>
      `);

      await elementUpdated(el);

      const bannerIconWrapper = el.shadowRoot?.querySelector('.it-card-banner-icon-wrapper');
      expect(bannerIconWrapper).to.exist;
    });

    it('applies banner and inline classes for inline-banner variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-banner">
          <span slot="title">Banner Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-banner')).to.be.true;
      expect(article?.classList.contains('it-card-inline')).to.be.true;
    });

    it('applies correct classes for inline-banner-reverse variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-banner-reverse">
          <span slot="title">Banner Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-banner')).to.be.true;
      expect(article?.classList.contains('it-card-inline')).to.be.true;
      expect(article?.classList.contains('it-card-inline-reverse')).to.be.true;
    });

    it('applies correct classes for inline-banner-mini variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-banner-mini">
          <span slot="title">Banner Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-banner')).to.be.true;
      expect(article?.classList.contains('it-card-inline')).to.be.true;
      expect(article?.classList.contains('it-card-inline-mini')).to.be.true;
    });

    it('applies correct classes for inline-banner-mini-reverse variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline-banner-mini-reverse">
          <span slot="title">Banner Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-banner')).to.be.true;
      expect(article?.classList.contains('it-card-inline')).to.be.true;
      expect(article?.classList.contains('it-card-inline-mini')).to.be.true;
      expect(article?.classList.contains('it-card-inline-reverse')).to.be.true;
    });
  });

  describe('property: ratio', () => {
    const ratios: Array<'1x1' | '4x3' | '16x9' | '21x9'> = ['1x1', '4x3', '16x9', '21x9'];

    ratios.forEach((ratio) => {
      it(`applies ratio-${ratio} class when ratio is "${ratio}"`, async () => {
        const el = await fixture<ItCard>(html`
          <it-card ratio="${ratio}">
            <span slot="title">Card Title</span>
            <img slot="image" src="test.jpg" alt="test" />
          </it-card>
        `);

        await elementUpdated(el);

        const ratioDiv = el.shadowRoot?.querySelector(`.ratio-${ratio}`);
        expect(ratioDiv).to.exist;
      });
    });

    it('defaults to 16x9 for default variant without explicit ratio', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="default">
          <span slot="title">Card Title</span>
          <img slot="image" src="test.jpg" alt="test" />
        </it-card>
      `);

      await elementUpdated(el);

      const ratioDiv = el.shadowRoot?.querySelector('.ratio-16x9');
      expect(ratioDiv).to.exist;
    });

    it('defaults to 1x1 for inline variant without explicit ratio', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline">
          <span slot="title">Card Title</span>
          <img slot="image" src="test.jpg" alt="test" />
        </it-card>
      `);

      await elementUpdated(el);

      const ratioDiv = el.shadowRoot?.querySelector('.ratio-1x1');
      expect(ratioDiv).to.exist;
    });

    it('defaults to 1x1 for location variant without explicit ratio', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="location">
          <span slot="title">Location Name</span>
          <img slot="image" src="test.jpg" alt="test" />
        </it-card>
      `);

      await elementUpdated(el);

      const ratioDiv = el.shadowRoot?.querySelector('.ratio-1x1');
      expect(ratioDiv).to.exist;
    });
  });

  describe('slots: content slots', () => {
    it('renders subtitle within card body', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
          <span slot="subtitle">Card Subtitle</span>
        </it-card>
      `);

      await elementUpdated(el);

      const cardBody = el.shadowRoot?.querySelector('.it-card-body');
      const subtitle = el.shadowRoot?.querySelector('.it-card-subtitle');
      expect(cardBody).to.exist;
      expect(subtitle).to.exist;
    });

    it('renders signature within card body', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
          <span slot="signature">By Author</span>
        </it-card>
      `);

      await elementUpdated(el);

      const cardBody = el.shadowRoot?.querySelector('.it-card-body');
      const signature = el.shadowRoot?.querySelector('.it-card-signature');
      expect(cardBody).to.exist;
      expect(signature).to.exist;
      expect(signature?.tagName.toLowerCase()).to.equal('address');
    });

    it('renders text within card body', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
          <span slot="text">Card description text</span>
        </it-card>
      `);

      await elementUpdated(el);

      const cardBody = el.shadowRoot?.querySelector('.it-card-body');
      const text = el.shadowRoot?.querySelector('.it-card-text');
      expect(cardBody).to.exist;
      expect(text).to.exist;
      expect(text?.tagName.toLowerCase()).to.equal('p');
    });

    it('renders body slot within card body', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
          <div slot="body">Custom body content</div>
        </it-card>
      `);

      await elementUpdated(el);

      const cardBody = el.shadowRoot?.querySelector('.it-card-body');
      expect(cardBody).to.exist;
    });

    it('renders footer slot', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
          <div slot="footer">Footer content</div>
        </it-card>
      `);

      await elementUpdated(el);

      const cardFooter = el.shadowRoot?.querySelector('.it-card-footer');
      expect(cardFooter).to.exist;
      expect(cardFooter?.tagName.toLowerCase()).to.equal('footer');
    });

    it('renders actions slot', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
          <div slot="actions"><button>Action</button></div>
        </it-card>
      `);

      await elementUpdated(el);

      const cardActions = el.shadowRoot?.querySelector('.it-card-actions');
      expect(cardActions).to.exist;
    });

    it('renders image slot with wrapper for default variant', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
          <img slot="image" src="test.jpg" alt="test" />
        </it-card>
      `);

      await elementUpdated(el);

      const imageWrapper = el.shadowRoot?.querySelector('.it-card-image-wrapper');
      const slotElement = el.shadowRoot?.querySelector('slot[name="image"]');
      expect(imageWrapper).to.exist;
      expect(slotElement).to.exist;
    });

    it('does not render wrappers when slots are empty', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const cardBody = el.shadowRoot?.querySelector('.it-card-body');
      const cardFooter = el.shadowRoot?.querySelector('.it-card-footer');
      const cardActions = el.shadowRoot?.querySelector('.it-card-actions');
      const imageWrapper = el.shadowRoot?.querySelector('.it-card-image-wrapper');

      expect(cardBody).to.not.exist;
      expect(cardFooter).to.not.exist;
      expect(cardActions).to.not.exist;
      expect(imageWrapper).to.not.exist;
    });
  });

  describe('slots: title with icon', () => {
    it('applies title-icon class when title contains icon wrapper', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <a slot="title" href="#">
            Card Title with Icon
            <div class="it-card-title-icon-wrapper">
              <it-icon name="it-star-full"></it-icon>
            </div>
          </a>
        </it-card>
      `);

      await elementUpdated(el);

      const title = el.shadowRoot?.querySelector('.it-card-title');
      expect(title?.classList.contains('it-card-title-icon')).to.be.true;
    });

    it('does not apply title-icon class when title has no icon', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      const title = el.shadowRoot?.querySelector('.it-card-title');
      expect(title?.classList.contains('it-card-title-icon')).to.be.false;
    });
  });

  describe('dynamic updates', () => {
    it('updates when variant property changes', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="default">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      let article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-inline')).to.be.false;

      el.variant = 'inline';
      await elementUpdated(el);

      article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-inline')).to.be.true;
    });

    it('updates when shadow property changes', async () => {
      const el = await fixture<ItCard>(html`
        <it-card shadow="sm">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      let article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('shadow-sm')).to.be.true;

      el.shadow = 'lg';
      await elementUpdated(el);

      article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('shadow-lg')).to.be.true;
      expect(article?.classList.contains('shadow-sm')).to.be.false;
    });

    it('updates when fullHeight property changes', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      let article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-height-full')).to.be.false;

      el.fullHeight = true;
      await elementUpdated(el);

      article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-height-full')).to.be.true;
    });

    it('updates when borderTop property changes', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      let article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-border-top')).to.be.false;

      el.borderTop = 'primary';
      await elementUpdated(el);

      article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-border-top')).to.be.true;
      expect(article?.classList.contains('it-card-border-top-primary')).to.be.true;
    });

    it('updates when headingLevel property changes', async () => {
      const el = await fixture<ItCard>(html`
        <it-card heading-level="h3">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      let heading = el.shadowRoot?.querySelector('h3');
      expect(heading).to.exist;

      el.headingLevel = 'h2';
      await elementUpdated(el);

      heading = el.shadowRoot?.querySelector('h2');
      expect(heading).to.exist;
    });

    it('updates rendering when slots are added dynamically', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
        </it-card>
      `);

      await elementUpdated(el);

      let imageWrapper = el.shadowRoot?.querySelector('.it-card-image-wrapper');
      expect(imageWrapper).to.not.exist;

      // Aggiungi dinamicamente un'immagine
      const img = document.createElement('img');
      img.setAttribute('slot', 'image');
      img.src = 'test.jpg';
      img.alt = 'test';
      el.appendChild(img);

      await elementUpdated(el);

      imageWrapper = el.shadowRoot?.querySelector('.it-card-image-wrapper');
      expect(imageWrapper).to.exist;
    });
  });

  describe('complex combinations', () => {
    it('renders inline variant with full height, shadow lg, and primary border top', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline" full-height shadow="lg" border-top="primary">
          <span slot="title">Card Title</span>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-inline')).to.be.true;
      expect(article?.classList.contains('it-card-height-full')).to.be.true;
      expect(article?.classList.contains('shadow-lg')).to.be.true;
      expect(article?.classList.contains('it-card-border-top')).to.be.true;
      expect(article?.classList.contains('it-card-border-top-primary')).to.be.true;
    });

    it('renders profile variant with all content slots', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="profile">
          <span slot="title">John Doe</span>
          <span slot="subtitle">Software Engineer</span>
          <span slot="text">Bio text goes here</span>
          <img slot="image" src="profile.jpg" alt="Profile" />
          <div slot="footer">Footer content</div>
          <div slot="actions"><button>Contact</button></div>
        </it-card>
      `);

      await elementUpdated(el);

      const profileHeader = el.shadowRoot?.querySelector('.it-card-profile-header');
      const profileRole = el.shadowRoot?.querySelector('.it-card-profile-role');
      const cardBody = el.shadowRoot?.querySelector('.it-card-body');
      const cardFooter = el.shadowRoot?.querySelector('.it-card-footer');
      const cardActions = el.shadowRoot?.querySelector('.it-card-actions');

      expect(profileHeader).to.exist;
      expect(profileRole).to.exist;
      expect(cardBody).to.exist;
      expect(cardFooter).to.exist;
      expect(cardActions).to.exist;
    });

    it('renders banner variant without border and with custom ratio', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="banner" border="0" ratio="4x3">
          <span slot="title">Banner Title</span>
          <it-icon slot="image" name="it-star-full"></it-icon>
        </it-card>
      `);

      const article = el.shadowRoot?.querySelector('article');
      expect(article?.classList.contains('it-card-banner')).to.be.true;
      expect(article?.classList.contains('border-0')).to.be.true;
    });

    it('renders card with multiple text content slots', async () => {
      const el = await fixture<ItCard>(html`
        <it-card>
          <span slot="title">Card Title</span>
          <span slot="subtitle">Card Subtitle</span>
          <span slot="signature">By Author</span>
          <span slot="text">Card description</span>
          <div slot="body">Additional body content</div>
        </it-card>
      `);

      await elementUpdated(el);

      const cardBody = el.shadowRoot?.querySelector('.it-card-body');
      const subtitle = el.shadowRoot?.querySelector('.it-card-subtitle');
      const signature = el.shadowRoot?.querySelector('.it-card-signature');
      const text = el.shadowRoot?.querySelector('.it-card-text');

      expect(cardBody).to.exist;
      expect(subtitle).to.exist;
      expect(signature).to.exist;
      expect(text).to.exist;
    });

    it('is accessible with complex content', async () => {
      const el = await fixture<ItCard>(html`
        <it-card variant="inline" full-height shadow="md" border-top="success">
          <span slot="title">Accessible Card</span>
          <span slot="subtitle">Subtitle</span>
          <span slot="text">Description text for accessibility testing</span>
          <img slot="image" src="test.jpg" alt="Descriptive alt text" />
          <div slot="footer"><a href="#">Read more</a></div>
        </it-card>
      `);

      await expect(el).to.be.accessible();
    });
  });
});
