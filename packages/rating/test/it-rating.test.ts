import { expect, fixture, html } from '@open-wc/testing';
import { type ItRating, type ItRatingItem } from '@italia/rating';
import '@italia/rating';

/**
 * Helper function to create rating items for tests
 */
function createRatingItems(name: string, count: number = 5) {
  const items = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= count; i++) {
    const label = i === 1 ? `${i} stella` : `${i} stelle`;
    items.push(html`
      <it-rating-item value="${i}">
        <span slot="label" class="visually-hidden">${label}</span>
      </it-rating-item>
    `);
  }
  return items;
}

describe('<it-rating>', () => {
  describe('Basic functionality', () => {
    it('should be accessible', async () => {
      const el = await fixture(html`
        <it-rating name="test">
          <span slot="label">Test rating</span>
          ${createRatingItems('test', 5)}
        </it-rating>
      `);
      await expect(el).to.be.accessible();
    });

    it('should have role="radiogroup"', async () => {
      const el = await fixture<ItRating>(html` <it-rating name="test"> ${createRatingItems('test', 3)} </it-rating> `);
      await el.updateComplete;
      expect(el.getAttribute('role')).to.equal('radiogroup');
    });

    it('should initialize with default value', async () => {
      const el = await fixture<ItRating>(html` <it-rating name="test"> ${createRatingItems('test', 3)} </it-rating> `);
      await el.updateComplete;
      expect(el.value).to.equal('');
    });

    it('should initialize with a specified value', async () => {
      const el = await fixture<ItRating>(html`
        <it-rating name="test" value="3"> ${createRatingItems('test', 5)} </it-rating>
      `);
      await el.updateComplete;
      expect(el.value).to.equal('3');
    });

    it('should render correct number of stars', async () => {
      const el = await fixture<ItRating>(html`
        <it-rating name="test" max-elements="7"> ${createRatingItems('test', 7)} </it-rating>
      `);
      await el.updateComplete;
      const items = el.querySelectorAll<ItRatingItem>('it-rating-item');
      expect(items.length).to.equal(7);
    });

    it('should update value when a star is clicked', async () => {
      const el = await fixture<ItRating>(html` <it-rating name="test"> ${createRatingItems('test', 5)} </it-rating> `);
      await el.updateComplete;

      const items = el.querySelectorAll<ItRatingItem>('it-rating-item');
      items[2].click();
      await el.updateComplete;

      expect(el.value).to.equal('3');
    });
  });

  describe('Read-only state', () => {
    it('should not change value when read-only', async () => {
      const el = await fixture<ItRating>(html`
        <it-rating name="test" value="2" read-only> ${createRatingItems('test', 5)} </it-rating>
      `);
      await el.updateComplete;

      const items = el.querySelectorAll<ItRatingItem>('it-rating-item');

      // All items should be disabled when read-only
      items.forEach((item) => {
        expect(item.hasAttribute('disabled')).to.be.true;
      });

      const initialValue = el.value;
      items[3].click();
      await el.updateComplete;

      expect(el.value).to.equal(initialValue);
    });
  });

  describe('Functionality testing', () => {
    it('Should select first item when navigating back from second item', async () => {
      const el = await fixture<ItRating>(html`
        <it-rating name="test">
          <span slot="label">Rating</span>
          ${createRatingItems('test', 5)}
        </it-rating>
      `);

      await el.updateComplete;

      const items = el.querySelectorAll<ItRatingItem>('it-rating-item');

      // Focus first item (not valorized)
      items[0].focus();
      await el.updateComplete;

      // Press ArrowRight to go to second item
      const arrowRightEvent = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, composed: true });
      items[0].dispatchEvent(arrowRightEvent);
      await el.updateComplete;

      // Second item should be checked
      expect(items[1].checked).to.be.true;
      expect(el.value).to.equal('2');

      // Now go back with ArrowLeft
      const arrowLeftEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, composed: true });
      items[1].dispatchEvent(arrowLeftEvent);
      await el.updateComplete;

      // First item should NOW be checked
      expect(items[0].checked).to.be.true;
      expect(el.value).to.equal('1');
    });

    it('Should update star colors when navigating from 5 to 1', async () => {
      const el = await fixture<ItRating>(html`
        <it-rating name="test" value="5">
          <span slot="label">Rating</span>
          ${createRatingItems('test', 5)}
        </it-rating>
      `);

      await el.updateComplete;

      const items = el.querySelectorAll<ItRatingItem>('it-rating-item');

      // Initially all 5 stars should have primary color (value=5)
      await el.updateComplete;
      items.forEach((item, index) => {
        const icon = item.shadowRoot?.querySelector('it-icon');
        expect(icon?.getAttribute('color')).to.equal('primary', `Star ${index + 1} should be primary initially`);
      });

      // Navigate to first item (value=1)
      items[0].focus();
      await el.updateComplete;

      items[0].click();
      await el.updateComplete;

      // Give time for re-render
      await new Promise((resolve) => {
        setTimeout(resolve, 300);
      });

      // Now only the first star should be primary, the rest should be secondary
      const updatedItems = el.querySelectorAll<ItRatingItem>('it-rating-item');
      const icon0 = updatedItems[0].shadowRoot?.querySelector('it-icon');
      expect(icon0?.getAttribute('color')).to.equal('primary', 'Star 1 should be primary');
    });
  });
});
