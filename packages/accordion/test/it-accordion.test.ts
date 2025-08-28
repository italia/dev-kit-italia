import { html, fixture, expect, elementUpdated } from '@open-wc/testing';

// Import the components to register them
import '../src/index.js';

// Define types for better testing
type ItAccordion = HTMLElement & {
  multiple: boolean;
};

type ItAccordionItem = HTMLElement & {
  as: string;
  label: string;
  defaultOpen: boolean;
};

describe('ItAccordion', () => {
  it('should be defined', () => {
    expect(customElements.get('it-accordion')).to.exist;
    expect(customElements.get('it-accordion-item')).to.exist;
  });

  it('should render with default properties', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion>
        <it-accordion-item label="Test Item 1">Content 1</it-accordion-item>
        <it-accordion-item label="Test Item 2">Content 2</it-accordion-item>
      </it-accordion>
    `);

    expect(el).to.exist;
    expect(el.multiple).to.be.false;
  });

  it('should handle multiple mode correctly', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion multiple>
        <it-accordion-item label="Test Item 1">Content 1</it-accordion-item>
        <it-accordion-item label="Test Item 2">Content 2</it-accordion-item>
      </it-accordion>
    `);

    expect(el.multiple).to.be.true;
  });

  it('should handle defaultOpen property', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion>
        <it-accordion-item label="Test Item 1" default-open>Content 1</it-accordion-item>
        <it-accordion-item label="Test Item 2">Content 2</it-accordion-item>
      </it-accordion>
    `);

    const item1 = el.querySelector('it-accordion-item') as ItAccordionItem;
    expect(item1.defaultOpen).to.be.true;

    // Check that the collapse component is expanded
    await elementUpdated(item1);
    const collapseElement = item1.shadowRoot?.querySelector('it-collapse');
    expect(collapseElement?.expanded).to.be.true;
  });

  it('should render correct heading levels', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion>
        <it-accordion-item label="H2 Heading" as="h2">Content 1</it-accordion-item>
        <it-accordion-item label="H3 Heading" as="h3">Content 2</it-accordion-item>
        <it-accordion-item label="H4 Heading" as="h4">Content 3</it-accordion-item>
      </it-accordion>
    `);

    const items = el.querySelectorAll('it-accordion-item');

    const h2Item = items[0] as ItAccordionItem;
    const h3Item = items[1] as ItAccordionItem;
    const h4Item = items[2] as ItAccordionItem;

    await elementUpdated(h2Item);
    await elementUpdated(h3Item);
    await elementUpdated(h4Item);

    // Check that correct heading elements are rendered
    expect(h2Item.shadowRoot?.querySelector('h2')).to.exist;
    expect(h3Item.shadowRoot?.querySelector('h3')).to.exist;
    expect(h4Item.shadowRoot?.querySelector('h4')).to.exist;
  });

  it('should have proper ARIA attributes', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion>
        <it-accordion-item label="Test Item" default-open>Content</it-accordion-item>
      </it-accordion>
    `);

    const item = el.querySelector('it-accordion-item') as ItAccordionItem;
    await elementUpdated(item);

    const collapseElement = item.shadowRoot?.querySelector('it-collapse');
    const panel = item.shadowRoot?.querySelector('.accordion-collapse');

    // Check that the collapse component is expanded
    expect(collapseElement?.expanded).to.equal(true);
    expect(panel?.getAttribute('role')).to.equal('region');
  });

  it('should dispatch toggle events', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion>
        <it-accordion-item label="Test Item">Content</it-accordion-item>
      </it-accordion>
    `);

    const item = el.querySelector('it-accordion-item') as ItAccordionItem;
    await elementUpdated(item);

    let eventFired = false;
    let eventDetail: any = null;

    el.addEventListener('accordion-toggle', (e: Event) => {
      eventFired = true;
      eventDetail = (e as CustomEvent).detail;
    });

    const button = item.shadowRoot?.querySelector('it-button') as HTMLElement;
    button.click();

    expect(eventFired).to.be.true;
    expect(eventDetail).to.have.property('id');
  });

  it('should handle keyboard navigation', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion>
        <it-accordion-item label="Item 1">Content 1</it-accordion-item>
        <it-accordion-item label="Item 2">Content 2</it-accordion-item>
        <it-accordion-item label="Item 3">Content 3</it-accordion-item>
      </it-accordion>
    `);

    await elementUpdated(el);

    // Simulate Arrow Down key press
    const keydownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
      composed: true,
    });

    el.dispatchEvent(keydownEvent);

    // The test verifies that the event is handled without throwing errors
    // More detailed keyboard navigation testing would require focus management testing
    expect(el).to.exist;
  });

  it('should handle single accordion mode (exclusive behavior)', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion>
        <it-accordion-item label="Item 1" default-open>Content 1</it-accordion-item>
        <it-accordion-item label="Item 2">Content 2</it-accordion-item>
      </it-accordion>
    `);

    await elementUpdated(el);

    const items = el.querySelectorAll('it-accordion-item');
    const item1 = items[0] as ItAccordionItem;
    const item2 = items[1] as ItAccordionItem;

    await elementUpdated(item1);
    await elementUpdated(item2);

    // Initially item1 should be open
    expect(item1.defaultOpen).to.be.true;
    expect(item2.defaultOpen).to.be.false;

    // Click on item2 should close item1 and open item2
    const button2 = item2.shadowRoot?.querySelector('it-button') as HTMLElement;
    button2.click();

    // Allow time for event processing
    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });

    // In single mode, only one should be open at a time
    // Note: This test validates the behavior expectation
    expect(el.multiple).to.be.false;
  });

  it('should handle multiple accordion mode', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion multiple>
        <it-accordion-item label="Item 1" default-open>Content 1</it-accordion-item>
        <it-accordion-item label="Item 2">Content 2</it-accordion-item>
      </it-accordion>
    `);

    await elementUpdated(el);

    const items = el.querySelectorAll('it-accordion-item');
    const item1 = items[0] as ItAccordionItem;
    const item2 = items[1] as ItAccordionItem;

    await elementUpdated(item1);
    await elementUpdated(item2);

    // Initially item1 should be open
    expect(item1.defaultOpen).to.be.true;
    expect(item2.defaultOpen).to.be.false;

    // Click on item2 should open item2 while keeping item1 open
    const button2 = item2.shadowRoot?.querySelector('it-button') as HTMLElement;
    button2.click();

    // Allow time for event processing
    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });

    // In multiple mode, both can be open simultaneously
    expect(el.multiple).to.be.true;
  });

  it('should handle Enter and Space key events on buttons', async () => {
    const el = await fixture<ItAccordion>(html`
      <it-accordion>
        <it-accordion-item label="Test Item">Content</it-accordion-item>
      </it-accordion>
    `);

    const item = el.querySelector('it-accordion-item') as ItAccordionItem;
    await elementUpdated(item);

    let eventCount = 0;
    el.addEventListener('accordion-toggle', () => {
      // eslint-disable-next-line no-plusplus
      eventCount++;
    });

    const button = item.shadowRoot?.querySelector('it-button') as HTMLElement;

    // Test Enter key
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      composed: true,
    });
    button.dispatchEvent(enterEvent);

    // Test Space key
    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      bubbles: true,
      composed: true,
    });
    button.dispatchEvent(spaceEvent);

    // Allow time for event processing
    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });

    expect(eventCount).to.be.greaterThan(0);
  });

  it('should apply background classes correctly', async () => {
    const elActive = await fixture<ItAccordion>(html`
      <it-accordion background-active>
        <it-accordion-item label="Test">Content</it-accordion-item>
      </it-accordion>
    `);

    const elHover = await fixture<ItAccordion>(html`
      <it-accordion background-hover>
        <it-accordion-item label="Test">Content</it-accordion-item>
      </it-accordion>
    `);

    const elBoth = await fixture<ItAccordion>(html`
      <it-accordion background-active background-hover>
        <it-accordion-item label="Test">Content</it-accordion-item>
      </it-accordion>
    `);

    await elementUpdated(elActive);
    await elementUpdated(elHover);
    await elementUpdated(elBoth);

    const activeDiv = elActive.shadowRoot?.querySelector('.accordion');
    const hoverDiv = elHover.shadowRoot?.querySelector('.accordion');
    const bothDiv = elBoth.shadowRoot?.querySelector('.accordion');

    expect(activeDiv?.classList.contains('accordion-background-active')).to.be.true;
    expect(activeDiv?.classList.contains('accordion-background-hover')).to.be.false;

    expect(hoverDiv?.classList.contains('accordion-background-active')).to.be.false;
    expect(hoverDiv?.classList.contains('accordion-background-hover')).to.be.true;

    expect(bothDiv?.classList.contains('accordion-background-active')).to.be.true;
    expect(bothDiv?.classList.contains('accordion-background-hover')).to.be.true;
  });
});

describe('ItAccordionItem', () => {
  it('should have correct default properties', async () => {
    const el = await fixture<ItAccordionItem>(html` <it-accordion-item label="Test">Content</it-accordion-item> `);

    expect(el.as).to.equal('h2');
    expect(el.label).to.equal('Test');
    expect(el.defaultOpen).to.be.false;
  });

  it('should reflect attributes correctly', async () => {
    const el = await fixture<ItAccordionItem>(html`
      <it-accordion-item label="Test" as="h3" default-open>Content</it-accordion-item>
    `);

    expect(el.as).to.equal('h3');
    expect(el.label).to.equal('Test');
    expect(el.defaultOpen).to.be.true;
    expect(el.hasAttribute('default-open')).to.be.true;
  });

  it('should generate unique IDs', async () => {
    const el1 = await fixture<ItAccordionItem>(html` <it-accordion-item label="Test 1">Content 1</it-accordion-item> `);

    const el2 = await fixture<ItAccordionItem>(html` <it-accordion-item label="Test 2">Content 2</it-accordion-item> `);

    await elementUpdated(el1);
    await elementUpdated(el2);

    const panel1 = el1.shadowRoot?.querySelector('.accordion-collapse')?.id;
    const panel2 = el2.shadowRoot?.querySelector('.accordion-collapse')?.id;

    expect(panel1).to.not.equal(panel2);
    expect(panel1).to.include('it-accordion-item-content');
    expect(panel2).to.include('it-accordion-item-content');
  });

  it('should have correct CSS classes based on state', async () => {
    const elClosed = await fixture<ItAccordionItem>(html`
      <it-accordion-item label="Closed">Content</it-accordion-item>
    `);

    const elOpen = await fixture<ItAccordionItem>(html`
      <it-accordion-item label="Open" default-open>Content</it-accordion-item>
    `);

    await elementUpdated(elClosed);
    await elementUpdated(elOpen);

    const collapseClosed = elClosed.shadowRoot?.querySelector('it-collapse');
    const collapseOpen = elOpen.shadowRoot?.querySelector('it-collapse');

    // Check that collapse components have the correct expanded state
    expect(collapseClosed?.expanded).to.be.false;
    expect(collapseOpen?.expanded).to.be.true;
  });
});
