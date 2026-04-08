import{b as n}from"./iframe-B5mMrHNl.js";const s={title:"Componenti/Overlay",tags:["documentation","alpha","a11y-ok"]},a={...s,name:"Overlay default",parameters:{docs:{description:{story:"\nIl colore predefinito dell’overlay corrisponde al colore `primary`.\n"}}},render:()=>n` <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p><strong>Overlay ad altezza fissa</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <p><strong>Overlay a tutta altezza</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-panel-fullheight"><span>Label immagine</span></figcaption>
          </figure>
        </div>
        <div class="col-12">
          <p><strong>Esempio con differenti proporzioni</strong></p>
          <figure class="overlay-wrapper w-100">
            <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
          </figure>
        </div>
      </div>
    </div>`},i={...s,name:"Overlay nero",parameters:{docs:{description:{story:"\nPer ottnere un overlay di colore nero, aggiungi la classe `.overlay-black`.\n"}}},render:()=>n` <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p><strong>Overlay ad altezza fissa</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <p><strong>Overlay a tutta altezza</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-panel-fullheight overlay-black">
              <span>Label immagine</span>
            </figcaption>
          </figure>
        </div>
        <div class="col-12">
          <p><strong>Esempio con differenti proporzioni</strong></p>
          <figure class="overlay-wrapper w-100">
            <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
          </figure>
        </div>
      </div>
    </div>`},e={...s,name:"Overlay con icona",parameters:{docs:{description:{story:`
Per ottenere un overlay con icona centrata in verticale e orizzontale, aggiungi la classe \`.overlay-icon\`.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Assicurati di fornire un testo alternativo per i lettori di schermo che trasmetta lo stesso significato dell’icona.</p></div></div>
`}}},render:()=>n` <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p><strong>Overlay primary (default)</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" />
            <figcaption class="overlay-panel overlay-icon">
              <span class="visually-hidden">Immagine Preferita</span>
              <it-icon name="it-star-outline" color="inverse"></it-icon>
            </figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <p><strong>Overlay nero</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" />
            <figcaption class="overlay-panel overlay-black overlay-icon">
              <span class="visually-hidden">Immagine Preferita</span>
              <it-icon name="it-star-outline" color="inverse"></it-icon>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>`};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Overlay default',
  parameters: {
    docs: {
      description: {
        story: \`
Il colore predefinito dell’overlay corrisponde al colore \\\`primary\\\`.
\`
      }
    }
  },
  render: () => html\` <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p><strong>Overlay ad altezza fissa</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <p><strong>Overlay a tutta altezza</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-panel-fullheight"><span>Label immagine</span></figcaption>
          </figure>
        </div>
        <div class="col-12">
          <p><strong>Esempio con differenti proporzioni</strong></p>
          <figure class="overlay-wrapper w-100">
            <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
          </figure>
        </div>
      </div>
    </div>\`
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Overlay nero',
  parameters: {
    docs: {
      description: {
        story: \`
Per ottnere un overlay di colore nero, aggiungi la classe \\\`.overlay-black\\\`.
\`
      }
    }
  },
  render: () => html\` <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p><strong>Overlay ad altezza fissa</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <p><strong>Overlay a tutta altezza</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-panel-fullheight overlay-black">
              <span>Label immagine</span>
            </figcaption>
          </figure>
        </div>
        <div class="col-12">
          <p><strong>Esempio con differenti proporzioni</strong></p>
          <figure class="overlay-wrapper w-100">
            <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
          </figure>
        </div>
      </div>
    </div>\`
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Overlay con icona',
  parameters: {
    docs: {
      description: {
        story: \`
Per ottenere un overlay con icona centrata in verticale e orizzontale, aggiungi la classe \\\`.overlay-icon\\\`.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Assicurati di fornire un testo alternativo per i lettori di schermo che trasmetta lo stesso significato dell’icona.</p></div></div>
\`
      }
    }
  },
  render: () => html\` <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p><strong>Overlay primary (default)</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" />
            <figcaption class="overlay-panel overlay-icon">
              <span class="visually-hidden">Immagine Preferita</span>
              <it-icon name="it-star-outline" color="inverse"></it-icon>
            </figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <p><strong>Overlay nero</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" />
            <figcaption class="overlay-panel overlay-black overlay-icon">
              <span class="visually-hidden">Immagine Preferita</span>
              <it-icon name="it-star-outline" color="inverse"></it-icon>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>\`
}`,...e.parameters?.docs?.source}}};const r=["Esempio","Nero","ConIcona"],l=Object.freeze(Object.defineProperty({__proto__:null,ConIcona:e,Esempio:a,Nero:i,__namedExportsOrder:r,default:s},Symbol.toStringTag,{value:"Module"}));export{e as C,a as E,i as N,l as S};
