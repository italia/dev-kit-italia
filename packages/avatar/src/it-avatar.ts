import { BaseLocalizedComponent } from '@italia/globals';
import { html, nothing, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { registerTranslation } from '@italia/i18n';
import { type AvatarSize, type AvatarColor, type AvatarPresence, type AvatarStatus, type AvatarType } from './types.js';
import styles from './avatar.scss';

import it from './locales/it.js';
import en from './locales/en.js';

registerTranslation(it);
registerTranslation(en);

@customElement('it-avatar')
export class ItAvatar extends BaseLocalizedComponent {
  static styles = styles;

  @property({ type: String, reflect: true }) size: AvatarSize = 'md';

  @property({ type: String, reflect: true }) color: AvatarColor = '';

  @property({ type: String, reflect: true }) presence: AvatarPresence = '';

  @property({ type: String, reflect: true }) status: AvatarStatus = '';

  @property({ type: String, reflect: true }) type: AvatarType = '';

  @property({ type: String, reflect: true }) src = '';

  @property({ type: String, reflect: true }) alt = '';

  @property({ type: String, reflect: true }) text = '';

  @property({ type: String, reflect: true }) initials = '';

  @property({ type: String, reflect: true }) icon = '';

  private _imageLoadError = false;

  @property({ type: String, reflect: true }) href = '';

  @property({ type: String, reflect: true, attribute: 'avatar-title' }) avatarTitle = '';

  @property({ type: String, reflect: true, attribute: 'extra-text' }) extraText = '';

  @property({ type: String, reflect: true, attribute: 'extra-text-tag' }) extraTextTag: 'h3' | 'h4' | 'p' | 'time' =
    'h4';

  @property({ type: Boolean, reflect: true, attribute: 'extra-text-wrapper' }) extraTextWrapper = false;

  // GETTER PUBBLICO USABILE DAL GROUP PER SAPERE SE LA SIZE È STATA IMPOSTATA ESPPLICITAMENTE
  // (fallback a hasAttribute: mantiene il comportamento storico)
  get __hasExplicitSize(): boolean {
    return this.hasAttribute('size');
  }

  private getAutoType(): AvatarType {
    // Se type è specificato esplicitamente, usalo
    if (this.type !== '') {
      return this.type as Exclude<AvatarType, ''>;
    }

    // Determinazione automatica:
    // 1. Se c'è src → image
    // 2. Se c'è icon → icon
    // 3. Altrimenti → text
    if (this.src) {
      return 'image';
    }
    if (this.icon) {
      return 'icon';
    }
    return 'text';
  }

  private getInitials(): string {
    if (this.initials) {
      return this.initials;
    }

    if (this.text) {
      const words = this.text.trim().split(/\s+/);
      if (this.size === 'xs' || this.size === 'sm') {
        return words[0]?.charAt(0)?.toUpperCase() || '';
      }
      return (
        words
          .slice(0, 2)
          .map((word) => word.charAt(0)?.toUpperCase())
          .join('') || ''
      );
    }

    return '';
  }

  private getInitialsFromName(name: string): string {
    const words = name.trim().split(/\s+/);
    if (this.size === 'xs' || this.size === 'sm') {
      return words[0]?.charAt(0)?.toUpperCase() || '';
    }
    return (
      words
        .slice(0, 2)
        .map((word) => word.charAt(0)?.toUpperCase())
        .join('') || ''
    );
  }

  private getAvatarClasses() {
    return classMap({
      avatar: true,
      [`size-${this.size}`]: !!this.size,
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

    const presenceText = this.$t(`avatar_presence_${this.presence}`);
    const presenceLabel = this.$t('avatar_presence_label');

    // Icone di default per i diversi stati di presenza
    let presenceIcon = '';
    switch (this.presence) {
      case 'active':
        presenceIcon = 'it-check';
        break;
      case 'busy':
        presenceIcon = 'it-minus';
        break;
      case 'hidden':
        presenceIcon = '';
        break;
      default:
        presenceIcon = '';
    }

    return html`
      <slot name="presence">
        <div class="${this.getPresenceClasses()}">
          ${presenceIcon
            ? html`<it-icon name="${presenceIcon}" size="xs" color="white" class="presence-icon"></it-icon>`
            : nothing}
          <span class="visually-hidden">${presenceLabel}: ${presenceText}</span>
        </div>
      </slot>
    `;
  }

  private renderStatus() {
    if (!this.status) return nothing;

    const statusText = this.$t(`avatar_status_${this.status}`);
    const statusLabel = this.$t('avatar_status_label');

    // Icone di default per i diversi stati dello status
    let statusIcon = '';
    switch (this.status) {
      case 'approved':
        statusIcon = 'it-check';
        break;
      case 'declined':
        statusIcon = 'it-close';
        break;
      case 'notify':
        statusIcon = '';
        break;
      default:
        statusIcon = '';
    }

    return html`
      <slot name="status">
        <div class="${this.getStatusClasses()}">
          ${statusIcon
            ? html`<it-icon name="${statusIcon}" size="xs" color="white" class="status-icon"></it-icon>`
            : nothing}
          <span class="visually-hidden">${statusLabel}: ${statusText}</span>
        </div>
      </slot>
    `;
  }

  private renderImage() {
    if (!this.src || this._imageLoadError) {
      // Fallback su iniziali quando immagine non disponibile
      const fallbackText = this.alt || this.text || '';
      if (fallbackText) {
        const initials = this.getInitialsFromName(fallbackText);
        return html`
          <p aria-hidden="true">${initials}</p>
          <span class="visually-hidden">${fallbackText}</span>
        `;
      }
      return nothing;
    }

    return html`
      <img
        src="${this.src}"
        alt="${this.alt || this.text || ''}"
        @error="${this._onImageError}"
        ${this.text ? 'aria-hidden="true"' : ''}
      />
      ${this.text ? html`<span class="visually-hidden">${this.text}</span>` : nothing}
    `;
  }

  private _onImageError = () => {
    this._imageLoadError = true;
    this.requestUpdate();
  };

  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    super.willUpdate(changedProperties);

    // Reset image error when src changes
    if (changedProperties.has('src')) {
      this._imageLoadError = false;
    }
  }

  private renderText() {
    const initials = this.getInitials();
    if (!initials) return nothing;

    return html`
      <p aria-hidden="true">${initials}</p>
      ${this.text ? html`<span class="visually-hidden">${this.text}</span>` : nothing}
    `;
  }

  private renderIcon() {
    if (!this.icon) return nothing;

    const accessibleText = this.avatarTitle || this.text || this.alt || 'Icona';

    return html`
      <it-icon name="${this.icon}" aria-hidden="true"></it-icon>
      <span class="visually-hidden">${accessibleText}</span>
    `;
  }

  private renderAvatarContent() {
    const autoType = this.getAutoType();

    const content = html`
      ${autoType === 'image' ? this.renderImage() : nothing} ${autoType === 'text' ? this.renderText() : nothing}
      ${autoType === 'icon' ? this.renderIcon() : nothing} ${this.renderPresence()} ${this.renderStatus()}
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
        ${this.extraTextTag === 'time' ? html`<time>${this.extraText}</time>` : html`<p>${this.extraText}</p>`}
      </div>
    `;
  }

  updated() {
    const autoType = this.getAutoType();

    // Warning accessibilità automatici
    if (autoType === 'image' && this.src && !this.alt && !this.text) {
      this.logger.warn(
        'Avatar: immagine fornita senza testo alternativo (alt) o contenuto testuale (text). ' +
          'Questo impatta negativamente l\'accessibilità. Aggiungi alt="..." o text="..."',
      );
    }

    if (autoType === 'icon' && this.icon && !this.avatarTitle && !this.text && !this.alt) {
      this.logger.warn(
        'Avatar: icona fornita senza testo alternativo. ' +
          'Aggiungi avatar-title="..." o text="..." o alt="..." per l\'accessibilità.',
      );
    }

    if (autoType === 'text' && !this.text && !this.initials) {
      this.logger.warn(
        'Avatar: tipo text rilevato ma nessun contenuto testuale fornito. Aggiungi text="..." o initials="..."',
      );
    }

    if (this.href && !this.avatarTitle && !this.text) {
      this.logger.warn(
        'Avatar: link fornito senza titolo o contenuto testuale. ' +
          'Aggiungi avatar-title="..." o text="..." per l\'accessibilità.',
      );
    }

    if (this.src && this.icon) {
      this.logger.warn(
        'Avatar: sia src che icon sono specificati. Il tipo verrà determinato automaticamente come "image".',
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
      : html`<div class="${this.getAvatarClasses()}" part="avatar">${avatarContent}</div>`;

    if (this.extraTextWrapper) {
      return html`<div class="avatar-wrapper avatar-extra-text">${avatar} ${this.renderExtraText()}</div>`;
    }

    return avatar;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-avatar': ItAvatar;
  }
}
