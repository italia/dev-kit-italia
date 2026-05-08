import{b as e,o as b}from"./iframe-DHDslVeB.js";const z=["nozoom","black","primary"],$=["bottom","top","left","right"],S=[2,3,4,5],O=[{src:"https://picsum.photos/240/160?image=1056",alt:"Visualizza immagine 1"},{src:"https://picsum.photos/240/160?image=1050",alt:"Visualizza immagine 2"},{src:"https://picsum.photos/240/160?image=1044",alt:"Visualizza immagine 3"},{src:"https://picsum.photos/240/160?image=1039",alt:"Visualizza immagine 4"},{src:"https://picsum.photos/240/160?image=1029",alt:"Visualizza immagine 5"}],t=(a=3,g=!0)=>O.slice(0,a).map((y,f)=>e`
      <it-thumbnav-item>
        <a href="#" class="ratio ratio-3x2 ${f===0&&g?"active":""}">
          <img src="${y.src}" alt="${y.alt}" />
        </a>
      </it-thumbnav-item>
    `),V=(a,g=3)=>e`
  <it-thumbnav
    ?small="${a.small}"
    ?vertical="${a.vertical}"
    ?fixed="${a.fixed}"
    hover="${b(a.hover||void 0)}"
    auto="${b(a.auto!=null?String(a.auto):void 0)}"
    position="${b(a.position||void 0)}"
  >
    ${t(g)}
  </it-thumbnav>
`,x={title:"Componenti/Thumbnav",tags:["a11y-ok","web-component","alpha"],component:"it-thumbnav",args:{small:!1,vertical:!1,fixed:!1,hover:void 0,auto:void 0,position:void 0},argTypes:{small:{control:"boolean",description:"Usa thumbnail di dimensione ridotta (120px invece di 240px).",table:{defaultValue:{summary:"false"}}},vertical:{control:"boolean",description:"Dispone le thumbnail in colonna verticale invece che orizzontale.",table:{defaultValue:{summary:"false"}}},fixed:{control:"boolean",description:"Imposta larghezza fissa per ogni thumbnail: 240px per default, 120px se combinato con `small`.",table:{defaultValue:{summary:"false"}}},hover:{control:"select",options:z,description:"Personalizza l'effetto al passaggio del mouse. Ometti l'attributo per lo zoom predefinito. Usa `nozoom` per disabilitarlo, `black` o `primary` per aggiungere un layer colorato sull'immagine."},auto:{control:"select",options:S,description:"Attiva la griglia a larghezza automatica e imposta il numero di thumbnail per riga (2, 3, 4 o 5)."},position:{control:"select",options:$,description:"Posiziona la Thumbnav in overlay rispetto a un contenitore con classe `.position-relative`. Usa `bottom` o `top` per la versione orizzontale, `left` o `right` per la verticale (il comportamento verticale viene applicato automaticamente). Questo attributo non ha effetto nell'esempio interattivo: richiede la struttura HTML corretta con un contenitore esterno. Vedi le stories dedicate agli overlay."}},parameters:{layout:"padded",a11y:{config:{rules:[{id:"list",enabled:!1},{id:"listitem",enabled:!1}]}},docs:{description:{component:`
Componente di navigazione con immagini thumbnail.

Il componente Thumbnav è composto da due elementi:

- \`it-thumbnav\`: contenitore che raggruppa le thumbnail e gestisce il layout;
- \`it-thumbnav-item\`: singolo elemento, che accetta nello slot un anchor con immagine.

Ogni \`it-thumbnav-item\` si aspetta un anchor con la classe Bootstrap \`.ratio\` per il corretto rapporto d'aspetto:

\`\`\`html
<it-thumbnav>
  <it-thumbnav-item>
    <a href="#" class="ratio ratio-3x2">
      <img src="…" alt="Descrizione azione">
    </a>
  </it-thumbnav-item>
</it-thumbnav>
\`\`\`
        `}}}},r={name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},render:a=>V(a)},i={name:"Versione small",render:()=>e` <it-thumbnav small> ${t(3)} </it-thumbnav> `},o={name:"Hover senza zoom",render:()=>e` <it-thumbnav hover="nozoom"> ${t(3)} </it-thumbnav> `},s={name:"Hover con layer nero",render:()=>e` <it-thumbnav hover="black"> ${t(3)} </it-thumbnav> `},n={name:"Hover con layer primary",render:()=>e` <it-thumbnav hover="primary"> ${t(3)} </it-thumbnav> `},m={name:"Thumbnav verticale",render:()=>e` <it-thumbnav vertical> ${t(3)} </it-thumbnav> `},l={name:"Overlay orizzontale inferiore",parameters:{layout:"fullscreen"},render:()=>e`
    <div class="position-relative" style="height: 400px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="bottom" small> ${t(3)} </it-thumbnav>
    </div>
  `},c={name:"Overlay orizzontale superiore",parameters:{layout:"fullscreen"},render:()=>e`
    <div class="position-relative" style="height: 400px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="top" small> ${t(3)} </it-thumbnav>
    </div>
  `},p={name:"Overlay verticale a sinistra",parameters:{layout:"fullscreen"},render:()=>e`
    <div class="position-relative" style="height: 500px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="left" small> ${t(3)} </it-thumbnav>
    </div>
  `},u={name:"Overlay verticale a destra",parameters:{layout:"fullscreen"},render:()=>e`
    <div class="position-relative" style="height: 500px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="right" small> ${t(3)} </it-thumbnav>
    </div>
  `},h={name:"Griglia a larghezza fissa",render:()=>e` <it-thumbnav fixed> ${t(5)} </it-thumbnav> `},v={name:"Griglia automatica - 3 per riga",render:()=>e` <it-thumbnav auto="3"> ${t(5)} </it-thumbnav> `},d={name:"Griglia automatica - 5 per riga",render:()=>e` <it-thumbnav auto="5"> ${t(5)} </it-thumbnav> `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  },
  render: args => renderComponent(args)
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{\n  name: 'Versione small',\n  render: () => html` <it-thumbnav small> ${renderItems(3)} </it-thumbnav> `\n}",...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Hover senza zoom',
  render: () => html\` <it-thumbnav hover="nozoom"> \${renderItems(3)} </it-thumbnav> \`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Hover con layer nero',
  render: () => html\` <it-thumbnav hover="black"> \${renderItems(3)} </it-thumbnav> \`
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Hover con layer primary',
  render: () => html\` <it-thumbnav hover="primary"> \${renderItems(3)} </it-thumbnav> \`
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{\n  name: 'Thumbnav verticale',\n  render: () => html` <it-thumbnav vertical> ${renderItems(3)} </it-thumbnav> `\n}",...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Overlay orizzontale inferiore',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`
    <div class="position-relative" style="height: 400px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="bottom" small> \${renderItems(3)} </it-thumbnav>
    </div>
  \`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Overlay orizzontale superiore',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`
    <div class="position-relative" style="height: 400px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="top" small> \${renderItems(3)} </it-thumbnav>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Overlay verticale a sinistra',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`
    <div class="position-relative" style="height: 500px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="left" small> \${renderItems(3)} </it-thumbnav>
    </div>
  \`
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Overlay verticale a destra',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => html\`
    <div class="position-relative" style="height: 500px;">
      <img
        src="https://picsum.photos/1280/720?image=1056"
        alt="Descrizione immagine"
        style="width:100%;height:100%;object-fit:cover;"
      />
      <it-thumbnav position="right" small> \${renderItems(3)} </it-thumbnav>
    </div>
  \`
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"{\n  name: 'Griglia a larghezza fissa',\n  render: () => html` <it-thumbnav fixed> ${renderItems(5)} </it-thumbnav> `\n}",...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Griglia automatica - 3 per riga',
  render: () => html\` <it-thumbnav auto="3"> \${renderItems(5)} </it-thumbnav> \`
}`,...v.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Griglia automatica - 5 per riga',
  render: () => html\` <it-thumbnav auto="5"> \${renderItems(5)} </it-thumbnav> \`
}`,...d.parameters?.docs?.source}}};const I=["EsempioInterattivo","VersioneSmall","HoverSenzaZoom","HoverLayerNero","HoverLayerPrimary","Verticale","OverlayInferiore","OverlaySuperiore","OverlayVerticaleLeft","OverlayVerticaleRight","GrigliaFissa","GrigliaAutomatica3","GrigliaAutomatica5"],G=Object.freeze(Object.defineProperty({__proto__:null,EsempioInterattivo:r,GrigliaAutomatica3:v,GrigliaAutomatica5:d,GrigliaFissa:h,HoverLayerNero:s,HoverLayerPrimary:n,HoverSenzaZoom:o,OverlayInferiore:l,OverlaySuperiore:c,OverlayVerticaleLeft:p,OverlayVerticaleRight:u,VersioneSmall:i,Verticale:m,__namedExportsOrder:I,default:x},Symbol.toStringTag,{value:"Module"}));export{r as E,h as G,o as H,l as O,G as S,i as V,s as a,n as b,m as c,c as d,p as e,u as f,v as g,d as h};
