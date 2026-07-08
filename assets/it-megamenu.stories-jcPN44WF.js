import{b as a,o as f}from"./iframe-CbN6PWjR.js";const O=["left","right"],h=["bottom","right"],n={title:"Componenti/Megamenu",component:"it-megamenu",parameters:{wrapperClasses:"w100-layout megamenu-story-layout"},tags:["a11y-ok","web-component","alpha"],args:{label:"Megamenu",disabled:!1,active:!1,columns:2,"it-aria-label":void 0,"footer-align":"right","footer-position":void 0},argTypes:{label:{control:"text",description:"Testo del pulsante che apre il dropdown del megamenu"},disabled:{control:"boolean",description:"Disabilita il dropdown",table:{defaultValue:{summary:"false"}}},active:{control:"boolean",description:"Imposta lo stato attivo del pulsante",table:{defaultValue:{summary:"false"}}},columns:{control:"number",description:"Numero di colonne su cui verranno suddivisi i link del menu",table:{defaultValue:{summary:2}}},"it-aria-label":{control:"text",description:"Valore per l'attributo `aria-label` del pulsante (obbligatorio per accessibilità se `label` è vuoto)",type:"string"},"footer-align":{control:"select",description:"Allineamento del contenuto del footer",options:O,type:"string",table:{defaultValue:{summary:"left"}}},"footer-position":{control:"select",description:"Posizione del footer all’interno del megamenu",options:h,type:"string",table:{defaultValue:{summary:"bottom"}}}}},o=(e,s)=>a`
  <it-header>
    <div class="it-header-navbar-wrapper">
      <nav class="navbar navbar-expand-lg" aria-label="Navigazione principale">
        <div class="navbar-collapsable" id="navbar-A" tabindex="-1">
          <div class="menu-wrapper">
            <ul class="navbar-nav">
              ${s}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </it-header>
`,i=(e,s)=>a`
  <it-megamenu
    label=${e.label}
    ?disabled=${e.disabled}
    ?active=${e.active}
    columns=${f(e.columns)}
    it-aria-label=${f(e["it-aria-label"])}
    footer-align=${f(e["footer-align"])}
    footer-position=${f(e["footer-position"])}
  >
    ${s}
  </it-megamenu>
`,r=(e,s=1)=>{const v=[];for(let t=s;t<s+e;t+=1)v.push(a`
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-arrow-right-triangle" size="sm" color="primary"></it-icon>
        Link lista ${t}
      </it-dropdown-item>
    `);return v.map(t=>a`${t}`)},b=e=>a`${i(e,a` <!-- SLOT DESCRIPTION -->
      <div slot="description">
        <div class="ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded">
          <figure class="figure">
            <img
              src="https://placehold.co/560x240/ebebeb/808080/?text=Immagine"
              class="figure-img img-fluid rounded"
              alt="Segnaposto"
            />
          </figure>
        </div>
        <p>
          Testo utile a fornire una descrizione dei contenuti della sezione
          <strong>${e.label}</strong>.
        </p>
      </div>

      <!-- SLOT HEADER -->
      <div slot="header">
        <a class="it-heading-link" href="#">
          <it-icon name="it-arrow-right-triangle" size="sm" color="primary" class="me-2 mb-1"></it-icon>
          <span>Esplora la sezione ${e.label}</span>
        </a>
      </div>

      <!-- DROPDOWN LINKS ITEMS -->
      ${r(6)}`)}`,l={render:e=>o(e,a` <!-- megamenu 1 -->
        <li class="nav-item">${b(e)}</li>
        <!-- megamenu 2 -->
        <li class="nav-item">
          ${i({...e,active:!1,label:"Megamenu 2",columns:3},a`<!-- DROPDOWN LINKS ITEMS -->
              ${r(6,7)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <a class="it-footer-link" href="#">
                  <span>Esplora tutti i contenuti del megamenu</span>
                  <it-icon name="it-arrow-right" size="sm" color="primary" class="ms-2"></it-icon>
                </a>
              </div>`)}
        </li>`),tags:["!autodocs","!dev"]},m={...n,name:"Megamenu completo",render:e=>o(e,a`<li class="nav-item">${b(e)}</li> `)},c={...n,name:"Megamenu base",args:{columns:3},render:e=>o(e,a`
        <li class="nav-item">
          ${i(e,a` <!-- DROPDOWN LINKS ITEMS -->
              ${r(9)}`)}
        </li>
      `)},d={...n,name:"Con link “Esplora la sezione”",args:{columns:3},render:e=>o(e,a`
        <li class="nav-item">
          ${i(e,a` <!-- DROPDOWN LINKS ITEMS -->
              <!-- SLOT HEADER -->
              <div slot="header">
                <a class="it-heading-link" href="#">
                  <it-icon name="it-arrow-right-triangle" size="sm" color="primary" class="me-2 mb-1"></it-icon>
                  <span>Esplora la sezione ${e.label}</span>
                </a>
              </div>

              ${r(9)}`)}
        </li>
      `)},p={...n,name:"Con link “Esplora tutti”",args:{columns:3,"footer-align":"right"},render:e=>o(e,a`
        <li class="nav-item">
          ${i(e,a`
              <!-- DROPDOWN LINKS ITEMS -->
              ${r(9)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <a class="it-footer-link" href="#">
                  <span>Esplora tutti i contenuti del megamenu</span>
                  <it-icon name="it-arrow-right" size="sm" color="primary" class="ms-2"></it-icon>
                </a>
              </div>
            `)}
        </li>
      `)},u={...n,name:"Con call to action in basso",args:{columns:3,"footer-position":"bottom","footer-align":""},render:e=>o(e,a`
        <li class="nav-item">
          ${i(e,a`
              <!-- DROPDOWN LINKS ITEMS -->
              ${r(9)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <div class="d-flex flex-column flex-lg-row">
                  <a class="it-footer-link flex-grow-1" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 1</span>
                  </a>
                  <a class="it-footer-link flex-grow-1" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 2</span>
                  </a>
                </div>
              </div>
            `)}
        </li>
      `)},g={...n,name:"Con call to action a destra",args:{columns:3,"footer-position":"right","footer-align":""},render:e=>o(e,a`
        <li class="nav-item">
          ${i(e,a`
              <!-- DROPDOWN LINKS ITEMS -->
              ${r(9)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <div class="d-flex flex-column justify-content-around">
                  <a class="it-footer-link" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 1</span>
                  </a>
                  <a class="it-footer-link" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 2</span>
                  </a>
                </div>
              </div>
            `)}
        </li>
      `)};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => renderNav(args, html\` <!-- megamenu 1 -->
        <li class="nav-item">\${renderMegamenuCompleto(args)}</li>
        <!-- megamenu 2 -->
        <li class="nav-item">
          \${renderMegamenu({
    ...args,
    active: false,
    label: 'Megamenu 2',
    columns: 3
  }, html\`<!-- DROPDOWN LINKS ITEMS -->
              \${renderLinks(6, 7)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <a class="it-footer-link" href="#">
                  <span>Esplora tutti i contenuti del megamenu</span>
                  <it-icon name="it-arrow-right" size="sm" color="primary" class="ms-2"></it-icon>
                </a>
              </div>\`)}
        </li>\`),
  tags: ['!autodocs', '!dev']
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Megamenu completo',
  render: args => renderNav(args, html\`<li class="nav-item">\${renderMegamenuCompleto(args)}</li> \`)
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Megamenu base',
  args: {
    columns: 3
  },
  render: args => renderNav(args, html\`
        <li class="nav-item">
          \${renderMegamenu(args, html\` <!-- DROPDOWN LINKS ITEMS -->
              \${renderLinks(9)}\`)}
        </li>
      \`)
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Con link “Esplora la sezione”',
  args: {
    columns: 3
  },
  render: args => renderNav(args, html\`
        <li class="nav-item">
          \${renderMegamenu(args, html\` <!-- DROPDOWN LINKS ITEMS -->
              <!-- SLOT HEADER -->
              <div slot="header">
                <a class="it-heading-link" href="#">
                  <it-icon name="it-arrow-right-triangle" size="sm" color="primary" class="me-2 mb-1"></it-icon>
                  <span>Esplora la sezione \${args.label}</span>
                </a>
              </div>

              \${renderLinks(9)}\`)}
        </li>
      \`)
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Con link “Esplora tutti”',
  args: {
    columns: 3,
    'footer-align': 'right'
  },
  render: args => renderNav(args, html\`
        <li class="nav-item">
          \${renderMegamenu(args, html\`
              <!-- DROPDOWN LINKS ITEMS -->
              \${renderLinks(9)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <a class="it-footer-link" href="#">
                  <span>Esplora tutti i contenuti del megamenu</span>
                  <it-icon name="it-arrow-right" size="sm" color="primary" class="ms-2"></it-icon>
                </a>
              </div>
            \`)}
        </li>
      \`)
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Con call to action in basso',
  args: {
    columns: 3,
    'footer-position': 'bottom',
    'footer-align': ''
  },
  render: args => renderNav(args, html\`
        <li class="nav-item">
          \${renderMegamenu(args, html\`
              <!-- DROPDOWN LINKS ITEMS -->
              \${renderLinks(9)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <div class="d-flex flex-column flex-lg-row">
                  <a class="it-footer-link flex-grow-1" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 1</span>
                  </a>
                  <a class="it-footer-link flex-grow-1" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 2</span>
                  </a>
                </div>
              </div>
            \`)}
        </li>
      \`)
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Con call to action a destra',
  args: {
    columns: 3,
    'footer-position': 'right',
    'footer-align': ''
  },
  render: args => renderNav(args, html\`
        <li class="nav-item">
          \${renderMegamenu(args, html\`
              <!-- DROPDOWN LINKS ITEMS -->
              \${renderLinks(9)}

              <!-- SLOT FOOTER -->
              <div slot="footer">
                <div class="d-flex flex-column justify-content-around">
                  <a class="it-footer-link" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 1</span>
                  </a>
                  <a class="it-footer-link" href="#">
                    <it-icon name="it-bookmark" size="sm" color="primary" class="me-2"></it-icon>
                    <span>Call to action 2</span>
                  </a>
                </div>
              </div>
            \`)}
        </li>
      \`)
}`,...g.parameters?.docs?.source}}};const S=["Base","MegamenuCompleto","MegamenuBase","MegamenuEsploraSezione","MegamenuEsploraTutti","MegamenuCTABottom","MegamenuCTARight"],k=Object.freeze(Object.defineProperty({__proto__:null,Base:l,MegamenuBase:c,MegamenuCTABottom:u,MegamenuCTARight:g,MegamenuCompleto:m,MegamenuEsploraSezione:d,MegamenuEsploraTutti:p,__namedExportsOrder:S,default:n},Symbol.toStringTag,{value:"Module"}));export{l as B,m as M,k as S,c as a,d as b,p as c,u as d,g as e};
