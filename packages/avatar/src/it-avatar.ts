import { BaseComponent } from '@italia/globals';
import { html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type AvatarSize, type AvatarColor, type AvatarPresence, type AvatarStatus, type AvatarType } from './types.js';
import styles from './avatar.scss';

@customElement('it-avatar')
export class ItAvatar extends BaseComponent {
  static styles = styles;

  @property({ type: String, reflect: true }) size: AvatarSize = 'md';

  @property({ type: String, reflect: true }) color: AvatarColor = '';

  @property({ type: String, reflect: true }) presence: AvatarPresence = '';

  @property({ type: String, reflect: true }) status: AvatarStatus = '';

  @property({ type: String, reflect: true }) type: AvatarType = 'image';

  @property({ type: String, reflect: true }) src = '';

  @property({ type: String, reflect: true }) alt = '';

  @property({ type: String, reflect: true }) text = '';

  @property({ type: String, reflect: true }) initials = '';

  @property({ type: String, reflect: true }) icon = '';

  @property({ type: String, reflect: true }) href = '';

  @property({ type: String, reflect: true, attribute: 'avatar-title' }) avatarTitle = '';

  @property({ type: String, reflect: true, attribute: 'extra-text' }) extraText = '';

  @property({ type: String, reflect: true, attribute: 'extra-text-tag' }) extraTextTag: 'h3' | 'h4' | 'p' | 'time' = 'h4';

  @property({ type: Boolean, reflect: true, attribute: 'extra-text-wrapper' }) extraTextWrapper = false;

  private getInitials(): string {
    if (this.initials) {
      return this.initials;
    }
    
    if (this.text) {
      const words = this.text.trim().split(/\s+/);
      if (this.size === 'xs' || this.size === 'sm') {
        return words[0]?.charAt(0)?.toUpperCase() || '';
      }
      return words.slice(0, 2).map(word => word.charAt(0)?.toUpperCase()).join('') || '';
    }
    
    return '';
  }

  private getAvatarClasses() {
    return classMap({
      avatar: true,
      [`size-${this.size}`]: this.size !== 'md',
      [`avatar-${this.color}`]: !!this.color,
    });
  }

  private getPresenceClasses() {
    return classMap({
      'avatar-presence': true,
      [this.presence]: !!this.presence,
    });
  }

  private getStatusClasses() {
    return classMap({
      'avatar-status': true,
      [this.status]: !!this.status,
    });
  }

  private renderPresence() {
    if (!this.presence) return nothing;
    
    let presenceText = '';
    switch (this.presence) {
      case 'active':
        presenceText = 'attivo';
        break;
      case 'busy':
        presenceText = 'non disponibile';
        break;
      case 'hidden':
        presenceText = 'invisibile';
        break;
      default:
        presenceText = '';
        break;
    }

    return html`
      <div class="${this.getPresenceClasses()}">
        <span class="visually-hidden">Presenza: ${presenceText}</span>
      </div>
    `;
  }

  private renderStatus() {
    if (!this.status) return nothing;
    
    let statusText = '';
    switch (this.status) {
      case 'approved':
        statusText = 'approvato';
        break;
      case 'declined':
        statusText = 'respinto';
        break;
      case 'notify':
        statusText = 'notifica';
        break;
      default:
        statusText = '';
        break;
    }

    return html`
      <div class="${this.getStatusClasses()}">
        <span class="visually-hidden">Stato: ${statusText}</span>
      </div>
    `;
  }

  private renderImage() {
    if (!this.src) return nothing;

    return html`
      <img 
        src="${this.src}" 
        alt="${this.alt || this.text}"
        ${this.text ? 'aria-hidden="true"' : ''}
      />
      ${this.text ? html`<span class="visually-hidden">${this.text}</span>` : nothing}
    `;
  }

  private renderText() {
    const initials = this.getInitials();
    if (!initials) return nothing;

    return html`
      ${initials}
      ${this.text ? html`<span class="visually-hidden">${this.text}</span>` : nothing}
    `;
  }

  private renderIcon() {
    if (!this.icon) return nothing;

    return html`
      <it-icon name="${this.icon}" aria-hidden="true"></it-icon>
      <span class="visually-hidden">${this.avatarTitle || 'Icona'}</span>
    `;
  }

  private renderAvatarContent() {
    const content = html`
      ${this.type === 'image' ? this.renderImage() : nothing}
      ${this.type === 'text' ? this.renderText() : nothing}
      ${this.type === 'icon' ? this.renderIcon() : nothing}
      ${this.renderPresence()}
      ${this.renderStatus()}
    `;

    return content;
  }

  private renderExtraText() {
    if (!this.extraText) return nothing;

    const textContent = this.text || this.avatarTitle;
    
    return html`
      <div class="extra-text">
        ${this.extraTextTag === 'h3' ? html`<h3>${textContent}</h3>` : nothing}
        ${this.extraTextTag === 'h4' ? html`<h4>${textContent}</h4>` : nothing}
        ${this.extraTextTag === 'p' ? html`<p>${textContent}</p>` : nothing}
        ${this.extraTextTag === 'time' ? html`<time>${textContent}</time>` : nothing}
        ${this.extraTextTag === 'time' 
          ? html`<time>${this.extraText}</time>`
          : html`<p>${this.extraText}</p>`
        }
      </div>
    `;
  }

  updated() {
    // Validation warnings
    if (this.type === 'image' && this.src && !this.alt && !this.text) {
      this.logger.warn(
        'Avatar image provided without alternative text or text content. ' +
        'This negatively impacts accessibility compliance.'
      );
    }

    if (this.href && !this.avatarTitle && !this.text) {
      this.logger.warn(
        'Avatar link provided without title or text content. ' +
        'Providing an accessible label is strongly recommended.'
      );
    }
  }

  render() {
    const avatarContent = this.renderAvatarContent();

    const avatar = this.href 
      ? html`
          <a 
            href="${this.href}" 
            class="${this.getAvatarClasses()}"
            title="${ifDefined(this.avatarTitle || this.text || undefined)}"
            part="avatar focusable"
          >
            ${avatarContent}
          </a>
        `
      : html`
          <div 
            class="${this.getAvatarClasses()}"
            part="avatar"
          >
            ${avatarContent}
          </div>
        `;

    if (this.extraTextWrapper) {
      return html`
        <div class="avatar-wrapper avatar-extra-text">
          ${avatar}
          ${this.renderExtraText()}
        </div>
      `;
    }

    return avatar;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-avatar': ItAvatar;
  }
}
