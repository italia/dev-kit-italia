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
          <it-progress class="it-navscroll-progressbar" aria-label="Progress bar"></it-progress>
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
    const progress = el.querySelector<HTMLElement>('it-progress');
    expect(progress).to.exist;

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
    const progress = el.querySelector<HTMLElement>('it-progress')!;
    scrollContainer.scrollTop = 50;
    scrollContainer.dispatchEvent(new Event('scroll'));
    console.log('value', progress.getAttribute('value'));
    expect(Number(progress.getAttribute('value'))).to.be.greaterThan(0);
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

describe('ItNavscroll — scrollspy con antenati posizionati', () => {
  let el: ItNavscroll;
  let scrollContainer: HTMLElement;

  // Riproduce la struttura generata da <it-section>: il contenuto finisce dentro
  // `.section-content`, che bootstrap-italia rende `position: relative`. Diventa
  // così l'offsetParent di ogni heading e ne azzera l'offsetTop.
  const section = (id: string) => `
    <div style="height:200px">
      <div style="position:relative">
        <h2 id="${id}">${id}</h2>
      </div>
    </div>
  `;

  beforeEach(async () => {
    scrollContainer = document.createElement('div');
    scrollContainer.id = 'positioned-scroll-container';
    scrollContainer.style.height = '200px';
    scrollContainer.style.overflowY = 'scroll';
    scrollContainer.innerHTML = ['s1', 's2', 's3', 's4', 's5'].map(section).join('');
    document.body.appendChild(scrollContainer);

    el = await fixture<ItNavscroll>(html`
      <it-navscroll breakpoint="1024" for="#positioned-scroll-container">
        <div class="link-list-wrapper">
          <nav>
            <ul class="link-list">
              <li class="nav-item">
                <a class="nav-link" href="#s1"><span>1</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#s2"><span>2</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#s3"><span>3</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#s4"><span>4</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#s5"><span>5</span></a>
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

  const activeHrefs = () =>
    Array.from(el.querySelectorAll<HTMLAnchorElement>('a.active')).map((a) => a.getAttribute('href'));

  it('marca la sezione realmente raggiunta, non l’ultima della lista', () => {
    // soglia: scrollTop + clientHeight * 0.25 = 300 + 50 = 350
    // le sezioni stanno a 0, 200, 400, 600, 800 → l’attiva è la seconda
    scrollContainer.scrollTop = 300;
    scrollContainer.dispatchEvent(new Event('scroll'));

    expect(activeHrefs()).to.deep.equal(['#s2']);
  });

  it('avanza di sezione man mano che si scorre', () => {
    scrollContainer.scrollTop = 0;
    scrollContainer.dispatchEvent(new Event('scroll'));
    expect(activeHrefs()).to.deep.equal(['#s1']);

    scrollContainer.scrollTop = 700;
    scrollContainer.dispatchEvent(new Event('scroll'));
    expect(activeHrefs()).to.deep.equal(['#s4']);
  });
});
