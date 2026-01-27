import '@italia/back-to-top';
import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import type { ItBackToTop } from '@italia/back-to-top';

describe('<it-back-to-top>', () => {
  it('renders correctly with default props', async () => {
    const el: ItBackToTop = await fixture(html`<it-back-to-top it-aria-label="Torna su"></it-back-to-top>`);
    expect(el).shadowDom.to.exist;
    expect(el.offset).to.equal(0);
    expect(el.scrollLimit).to.equal(100);
    expect(el.duration).to.equal(800);
    expect(el.small).to.be.false;
    expect(el.inverse).to.be.false;
    expect(el.iconColor).to.equal('inverse');
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.getAttribute('aria-label')).to.equal('Torna su');
  });

  it('should show button only when scrollY > scrollLimit', async () => {
    const el: ItBackToTop = await fixture(
      html`<it-back-to-top scroll-limit="50" it-aria-label="Torna su"></it-back-to-top>`,
    );

    // inizialmente invisibile
    expect(el.visible).to.be.false;

    // simula scroll
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    window.dispatchEvent(new Event('scroll'));
    await elementUpdated(el);

    expect(el.visible).to.be.true;
  });

  it('should scroll to top on button click', async () => {
    const el: ItBackToTop = await fixture(html`<it-back-to-top it-aria-label="Torna su"></it-back-to-top>`);

    // forza scroll iniziale
    document.documentElement.scrollTop = 300;

    const button = el.shadowRoot!.querySelector('button')!;
    button.click();

    // aspetta l'animazione
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, el.duration + 50);
    });

    expect(document.documentElement.scrollTop).to.equal(0);
  });

  it('applies small class when "small" is true', async () => {
    const el: ItBackToTop = await fixture(html`<it-back-to-top small it-aria-label="Torna su"></it-back-to-top>`);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.classList.contains('back-to-top-small')).to.be.true;
  });

  it('applies dark class when "inverse" is true', async () => {
    const el: ItBackToTop = await fixture(html`<it-back-to-top inverse it-aria-label="Torna su"></it-back-to-top>`);
    const btn = el.shadowRoot!.querySelector('button')!;
    expect(btn.classList.contains('dark')).to.be.true;
  });

  it('renders icon with correct size and color', async () => {
    const el: ItBackToTop = await fixture(
      html`<it-back-to-top small inverse it-aria-label="Torna su"></it-back-to-top>`,
    );
    const icon = el.shadowRoot!.querySelector('it-icon')!;
    expect(icon.getAttribute('size')).to.equal('sm');
    expect(icon.getAttribute('color')).to.equal('primary'); // inverse + small
  });

  it('does not throw when removed', async () => {
    const el: ItBackToTop = await fixture(html`<it-back-to-top it-aria-label="Torna su"></it-back-to-top>`);
    let error: any = null;
    try {
      el.remove();
    } catch (e) {
      error = e;
    }
    expect(error).to.be.null;
  });

  it('updates visible state when scrolling past scrollLimit multiple times', async () => {
    const el: ItBackToTop = await fixture(
      html`<it-back-to-top scroll-limit="50" it-aria-label="Torna su"></it-back-to-top>`,
    );

    // scroll sotto limite
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    window.dispatchEvent(new Event('scroll'));
    await elementUpdated(el);
    expect(el.visible).to.be.false;

    // scroll sopra limite
    Object.defineProperty(window, 'scrollY', { value: 100 });
    window.dispatchEvent(new Event('scroll'));
    await elementUpdated(el);
    expect(el.visible).to.be.true;
  });
});
