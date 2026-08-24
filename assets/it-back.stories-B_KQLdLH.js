import{t as u,B as b,b as t}from"./iframe-BIx49rSp.js";import{d as k}from"./dispatch-cancelable-Dbrx1KBI.js";var g=Object.getOwnPropertyDescriptor,v=(a,e,m,l)=>{for(var s=l>1?void 0:l?g(e,m):e,c=a.length-1,d;c>=0;c--)(d=a[c])&&(s=d(s)||s);return s};let p=class extends b{constructor(){super(...arguments),this._onClick=a=>{const e=this._trigger;e&&a.composedPath().includes(e)&&(a.preventDefault(),k(this,"it-back-navigate",{},()=>{window.history.back()}))}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback?.(),this.addEventListener("click",this._onClick)}disconnectedCallback(){this.removeEventListener("click",this._onClick),super.disconnectedCallback?.()}get _trigger(){return this.querySelector(".go-back")}};p=v([u("it-back")],p);const f={title:"Componenti/Back",component:"it-back",tags:["web-component","a11y-ok"],parameters:{docs:{description:{component:`
    <Description>Elemento di navigazione per tornare alla pagina o alla schermata precedente</Description>
            `.trim()}}}},i={render:()=>t`
    <it-back>
      <a href="#" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
        <span>Torna indietro</span>
      </a>
    </it-back>
  `},n={decorators:[a=>t` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${a()}<!-- Fine esempi --></div> `],render:()=>t`
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
        <span>Torna indietro</span>
      </it-button>
    </it-back>
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
        <span>Torna indietro</span>
      </it-button>
    </it-back>
  `},o={name:"Navigazione personalizzata",parameters:{docs:{description:{story:"L'evento `it-back-navigate` è **cancelable**. Chiamando `event.preventDefault()` impedisci `window.history.back()` e puoi gestire la navigazione indietro secondo il router del tuo framework.\n\nIn questo esempio la navigazione di default viene intercettata e sostituita da un messaggio (così la storia non lascia la pagina di Storybook)."},source:{code:`<it-back id="back-custom">
  <a href="#" class="go-back">
    <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
    <span>Torna indietro</span>
  </a>
</it-back>

<script type="module">
  const back = document.getElementById('back-custom');
  back.addEventListener('it-back-navigate', (e) => {
    e.preventDefault(); // impedisce window.history.back()
    // ...naviga indietro secondo il router del tuo framework...
    console.log('Navigazione indietro gestita dal framework');
  });
<\/script>`}}},render:()=>t`
    <it-back
      @it-back-navigate=${a=>{a.preventDefault();const e=document.getElementById("back-custom-status");e&&(e.textContent="Navigazione indietro intercettata: la gestisce il tuo router.")}}
    >
      <a href="#" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
        <span>Torna indietro</span>
      </a>
    </it-back>
    <p id="back-custom-status" class="mt-3" style="font-size:0.9rem" role="status" aria-live="polite"></p>
  `},r={name:"Pulsante con sola icona",decorators:[a=>t` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${a()}<!-- Fine esempi --></div> `],render:()=>t`
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
        <span class="visually-hidden">Torna indietro</span>
      </it-button>
    </it-back>
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
        <span class="visually-hidden">Torna indietro</span>
      </it-button>
    </it-back>
  `};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <it-back>
      <a href="#" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
        <span>Torna indietro</span>
      </a>
    </it-back>
  \`
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  decorators: [story => html\` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->\${story()}<!-- Fine esempi --></div> \`],
  render: () => html\`
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
        <span>Torna indietro</span>
      </it-button>
    </it-back>
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
        <span>Torna indietro</span>
      </it-button>
    </it-back>
  \`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Navigazione personalizzata',
  parameters: {
    docs: {
      description: {
        story: \`L'evento \\\`it-back-navigate\\\` è **cancelable**. Chiamando \\\`event.preventDefault()\\\` impedisci \\\`window.history.back()\\\` e puoi gestire la navigazione indietro secondo il router del tuo framework.

In questo esempio la navigazione di default viene intercettata e sostituita da un messaggio (così la storia non lascia la pagina di Storybook).\`
      },
      source: {
        code: \`<it-back id="back-custom">
  <a href="#" class="go-back">
    <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
    <span>Torna indietro</span>
  </a>
</it-back>

<script type="module">
  const back = document.getElementById('back-custom');
  back.addEventListener('it-back-navigate', (e) => {
    e.preventDefault(); // impedisce window.history.back()
    // ...naviga indietro secondo il router del tuo framework...
    console.log('Navigazione indietro gestita dal framework');
  });
<\/script>\`
      }
    }
  },
  render: () => html\`
    <it-back
      @it-back-navigate=\${(e: Event) => {
    e.preventDefault();
    const status = document.getElementById('back-custom-status');
    if (status) status.textContent = 'Navigazione indietro intercettata: la gestisce il tuo router.';
  }}
    >
      <a href="#" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
        <span>Torna indietro</span>
      </a>
    </it-back>
    <p id="back-custom-status" class="mt-3" style="font-size:0.9rem" role="status" aria-live="polite"></p>
  \`
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Pulsante con sola icona',
  decorators: [story => html\` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->\${story()}<!-- Fine esempi --></div> \`],
  render: () => html\`
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
        <span class="visually-hidden">Torna indietro</span>
      </it-button>
    </it-back>
    <it-back>
      <it-button variant="primary" class="go-back">
        <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
        <span class="visually-hidden">Torna indietro</span>
      </it-button>
    </it-back>
  \`
}`,...r.parameters?.docs?.source}}};const y=["Link","Pulsante","NavigazionePersonalizzata","PulsanteSolaIcona"],h=Object.freeze(Object.defineProperty({__proto__:null,Link:i,NavigazionePersonalizzata:o,Pulsante:n,PulsanteSolaIcona:r,__namedExportsOrder:y,default:f},Symbol.toStringTag,{value:"Module"}));export{h as B,i as L,o as N,n as P,r as a};
