import { ReactiveController, ReactiveControllerHost } from 'lit';

export interface RovingTabindexConfig<T extends HTMLElement> {
  /**
   * Selector or function to get the items to manage
   */
  getItems: () => T[];

  /**
   * Callback when an item is selected/activated
   */
  onSelect?: (item: T, event: KeyboardEvent | PointerEvent | MouseEvent) => void;

  /**
   * Whether items wrap around (last -> first and vice versa)
   * @default true
   */
  wrap?: boolean;

  /**
   * Direction of navigation
   * @default 'both'
   */
  direction?: 'horizontal' | 'vertical' | 'both';

  /**
   * Whether to select items on focus (vs just focusing)
   * @default false
   */
  selectOnFocus?: boolean;

  /**
   * Custom logic to determine if an item should be skipped
   * @default (item) => item.hasAttribute('disabled')
   */
  skipItem?: (item: T) => boolean;
}

/**
 * Roving Tabindex Controller
 *
 * Implements the ARIA roving tabindex pattern for keyboard navigation.
 * See: https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex
 *
 * Usage:
 * ```ts
 * private rovingTabindex = new RovingTabindexController(this, {
 *   getItems: () => Array.from(this.querySelectorAll('my-item')),
 *   onSelect: (item) => this.selectItem(item),
 * });
 * ```
 */
export class RovingTabindexController<T extends HTMLElement> implements ReactiveController {
  private host: ReactiveControllerHost;

  private config: RovingTabindexConfig<T> & {
    wrap: boolean;
    direction: 'horizontal' | 'vertical' | 'both';
    selectOnFocus: boolean;
    skipItem: (item: T) => boolean;
  };

  constructor(host: ReactiveControllerHost, config: RovingTabindexConfig<T>) {
    this.host = host;
    this.config = {
      wrap: true,
      direction: 'both',
      selectOnFocus: false,
      skipItem: (item) => item.hasAttribute('disabled') || (item as any).disabled === true,
      ...config,
    };
    host.addController(this);
  }

  // eslint-disable-next-line class-methods-use-this
  hostConnected(): void {
    // Controller is ready when host connects
  }

  // eslint-disable-next-line class-methods-use-this
  hostDisconnected(): void {
    // Cleanup if needed
  }

  /**
   * Update tabindex values for all items
   * @param activeIndex - Index of the item that should be tabbable (default: 0 or first non-disabled)
   */
  updateTabindices(activeIndex?: number): void {
    const items = this.config.getItems();
    if (!items || items.length === 0) {
      return;
    }

    // Find the active index
    let targetIndex = activeIndex ?? 0;

    // If no active index specified, use first non-disabled item
    if (activeIndex === undefined) {
      targetIndex = items.findIndex((item) => !this.config.skipItem(item));
      if (targetIndex === -1) {
        targetIndex = 0; // Fallback to first item if all disabled
      }
    }

    // Set tabindex for all items
    items.forEach((item, index) => {
      const itemElement = item;
      if (this.config.skipItem(itemElement)) {
        // eslint-disable-next-line no-param-reassign
        itemElement.tabIndex = -1;
      } else {
        // eslint-disable-next-line no-param-reassign
        itemElement.tabIndex = index === targetIndex ? 0 : -1;
      }
    });
  }

  /**
   * Handle keyboard navigation
   * @param currentItem - The currently focused item
   * @param event - The keyboard event
   * @returns true if the event was handled, false otherwise
   */
  handleKeydown(currentItem: T, event: KeyboardEvent): boolean {
    const { direction } = this.config;
    const { key } = event;

    // Determine if this key should be handled based on direction
    const isVertical = key === 'ArrowUp' || key === 'ArrowDown';
    const isHorizontal = key === 'ArrowLeft' || key === 'ArrowRight';
    const isHome = key === 'Home';
    const isEnd = key === 'End';

    const shouldHandle =
      isHome ||
      isEnd ||
      (direction === 'both' && (isVertical || isHorizontal)) ||
      (direction === 'vertical' && isVertical) ||
      (direction === 'horizontal' && isHorizontal);

    if (!shouldHandle) {
      return false;
    }

    // Prevent default behavior (page scrolling)
    event.preventDefault();

    const items = this.config.getItems();
    const currentIndex = items.indexOf(currentItem);

    if (currentIndex === -1) {
      return false;
    }

    let nextIndex = currentIndex;

    // Handle Home/End keys
    if (isHome) {
      nextIndex = 0;
    } else if (isEnd) {
      nextIndex = items.length - 1;
    } else {
      // Handle arrow keys
      const isNext = key === 'ArrowDown' || key === 'ArrowRight';
      const isPrev = key === 'ArrowUp' || key === 'ArrowLeft';

      if (isNext) {
        nextIndex = this.getNextIndex(items, currentIndex, 1);
      } else if (isPrev) {
        nextIndex = this.getNextIndex(items, currentIndex, -1);
      }
    }

    // Skip disabled items
    nextIndex = this.findNextValidIndex(items, nextIndex, nextIndex > currentIndex ? 1 : -1);

    if (nextIndex !== -1 && nextIndex !== currentIndex) {
      const nextItem = items[nextIndex];

      // Update tabindices
      this.updateTabindices(nextIndex);

      // Focus the next item
      nextItem.focus();

      // Optionally select/activate the item
      if (this.config.selectOnFocus && this.config.onSelect) {
        this.config.onSelect(nextItem, event);
      }

      return true;
    }

    return false;
  }

  /**
   * Get the next index based on direction
   */
  private getNextIndex(items: T[], currentIndex: number, direction: 1 | -1): number {
    const { wrap } = this.config;
    let nextIndex = currentIndex + direction;

    if (wrap) {
      // Wrap around
      if (nextIndex < 0) {
        nextIndex = items.length - 1;
      } else if (nextIndex >= items.length) {
        nextIndex = 0;
      }
    } else {
      // Clamp to bounds
      nextIndex = Math.max(0, Math.min(items.length - 1, nextIndex));
    }

    return nextIndex;
  }

  /**
   * Find the next valid (non-disabled) index
   */
  private findNextValidIndex(items: T[], startIndex: number, direction: 1 | -1): number {
    const maxAttempts = items.length;
    let attempts = 0;
    let index = startIndex;

    while (attempts < maxAttempts) {
      if (!this.config.skipItem(items[index])) {
        return index;
      }

      index = this.getNextIndex(items, index, direction);
      attempts += 1;
    }

    // All items are disabled
    return -1;
  }

  /**
   * Set focus to a specific item
   */
  focusItem(item: T): void {
    const items = this.config.getItems();
    const index = items.indexOf(item);

    if (index !== -1) {
      this.updateTabindices(index);
      item.focus();
    }
  }

  /**
   * Set focus to the first non-disabled item
   */
  focusFirst(): void {
    const items = this.config.getItems();
    const firstValidIndex = this.findNextValidIndex(items, 0, 1);

    if (firstValidIndex !== -1) {
      this.focusItem(items[firstValidIndex]);
    }
  }

  /**
   * Set focus to the last non-disabled item
   */
  focusLast(): void {
    const items = this.config.getItems();
    const lastValidIndex = this.findNextValidIndex(items, items.length - 1, -1);

    if (lastValidIndex !== -1) {
      this.focusItem(items[lastValidIndex]);
    }
  }
}
