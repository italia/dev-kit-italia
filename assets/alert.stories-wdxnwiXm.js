import{b as r}from"./iframe-DMYcKo6S.js";const l={title:"Componenti/Alert",tags:["a11y-ok","documentation"],parameters:{layout:"padded"}},e={decorators:[n=>r`<div style="display:flex;flex-direction:column;gap:1rem">${n()}</div>`],render:()=>r`
    <div class="alert alert-primary" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>primary</b>".
    </div>

    <div class="alert alert-secondary" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>info</b>".
    </div>

    <div class="alert alert-success" role="alert">
      <it-icon name="it-check-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>success</b>".
    </div>

    <div class="alert alert-warning" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>warning</b>".
    </div>

    <div class="alert alert-danger" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>danger</b>".
    </div>
  `},i={render:()=>r`
    <div class="alert alert-danger" role="alert">
      Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.
    </div>
  `},t={render:()=>r`
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Avviso di successo!</h4>
      <p>
        Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in modo
        da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.
      </p>
      <hr />
      <p class="mb-0">
        Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.
      </p>
    </div>
  `},a={render:()=>{function n(s){const o=s.target.closest(".alert");o&&(o.classList.remove("show"),setTimeout(()=>{o.remove()},150))}return r`
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
        <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso" @click=${n}>
          <it-icon name="it-close"></it-icon>
        </it-button>
      </div>
    `}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  decorators: [Story => html\`<div style="display:flex;flex-direction:column;gap:1rem">\${Story()}</div>\`],
  render: () => html\`
    <div class="alert alert-primary" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>primary</b>".
    </div>

    <div class="alert alert-secondary" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>info</b>".
    </div>

    <div class="alert alert-success" role="alert">
      <it-icon name="it-check-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>success</b>".
    </div>

    <div class="alert alert-warning" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>warning</b>".
    </div>

    <div class="alert alert-danger" role="alert">
      <it-icon name="it-info-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "<b>danger</b>".
    </div>
  \`
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="alert alert-danger" role="alert">
      Questo è un alert con un esempio di <a href="#" class="alert-link">link</a> evidenziato.
    </div>
  \`
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Avviso di successo!</h4>
      <p>
        Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più lungo in modo
        da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto.
      </p>
      <hr />
      <p class="mb-0">
        Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.
      </p>
    </div>
  \`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    function handleClose(event: Event) {
      const alertElement = (event.target as HTMLElement).closest('.alert');
      if (alertElement) {
        alertElement.classList.remove('show');
        setTimeout(() => {
          alertElement.remove();
        }, 150);
      }
    }
    return html\`
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
        <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso" @click=\${handleClose}>
          <it-icon name="it-close"></it-icon>
        </it-button>
      </div>
    \`;
  }
}`,...a.parameters?.docs?.source}}};const c=["Esempi","LinkEvidenziato","ContenutoAggiuntivo","Chiusura"],u=Object.freeze(Object.defineProperty({__proto__:null,Chiusura:a,ContenutoAggiuntivo:t,Esempi:e,LinkEvidenziato:i,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{t as C,e as E,i as L,u as S,a};
