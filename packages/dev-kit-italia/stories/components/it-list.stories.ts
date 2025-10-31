import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@italia/icon';
import '@italia/button';
import '@italia/avatar';

const meta = {
  title: 'Componenti/List',
  // tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ============================================
// TIPOLOGIE DI LISTA
// ============================================

export const ListaSemplice: Story = {
  name: 'Lista semplice solo testo',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="it-right-zone">
              <span class="text">Link</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
    },
  },
};

export const ListaConAvatar: Story = {
  name: 'Lista con avatar',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <it-avatar
              type="image"
              size="md"
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Anna Barbieri"
              text="Anna Barbieri"
            ></it-avatar>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <it-avatar
              type="image"
              size="md"
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Anna Barbieri"
              text="Anna Barbieri"
            ></it-avatar>
            <div class="it-right-zone">
              <span class="text">Link</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <it-avatar
              type="image"
              size="md"
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Anna Barbieri"
              text="Anna Barbieri"
            ></it-avatar>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
};

export const ListaConIcona: Story = {
  name: 'Lista con icona',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-rounded-icon">
              <it-icon name="it-folder"></it-icon>
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="it-rounded-icon">
              <it-icon name="it-folder"></it-icon>
            </div>
            <div class="it-right-zone">
              <span class="text">Link</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <div class="it-rounded-icon">
              <it-icon name="it-folder"></it-icon>
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
};

export const ListaConImmagine: Story = {
  name: 'Lista con immagine',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-thumb ratio ratio-16x9">
              <img src="https://placehold.co/400x300.png?text=thumb" alt="descrizione immagine" />
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="it-thumb ratio ratio-4x3">
              <img src="https://placehold.co/400x300.png?text=thumb" alt="descrizione immagine" />
            </div>
            <div class="it-right-zone">
              <span class="text">Link</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <div class="it-thumb ratio ratio-1x1">
              <img src="https://placehold.co/400x300.png?text=thumb" alt="descrizione immagine" />
            </div>
            <div class="it-right-zone">
              <span class="text">Testo</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
};

// ============================================
// LISTA CON AZIONI
// ============================================

export const ListaConFreccia: Story = {
  name: 'Con freccia',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <a href="#" class="list-item">
            <div class="it-right-zone">
              <span class="text">Link</span>
              <it-icon name="it-chevron-right" color="primary" size="sm"></it-icon>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="list-item">
            <div class="it-right-zone">
              <span class="text">Link</span>
              <it-icon name="it-chevron-right" color="primary" size="sm"></it-icon>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `,
};

export const ListaConAzioniMultiple: Story = {
  name: 'Con azioni multiple',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <span class="text">Testo</span>
              <span class="it-multiple">
                <a href="#" aria-label="Testo - Azione 1">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Testo - Azione 2">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Testo - Azione 3">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <a href="#">
                <span class="text">Link</span>
              </a>
              <span class="it-multiple">
                <a href="#" aria-label="Link - Azione 1">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 2">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 3">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <a href="#">
                <span class="text">Link</span>
              </a>
              <span class="it-multiple">
                <a href="#" aria-label="Link - Azione 1">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 2">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 3">
                  <it-icon name="it-code-circle" color="primary"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
};

// ============================================
// ALTRE VARIAZIONI
// ============================================

export const ListaConMetadata: Story = {
  name: 'Con metadata',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <it-avatar
              type="image"
              size="md"
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Anna Barbieri"
              text="Anna Barbieri"
            ></it-avatar>
            <div class="it-right-zone">
              <span class="text">Testo</span>
              <span class="metadata">metadata testo</span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <it-avatar
              type="image"
              size="md"
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Anna Barbieri"
              text="Anna Barbieri"
            ></it-avatar>
            <div class="it-right-zone">
              <span class="text">Testo</span>
              <span class="metadata"><a href="#">metadata link</a></span>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="list-item">
            <it-avatar
              type="image"
              size="md"
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Anna Barbieri"
              text="Anna Barbieri"
            ></it-avatar>
            <div class="it-right-zone">
              <span class="text">Link</span>
              <span class="metadata">metadata testo</span>
            </div>
          </a>
        </li>
        <li>
          <div class="list-item">
            <it-avatar
              type="image"
              size="md"
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Anna Barbieri"
              text="Anna Barbieri"
            ></it-avatar>
            <div class="it-right-zone">
              <a href="#">
                <span class="text">Link</span>
              </a>
              <span class="metadata"><a href="#">metadata link</a></span>
            </div>
          </div>
        </li>
        <li>
          <a class="list-item" href="#">
            <it-avatar
              type="image"
              size="md"
              src="https://randomuser.me/api/portraits/women/41.jpg"
              alt="Anna Barbieri"
              text="Anna Barbieri"
            ></it-avatar>
            <div class="it-right-zone">
              <span class="text">Link</span>
              <span class="metadata">metadata testo</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  `,
};

