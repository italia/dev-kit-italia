import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import '../src/it-alert.js';
import type { ItAlert } from '../src/it-alert.js';

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const template = html`
  <it-alert>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Attenzione</strong> messaggio di prova.
      <button type="button" class="btn-close" aria-label="Chiudi avviso"></button>
    </div>
  </it-alert>
`;

describe('ItAlert', () => {
  it('renders in light DOM and preserves its child markup', async () => {
    const el = await fixture<ItAlert>(template);
    expect(el.tagName.toLowerCase()).to.equal('it-alert');
    // Light DOM enhancer: no shadow root, original markup untouched.
    expect(el.shadowRoot).to.be.null;
    expect(el.querySelector('.alert')).to.exist;
    expect(el.querySelector('.btn-close')).to.exist;
  });

  it('fires a cancelable it-alert-close event before closing', async () => {
    const el = await fixture<ItAlert>(template);
    let detailAlert: HTMLElement | null = null;
    let cancelable = false;
    el.addEventListener('it-alert-close', (e) => {
      cancelable = e.cancelable;
      detailAlert = (e as CustomEvent).detail.alert;
    });

    el.querySelector<HTMLButtonElement>('.btn-close')!.click();

    expect(cancelable).to.be.true;
    expect(detailAlert).to.equal(el);
  });

  it('removes the alert from the DOM by default on close-button click', async () => {
    const el = await fixture<ItAlert>(template);
    el.querySelector<HTMLButtonElement>('.btn-close')!.click();
    // `.show` is removed immediately to trigger the fade, the element after the fade.
    expect(el.querySelector('.alert')!.classList.contains('show')).to.be.false;
    await wait(200);
    expect(el.isConnected).to.be.false;
  });

  it('does not remove the alert when the event is prevented', async () => {
    const el = await fixture<ItAlert>(template);
    el.addEventListener('it-alert-close', (e) => e.preventDefault());
    el.querySelector<HTMLButtonElement>('.btn-close')!.click();
    await wait(200);
    expect(el.isConnected).to.be.true;
    expect(el.querySelector('.alert')).to.exist;
  });

  it('closes programmatically via the public close() method', async () => {
    const el = await fixture<ItAlert>(template);
    el.close();
    await wait(200);
    expect(el.isConnected).to.be.false;
  });

  it('sets role="alert" on the inner .alert element automatically', async () => {
    const el = await fixture<ItAlert>(html`
      <it-alert>
        <div class="alert alert-primary">Messaggio</div>
      </it-alert>
    `);
    expect(el.querySelector('.alert')!.getAttribute('role')).to.equal('alert');
  });

  it('does not override an explicit role on the inner element', async () => {
    const el = await fixture<ItAlert>(html`
      <it-alert>
        <div class="alert alert-primary" role="status">Messaggio</div>
      </it-alert>
    `);
    expect(el.querySelector('.alert')!.getAttribute('role')).to.equal('status');
  });

  it('applies the alert-{variant} class from the variant attribute', async () => {
    const el = await fixture<ItAlert>(html`
      <it-alert variant="success">
        <div class="alert">Messaggio</div>
      </it-alert>
    `);
    const alert = el.querySelector('.alert')!;
    expect(alert.classList.contains('alert-success')).to.be.true;
  });

  it('switches the color class when the variant changes', async () => {
    const el = await fixture<ItAlert>(html`
      <it-alert variant="success">
        <div class="alert">Messaggio</div>
      </it-alert>
    `);
    el.variant = 'danger';
    await el.updateComplete;
    const alert = el.querySelector('.alert')!;
    expect(alert.classList.contains('alert-danger')).to.be.true;
    expect(alert.classList.contains('alert-success')).to.be.false;
  });

  it('leaves existing color classes untouched when no variant is set', async () => {
    const el = await fixture<ItAlert>(html`
      <it-alert>
        <div class="alert alert-warning">Messaggio</div>
      </it-alert>
    `);
    expect(el.querySelector('.alert')!.classList.contains('alert-warning')).to.be.true;
  });
});
