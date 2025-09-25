import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { type AvatarGroupSize, type AvatarGroupDirection } from './types.js';
import styles from './avatar-group.scss';
import { ItAvatar } from './it-avatar.js';

@customElement('it-avatar-group')
export class ItAvatarGroup extends BaseComponent {
  static styles = styles;

  @property({ type: String, reflect: true }) size: AvatarGroupSize = 'md';

  @property({ type: String, reflect: true }) direction: AvatarGroupDirection = 'vertical';

  private _slot?: HTMLSlotElement;

  private getGroupClassesStr() {
    // ritorna stringa di classi (come facevi con composeClass)
    const classes = ['avatar-group'];
    if (this.direction === 'horizontal') classes.push('avatar-group-stacked');
    return classes.join(' ');
  }

  firstUpdated() {
    // registra slotchange
    this._slot = this.shadowRoot?.querySelector('slot') || undefined;
    if (this._slot) {
      this._slot.addEventListener('slotchange', this._onSlotChange);
    }
    // una prima propagazione
    this._propagatePropertiesToChildren();
  }

  disconnectedCallback() {
    if (this._slot) {
      this._slot.removeEventListener('slotchange', this._onSlotChange);
    }
    super.disconnectedCallback?.();
  }

  updated(changedProps: Map<string, unknown>) {
    // se cambia size o direction, ricalcola e ripropaga
    if (changedProps.has('size') || changedProps.has('direction')) {
      this._propagatePropertiesToChildren();
    }
  }

  private _onSlotChange = () => {
    this._propagatePropertiesToChildren();
  };

  /**
   * Cerca ricorsivamente it-avatar dentro i nodi assegnati e applica la size
   * Inoltre applica le classi al <ul> che l'autore può aver passato nello slot.
   */
  private _propagatePropertiesToChildren() {
    const slot = this._slot || this.shadowRoot?.querySelector('slot');
    if (!slot) return;

    const assigned = (slot as HTMLSlotElement).assignedNodes({ flatten: true });
    const avatars: ItAvatar[] = [];

    const collectFromElement = (el: Element) => {
      // se l'elemento è esso stesso un it-avatar
      if (el.tagName.toLowerCase() === 'it-avatar') {
        avatars.push(el as unknown as ItAvatar);
      }
      // se l'elemento è un <ul>, aggiungiamo le classi del gruppo
      if (el.tagName.toLowerCase() === 'ul') {
        const classes = this.getGroupClassesStr().split(/\s+/).filter(Boolean);
        classes.forEach((c) => el.classList.add(c));
      }
      // raccogliamo it-avatar annidati
      const nested = Array.from(el.querySelectorAll('it-avatar'));
      nested.forEach((n) => avatars.push(n as unknown as ItAvatar));
      // se ci sono <ul> annidate (caso in cui autore ha fatto wrapper), aggiungile le classi
      const uls = Array.from(el.querySelectorAll('ul'));
      uls.forEach((u) => {
        const classes = this.getGroupClassesStr().split(/\s+/).filter(Boolean);
        classes.forEach((c) => u.classList.add(c));
      });
    };

    assigned.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        collectFromElement(node as Element);
      }
    });

    // se non abbiamo avatar direttamente dai nodi assegnati, prova una query su host (fallback)
    if (avatars.length === 0) {
      const found = Array.from(this.querySelectorAll('it-avatar')) as ItAvatar[];
      avatars.push(...found);
    }

    // Propaga la size: rispetta i figli che hanno dichiarato esplicitamente la size
    avatars.forEach((avatar) => {
      // se il componente figlio espone __hasExplicitSize usalo; altrimenti fallback a hasAttribute
      const explicitFlag = (avatar as any).__hasExplicitSize;
      const hasExplicit = typeof explicitFlag === 'boolean' ? explicitFlag : avatar.hasAttribute('size');

      if (!hasExplicit) {
        // assegna la proprietà (serve a Lit per ri-renderizzare) e l'attributo per coerenza
        avatar.size = this.size;
        try {
          avatar.setAttribute('size', this.size);
        } catch (e) {
          // ignore se non permesso
        }
        avatar.requestUpdate?.();
      }
    });
  }

  render() {
    // Non imposto <ul> qui: supporto il caso in cui l'autore passi già un <ul> nello slot.
    // In alternativa si può ripristinare la logica "il componente crea sempre il <ul>" se preferisci.
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-avatar-group': ItAvatarGroup;
  }
}
