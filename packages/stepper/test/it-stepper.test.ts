/// <reference types="mocha"/>

import { expect, fixture, html, elementUpdated, oneEvent } from '@open-wc/testing';
import '../src/index.js';
import '@italia/button';
import type { ItButton } from '@italia/button';
import type { ItStepper } from '../src/it-stepper.js';
import type { ItStepperStep } from '../src/it-stepper-step.js';

const renderSteps = () => html`
  <it-stepper-step icon="it-calendar"><span slot="label">Primo contenuto</span>Primo</it-stepper-step>
  <it-stepper-step icon="it-lock"><span slot="label">Secondo contenuto</span>Secondo</it-stepper-step>
  <it-stepper-step icon="it-settings"><span slot="label">Terzo contenuto</span>Terzo</it-stepper-step>
`;

const renderSixSteps = () => html`
  ${renderSteps()}
  <it-stepper-step icon="it-mail"><span slot="label">Quarto contenuto</span>Quarto</it-stepper-step>
  <it-stepper-step icon="it-file"><span slot="label">Quinto contenuto</span>Quinto</it-stepper-step>
  <it-stepper-step icon="it-check"><span slot="label">Sesto contenuto</span>Sesto</it-stepper-step>
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

  it('renders label slot content in each header list item', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="0">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const headerItems = el.shadowRoot?.querySelectorAll('.steppers-header li');
    expect(headerItems?.length).to.equal(3);
    expect(headerItems?.[0].textContent).to.contain('Primo contenuto');
    expect(headerItems?.[1].textContent).to.contain('Secondo contenuto');
    expect(headerItems?.[2].textContent).to.contain('Terzo contenuto');
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

  it('clamps out-of-range current to last slotted step', async () => {
    const el = await fixture<ItStepper>(html` <it-stepper current="99">${renderSteps()}</it-stepper> `);
    await waitForStepper(el);

    const steps = Array.from(el.querySelectorAll('it-stepper-step')) as ItStepperStep[];
    expect(el.current).to.equal(2);
    expect(steps[2].active).to.be.true;
  });

  it('shows mobile index and progress based on actual slotted step count', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" mobile-progress="bar">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const index = el.shadowRoot?.querySelector('.steppers-index');
    const progressbar = el.shadowRoot?.querySelector('.progress-bar');

    expect(index?.textContent?.trim()).to.equal('2/3');
    expect(progressbar?.getAttribute('aria-valuenow')).to.equal('50');
  });

  it('renders one dot per slotted step and marks the active one', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" mobile-progress="dots">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const dots = el.shadowRoot?.querySelectorAll('.steppers-dots li');
    expect(dots?.length).to.equal(3);
    expect(dots?.[0].classList.contains('done')).to.be.true;
    expect(dots?.[1].classList.contains('active')).to.be.true;
    expect(dots?.[1].classList.contains('done')).to.be.true;
    expect(dots?.[1].textContent).to.contain('Active');
  });

  it('fills the first dot on the first step', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="0" mobile-progress="dots">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const dots = el.shadowRoot?.querySelectorAll('.steppers-dots li');
    expect(dots?.[0].classList.contains('active')).to.be.true;
    expect(dots?.[0].classList.contains('done')).to.be.true;
    expect(dots?.[1].classList.contains('done')).to.be.false;
  });

  it('updates progress and dots while navigating through six rendered steps', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" mobile-progress="bar">${renderSixSteps()}</it-stepper>
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
    const el = await fixture<ItStepper>(html`<it-stepper current="2">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const nextButton = el.shadowRoot?.querySelector('.steppers-btn-next') as ItButton;
    expect(nextButton.disabled).to.be.true;

    el.current = 0;
    await waitForStepper(el);
    const prevButton = el.shadowRoot?.querySelector('.steppers-btn-prev') as ItButton;
    expect(prevButton.disabled).to.be.true;
  });

  it('disables the next button via next-disabled and re-enables it when cleared', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="0" next-disabled>${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const nextButton = el.shadowRoot?.querySelector('.steppers-btn-next') as ItButton;
    expect(nextButton.disabled).to.be.true;

    el.nextDisabled = false;
    await waitForStepper(el);
    expect(nextButton.disabled).to.be.false;
  });

  it('keeps the next button disabled at the last step even when next-disabled is false', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="2">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const nextButton = el.shadowRoot?.querySelector('.steppers-btn-next') as ItButton;
    expect(el.nextDisabled).to.be.false;
    expect(nextButton.disabled).to.be.true;
  });

  it('disables the confirm button via next-disabled', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="2" show-confirm next-disabled>${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const confirmButton = el.shadowRoot?.querySelector('.steppers-btn-confirm') as ItButton;
    expect(confirmButton.disabled).to.be.true;
  });

  it('does not emit it-stepper-confirm while next-disabled is set', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="2" show-confirm next-disabled>${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    let confirmed = false;
    el.addEventListener('it-stepper-confirm', () => {
      confirmed = true;
    });

    (el.shadowRoot?.querySelector('.steppers-btn-confirm') as ItButton).click();
    await waitForStepper(el);
    expect(confirmed).to.be.false;

    el.nextDisabled = false;
    await waitForStepper(el);
    (el.shadowRoot?.querySelector('.steppers-btn-confirm') as ItButton).click();
    await waitForStepper(el);
    expect(confirmed).to.be.true;
  });

  it('does not advance when the next button is clicked while next-disabled is set', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="0" next-disabled>${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    (el.shadowRoot?.querySelector('.steppers-btn-next') as ItButton).click();
    await waitForStepper(el);

    expect(el.current).to.equal(0);
  });

  it('emits a cancelable it-stepper-change when the next button is clicked', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="0">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const changeEvent = oneEvent(el, 'it-stepper-change') as Promise<CustomEvent>;
    (el.shadowRoot?.querySelector('.steppers-btn-next') as ItButton).click();

    const event = await changeEvent;
    expect(event.cancelable).to.be.true;
    expect(event.detail).to.deep.equal({ step: 1, prevStep: 0 });

    await waitForStepper(el);
    expect(el.current).to.equal(1);
  });

  it('blocks the step change when the next click event is prevented', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="0">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    el.addEventListener('it-stepper-change', (event) => event.preventDefault());
    (el.shadowRoot?.querySelector('.steppers-btn-next') as ItButton).click();
    await waitForStepper(el);

    expect(el.current).to.equal(0);
    const steps = Array.from(el.querySelectorAll('it-stepper-step')) as ItStepperStep[];
    expect(steps[0].active).to.be.true;
    expect(steps[1].active).to.be.false;
    expect(steps[1].confirmed).to.be.false;
  });

  it('emits a non-cancelable it-stepper-change from the public next and prev methods', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="1">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    el.addEventListener('it-stepper-change', (event) => event.preventDefault());

    const nextEvent = oneEvent(el, 'it-stepper-change') as Promise<CustomEvent>;
    el.next();
    expect((await nextEvent).cancelable).to.be.false;
    await waitForStepper(el);
    expect(el.current).to.equal(2);

    el.prev();
    await waitForStepper(el);
    expect(el.current).to.equal(1);
  });

  it('allows going back while next-disabled is set', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="1" next-disabled>${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const prevButton = el.shadowRoot?.querySelector('.steppers-btn-prev') as ItButton;
    expect(prevButton.disabled).to.not.be.ok;

    prevButton.click();
    await waitForStepper(el);
    expect(el.current).to.equal(0);
  });

  it('renders header variants with the expected state text', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" header-variant="numbers">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const numbers = el.shadowRoot?.querySelectorAll('.steppers-number');
    expect(numbers?.[0].textContent).to.contain('Confermato Step 1');
    expect(numbers?.[1].textContent).to.contain('Active Step');
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
    (el.shadowRoot?.querySelector('.steppers-save it-button') as ItButton).click();
    await saveEvent;

    const confirmEvent = oneEvent(el, 'it-stepper-confirm');
    (el.shadowRoot?.querySelector('.steppers-btn-confirm') as ItButton).click();
    await confirmEvent;
  });

  it('renders icon elements in the header for the icons variant', async () => {
    const el = await fixture<ItStepper>(html` <it-stepper header-variant="icons">${renderSteps()}</it-stepper> `);
    await waitForStepper(el);

    const headerItems = el.shadowRoot?.querySelectorAll('.steppers-header li');
    expect(headerItems?.length).to.equal(3);
    const firstItemIcon = headerItems?.[0].querySelector('it-icon.icon');
    expect(firstItemIcon).to.exist;
    expect(firstItemIcon?.getAttribute('name')).to.equal('it-calendar');
  });

  it('adds bg-dark class to the container when dark is set', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper dark>${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    expect(el.shadowRoot?.querySelector('.steppers')?.classList.contains('bg-dark')).to.be.true;
  });

  it('renders individual number spans in mobile index for the numbers variant', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" header-variant="numbers">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const index = el.shadowRoot?.querySelector('.steppers-index');
    const spans = index?.querySelectorAll('span');
    expect(spans?.length).to.equal(3);
    expect(spans?.[0].textContent?.trim()).to.equal('1');
    expect(spans?.[1].classList.contains('active')).to.be.true;
    expect(spans?.[1].textContent?.trim()).to.equal('2');
    expect(spans?.[2].textContent?.trim()).to.equal('3');
  });

  it('renders custom prev, next and confirm labels on buttons', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" prev-label="Precedente" next-label="Successivo">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const prevBtn = el.shadowRoot?.querySelector('.steppers-btn-prev');
    const nextBtn = el.shadowRoot?.querySelector('.steppers-btn-next');
    expect(prevBtn?.textContent).to.contain('Precedente');
    expect(nextBtn?.textContent).to.contain('Successivo');

    el.showConfirm = true;
    el.confirmLabel = 'Approva';
    await waitForStepper(el);
    const confirmBtn = el.shadowRoot?.querySelector('.steppers-btn-confirm');
    expect(confirmBtn?.textContent).to.contain('Approva');
  });

  it('renders confirm button instead of next when show-confirm is set', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper show-confirm>${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    expect(el.shadowRoot?.querySelector('.steppers-btn-confirm')).to.exist;
    expect(el.shadowRoot?.querySelector('.steppers-btn-next')).to.be.null;
  });

  it('renders save title and description in the save area', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper save-label="Salva" save-title="Bozza salvata" save-description="Le modifiche saranno conservate"
        >${renderSteps()}</it-stepper
      >
    `);
    await waitForStepper(el);

    const saveArea = el.shadowRoot?.querySelector('.steppers-save');
    expect(saveArea?.textContent).to.contain('Bozza salvata');
    expect(saveArea?.textContent).to.contain('Le modifiche saranno conservate');
  });

  it('shows check icon on confirmed steps in the text variant header', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="1">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    const confirmedLi = el.shadowRoot?.querySelector('.steppers-header li.confirmed');
    const successIcon = confirmedLi?.querySelector('it-icon.steppers-success');
    expect(successIcon).to.exist;
    expect(successIcon?.getAttribute('name')).to.equal('it-check');
  });

  it('does not emit it-stepper-change when already at the first or last step', async () => {
    const el = await fixture<ItStepper>(html`<it-stepper current="0">${renderSteps()}</it-stepper>`);
    await waitForStepper(el);

    let fired = false;
    el.addEventListener('it-stepper-change', () => {
      fired = true;
    });

    el.prev();
    await elementUpdated(el);
    expect(fired, 'prev() at first step should not fire').to.be.false;

    el.current = 2;
    await waitForStepper(el);
    el.next();
    await elementUpdated(el);
    expect(fired, 'next() at last step should not fire').to.be.false;
  });

  it('is accessible in the default and numbered variants', async () => {
    const base = await fixture<ItStepper>(html`
      <it-stepper current="1" prev-label="Indietro" next-label="Avanti">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(base);
    await expect(base).to.be.accessible();

    const numbered = await fixture<ItStepper>(html`
      <it-stepper current="1" header-variant="numbers" mobile-progress="dots" prev-label="Indietro" next-label="Avanti"
        >${renderSteps()}</it-stepper
      >
    `);
    await waitForStepper(numbered);
    await expect(numbered).to.be.accessible();
  });

  it('forwards the nav arrows as the prev-icon and next-icon parts', async () => {
    const el = await fixture<ItStepper>(html`
      <it-stepper current="1" prev-label="Indietro" next-label="Avanti">${renderSteps()}</it-stepper>
    `);
    await waitForStepper(el);

    const prevIcon = el.shadowRoot!.querySelector('.steppers-btn-prev it-icon')!;
    const nextIcon = el.shadowRoot!.querySelector('.steppers-btn-next it-icon')!;

    // `it-icon` exposes its svg as part `icon`, but that only reaches the tree holding
    // the element — this shadow root. Without forwarding, a consumer has no selector
    // that gets to the arrows at all.
    expect(prevIcon.getAttribute('exportparts')).to.equal('icon: prev-icon');
    expect(nextIcon.getAttribute('exportparts')).to.equal('icon: next-icon');

    // Distinct names on purpose: the header check marks are `it-icon` too, so a shared
    // `icon` part would make one consumer rule hit all of them.
    const headerIcons = el.shadowRoot!.querySelectorAll('.steppers-header it-icon');
    expect(headerIcons.length).to.be.greaterThan(0);
    headerIcons.forEach((icon) => {
      expect(icon.getAttribute('exportparts')).to.equal(null);
    });
  });
});
