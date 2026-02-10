import{b as a}from"./iframe-BcuqimjD.js";var p=Object.freeze,o=Object.defineProperty,m=(c,v)=>p(o(c,"raw",{value:p(c.slice())})),d;const i={title:"Componenti/Sidebar",tags:["alpha","a11y-ok","documentation"],parameters:{docs:{layout:"fullscreen"}},decorators:[c=>a(d||(d=m([`
      <div style="padding: 1rem;">
        <div style="min-width:300px;">
          <!-- ESEMPIO START -->
          `,`
          <!-- ESEMPIO END -->
        </div>
        <script>
          // Attendiamo che il DOM sia pronto e che la sidebar sia nel DOM
          setTimeout(() => {
            const sidebar = document.querySelector('.sidebar-wrapper');
            if (!sidebar) return;

            // Disabilita i link disabilitati via js
            sidebar.querySelectorAll('[aria-disabled="true"]').forEach((el) => {
              // Per i click del mouse
              el.addEventListener('click', (event) => {
                console.log('Link disabilitato cliccato');
                event.preventDefault();
                event.stopPropagation();
              });

              // Per gli utenti da tastiera
              el.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  console.log('Link disabilitato attivato da tastiera');
                  event.preventDefault();
                  event.stopPropagation();
                }
              });
            });
          }, 0);
        <\/script>
      </div>
    `])),c())]},s={...i,name:"Sidebar semplice",render:()=>a`
    <aside class="sidebar-wrapper" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  `},n={...i,name:"Sidebar con icone",render:()=>a`
    <aside class="sidebar-wrapper" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium active icon-left" aria-current="page" href="#">
                <it-icon name="it-calendar" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled icon-left" href="#" aria-disabled="true">
                <it-icon name="it-comment" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium icon-left" href="#">
                <it-icon name="it-camera" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium icon-left" href="#">
                <it-icon name="it-file" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item icon-left" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active icon-left" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled icon-left" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  `},l={...i,name:"Sidebar con linea a destra",render:()=>a`
    <aside class="sidebar-wrapper it-line-right-side" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  `},e={...i,name:"Sidebar con linea a sinistra",render:()=>a`
    <aside class="sidebar-wrapper it-line-left-side" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  `},t={...i,name:"Sidebar annidata",render:()=>a`
    <aside class="sidebar-wrapper" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 1<it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 1.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 2<it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 2.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 3
                  <it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 3.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 2</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  `},r={...i,name:"Sidebar tema scuro",render:()=>a`
    <aside class="sidebar-wrapper theme-dark" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 1
                  <it-icon name="it-expand" color="white" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 1.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 2
                  <it-icon name="it-expand" color="white" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 2.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 3
                  <it-icon name="it-expand" color="white" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 3.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Sidebar semplice',
  render: () => html\`
    <aside class="sidebar-wrapper" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  \`
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Sidebar con icone',
  render: () => html\`
    <aside class="sidebar-wrapper" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium active icon-left" aria-current="page" href="#">
                <it-icon name="it-calendar" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled icon-left" href="#" aria-disabled="true">
                <it-icon name="it-comment" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium icon-left" href="#">
                <it-icon name="it-camera" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium icon-left" href="#">
                <it-icon name="it-file" color="primary" size="sm" class="left"></it-icon>
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item icon-left" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active icon-left" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled icon-left" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  \`
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Sidebar con linea a destra',
  render: () => html\`
    <aside class="sidebar-wrapper it-line-right-side" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  \`
}`,...l.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Sidebar con linea a sinistra',
  render: () => html\`
    <aside class="sidebar-wrapper it-line-left-side" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item medium active" aria-current="page" href="#">
                <span>Link lista 1 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium disabled" href="#" aria-disabled="true">
                <span>Link lista 2 (disabilitato)</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 3</span>
              </a>
            </li>
            <li>
              <a class="list-item medium" href="#">
                <span>Link lista 4</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  \`
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Sidebar annidata',
  render: () => html\`
    <aside class="sidebar-wrapper" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 1<it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 1.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 2<it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 2.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 3
                  <it-icon name="it-expand" color="primary" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 3.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 2</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  \`
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Sidebar tema scuro',
  render: () => html\`
    <aside class="sidebar-wrapper theme-dark" aria-labelledby="header">
      <h3 id="header">Header</h3>
      <div class="sidebar-linklist-wrapper">
        <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 1
                  <it-icon name="it-expand" color="white" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 1.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 1.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 2
                  <it-icon name="it-expand" color="white" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 2.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 2.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
            <li>
              <it-collapse as="a" variant="none" size="sm">
                <span slot="label" class="list-item-title-icon-wrapper">
                  Link lista 3
                  <it-icon name="it-expand" color="white" size="sm"></it-icon>
                </span>
                <ul class="link-sublist" slot="content">
                  <li>
                    <a class="list-item active" aria-current="page" href="#">
                      <span>Link lista 3.1 (attivo)</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.2</span>
                    </a>
                  </li>
                  <li>
                    <a class="list-item" href="#">
                      <span>Link lista 3.3</span>
                    </a>
                  </li>
                </ul>
              </it-collapse>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-linklist-wrapper linklist-secondary">
        <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
          <ul class="link-list">
            <li>
              <a class="list-item" href="#">
                <span>Link secondario 1</span>
              </a>
            </li>
            <li>
              <a class="list-item active" aria-current="page" href="#">
                <span>Link secondario 2 (attivo)</span>
              </a>
            </li>
            <li>
              <a class="list-item disabled" href="#" aria-disabled="true">
                <span>Link secondario 3 (disabilitato)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  \`
}`,...r.parameters?.docs?.source}}};const k=["SidebarSemplice","SidebarConIcone","SidebarLineaDestra","SidebarLineaSinistra","SidebarAnnidata","SidebarTemaScuro"],u=Object.freeze(Object.defineProperty({__proto__:null,SidebarAnnidata:t,SidebarConIcone:n,SidebarLineaDestra:l,SidebarLineaSinistra:e,SidebarSemplice:s,SidebarTemaScuro:r,__namedExportsOrder:k,default:i},Symbol.toStringTag,{value:"Module"}));export{u as S,s as a,n as b,l as c,e as d,t as e,r as f};
