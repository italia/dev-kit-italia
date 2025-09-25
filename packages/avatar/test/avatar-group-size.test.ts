import { expect, fixture, html } from '@open-wc/testing';
import '../src/it-avatar.js';
import '../src/it-avatar-group.js';

describe('AvatarGroup size propagation', () => {
  it('should propagate size sm to child avatars', async () => {
    const el = await fixture(html`
      <it-avatar-group size="sm">
        <ul>
          <li><it-avatar text="User One"></it-avatar></li>
          <li><it-avatar text="User Two"></it-avatar></li>
        </ul>
      </it-avatar-group>
    `);

    // Aspetta che il componente sia completamente aggiornato
    await el.updateComplete;

    // Ottieni gli avatar figli
    const avatars = el.querySelectorAll('it-avatar');
    
    // Verifica che ci siano avatar
    expect(avatars.length).to.equal(2);

    // Verifica che ogni avatar abbia ricevuto la size corretta
    for (let i = 0; i < avatars.length; i++) {
      const avatar = avatars[i];
      console.log(`Avatar ${i}:`, {
        sizeAttribute: avatar.getAttribute('size'),
        sizeProperty: avatar.size,
        classes: avatar.shadowRoot?.querySelector('.avatar')?.className
      });
      
      expect(avatar.getAttribute('size')).to.equal('sm');
      expect(avatar.size).to.equal('sm');
      
      // Aspetta che l'avatar si aggiorni
      await avatar.updateComplete;
      
      // Verifica che le classi CSS siano applicate correttamente
      const avatarElement = avatar.shadowRoot?.querySelector('.avatar');
      expect(avatarElement?.classList.contains('size-sm')).to.be.true;
    }
  });

  it('should propagate size lg to child avatars', async () => {
    const el = await fixture(html`
      <it-avatar-group size="lg">
        <ul>
          <li><it-avatar text="User One"></it-avatar></li>
          <li><it-avatar text="User Two"></it-avatar></li>
        </ul>
      </it-avatar-group>
    `);

    await el.updateComplete;

    const avatars = el.querySelectorAll('it-avatar');
    expect(avatars.length).to.equal(2);

    for (const avatar of avatars) {
      expect(avatar.getAttribute('size')).to.equal('lg');
      expect(avatar.size).to.equal('lg');
      
      await avatar.updateComplete;
      
      const avatarElement = avatar.shadowRoot?.querySelector('.avatar');
      expect(avatarElement?.classList.contains('size-lg')).to.be.true;
    }
  });

  it('should not override existing size attributes', async () => {
    const el = await fixture(html`
      <it-avatar-group size="sm">
        <ul>
          <li><it-avatar text="User One"></it-avatar></li>
          <li><it-avatar text="User Two" size="lg"></it-avatar></li>
        </ul>
      </it-avatar-group>
    `);

    await el.updateComplete;

    const avatars = el.querySelectorAll('it-avatar');
    
    // Il primo avatar dovrebbe ricevere la size dal group
    expect(avatars[0].getAttribute('size')).to.equal('sm');
    
    // Il secondo avatar dovrebbe mantenere la sua size originale
    expect(avatars[1].getAttribute('size')).to.equal('lg');
  });
});
