import{T as Q,x as r,a as _,E as y}from"./lit-element-DvQWNfDj.js";import{n as b,t as T,o as k}from"./property-DPMN11qy.js";import{e as W,i as G,t as H}from"./directive-CJw_OlP2.js";const U=["muted","emphasis","primary"];/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=W(class extends G{constructor(i){var e;if(super(i),i.type!==H.ATTRIBUTE||i.name!=="class"||((e=i.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var a,o;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((a=this.nt)!=null&&a.has(n))&&this.st.add(n);return this.render(e)}const t=i.element.classList;for(const n of this.st)n in e||(t.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(o=this.nt)!=null&&o.has(n)||(s?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Q}});function v(i,e,t,a){var o=arguments.length,n=o<3?e:a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,a);else for(var f=i.length-1;f>=0;f--)(s=i[f])&&(n=(o<3?s(n):o>3?s(e,t,n):s(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n}function z(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)}/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var S;(function(i){i.NO_ERROR="",i.INVALID="invalid",i.ERROR_REQUIRED="required",i.PATTERN="pattern",i.MINLENGTH="minlength",i.MAXLENGTH="maxlength"})(S||(S={}));function B(i){var e,t,a="";if(typeof i=="string"||typeof i=="number")a+=i;else if(typeof i=="object")if(Array.isArray(i)){var o=i.length;for(e=0;e<o;e++)i[e]&&(t=B(i[e]))&&(a&&(a+=" "),a+=t)}else for(t in i)i[t]&&(a&&(a+=" "),a+=t);return a}function X(){for(var i,e,t=0,a="",o=arguments.length;t<o;t++)(i=arguments[t])&&(e=B(i))&&(a&&(a+=" "),a+=e);return a}const J=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:l}=window,D=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function O(){D&&(document.documentElement.dir,document.documentElement.lang||navigator.language),[...J.keys()].forEach(i=>{const e=i;typeof e.requestUpdate=="function"&&e.requestUpdate()})}if(D){const i=new MutationObserver(O);document.documentElement.dir,document.documentElement.lang||navigator.language,i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function K(...i){i.forEach(e=>{const t=e.$code.toLowerCase();l.has(t)?l.set(t,{...l.get(t),...e}):l.set(t,e)}),O()}window.registerTranslation=K;class Y{constructor(e){this.tag=e}format(e,t){return[`[${this.tag}] ${t}`]}warn(e){console.warn(...this.format("warn",e))}error(e){console.error(...this.format("error",e))}info(e){console.info(...this.format("info",e))}}class Z extends _{constructor(){super(),this.composeClass=X,this.logger=new Y(this.tagName.toLowerCase())}get _ariaAttributes(){const e={};for(const t of this.getAttributeNames())t==="it-role"?e.role=this.getAttribute(t):t.startsWith("it-aria-")&&(e[t.replace(/^it-/,"")]=this.getAttribute(t));return e}generateId(e){return`${e}-${Math.random().toString(36).slice(2)}`}addFocus(e){}getActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}connectedCallback(){var t;super.connectedCallback();const e=((t=this.id)==null?void 0:t.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(e)}}let c=class extends Z{constructor(){super(...arguments),this.image="",this.inverse=!1}createRenderRoot(){return this}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.sectionId=this.generateId("it-section")}updated(){this.organizeContent(),this.updateAriaLabelledBy(),this.updateInverseClass()}updateInverseClass(){const e=this.querySelector("section");if(!e)return;const t=e.querySelector(".section-content");t&&(this.inverse?t.classList.add("white-color"):t.classList.remove("white-color"))}organizeContent(){const e=this.querySelector("section");if(!e||e.querySelector(".section-content"))return;const a=document.createElement("div");a.classList.add("section-content"),this.inverse&&a.classList.add("white-color"),Array.from(this.childNodes).filter(n=>n!==e&&n.nodeType===Node.ELEMENT_NODE).forEach(n=>{a.appendChild(n)}),e.appendChild(a)}updateAriaLabelledBy(){const e=this.querySelector("section");if(!e)return;const t=e.querySelector(".section-content"),a=t?t.querySelectorAll("h1, h2, h3, h4, h5, h6"):this.querySelectorAll("h1, h2, h3, h4, h5, h6");let o;for(const n of a){const s=n;if(s.id){o=s.id;break}}if(!o&&a.length>0){const n=a[0];o=this.generateId("section-heading"),n.id=o}o?e.setAttribute("aria-labelledby",o):e.removeAttribute("aria-labelledby")}render(){const e={section:!0,[`section-${this.variant}`]:!!this.variant,"section-image":!!this.image};return r`
      <section id="${this.sectionId}" class="${F(e)}" part="section">
        ${this.image?r`
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper">
                    <img src="${this.image}" alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            `:null}
      </section>
    `}};v([b({type:String}),z("design:type",String)],c.prototype,"variant",void 0);v([b({type:String}),z("design:type",Object)],c.prototype,"image",void 0);v([b({type:Boolean}),z("design:type",Object)],c.prototype,"inverse",void 0);c=v([T("it-section")],c);const ee=r`
  <!-- contenuto di esempio START -->
  <div class="container">
    <div class="row mb-3">
      <div class="col-12">
        <h2 id="section-heading">Morbi fermentum amet</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
      </div>
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam
          quis enim. Eu nisl nunc mi ipsum faucibus.
        </p>
      </div>
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum.
          Mattis enim ut tellus elementum sagittis.
        </p>
      </div>
    </div>
  </div>
  <!-- contenuto di esempio END -->
`;function h({variant:i,image:e,content:t,inverse:a=!1}){return r`
    <it-section variant="${i||y}" image="${e||y}" ?inverse="${k(a)}">
      ${t||ee}
    </it-section>
  `}const oe={title:"Componenti/Section",tags:["autodocs"],component:"it-section",parameters:{docs:{description:{component:`<Description>Per creare sezioni di layout orizzontale con differenti sfondi.</Description>

Il componente \`<it-section>\` rappresenta un contenitore visivo per introdurre sezioni di contenuto con o senza immagine.

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/sections/)


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità (Draft)</span></div><p>
      Il titolo h2 dello snippet è solo indicativo: assicurati che il contenuto contenga un'intestazione semantica per garantire la corretta navigazione assistiva.
      <br>Il tag it-section contraddistingue una sezione semanticamente riconoscibile, associata all’id del titolo dall’attributo aria-labelledby.

      <br>Gli autori dovrebbero dividere la pagina in sezioni semantiche reali e non per solo scopo decorativo.     <br> Qualora si utilizzino sezioni al solo scopo decorativo sostituire it-section con div ed eliminare l’attributo aria-labelledby.
      <br><br>
      Le immagini fornite tramite l'attributo <code>image</code> sono considerate <strong>decorative</strong>: sono rese con un tag <code>&lt;img&gt;</code> e <code>aria-hidden="true"</code>.
      In questo modo non vengono annunciate dagli screen reader.</p><p class="pt-2">
      </p></div></div>
`}}},args:{variant:"",image:"",inverse:!1},argTypes:{variant:{control:{type:"select"},options:U,description:"Variante grafica del componente, corrisponde alle classi di Bootstrap Italia",table:{defaultValue:{summary:void 0}}},image:{control:{type:"text"},description:"URL immagine di sfondo, ad esempio https://picsum.photos/1600/500"},inverse:{control:{type:"boolean"},description:"Quando attivo, l’attributo inverse applica il colore bianco ai testi. È utile quando la sezione ha uno sfondo scuro o un’immagine di sfondo, così da garantire il corretto contrasto e la leggibilità dei contenuti.",table:{defaultValue:{summary:!1}}}}},d={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:i=>r`${h(i)}`},u={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `section`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n\nQuando si organizzano i contenuti usando le classi della griglia, non serve aggiungere spazio ai lati. Se proprio necessario, si può aggiungere spazio laterale usando la variabile `--bs-section-padding-x`.\n\nSi può usare la variabile `--bs-section-image-overlay` per regolare l'opacità dell'overlay applicato all'immagine.\n"}}},render:()=>r`<div class="hide-preview"></div>`},m={name:"Varianti di sfondo",render:()=>r`
    <div class="d-flex flex-column gap-4">
      ${["muted","emphasis","primary"].map(i=>h({variant:i,inverse:i!=="muted",content:r`
            <div class="container">
              <h3 id="section-heading-${i}">Sezione ${i}</h3>
              <p>
                Questa sezione usa la variante <code>${i}</code>
                ${i!=="muted"?"con testo bianco attraverso l'attributo inverse":""}
              </p>
            </div>
          `}))}
    </div>
  `,parameters:{docs:{description:{story:`
Sono disponibili le varianti colore di sfondo per le sezioni, corrispondenti alle classi di Bootstrap italia:

- \`muted\`
- \`emphasis\`
- \`primary\`

Il componente Section ha, per default, uno sfondo trasparente.
        `}}}},p={name:"Sezione con immagine decorativa",args:{image:"https://picsum.photos/1280/720?image=81",inverse:!0},render:i=>h({...i}),parameters:{docs:{description:{story:"\nValorizzando l'attributo `image` del componente con l’URL dell’immagine da utilizzare  la Section utilizzerà l’immagine indicata come sfondo, adattandone automaticamente le dimensioni per coprire l’intera Section.\n\nA seconda della luminosità dell’immagine si consiglia di valorizzare o meno l'attributo `inverse` per garantire il corretto contrasto fra testi e sfondo.\n        "}}}},g={name:"Sezione con card",args:{variant:"muted"},render:i=>h({...i,content:r`
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 id="section-heading-card" class="mb-4">Morbi fermentum amet</h2>
            </div>
          </div>
          <div class="row gy-3">
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}),parameters:{docs:{description:{story:`
Per aggiungere una serie di card all’interno di una Section si consiglia di utilizzare le griglie per garantire un corretto margine fra gli elementi .
        `}}}};var w,E,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: args => html\`\${renderSection(args)}\`
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var x,R,$;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: {
        hidden: true,
        sourceState: 'none'
      },
      // nasconde solo il canvas nella docs page
      description: {
        story: \`
Per la personalizzazione degli stili si può usare il selettore \\\`::part\\\` passando il valore \\\`section\\\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Quando si organizzano i contenuti usando le classi della griglia, non serve aggiungere spazio ai lati. Se proprio necessario, si può aggiungere spazio laterale usando la variabile \\\`--bs-section-padding-x\\\`.

Si può usare la variabile \\\`--bs-section-image-overlay\\\` per regolare l'opacità dell'overlay applicato all'immagine.
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...($=(R=u.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var q,I,L;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Varianti di sfondo',
  render: () => html\`
    <div class="d-flex flex-column gap-4">
      \${(['muted', 'emphasis', 'primary'] as const).map(variant => renderSection({
    variant,
    inverse: variant !== 'muted',
    content: html\`
            <div class="container">
              <h3 id="section-heading-\${variant}">Sezione \${variant}</h3>
              <p>
                Questa sezione usa la variante <code>\${variant}</code>
                \${variant !== 'muted' ? "con testo bianco attraverso l'attributo inverse" : ''}
              </p>
            </div>
          \`
  }))}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
Sono disponibili le varianti colore di sfondo per le sezioni, corrispondenti alle classi di Bootstrap italia:

- \\\`muted\\\`
- \\\`emphasis\\\`
- \\\`primary\\\`

Il componente Section ha, per default, uno sfondo trasparente.
        \`
      }
    }
  }
}`,...(L=(I=m.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var P,M,j;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Sezione con immagine decorativa',
  args: {
    image: 'https://picsum.photos/1280/720?image=81',
    inverse: true
  },
  render: params => renderSection({
    ...params
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Valorizzando l'attributo \\\`image\\\` del componente con l’URL dell’immagine da utilizzare  la Section utilizzerà l’immagine indicata come sfondo, adattandone automaticamente le dimensioni per coprire l’intera Section.

A seconda della luminosità dell’immagine si consiglia di valorizzare o meno l'attributo \\\`inverse\\\` per garantire il corretto contrasto fra testi e sfondo.
        \`
      }
    }
  }
}`,...(j=(M=p.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var A,N,V;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Sezione con card',
  args: {
    variant: 'muted'
  },
  render: params => renderSection({
    ...params,
    content: html\`
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 id="section-heading-card" class="mb-4">Morbi fermentum amet</h2>
            </div>
          </div>
          <div class="row gy-3">
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Per aggiungere una serie di card all’interno di una Section si consiglia di utilizzare le griglie per garantire un corretto margine fra gli elementi .
        \`
      }
    }
  }
}`,...(V=(N=g.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const se=["EsempioInterattivo","PersonalizzazioneDegliStili","VariantiColore","VarianteConImmagine","SectionConCard"];export{d as EsempioInterattivo,u as PersonalizzazioneDegliStili,g as SectionConCard,p as VarianteConImmagine,m as VariantiColore,se as __namedExportsOrder,oe as default};
