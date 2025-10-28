/// <reference types="mocha"/>

import '@italia/popover';
import '@italia/button';
import { expect, fixture, html, waitUntil } from '@open-wc/testing';

import type { ItPopover } from '../src/it-popover.js';

describe('Popover component', () => {
  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover>
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);
      await expect(el).to.be.accessible();
    });

    it('sets aria attributes on trigger', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover>
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);

      await el.updateComplete;

      const trigger = el.querySelector('[slot="trigger"]') as HTMLElement;
      expect(trigger.getAttribute('it-aria-haspopup')).to.equal('true');
    });
  });

  describe('functionality', () => {
    it('renders with default placement', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover>
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);

      expect(el.placement).to.equal('bottom-start');
      expect(el.open).to.be.false;
    });

    it('opens and closes programmatically', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover>
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);

      expect(el.open).to.be.false;

      el.openPopover();
      await el.updateComplete;
      expect(el.open).to.be.true;

      el.closePopover();
      await el.updateComplete;
      expect(el.open).to.be.false;
    });

    it('toggles open state', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover>
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);

      expect(el.open).to.be.false;

      el.toggle();
      await el.updateComplete;
      expect(el.open).to.be.true;

      el.toggle();
      await el.updateComplete;
      expect(el.open).to.be.false;
    });

    it('supports different placements', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover placement="top">
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);

      expect(el.placement).to.equal('top');
    });
  });

  describe('events', () => {
    it('emits it-popover-open event when opened', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover>
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);

      let eventFired = false;
      el.addEventListener('it-popover-open', () => {
        eventFired = true;
      });

      el.openPopover();
      await el.updateComplete;

      expect(eventFired).to.be.true;
    });

    it('emits it-popover-close event when closed', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover>
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);

      let eventFired = false;
      el.addEventListener('it-popover-close', () => {
        eventFired = true;
      });

      el.openPopover();
      await el.updateComplete;

      el.closePopover();
      await el.updateComplete;

      expect(eventFired).to.be.true;
    });
  });

  describe('interaction', () => {
    it('closes on click outside', async () => {
      const el = await fixture<ItPopover>(html`
        <div>
          <it-popover>
            <it-button slot="trigger">Trigger</it-button>
            <div slot="content" class="popover">
              <div class="popover-inner">
                <div class="popover-body">Content</div>
              </div>
            </div>
          </it-popover>
          <button id="outside">Outside</button>
        </div>
      `);

      const popover = el.querySelector('it-popover') as unknown as ItPopover;
      const outsideButton = el.querySelector('#outside') as HTMLElement;

      popover.openPopover();
      await popover.updateComplete;
      expect(popover.open).to.be.true;

      outsideButton.click();
      await waitUntil(() => !popover.open, 'Popover should close on outside click');

      expect(popover.open).to.be.false;
    });

    it('closes on Escape key press', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover>
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);

      el.openPopover();
      await el.updateComplete;
      expect(el.open).to.be.true;

      const escapeEvent = new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      });
      el.querySelector('it-button')?.dispatchEvent(escapeEvent);

      await waitUntil(() => !el.open, 'Popover should close on Escape key press');

      expect(el.open).to.be.false;
    });

    it('does not have standard events when controlled', async () => {
      const el = await fixture<ItPopover>(html`
        <it-popover controlled>
          <it-button slot="trigger">Trigger</it-button>
          <div slot="content" class="popover">
            <div class="popover-inner">
              <div class="popover-body">Content</div>
            </div>
          </div>
        </it-popover>
      `);

      expect(el.controlled).to.be.true;

      el.openPopover();
      await el.updateComplete;
      expect(el.open).to.be.true;

      const escapeEvent = new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      });
      el.querySelector('it-button')?.dispatchEvent(escapeEvent);

      // Since it's controlled, it should remain open
      expect(el.open).to.be.true;
    });
  });
});
