/// <reference types="mocha"/>

import '@italia/toolbar';
import { expect, fixture, html } from '@open-wc/testing';

import { type ItToolbar } from '@italia/toolbar';

describe('Toolbar component', () => {
  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<ItToolbar>(html`
        <it-toolbar>
          <it-toolbar-item active label="Link 1" href="#"></it-toolbar-item>
          <it-toolbar-item active label="Link 2" href="#"></it-toolbar-item>
        </it-toolbar>
      `);
      await expect(el).to.be.accessible();
    });

    it('with sizes is accessible', async () => {
      const el = await fixture<ItToolbar>(html`
        <div>
          <it-toolbar size="md" it-aria-label="Toolbar 1">
            <it-toolbar-item active label="Link 1" href="#"></it-toolbar-item>
          </it-toolbar>
          <it-toolbar size="sm" it-aria-label="Toolbar 2">
            <it-toolbar-item active label="Link 2" href="#"></it-toolbar-item>
          </it-toolbar>
        </div>
      `);
      await expect(el).to.be.accessible();
    });

    it('vertical orientation is accessible', async () => {
      const el = await fixture<ItToolbar>(html`
        <it-toolbar orientation="vertical">
          <it-toolbar-item active label="Link 1" href="#"></it-toolbar-item>
          <it-toolbar-item active label="Link 2" href="#"></it-toolbar-item>
        </it-toolbar>
      `);
      await expect(el).to.be.accessible();
    });

    it.skip('with dividers is accessible', async () => {
      const el = await fixture<ItToolbar>(html`
        <it-toolbar>
          <it-toolbar-item active label="Link 1" href="#"></it-toolbar-item>
          <it-toolbar-item divider></it-toolbar-item>
          <it-toolbar-item active label="Link 2" href="#"></it-toolbar-item>
        </it-toolbar>
      `);
      await expect(el).to.be.accessible();
    });

    it('with custom aria label is accessible', async () => {
      const el = await fixture<ItToolbar>(html`
        <it-toolbar it-aria-label="Toolbar custom">
          <it-toolbar-item active label="Link 1" href="#"></it-toolbar-item>
          <it-toolbar-item active label="Link 2" href="#"></it-toolbar-item>
        </it-toolbar>
      `);
      await expect(el).to.be.accessible();
    });
  });

  describe('properties', () => {
    it('default size is lg', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar></it-toolbar>`);
      expect(el.size).to.equal('lg');
    });

    it('size property can be set to md', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar size="md"></it-toolbar>`);
      expect(el.size).to.equal('md');
    });

    it('size property can be set to sm', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar size="sm"></it-toolbar>`);
      expect(el.size).to.equal('sm');
    });

    it('default orientation is horizontal', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar></it-toolbar>`);
      expect(el.orientation).to.equal('horizontal');
    });

    it('orientation property can be set to vertical', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar orientation="vertical"></it-toolbar>`);
      expect(el.orientation).to.equal('vertical');
    });

    it('itAriaLabel defaults to Toolbar', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar></it-toolbar>`);
      expect(el.itAriaLabel).to.equal('Toolbar');
    });

    it('itAriaLabel can be custom', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar it-aria-label="Custom"></it-toolbar>`);
      expect(el.itAriaLabel).to.equal('Custom');
    });
  });

  describe('CSS classes', () => {
    it('should apply toolbar-medium class when size is md', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar size="md"></it-toolbar>`);
      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav?.classList.contains('toolbar-medium')).to.be.true;
    });

    it('should apply toolbar-small class when size is sm', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar size="sm"></it-toolbar>`);
      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav?.classList.contains('toolbar-small')).to.be.true;
    });

    it('should apply toolbar-vertical class when orientation is vertical', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar orientation="vertical"></it-toolbar>`);
      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav?.classList.contains('toolbar-vertical')).to.be.true;
    });

    it('should always have toolbar class', async () => {
      const el = await fixture<ItToolbar>(html`<it-toolbar></it-toolbar>`);
      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav?.classList.contains('toolbar')).to.be.true;
    });
  });

  describe('slot', () => {
    it('should render slotted content', async () => {
      const el = await fixture<ItToolbar>(html`
        <it-toolbar>
          <it-toolbar-item active label="Link 1" href="#"></it-toolbar-item>
          <it-toolbar-item active label="Link 2" href="#"></it-toolbar-item>
        </it-toolbar>
      `);
      const slot = el.shadowRoot?.querySelector('slot');
      const assignedElements = slot?.assignedElements({ flatten: true }) || [];
      expect(assignedElements.length).to.equal(2);
    });
  });
});
