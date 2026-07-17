/// <reference types="@types/mocha" />

import type { ItChip } from '@italia/chip';
import '@italia/button';
import '@italia/icon';
import '@italia/chip';

import { expect, fixture, html } from '@open-wc/testing';

describe('it-chip component', () => {
  describe('accessibility', () => {
    it('default chip is accessible', async () => {
      const el = await fixture<ItChip>(html`<it-chip label="Label test"></it-chip>`);
      await expect(el).to.be.accessible();
    });

    it('dismissable chip with proper button is accessible', async () => {
      const el = await fixture<ItChip>(html`
        <it-chip label="Dismissable" dismissable>
          <it-button slot="dismiss-button" it-aria-label="Remove chip">
            <it-icon name="it-close" size="sm"></it-icon>
          </it-button>
        </it-chip>
      `);
      await expect(el).to.be.accessible();
    });

    it('chip with avatar and avatarAlt is accessible', async () => {
      const el = await fixture<ItChip>(html`
        <it-chip label="User" avatar="https://randomuser.me/api/portraits/men/46.jpg" avatarAlt="User avatar"></it-chip>
      `);
      await expect(el).to.be.accessible();
    });
  });

  describe('variants and size', () => {
    it('renders small chip with primary variant', async () => {
      const el = await fixture<ItChip>(html`<it-chip label="Test" size="sm" variant="primary"></it-chip>`);
      const container = el.shadowRoot?.querySelector('.chip');
      expect(container).to.exist;

      expect(container?.classList.contains('chip-sm')).to.be.true;
      expect(container?.classList.contains('chip-primary')).to.be.true;
    });

    it('renders large chip with danger variant', async () => {
      const el = await fixture<ItChip>(html`<it-chip label="Danger" size="lg" variant="danger"></it-chip>`);
      const container = el.shadowRoot?.querySelector('.chip');
      expect(container).to.exist;
      expect(container?.classList.contains('chip-lg')).to.be.true;
      expect(container?.classList.contains('chip-danger')).to.be.true;
    });
  });

  describe('avatar behavior', () => {
    it('renders avatar if src is provided', async () => {
      const el = await fixture<ItChip>(html`
        <it-chip
          label="With Avatar"
          avatar="https://randomuser.me/api/portraits/men/46.jpg"
          avatar-alt="Avatar alt text"
        ></it-chip>
      `);
      const avatar = el.shadowRoot?.querySelector('it-avatar');
      expect(avatar).to.exist;
      expect(avatar?.getAttribute('src')).to.equal('https://randomuser.me/api/portraits/men/46.jpg');
      expect(avatar?.getAttribute('alt')).to.equal('Avatar alt text');
    });
  });

  describe('disabled state', () => {
    it('adds disabled attributes when disabled', async () => {
      const el = await fixture<ItChip>(html`
        <it-chip label="Disabled" dismissable is-disabled>
          <it-button slot="dismiss-button" it-aria-label="Remove" disabled>
            <it-icon name="it-close" size="sm"></it-icon>
          </it-button>
        </it-chip>
      `);

      const container = el.shadowRoot?.querySelector('.chip');
      expect(container).to.exist;

      expect(container?.classList.contains('chip-disabled')).to.be.true;
    });
  });
  describe('focus shift on close', () => {
    it('moves focus to the next it-chip sibling when one exists', async () => {
      const container = await fixture<HTMLElement>(html`
        <div>
          <it-chip label="First" dismissable id="chip-a">
            <it-button slot="dismiss-button" it-aria-label="Remove First">
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
          <it-chip label="Second" dismissable id="chip-b">
            <it-button slot="dismiss-button" it-aria-label="Remove Second">
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
        </div>
      `);
      const chipA = container.querySelector<ItChip>('#chip-a')!;
      const chipB = container.querySelector<ItChip>('#chip-b')!;
      chipA.close();
      expect(chipA.isConnected).to.be.false;
      const btn = chipB.shadowRoot?.querySelector('slot[name="dismiss-button"]') as HTMLSlotElement | null;
      const assignedBtn = btn?.assignedElements()[0] as HTMLElement | undefined;
      expect(document.activeElement === assignedBtn || document.activeElement === chipB).to.be.true;
    });

    it('moves focus to the previous it-chip sibling when no next exists', async () => {
      const container = await fixture<HTMLElement>(html`
        <div>
          <it-chip label="First" dismissable id="chip-a">
            <it-button slot="dismiss-button" it-aria-label="Remove First">
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
          <it-chip label="Second" dismissable id="chip-b">
            <it-button slot="dismiss-button" it-aria-label="Remove Second">
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
        </div>
      `);
      const chipA = container.querySelector<ItChip>('#chip-a')!;
      const chipB = container.querySelector<ItChip>('#chip-b')!;
      chipB.close();
      expect(chipB.isConnected).to.be.false;
      const btn = chipA.shadowRoot?.querySelector('slot[name="dismiss-button"]') as HTMLSlotElement | null;
      const assignedBtn = btn?.assignedElements()[0] as HTMLElement | undefined;
      expect(document.activeElement === assignedBtn || document.activeElement === chipA).to.be.true;
    });

    it('falls back to the nearest focusable ancestor when no sibling chip exists', async () => {
      const wrapper = await fixture<HTMLElement>(html`
        <div tabindex="0" id="group">
          <it-chip label="Only" dismissable id="only-chip">
            <it-button slot="dismiss-button" it-aria-label="Remove">
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
        </div>
      `);
      const chip = wrapper.querySelector<ItChip>('#only-chip')!;
      chip.close();
      expect(chip.isConnected).to.be.false;
      expect(document.activeElement).to.equal(wrapper);
    });

    it('falls back to the nearest focusable element in the document when there is no sibling chip and no tabindex wrapper', async () => {
      // This is the realistic case: a standalone chip with no sibling chip and no
      // author-provided tabindex ancestor (matches the framework examples).
      const wrapper = await fixture<HTMLElement>(html`
        <div>
          <button id="elsewhere">Altrove nella pagina</button>
          <it-chip label="Only" dismissable id="only-chip">
            <it-button slot="dismiss-button" it-aria-label="Remove">
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
        </div>
      `);
      const chip = wrapper.querySelector<ItChip>('#only-chip')!;
      const dismissBtn = chip.querySelector('[slot="dismiss-button"]') as HTMLElement;
      dismissBtn.focus();

      chip.close();

      expect(chip.isConnected).to.be.false;
      expect(document.activeElement).to.equal(wrapper.querySelector('#elsewhere'));
    });

    it('does not shift focus onto a non-dismissable (e.g. link) neighbor chip', async () => {
      const wrapper = await fixture<HTMLElement>(html`
        <div>
          <button id="elsewhere">Altrove nella pagina</button>
          <it-chip label="Download" dismissable id="download-chip">
            <it-button slot="dismiss-button" it-aria-label="Remove">
              <it-icon name="it-close" size="sm"></it-icon>
            </it-button>
          </it-chip>
          <it-chip href="#" label="Preferiti" id="link-chip"></it-chip>
        </div>
      `);
      const chip = wrapper.querySelector<ItChip>('#download-chip')!;
      const linkChip = wrapper.querySelector<ItChip>('#link-chip')!;
      const link = linkChip.shadowRoot?.querySelector('a');

      chip.close();

      expect(chip.isConnected).to.be.false;
      expect(document.activeElement).to.not.equal(linkChip);
      expect(document.activeElement).to.not.equal(link);
      expect(document.activeElement).to.equal(wrapper.querySelector('#elsewhere'));
    });
  });

  describe('extra sr label', () => {
    it('extra sr label is added if a11y-description provided', async () => {
      const el = await fixture<ItChip>(html`
        <it-chip label="Disabled" dismissable is-disabled a11y-description="This is a description">
          <it-button slot="dismiss-button" it-aria-label="Remove" disabled>
            <it-icon name="it-close" size="sm"></it-icon>
          </it-button>
        </it-chip>
      `);

      const a11yDescription = el.shadowRoot?.querySelector('span.visually-hidden');
      expect(a11yDescription).to.exist;

      expect(a11yDescription).to.have.trimmed.text('This is a description');
    });
  });
});
