/// <reference types="mocha"/>

import { fixture, html, expect, oneEvent } from '@open-wc/testing';
import '@italia/button';
import '@italia/dropdown';
import '@italia/popover';
import type { ItDropdown } from '@italia/dropdown';

describe('<it-dropdown>', () => {
  describe('Accessibility', () => {
    it('is accessible', async () => {
      const el = await fixture<ItDropdown>(
        html`<it-dropdown label="Apri menu">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
          <it-dropdown-item href="#">Azione 2</it-dropdown-item>
          <it-dropdown-item href="#">Azione 3</it-dropdown-item>
        </it-dropdown>`,
      );
      await el.updateComplete;
      await expect(el).to.be.accessible();
    });

    it('has correct aria attributes', async () => {
      const el = await fixture<ItDropdown>(
        html`<it-dropdown label="Test menu">
          <it-dropdown-item href="#">Item 1</it-dropdown-item>
        </it-dropdown>`,
      );
      await el.updateComplete;

      const button = el.shadowRoot!.querySelector('it-button')!.shadowRoot!.querySelector('button')!;
      expect(button.getAttribute('aria-haspopup')).to.equal('menu');
      expect(button.getAttribute('aria-expanded')).to.equal('false');

      const menu = el.shadowRoot!.querySelector('.dropdown-menu')!;
      const buttonId = button.getAttribute('id')!;
      expect(menu.getAttribute('aria-labelledby')).to.equal(buttonId);
    });

    it('sets correct role attributes based on role property', async () => {
      const el = await fixture<ItDropdown>(
        html`<it-dropdown it-role="tree" label="Test menu">
          <it-dropdown-item href="#">Item 1</it-dropdown-item>
        </it-dropdown>`,
      );
      await el.updateComplete;

      const list = el.shadowRoot!.querySelector('ul.link-list')!;
      expect(list.getAttribute('role')).to.equal('tree');
    });
  });

  describe('Basic functionality', () => {
    it('renders with custom label', async () => {
      const el = await fixture<ItDropdown>(html`<it-dropdown label="Custom Menu"></it-dropdown>`);
      await el.updateComplete;

      const button = el.shadowRoot!.querySelector('it-button')!;
      expect(button.textContent?.trim()).to.include('Custom Menu');
    });

    it('renders dropdown items', async () => {
      const el = await fixture<ItDropdown>(
        html`<it-dropdown label="Test menu">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
          <it-dropdown-item href="#">Azione 2</it-dropdown-item>
          <it-dropdown-item href="#">Azione 3</it-dropdown-item>
        </it-dropdown>`,
      );
      await el.updateComplete;

      const items = el.querySelectorAll('it-dropdown-item');
      expect(items.length).to.equal(3);
    });
  });

  describe('Popover behavior', () => {
    it('toggles popover on trigger click and updates aria-expanded', async () => {
      const el = await fixture<ItDropdown>(
        html`<it-dropdown label="Test menu">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
        </it-dropdown>`,
      );
      await el.updateComplete;

      const button = el.shadowRoot!.querySelector('it-button')!.shadowRoot!.querySelector('button')!;
      const menu = el.shadowRoot!.querySelector('.dropdown-menu')!;

      // Initially closed
      expect(button.getAttribute('aria-expanded')).to.equal('false');
      expect(menu.classList.contains('show')).to.be.false;

      // Open popover
      button.click();
      await oneEvent(el.shadowRoot!.querySelector('it-popover')!, 'popover-open');

      expect(button.getAttribute('aria-expanded')).to.equal('true');
      expect(menu.classList.contains('show')).to.be.true;

      // Close popover
      button.click();
      await oneEvent(el.shadowRoot!.querySelector('it-popover')!, 'popover-close');

      expect(button.getAttribute('aria-expanded')).to.equal('false');
      expect(menu.classList.contains('show')).to.be.false;
    });

    it('does not open popover when disabled', async () => {
      const el = await fixture<ItDropdown>(
        html`<it-dropdown disabled label="Test menu">
          <it-dropdown-item href="#">Azione 1</it-dropdown-item>
        </it-dropdown>`,
      );
      await el.updateComplete;

      const button = el.shadowRoot!.querySelector('it-button')!.shadowRoot!.querySelector('button')!;
      const menu = el.shadowRoot!.querySelector('.dropdown-menu')!;

      expect(button.hasAttribute('aria-disabled')).to.be.true;

      button.click();
      await el.updateComplete;

      expect(button.getAttribute('aria-expanded')).to.equal('false');
      expect(menu.classList.contains('show')).to.be.false;
    });
  });

  describe('Button variants', () => {
    it('applies primary variant by default', async () => {
      const el = await fixture<ItDropdown>(html`<it-dropdown label="Test menu"></it-dropdown>`);
      await el.updateComplete;

      const button = el.shadowRoot!.querySelector('it-button')!;
      expect(button.getAttribute('variant')).to.equal('primary');
    });

    it('applies different variants correctly', async () => {
      const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'light'];

      for (const variant of variants) {
        // eslint-disable-next-line no-await-in-loop
        const el = await fixture<ItDropdown>(html`<it-dropdown variant="${variant}" label="Test menu"></it-dropdown>`);
        // eslint-disable-next-line no-await-in-loop
        await el.updateComplete;

        const button = el.shadowRoot!.querySelector('it-button')!;
        expect(button.getAttribute('variant')).to.equal(variant);
      }
    });

    it('applies different sizes correctly', async () => {
      const sizes = ['sm', 'lg'];

      for (const size of sizes) {
        // eslint-disable-next-line no-await-in-loop
        const el = await fixture<ItDropdown>(html`<it-dropdown size="${size}"></it-dropdown>`);
        // eslint-disable-next-line no-await-in-loop
        await el.updateComplete;

        const button = el.shadowRoot!.querySelector('it-button')!;
        expect(button.getAttribute('size')).to.equal(size);
      }
    });
  });

  describe('Icon rendering', () => {
    it('shows expand icon when closed', async () => {
      const el = await fixture<ItDropdown>(html`<it-dropdown></it-dropdown>`);
      await el.updateComplete;

      const icon = el.shadowRoot!.querySelector('it-icon')!;
      expect(icon.getAttribute('name')).to.equal('it-expand');
    });

    it('shows collapse icon when opened', async () => {
      const el = await fixture<ItDropdown>(html`<it-dropdown></it-dropdown>`);
      await el.updateComplete;

      const button = el.shadowRoot!.querySelector('it-button')!;
      button.click();
      await oneEvent(el.shadowRoot!.querySelector('it-popover')!, 'popover-open');

      const icon = el.shadowRoot!.querySelector('it-icon')!;
      expect(icon.getAttribute('name')).to.equal('it-collapse');
    });
  });

  describe('Dropdown menu styling', () => {
    it('applies dark class when dark property is true', async () => {
      const el = await fixture<ItDropdown>(html`<it-dropdown dark></it-dropdown>`);
      await el.updateComplete;

      const menu = el.shadowRoot!.querySelector('.dropdown-menu')!;
      expect(menu.classList.contains('dark')).to.be.true;
    });

    it('applies full-width class when fullWidth property is true', async () => {
      const el = await fixture<ItDropdown>(html`<it-dropdown full-width></it-dropdown>`);
      await el.updateComplete;

      const menu = el.shadowRoot!.querySelector('.dropdown-menu')!;
      expect(menu.classList.contains('full-width')).to.be.true;
    });

    it('applies show class when popover is open', async () => {
      const el = await fixture<ItDropdown>(html`<it-dropdown></it-dropdown>`);
      await el.updateComplete;

      const button = el.shadowRoot!.querySelector('it-button')!;
      const menu = el.shadowRoot!.querySelector('.dropdown-menu')!;

      expect(menu.classList.contains('show')).to.be.false;

      button.click();
      await oneEvent(el.shadowRoot!.querySelector('it-popover')!, 'popover-open');

      expect(menu.classList.contains('show')).to.be.true;
    });
  });

  describe('Popover placement', () => {
    it('sets correct popover placement based on alignment', async () => {
      const alignments = [
        'top',
        'right',
        'bottom',
        'left',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ];

      for (const alignment of alignments) {
        // eslint-disable-next-line no-await-in-loop
        const el = await fixture<ItDropdown>(html`<it-dropdown alignment="${alignment}"></it-dropdown>`);
        // eslint-disable-next-line no-await-in-loop
        await el.updateComplete;

        const popover = el.shadowRoot!.querySelector('it-popover')!;
        expect(popover.getAttribute('placement')).to.equal(alignment);
      }
    });

    it('uses default alignment when not specified', async () => {
      const el = await fixture<ItDropdown>(html`<it-dropdown></it-dropdown>`);
      await el.updateComplete;

      const popover = el.shadowRoot!.querySelector('it-popover')!;
      expect(popover.getAttribute('placement')).to.equal('bottom-start');
    });
  });

  describe('Header slot', () => {
    it('renders header content in header slot', async () => {
      const el = await fixture<ItDropdown>(
        html`<it-dropdown>
          <h4 slot="header" class="dropdown-header">Test Header</h4>
          <it-dropdown-item href="#">Item 1</it-dropdown-item>
        </it-dropdown>`,
      );
      await el.updateComplete;

      const headerSlot = el.shadowRoot!.querySelector('slot[name="header"]')!;
      expect(headerSlot).to.exist;
    });
  });
});
