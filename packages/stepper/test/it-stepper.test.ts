/// <reference types="mocha"/>

import { expect, fixture, html, elementUpdated, oneEvent } from '@open-wc/testing';
import '../src/index.js';
import type { ItStepper } from '../src/it-stepper.js';
import type { ItStepperStep } from '../src/it-stepper-step.js';

const renderSteps = () => html`
  <it-stepper-step label="Primo contenuto" icon="it-calendar">Primo</it-stepper-step>
  <it-stepper-step label="Secondo contenuto" icon="it-lock">Secondo</it-stepper-step>
  <it-stepper-step label="Terzo contenuto" icon="it-settings">Terzo</it-stepper-step>
`;

const renderSixSteps = () => html`
  ${renderSteps()}
  <it-stepper-step label="Quarto contenuto" icon="it-mail">Quarto</it-stepper-step>
  <it-stepper-step label="Quinto contenuto" icon="it-file">Quinto</it-stepper-step>
  <it-stepper-step label="Sesto contenuto" icon="it-check">Sesto</it-stepper-step>
`;

async function waitForStepper(el: ItStepper) {
  await elementUpdated(el);
  await elementUpdated(el);
  await Promise.all(Array.from(el.querySelectorAll('it-stepper-step')).map((step) => elementUpdated(step)));
}

