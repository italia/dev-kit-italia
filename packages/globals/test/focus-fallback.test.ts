/// <reference types="@types/mocha" />

import { expect, fixture, html } from '@open-wc/testing';
import { focusableFallbackAncestor } from '../src/utils/focus-fallback.js';

describe('focusableFallbackAncestor', () => {
  it('returns null when no focusable ancestor exists', async () => {
    const el = await fixture<HTMLElement>(html`
      <div>
        <span id="target"></span>
      </div>
    `);
    const target = el.querySelector<HTMLElement>('#target')!;
    expect(focusableFallbackAncestor(target)).to.be.null;
  });

  it('returns the nearest ancestor with tabindex="0"', async () => {
    const el = await fixture<HTMLElement>(html`
      <div tabindex="0" id="container">
        <span id="target"></span>
      </div>
    `);
    const target = el.querySelector<HTMLElement>('#target')!;
    const container = el.querySelector<HTMLElement>('#container')!;
    expect(focusableFallbackAncestor(target)).to.equal(container);
  });

  it('prefers the nearest ancestor when multiple are focusable', async () => {
    const el = await fixture<HTMLElement>(html`
      <div tabindex="0" id="outer">
        <div tabindex="0" id="inner">
          <span id="target"></span>
        </div>
      </div>
    `);
    const target = el.querySelector<HTMLElement>('#target')!;
    const inner = el.querySelector<HTMLElement>('#inner')!;
    expect(focusableFallbackAncestor(target)).to.equal(inner);
  });

  it('accepts tabindex="1" (positive values)', async () => {
    const el = await fixture<HTMLElement>(html`
      <div tabindex="1" id="container">
        <span id="target"></span>
      </div>
    `);
    const target = el.querySelector<HTMLElement>('#target')!;
    const container = el.querySelector<HTMLElement>('#container')!;
    expect(focusableFallbackAncestor(target)).to.equal(container);
  });

  it('skips ancestors with tabindex="-1"', async () => {
    const el = await fixture<HTMLElement>(html`
      <div tabindex="0" id="outer">
        <div tabindex="-1" id="skipped">
          <span id="target"></span>
        </div>
      </div>
    `);
    const target = el.querySelector<HTMLElement>('#target')!;
    const outer = el.querySelector<HTMLElement>('#outer')!;
    expect(focusableFallbackAncestor(target)).to.equal(outer);
  });
});
