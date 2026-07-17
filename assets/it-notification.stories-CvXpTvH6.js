import{b as t,o}from"./iframe-CfubThG-.js";const h=["h2","h3","h4","h5","h6"],T=["success","error","warning","info"],$=["top","bottom","left","right"];var f=Object.freeze,z=Object.defineProperty,b=(i,m)=>f(z(i,"raw",{value:f(i.slice())})),v,g;const y={title:"Componenti/Notification",tags:["a11y-ok","web-component","alpha"],component:"it-notification",parameters:{layout:"padded"},args:{icon:"it-info-circle",dismissable:!1},argTypes:{headingLevel:{name:"heading-level",control:"select",type:"string",options:[void 0,...h],description:'Livello di heading da usare per il titolo della notifica. Se non specificato, viene usato h2. Vedi la sezione "Accessibilità" della documentazione per maggiori dettagli.'},icon:{name:"icon",control:"text",description:"Nome dell'icona da visualizzare nella notifica."},status:{control:"select",type:"string",options:[void 0,...T],description:"Stato della notifica, che ne influenza il colore."},dismissable:{control:"boolean",type:"boolean",description:"Se presente, mostra un pulsante per chiudere la notifica."},fix:{control:"select",type:"string",options:[void 0,...$],description:"Fissa la posizione della notifica nel lato scelto dello schermo."},timeout:{control:"number",type:"number",description:"Tempo di permanenza della notifica, espresso in millisecondi."}}};function e(i){return Object.keys(y.argTypes).reduce((m,u)=>(i?.includes(u)||(m[u]={table:{disable:!0}}),m),{})}const n={name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},decorators:[i=>t`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${i()}</div>
    `],render:i=>t`
    <div>
      <p class="mb-4"><strong>Notification standard</strong></p>
      <it-notification
        heading-level=${o(i.headingLevel)}
        status=${o(i.status)}
        ?dismissable=${i.dismissable}
        ?fix=${i.fix}
        timeout=${o(i.timeout||void 0)}
      >
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Notification con icona</strong></p>
      <it-notification
        heading-level=${o(i.headingLevel)}
        icon=${o(i.icon||void 0)}
        status=${o(i.status)}
        ?dismissable=${i.dismissable}
        ?fix=${i.fix}
        timeout=${o(i.timeout||void 0)}
      >
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>
  `},s={name:"Notifica con messaggio",decorators:[i=>t`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${i()}</div>
    `],argTypes:{...e(["headingLevel","status"])},render:i=>t`
    <div>
      <p class="mb-4"><strong>Notifica standard con testo</strong></p>
      <it-notification heading-level=${o(i.headingLevel)} status=${o(i.status)}>
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Notifica con icona e testo</strong></p>
      <it-notification
        heading-level=${o(i.headingLevel)}
        icon=${o(i.icon||void 0)}
        status=${o(i.status)}
      >
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>
  `},a={decorators:[i=>t`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${i()}</div>
    `],argTypes:{...e()},render:i=>t`
    <div>
      <p class="mb-4"><strong>Notification standard</strong></p>
      <it-notification dismissable>
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Notification con icona</strong></p>
      <it-notification icon=${o(i.icon||void 0)} status="success" dismissable>
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>
  `},c={decorators:[i=>t`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${i()}</div>
    `],argTypes:{...e()},render:()=>t`
    <div>
      <p class="mb-4"><strong>Successo</strong></p>
      <it-notification status="success" icon="it-check-circle">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Errore</strong></p>
      <it-notification status="error" icon="it-close-circle">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Info</strong></p>
      <it-notification status="info" icon="it-info-circle">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Precauzione</strong></p>
      <it-notification status="warning" icon="it-error">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>
  `},r={name:"Posizione predefinita",decorators:[i=>t` <div class="test-desktop">${i()}</div> `],argTypes:{...e()},render:()=>t`
    <it-notification icon="it-check-circle" status="success">
      <span slot="title">Titolo notifica</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
    </it-notification>
  `},d={name:"Posizione fissa",parameters:{layout:"fullscreen"},decorators:[i=>t` <div class="test-desktop">${i()}</div> `],argTypes:{...e()},render:()=>t`
    <it-notification icon="it-check-circle" status="success" fix="top">
      <span slot="title">Top fix</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
    </it-notification>
    <it-notification icon="it-check-circle" status="success" fix="bottom">
      <span slot="title">Bottom fix</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
    </it-notification>
    <it-notification icon="it-check-circle" status="success" fix="left">
      <span slot="title">Titolo notifica</span>
    </it-notification>
    <it-notification icon="it-check-circle" status="success" fix="right">
      <span slot="title">Titolo notifica</span>
    </it-notification>
  `},l={name:"A scomparsa automatica",decorators:[i=>t` <div style="position:relative;width:100%;height:400px">${i()}</div> `],argTypes:{...e(["timeout"])},render:i=>t(v||(v=b([`
    <div id="esempio-attivazione">
      <it-button type="button" variant="primary">Inviami una notifica</it-button>
      <it-button type="button" variant="primary" id="five-sec"> Inviami una notifica (durata 5 secondi) </it-button>
      <it-notification icon="it-check-circle" status="success" timeout="`,`">
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>

    <script>
      document.querySelector('#esempio-attivazione it-button').addEventListener('click', () => {
        document.querySelector('#esempio-attivazione it-notification').show();
      });
      document.querySelector('#esempio-attivazione it-button#five-sec').addEventListener('click', () => {
        document.querySelector('#esempio-attivazione it-notification').show(5000);
      });
    <\/script>
  `])),o(i.timeout||void 0))},p={name:"A scomparsa manuale",decorators:[i=>t` <div style="position:relative;width:100%;height:400px">${i()}</div> `],argTypes:{...e()},render:()=>t(g||(g=b([`
    <div id="esempio-eliminazione">
      <it-button type="button" variant="primary">Inviami una notifica</it-button>
      <it-button type="button" variant="primary" id="delete-notification"> Rimuovi notifica </it-button>
      <it-notification icon="it-check-circle" status="success" dismissable>
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>

    <script>
      document.querySelector('#esempio-eliminazione it-button').addEventListener('click', () => {
        document.querySelector('#esempio-eliminazione it-notification').show();
      });
      document.querySelector('#esempio-eliminazione it-button#delete-notification').addEventListener('click', () => {
        document.querySelector('#esempio-eliminazione it-notification').hide();
      });
    <\/script>
  `])))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  decorators: [story => html\`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">\${story()}</div>
    \`],
  render: args => html\`
    <div>
      <p class="mb-4"><strong>Notification standard</strong></p>
      <it-notification
        heading-level=\${ifDefined(args.headingLevel)}
        status=\${ifDefined(args.status)}
        ?dismissable=\${args.dismissable}
        ?fix=\${args.fix}
        timeout=\${ifDefined(args.timeout || undefined)}
      >
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Notification con icona</strong></p>
      <it-notification
        heading-level=\${ifDefined(args.headingLevel)}
        icon=\${ifDefined(args.icon || undefined)}
        status=\${ifDefined(args.status)}
        ?dismissable=\${args.dismissable}
        ?fix=\${args.fix}
        timeout=\${ifDefined(args.timeout || undefined)}
      >
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Notifica con messaggio',
  decorators: [story => html\`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">\${story()}</div>
    \`],
  argTypes: {
    ...disabledControls(['headingLevel', 'status'])
  },
  render: args => html\`
    <div>
      <p class="mb-4"><strong>Notifica standard con testo</strong></p>
      <it-notification heading-level=\${ifDefined(args.headingLevel)} status=\${ifDefined(args.status)}>
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Notifica con icona e testo</strong></p>
      <it-notification
        heading-level=\${ifDefined(args.headingLevel)}
        icon=\${ifDefined(args.icon || undefined)}
        status=\${ifDefined(args.status)}
      >
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>
  \`
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [story => html\`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">\${story()}</div>
    \`],
  argTypes: {
    ...disabledControls()
  },
  render: args => html\`
    <div>
      <p class="mb-4"><strong>Notification standard</strong></p>
      <it-notification dismissable>
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Notification con icona</strong></p>
      <it-notification icon=\${ifDefined(args.icon || undefined)} status="success" dismissable>
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>
  \`
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  decorators: [story => html\`
      <div class="test-docs" style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">\${story()}</div>
    \`],
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div>
      <p class="mb-4"><strong>Successo</strong></p>
      <it-notification status="success" icon="it-check-circle">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Errore</strong></p>
      <it-notification status="error" icon="it-close-circle">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Info</strong></p>
      <it-notification status="info" icon="it-info-circle">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>

    <div>
      <p class="mb-4"><strong>Precauzione</strong></p>
      <it-notification status="warning" icon="it-error">
        <span slot="title">Titolo notifica</span>
      </it-notification>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Posizione predefinita',
  decorators: [story => html\` <div class="test-desktop">\${story()}</div> \`],
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <it-notification icon="it-check-circle" status="success">
      <span slot="title">Titolo notifica</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
    </it-notification>
  \`
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Posizione fissa',
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [story => html\` <div class="test-desktop">\${story()}</div> \`],
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <it-notification icon="it-check-circle" status="success" fix="top">
      <span slot="title">Top fix</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
    </it-notification>
    <it-notification icon="it-check-circle" status="success" fix="bottom">
      <span slot="title">Bottom fix</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
    </it-notification>
    <it-notification icon="it-check-circle" status="success" fix="left">
      <span slot="title">Titolo notifica</span>
    </it-notification>
    <it-notification icon="it-check-circle" status="success" fix="right">
      <span slot="title">Titolo notifica</span>
    </it-notification>
  \`
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'A scomparsa automatica',
  decorators: [story => html\` <div style="position:relative;width:100%;height:400px">\${story()}</div> \`],
  argTypes: {
    ...disabledControls(['timeout'])
  },
  render: args => html\`
    <div id="esempio-attivazione">
      <it-button type="button" variant="primary">Inviami una notifica</it-button>
      <it-button type="button" variant="primary" id="five-sec"> Inviami una notifica (durata 5 secondi) </it-button>
      <it-notification icon="it-check-circle" status="success" timeout="\${ifDefined(args.timeout || undefined)}">
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>

    <script>
      document.querySelector('#esempio-attivazione it-button').addEventListener('click', () => {
        document.querySelector('#esempio-attivazione it-notification').show();
      });
      document.querySelector('#esempio-attivazione it-button#five-sec').addEventListener('click', () => {
        document.querySelector('#esempio-attivazione it-notification').show(5000);
      });
    <\/script>
  \`
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'A scomparsa manuale',
  decorators: [story => html\` <div style="position:relative;width:100%;height:400px">\${story()}</div> \`],
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div id="esempio-eliminazione">
      <it-button type="button" variant="primary">Inviami una notifica</it-button>
      <it-button type="button" variant="primary" id="delete-notification"> Rimuovi notifica </it-button>
      <it-notification icon="it-check-circle" status="success" dismissable>
        <span slot="title">Titolo notifica</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…</p>
      </it-notification>
    </div>

    <script>
      document.querySelector('#esempio-eliminazione it-button').addEventListener('click', () => {
        document.querySelector('#esempio-eliminazione it-notification').show();
      });
      document.querySelector('#esempio-eliminazione it-button#delete-notification').addEventListener('click', () => {
        document.querySelector('#esempio-eliminazione it-notification').hide();
      });
    <\/script>
  \`
}`,...p.parameters?.docs?.source}}};const S=["EsempioInterattivo","ConMessaggio","Eliminabili","Stati","PosizionePredefinita","PosizioneFissa","Attivazione","AttivazioneEdEliminazione"],x=Object.freeze(Object.defineProperty({__proto__:null,Attivazione:l,AttivazioneEdEliminazione:p,ConMessaggio:s,Eliminabili:a,EsempioInterattivo:n,PosizioneFissa:d,PosizionePredefinita:r,Stati:c,__namedExportsOrder:S,default:y},Symbol.toStringTag,{value:"Module"}));export{l as A,s as C,n as E,r as P,x as S,a,c as b,d as c,p as d};
