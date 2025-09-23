import { expect, fixture, html } from '@open-wc/testing';
import { ItAvatar } from '../src/it-avatar.js';

describe('ItAvatar', () => {
  it('is defined', () => {
    const el = document.createElement('it-avatar');
    expect(el).to.be.instanceOf(ItAvatar);
  });

  it('renders with default values', async () => {
    const el = await fixture<ItAvatar>(html`<it-avatar></it-avatar>`);
    expect(el.size).to.equal('md');
    expect(el.type).to.equal('image');
  });

  it('renders image avatar correctly', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar 
        type="image" 
        src="https://example.com/avatar.jpg" 
        alt="John Doe"
      ></it-avatar>
    `);
    
    const img = el.shadowRoot?.querySelector('img');
    expect(img).to.exist;
    expect(img?.src).to.equal('https://example.com/avatar.jpg');
    expect(img?.alt).to.equal('John Doe');
  });

  it('renders text avatar correctly', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar type="text" text="John Doe"></it-avatar>
    `);
    
    expect(el.shadowRoot?.textContent).to.include('JD');
  });

  it('renders single initial for small sizes', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar type="text" text="John Doe" size="xs"></it-avatar>
    `);
    
    expect(el.shadowRoot?.textContent).to.include('J');
  });

  it('renders icon avatar correctly', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar type="icon" icon="search"></it-avatar>
    `);
    
    const icon = el.shadowRoot?.querySelector('it-icon');
    expect(icon).to.exist;
    expect(icon?.getAttribute('name')).to.equal('search');
  });

  it('applies size classes correctly', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar size="lg"></it-avatar>
    `);
    
    const avatar = el.shadowRoot?.querySelector('.avatar');
    expect(avatar?.classList.contains('size-lg')).to.be.true;
  });

  it('applies color classes correctly', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar color="primary"></it-avatar>
    `);
    
    const avatar = el.shadowRoot?.querySelector('.avatar');
    expect(avatar?.classList.contains('avatar-primary')).to.be.true;
  });

  it('renders presence indicator', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar presence="active"></it-avatar>
    `);
    
    const presence = el.shadowRoot?.querySelector('.avatar-presence');
    expect(presence).to.exist;
    expect(presence?.classList.contains('active')).to.be.true;
  });

  it('renders status indicator', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar status="approved"></it-avatar>
    `);
    
    const status = el.shadowRoot?.querySelector('.avatar-status');
    expect(status).to.exist;
    expect(status?.classList.contains('approved')).to.be.true;
  });

  it('renders as link when href is provided', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar href="/profile" avatar-title="Profile"></it-avatar>
    `);
    
    const link = el.shadowRoot?.querySelector('a');
    expect(link).to.exist;
    expect(link?.href).to.include('/profile');
  });

  it('renders extra text wrapper', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar 
        extra-text-wrapper
        text="John Doe" 
        extra-text="15 SET 2025"
        extra-text-tag="time"
      ></it-avatar>
    `);
    
    const wrapper = el.shadowRoot?.querySelector('.avatar-wrapper');
    expect(wrapper).to.exist;
    expect(wrapper?.classList.contains('avatar-extra-text')).to.be.true;
    
    const extraText = el.shadowRoot?.querySelector('.extra-text');
    expect(extraText).to.exist;
  });
});
