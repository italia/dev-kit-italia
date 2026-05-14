/// <reference types="mocha"/>

import '@italia/header';
import { expect, fixture, html, aTimeout } from '@open-wc/testing';
import type { ItHeader } from '../src/it-header.js';

type TestMediaQueryList = MediaQueryList & {
  dispatchChange: (nextMatches: boolean) => void;
};

const createMatchMediaMock = (initialMatches = false): TestMediaQueryList => {
  let matches = initialMatches;
  const listeners = new Set<(event: MediaQueryListEvent) => void>();

  const mql = {
    media: '(max-width: 991px)',
    onchange: null,
    get matches() {
      return matches;
    },
    addEventListener: (type: string, callback: EventListenerOrEventListenerObject) => {
      if (type !== 'change' || typeof callback !== 'function') return;
      listeners.add(callback as (event: MediaQueryListEvent) => void);
    },
    removeEventListener: (type: string, callback: EventListenerOrEventListenerObject) => {
      if (type !== 'change' || typeof callback !== 'function') return;
      listeners.delete(callback as (event: MediaQueryListEvent) => void);
    },
    addListener: (callback: (event: MediaQueryListEvent) => void) => {
      listeners.add(callback);
    },
    removeListener: (callback: (event: MediaQueryListEvent) => void) => {
      listeners.delete(callback);
    },
    dispatchEvent: () => true,
    dispatchChange: (nextMatches: boolean) => {
      matches = nextMatches;
      const event = { matches } as MediaQueryListEvent;
      listeners.forEach((cb) => cb(event));
    },
  } as TestMediaQueryList;

  return mql;
};

const headerFixture = (props = '') => html`
  <it-header ${props}>
    <div class="it-header-slim-wrapper">
      <ul aria-label="Navigazione accessoria">
        <li><a class="list-item" href="#">Slim link</a></li>
      </ul>
    </div>

    <div class="it-header-center-wrapper">
      <div class="it-header-center-content-wrapper">
        <div class="it-brand-wrapper">
          <a href="#"><span>Brand</span></a>
        </div>
        <div class="it-right-zone">
          <div class="it-socials">
            <ul>
              <li><a href="#">Social</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="it-header-navbar-wrapper">
      <nav aria-label="Navigazione principale">
        <div class="menu-wrapper">
          <ul aria-label="Menu principale">
            <li class="nav-item active">
              <a class="nav-link active" href="#" aria-current="page"><span>Link attivo</span></a>
            </li>
            <li class="nav-item disabled">
              <a class="nav-link disabled" href="#" aria-disabled="true"><span>Link disabilitato</span></a>
            </li>
          </ul>
          <ul class="navbar-nav navbar-secondary" aria-label="Menu secondario">
            <li class="nav-item">
              <a class="nav-link" href="#"><span>Secondario</span></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </it-header>
`;

describe('Header component', () => {
  let originalMatchMedia: typeof window.matchMedia;
  let mql: TestMediaQueryList;

  beforeEach(() => {
    originalMatchMedia = window.matchMedia;
    mql = createMatchMediaMock(false);
    window.matchMedia = (() => mql) as typeof window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  describe('rendering', () => {
    it('renders in light DOM', async () => {
      const el = await fixture<ItHeader>(headerFixture());
      await el.updateComplete;

      expect(el.shadowRoot).to.equal(null);
      expect(el.querySelector('.it-header-center-wrapper')).to.exist;
    });
  });

  describe('mobile modal mode', () => {
    it('creates modal in mobile mode and clones expected content', async () => {
      mql.dispatchChange(true);

      const el = await fixture<ItHeader>(headerFixture());
      await el.updateComplete;
      await aTimeout(0);

      const modal = el.querySelector('#it-nav-modal') as HTMLElement | null;
      expect(modal).to.exist;
      expect(modal?.getAttribute('position')).to.equal('left');
      expect(modal?.getAttribute('scrollable')).to.equal('true');

      const modalContent = modal?.querySelector('[slot="content"]') as HTMLElement | null;
      expect(modalContent).to.exist;
      expect(modalContent?.querySelector('.modal-nav')).to.exist;
      expect(modalContent?.querySelector('.it-socials')).to.exist;

      const brandInHeaderSlot = modal?.querySelector(
        '[slot="header"] .it-brand-wrapper, [slot="header"].it-brand-wrapper',
      );
      expect(brandInHeaderSlot).to.exist;
    });

    it('syncs labels and theme on property changes', async () => {
      mql.dispatchChange(true);

      const el = await fixture<ItHeader>(headerFixture());
      await el.updateComplete;
      await aTimeout(0);

      el.openAriaLabel = 'Apri menu mobile';
      el.closeAriaLabel = 'Chiudi menu mobile';
      el.modalHeaderTheme = 'dark';
      await el.updateComplete;

      const modal = el.querySelector('#it-nav-modal') as HTMLElement | null;
      expect(modal).to.exist;
      expect(modal?.getAttribute('close-label')).to.equal('Chiudi menu mobile');
      expect(modal?.classList.contains('modal-header-theme-dark')).to.be.true;

      const trigger = modal?.querySelector('it-button.custom-navbar-toggler') as HTMLElement | null;
      expect(trigger?.getAttribute('it-aria-label')).to.equal('Apri menu mobile');
    });

    it('hides brand in modal header when hideHeaderBrand is true', async () => {
      mql.dispatchChange(true);

      const el = await fixture<ItHeader>(headerFixture());
      await el.updateComplete;
      await aTimeout(0);

      el.hideHeaderBrand = true;
      await el.updateComplete;

      const modal = el.querySelector('#it-nav-modal') as HTMLElement | null;
      expect(modal?.classList.contains('hide-header-brand')).to.be.true;
      expect(modal?.querySelector('[slot="header"]')).to.equal(null);
    });
  });

  describe('mode switching', () => {
    it('removes modal when switching back to desktop mode', async () => {
      mql.dispatchChange(true);

      const el = await fixture<ItHeader>(headerFixture());
      await el.updateComplete;
      await aTimeout(0);

      expect(el.querySelector('#it-nav-modal')).to.exist;

      mql.dispatchChange(false);
      await el.updateComplete;
      await aTimeout(0);

      expect(el.querySelector('#it-nav-modal')).to.equal(null);
    });
  });
});
