import{b as a,o as g}from"./iframe-CfubThG-.js";const h=[void 0,"primary","filter"],n={title:"Componenti/Hero",tags:["alpha","web-component","a11y-ok"],component:"it-hero",parameters:{pageLayout:"w-100"},args:{"it-aria-label":void 0,center:!1,"overlay-color":void 0,overlap:!1},argTypes:{"it-aria-label":{control:"text",description:"Testo usato come `aria-label` sul contenitore dell'Hero (es. \"In evidenza\"). Obbligatorio quando l'hero contiene solamente un'immagine."},center:{control:"boolean",description:"Allinea al centro il testo dello slot `text`.",table:{defaultValue:{summary:"false"}}},"overlay-color":{control:"select",options:h,description:"Imposta il colore di overlay",type:"string"},overlap:{control:"boolean",description:"Sovrappone l'elemento che segue al componente Hero.",table:{defaultValue:{summary:"false"}}}}},p=a` <img
  title="titolo immagine"
  alt="descrizione immagine"
  slot="background"
  src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
/>`,u=a`<div slot="text" class="it-hero-text-wrapper bg-dark">
  <span class="it-category">Titolo occhiello</span>
  <h2>Titolo della sezione</h2>
  <p class="d-none d-lg-block">
    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec
    enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
  </p>
  <div class="my-btn-container"><a class="btn btn-sm btn-outline-primary" href="#">Azione primaria </a></div>
</div>`,o=e=>a`
  <it-hero
    it-aria-label=${g(e["it-aria-label"]||void 0)}
    ?center="${e.center}"
    overlay-color="${g(e["overlay-color"]||void 0)}"
    ?overlap="${e.overlap}"
  >
    ${g(e.children||void 0)}
  </it-hero>
`,v=e=>o({...e,children:p}),r={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}},...n.parameters},args:{...n.args,"it-aria-label":"In evidenza"},render:e=>a`${v({...e})}`},t={name:"Con immagine",args:{...n.args,"it-aria-label":"In evidenza"},render:e=>a`${v({...e})}`},i={name:"Con contenuti testuali",render:e=>o({...e,children:u})},s={name:"Con contenuti testuali centrati",args:{...n.args,center:!0},render:e=>o({...e,children:u})},l={name:"Con testi ed immagine di sfondo",args:{...n.args},render:e=>o({...e,children:a`${p} ${u}`})},d={name:"Con overlay di colore primario",args:{...n.args,"overlay-color":"primary"},render:e=>o({...e,children:a`${p} ${u}`})},m={name:"Con overlay e filtro di colore primario",args:{...n.args,"overlay-color":"filter","it-aria-label":"In evidenza"},render:e=>o({...e,children:a`${p}`})},c={name:"Con immagine e margine negativo per contenuti sovrapposti",args:{...n.args,overlap:!0},render:e=>a`
    ${o({...e,children:a`${p} ${u}`})}
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="col-12 mb-3 mb-md-4">
            <it-card shadow="md" it-class="px-5 py-4">
              <!--card first child is the title (link)-->
              <h3 slot="title" class="h4">Titolo del contenuto</h3>
              <!--card body content-->
              <span slot="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <div slot="footer">
                <a href="#" class="it-card-link"
                  >Scopri di più <span class="visually-hidden">su Titolo del contenuto</span></a
                >
              </div>
            </it-card>
          </div>
        </div>
      </div>
    </div>
  `};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    },
    ...meta.parameters
  },
  args: {
    ...meta.args,
    'it-aria-label': 'In evidenza'
  },
  render: args => html\`\${renderComponentWithImage({
    ...args
  })}\`
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Con immagine',
  args: {
    ...meta.args,
    'it-aria-label': 'In evidenza'
  },
  render: args => html\`\${renderComponentWithImage({
    ...args
  })}\`
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Con contenuti testuali',
  render: args => renderComponent({
    ...args,
    children: exampleSlotText
  })
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Con contenuti testuali centrati',
  args: {
    ...meta.args,
    center: true
  },
  render: args => renderComponent({
    ...args,
    children: exampleSlotText
  })
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Con testi ed immagine di sfondo',
  args: {
    ...meta.args
  },
  render: args => renderComponent({
    ...args,
    children: html\`\${exampleSlotImage} \${exampleSlotText}\`
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Con overlay di colore primario',
  args: {
    ...meta.args,
    'overlay-color': 'primary'
  },
  render: args => renderComponent({
    ...args,
    children: html\`\${exampleSlotImage} \${exampleSlotText}\`
  })
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Con overlay e filtro di colore primario',
  args: {
    ...meta.args,
    'overlay-color': 'filter',
    'it-aria-label': 'In evidenza'
  },
  render: args => renderComponent({
    ...args,
    children: html\`\${exampleSlotImage}\`
  })
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Con immagine e margine negativo per contenuti sovrapposti',
  args: {
    ...meta.args,
    overlap: true
  },
  render: args => html\`
    \${renderComponent({
    ...args,
    children: html\`\${exampleSlotImage} \${exampleSlotText}\`
  })}
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="col-12 mb-3 mb-md-4">
            <it-card shadow="md" it-class="px-5 py-4">
              <!--card first child is the title (link)-->
              <h3 slot="title" class="h4">Titolo del contenuto</h3>
              <!--card body content-->
              <span slot="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <div slot="footer">
                <a href="#" class="it-card-link"
                  >Scopri di più <span class="visually-hidden">su Titolo del contenuto</span></a
                >
              </div>
            </it-card>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};const C=["EsempioInterattivo","ConImmagine","ConContenutiTestuali","ConContenutiTestualiCentrati","ConTestoEImmagine","ConTestoEImmaginePrimary","ConTestoEImmaginePrimaryFilter","OverlapContent"],y=Object.freeze(Object.defineProperty({__proto__:null,ConContenutiTestuali:i,ConContenutiTestualiCentrati:s,ConImmagine:t,ConTestoEImmagine:l,ConTestoEImmaginePrimary:d,ConTestoEImmaginePrimaryFilter:m,EsempioInterattivo:r,OverlapContent:c,__namedExportsOrder:C,default:n},Symbol.toStringTag,{value:"Module"}));export{t as C,r as E,y as H,c as O,i as a,s as b,l as c,d,m as e};
