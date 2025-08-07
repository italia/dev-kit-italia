import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseComponent } from '@italia/globals';

@customElement('it-section')
export class ItSection extends BaseComponent {
  @property({ type: String }) variant?: 'muted' | 'emphasis' | 'primary';

  @property({ type: String }) image = '';

  @property({ type: Boolean }) inverse = false;

  private sectionId?: string;

  // Light DOM for accessibility - aria-labelledby does not cross shadow boundaries
  // This allows the component to be accessible while still using Shadow DOM for styling encapsulation
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback?.();
    this.sectionId = this.generateId('it-section');
  }

  updated() {
    this.organizeContent();
    this.updateAriaLabelledBy();
    this.updateInverseClass();
  }

  private updateInverseClass() {
    const section = this.querySelector('section');
    if (!section) return;

    const contentWrapper = section.querySelector('.section-content');
    if (!contentWrapper) return;

    if (this.inverse) {
      contentWrapper.classList.add('white-color');
    } else {
      contentWrapper.classList.remove('white-color');
    }
  }

  private organizeContent() {
    const section = this.querySelector('section');
    if (!section) return;

    // Moves all user content into the section-content div
    const existingContent = section.querySelector('.section-content');
    if (existingContent) return;

    // Create wrapper for the content
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('section-content');
    if (this.inverse) {
      contentWrapper.classList.add('white-color');
    }

    // Move all child nodes (except section) into the wrapper
    const children = Array.from(this.childNodes).filter(
      (node) => node !== section && node.nodeType === Node.ELEMENT_NODE,
    );

    children.forEach((child) => {
      contentWrapper.appendChild(child);
    });

    // Add wrapper to the section
    section.appendChild(contentWrapper);
  }

  private updateAriaLabelledBy() {
    const section = this.querySelector('section');
    if (!section) return;

    // Searches for heading in the content area
    const contentWrapper = section.querySelector('.section-content');
    const headings = contentWrapper
      ? contentWrapper.querySelectorAll('h1, h2, h3, h4, h5, h6')
      : this.querySelectorAll('h1, h2, h3, h4, h5, h6');

    let headingId: string | undefined;

    for (const heading of headings) {
      const el = heading as HTMLElement;
      if (el.id) {
        headingId = el.id;
        break;
      }
    }

    // If no heading with ID is found, generate an ID for the first heading
    if (!headingId && headings.length > 0) {
      const firstHeading = headings[0] as HTMLElement;
      headingId = this.generateId('section-heading');
      firstHeading.id = headingId;
    }

    if (headingId) {
      section.setAttribute('aria-labelledby', headingId);
    } else {
      section.removeAttribute('aria-labelledby');
    }
  }

  render() {
    const wrapperClasses = {
      section: true,
      [`section-${this.variant}`]: Boolean(this.variant),
      'section-image': Boolean(this.image),
    };

    return html`
      <section id="${this.sectionId}" class="${classMap(wrapperClasses)}" part="section">
        ${this.image
          ? html`
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper">
                    <img src="${this.image}" alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            `
          : null}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-section': ItSection;
  }
}
