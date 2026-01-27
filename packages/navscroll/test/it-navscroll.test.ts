/// <reference types="mocha" />

import '@italia/navscroll';
import { expect, fixture, html } from '@open-wc/testing';
import type { ItNavscroll } from '@italia/navscroll';

describe('ItNavscroll', () => {
  let el: ItNavscroll;
  let scrollContainer: HTMLElement;

  beforeEach(async () => {
    scrollContainer = document.createElement('div');
    scrollContainer.id = 'scroll-container';
    scrollContainer.style.height = '200px';
    scrollContainer.style.overflowY = 'scroll';
    scrollContainer.innerHTML = `
      <section id="p1" style="height:100px"></section>
      <section id="p1_1" style="height:100px"></section>
      <section id="p1_1_1" style="height:100px"></section>
      <section id="p1_1_2" style="height:100px"></section>
      <section id="p2" style="height:100px"></section>
    `;
    document.body.appendChild(scrollContainer);

    el = await fixture<ItNavscroll>(html`
      <it-navscroll breakpoint="1024" open-label="Naviga fra le sezioni" sticky="" for="#scroll-container">
        <div class="link-list-wrapper">
          <h3>Header</h3>
          <div class="progress">
            <div
              class="progress-bar it-navscroll-progressbar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Progress bar"
            ></div>
          </div>
          <nav>
            <ul class="link-list">
              <li class="nav-item">
                <a class="nav-link active" href="#p1"><span>1. Introduzione </span></a>
                <ul class="link-list">
                  <li class="nav-item">
                    <a class="nav-link" href="#p1_1"><span>1.1 Elemento annidato </span></a>
                    <ul class="tertiary link-list">
                      <li class="nav-item">
                        <a class="nav-link" href="#p1_1_1"><span>1.1.1 Elemento annidato </span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#p1_1_2"><span>1.1.2 Elemento annidato </span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#p1_1_3"><span>1.1.3 Elemento annidato </span></a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#p1_2"><span>1.2 Elemento annidato </span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#p1_3"><span>1.3 Elemento annidato </span></a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#p2"><span>2. Seconda sezione </span></a>
                <ul class="link-list">
                  <li class="nav-item">
                    <a class="nav-link" href="#p2_1"><span>2.1 Elemento annidato </span></a>
                    <ul class="tertiary link-list">
                      <li class="nav-item">
                        <a class="nav-link" href="#p2_1_1"><span>2.1.1 Elemento annidato </span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#p2_1_2"><span>2.1.2 Elemento annidato </span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#p2_1_3"><span>2.1.3 Elemento annidato </span></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </it-navscroll>
    `);
  });

  afterEach(() => {
    scrollContainer.remove();
  });

  it('renders wrapper, progress bar e nav', () => {
    expect(el.querySelector('.link-list-wrapper')).to.exist;
    const progress = el.querySelector<HTMLElement>('.progress-bar.it-navscroll-progressbar');
    expect(progress).to.exist;
    expect(progress?.getAttribute('role')).to.equal('progressbar');

    const nav = el.querySelector('nav');
    expect(nav).to.exist;
    expect(nav?.querySelectorAll('a.nav-link').length).to.be.greaterThan(0);
  });

  it('click su link semplice aggiorna active e aria-current', () => {
    const link = el.querySelector<HTMLAnchorElement>('a[href="#p2"]')!;
    link.click();

    expect(link.classList.contains('active')).to.be.true;
    expect(link.getAttribute('aria-current')).to.equal('location');

    const other = el.querySelector<HTMLAnchorElement>('a[href="#p1"]')!;
    expect(other.classList.contains('active')).to.be.false;
  });

  it('click su link annidato aggiorna genitori e aria-current', () => {
    const nestedLink = el.querySelector<HTMLAnchorElement>('a[href="#p1_1_2"]')!;
    nestedLink.click();

    expect(nestedLink.classList.contains('active')).to.be.true;
    expect(nestedLink.getAttribute('aria-current')).to.equal('location');

    // Genitori
    const parent1 = el.querySelector<HTMLAnchorElement>('a[href="#p1_1"]')!;
    const parent2 = el.querySelector<HTMLAnchorElement>('a[href="#p1"]')!;
    expect(parent1.classList.contains('active')).to.be.true;
    expect(parent2.classList.contains('active')).to.be.true;

    // Solo link cliccato ha aria-current
    expect(parent1.getAttribute('aria-current')).to.be.null;
    expect(parent2.getAttribute('aria-current')).to.be.null;
  });

  it('scroll container aggiorna progress bar', () => {
    const progress = el.querySelector<HTMLElement>('.progress-bar.it-navscroll-progressbar')!;
    scrollContainer.scrollTop = 50;
    scrollContainer.dispatchEvent(new Event('scroll'));
    console.log('aria-valuenow', progress.getAttribute('aria-valuenow'));
    expect(Number(progress.getAttribute('aria-valuenow'))).to.be.greaterThan(0);
  });

  it('modal mobile mostra trigger con label e si aggiorna su link annidato', () => {
    el.updateMode(true); // forza modalità modal
    const trigger = el.querySelector<HTMLButtonElement>('it-modal [slot="trigger"]')!;
    expect(trigger.textContent?.trim()).to.equal('Naviga fra le sezioni');

    const nestedLink = el.querySelector<HTMLAnchorElement>('a[href="#p1_1_1"]')!;
    nestedLink.click();
    expect(trigger.textContent?.trim()).to.equal('1.1.1 Elemento annidato');
  });

  it('exitModal rimuove modal e ripristina menu', () => {
    el.updateMode(true);
    const modal = el.querySelector('it-modal')!;
    el.exitModal();

    expect(el.querySelector('it-modal')).to.be.null;
    expect(el.querySelector('.link-list-wrapper')).to.exist;
    expect(modal.contains(el.querySelector('.link-list-wrapper'))).to.be.false;
  });
});
