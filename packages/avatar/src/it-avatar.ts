import { BaseLocalizedComponent } from '@italia/globals';
import { html, nothing } from 'lit';
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

  static override shadowRootOptions = {
    ...BaseLocalizedComponent.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: String, reflect: true }) size: AvatarSize = 'md';

  @property({ type: String, reflect: true }) variant: AvatarColor = '';

  @property({ type: String, reflect: true }) presence: AvatarPresence = '';

  @property({ type: String, reflect: true }) status: AvatarStatus = '';

  @property({ type: String, reflect: true }) type: AvatarType = '';

  @property({ type: String, reflect: true }) src = '';

  @property({ type: String, reflect: true }) alt = '';

  @property({ type: String, reflect: true }) text = '';

  @property({ type: String, reflect: true }) icon = '';

  private _imageLoadError = false;

  @property({ type: String, reflect: true }) href = '';

  @property({ type: String, reflect: true, attribute: 'avatar-title' }) avatarTitle = '';

  get __hasExplicitSize(): boolean {
    return this.hasAttribute('size');
  }

  override get focusElement(): HTMLElement | null {
    // Se c'è un link, usa quello
    const link = this.shadowRoot?.querySelector('a.avatar');
    if (link) return link as HTMLElement;
    return null;
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

  private getAvatarWrapperClasses() {
    return classMap({
      avatar: true,
      [`size-${this.size}`]: !!this.size,
      [`avatar-${this.variant}`]: !!this.variant,
      'avatar-extra-text': this.hasExtraTextContent,
      'avatar-dropdown': this.type === 'dropdown',
    });
  }

  private getAvatarClasses() {
    return classMap({
      avatar: true,
      [`size-${this.size}`]: !!this.size,
      [`avatar-${this.variant}`]: !!this.variant,
      'avatar-dropdown': this.type === 'dropdown',
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
      <div class="${this.getPresenceClasses()}">
        ${presenceIcon
          ? html`<it-icon name="${presenceIcon}" size="xs" variant="white" class="presence-icon"></it-icon>`
          : nothing}
        <span class="visually-hidden">${presenceLabel}: ${presenceText}</span>
      </div>
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
      <div class="${this.getStatusClasses()}">
        ${statusIcon
          ? html`<it-icon name="${statusIcon}" size="xs" variant="white" class="status-icon"></it-icon>`
          : nothing}
        <span class="visually-hidden">${statusLabel}: ${statusText}</span>
      </div>
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
      ${autoType === 'icon' ? this.renderIcon() : nothing}
      ${autoType === 'dropdown' ? html`<slot name="avatar-dropdown-content"></slot>` : nothing}
    `;

    return content;
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

    if (autoType === 'text' && !this.text) {
      this.logger.warn('Avatar: tipo text rilevato ma nessun contenuto testuale fornito. Aggiungi text="..."');
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

  private get hasExtraTextContent(): boolean {
    const extraTextSlot = this.shadowRoot?.querySelector('slot[name="extra-text"]') as HTMLSlotElement;
    return extraTextSlot?.assignedElements().length > 0 || false;
  }

  private onExtraTextSlotChange = () => {
    const extraTextSlot = this.shadowRoot?.querySelector('slot[name="extra-text"]') as HTMLSlotElement;
    if (extraTextSlot?.assignedElements().length > 0) {
      extraTextSlot?.assignedElements().forEach((el) => {
        el.classList.add('extra-text');
      });
    }
  };

  private getWrapperClasses() {
    return classMap({
      'avatar-wrapper': true,
      'avatar-extra-text': this.hasExtraTextContent,
    });
  }

  render() {
    const avatarContent = this.renderAvatarContent();

    const avatar =
      this.href && this.type !== 'dropdown'
        ? html`
            <a
              href="${this.href}"
              class="${this.getAvatarWrapperClasses()}"
              title="${ifDefined(this.avatarTitle || this.text || undefined)}"
              part="avatar focusable"
            >
              ${avatarContent}
            </a>
          `
        : html`<div class="${this.getAvatarClasses()}" part="avatar">${avatarContent}</div>`;

    return html`
      <div class="${this.getWrapperClasses()}">
        ${avatar}
        <slot name="extra-text" @slotchange="${this.onExtraTextSlotChange}" part="extra-text"></slot>
        <slot name="avatar-dropdown-content" part="avatar-dropdown-content"></slot>
        <slot name="presence" part="presence">${this.renderPresence()}</slot>
        <slot name="status" part="status">${this.renderStatus()}</slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-avatar': ItAvatar;
  }
}
