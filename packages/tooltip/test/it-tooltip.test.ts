/// <reference types="mocha"/>

import '@italia/tooltip';
import '@italia/button';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import type { ItTooltip } from '../src/it-tooltip.js';

describe('Tooltip component', () => {
  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <it-button slot="trigger">Trigger</it-button>
          <span slot="content">Testo del tooltip</span>
        </it-tooltip>
      `);
      await expect(el).to.be.accessible();
    });

    it('tooltip div has role="tooltip"', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <it-button slot="trigger">Trigger</it-button>
          <span slot="content">Testo del tooltip</span>
        </it-tooltip>
      `);
      const tooltipDiv = el.shadowRoot!.querySelector('.tooltip');
      expect(tooltipDiv?.getAttribute('role')).to.equal('tooltip');
    });

    it('sets it-aria-describedby on it-button trigger', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <it-button slot="trigger">Trigger</it-button>
          <span slot="content">Testo del tooltip</span>
        </it-tooltip>
      `);
      await el.updateComplete;
      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement;
      const tooltipId = el.shadowRoot!.querySelector('.tooltip')?.id;
      expect(trigger.getAttribute('it-aria-describedby')).to.equal(tooltipId);
    });

    it('sets aria-describedby on plain HTML trigger', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo del tooltip</span>
        </it-tooltip>
      `);
      await el.updateComplete;
      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement;
      const tooltipId = el.shadowRoot!.querySelector('.tooltip')?.id;
      expect(trigger.getAttribute('aria-describedby')).to.equal(tooltipId);
    });

    it('tooltip is aria-hidden when closed', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <it-button slot="trigger">Trigger</it-button>
          <span slot="content">Testo del tooltip</span>
        </it-tooltip>
      `);
      const tooltipDiv = el.shadowRoot!.querySelector('.tooltip');
      expect(tooltipDiv?.getAttribute('aria-hidden')).to.equal('true');
    });

    it('tooltip is not aria-hidden when open', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <it-button slot="trigger">Trigger</it-button>
          <span slot="content">Testo del tooltip</span>
        </it-tooltip>
      `);
      el.showTooltip();
      await el.updateComplete;
      const tooltipDiv = el.shadowRoot!.querySelector('.tooltip');
      expect(tooltipDiv?.hasAttribute('aria-hidden')).to.be.false;
    });
  });

  describe('functionality', () => {
    it('renders with default placement top', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      expect(el.placement).to.equal('top');
    });

    it('renders with default closed state', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      expect(el.open).to.be.false;
    });

    it('renders content slot text', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo del tooltip</span>
        </it-tooltip>
      `);
      const slot = el.shadowRoot!.querySelector('slot[name="content"]') as HTMLSlotElement;
      const text = slot?.assignedNodes({ flatten: true })[0]?.textContent?.trim();
      expect(text).to.equal('Testo del tooltip');
    });

    it('opens and closes programmatically', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      el.showTooltip();
      await el.updateComplete;
      expect(el.open).to.be.true;

      el.hideTooltip();
      await el.updateComplete;
      expect(el.open).to.be.false;
    });

    it('toggles open state', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      el.toggle();
      await el.updateComplete;
      expect(el.open).to.be.true;

      el.toggle();
      await el.updateComplete;
      expect(el.open).to.be.false;
    });

    it('supports different placements', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip placement="bottom">
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      expect(el.placement).to.equal('bottom');
    });
  });

  describe('events', () => {
    it('emits it-tooltip-open when opened', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      let fired = false;
      el.addEventListener('it-tooltip-open', () => {
        fired = true;
      });
      el.showTooltip();
      await el.updateComplete;
      expect(fired).to.be.true;
    });

    it('emits it-tooltip-close when closed', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      let fired = false;
      el.addEventListener('it-tooltip-close', () => {
        fired = true;
      });
      el.showTooltip();
      await el.updateComplete;
      el.hideTooltip();
      await el.updateComplete;
      expect(fired).to.be.true;
    });
  });

  describe('interaction', () => {
    it('shows on mouseenter and hides on mouseleave', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement;

      trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      await waitUntil(() => el.open, 'Tooltip should open on mouseenter');
      expect(el.open).to.be.true;

      trigger.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));
      await waitUntil(() => !el.open, 'Tooltip should close on mouseleave');
      expect(el.open).to.be.false;
    });

    it('shows on focusin and hides on focusout', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement;

      trigger.dispatchEvent(new FocusEvent('focusin', { bubbles: true }));
      await waitUntil(() => el.open);
      expect(el.open).to.be.true;

      trigger.dispatchEvent(new FocusEvent('focusout', { bubbles: true }));
      await waitUntil(() => !el.open);
      expect(el.open).to.be.false;
    });

    it('closes on Escape key', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      el.showTooltip();
      await el.updateComplete;
      expect(el.open).to.be.true;

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement;
      trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      await waitUntil(() => !el.open);
      expect(el.open).to.be.false;
    });

    it('does not steal focus when shown', async () => {
      const container = await fixture<HTMLDivElement>(html`
        <div>
          <it-tooltip>
            <button slot="trigger" id="trigger-btn">Trigger</button>
            <span slot="content">Testo</span>
          </it-tooltip>
        </div>
      `);
      const trigger = container.querySelector('#trigger-btn') as HTMLElement;
      trigger.focus();
      const tooltip = container.querySelector('it-tooltip') as unknown as ItTooltip;
      tooltip.showTooltip();
      await tooltip.updateComplete;
      expect(document.activeElement).to.equal(trigger);
    });

    it('does not respond to events when controlled', async () => {
      const el = await fixture<ItTooltip>(html`
        <it-tooltip controlled>
          <button slot="trigger">Trigger</button>
          <span slot="content">Testo</span>
        </it-tooltip>
      `);
      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement;
      trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
      await new Promise((r) => {
        setTimeout(r, 50);
      });
      expect(el.open).to.be.false;
    });
  });
});
