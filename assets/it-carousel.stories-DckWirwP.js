import{b as r,o as S,A as z}from"./iframe-C-T64Vf2.js";const b={$code:"it",$name:"Italiano",$dir:"ltr",carousel_prev:"Slide precedente",carousel_next:"Slide successiva",carousel_first:"Vai alla prima slide",carousel_last:"Vai all'ultima slide",carousel_slideX:"Vai alla slide %s",carousel_pageX:"Vai a pagina %s",carousel_play:"Attiva autoplay",carousel_pause:"Pausa autoplay",carousel_carousel:"carosello",carousel_select:"Seleziona una slide da mostrare",carousel_slide:"slide",carousel_slideLabel:"%s di %s",carousel_startautoplay:"Attiva autoplay",carousel_stopautoplay:"Spegni autoplay"},w=["single","columns","gallery-sm","gallery-lg"],C=(e,t,h)=>r` <it-card full-height="">
    <a slot="title" href="#">
      Titolo contenuto video ${h}
      <div class="it-card-title-icon-wrapper">
        <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
      </div>
    </a>
    ${e?r`<figure slot="image" class="figure img-full">
          <img
            src="https://picsum.photos/seed/city/800/600"
            alt="${h}. Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
          />
        </figure>`:z}
    <span slot="text">
      Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
      senza troncamento.
    </span>
    <div slot="footer" class="it-card-taxonomy">
      <ul class="it-card-chips" aria-label="Argomenti correlati: ">
        <li class="list-item">
          <it-chip label="Argomento 1" size="sm" href="#"></it-chip>
        </li>
        <li class="list-item">
          <it-chip label="Argomento 2" size="sm" href="#"></it-chip>
        </li>
      </ul>
    </div>
    <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
  </it-card>`,o=(e,t)=>t?.type==="video"?r`<it-carousel-slide>
      <it-video
        src="https://vjs.zencdn.net/v/oceans.webm"
        poster=""
        type="video/mp4"
        translations='{"it":{"Audio Player":"Lettore audio","Video Player":"Lettore video","Play":"Play","Pause":"Pausa","Replay":"Replay","Current Time":"Orario attuale","Duration":"Durata","Remaining Time":"Tempo rimanente","Stream Type":"Tipo di streaming","LIVE":"LIVE","Loaded":"Caricato","Progress":"Stato","Progress Bar":"Barra di avanzamento","progress bar timing: currentTime={1} duration={2}":"{1} di {2}","Fullscreen":"Schermo intero","Exit Fullscreen":"Chiudi Schermo intero","Mute":"Disattiva l’audio","Unmute":"Attiva l’audio","Playback Rate":"Velocità di riproduzione","Subtitles":"Sottotitoli","subtitles off":"Senza sottotitoli","Captions":"Sottotitoli non udenti","captions off":"Senza sottotitoli non udenti","Chapters":"Capitolo","Descriptions":"Descrizioni","descriptions off":"Descrizioni disattivate","Audio Track":"Traccia audio","Volume Level":"Livello del volume","You aborted the media playback":"La riproduzione del filmato è stata interrotta.","A network error caused the media download to fail part-way.":"Il download del filmato è stato interrotto a causa di un problema rete.","The media could not be loaded, either because the server or network failed or because the format is not supported.":"Il filmato non può essere caricato a causa di un errore nel server o nella rete o perché il formato non viene supportato.","The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":"La riproduzione del filmato è stata interrotta a causa di un file danneggiato o per l’utilizzo di impostazioni non supportate dal browser.","No compatible source was found for this media.":"Non ci sono fonti compatibili per questo filmato.","The media is encrypted and we do not have the keys to decrypt it.":"Il contenuto multimediale è criptato e non disponiamo delle chiavi per decifrarlo.","Play Video":"Riproduci il video","Close":"Chiudi","Close Modal Dialog":"Chiudi la finestra di dialogo","Modal Window":"Finestra di dialogo","This is a modal window":"Questa è una finestra di dialogo","This modal can be closed by pressing the Escape key or activating the close button.":"Questa finestra di dialogo può essere chiusa premendo sul tasto Esc o attivando il pulsante di chiusura.",", opens captions settings dialog":", aprire i parametri della trascrizione dei sottotitoli",", opens subtitles settings dialog":", aprire i parametri dei sottotitoli",", opens descriptions settings dialog":", aprire i parametri delle descrizioni",", selected":", selezionato","captions settings":"Parametri sottotitoli non udenti","subtitles settings":"Parametri sottotitoli","descriptions settings":"Parametri descrizioni","Text":"Testo","White":"Bianco","Black":"Nero","Red":"Rosso","Green":"Verde","Blue":"Blu","Yellow":"Giallo","Magenta":"Magenta","Cyan":"Ciano","Background":"Sfondo","Window":"Finestra","Transparent":"Trasparente","Semi-Transparent":"Semi-Trasparente","Opaque":"Opaco","Font Size":"Dimensione dei caratteri","Text Edge Style":"Stile dei bordi del testo","None":"Nessuno","Uniform":"Uniforme","Drop shadow":"Ombra","Font Family":"Carattere","Proportional Sans-Serif":"Sans-Serif proporzionale","Monospace Sans-Serif":"Sans-Serif monospaziato","Proportional Serif":"Serif proporzionale","Monospace Serif":"Serif monospaziato","Small Caps":"Maiuscoletto","Reset":"Reinizializza","restore all settings to the default values":"Ripristina i valori predefiniti per tutti i parametri","Done":"Fatto","Caption Settings Dialog":"Finestra di dialogo dei parametri della trascrizione dei sottotitoli","Beginning of dialog window. Escape will cancel and close the window.":"Inizio della finestra di dialogo. Il tasto Esc annullerà l’operazione e chiuderà la finestra.","End of dialog window.":"Fine della finestra di dialogo.","{1} is loading.":"{1} in fase di caricamento.","Exit Picture-in-Picture":"Esci dalla modalità Picture-in-Picture","Picture-in-Picture":"Picture-in-Picture","Color":"Colore","Opacity":"Opacità","Text Background":"Sfondo testo","Caption Area Background":"Sfondo area sottotitoli","Skip forward {1} seconds":"Avanti {1} secondi","Skip backward {1} seconds":"Indietro {1} secondi"}}'
        lang="it"
        track="[]"
      ></it-video>
    </it-carousel-slide>`:t?.type==="image"?r`<it-carousel-slide>
      <div class="card-wrapper">
        <div class="img-responsive-wrapper">
          <div class="img-responsive">
            <div class="img-wrapper">
              <img
                src="https://picsum.photos/800/600"
                title="titolo immagine ${e}"
                alt="descrizione immagine ${e}"
              />
            </div>
          </div>
        </div>
      </div>
    </it-carousel-slide>`:t?.type==="cardWithImage"?r`<it-carousel-slide>${C(!0,void 0,e)}</it-carousel-slide>`:r`<it-carousel-slide>${C(!1,void 0,e)}</it-carousel-slide>`,a=e=>r`
  <it-carousel
    variant=${e.variant}
    ?fullscreen=${e.fullscreen}
    ?arrows=${e.arrows}
    ?autoplay=${e.autoplay}
    ?separator=${e.separator}
    type=${S(e.type)}
    config=${S(e.config?JSON.stringify(e.config):void 0)}
    ><h2 slot="title">${e.title||"Titolo carousel"}</h2>
    ${o("1",e.cardOptions)} ${o("2",e.cardOptions)}
    ${o("3",e.cardOptions)} ${o("4",e.cardOptions)}
    ${o("5",e.cardOptions)} ${o("6",e.cardOptions)}
  </it-carousel>
`,V={title:"Componenti/Carousel",tags:["alpha","web-component","a11y-ok"],component:"it-carousel",args:{arrows:!1,autoplay:!1,fullscreen:!1,separator:!1,type:void 0,variant:"single",config:void 0,title:"Titolo carousel"},argTypes:{fullscreen:{control:"boolean",description:"Se true, il carousel occupa tutta la larghezza disponibile.",table:{defaultValue:{summary:"false"}}},arrows:{control:"boolean",description:"Se true, mostra le frecce di navigazione del carousel.",table:{defaultValue:{summary:"false"}}},separator:{control:"boolean",description:"Se true, mostra un separatore verticale tra le slide.",table:{defaultValue:{summary:"false"}}},variant:{control:"select",description:"Variante di layout del carousel.",options:w,type:"string",table:{defaultValue:{summary:"single"}}},type:{control:"select",description:"Tipo di scorrimento del carousel. Se non specificato, viene usato il default della variante.",options:["slide","loop","fade"],type:"string",table:{defaultValue:{summary:"-"}}},autoplay:{control:"boolean",description:`Se true, abilita l'autoplay del carousel con modalità "pause" (il carousel avanza automaticamente ma parte in pausa, l'utente deve premere play per avviarlo). Viene renderizzato automaticamente un pulsante di toggle play/pause. Per personalizzare l'intervallo o altre opzioni dell'autoplay, usa config.autoplay.`,table:{defaultValue:{summary:"false"}}},config:{control:!1,description:"Oggetto di configurazione avanzata da passare a Splide. Consulta la documentazione del componente Carousel e quella di Splide v4.x per conoscere le opzioni disponibili.",table:{defaultValue:{summary:"-"}}},cardOptions:{table:{disable:!0}},title:{table:{disable:!0}}},parameters:{docs:{source:{excludeDecorators:!0}},layout:"padded",a11y:{config:{rules:[{id:"aria-valid-attr-value",enabled:!1}]}}},decorators:[e=>r`<div style="padding:2rem">${e()}</div>`]},n={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},args:{cardOptions:{type:"simpleCard"}},render:e=>a(e)},i={name:"Variante singola",args:{title:"Variante singola",cardOptions:{type:"inline"}},parameters:{docs:{description:{story:"La variante `single` mostra una sola card alla volta."}}},render:e=>a(e)},s={name:"Variante 3 colonne",args:{variant:"columns",arrows:!1,title:"Variante 3 colonne",cardOptions:{type:"simpleCard"}},render:e=>a(e)},l={name:"Variante gallery small",args:{variant:"gallery-sm",arrows:!1,cardOptions:{type:"image"},title:"Variante gallery small"},parameters:{layout:"fullscreen"},decorators:[e=>{if(!document.head.querySelector("#gallery-sm-fix")){const t=document.createElement("style");t.id="gallery-sm-fix",t.textContent="#storybook-root{width:100%!important}",document.head.appendChild(t)}return r`<div style="max-width:1400px;margin:0 auto;">${e()}</div>`}],render:e=>a(e)},d={name:"Variante gallery large",args:{variant:"gallery-lg",arrows:!1,cardOptions:{type:"image"},title:"Variante gallery large"},parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:550}}},decorators:[e=>{if(!document.head.querySelector("#gallery-lg-fix")){const t=document.createElement("style");t.id="gallery-lg-fix",t.textContent="#storybook-root{width:100%!important}",document.head.appendChild(t)}return r`<div style="max-width:1400px;margin:0 auto;overflow:hidden;">${e()}</div>`}],render:e=>a(e)},c={name:"Con frecce di navigazione",args:{variant:"columns",arrows:!0,cardOptions:{type:"cardWithImage"}},render:e=>r`
    <div style="display: flex; flex-direction: column; gap: 4rem;">
      ${a({...e,title:"Carousel 3 colonne con frecce"})}
      ${a({...e,variant:"single",title:"Carousel singolo con frecce"})}
    </div>
  `},p={args:{variant:"single",arrows:!0,fullscreen:!0,title:"Carousel fullscreen",cardOptions:{type:"inline"}},render:e=>a(e)},u={name:"Con separatore tra le slide",args:{variant:"columns",separator:!0,title:"Carousel con separatore",cardOptions:{type:"inline"}},render:e=>a(e)},m={name:"Modalità di scorrimento custom del Carousel",args:{variant:"single",type:"loop",cardOptions:{type:"cardWithImage"},title:"Carousel con scorrimento in loop"},render:e=>r`
    <div style="display: flex; flex-direction: column; gap: 4rem;">
      ${a(e)} ${a({...e,type:"fade",title:"Carousel con scorrimento fade"})}
      ${a({...e,type:"slide",title:"Carousel con scorrimento slide"})}
    </div>
  `},g={args:{variant:"single",autoplay:!0,cardOptions:{type:"inline"},title:"Carousel con autoplay"},parameters:{docs:{description:{story:"Esempio che mostra il pulsante Play/Pausa e l'autoplay abilitato (modalità 'pause')."}}},render:e=>a(e)},y={name:"Configurazione avanzata di Splide",args:{variant:"columns",title:"Configurazione avanzata Splide",cardOptions:{type:"cardWithImage"},config:{type:"loop",autoplay:"pause",interval:3e3,pauseOnHover:!0,resetProgress:!1,perPage:2,arrows:!0,gap:16,padding:{left:8,right:8},breakpoints:{560:{perPage:1,gap:0,padding:{left:24,right:24},arrows:!1},768:{perPage:2,gap:0,padding:{left:0,right:0},arrows:!1},992:{perPage:2,gap:0,padding:{left:0,right:0},arrows:!1}}}},render:e=>a(e)},f={name:"VideoTest",tags:["!dev"],args:{variant:"single",arrows:!0,fullscreen:!0,cardOptions:{type:"video"}},render:e=>a(e)},v={name:"i18n",tags:["!dev"],render:()=>r`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = ${JSON.stringify(b,null,2)}
\`\`\`
`}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  },
  args: {
    cardOptions: {
      type: 'simpleCard'
    }
  },
  render: args => renderComponent(args)
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Variante singola',
  args: {
    title: 'Variante singola',
    cardOptions: {
      type: 'inline'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'La variante \`single\` mostra una sola card alla volta.'
      }
    }
  },
  render: args => renderComponent(args)
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Variante 3 colonne',
  args: {
    variant: 'columns',
    arrows: false,
    title: 'Variante 3 colonne',
    cardOptions: {
      type: 'simpleCard'
    }
  },
  render: args => renderComponent(args)
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Variante gallery small',
  args: {
    variant: 'gallery-sm',
    arrows: false,
    cardOptions: {
      type: 'image'
    },
    title: 'Variante gallery small'
  },
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [story => {
    if (!document.head.querySelector('#gallery-sm-fix')) {
      const s = document.createElement('style');
      s.id = 'gallery-sm-fix';
      s.textContent = '#storybook-root{width:100%!important}';
      document.head.appendChild(s);
    }
    return html\`<div style="max-width:1400px;margin:0 auto;">\${story()}</div>\`;
  }],
  render: args => renderComponent(args)
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Variante gallery large',
  args: {
    variant: 'gallery-lg',
    arrows: false,
    cardOptions: {
      type: 'image'
    },
    title: 'Variante gallery large'
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 550
      }
    }
  },
  decorators: [story => {
    if (!document.head.querySelector('#gallery-lg-fix')) {
      const s = document.createElement('style');
      s.id = 'gallery-lg-fix';
      s.textContent = '#storybook-root{width:100%!important}';
      document.head.appendChild(s);
    }
    return html\`<div style="max-width:1400px;margin:0 auto;overflow:hidden;">\${story()}</div>\`;
  }],
  render: args => renderComponent(args)
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Con frecce di navigazione',
  args: {
    variant: 'columns',
    arrows: true,
    cardOptions: {
      type: 'cardWithImage'
    }
  },
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 4rem;">
      \${renderComponent({
    ...args,
    title: 'Carousel 3 colonne con frecce'
  })}
      \${renderComponent({
    ...args,
    variant: 'single',
    title: 'Carousel singolo con frecce'
  })}
    </div>
  \`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'single',
    arrows: true,
    fullscreen: true,
    title: 'Carousel fullscreen',
    cardOptions: {
      type: 'inline'
    }
  },
  render: args => renderComponent(args)
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Con separatore tra le slide',
  args: {
    variant: 'columns',
    separator: true,
    title: 'Carousel con separatore',
    cardOptions: {
      type: 'inline'
    }
  },
  render: args => renderComponent(args)
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Modalità di scorrimento custom del Carousel',
  args: {
    variant: 'single',
    type: 'loop',
    cardOptions: {
      type: 'cardWithImage'
    },
    title: 'Carousel con scorrimento in loop'
  },
  render: args => html\`
    <div style="display: flex; flex-direction: column; gap: 4rem;">
      \${renderComponent(args)} \${renderComponent({
    ...args,
    type: 'fade',
    title: 'Carousel con scorrimento fade'
  })}
      \${renderComponent({
    ...args,
    type: 'slide',
    title: 'Carousel con scorrimento slide'
  })}
    </div>
  \`
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'single',
    autoplay: true,
    cardOptions: {
      type: 'inline'
    },
    title: 'Carousel con autoplay'
  },
  parameters: {
    docs: {
      description: {
        story: "Esempio che mostra il pulsante Play/Pausa e l'autoplay abilitato (modalità 'pause')."
      }
    }
  },
  render: args => renderComponent(args)
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Configurazione avanzata di Splide',
  args: {
    variant: 'columns',
    title: 'Configurazione avanzata Splide',
    cardOptions: {
      type: 'cardWithImage'
    },
    config: {
      type: 'loop',
      autoplay: 'pause',
      interval: 3000,
      pauseOnHover: true,
      resetProgress: false,
      perPage: 2,
      arrows: true,
      gap: 16,
      padding: {
        left: 8,
        right: 8
      },
      breakpoints: {
        560: {
          perPage: 1,
          gap: 0,
          padding: {
            left: 24,
            right: 24
          },
          arrows: false
        },
        768: {
          perPage: 2,
          gap: 0,
          padding: {
            left: 0,
            right: 0
          },
          arrows: false
        },
        992: {
          perPage: 2,
          gap: 0,
          padding: {
            left: 0,
            right: 0
          },
          arrows: false
        }
      }
    }
  },
  render: args => renderComponent(args)
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'VideoTest',
  tags: ['!dev'],
  args: {
    variant: 'single',
    arrows: true,
    fullscreen: true,
    cardOptions: {
      type: 'video'
    }
  },
  render: args => renderComponent(args)
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'i18n',
  tags: ['!dev'],
  render: () => html\`<div class="hide-preview"></div>\`,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        story: \`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\\\`\\\`\\\`js
const translation = \${JSON.stringify(i18nIT, null, 2)}
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const O=["EsempioInterattivo","VarianteSingola","Variante3Colonne","VarianteGallerySM","VarianteGalleryLG","ConFrecce1","Fullscreen","Separator","TipoScorrimento","Autoplay","ConfigurazioneAvanzata","VideoTest","I18n"],$=Object.freeze(Object.defineProperty({__proto__:null,Autoplay:g,ConFrecce1:c,ConfigurazioneAvanzata:y,EsempioInterattivo:n,Fullscreen:p,I18n:v,Separator:u,TipoScorrimento:m,Variante3Colonne:s,VarianteGalleryLG:d,VarianteGallerySM:l,VarianteSingola:i,VideoTest:f,__namedExportsOrder:O,default:V},Symbol.toStringTag,{value:"Module"}));export{g as A,c as C,n as E,p as F,v as I,$ as S,m as T,i as V,s as a,u as b,y as c};
