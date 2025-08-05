import { expect, fixture, html } from '@open-wc/testing';
import '@italia/section';

describe('<it-section>', () => {
  it('renders with default props', async () => {
    const el = await fixture(html`<it-section><h2>Test</h2></it-section>`);
    const section = el.shadowRoot?.querySelector('section');
    expect(section).to.exist;
    expect(section?.classList.contains('section')).to.be.true;
  });

  it('default is accessible', async () => {
    const el = await fixture(html`<it-section><h2>Test</h2></it-section>`);
    await expect(el).to.be.accessible();
  });

  it('applies correct variant class', async () => {
    const el = await fixture(html`<it-section variant="primary"><h2>Title</h2></it-section>`);
    const section = el.shadowRoot?.querySelector('section');
    expect(section?.classList.contains('section-primary')).to.be.true;
  });

  it('renders image with alt text when provided', async () => {
    const el = await fixture(html`
      <it-section image="https://via.placeholder.com/150"><h2>Image section</h2></it-section>
    `);
    const img = el.shadowRoot?.querySelector('img');
    expect(img?.getAttribute('src')).to.equal('https://via.placeholder.com/150');
    expect(img?.getAttribute('alt')).to.equal('');
    expect(img?.getAttribute('aria-hidden')).to.equal('true');
  });

  it('applies inverse class to section-content', async () => {
    const el = await fixture(html`<it-section inverse><h2>Inverse</h2></it-section>`);
    const content = el.shadowRoot?.querySelector('.section-content');
    expect(content?.classList.contains('white-color')).to.be.true;
  });

  it('renders slot content correctly', async () => {
    const el = await fixture(html`
      <it-section
        ><h2>Slot heading</h2>
        <p>Content paragraph</p></it-section
      >
    `);
    const slotContent = el.querySelector('p');
    expect(slotContent?.textContent).to.include('Content paragraph');
  });
});
