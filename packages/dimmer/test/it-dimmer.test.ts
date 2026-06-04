/* eslint-disable no-plusplus */
/// <reference types="mocha"/>

import '@italia/dimmer';
import '@italia/button';
import '@italia/icon';
import { expect, fixture, html, aTimeout } from '@open-wc/testing';
import { type ItDimmer } from '@italia/dimmer';

describe('it-dimmer', () => {
  // ── rendering ──────────────────────────────────────────────────────────────

  describe('rendering', () => {
    it('renders with correct default attributes', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      expect(el).to.exist;
      expect(el.active).to.be.false;
      expect(el.variant).to.equal('primary');
      expect(el.iconName).to.equal('');
    });

    it('renders .dimmable wrapper', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      const dimmable = el.shadowRoot?.querySelector('.dimmable');
      expect(dimmable).to.exist;
    });

    it('renders .dimmer element inside .dimmable', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      const dimmer = el.shadowRoot?.querySelector('.dimmer');
      expect(dimmer).to.exist;
    });

    it('renders .dimmer-inner inside .dimmer', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      const inner = el.shadowRoot?.querySelector('.dimmer-inner');
      expect(inner).to.exist;
    });

    it('renders background (default) slot', async () => {
      const el = await fixture<ItDimmer>(html`
        <it-dimmer>
          <div id="bg">Contenuto di sfondo</div>
        </it-dimmer>
      `);

      const defaultSlot = el.shadowRoot?.querySelector('slot:not([name])');
      expect(defaultSlot).to.exist;

      const bg = el.querySelector('#bg');
      expect(bg?.textContent).to.equal('Contenuto di sfondo');
    });

    it('renders content slot', async () => {
      const el = await fixture<ItDimmer>(html`
        <it-dimmer>
          <p slot="content" id="overlay-text">Testo overlay</p>
        </it-dimmer>
      `);

      const contentSlot = el.shadowRoot?.querySelector('slot[name="content"]');
      expect(contentSlot).to.exist;

      const overlaytText = el.querySelector('#overlay-text');
      expect(overlaytText?.textContent).to.equal('Testo overlay');
    });

    it('does not render .dimmer-icon when iconName is empty', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      const iconWrapper = el.shadowRoot?.querySelector('.dimmer-icon');
      expect(iconWrapper).to.not.exist;
    });

    it('renders .dimmer-icon and it-icon when iconName is set', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer icon-name="it-info-circle"></it-dimmer>`);

      const iconWrapper = el.shadowRoot?.querySelector('.dimmer-icon');
      expect(iconWrapper).to.exist;

      const icon = el.shadowRoot?.querySelector('it-icon');
      expect(icon).to.exist;
      expect(icon?.getAttribute('name')).to.equal('it-info-circle');
      expect(icon?.getAttribute('color')).to.equal('white');
    });

    it('renders both slots together', async () => {
      const el = await fixture<ItDimmer>(html`
        <it-dimmer active>
          <p slot="content" id="msg">Overlay</p>
          <div id="bg">Sfondo</div>
        </it-dimmer>
      `);

      expect(el.querySelector('#msg')).to.exist;
      expect(el.querySelector('#bg')).to.exist;
    });
  });

  // ── active prop ────────────────────────────────────────────────────────────

  describe('active prop', () => {
    it('sets aria-hidden="true" on .dimmer when active=false', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      const dimmer = el.shadowRoot?.querySelector('.dimmer');
      expect(dimmer?.getAttribute('aria-hidden')).to.equal('true');
    });

    it('removes aria-hidden from .dimmer when active=true', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer active></it-dimmer>`);

      const dimmer = el.shadowRoot?.querySelector('.dimmer');
      expect(dimmer?.getAttribute('aria-hidden')).to.be.null;
    });

    it('updates aria-hidden when active changes', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);
      const dimmer = el.shadowRoot?.querySelector('.dimmer');

      expect(dimmer?.getAttribute('aria-hidden')).to.equal('true');

      el.active = true;
      await el.updateComplete;

      expect(dimmer?.getAttribute('aria-hidden')).to.be.null;
    });

    it('reflects active attribute to DOM', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      expect(el.hasAttribute('active')).to.be.false;

      el.active = true;
      await el.updateComplete;

      expect(el.hasAttribute('active')).to.be.true;
    });

    it('has only .dimmer (and optional .dimmer-{variant}) class — no .fade or .show', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer active></it-dimmer>`);
      const dimmer = el.shadowRoot?.querySelector('.dimmer')!;
      expect(dimmer.classList.contains('fade')).to.be.false;
      expect(dimmer.classList.contains('show')).to.be.false;
      expect(dimmer.classList.contains('dimmer')).to.be.true;
    });
  });

  // ── variant ────────────────────────────────────────────────────────────────

  describe('variant', () => {
    it('applies .dimmer-primary by default (default variant is primary)', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      const dimmer = el.shadowRoot?.querySelector('.dimmer');
      expect(dimmer?.classList.contains('dimmer-primary')).to.be.true;
    });

    it('does not apply .dimmer-primary when variant="dark"', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer variant="dark"></it-dimmer>`);

      const dimmer = el.shadowRoot?.querySelector('.dimmer');
      expect(dimmer?.classList.contains('dimmer-primary')).to.be.false;
      expect(dimmer?.classList.contains('dimmer-dark')).to.be.true;
    });

    it('updates .dimmer-primary class when variant changes from dark to primary', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer variant="dark"></it-dimmer>`);
      const dimmer = el.shadowRoot?.querySelector('.dimmer');

      expect(dimmer?.classList.contains('dimmer-primary')).to.be.false;

      el.variant = 'primary';
      await el.updateComplete;

      expect(dimmer?.classList.contains('dimmer-primary')).to.be.true;
    });

    it('reflects variant attribute to DOM', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer variant="primary"></it-dimmer>`);
      expect(el.getAttribute('variant')).to.equal('primary');
    });
  });

  // ── icon-name ──────────────────────────────────────────────────────────────

  describe('icon-name', () => {
    it('renders it-icon with the given icon name', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer icon-name="it-warning-circle"></it-dimmer>`);

      const icon = el.shadowRoot?.querySelector('it-icon');
      expect(icon?.getAttribute('name')).to.equal('it-warning-circle');
    });

    it('removes .dimmer-icon wrapper when iconName is cleared', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer icon-name="it-info-circle"></it-dimmer>`);

      expect(el.shadowRoot?.querySelector('.dimmer-icon')).to.exist;

      el.iconName = '';
      await el.updateComplete;

      expect(el.shadowRoot?.querySelector('.dimmer-icon')).to.not.exist;
    });

    it('reflects icon-name attribute', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer icon-name="it-lock"></it-dimmer>`);
      expect(el.getAttribute('icon-name')).to.equal('it-lock');
    });
  });

  // ── show/hide/toggle ───────────────────────────────────────────────────────

  describe('show()', () => {
    it('sets active to true', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      expect(el.active).to.be.false;
      el.show();
      await el.updateComplete;
      expect(el.active).to.be.true;
    });

    it('is a no-op when already active', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer active></it-dimmer>`);

      el.show();
      await el.updateComplete;
      expect(el.active).to.be.true;
    });
  });

  describe('hide()', () => {
    it('sets active to false after animation completes', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer active></it-dimmer>`);

      expect(el.active).to.be.true;
      await el.hide();
      expect(el.active).to.be.false;
    });

    it('is a no-op when already inactive', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      await el.hide();
      expect(el.active).to.be.false;
    });
  });

  describe('toggle()', () => {
    it('activates the dimmer when inactive', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      await el.toggle();
      expect(el.active).to.be.true;
    });

    it('deactivates the dimmer when active', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer active></it-dimmer>`);

      await el.toggle();
      expect(el.active).to.be.false;
    });

    it('can be called multiple times to alternate state', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      await el.toggle();
      expect(el.active).to.be.true;

      await el.toggle();
      expect(el.active).to.be.false;
    });
  });

  // ── events ─────────────────────────────────────────────────────────────────

  describe('events', () => {
    it('fires it-dimmer-show when show() is called', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      let fired = false;
      el.addEventListener('it-dimmer-show', () => {
        fired = true;
      });

      el.show();
      await el.updateComplete;
      await aTimeout(10);

      expect(fired).to.be.true;
    });

    it('fires it-dimmer-hide when hide() is called', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer active></it-dimmer>`);

      let fired = false;
      el.addEventListener('it-dimmer-hide', () => {
        fired = true;
      });

      await el.hide();
      await el.updateComplete;

      expect(fired).to.be.true;
    });

    it('fires it-dimmer-show when active is set to true programmatically', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      let eventDetail: any = null;
      el.addEventListener('it-dimmer-show', (e: Event) => {
        eventDetail = (e as CustomEvent).detail;
      });

      el.active = true;
      await el.updateComplete;
      await aTimeout(10);

      expect(eventDetail).to.exist;
      expect(eventDetail.dimmer).to.equal(el);
    });

    it('fires it-dimmer-hide when active is set to false programmatically', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer active></it-dimmer>`);

      let eventDetail: any = null;
      el.addEventListener('it-dimmer-hide', (e: Event) => {
        eventDetail = (e as CustomEvent).detail;
      });

      el.active = false;
      await el.updateComplete;
      await aTimeout(10);

      expect(eventDetail).to.exist;
      expect(eventDetail.dimmer).to.equal(el);
    });

    it('does not fire it-dimmer-show when already active', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer active></it-dimmer>`);
      await aTimeout(10);

      let count = 0;
      el.addEventListener('it-dimmer-show', () => {
        count++;
      });

      el.show(); // no-op
      await el.updateComplete;
      await aTimeout(10);

      expect(count).to.equal(0);
    });

    it('does not fire it-dimmer-hide when already inactive', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);
      await aTimeout(10);

      let count = 0;
      el.addEventListener('it-dimmer-hide', () => {
        count++;
      });

      el.hide(); // no-op
      await el.updateComplete;
      await aTimeout(10);

      expect(count).to.equal(0);
    });

    it('events bubble and are composed', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      let showBubbled = false;
      document.addEventListener(
        'it-dimmer-show',
        () => {
          showBubbled = true;
        },
        { once: true },
      );

      el.show();
      await el.updateComplete;
      await aTimeout(10);

      expect(showBubbled).to.be.true;
    });
  });

  // ── auto-styling ───────────────────────────────────────────────────────────

  describe('auto-styling of slotted components', () => {
    it('sets color="inverse" on slotted it-icon', async () => {
      const el = await fixture<ItDimmer>(html`
        <it-dimmer>
          <it-icon slot="content" name="it-info-circle" id="slotted-icon"></it-icon>
        </it-dimmer>
      `);
      await aTimeout(50);

      const icon = el.querySelector('#slotted-icon');
      expect(icon?.getAttribute('color')).to.equal('inverse');
    });

    it('sets color="inverse" on it-icon nested in content slot', async () => {
      const el = await fixture<ItDimmer>(html`
        <it-dimmer>
          <div slot="content">
            <it-icon name="it-info-circle" id="nested-icon"></it-icon>
          </div>
        </it-dimmer>
      `);
      await aTimeout(50);

      const icon = el.querySelector('#nested-icon');
      expect(icon?.getAttribute('color')).to.equal('inverse');
    });
  });

  // ── accessibility ──────────────────────────────────────────────────────────

  describe('accessibility', () => {
    it('.dimmer has aria-hidden="true" by default (hidden from AT)', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      const dimmer = el.shadowRoot?.querySelector('.dimmer');
      expect(dimmer?.getAttribute('aria-hidden')).to.equal('true');
    });

    it('removes aria-hidden from .dimmer when active — visible to AT', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer active></it-dimmer>`);

      const dimmer = el.shadowRoot?.querySelector('.dimmer');
      expect(dimmer?.getAttribute('aria-hidden')).to.be.null;
    });

    it('sets inert on background slot elements when active', async () => {
      const el = await fixture<ItDimmer>(html`
        <it-dimmer>
          <div id="bg">Sfondo</div>
        </it-dimmer>
      `);
      const bg = el.querySelector('#bg')!;
      expect(bg.hasAttribute('inert')).to.be.false;

      el.active = true;
      await el.updateComplete;

      expect(bg.hasAttribute('inert')).to.be.true;
    });

    it('removes inert from background slot elements when hidden', async () => {
      const el = await fixture<ItDimmer>(html`
        <it-dimmer active>
          <div id="bg">Sfondo</div>
        </it-dimmer>
      `);
      await el.updateComplete;
      const bg = el.querySelector('#bg')!;
      expect(bg.hasAttribute('inert')).to.be.true;

      el.active = false;
      await el.updateComplete;

      expect(bg.hasAttribute('inert')).to.be.false;
    });

    it('keeps inert after firstUpdated rAF re-application (Firefox first-load guard)', async () => {
      const el = await fixture<ItDimmer>(html`
        <it-dimmer active>
          <div id="bg">Sfondo</div>
        </it-dimmer>
      `);
      const bg = el.querySelector('#bg')!;
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve());
      });
      expect(bg.hasAttribute('inert')).to.be.true;
    });

    it('has part="dimmable" on wrapper', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      const dimmable = el.shadowRoot?.querySelector('[part~="dimmable"]');
      expect(dimmable).to.exist;
    });

    it('has part="dimmer" on overlay element', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);

      const dimmer = el.shadowRoot?.querySelector('[part~="dimmer"]');
      expect(dimmer).to.exist;
    });
  });

  // ── parts ──────────────────────────────────────────────────────────────────

  describe('CSS parts', () => {
    it('exposes part="dimmable"', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);
      expect(el.shadowRoot?.querySelector('[part~="dimmable"]')).to.exist;
    });

    it('exposes part="dimmer"', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);
      expect(el.shadowRoot?.querySelector('[part~="dimmer"]')).to.exist;
    });

    it('exposes part="dimmer-inner"', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);
      expect(el.shadowRoot?.querySelector('[part~="dimmer-inner"]')).to.exist;
    });

    it('exposes part="content" on content slot', async () => {
      const el = await fixture<ItDimmer>(html`<it-dimmer></it-dimmer>`);
      expect(el.shadowRoot?.querySelector('slot[part~="content"]')).to.exist;
    });
  });
});
