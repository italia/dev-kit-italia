import{o as u,b as t}from"./iframe-BBsXzWsk.js";import{S as v}from"./formControlReusableStories-D49vJwJA.js";const c={title:"Componenti/Rating",tags:["web-component","a11y-ok"],component:"it-rating",args:{name:"rating",value:0,disabled:!1,readOnly:!1,required:!1,icon:"it-star-outline",maxElements:5},argTypes:{name:{control:"text",description:"Nome del campo per l'invio del form"},value:{control:{type:"number",min:0,max:5,step:1},description:"Valore corrente della valutazione (0-5, 0 = nessuna stella selezionata)"},icon:{control:"text",description:"Nome dell'icona da utilizzare per gli item del rating",table:{defaultValue:{summary:"it-star-outline"}}},disabled:{control:"boolean",type:"boolean",description:"Se il rating è disabilitato",table:{defaultValue:{summary:"false"}}},readOnly:{name:"read-only",control:"boolean",type:"boolean",description:"Se il rating è in sola lettura (non interattivo)",table:{defaultValue:{summary:"false"}}},required:{control:"boolean",type:"boolean",description:"Se la selezione è obbligatoria",table:{defaultValue:{summary:"false"}}},maxElements:{name:"max-elements",control:{type:"number",min:1,step:1},description:"Numero massimo di elementi nel rating, per messaggi di supporto e accessibilità, modificare rispetto al default solo se si cambia il numero di elementi visualizzati rispetto al default di 5",table:{defaultValue:{summary:"5"}}}}},n={...c,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>t`
    <it-rating
      name=${u(e.name||void 0)}
      value=${e.value.toString()}
      ?disabled=${e.disabled}
      ?read-only=${e.readOnly}
      ?required=${e.required}
      @change=${a=>{console.log("Rating changed:",a.target.getAttribute("value"))}}
      icon=${u(e.icon||void 0)}
      max-elements=${e.maxElements.toString()}
    >
      <span slot="label">Valuta questo contenuto</span>
      <it-rating-item value="1" ?checked=${e.value===1}>
        <span slot="label">1 stella</span>
      </it-rating-item>
      <it-rating-item value="2" ?checked=${e.value===2}>
        <span slot="label">2 stelle</span>
      </it-rating-item>
      <it-rating-item value="3" ?checked=${e.value===3}>
        <span slot="label">3 stelle</span>
      </it-rating-item>
      <it-rating-item value="4" ?checked=${e.value===4}>
        <span slot="label">4 stelle</span>
      </it-rating-item>
      <it-rating-item value="5" ?checked=${e.value===5}>
        <span slot="label">5 stelle</span>
      </it-rating-item>
    </it-rating>
  `},i={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"}}},render:()=>t`<div class="hide-preview"></div>`},l={name:"Con valore preimpostato",args:{value:3},render:()=>t`
    <it-rating name="rating-preset" value="3">
      <span slot="label">Valutazione</span>
      <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item value="4"><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
  `},r={name:"Sola lettura",args:{value:4,readOnly:!0},render:()=>t`
    <it-rating name="rating-readonly" value="4" read-only>
      <span slot="label">Sola lettura</span>
      <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item value="4" checked><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
    <p class="mt-3">Valutazione 4 stelle su 5</p>
  `},s={name:"Con icone personalizzate",args:{value:3},render:()=>t`
    <it-rating name="rating-check" icon="it-check-circle" value="4">
      <span slot="label">Valutazione con check</span>
      <it-rating-item value="1"><span slot="label">1 check</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 check</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 check</span></it-rating-item>
      <it-rating-item value="4"><span slot="label">4 check</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 check</span></it-rating-item>
    </it-rating>
  `},o={args:{value:0,required:!0},render:()=>t`
    <form
      @submit=${e=>{e.preventDefault();const a=new FormData(e.target);console.log(`Rating selezionato: ${a.get("rating-required")}`)}}
    >
      <it-rating name="rating-required" required>
        <span slot="label">Valutazione (obbligatoria)</span>
        <it-rating-item value="1">
          <span slot="label">1 stella</span>
        </it-rating-item>
        <it-rating-item value="2">
          <span slot="label">2 stelle</span>
        </it-rating-item>
        <it-rating-item value="3">
          <span slot="label">3 stelle</span>
        </it-rating-item>
        <it-rating-item value="4">
          <span slot="label">4 stelle</span>
        </it-rating-item>
        <it-rating-item value="5">
          <span slot="label">5 stelle</span>
        </it-rating-item>
      </it-rating>
      <it-button type="submit" class="mt-3" variant="primary">Invia</it-button>
    </form>
  `},m={name:"Integrazione con form",render:()=>t`
    <form
      id="review-form"
      @submit=${e=>{e.preventDefault();const a=e.target,d=new FormData(a),g=Object.fromEntries(d);console.log(`Form inviato! Rating: ${g.rating} Commento: ${g.comment}`)}}
    >
      <div class="mb-4">
        <it-rating name="rating" required>
          <span slot="label">Valuta questo servizio (obbligatorio)</span>
          <it-rating-item value="1">
            <span slot="label">1 stella</span>
          </it-rating-item>
          <it-rating-item value="2">
            <span slot="label">2 stelle</span>
          </it-rating-item>
          <it-rating-item value="3">
            <span slot="label">3 stelle</span>
          </it-rating-item>
          <it-rating-item value="4">
            <span slot="label">4 stelle</span>
          </it-rating-item>
          <it-rating-item value="5">
            <span slot="label">5 stelle</span>
          </it-rating-item>
        </it-rating>
      </div>

      <div class="mb-4">
        <div class="form-group">
          <label for="comment">Commento</label>
          <it-input type="textarea" id="comment" name="comment" class="form-control" rows="3" required></textarea>
        </div>
      </div>

      <it-button type="submit" variant="primary">Invia recensione</it-button>
      <it-button type="reset" variant="primary" outline>Reset</it-button>
    </form>
    <style>
      #review-form  {
        max-width: 400px;
      }
    </style>
  `},p={...v(""),tags:["!dev"]};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: args => html\`
    <it-rating
      name=\${ifDefined(args.name || undefined)}
      value=\${args.value.toString()}
      ?disabled=\${args.disabled}
      ?read-only=\${args.readOnly}
      ?required=\${args.required}
      @change=\${(e: CustomEvent) => {
    console.log('Rating changed:', (e.target as HTMLElement).getAttribute('value'));
  }}
      icon=\${ifDefined(args.icon || undefined)}
      max-elements=\${args.maxElements.toString()}
    >
      <span slot="label">Valuta questo contenuto</span>
      <it-rating-item value="1" ?checked=\${args.value === 1}>
        <span slot="label">1 stella</span>
      </it-rating-item>
      <it-rating-item value="2" ?checked=\${args.value === 2}>
        <span slot="label">2 stelle</span>
      </it-rating-item>
      <it-rating-item value="3" ?checked=\${args.value === 3}>
        <span slot="label">3 stelle</span>
      </it-rating-item>
      <it-rating-item value="4" ?checked=\${args.value === 4}>
        <span slot="label">4 stelle</span>
      </it-rating-item>
      <it-rating-item value="5" ?checked=\${args.value === 5}>
        <span slot="label">5 stelle</span>
      </it-rating-item>
    </it-rating>
  \`
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Con valore preimpostato',
  args: {
    value: 3
  },
  render: () => html\`
    <it-rating name="rating-preset" value="3">
      <span slot="label">Valutazione</span>
      <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item value="4"><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
  \`
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Sola lettura',
  args: {
    value: 4,
    readOnly: true
  },
  render: () => html\`
    <it-rating name="rating-readonly" value="4" read-only>
      <span slot="label">Sola lettura</span>
      <it-rating-item value="1"><span slot="label">1 stella</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 stelle</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 stelle</span></it-rating-item>
      <it-rating-item value="4" checked><span slot="label">4 stelle</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 stelle</span></it-rating-item>
    </it-rating>
    <p class="mt-3">Valutazione 4 stelle su 5</p>
  \`
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Con icone personalizzate',
  args: {
    value: 3
  },
  render: () => html\`
    <it-rating name="rating-check" icon="it-check-circle" value="4">
      <span slot="label">Valutazione con check</span>
      <it-rating-item value="1"><span slot="label">1 check</span></it-rating-item>
      <it-rating-item value="2"><span slot="label">2 check</span></it-rating-item>
      <it-rating-item value="3"><span slot="label">3 check</span></it-rating-item>
      <it-rating-item value="4"><span slot="label">4 check</span></it-rating-item>
      <it-rating-item value="5"><span slot="label">5 check</span></it-rating-item>
    </it-rating>
  \`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    required: true
  },
  render: () => html\`
    <form
      @submit=\${(e: Event) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(\`Rating selezionato: \${formData.get('rating-required')}\`);
  }}
    >
      <it-rating name="rating-required" required>
        <span slot="label">Valutazione (obbligatoria)</span>
        <it-rating-item value="1">
          <span slot="label">1 stella</span>
        </it-rating-item>
        <it-rating-item value="2">
          <span slot="label">2 stelle</span>
        </it-rating-item>
        <it-rating-item value="3">
          <span slot="label">3 stelle</span>
        </it-rating-item>
        <it-rating-item value="4">
          <span slot="label">4 stelle</span>
        </it-rating-item>
        <it-rating-item value="5">
          <span slot="label">5 stelle</span>
        </it-rating-item>
      </it-rating>
      <it-button type="submit" class="mt-3" variant="primary">Invia</it-button>
    </form>
  \`
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Integrazione con form',
  render: () => html\`
    <form
      id="review-form"
      @submit=\${(e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(\`Form inviato! Rating: \${data.rating} Commento: \${data.comment}\`);
  }}
    >
      <div class="mb-4">
        <it-rating name="rating" required>
          <span slot="label">Valuta questo servizio (obbligatorio)</span>
          <it-rating-item value="1">
            <span slot="label">1 stella</span>
          </it-rating-item>
          <it-rating-item value="2">
            <span slot="label">2 stelle</span>
          </it-rating-item>
          <it-rating-item value="3">
            <span slot="label">3 stelle</span>
          </it-rating-item>
          <it-rating-item value="4">
            <span slot="label">4 stelle</span>
          </it-rating-item>
          <it-rating-item value="5">
            <span slot="label">5 stelle</span>
          </it-rating-item>
        </it-rating>
      </div>

      <div class="mb-4">
        <div class="form-group">
          <label for="comment">Commento</label>
          <it-input type="textarea" id="comment" name="comment" class="form-control" rows="3" required></textarea>
        </div>
      </div>

      <it-button type="submit" variant="primary">Invia recensione</it-button>
      <it-button type="reset" variant="primary" outline>Reset</it-button>
    </form>
    <style>
      #review-form  {
        max-width: 400px;
      }
    </style>
  \`
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"{\n  ...StoryFormControlMethodAndProps('', `|\\`click()\\`| Triggera l'evento di click sull'input reale | - |`),\n  tags: ['!dev']\n}",...p.parameters?.docs?.source}}};const b=["EsempioInterattivo","PersonalizzazioneDegliStili","ValorePreimpostato","SolaLettura","IconePersonalizzate","Obbligatorio","InForm","MetodiEPropPubblici"],y=Object.freeze(Object.defineProperty({__proto__:null,EsempioInterattivo:n,IconePersonalizzate:s,InForm:m,MetodiEPropPubblici:p,Obbligatorio:o,PersonalizzazioneDegliStili:i,SolaLettura:r,ValorePreimpostato:l,__namedExportsOrder:b,default:c},Symbol.toStringTag,{value:"Module"}));export{n as E,s as I,p as M,o as O,y as R,r as S,l as V,m as a};
