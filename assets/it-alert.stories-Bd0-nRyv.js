import{n as g,t as f,B as _,b as r}from"./iframe-C2GQMFKp.js";import{d as C}from"./dispatch-cancelable-Dbrx1KBI.js";function y(t){let e=t.parentElement;for(;e;){const i=e.getAttribute("tabindex");if(i!==null&&parseInt(i,10)>=0)return e;e=e.parentElement}return null}const w=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])',"it-button:not([disabled])"].join(",");function E(t){const e=Array.from(document.querySelectorAll(w)).filter(a=>a!==t&&!t.contains(a));if(!e.length)return null;let i=null,n=null;return e.forEach(a=>{t.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_PRECEDING?i=a:n||(n=a)}),i??n}const b=["primary","secondary","success","warning","danger"];var S=Object.defineProperty,A=Object.getOwnPropertyDescriptor,h=(t,e,i,n)=>{for(var a=n>1?void 0:n?A(e,i):e,m=t.length-1,v;m>=0;m--)(v=t[m])&&(a=(n?v(e,i,a):v(a))||a);return n&&a&&S(e,i,a),a};const z=150;let p=class extends _{constructor(){super(...arguments),this._closeTimer=null,this._onClick=t=>{const e=this._closeButton;e&&t.composedPath().includes(e)&&this._requestClose()}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback?.(),this.addEventListener("click",this._onClick)}disconnectedCallback(){this.removeEventListener("click",this._onClick),this._closeTimer!==null&&(clearTimeout(this._closeTimer),this._closeTimer=null),super.disconnectedCallback?.()}updated(){this._applyMarkup()}_applyMarkup(){const t=this._alert;t&&(t.hasAttribute("role")||t.setAttribute("role","alert"),this.variant&&b.forEach(e=>t.classList.toggle(`alert-${e}`,e===this.variant)))}get _alert(){return this.querySelector(".alert")}get _closeButton(){return this.querySelector('.btn-close, [data-bs-dismiss="alert"]')}_requestClose(){C(this,"it-alert-close",{alert:this},()=>this.close())}close(){const t=this._alert,e=this._adjacentAlert(),i=e?null:y(this)??E(this);if(!t){this.remove(),e?p._focusCloseButton(e):i?.focus();return}t.classList.remove("show");const n=this.prefersReducedMotion?0:z;this._closeTimer=window.setTimeout(()=>{this._closeTimer=null,this.remove(),e?p._focusCloseButton(e):i?.focus()},n)}_adjacentAlert(){const t=i=>!!i&&i.tagName.toLowerCase()==="it-alert";let e=this.nextElementSibling;for(;e&&!t(e);)e=e.nextElementSibling;if(t(e))return e;for(e=this.previousElementSibling;e&&!t(e);)e=e.previousElementSibling;return t(e)?e:null}static _focusCloseButton(t){t._closeButton?.focus()}};h([g({type:String,reflect:!0})],p.prototype,"variant",2);p=h([f("it-alert")],p);const T={title:"Componenti/Alert",component:"it-alert",tags:["new","web-component","a11y-ok"],parameters:{layout:"padded"},args:{variant:"success"},argTypes:{variant:{control:"select",description:"Colore dell'alert.",options:b,table:{defaultValue:{summary:"primary"}}}}},s={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:({variant:t})=>r`
    <it-alert variant=${t}>
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>${t}</b>".
      </div>
    </it-alert>
  `},o={decorators:[t=>r`<div style="display:flex;flex-direction:column;gap:1rem">${t()}</div>`],render:()=>r`
    <it-alert variant="primary">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>primary</b>".
      </div>
    </it-alert>

    <it-alert variant="secondary">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>secondary</b>".
      </div>
    </it-alert>

    <it-alert variant="success">
      <div class="alert">
        <it-icon name="it-check-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>success</b>".
      </div>
    </it-alert>

    <it-alert variant="warning">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>warning</b>".
      </div>
    </it-alert>

    <it-alert variant="danger">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>danger</b>".
      </div>
    </it-alert>
  `},l={render:()=>r`
    <it-alert variant="danger">
      <div class="alert">Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.</div>
    </it-alert>
  `},c={render:()=>r`
    <it-alert variant="success">
      <div class="alert">
        <h4 class="alert-heading">Avviso di successo!</h4>
        <p>
          Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in
          modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.
        </p>
        <hr />
        <p class="mb-0">
          Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.
        </p>
      </div>
    </it-alert>
  `},u={render:()=>r`
    <it-alert variant="warning">
      <div class="alert alert-dismissible fade show">
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
        <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
          <it-icon name="it-close"></it-icon>
        </it-button>
      </div>
    </it-alert>
  `},d={name:"Chiusura con logica personalizzata",parameters:{docs:{description:{story:"L'evento `it-alert-close` è cancelable. Chiamando `event.preventDefault()` puoi\nintercettare la chiusura ed eseguire una logica personalizzata (ad esempio una conferma),\nrichiamando poi il metodo pubblico `close()` quando opportuno."}}},render:()=>r`
    <it-alert
      variant="warning"
      @it-alert-close=${t=>{t.preventDefault(),window.confirm("Vuoi davvero chiudere questo avviso?")&&t.currentTarget.close()}}
    >
      <div class="alert alert-dismissible fade show">
        <strong>Attenzione</strong> La chiusura richiede conferma.
        <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
          <it-icon name="it-close"></it-icon>
        </it-button>
      </div>
    </it-alert>
  `};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: ({
    variant
  }) => html\`
    <it-alert variant=\${variant}>
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>\${variant}</b>".
      </div>
    </it-alert>
  \`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [Story => html\`<div style="display:flex;flex-direction:column;gap:1rem">\${Story()}</div>\`],
  render: () => html\`
    <it-alert variant="primary">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>primary</b>".
      </div>
    </it-alert>

    <it-alert variant="secondary">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>secondary</b>".
      </div>
    </it-alert>

    <it-alert variant="success">
      <div class="alert">
        <it-icon name="it-check-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>success</b>".
      </div>
    </it-alert>

    <it-alert variant="warning">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>warning</b>".
      </div>
    </it-alert>

    <it-alert variant="danger">
      <div class="alert">
        <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>danger</b>".
      </div>
    </it-alert>
  \`
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <it-alert variant="danger">
      <div class="alert">Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.</div>
    </it-alert>
  \`
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <it-alert variant="success">
      <div class="alert">
        <h4 class="alert-heading">Avviso di successo!</h4>
        <p>
          Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in
          modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.
        </p>
        <hr />
        <p class="mb-0">
          Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.
        </p>
      </div>
    </it-alert>
  \`
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <it-alert variant="warning">
      <div class="alert alert-dismissible fade show">
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
        <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
          <it-icon name="it-close"></it-icon>
        </it-button>
      </div>
    </it-alert>
  \`
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Chiusura con logica personalizzata',
  parameters: {
    docs: {
      description: {
        story: \`L'evento \\\`it-alert-close\\\` è cancelable. Chiamando \\\`event.preventDefault()\\\` puoi
intercettare la chiusura ed eseguire una logica personalizzata (ad esempio una conferma),
richiamando poi il metodo pubblico \\\`close()\\\` quando opportuno.\`
      }
    }
  },
  render: () => html\`
    <it-alert
      variant="warning"
      @it-alert-close=\${(e: Event) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    if (window.confirm('Vuoi davvero chiudere questo avviso?')) {
      (e.currentTarget as HTMLElement & {
        close: () => void;
      }).close();
    }
  }}
    >
      <div class="alert alert-dismissible fade show">
        <strong>Attenzione</strong> La chiusura richiede conferma.
        <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
          <it-icon name="it-close"></it-icon>
        </it-button>
      </div>
    </it-alert>
  \`
}`,...d.parameters?.docs?.source}}};const L=["EsempioInterattivo","Esempi","LinkEvidenziato","ContenutoAggiuntivo","Chiusura","ChiusuraConLogicaPersonalizzata"],q=Object.freeze(Object.defineProperty({__proto__:null,Chiusura:u,ChiusuraConLogicaPersonalizzata:d,ContenutoAggiuntivo:c,Esempi:o,EsempioInterattivo:s,LinkEvidenziato:l,__namedExportsOrder:L,default:T},Symbol.toStringTag,{value:"Module"}));export{c as C,s as E,l as L,q as S,o as a,u as b,d as c};
