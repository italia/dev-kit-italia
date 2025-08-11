import { expect, fixture, html } from '@open-wc/testing';
import { registerTranslation, LocalizeMixin } from '@italia/i18n';
import { LitElement } from 'lit';

// Esempio di traduzioni di test
const italian = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr' as 'ltr',
  hello_world: 'Ciao mondo',
};

const english = {
  $code: 'en',
  $name: 'English',
  $dir: 'ltr' as 'ltr',
  hello_world: 'Hello world',
};

// Componente di test
class TestElement extends LocalizeMixin(LitElement) {
  render() {
    return html`<div id="text">${this.$t('hello_world')}</div>`;
  }
}

customElements.define('test-element', TestElement);

describe('i18n', () => {
  describe('translation', () => {
    before(() => {
      registerTranslation(italian, english);
    });

    it('default translation (it)', async () => {
      document.documentElement.lang = 'it';
      const el = await fixture(html`<test-element></test-element>`);
      const text = el.shadowRoot?.querySelector('#text')?.textContent;
      expect(text).to.equal('Ciao mondo');
    });

    it('change lang to en', async () => {
      document.documentElement.lang = 'en';
      const el = await fixture(html`<test-element></test-element>`);
      const text = el.shadowRoot?.querySelector('#text')?.textContent;
      expect(text).to.equal('Hello world');
    });

    it('falls back to default if lang is not registered', async () => {
      document.documentElement.lang = 'fr'; // non registrata
      const el = await fixture(html`<test-element></test-element>`);
      const text = el.shadowRoot?.querySelector('#text')?.textContent;
      expect(text).to.equal('Ciao mondo'); // fallback all'italiano
    });
  });
});