export const ListaConTestoAggiuntivo: Story = {
  name: 'Con testo aggiuntivo, azioni multiple e metadata',
  render: () => html`
    <div class="it-list-wrapper">
      <ul class="it-list">
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <div>
                <h4 class="text m-0">Testo</h4>
                <p class="small m-0">Lorem ipsum dolor sit amet.</p>
              </div>
              <span class="it-multiple">
                <span class="metadata">metadata testo</span>
                <a href="#" aria-label="Testo - Azione 1">
                  <it-icon color="primary" name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Testo - Azione 2">
                  <it-icon color="primary" name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Testo - Azione 3">
                  <it-icon color="primary" name="it-code-circle" label="Codice"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <div>
                <h4 class="text m-0">Testo</h4>
                <p class="small m-0">Lorem ipsum dolor sit amet.</p>
              </div>
              <span class="it-multiple">
                <span class="metadata"><a href="#">metadata link</a></span>
                <a href="#" aria-label="Testo 2 - Azione 1">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Testo 2 - Azione 2">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Testo 2 - Azione 3">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <div>
                <h4 class="text m-0"><a href="#">Link</a></h4>
                <p class="small m-0">Lorem ipsum dolor sit amet.</p>
              </div>
              <span class="it-multiple">
                <span class="metadata"><a href="#">metadata link</a></span>
                <a href="#" aria-label="Link - Azione 1">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 2">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 3">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div class="list-item">
            <div class="it-right-zone">
              <div>
                <h4 class="text m-0"><a href="#">Link</a></h4>
                <p class="small m-0">Lorem ipsum dolor sit amet.</p>
              </div>
              <span class="it-multiple">
                <span class="metadata">metadata testo</span>
                <a href="#" aria-label="Link - Azione 1">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 2">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
                <a href="#" aria-label="Link - Azione 3">
                  <it-icon name="it-code-circle" label="Codice"></it-icon>
                </a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
};

// ============================================
// LISTE PER MENU DI NAVIGAZIONE
// ============================================

export const LinkListLineaSingola: Story = {
  name: 'Linea singola',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListElementoAttivo: Story = {
  name: 'Elemento con stato attivo',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item active" href="#"><span>Link lista 2 attivo</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListElementoDisabilitato: Story = {
  name: 'Elemento con stato disabilitato',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item disabled" href="#" aria-disabled="true"><span>Link lista 2 disabilitato</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListIntestazioneSenzaLink: Story = {
  name: 'Intestazione senza link',
  render: () => html`
    <div class="link-list-wrapper">
      <h4 class="link-list-heading">Intestazione</h4>
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
        <li><span class="divider" role="separator"></span></li>
        <li>
          <a class="list-item" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListIntestazioneConLink: Story = {
  name: 'Intestazione con link',
  render: () => html`
    <div class="link-list-wrapper">
      <h4 class="link-list-heading"><a href="#">Intestazione con link</a></h4>
      <ul class="link-list">
        <li>
          <a class="list-item" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 2</span></a>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 3</span></a>
        </li>
        <li>
          <span class="divider" role="separator"></span>
        </li>
        <li>
          <a class="list-item" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListDimensioni: Story = {
  name: 'Dimensioni',
  render: () => html`
    <div class="link-list-wrapper">
      <h4 class="link-list-heading">Intestazione</h4>
      <ul class="link-list">
        <li>
          <a class="list-item large" href="#"><span>Link lista 1</span></a>
        </li>
        <li>
          <a class="list-item large" href="#"><span>Link lista 2</span></a>
        </li>
        <li>
          <a class="list-item large" href="#"><span>Link lista 3</span></a>
        </li>
        <li><span class="divider" role="separator"></span></li>
        <li>
          <a class="list-item large" href="#"><span>Link lista 4</span></a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListMultilineIcona: Story = {
  name: 'Multiline con icona',
  render: () => html`
    <div class="link-list-wrapper multiline">
      <ul class="link-list">
        <li>
          <a class="list-item active icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <h4 class="list-item-title">Link lista 1 attivo</h4>
              <it-icon name="it-code-circle" color="primary" label="Codice"></it-icon>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
          </a>
        </li>
        <li>
          <span class="divider" role="separator"></span>
        </li>
        <li>
          <a class="list-item icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <h4 class="list-item-title">Link lista 2</h4>
              <it-icon name="it-code-circle" color="primary" label="Codice"></it-icon>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
          </a>
        </li>
        <li><span class="divider"></span></li>
        <li>
          <a class="list-item disabled icon-right" href="#" aria-disabled="true">
            <span class="list-item-title-icon-wrapper">
              <h4 class="list-item-title">Link lista 3 disabilitato</h4>
              <it-icon name="it-code-circle" color="primary" label="Codice"></it-icon>
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
          </a>
        </li>
        <li>
          <span class="divider"></span>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListControlliIconaSinistra: Story = {
  name: 'Azione primaria - Icona a sinistra',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item active icon-left" href="#">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-chevron-right" color="primary" label="Freccia destra"></it-icon>
              <span class="list-item-title">Link lista 1 attivo</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-left" href="#">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-chevron-right" color="primary" label="Freccia destra"></it-icon>
              <span class="list-item-title">Link lista 2</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-left disabled" href="#" aria-disabled="true">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-chevron-right" color="primary" label="Freccia destra"></it-icon>
              <span class="list-item-title">Link lista 3 disabilitato</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListControlliIconaDestra: Story = {
  name: 'Azione secondaria - Icona a destra',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item active icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 1 attivo</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 2</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-right disabled" href="#" aria-disabled="true">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 3 disabilitato</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListControlliDoppiaIcona: Story = {
  name: 'Azioni primaria e secondaria - Icona a sinistra e a destra',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item active icon-left" href="#">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
              <span class="list-item-title">Link lista 1 attivo</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item icon-left" href="#">
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
              <span class="list-item-title">Link lista 2</span>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item disabled icon-right" href="#" aria-disabled="true">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 3 disabilitato con icona a destra</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListToggle: Story = {
  name: 'Lista con toggle',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <div class="toggles">
            <label for="toggle1">
              Label per toggle
              <input type="checkbox" id="toggle1" /><span class="lever"></span>
            </label>
          </div>
        </li>
        <li>
          <div class="toggles">
            <label for="toggle2">
              Label per toggle disabilitato
              <input type="checkbox" id="toggle2" disabled aria-disabled="true" /><span class="lever"></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListCheckbox: Story = {
  name: 'Lista con checkbox',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <div class="form-check form-check-group">
            <input type="checkbox" id="checkbox6" checked />
            <label for="checkbox6">Checkbox selezionato</label>
          </div>
        </li>
        <li>
          <div class="form-check form-check-group">
            <input type="checkbox" id="checkbox7" />
            <label for="checkbox7">Checkbox non selezionato</label>
          </div>
        </li>
        <li>
          <div class="form-check form-check-group disabled" aria-disabled="true">
            <input type="checkbox" id="checkbox8" disabled aria-disabled="true" />
            <label for="checkbox8">Checkbox disabilitato non selezionato</label>
          </div>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListAnnidataEspansa: Story = {
  name: 'Espansa',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item large medium icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 1</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
        <li>
          <a class="list-item large medium icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 2</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
          <ul class="link-sublist" id="">
            <li>
              <a class="list-item" href="#"><span>Link lista 1</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 2</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a class="list-item large medium icon-right" href="#">
            <span class="list-item-title-icon-wrapper">
              <span class="list-item-title">Link lista 3</span>
              <it-icon name="it-link" color="primary" size="sm" label="Link"></it-icon>
            </span>
          </a>
        </li>
      </ul>
    </div>
  `,
};

export const LinkListAnnidataCollassabile: Story = {
  name: 'Collassabile',
  render: () => html`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a
            class="list-item icon-left"
            href="#collapseList1"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseList1"
          >
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-expand" color="primary" size="sm" class="left"></it-icon>
              <span class="list-item-title">Link lista 1</span>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseList1">
            <li>
              <a class="list-item" href="#"><span>Link lista 1</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 2</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a
            class="list-item icon-left"
            href="#collapseList2"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseList2"
          >
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-expand" color="primary" size="sm" class="left"></it-icon>
              <span class="list-item-title">Link lista 2</span>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseList2">
            <li>
              <a class="list-item" href="#"><span>Link lista 1</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 2</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 3</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a
            class="list-item icon-left"
            href="#collapseList3"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseList3"
          >
            <span class="list-item-title-icon-wrapper">
              <it-icon name="it-expand" color="primary" size="sm" class="left"></it-icon>
              <span class="list-item-title">Link lista 3</span>
            </span>
          </a>
          <ul class="link-sublist collapse" id="collapseList3">
            <li>
              <a class="list-item" href="#"><span>Link lista 1</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 2</span></a>
            </li>
            <li>
              <a class="list-item" href="#"><span>Link lista 3</span></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
};
