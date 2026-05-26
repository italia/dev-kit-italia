import{b as a,o as s}from"./iframe-R3-NR_41.js";const r={title:"Componenti/Bottomnav",tags:["alpha","web-component","a11y-ok"],component:"it-bottom-nav",parameters:{docs:{excludeDecorators:!0},a11y:{config:{rules:[{id:"list",enabled:!1},{id:"listitem",enabled:!1}]}}},args:{"it-aria-label":"Navigazione principale"},argTypes:{"it-aria-label":{control:"text",description:"Testo usato come `aria-label` sul contenitore di navigazione."}},decorators:[m=>a`
      <div
        style="height: 400px;width:400px;background-color:#f5f5f5;border:1px solid #cecece;position:relative;margin:-0.5rem;transform:translateZ(0);overflow:hidden;"
      >
        <div style="height: calc(100% - var(--it-bottom-nav-height)); overflow-y: scroll;">
          <div style="height: 600px;"></div>
        </div>
        ${m()}
      </div>
    `]},t={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},render:m=>a`
    <it-bottom-nav it-aria-label=${s(m["it-aria-label"])}>
      <it-bottom-nav-item active>
        <a href="#">
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">messaggi</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `},n={name:"Tre voci",render:()=>a`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">messaggi</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `},i={name:"Quattro voci",render:()=>a`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">messaggi</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-star-outline"></it-icon>
          <span class="bottom-nav-label">preferiti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `},e={name:"Con badge",render:()=>a`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <div class="badge-wrapper">
            <span class="bottom-nav-badge" aria-hidden="true">1</span>
          </div>
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">
            messaggi
            <span class="visually-hidden">1 messaggio da leggere</span>
          </span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">
            immagini
          </span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <div class="badge-wrapper">
            <span class="bottom-nav-badge" aria-hidden="true">42</span>
          </div>
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti <span class="visually-hidden">42 documenti da visualizzare</span></span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `},o={name:"Con alert",render:()=>a`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <div class="badge-wrapper">
            <span class="bottom-nav-alert" aria-hidden="true"></span>
          </div>
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">
            messaggi
            <span class="visually-hidden">ci sono nuovi messaggi da leggere</span>
          </span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  },
  render: args => html\`
    <it-bottom-nav it-aria-label=\${ifDefined(args['it-aria-label'])}>
      <it-bottom-nav-item active>
        <a href="#">
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">messaggi</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  \`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Tre voci',
  render: () => html\`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">messaggi</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  \`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Quattro voci',
  render: () => html\`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">messaggi</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-star-outline"></it-icon>
          <span class="bottom-nav-label">preferiti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  \`
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Con badge',
  render: () => html\`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <div class="badge-wrapper">
            <span class="bottom-nav-badge" aria-hidden="true">1</span>
          </div>
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">
            messaggi
            <span class="visually-hidden">1 messaggio da leggere</span>
          </span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">
            immagini
          </span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <div class="badge-wrapper">
            <span class="bottom-nav-badge" aria-hidden="true">42</span>
          </div>
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti <span class="visually-hidden">42 documenti da visualizzare</span></span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  \`
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Con alert',
  render: () => html\`
    <it-bottom-nav it-aria-label="Navigazione principale">
      <it-bottom-nav-item active>
        <a href="#">
          <div class="badge-wrapper">
            <span class="bottom-nav-alert" aria-hidden="true"></span>
          </div>
          <it-icon name="it-comment"></it-icon>
          <span class="bottom-nav-label">
            messaggi
            <span class="visually-hidden">ci sono nuovi messaggi da leggere</span>
          </span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-camera"></it-icon>
          <span class="bottom-nav-label">immagini</span>
        </a>
      </it-bottom-nav-item>
      <it-bottom-nav-item>
        <a href="#">
          <it-icon name="it-file"></it-icon>
          <span class="bottom-nav-label">documenti</span>
        </a>
      </it-bottom-nav-item>
    </it-bottom-nav>
  \`
}`,...o.parameters?.docs?.source}}};const c=["EsempioInterattivo","TreVoci","QuattroVoci","ConBadge","ConAlert"],b=Object.freeze(Object.defineProperty({__proto__:null,ConAlert:o,ConBadge:e,EsempioInterattivo:t,QuattroVoci:i,TreVoci:n,__namedExportsOrder:c,default:r},Symbol.toStringTag,{value:"Module"}));export{b as B,e as C,t as E,o as a};