describe('<it-stepper>', () => {
  it('registers the stepper and step custom elements', async () => {
    await fixture(html`<it-stepper>${renderSteps()}</it-stepper>`);

    expect(customElements.get('it-stepper')).to.be.a('function');
    expect(customElements.get('it-stepper-step')).to.be.a('function');
  });

  it('syncs active and confirmed state from current', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="1">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const steps = Array.from(el.querySelectorAll('it-stepper-step')) as ItStepperStep[];
    expect(steps[0].confirmed).to.be.true;
    expect(steps[0].active).to.be.false;
    expect(steps[1].active).to.be.true;
    expect(steps[2].active).to.be.false;

    const activeItem = el.shadowRoot?.querySelector('.steppers-header li.active');
    expect(activeItem?.getAttribute('aria-current')).to.equal('step');
  });

  it('clamps current to the last slotted step even when total-steps is higher', async () => {
    const el = await fixture<ItStepper>(html` <it-stepper current="99" total-steps="6">${renderSteps()}</it-stepper> `);
    await waitForStepper(el);

    const steps = Array.from(el.querySelectorAll('it-stepper-step')) as ItStepperStep[];
    expect(el.current).to.equal(2);
    expect(steps[2].active).to.be.true;
  });

  it('uses total-steps for mobile index and progress indicators', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" total-steps="6" mobile-progress="bar">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const index = el.shadowRoot?.querySelector('.steppers-index');
    const progressbar = el.shadowRoot?.querySelector('.progress-bar');

    expect(index?.textContent?.trim()).to.equal('2/6');
    expect(progressbar?.getAttribute('aria-valuenow')).to.equal('20');
  });

  it('renders one dot per total step and marks the active one', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" total-steps="6" mobile-progress="dots">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const dots = el.shadowRoot?.querySelectorAll('.steppers-dots li');
    expect(dots?.length).to.equal(6);
    expect(dots?.[0].classList.contains('done')).to.be.true;
    expect(dots?.[1].classList.contains('active')).to.be.true;
    expect(dots?.[1].classList.contains('done')).to.be.true;
    expect(dots?.[1].textContent).to.contain('Attivo');
  });

  it('fills the first dot on the first step', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="0" total-steps="6" mobile-progress="dots">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const dots = el.shadowRoot?.querySelectorAll('.steppers-dots li');
    expect(dots?.[0].classList.contains('active')).to.be.true;
    expect(dots?.[0].classList.contains('done')).to.be.true;
    expect(dots?.[1].classList.contains('done')).to.be.false;
  });

  it('updates progress and dots while navigating through six rendered steps', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" total-steps="6" mobile-progress="bar">${renderSixSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    el.next();
    await waitForStepper(el);

    const progressbar = el.shadowRoot?.querySelector('.progress-bar');
    expect(progressbar?.getAttribute('aria-valuenow')).to.equal('40');

    el.mobileProgress = 'dots';
    await waitForStepper(el);

    const dots = el.shadowRoot?.querySelectorAll('.steppers-dots li');
    expect(dots?.length).to.equal(6);
    expect(dots?.[1].classList.contains('done')).to.be.true;
    expect(dots?.[2].classList.contains('active')).to.be.true;
    expect(dots?.[2].classList.contains('done')).to.be.true;

    el.next();
    await waitForStepper(el);

    const updatedDots = el.shadowRoot?.querySelectorAll('.steppers-dots li');
    expect(updatedDots?.[2].classList.contains('done')).to.be.true;
    expect(updatedDots?.[3].classList.contains('active')).to.be.true;
    expect(updatedDots?.[3].classList.contains('done')).to.be.true;
  });

  it('emits it-stepper-change when navigating with next and prev', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="1">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const nextEvent = oneEvent(el, 'it-stepper-change') as Promise<CustomEvent>;
    el.next();
    expect((await nextEvent).detail).to.deep.equal({ step: 2, prevStep: 1 });

    const prevEvent = oneEvent(el, 'it-stepper-change') as Promise<CustomEvent>;
    el.prev();
    expect((await prevEvent).detail).to.deep.equal({ step: 1, prevStep: 2 });
  });

  it('disables navigation at the first and last slotted steps', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="2" total-steps="6">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const nextButton = el.shadowRoot?.querySelector('.steppers-btn-next') as HTMLButtonElement;
    expect(nextButton.disabled).to.be.true;

    el.current = 0;
    await waitForStepper(el);
    const prevButton = el.shadowRoot?.querySelector('.steppers-btn-prev') as HTMLButtonElement;
    expect(prevButton.disabled).to.be.true;
  });

  it('renders header variants with the expected state text', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" header-variant="numbers">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const numbers = el.shadowRoot?.querySelectorAll('.steppers-number');
    expect(numbers?.[0].textContent).to.contain('Confermato Step 1');
    expect(numbers?.[1].textContent).to.contain('Attivo Step');
  });

  it('can hide header, content and nav independently', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper hide-header hide-content hide-nav>${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    expect(el.shadowRoot?.querySelector('.steppers-header')).to.not.exist;
    expect(el.shadowRoot?.querySelector('.steppers-content')).to.not.exist;
    expect(el.shadowRoot?.querySelector('.steppers-nav')).to.not.exist;
    expect(el.shadowRoot?.querySelector('div[hidden] slot')).to.exist;
  });

  it('adds the opt-in class for desktop-visible mobile progress', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper mobile-progress="dots" mobile-progress-on-desktop>${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    expect(el.shadowRoot?.querySelector('.steppers')?.classList.contains('mobile-progress-on-desktop')).to.be.true;
  });

  it('emits save and confirm events', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper save-label="Salva" show-confirm>${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const saveEvent = oneEvent(el, 'it-stepper-save');
    (el.shadowRoot?.querySelector('.steppers-save button') as HTMLButtonElement).click();
    await saveEvent;

    const confirmEvent = oneEvent(el, 'it-stepper-confirm');
    (el.shadowRoot?.querySelector('.steppers-btn-confirm') as HTMLButtonElement).click();
    await confirmEvent;
  });

  it('is accessible in the default and numbered variants', async () => {
    const base = await fixture<ItStepper>(html`<it-stepper current="1">${renderSteps()}</it-stepper>`);
    await waitForStepper(base);
    await expect(base).to.be.accessible();

    const numbered = await fixture<ItStepper>(html`
      <it-stepper current="1" header-variant="numbers" mobile-progress="dots">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(numbered);
    await expect(numbered).to.be.accessible();
  });
});
