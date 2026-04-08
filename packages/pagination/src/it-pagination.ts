/* eslint-disable lit-a11y/click-events-have-key-events */

import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { when } from 'lit/directives/when.js';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import type { ItPaginationItem } from './it-pagination-item.js';
import type { PaginationAlignment } from './types.js';
import styles from './pagination.scss';

@customElement('it-pagination')
export class ItPagination extends BaseComponent {
  static styles = styles;

  static shadowRootOptions = { ...BaseComponent.shadowRootOptions, delegatesFocus: true };

  @queryAssignedElements({ selector: 'it-pagination-item' })
  private paginationItems!: ItPaginationItem[];

  @queryAssignedElements({ slot: 'prev' })
  private prevElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'next' })
  private nextElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'total' })
  private totalElements!: HTMLElement[];

  @property({ type: String, reflect: true })
  value = '1';

  @property({ type: String, reflect: true })
  total = undefined;

  @property({ type: String, reflect: true })
  align: PaginationAlignment = 'center';

  @property({ type: Boolean, reflect: true })
  disableResponsive = false;

  @property({ type: Boolean, reflect: true, attribute: 'simple-mode' })
  simpleMode = false;

  @property({ type: Number, reflect: true, attribute: 'visible-pages' })
  visiblePages = 5;

  @property({ type: String, attribute: 'it-aria-label', reflect: true })
  itAriaLabel = '';

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    if (
      changedProperties.has('value') ||
      changedProperties.has('total') ||
      changedProperties.has('simpleMode') ||
      changedProperties.has('visiblePages')
    ) {
      this.updatePaginationItems();
      this.updatePaginationItemsClasses();
      this.updateNavigationButtons();
    }
    if (changedProperties.has('disableResponsive') && changedProperties.get('disableResponsive') !== undefined) {
      this.updatePaginationItemsClasses();
    }
  }

  private emitPageChange(newPage: number) {
    const currentPage = parseInt(this.value, 10);
    const totalPages = this.total ? parseInt(this.total, 10) : this.paginationItems.length;

    if (newPage < 1) return;
    if (totalPages > 0 && newPage > totalPages) return;

    if (newPage === currentPage) return;
    const event = new CustomEvent('it-pagination-change', {
      detail: { page: newPage },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
    this.value = newPage.toString();
  }

  private handleItemClick(e: CustomEvent) {
    e.stopPropagation(); // Fermiamo l'evento interno, non serve che esca
    const page = parseInt(e.detail.page, 10);
    if (!Number.isNaN(page)) {
      this.emitPageChange(page);
    }
  }

  private handlePrevClick(e: MouseEvent) {
    e.preventDefault();

    const currentPage = parseInt(this.value, 10);
    if (currentPage > 1) {
      this.emitPageChange(currentPage - 1);
    }
  }

  private handleNextClick(e: MouseEvent) {
    e.preventDefault();
    const currentPage = parseInt(this.value, 10);
    const totalPages = this.total ? parseInt(this.total, 10) : this.paginationItems.length;

    // Se non c'è 'total', assumiamo che ci siano altre pagine finché ci sono items
    if (!totalPages || currentPage < totalPages) {
      this.emitPageChange(currentPage + 1);
    }
  }

  private updatePaginationItemsClasses() {
    if (this.paginationItems.length) {
      const pages = this.calculatePages();

      this.paginationItems.forEach((item) => {
        const isCurrentPage = item.page === this.value;
        const itemPageNum = parseInt(item.page, 10);
        const isInVisiblePages = pages.includes(itemPageNum);

        // Remove all classes first
        item.classList.remove('d-none', 'd-sm-flex');

        // In simple mode, hide all pagination items (we render current/total instead)
        if (this.simpleMode) {
          item.classList.add('d-none');
          return;
        }

        // In more mode, hide items not in visible pages
        if (!isInVisiblePages) {
          item.classList.add('d-none');
          return;
        }

        // Apply responsive hiding for non-current pages (when NOT disabled)
        if (!this.disableResponsive && !isCurrentPage) {
          item.classList.add('d-none', 'd-sm-flex');
        }
      });
    }
  }

  private updatePaginationItems() {
    if (this.paginationItems.length) {
      this.paginationItems.forEach((item) => {
        const isCurrentPage = item.page === this.value;
        // eslint-disable-next-line no-param-reassign
        item.current = isCurrentPage;
      });
    }
  }

  private updateNavigationButtons() {
    const currentPage = parseInt(this.value, 10);
    const totalPages = this.total ? parseInt(this.total, 10) : this.paginationItems.length;

    // Update prev button visual state
    if (this.prevElements.length) {
      this.prevElements.forEach((el) => {
        if (currentPage <= 1) {
          el.setAttribute('aria-disabled', 'true');
          el.classList.add('disabled');
          // el.setAttribute('tabindex', '-1');
        } else {
          el.removeAttribute('aria-disabled');
          el.classList.remove('disabled');
        }
        el.classList.add('page-link');
      });
    }

    // Update next button visual state
    if (this.nextElements.length) {
      this.nextElements.forEach((el) => {
        if (totalPages && currentPage >= totalPages) {
          el.setAttribute('aria-disabled', 'true');
          el.classList.add('disabled');
        } else {
          el.removeAttribute('aria-disabled');
          el.classList.remove('disabled');
        }
        el.classList.add('page-link');
      });
    }
  }

  private handleSlotChange() {
    this.updatePaginationItems();
    this.updatePaginationItemsClasses();
    this.updateNavigationButtons();
  }

  private handlePrevSlotChange() {
    this.updateNavigationButtons();
  }

  private handleNextSlotChange() {
    this.updateNavigationButtons();
  }

  private handleTotalSlotChange() {
    // Update component and rerender when total slot changes
    this.requestUpdate();
  }

  /**
   * Calculate which pages to display based on simpleMode and visiblePages
   * Returns an array of page numbers to show
   */
  private calculatePages(): number[] {
    const currentPage = parseInt(this.value, 10);
    const totalPages = this.total ? parseInt(this.total, 10) : this.paginationItems.length;

    if (this.simpleMode) {
      return [currentPage];
    }

    if (totalPages <= this.visiblePages) {
      // If total pages is less than visiblePages, show all
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // More mode: calculate which pages to show
    const halfVisiblePages = Math.floor(this.visiblePages / 2);
    let start = currentPage > halfVisiblePages ? currentPage - halfVisiblePages : 1;

    // Calculate the length based on visible pages
    const length = this.visiblePages;

    // Adjust start if we're near the end
    if (currentPage >= totalPages) {
      start -= halfVisiblePages;
    } else if (currentPage >= totalPages - halfVisiblePages) {
      start -= totalPages - (currentPage + 1);
    }

    // Make sure start is at least 1
    if (start < 1) {
      start = 1;
    }

    return Array.from({ length }, (_, i) => i + start).filter((page) => page <= totalPages);
  }

  override render() {
    const navClasses = this.composeClass('pagination-wrapper', this.totalElements.length > 0 && 'pagination-total');
    const ulClasses = this.composeClass('pagination', this.disableResponsive && 'pagination-responsive');

    const currentPage = parseInt(this.value, 10);
    const totalPages = this.total ? parseInt(this.total, 10) : this.paginationItems.length;
    const pages = this.calculatePages();

    const showFirstPage = totalPages > this.visiblePages && pages[0] > 1;
    const showFirstEllipsis = totalPages > this.visiblePages && pages[0] > 2;
    const showLastPage = totalPages > this.visiblePages && pages[pages.length - 1] < totalPages;
    const showLastEllipsis = totalPages > this.visiblePages && pages[pages.length - 1] < totalPages - 1;

    return html`
      <nav class="${navClasses}" aria-label="${this.itAriaLabel}">
        <ul class="${ulClasses}" @it-item-click="${this.handleItemClick}" part="pagination-list">
          <li class="pagination-prev-wrapper page-item" @click="${this.handlePrevClick}">
            <slot name="prev" @slotchange="${this.handlePrevSlotChange}"></slot>
          </li>

          ${when(
            this.simpleMode,
            () => html`
              <li class="page-item visually-hidden">
                <a class="page-link" href="#" aria-current="page"> Pagina ${currentPage} di ${totalPages} </a>
              </li>
              <li class="page-item active" part="current-page-simple-mode">
                <span class="page-link" aria-current="page">${currentPage}</span>
              </li>
              <li class="page-item" aria-hidden="true"><span class="page-link">/</span></li>
              <li class="page-item" part="total-pages-simple-mode">
                <span class="page-link">${totalPages}</span>
              </li>
            `,
            () => html`
              ${when(
                showFirstPage,
                () => html`
                  <li class="page-item more">
                    <a class="page-link" href="#" @click="${(e: MouseEvent) => this.handlePageClick(e, 1)}">1</a>
                  </li>
                `,
              )}
              ${when(
                showFirstEllipsis,
                () => html`
                  <li class="page-item more">
                    <span class="page-link">...</span>
                  </li>
                `,
              )}
              <slot @slotchange="${this.handleSlotChange}"></slot>
              ${when(
                showLastEllipsis,
                () => html`
                  <li class="page-item more">
                    <span class="page-link">...</span>
                  </li>
                `,
              )}
              ${when(
                showLastPage,
                () => html`
                  <li class="page-item more">
                    <a class="page-link" href="#" @click="${(e: MouseEvent) => this.handlePageClick(e, totalPages)}">
                      ${totalPages}
                    </a>
                  </li>
                `,
              )}
            `,
          )}

          <li class="pagination-next-wrapper page-item" @click="${this.handleNextClick}">
            <slot name="next" @slotchange="${this.handleNextSlotChange}"></slot>
          </li>
        </ul>

        <slot name="page-changer"></slot>
        <slot name="jump-to-page"></slot>
        <slot name="total" @slotchange="${this.handleTotalSlotChange}"></slot>
      </nav>
    `;
  }

  private handlePageClick(e: MouseEvent, page: number) {
    e.preventDefault();
    this.emitPageChange(page);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-pagination': ItPagination;
  }
}
