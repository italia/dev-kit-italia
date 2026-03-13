import { expect } from '@open-wc/testing';
import { ItToggle } from '../src/it-toggle.js';

describe('it-toggle', () => {
  let element: ItToggle;

  beforeEach(async () => {
    element = document.createElement('it-toggle') as ItToggle;
    document.body.appendChild(element);
    await element.updateComplete;
  });

  afterEach(() => {
    element?.remove();
  });

  it('should render', () => {
    expect(element).to.exist;
  });

  it('should be toggleable', () => {
    expect(element.checked).to.be.false;
    element.checked = true;
    expect(element.checked).to.be.true;
  });
});
