/// <reference types="mocha"/>

import '@italia/button';
import { expect, fixture, html } from '@open-wc/testing';

import { type ItButton } from '@italia/button';

describe('Button component', () => {
  describe('icon state', () => {
    it('adds btn-icon class when an it-icon is slotted', async () => {
      const el = await fixture<ItButton>(html`
        <it-button>
          <it-icon name="it-star-full"></it-icon>
          <span>My Button</span>
        </it-button>
      `);

      await el.updateComplete;
      const button = el.shadowRoot?.querySelector('button');

      expect(button?.classList.contains('btn-icon')).to.be.true;
    });

    it('removes btn-icon class when no it-icon is slotted', async () => {
      const el = await fixture<ItButton>(html`
        <it-button>
          <it-icon name="it-star-full"></it-icon>
          <span>My Button</span>
        </it-button>
      `);

      await el.updateComplete;
      el.innerHTML = '<span>My Button</span>';
      await el.updateComplete;

      const button = el.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('btn-icon')).to.be.false;
    });
  });

  describe('progress state', () => {
    it('adds btn-progress class when an it-progress is slotted', async () => {
      const el = await fixture<ItButton>(html`
        <it-button>
          <it-progress type="spinner"></it-progress>
        </it-button>
      `);

      await el.updateComplete;
      const button = el.shadowRoot?.querySelector('button');

      expect(button?.classList.contains('btn-progress')).to.be.true;
    });

    it('removes btn-progress class when no it-progress is slotted', async () => {
      const el = await fixture<ItButton>(html`
        <it-button>
          <it-progress type="spinner"></it-progress>
        </it-button>
      `);

      await el.updateComplete;
      el.innerHTML = 'My Button';
      await el.updateComplete;

      const button = el.shadowRoot?.querySelector('button');
      expect(button?.classList.contains('btn-progress')).to.be.false;
    });
  });

  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<ItButton>(html`<it-button>My Button</it-button>`);
      await expect(el).to.be.accessible();
    });

    it('variations are accessible', async () => {
      const el = await fixture<ItButton>(html`
        <it-button variation="primary">bsi Button</it-button>
        <it-button variation="link">bsi Button</it-button>
      `);
      await expect(el).to.be.accessible();
    });

    it('disabled is accessible', async () => {
      const el = await fixture<ItButton>(html`<it-button disabled>bsi Button</it-button>`);
      const button = el.shadowRoot?.querySelector('button');

      await expect(el).to.be.accessible();
      expect(button?.hasAttribute('aria-disabled')).to.be.true;
    });

    it('on bg-dark is accessible', async () => {
      const el = await fixture<ItButton>(
        html`<div class="bg-dark">
          <it-button variation="primary">bsi Button</it-button>
          <it-button variation="link">bsi Button</it-button>
        </div>`,
      );

      await expect(el).to.be.accessible();
    });
  });

  describe('form', () => {
    it('submits a form', async () => {
      let called = false;
      function submitHandler() {
        /* per verificare che l’evento sia stato attivato. */
        called = true;
      }

      const el = await fixture<HTMLFormElement>(html`
        <form
          @submit=${(e: SubmitEvent) => {
            e.preventDefault(); // preveniamo la ricarica per il test
            submitHandler();
          }}
        >
          <it-button type="submit">Submit</it-button>
        </form>
      `);

      const button = el.querySelector('it-button')!;
      const innerButton = button.shadowRoot?.querySelector('button');

      innerButton?.click();

      expect(called).to.be.true;
    });

    it('does not submit the form when the button is disabled', async () => {
      let called = false;
      function submitHandler() {
        /* per verificare che l’evento sia stato attivato. */
        called = true;
      }

      const el = await fixture<HTMLFormElement>(html`
        <form
          @submit=${(e: SubmitEvent) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <it-button type="submit" disabled>Submit</it-button>
        </form>
      `);

      const button = el.querySelector('it-button')!;
      const innerButton = button.shadowRoot?.querySelector('button');

      innerButton?.click();

      expect(called).to.be.false;
    });
  });
});
