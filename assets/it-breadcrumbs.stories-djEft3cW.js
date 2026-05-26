import{b as m,o as c}from"./iframe-R3-NR_41.js";const n={title:"Componenti/Breadcrumbs",tags:["web-component","a11y-ok"],component:"it-breadcrumbs",parameters:{a11y:{config:{rules:[{id:"list",enabled:!1},{id:"listitem",enabled:!1}]}}},args:{"it-aria-label":"Percorso di navigazione",dark:!1},argTypes:{"it-aria-label":{control:"text",description:'Testo usato come `aria-label` sul contenitore di navigazione (es. "Percorso di navigazione").'},dark:{control:"boolean",description:"Imposta la variante a tema scuro."}}},r={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},render:e=>m`
    <it-breadcrumbs it-aria-label=${e["it-aria-label"]} ?dark="${c(e.dark)}">
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  `},a={tags:["!autodocs","!dev"],args:{"it-aria-label":"Breadcrumb con link"},render:e=>m`
    <it-breadcrumbs it-aria-label=${e["it-aria-label"]}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  `},i={name:"Con icona",render:()=>m`
    <it-breadcrumbs it-aria-label="Percorso di navigazione">
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Home</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Sezione</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Voce corrente</a>
      </it-breadcrumb-item>
    </it-breadcrumbs>
  `},t={args:{"it-aria-label":"Breadcrumb con separatore personalizzato",separator:">"},render:e=>m`
    <it-breadcrumbs label=${e["it-aria-label"]} separator=${e.separator}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <it-breadcrumbs it-aria-label="Percorso di navigazione con icona come separatore" class="mt-3">
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <style>
      .my-separator {
        margin-inline: -4px;
      }
    </style>
  `},o={name:"Sfondo scuro",render:()=>m`
    <it-breadcrumbs it-aria-label="Percorso di navigazione" dark>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione2" dark>
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione3" dark>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Home
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Sezione
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
        Voce corrente
      </it-breadcrumb-item>
    </it-breadcrumbs>
    <style>
      .my-separator {
        margin-inline: -4px;
      }
    </style>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    <it-breadcrumbs it-aria-label=\${args['it-aria-label']} ?dark="\${ifDefined(args.dark)}">
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  \`
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs', '!dev'],
  args: {
    'it-aria-label': 'Breadcrumb con link'
  },
  render: args => html\`
    <it-breadcrumbs it-aria-label=\${args['it-aria-label']}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  \`
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Con icona',
  render: () => html\`
    <it-breadcrumbs it-aria-label="Percorso di navigazione">
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Home</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Sezione</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Voce corrente</a>
      </it-breadcrumb-item>
    </it-breadcrumbs>
  \`
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    'it-aria-label': 'Breadcrumb con separatore personalizzato',
    separator: '>'
  },
  render: args => html\`
    <it-breadcrumbs label=\${args['it-aria-label']} separator=\${args.separator}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <it-breadcrumbs it-aria-label="Percorso di navigazione con icona come separatore" class="mt-3">
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <style>
      .my-separator {
        margin-inline: -4px;
      }
    </style>
  \`
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Sfondo scuro',
  render: () => html\`
    <it-breadcrumbs it-aria-label="Percorso di navigazione" dark>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione2" dark>
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione3" dark>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Home
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Sezione
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
        Voce corrente
      </it-breadcrumb-item>
    </it-breadcrumbs>
    <style>
      .my-separator {
        margin-inline: -4px;
      }
    </style>
  \`
}`,...o.parameters?.docs?.source}}};const s=["EsempioInterattivo","ConLink","ConIcona","SeparatorePersonalizzato","Sfondo"],d=Object.freeze(Object.defineProperty({__proto__:null,ConIcona:i,ConLink:a,EsempioInterattivo:r,SeparatorePersonalizzato:t,Sfondo:o,__namedExportsOrder:s,default:n},Symbol.toStringTag,{value:"Module"}));export{d as B,i as C,r as E,t as S,o as a};
