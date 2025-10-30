import { expect, fixture, html } from '@open-wc/testing';
import type { ItAvatar } from '@italia/avatar';
import '@italia/avatar';

describe('ItAvatar', () => {
  it('is accessible', async () => {
    const el = await fixture<ItAvatar>(html` <it-avatar type="text" text="John Doe" size="xs"></it-avatar> `);
    await expect(el).to.be.accessible();
  });
  it('should not cause layout shift (CLS) on render', async () => {
    // 1. Crea il componente
    const el = await fixture<ItAvatar>(html`<it-avatar type="text" text="John Doe" size="md"></it-avatar>`);

    // Aggiungilo al DOM per misurarlo
    document.body.appendChild(el);

    // 2. Misura subito il bounding box
    const rectBefore = el.getBoundingClientRect();

    // 3. Forza il rendering completo
    await el.updateComplete;

    // 4. Misura di nuovo
    const rectAfter = el.getBoundingClientRect();

    // 5. Confronta
    expect(rectBefore.width).to.be.closeTo(rectAfter.width, 1);
    expect(rectBefore.height).to.be.closeTo(rectAfter.height, 1);
  });
  it('renders with default values', async () => {
    const el = await fixture<ItAvatar>(html`<it-avatar></it-avatar>`);
    expect(el.size).to.equal('md');
    expect(el.type).to.equal(''); // Default è ora vuoto per tipo automatico
  });

  // Test per determinazione automatica del tipo
  describe('Automatic type detection', () => {
    it('detects image type when src is provided', async () => {
      const el = await fixture<ItAvatar>(html`
        <it-avatar src="https://example.com/avatar.jpg" alt="John Doe"></it-avatar>
      `);

      const img = el.shadowRoot?.querySelector('img');
      expect(img).to.exist;
      expect(img?.src).to.equal('https://example.com/avatar.jpg');
    });

    it('detects icon type when icon is provided', async () => {
      const el = await fixture<ItAvatar>(html` <it-avatar icon="search" avatar-title="Search"></it-avatar> `);

      const icon = el.shadowRoot?.querySelector('it-icon');
      expect(icon).to.exist;
      expect(icon?.getAttribute('name')).to.equal('search');
    });

    it('detects text type when neither src nor icon are provided', async () => {
      const el = await fixture<ItAvatar>(html` <it-avatar text="John Doe"></it-avatar> `);

      expect(el.shadowRoot?.textContent).to.include('JD');
    });

    it('prioritizes src over icon when both are provided', async () => {
      const el = await fixture<ItAvatar>(html`
        <it-avatar src="https://example.com/avatar.jpg" icon="search" alt="John Doe"></it-avatar>
      `);

      const img = el.shadowRoot?.querySelector('img');
      const icon = el.shadowRoot?.querySelector('it-icon');
      expect(img).to.exist;
      expect(icon).to.not.exist;
    });
  });

  // Test per fallback su errore immagine
  describe('Image error fallback', () => {
    it('shows initials when image fails to load', async () => {
      const el = await fixture<ItAvatar>(html`
        <it-avatar src="https://invalid-url.com/not-found.jpg" alt="John Doe"></it-avatar>
      `);

      // Simula errore di caricamento immagine
      const img = el.shadowRoot?.querySelector('img');
      if (img) {
        img.dispatchEvent(new Event('error'));
        await el.updateComplete;
      }

      // Dovrebbe mostrare le iniziali
      const textElement = el.shadowRoot?.querySelector('p[aria-hidden="true"]');
      expect(textElement?.textContent).to.equal('JD');
    });

    it('generates initials from alt text when image fails', async () => {
      const el = await fixture<ItAvatar>(html` <it-avatar src="invalid-url" alt="Maria Rossi"></it-avatar> `);

      // Simula errore di caricamento
      const img = el.shadowRoot?.querySelector('img');
      if (img) {
        img.dispatchEvent(new Event('error'));
        await el.updateComplete;
      }

      const textElement = el.shadowRoot?.querySelector('p[aria-hidden="true"]');
      expect(textElement?.textContent).to.equal('MR');
    });
  });

  it('renders image avatar correctly', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar type="image" src="https://example.com/avatar.jpg" alt="John Doe"></it-avatar>
    `);

    const img = el.shadowRoot?.querySelector('img');
    expect(img).to.exist;
    expect(img?.src).to.equal('https://example.com/avatar.jpg');
    expect(img?.alt).to.equal('John Doe');
  });

  it('renders text avatar correctly', async () => {
    const el = await fixture<ItAvatar>(html` <it-avatar type="text" text="John Doe"></it-avatar> `);

    expect(el.shadowRoot?.textContent).to.include('JD');
  });

  it('renders single initial for small sizes', async () => {
    const el = await fixture<ItAvatar>(html` <it-avatar type="text" text="John Doe" size="xs"></it-avatar> `);

    expect(el.shadowRoot?.textContent).to.include('J');
  });

  it('renders icon avatar correctly', async () => {
    const el = await fixture<ItAvatar>(html` <it-avatar type="icon" icon="search"></it-avatar> `);

    const icon = el.shadowRoot?.querySelector('it-icon');
    expect(icon).to.exist;
    expect(icon?.getAttribute('name')).to.equal('search');
  });

  it('applies size classes correctly', async () => {
    const el = await fixture<ItAvatar>(html` <it-avatar size="lg"></it-avatar> `);

    const avatar = el.shadowRoot?.querySelector('.avatar');
    expect(avatar?.classList.contains('size-lg')).to.be.true;
  });

  it('applies variant classes correctly', async () => {
    const el = await fixture<ItAvatar>(html` <it-avatar variant="primary"></it-avatar> `);

    const avatar = el.shadowRoot?.querySelector('.avatar');
    expect(avatar?.classList.contains('avatar-primary')).to.be.true;
  });

  it('renders presence indicator', async () => {
    const el = await fixture<ItAvatar>(html` <it-avatar presence="active"></it-avatar> `);

    const presence = el.shadowRoot?.querySelector('.avatar-presence');
    expect(presence).to.exist;
    expect(presence?.classList.contains('active')).to.be.true;
  });

  it('renders status indicator', async () => {
    const el = await fixture<ItAvatar>(html` <it-avatar status="approved"></it-avatar> `);

    const status = el.shadowRoot?.querySelector('.avatar-status');
    expect(status).to.exist;
    expect(status?.classList.contains('approved')).to.be.true;
  });

  it('renders as link when href is provided', async () => {
    const el = await fixture<ItAvatar>(html` <it-avatar href="/profile" avatar-title="Profile"></it-avatar> `);

    const link = el.shadowRoot?.querySelector('a');
    expect(link).to.exist;
    expect(link?.href).to.include('/profile');
  });

  it('renders extra text slot', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar text="John Doe">
        <time slot="extra-text">15 SET 2025</time>
      </it-avatar>
    `);

    // Verifica che il contenuto dello slot sia accessibile
    const slottedContent = el.querySelector('time[slot="extra-text"]');
    expect(slottedContent).to.exist;
    expect(slottedContent?.textContent).to.equal('15 SET 2025');
  });

  it('renders custom presence slot', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar text="John Doe" presence="active">
        <span slot="presence" class="custom-presence">Online</span>
      </it-avatar>
    `);

    const presenceSlot = el.shadowRoot?.querySelector('slot[name="presence"]');
    expect(presenceSlot).to.exist;

    const customPresence = el.querySelector('span[slot="presence"]');
    expect(customPresence).to.exist;
    expect(customPresence?.textContent).to.equal('Online');
  });

  it('renders custom status slot', async () => {
    const el = await fixture<ItAvatar>(html`
      <it-avatar text="John Doe" status="approved">
        <span slot="status" class="custom-status">Verified</span>
      </it-avatar>
    `);

    const statusSlot = el.shadowRoot?.querySelector('slot[name="status"]');
    expect(statusSlot).to.exist;

    const customStatus = el.querySelector('span[slot="status"]');
    expect(customStatus).to.exist;
    expect(customStatus?.textContent).to.equal('Verified');
  });
});
