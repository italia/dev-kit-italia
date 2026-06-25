import{b as i}from"./iframe-C-T64Vf2.js";const w={title:"Componenti/List",tags:["a11y-ok","documentation"],parameters:{layout:"padded"}},a={name:"Lista semplice solo testo",render:()=>i`
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
  `,parameters:{docs:{canvas:{sourceState:"shown"}}}},s={name:"Lista con avatar",render:()=>i`
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
  `},n={name:"Lista con icona",render:()=>i`
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
  `},t={name:"Lista con immagine",render:()=>i`
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
  `},l={name:"Con freccia",render:()=>i`
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
  `},e={name:"Con azioni multiple",render:()=>i`
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
  `},r={name:"Con metadata",render:()=>i`
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
  `},c={name:"Con testo aggiuntivo, azioni multiple e metadata",render:()=>i`
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
  `},o={name:"Linea singola",render:()=>i`
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
  `},p={name:"Elemento con stato attivo",render:()=>i`
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
  `},m={name:"Elemento con stato disabilitato",render:()=>i`
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
  `},d={name:"Intestazione senza link",render:()=>i`
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
  `},h={name:"Intestazione con link",render:()=>i`
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
  `},v={name:"Dimensioni",render:()=>i`
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
  `},k={name:"Multiline con icona",render:()=>i`
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
          <span class="divider"></span>
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
        <li>
          <span class="divider"></span>
        </li>
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
  `},u={name:"Azione primaria - Icona a sinistra",render:()=>i`
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
  `},L={name:"Azione secondaria - Icona a destra",render:()=>i`
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
  `},b={name:"Azioni primaria e secondaria - Icona a sinistra e a destra",render:()=>i`
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
  `},g={name:"Lista con toggle",render:()=>i`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <it-toggle name="toggle1">
            <span slot="label">Label per toggle</span>
          </it-toggle>
        </li>
        <li>
          <it-toggle name="toggle2" disabled>
            <span slot="label">Label per toggle disabilitato</span>
          </it-toggle>
        </li>
      </ul>
    </div>
  `},f={name:"Lista con checkbox",render:()=>i`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <it-checkbox name="checkbox6" group checked>
            <span slot="label">Checkbox selezionato</span>
          </it-checkbox>
        </li>
        <li>
          <it-checkbox name="checkbox7" group>
            <span slot="label">Checkbox non selezionato</span>
          </it-checkbox>
        </li>
        <li>
          <it-checkbox name="checkbox8" group disabled>
            <span slot="label">Checkbox disabilitato non selezionato</span>
          </it-checkbox>
        </li>
      </ul>
    </div>
  `},z={name:"Espansa",render:()=>i`
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
  `},x={name:"Collassabile",render:()=>i`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <it-collapse>
            <button class="list-item icon-right px-0 border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Link lista 1</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
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
          </it-collapse>
        </li>
        <li>
          <it-collapse>
            <button class="list-item icon-right px-0 border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Link lista 2</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
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
          </it-collapse>
        </li>
        <li>
          <it-collapse>
            <button class="list-item icon-right px-0 border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Link lista 3</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
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
          </it-collapse>
        </li>
      </ul>
    </div>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Lista semplice solo testo',
  render: () => html\`
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
  \`,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Lista con avatar',
  render: () => html\`
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
  \`
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Lista con icona',
  render: () => html\`
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
  \`
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Lista con immagine',
  render: () => html\`
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
  \`
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Con freccia',
  render: () => html\`
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
  \`
}`,...l.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Con azioni multiple',
  render: () => html\`
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
  \`
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Con metadata',
  render: () => html\`
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
  \`
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Con testo aggiuntivo, azioni multiple e metadata',
  render: () => html\`
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
  \`
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Linea singola',
  render: () => html\`
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
  \`
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Elemento con stato attivo',
  render: () => html\`
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
  \`
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Elemento con stato disabilitato',
  render: () => html\`
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
  \`
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Intestazione senza link',
  render: () => html\`
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
  \`
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Intestazione con link',
  render: () => html\`
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
  \`
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Dimensioni',
  render: () => html\`
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
  \`
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Multiline con icona',
  render: () => html\`
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
          <span class="divider"></span>
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
        <li>
          <span class="divider"></span>
        </li>
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
  \`
}`,...k.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Azione primaria - Icona a sinistra',
  render: () => html\`
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
  \`
}`,...u.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Azione secondaria - Icona a destra',
  render: () => html\`
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
  \`
}`,...L.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Azioni primaria e secondaria - Icona a sinistra e a destra',
  render: () => html\`
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
  \`
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Lista con toggle',
  render: () => html\`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <it-toggle name="toggle1">
            <span slot="label">Label per toggle</span>
          </it-toggle>
        </li>
        <li>
          <it-toggle name="toggle2" disabled>
            <span slot="label">Label per toggle disabilitato</span>
          </it-toggle>
        </li>
      </ul>
    </div>
  \`
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Lista con checkbox',
  render: () => html\`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <it-checkbox name="checkbox6" group checked>
            <span slot="label">Checkbox selezionato</span>
          </it-checkbox>
        </li>
        <li>
          <it-checkbox name="checkbox7" group>
            <span slot="label">Checkbox non selezionato</span>
          </it-checkbox>
        </li>
        <li>
          <it-checkbox name="checkbox8" group disabled>
            <span slot="label">Checkbox disabilitato non selezionato</span>
          </it-checkbox>
        </li>
      </ul>
    </div>
  \`
}`,...f.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Espansa',
  render: () => html\`
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
  \`
}`,...z.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Collassabile',
  render: () => html\`
    <div class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <it-collapse>
            <button class="list-item icon-right px-0 border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Link lista 1</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
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
          </it-collapse>
        </li>
        <li>
          <it-collapse>
            <button class="list-item icon-right px-0 border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Link lista 2</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
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
          </it-collapse>
        </li>
        <li>
          <it-collapse>
            <button class="list-item icon-right px-0 border-0 bg-transparent" slot="trigger">
              <span class="list-item-title-icon-wrapper" slot="label">
                <span class="list-item-title">Link lista 3</span>
                <it-icon name="it-expand" color="primary" class="left"></it-icon>
              </span>
            </button>
            <ul slot="content" class="link-sublist collapse">
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
          </it-collapse>
        </li>
      </ul>
    </div>
  \`
}`,...x.parameters?.docs?.source}}};const A=["ListaSemplice","ListaConAvatar","ListaConIcona","ListaConImmagine","ListaConFreccia","ListaConAzioniMultiple","ListaConMetadata","ListaConTestoAggiuntivo","LinkListLineaSingola","LinkListElementoAttivo","LinkListElementoDisabilitato","LinkListIntestazioneSenzaLink","LinkListIntestazioneConLink","LinkListDimensioni","LinkListMultilineIcona","LinkListControlliIconaSinistra","LinkListControlliIconaDestra","LinkListControlliDoppiaIcona","LinkListToggle","LinkListCheckbox","LinkListAnnidataEspansa","LinkListAnnidataCollassabile"],C=Object.freeze(Object.defineProperty({__proto__:null,LinkListAnnidataCollassabile:x,LinkListAnnidataEspansa:z,LinkListCheckbox:f,LinkListControlliDoppiaIcona:b,LinkListControlliIconaDestra:L,LinkListControlliIconaSinistra:u,LinkListDimensioni:v,LinkListElementoAttivo:p,LinkListElementoDisabilitato:m,LinkListIntestazioneConLink:h,LinkListIntestazioneSenzaLink:d,LinkListLineaSingola:o,LinkListMultilineIcona:k,LinkListToggle:g,ListaConAvatar:s,ListaConAzioniMultiple:e,ListaConFreccia:l,ListaConIcona:n,ListaConImmagine:t,ListaConMetadata:r,ListaConTestoAggiuntivo:c,ListaSemplice:a,__namedExportsOrder:A,default:w},Symbol.toStringTag,{value:"Module"}));export{C as L,a,s as b,n as c,t as d,l as e,e as f,r as g,c as h,o as i,p as j,m as k,d as l,h as m,v as n,k as o,u as p,L as q,b as r,g as s,f as t,z as u,x as v};
