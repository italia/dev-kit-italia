import { expect, fixture, html } from '@open-wc/testing';
import type { ItAvatarGroup } from '@italia/avatar';
import '@italia/avatar';

describe('ItAvatarGroup', () => {
  it('is accessible', async () => {
    const el = await fixture<ItAvatarGroup>(html`
      <it-avatar-group>
        <it-avatar text="John Doe"></it-avatar>
        <it-avatar text="Jane Smith"></it-avatar>
      </it-avatar-group>
    `);
    await expect(el).to.be.accessible();
  });

  it('renders with default values', async () => {
    const el = await fixture<ItAvatarGroup>(html`<it-avatar-group></it-avatar-group>`);
    expect(el.size).to.equal('md');
    expect(el.direction).to.equal('vertical');
  });

  it('applies correct CSS classes for vertical layout', async () => {
    const el = await fixture<ItAvatarGroup>(html`
      <it-avatar-group direction="vertical" size="sm"></it-avatar-group>
    `);
    
    const group = el.shadowRoot?.querySelector('.avatar-group');
    expect(group).to.have.class('avatar-group-vertical');
    expect(group).to.have.class('avatar-group-sm');
  });

  it('applies correct CSS classes for horizontal layout', async () => {
    const el = await fixture<ItAvatarGroup>(html`
      <it-avatar-group direction="horizontal" size="md"></it-avatar-group>
    `);
    
    const group = el.shadowRoot?.querySelector('.avatar-group');
    expect(group).to.have.class('avatar-group-horizontal');
    expect(group).to.not.have.class('avatar-group-md'); // md è default
  });

  it('propagates size to child avatars', async () => {
    const el = await fixture<ItAvatarGroup>(html`
      <it-avatar-group size="sm">
        <it-avatar text="John"></it-avatar>
        <it-avatar text="Jane"></it-avatar>
      </it-avatar-group>
    `);
    
    await el.updateComplete;
    
    const avatars = el.querySelectorAll('it-avatar');
    avatars.forEach(avatar => {
      expect(avatar.getAttribute('size')).to.equal('sm');
    });
  });

  it('does not override existing size on child avatars', async () => {
    const el = await fixture<ItAvatarGroup>(html`
      <it-avatar-group size="md">
        <it-avatar text="John" size="lg"></it-avatar>
        <it-avatar text="Jane"></it-avatar>
      </it-avatar-group>
    `);
    
    await el.updateComplete;
    
    const avatars = el.querySelectorAll('it-avatar');
    expect(avatars[0].getAttribute('size')).to.equal('lg'); // Non sovrascritto
    expect(avatars[1].getAttribute('size')).to.equal('md'); // Propagato
  });

  it('renders slot content correctly', async () => {
    const el = await fixture<ItAvatarGroup>(html`
      <it-avatar-group>
        <it-avatar text="Test User"></it-avatar>
        <div>Custom content</div>
      </it-avatar-group>
    `);
    
    const slot = el.shadowRoot?.querySelector('slot');
    expect(slot).to.exist;
    
    // Controlla che gli elementi slottati siano presenti
    const avatarElement = el.querySelector('it-avatar');
    const customElement = el.querySelector('div');
    expect(avatarElement).to.exist;
    expect(customElement?.textContent).to.equal('Custom content');
  });
});
