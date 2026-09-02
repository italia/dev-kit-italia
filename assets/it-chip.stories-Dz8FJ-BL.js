import{b as e,A as E,o as b}from"./iframe-Cl3Kz-XE.js";const x=["primary","secondary","success","danger","warning"],P=["sm","lg"],y={title:"Componenti/Chip",component:"it-chip",tags:["a11y-ok","web-component"],args:{size:"sm",label:"Etichetta",href:void 0,variant:"primary",isDisabled:!1,avatar:"",avatarAlt:"Avatar",a11yDescription:"",dismissable:!1,withIcon:!1,withDismissButton:!1},argTypes:{size:{control:"select",description:"Dimensione del chip (`sm` o `lg`).",options:P,table:{defaultValue:{summary:"sm"}}},label:{control:"text",description:"Testo mostrato all'interno della chip."},href:{control:"text",description:"Se valorizzato, la chip sarà un link (elemento `<a>`).",type:"string",table:{defaultValue:{summary:void 0}}},variant:{control:"select",description:"Colore della chip, secondo le varianti di Bootstrap Italia.",options:x},dismissable:{control:"boolean",description:"Indica che la chip può essere chiusa, ma non inserisce alcun pulsante automaticamente. Il pulsante deve essere inserito nello slot `dismiss-button` dall'utilizzatore, comprensivo di eventuale JavaScript per handling di eventi. Per un esempio completo con Javascript, vedi la story [Chip con chiusura](?path=/story/componenti-chip--chip-con-chiusura).",table:{defaultValue:{summary:"false"}}},isDisabled:{control:"boolean",description:"Disabilita la chip. Utile in contesti non interattivi o di sola lettura.",table:{defaultValue:{summary:"false"}}},avatar:{control:"text",description:"Percorso a un'immagine da mostrare come avatar, es. [randomuser.me](https://randomuser.me/api/portraits/men/46.jpg).",table:{defaultValue:{summary:"https://randomuser.me/api/portraits/men/46.jpg"}}},avatarAlt:{control:"text",description:"Testo alternativo per l'immagine dell'avatar, utile per l'accessibilità.",table:{defaultValue:{summary:"Alt avatar"}}},a11yDescription:{control:"text",description:`Testo descrittivo aggiuntivo per la chip, utile per l'accessibilità. Viene inserito come contenuto visivamente nascosto all'inizio della chip, ad esempio per specificare a che contenuto si fa riferimento, o assegnare una dicitur come "Argomento:".`,table:{defaultValue:{summary:""}}},withIcon:{control:"boolean",description:"Simula la presenza di un'icona nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo."},withDismissButton:{control:"boolean",description:"Simula la presenza di un pulsante di rimozione nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo."}},parameters:{docs:{page:null}}},R=(i="Elimina etichetta",t=!1,u="Aria description")=>e`
  <it-button
    slot="dismiss-button"
    it-aria-label="${i}"
    ?disabled="${t}"
    it-aria-description="${u}"
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
`,k=(i,t)=>e`
  <it-icon slot="icon" name="it-github" size="${t==="lg"?"sm":"xs"}" color=${i}></it-icon>
`,A=i=>{const{avatar:t,avatarAlt:u,withIcon:w,label:C,size:v,variant:z,withDismissButton:V,dismissable:g,isDisabled:f,href:D,id:S,a11yDescription:$}=i;return e`
    <it-chip
      label="${C??""}"
      size="${v??"sm"}"
      variant="${z??""}"
      ?dismissable=${g}
      ?is-disabled=${f}
      href="${b(D||void 0)}"
      avatar="${b(t||void 0)}"
      avatar-alt="${b(u||void 0)}"
      a11y-description="${$}"
      ?id="${S}"
      >${w?k(z??"",v??"sm"):E}${g&&V?R("I am dismissable",f):E}</it-chip
    >
  `},a={...y,name:"Esempio interattivo",args:{variant:"primary"},tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:i=>e`${A(i)}`},s={name:"Personalizzazione degli stili",tags:["!dev","!autodocs"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"}}},render:()=>e`<div class="hide-preview"></div>`},r={name:"Variante con link",args:{size:"sm",variant:void 0,href:"#"},render:()=>e` <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip> `},n={name:"Varianti di colore",args:{label:"Etichetta",size:"sm",dismissable:!1},render:()=>e`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
    </div>
  `},o={name:"Varianti di colore link",args:{label:"Etichetta",size:"sm",dismissable:!1},render:()=>e`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
    </div>
  `},c={name:"Varianti di dimensione",args:{size:"sm",variant:void 0,dismissable:!0},render:()=>e`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <it-chip label="Etichetta" size="sm" variant="" dismissable></it-chip>
      <it-chip label="Etichetta" size="lg" variant="" dismissable></it-chip>
    </div>
  `},l={name:"Chip con chiusura",render:()=>e`
    <it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
      <it-button
        slot="dismiss-button"
        it-aria-label="Elimina etichetta"
        it-aria-description="Puoi premere per eliminare la chip."
        @click=${i=>{const t=i.currentTarget.closest("it-chip");t&&t.remove()}}
        @keydown=${i=>{if(i.key==="Enter"||i.key===" "){i.preventDefault();const t=i.currentTarget.closest("it-chip");t&&t.remove()}}}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  `,parameters:{docs:{canvas:{sourceState:"shown"},source:{code:`<it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
  <it-button
    slot="dismiss-button"
    it-aria-label="Elimina etichetta"
    it-aria-description="Puoi premere per eliminare la chip."
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
</it-chip>
`,language:"html"}}}},m={name:"Logica di rimozione personalizzata",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"},source:{code:`<it-chip
  label="Etichetta"
  size="sm"
  variant="primary"
  dismissable
  id="chip-conferma"
>
  <it-button slot="dismiss-button" it-aria-label="Elimina etichetta">
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
</it-chip>

<script type="module">
  const chip = document.getElementById('chip-conferma');
  chip.addEventListener('it-chip-close', (e) => {
    e.preventDefault(); // impedisce la rimozione di default
    if (confirm('Rimuovere questa chip?')) chip.close();
  });
<\/script>
`,language:"html"}}},render:()=>e`
    <it-chip
      label="Etichetta"
      size="sm"
      variant="primary"
      dismissable
      @it-chip-close=${i=>{i.preventDefault(),window.confirm("Rimuovere questa chip?")&&i.currentTarget.close()}}
    >
      <it-button
        slot="dismiss-button"
        it-aria-label="Elimina etichetta"
        it-aria-description="La rimozione richiede conferma."
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  `},p={name:"Chip disabilitata",args:{isDisabled:!0},render:i=>e`
    <it-chip label="Etichetta" size="sm" variant="${i.variant}" dismissable ?is-disabled="${i.isDisabled}">
      <it-button
        slot="dismiss-button"
        it-aria-label="Elimina etichetta"
        ?disabled="${i.isDisabled}"
        it-aria-description="Questa chip è disabilitata e non può essere rimossa."
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  `},d={name:"Chip con avatar",render:()=>e`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip
        label="Mario Rossi"
        size="sm"
        variant="primary"
        avatar="https://randomuser.me/api/portraits/men/46.jpg"
        avatar-alt="Mario Rossi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          it-aria-label="Rimuovi Mario Rossi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip
        label="Anna Verdi"
        size="lg"
        variant="secondary"
        avatar="https://randomuser.me/api/portraits/women/32.jpg"
        avatar-alt="Anna Verdi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          it-aria-label="Rimuovi Anna Verdi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
    </div>
  `},h={name:"Chip con icona",render:()=>e`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip label="Download" size="sm" variant="primary" dismissable>
        <it-icon slot="icon" name="it-download"></it-icon>
        <it-button
          slot="dismiss-button"
          it-aria-label="Rimuovi download"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip label="Carica file" size="lg" variant="success" dismissable>
        <it-icon slot="icon" name="it-upload"></it-icon>
        <it-button
          slot="dismiss-button"
          it-aria-label="Rimuovi carica file"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip href="#" label="Preferiti" size="sm" variant="warning">
        <it-icon slot="icon" name="it-star-full"></it-icon>
      </it-chip>
    </div>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  args: {
    variant: 'primary'
  },
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderComponent(params)}\`
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Personalizzazione degli stili',
  tags: ['!dev', '!autodocs'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: {
        hidden: true,
        sourceState: 'none'
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Variante con link',
  args: {
    size: 'sm',
    variant: undefined,
    href: '#'
  },
  render: () => html\` <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip> \`
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Varianti di colore',
  args: {
    label: 'Etichetta',
    size: 'sm',
    dismissable: false
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Varianti di colore link',
  args: {
    label: 'Etichetta',
    size: 'sm',
    dismissable: false
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Varianti di dimensione',
  args: {
    size: 'sm',
    variant: undefined,
    dismissable: true
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <it-chip label="Etichetta" size="sm" variant="" dismissable></it-chip>
      <it-chip label="Etichetta" size="lg" variant="" dismissable></it-chip>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Chip con chiusura',
  render: () => html\`
    <it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
      <it-button
        slot="dismiss-button"
        it-aria-label="Elimina etichetta"
        it-aria-description="Puoi premere per eliminare la chip."
        @click=\${(e: Event) => {
    const chip = (e.currentTarget as HTMLElement).closest('it-chip');
    if (chip) chip.remove();
  }}
        @keydown=\${(e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const chip = (e.currentTarget as HTMLElement).closest('it-chip');
      if (chip) chip.remove();
    }
  }}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  \`,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
  <it-button
    slot="dismiss-button"
    it-aria-label="Elimina etichetta"
    it-aria-description="Puoi premere per eliminare la chip."
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
</it-chip>
\`,
        language: 'html'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Logica di rimozione personalizzata',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      source: {
        code: \`<it-chip
  label="Etichetta"
  size="sm"
  variant="primary"
  dismissable
  id="chip-conferma"
>
  <it-button slot="dismiss-button" it-aria-label="Elimina etichetta">
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
</it-chip>

<script type="module">
  const chip = document.getElementById('chip-conferma');
  chip.addEventListener('it-chip-close', (e) => {
    e.preventDefault(); // impedisce la rimozione di default
    if (confirm('Rimuovere questa chip?')) chip.close();
  });
<\/script>
\`,
        language: 'html'
      }
    }
  },
  render: () => html\`
    <it-chip
      label="Etichetta"
      size="sm"
      variant="primary"
      dismissable
      @it-chip-close=\${(e: Event) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    if (window.confirm('Rimuovere questa chip?')) {
      (e.currentTarget as HTMLElement & {
        close: () => void;
      }).close();
    }
  }}
    >
      <it-button
        slot="dismiss-button"
        it-aria-label="Elimina etichetta"
        it-aria-description="La rimozione richiede conferma."
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  \`
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Chip disabilitata',
  args: {
    isDisabled: true
  },
  render: args => html\`
    <it-chip label="Etichetta" size="sm" variant="\${args.variant}" dismissable ?is-disabled="\${args.isDisabled}">
      <it-button
        slot="dismiss-button"
        it-aria-label="Elimina etichetta"
        ?disabled="\${args.isDisabled}"
        it-aria-description="Questa chip è disabilitata e non può essere rimossa."
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  \`
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Chip con avatar',
  render: () => html\`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip
        label="Mario Rossi"
        size="sm"
        variant="primary"
        avatar="https://randomuser.me/api/portraits/men/46.jpg"
        avatar-alt="Mario Rossi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          it-aria-label="Rimuovi Mario Rossi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip
        label="Anna Verdi"
        size="lg"
        variant="secondary"
        avatar="https://randomuser.me/api/portraits/women/32.jpg"
        avatar-alt="Anna Verdi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          it-aria-label="Rimuovi Anna Verdi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Chip con icona',
  render: () => html\`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip label="Download" size="sm" variant="primary" dismissable>
        <it-icon slot="icon" name="it-download"></it-icon>
        <it-button
          slot="dismiss-button"
          it-aria-label="Rimuovi download"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip label="Carica file" size="lg" variant="success" dismissable>
        <it-icon slot="icon" name="it-upload"></it-icon>
        <it-button
          slot="dismiss-button"
          it-aria-label="Rimuovi carica file"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip href="#" label="Preferiti" size="sm" variant="warning">
        <it-icon slot="icon" name="it-star-full"></it-icon>
      </it-chip>
    </div>
  \`
}`,...h.parameters?.docs?.source}}};const I=["EsempioInterattivo","PersonalizzazioneDegliStili","VarianteConLink","VariantiColore","VariantiColoreLink","VariantiDimensione","ChipConChiusura","ChiusuraConLogicaPersonalizzata","ChipDisabilitata","ChipConAvatar","ChipConIcona"],L=Object.freeze(Object.defineProperty({__proto__:null,ChipConAvatar:d,ChipConChiusura:l,ChipConIcona:h,ChipDisabilitata:p,ChiusuraConLogicaPersonalizzata:m,EsempioInterattivo:a,PersonalizzazioneDegliStili:s,VarianteConLink:r,VariantiColore:n,VariantiColoreLink:o,VariantiDimensione:c,__namedExportsOrder:I,default:y},Symbol.toStringTag,{value:"Module"}));export{L as C,a as E,n as V,c as a,r as b,o as c,d,h as e,l as f,m as g,p as h};
