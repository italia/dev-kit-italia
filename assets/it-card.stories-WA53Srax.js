import{b as a,o as i}from"./iframe-BBsXzWsk.js";const P=["default","inline","inline-reverse","inline-mini","inline-mini-reverse","profile","location","banner","inline-banner","inline-banner-reverse","inline-banner-mini","inline-banner-mini-reverse"],E=["primary","secondary","success","danger","warning"],N=["1x1","4x3","16x9","21x9"],V=["none","sm","md","lg"],R=["h1","h2","h3","h4","h5","h6"],O=["sm","md"],I={title:"Componenti/Card",tags:["a11y-ok","web-component","new"],component:"it-card",parameters:{layout:"padded"},decorators:[e=>a` <div class="container p-0">${e()}</div> `],args:{fullHeight:!1},argTypes:{fullHeight:{name:"full-height",control:"boolean",description:"La card riempie l'altezza del contenitore padre",table:{defaultValue:{summary:"false"}}},variant:{control:"select",type:"string",options:P,description:"Variante di layout della card",table:{defaultValue:{summary:"default"}}},ratio:{control:"select",type:"string",options:[void 0,...N],description:"Rapporto d'aspetto dell'immagine della card."},borderTop:{name:"border-top",control:"select",type:"string",options:E,description:"Aggiunge un bordo superiore colorato alla card per evidenziarla"},headingLevel:{name:"heading-level",control:"select",type:"string",options:R,description:'Livello di heading da usare per il titolo della card. Se non specificato, viene usato h3. Vedi la sezione "Accessibilità" della documentazione per maggiori dettagli.'},headingSize:{name:"heading-size",control:"select",type:"string",options:[void 0,...O],description:'Dimensione visiva del titolo della card. Se "sm" applica la classe h4, se "md" applica la classe h3. Se non specificato, la dimensione è determinata dalla variante.'},shadow:{control:"select",type:"string",options:V,description:"Modifica l'ombra della card."},border:{control:"select",type:"string",options:[void 0,"0"],description:"Imposta il valore 0 per rimuovere il bordo della card."},"actions-aria-label":{control:"text",type:"string",description:"Etichetta ARIA per il gruppo di azioni della card.",table:{defaultValue:{summary:"Link correlati:"}}},"it-class":{type:"string",description:"Aggiunge classi custom alla card generata. Utile per impostare padding custom all'interno della Card."}}};function t(e){return Object.keys(I.argTypes).reduce((D,L)=>(D[L]={table:{disable:!0}},D),{})}const o={name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},decorators:[e=>a`
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">${e()}</div>
      </div>
    `],render:e=>a`
    <it-card
      variant=${i(e.variant)}
      ?full-height=${e.fullHeight}
      border-top=${i(e.borderTop)}
      heading-level=${i(e.headingLevel)}
      heading-size=${i(e.headingSize)}
      ratio=${i(e.ratio)}
      shadow=${i(e.shadow)}
      border=${i(e.border)}
      it-class=${i(e["it-class"])}
    >
      <a slot="title" href="#">Titolo del contenuto</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://picsum.photos/seed/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>
  `},s={name:"Card editoriali standard",argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
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
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  `},l={name:"Card editoriali featured",argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">
            Titolo del contenuto featured
            <span class="visually-hidden"> (link esterno su piattaforma XYZ)</span>
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-file"></it-icon>
            </div>
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="subtitle">Sottotitolo del contenuto</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">
            Titolo del contenuto featured
            <span class="visually-hidden"> (link esterno su Designers Italia)</span>
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-designers-italia"></it-icon>
            </div>
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="subtitle">Sottotitolo del contenuto</span>
          <span slot="signature">di Maria Verde</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
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
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo del contenuto featured
            <span class="visually-hidden"> (link esterno)</span>
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-external-link"></it-icon>
            </div>
          </a>
          <span slot="signature">di Maria Verde</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  `},r={name:"Card inline",argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 mb-3 mb-md-4 ">
        <it-card variant="inline">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 mb-3 mb-md-4 ">
        <it-card variant="inline-reverse">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
    </div>
  `},n={name:"Card inline mini",argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 mb-3 mb-md-4 ">
        <it-card variant="inline-mini">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 col-md-6 mb-3 mb-md-4 ">
        <it-card variant="inline-mini-reverse">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
    </div>
  `},c={name:"Card per eventi",parameters:{pageLayout:"w-100"},argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo evento</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="subtitle">Dal 4 al 6 agosto</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <a slot="actions" href="#" class="it-card-link">
            <span class="visually-hidden">Link correlati: </span>
            Iscriviti all'evento
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo evento</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="subtitle">Dal 4 al 6 novembre</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <it-button slot="actions" variant="secondary" outline>
            <span class="visually-hidden">Link correlati: </span>
            Compila il form di iscrizione
          </it-button>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Titolo evento</a>
          <span slot="subtitle">
            <span class="visually-hidden">Data evento:</span> <time datetime="08-19">19 agosto</time>,
            <span class="visually-hidden">Orario:</span> <time>11:30</time>–<time>13:00</time>
          </span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  `},d={name:"Card per eventi inline",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
        <it-card variant="inline">
          <a slot="title" href="#">Titolo evento</a>
          <span slot="subtitle">
            <span class="visually-hidden">Data evento:</span> <time datetime="08-19">19 agosto</time>,
            <span class="visually-hidden">Orario:</span> <time>11:30</time>–<time>13:00</time>
          </span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <a slot="actions" href="#" class="it-card-link">
            <span class="visually-hidden">Link correlati: </span>
            Iscriviti all'evento
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
        <it-card variant="inline-reverse">
          <a slot="title" href="#">Titolo evento</a>
          <span slot="subtitle"> Dal 4 al 6 agosto </span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <it-button slot="actions" variant="secondary" outline>
            <span class="visually-hidden">Link correlati: </span>
            Iscriviti
          </it-button>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
    </div>
  `},m={name:"Card per media",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">
            Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
            </div>
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">
            Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
            </div>
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
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
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo contenuto audio
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-horn" label="Tipo: Audio"></it-icon>
            </div>
          </a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo contenuto audio
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-horn" label="Tipo: Audio"></it-icon>
            </div>
          </a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
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
        </it-card>
      </div>
    </div>
  `},p={name:"Card per media video inline",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
        <it-card variant="inline">
          <a slot="title" href="#">
            Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
            </div>
          </a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
        <it-card variant="inline-reverse">
          <a slot="title" href="#">
            Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
            </div>
          </a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
    </div>
  `},u={name:"Card per servizi e bandi",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo servizio</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del servizio</a>
          <span slot="subtitle">Sottotitolo del servizio</span>
          <div slot="footer" class="it-card-taxonomy">
            <span class="visually-hidden">Stato del servizio: </span>
            <it-chip label="Attivo" variant="success" size="sm"></it-chip>
          </div>
          <a slot="actions" href="#" class="it-card-link">
            <span class="visually-hidden">Link correlati: </span>
            Requisiti per l'accesso
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del bando</a>
          <span slot="subtitle">Sottotitolo del bando</span>
          <div slot="footer" class="it-card-taxonomy">
            <span class="visually-hidden">Stato del bando: </span>
            <it-chip label="Aperto" variant="success" size="sm"></it-chip>
          </div>
          <span slot="footer" class="it-card-date text-warning">
            <strong>Scadenza: </strong>
            <time class="it-card-date text-warning" datetime="2026-04-22"> 22 aprile 2026 </time>
          </span>
          <it-button slot="actions" variant="secondary" outline>
            <span class="visually-hidden">Link correlati: </span>
            Compila il form di candidatura
          </it-button>
        </it-card>
      </div>
    </div>
  `},g={name:"Card per documenti e allegati",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo del documento
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-file"></it-icon>
            </div>
          </a>
          <span slot="text"> Eventuale breve estratto descrittivo del documento. </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo del documento
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-file"></it-icon>
            </div>
          </a>
          <span slot="text"> Eventuale breve estratto descrittivo del documento. Formato PDF (200KB) </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <span slot="actions" class="me-2">Scarica come:</span>
          <a slot="actions" href="#" class="it-card-link">
            ODT (300KB)
            <span class="visually-hidden">: Titolo del documento</span>
          </a>
          <a slot="actions" href="#" class="it-card-link">
            ODS (400KB)
            <span class="visually-hidden">: Titolo del documento</span>
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo del file allegato
            <span class="visually-hidden">(Formato ODT, 200KB)</span>
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-file-odt"></it-icon>
            </div>
          </a>
          <span slot="text" aria-hidden="true">Formato ODT (200KB)</span>
        </it-card>
      </div>
    </div>
  `},v={name:"Card per profili personali",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="profile">
          <a slot="title" href="#">Nome Personale</a>
          <span slot="subtitle">Ruolo nell'organizzazione</span>
          <it-avatar slot="image" type="text" size="xl" text="Nome Personale" avatar-title="Nome Personale"></it-avatar>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="profile" border-top="secondary">
          <a slot="title" href="#">Nome Personale</a>
          <span slot="subtitle">Ruolo nell'organizzazione</span>
          <it-avatar
            slot="image"
            size="xl"
            text="Nome Personale"
            src="https://randomuser.me/api/portraits/women/14.jpg"
            alt="Woman image"
          ></it-avatar>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="profile">
          <a slot="title" href="#">Nome Personale</a>
          <span slot="subtitle">Ruolo nell'organizzazione</span>
          <it-avatar slot="image" type="text" size="xl" text="Nome Personale" avatar-title="Nome Personale"></it-avatar>
          <dl slot="body" class="it-card-description-list">
            <div>
              <dt>Area:</dt>
              <dd><a class="it-card-link" href="#">Nome dell'area di appartenenza</a></dd>
            </div>
            <div>
              <dt>Email:</dt>
              <dd>me@mail.com</dd>
            </div>
            <div>
              <dt>Tel:</dt>
              <dd>340.4050600</dd>
            </div>
            <div>
              <dt>Indirizzo:</dt>
              <dd>Via della città, 5 - 00100 Città</dd>
            </div>
          </dl>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="profile" border-top="secondary">
          <a slot="title" href="#">Nome Personale</a>
          <span slot="subtitle">Ruolo nell'organizzazione</span>
          <it-avatar slot="image" type="text" size="xl" text="Nome Personale" avatar-title="Nome Personale"></it-avatar>
          <dl slot="body" class="it-card-description-list">
            <div>
              <dt>Area:</dt>
              <dd><a class="it-card-link" href="#">Nome dell'area di appartenenza</a></dd>
            </div>
            <div>
              <dt>Email:</dt>
              <dd>me@mail.com</dd>
            </div>
            <div>
              <dt>Tel:</dt>
              <dd>340.4050600</dd>
            </div>
            <div>
              <dt>Indirizzo:</dt>
              <dd>Via della città, 5 - 00100 Città</dd>
            </div>
          </dl>
        </it-card>
      </div>
    </div>
  `},h={name:"Card per luoghi",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="location">
          <a slot="title" href="#">Toponimo o luogo</a>
          <span slot="subtitle">Tipologia di luogo</span>
          <span slot="address">Indirizzo del luogo</span>
          <div slot="image" class="it-card-profile-image-icon-wrapper">
            <it-icon color="primary" name="it-pa" size="lg"></it-icon>
          </div>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="location" border-top="secondary">
          <a slot="title" href="#">Toponimo o luogo</a>
          <span slot="subtitle">Tipologia di luogo</span>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/monument/320/320"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="location">
          <a slot="title" href="#">Toponimo o luogo</a>
          <span slot="subtitle">Tipologia di luogo</span>
          <span slot="address">Indirizzo del luogo</span>
          <div slot="image" class="it-card-profile-image-icon-wrapper">
            <it-icon color="primary" name="it-pa" size="lg"></it-icon>
          </div>
          <dl slot="body" class="it-card-description-list border-bottom-0 mb-0">
            <div>
              <dt>Email:</dt>
              <dd>me@mail.com</dd>
            </div>
            <div>
              <dt>Tel:</dt>
              <dd>340.4050600</dd>
            </div>
            <div>
              <dt>Indirizzo:</dt>
              <dd>Via della città, 5 - 00100 Città</dd>
            </div>
          </dl>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="location" border-top="secondary">
          <a slot="title" href="#">Toponimo o luogo</a>
          <span slot="subtitle">Tipologia di luogo</span>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/monument/320/320"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <dl slot="body" class="it-card-description-list border-bottom-0 mb-0">
            <div>
              <dt>Email:</dt>
              <dd>me@mail.com</dd>
            </div>
            <div>
              <dt>Tel:</dt>
              <dd>340.4050600</dd>
            </div>
            <div>
              <dt>Indirizzo:</dt>
              <dd>Via della città, 5 - 00100 Città</dd>
            </div>
          </dl>
          <div slot="footer" style="flex-grow:1">
            <it-icon color="secondary" name="it-map-marker" size="sm"></it-icon>
            <strong>Distanza:</strong> 900 metri
          </div>
          <a slot="footer" href="#" target="_blank" class="it-card-link">
            Apri in mappa
            <span class="visually-hidden"> Toponimo o Luogo (si apre in una nuova finestra)</span>
            <it-icon class="ms-2" color="secondary" name="it-external-link" size="sm"></it-icon>
          </a>
        </it-card>
      </div>
    </div>
  `},f={name:"Card con liste di contenuti affini",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height ratio="21x9">
          <a slot="title" href="#">Argomento Y</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Descrizione breve dell'argomento in poche righe non troncate.</span>
          <ul slot="body" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
            <li class="list-group-item"><a href="#">Titolo notizia affine</a></li>
            <li class="list-group-item"><a href="#">Titolo media affine</a></li>
            <li class="list-group-item"><a href="#">Altro titolo scheda affine</a></li>
            <li class="list-group-item"><a href="#">Pagina profilo affine</a></li>
          </ul>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height ratio="21x9">
          <a slot="title" href="#">Titolo evento</a>
          <figure slot="image" class="figure img-full">
            <img src="https://picsum.photos/seed/monument/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
          <span slot="subtitle">Dal 17 al 22 novembre</span>
          <span slot="text">Descrizione breve dell'evento in poche righe non troncate.</span>
          <ul slot="body" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
            <li class="list-group-item"><a href="#">Gli artisti</a></li>
            <li class="list-group-item"><a href="#">Il luogo</a></li>
            <li class="list-group-item"><a href="#">Il programma dettagliato</a></li>
          </ul>
          <div slot="footer" style="flex-grow:1">
            <a class="it-card-link" href="#">Iscriviti per rimanere aggiornato</a>
          </div>
          <a slot="footer" href="#" target="_blank" class="it-card-link">
            Apri la mappa
            <span class="visually-hidden"> di Titolo evento (si apre in una nuova finestra)</span>
            <it-icon class="ms-2" color="secondary" name="it-external-link" size="sm"></it-icon>
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height">
          <a slot="title" href="#">Argomento X</a>
          <span slot="text">Descrizione breve dell'argomento in poche righe non troncate.</span>
          <ul slot="body" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
            <li class="list-group-item"><a href="#" class="it-card-link">Titolo notizia affine</a></li>
            <li class="list-group-item"><a href="#" class="it-card-link">Titolo media affine</a></li>
            <li class="list-group-item"><a href="#" class="it-card-link">Altro titolo scheda affine</a></li>
            <li class="list-group-item"><a href="#" class="it-card-link">Pagina profilo affine</a></li>
          </ul>
        </it-card>
      </div>
    </div>
  `},b={name:"Card banner",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="banner">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
        </it-card>
      </div>
    </div>
  `},y={name:"Card banner con azione",argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="banner">
          <span slot="title">Titolo del contenuto</span>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
          <a slot="footer" href="#">
            Scopri maggiori informazioni
            <span class="visually-hidden">su Titolo del contenuto</span>
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="banner">
          <span slot="title">Titolo del contenuto</span>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
          <it-button slot="footer" variant="primary" outline>
            Apri il form di iscrizione
            <span class="visually-hidden">per Titolo del contenuto</span>
          </it-button>
        </it-card>
      </div>
    </div>
  `},z={name:"Card banner inline",argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="inline-banner">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="inline-banner-reverse">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="inline-banner-mini">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Versione inline anche su mobile</span>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="inline-banner-mini-reverse">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Versione inline anche su mobile</span>
        </it-card>
      </div>
    </div>
  `},x={name:"Bordi e ombre",argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card shadow="md">
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card shadow="lg">
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">&nbsp;</div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card shadow="md" border="0">
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card shadow="lg" border="0">
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
    </div>
  `},C={argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card ratio="21x9">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Card con immagine con proporzioni 21:9.</span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card ratio="16x9">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Card con immagine con proporzioni 16:9.</span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card ratio="4x3">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Card con immagine con proporzioni 4:3.</span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card ratio="1x1">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Card con immagine con proporzioni 1:1.</span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  `},T={name:"Altezza delle card",argTypes:{...t()},render:()=>a`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  `},w={name:"Pulsanti a tutta larghezza su mobile",decorators:[e=>a` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">${e()}</div> `],argTypes:{...t()},render:()=>a`
    <it-card>
      <a slot="title" href="#">Titolo dell'evento</a>
      <span slot="subtitle">Dal 4 al 6 agosto</span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <div slot="actions" class="d-grid gap-2 d-md-block">
        <a href="#" class="btn btn-outline-secondary">
          Prenota
          <span class="visually-hidden">per Titolo dell'evento</span>
        </a>
      </div>
    </it-card>
  `},Q={name:"Liste per gruppi numerosi di card",argTypes:{...t()},render:()=>a`
    <ul class="it-card-list row" aria-label="Risultati della ricerca: ">
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Primo risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Secondo risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Terzo risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Quarto risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Quinto risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Sesto risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
    </ul>
  `},k={name:"Uso di classi dedicate (per piccoli gruppi)",argTypes:{...t()},render:()=>a`
    <div class="it-card-group">
      <it-card>
        <a slot="title" href="#">Titolo della prima card</a>
        <span slot="text"> Questo è un testo breve che riassume il contenuto della pagina di destinazione. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Titolo della seconda card</a>
        <span slot="text"> Questo è un testo breve che riassume il contenuto della pagina di destinazione. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Titolo della terza card</a>
        <span slot="text"> Questo è un testo breve che riassume il contenuto della pagina di destinazione. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Titolo della quarta card</a>
        <span slot="text"> Questo è un testo breve che riassume il contenuto della pagina di destinazione. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
    </div>
  `},q={name:"Numero di colonne specifiche",argTypes:{...t()},render:()=>a`
    <div class="it-card-group it-card-group-2-cols">
      <it-card>
        <a slot="title" href="#">Card in due colonne</a>
        <span slot="text"> Questo gruppo mostra sempre due colonne su viewport medie e grandi. </span>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card in due colonne</a>
        <span slot="text"> Questo gruppo mostra sempre due colonne su viewport medie e grandi. </span>
      </it-card>
    </div>
  `},S={name:"Centrate orizzontalmente",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="it-card-group it-card-group-center">
      <it-card>
        <a slot="title" href="#">Card centrata</a>
        <span slot="text"> Questo gruppo ha le card centrate nella pagina. </span>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card centrata</a>
        <span slot="text"> Questo gruppo ha le card centrate nella pagina. </span>
      </it-card>
    </div>
  `},A={name:"Uso rispetto al contenitore (sperimentale)",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="it-card-group it-card-group-container-aware">
      <it-card>
        <a slot="title" href="#">Card con Container Queries</a>
        <span slot="text"> Questa card si adatta alla dimensione del suo contenitore, non della viewport. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card con Container Queries</a>
        <span slot="text"> Questa card si adatta alla dimensione del suo contenitore, non della viewport. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card con Container Queries</a>
        <span slot="text"> Questa card si adatta alla dimensione del suo contenitore, non della viewport. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card con Container Queries</a>
        <span slot="text"> Questa card si adatta alla dimensione del suo contenitore, non della viewport. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
    </div>
  `},B={name:"Confronto in colonne diverse",argTypes:{...t()},parameters:{pageLayout:"w-100"},render:()=>a`
    <div class="row">
      <div class="col-12 col-lg-8 mb-4">
        <div class="p-3 bg-light">
          <div class="it-card-group it-card-group-container-aware">
            <it-card>
              <a slot="title" href="#">Card in colonna larga</a>
              <span slot="text"> In questa colonna larga, le card si distribuiscono su più colonne. </span>
            </it-card>
            <it-card>
              <a slot="title" href="#">Card in colonna larga</a>
              <span slot="text"> In questa colonna larga, le card si distribuiscono su più colonne. </span>
            </it-card>
            <it-card>
              <a slot="title" href="#">Card in colonna larga</a>
              <span slot="text"> In questa colonna larga, le card si distribuiscono su più colonne. </span>
            </it-card>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 mb-4">
        <div class="p-3 bg-light">
          <div class="it-card-group it-card-group-container-aware">
            <it-card>
              <a slot="title" href="#">Card in colonna stretta</a>
              <span slot="text"> In questa colonna stretta, le card si dispongono su una singola colonna. </span>
            </it-card>
            <it-card>
              <a slot="title" href="#">Card in colonna stretta</a>
              <span slot="text"> In questa colonna stretta, le card si dispongono su una singola colonna. </span>
            </it-card>
            <it-card>
              <a slot="title" href="#">Card in colonna stretta</a>
              <span slot="text"> In questa colonna stretta, le card si dispongono su una singola colonna. </span>
            </it-card>
          </div>
        </div>
      </div>
    </div>
  `};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      <div class="row">
        <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">\${story()}</div>
      </div>
    \`],
  render: args => html\`
    <it-card
      variant=\${ifDefined(args.variant)}
      ?full-height=\${args.fullHeight}
      border-top=\${ifDefined(args.borderTop)}
      heading-level=\${ifDefined(args.headingLevel)}
      heading-size=\${ifDefined(args.headingSize)}
      ratio=\${ifDefined(args.ratio)}
      shadow=\${ifDefined(args.shadow)}
      border=\${ifDefined(args.border)}
      it-class=\${ifDefined(args['it-class'])}
    >
      <a slot="title" href="#">Titolo del contenuto</a>
      <figure slot="image" class="figure img-full">
        <img
          src="https://picsum.photos/seed/city/800/600"
          alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
        />
      </figure>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
    </it-card>
  \`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Card editoriali standard',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
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
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  \`
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Card editoriali featured',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">
            Titolo del contenuto featured
            <span class="visually-hidden"> (link esterno su piattaforma XYZ)</span>
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-file"></it-icon>
            </div>
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="subtitle">Sottotitolo del contenuto</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">
            Titolo del contenuto featured
            <span class="visually-hidden"> (link esterno su Designers Italia)</span>
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-designers-italia"></it-icon>
            </div>
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="subtitle">Sottotitolo del contenuto</span>
          <span slot="signature">di Maria Verde</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
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
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo del contenuto featured
            <span class="visually-hidden"> (link esterno)</span>
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-external-link"></it-icon>
            </div>
          </a>
          <span slot="signature">di Maria Verde</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  \`
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Card inline',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 mb-3 mb-md-4 ">
        <it-card variant="inline">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 mb-3 mb-md-4 ">
        <it-card variant="inline-reverse">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Card inline mini',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 mb-3 mb-md-4 ">
        <it-card variant="inline-mini">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 col-md-6 mb-3 mb-md-4 ">
        <it-card variant="inline-mini-reverse">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
    </div>
  \`
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Card per eventi',
  parameters: {
    pageLayout: 'w-100'
  },
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo evento</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="subtitle">Dal 4 al 6 agosto</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <a slot="actions" href="#" class="it-card-link">
            <span class="visually-hidden">Link correlati: </span>
            Iscriviti all'evento
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo evento</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="subtitle">Dal 4 al 6 novembre</span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <it-button slot="actions" variant="secondary" outline>
            <span class="visually-hidden">Link correlati: </span>
            Compila il form di iscrizione
          </it-button>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Titolo evento</a>
          <span slot="subtitle">
            <span class="visually-hidden">Data evento:</span> <time datetime="08-19">19 agosto</time>,
            <span class="visually-hidden">Orario:</span> <time>11:30</time>–<time>13:00</time>
          </span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Card per eventi inline',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
        <it-card variant="inline">
          <a slot="title" href="#">Titolo evento</a>
          <span slot="subtitle">
            <span class="visually-hidden">Data evento:</span> <time datetime="08-19">19 agosto</time>,
            <span class="visually-hidden">Orario:</span> <time>11:30</time>–<time>13:00</time>
          </span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <a slot="actions" href="#" class="it-card-link">
            <span class="visually-hidden">Link correlati: </span>
            Iscriviti all'evento
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
        <it-card variant="inline-reverse">
          <a slot="title" href="#">Titolo evento</a>
          <span slot="subtitle"> Dal 4 al 6 agosto </span>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <it-button slot="actions" variant="secondary" outline>
            <span class="visually-hidden">Link correlati: </span>
            Iscriviti
          </it-button>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Card per media',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">
            Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
            </div>
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">
            Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
            </div>
          </a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
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
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo contenuto audio
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-horn" label="Tipo: Audio"></it-icon>
            </div>
          </a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo contenuto audio
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-horn" label="Tipo: Audio"></it-icon>
            </div>
          </a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
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
        </it-card>
      </div>
    </div>
  \`
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Card per media video inline',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
        <it-card variant="inline">
          <a slot="title" href="#">
            Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
            </div>
          </a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-10 mb-3 mb-md-4">
        <it-card variant="inline-reverse">
          <a slot="title" href="#">
            Titolo contenuto video
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-video" label="Tipo: Video"></it-icon>
            </div>
          </a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
    </div>
  \`
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Card per servizi e bandi',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo servizio</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del servizio</a>
          <span slot="subtitle">Sottotitolo del servizio</span>
          <div slot="footer" class="it-card-taxonomy">
            <span class="visually-hidden">Stato del servizio: </span>
            <it-chip label="Attivo" variant="success" size="sm"></it-chip>
          </div>
          <a slot="actions" href="#" class="it-card-link">
            <span class="visually-hidden">Link correlati: </span>
            Requisiti per l'accesso
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del bando</a>
          <span slot="subtitle">Sottotitolo del bando</span>
          <div slot="footer" class="it-card-taxonomy">
            <span class="visually-hidden">Stato del bando: </span>
            <it-chip label="Aperto" variant="success" size="sm"></it-chip>
          </div>
          <span slot="footer" class="it-card-date text-warning">
            <strong>Scadenza: </strong>
            <time class="it-card-date text-warning" datetime="2026-04-22"> 22 aprile 2026 </time>
          </span>
          <it-button slot="actions" variant="secondary" outline>
            <span class="visually-hidden">Link correlati: </span>
            Compila il form di candidatura
          </it-button>
        </it-card>
      </div>
    </div>
  \`
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Card per documenti e allegati',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo del documento
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-file"></it-icon>
            </div>
          </a>
          <span slot="text"> Eventuale breve estratto descrittivo del documento. </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo del documento
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-file"></it-icon>
            </div>
          </a>
          <span slot="text"> Eventuale breve estratto descrittivo del documento. Formato PDF (200KB) </span>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <span slot="actions" class="me-2">Scarica come:</span>
          <a slot="actions" href="#" class="it-card-link">
            ODT (300KB)
            <span class="visually-hidden">: Titolo del documento</span>
          </a>
          <a slot="actions" href="#" class="it-card-link">
            ODS (400KB)
            <span class="visually-hidden">: Titolo del documento</span>
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">
            Titolo del file allegato
            <span class="visually-hidden">(Formato ODT, 200KB)</span>
            <div class="it-card-title-icon-wrapper">
              <it-icon color="primary" name="it-file-odt"></it-icon>
            </div>
          </a>
          <span slot="text" aria-hidden="true">Formato ODT (200KB)</span>
        </it-card>
      </div>
    </div>
  \`
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Card per profili personali',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="profile">
          <a slot="title" href="#">Nome Personale</a>
          <span slot="subtitle">Ruolo nell'organizzazione</span>
          <it-avatar slot="image" type="text" size="xl" text="Nome Personale" avatar-title="Nome Personale"></it-avatar>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="profile" border-top="secondary">
          <a slot="title" href="#">Nome Personale</a>
          <span slot="subtitle">Ruolo nell'organizzazione</span>
          <it-avatar
            slot="image"
            size="xl"
            text="Nome Personale"
            src="https://randomuser.me/api/portraits/women/14.jpg"
            alt="Woman image"
          ></it-avatar>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="profile">
          <a slot="title" href="#">Nome Personale</a>
          <span slot="subtitle">Ruolo nell'organizzazione</span>
          <it-avatar slot="image" type="text" size="xl" text="Nome Personale" avatar-title="Nome Personale"></it-avatar>
          <dl slot="body" class="it-card-description-list">
            <div>
              <dt>Area:</dt>
              <dd><a class="it-card-link" href="#">Nome dell'area di appartenenza</a></dd>
            </div>
            <div>
              <dt>Email:</dt>
              <dd>me@mail.com</dd>
            </div>
            <div>
              <dt>Tel:</dt>
              <dd>340.4050600</dd>
            </div>
            <div>
              <dt>Indirizzo:</dt>
              <dd>Via della città, 5 - 00100 Città</dd>
            </div>
          </dl>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="profile" border-top="secondary">
          <a slot="title" href="#">Nome Personale</a>
          <span slot="subtitle">Ruolo nell'organizzazione</span>
          <it-avatar slot="image" type="text" size="xl" text="Nome Personale" avatar-title="Nome Personale"></it-avatar>
          <dl slot="body" class="it-card-description-list">
            <div>
              <dt>Area:</dt>
              <dd><a class="it-card-link" href="#">Nome dell'area di appartenenza</a></dd>
            </div>
            <div>
              <dt>Email:</dt>
              <dd>me@mail.com</dd>
            </div>
            <div>
              <dt>Tel:</dt>
              <dd>340.4050600</dd>
            </div>
            <div>
              <dt>Indirizzo:</dt>
              <dd>Via della città, 5 - 00100 Città</dd>
            </div>
          </dl>
        </it-card>
      </div>
    </div>
  \`
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Card per luoghi',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="location">
          <a slot="title" href="#">Toponimo o luogo</a>
          <span slot="subtitle">Tipologia di luogo</span>
          <span slot="address">Indirizzo del luogo</span>
          <div slot="image" class="it-card-profile-image-icon-wrapper">
            <it-icon color="primary" name="it-pa" size="lg"></it-icon>
          </div>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="location" border-top="secondary">
          <a slot="title" href="#">Toponimo o luogo</a>
          <span slot="subtitle">Tipologia di luogo</span>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/monument/320/320"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="location">
          <a slot="title" href="#">Toponimo o luogo</a>
          <span slot="subtitle">Tipologia di luogo</span>
          <span slot="address">Indirizzo del luogo</span>
          <div slot="image" class="it-card-profile-image-icon-wrapper">
            <it-icon color="primary" name="it-pa" size="lg"></it-icon>
          </div>
          <dl slot="body" class="it-card-description-list border-bottom-0 mb-0">
            <div>
              <dt>Email:</dt>
              <dd>me@mail.com</dd>
            </div>
            <div>
              <dt>Tel:</dt>
              <dd>340.4050600</dd>
            </div>
            <div>
              <dt>Indirizzo:</dt>
              <dd>Via della città, 5 - 00100 Città</dd>
            </div>
          </dl>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height variant="location" border-top="secondary">
          <a slot="title" href="#">Toponimo o luogo</a>
          <span slot="subtitle">Tipologia di luogo</span>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/monument/320/320"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <dl slot="body" class="it-card-description-list border-bottom-0 mb-0">
            <div>
              <dt>Email:</dt>
              <dd>me@mail.com</dd>
            </div>
            <div>
              <dt>Tel:</dt>
              <dd>340.4050600</dd>
            </div>
            <div>
              <dt>Indirizzo:</dt>
              <dd>Via della città, 5 - 00100 Città</dd>
            </div>
          </dl>
          <div slot="footer" style="flex-grow:1">
            <it-icon color="secondary" name="it-map-marker" size="sm"></it-icon>
            <strong>Distanza:</strong> 900 metri
          </div>
          <a slot="footer" href="#" target="_blank" class="it-card-link">
            Apri in mappa
            <span class="visually-hidden"> Toponimo o Luogo (si apre in una nuova finestra)</span>
            <it-icon class="ms-2" color="secondary" name="it-external-link" size="sm"></it-icon>
          </a>
        </it-card>
      </div>
    </div>
  \`
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Card con liste di contenuti affini',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height ratio="21x9">
          <a slot="title" href="#">Argomento Y</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/nature/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Descrizione breve dell'argomento in poche righe non troncate.</span>
          <ul slot="body" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
            <li class="list-group-item"><a href="#">Titolo notizia affine</a></li>
            <li class="list-group-item"><a href="#">Titolo media affine</a></li>
            <li class="list-group-item"><a href="#">Altro titolo scheda affine</a></li>
            <li class="list-group-item"><a href="#">Pagina profilo affine</a></li>
          </ul>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height ratio="21x9">
          <a slot="title" href="#">Titolo evento</a>
          <figure slot="image" class="figure img-full">
            <img src="https://picsum.photos/seed/monument/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto.">
          </figure>
          <span slot="subtitle">Dal 17 al 22 novembre</span>
          <span slot="text">Descrizione breve dell'evento in poche righe non troncate.</span>
          <ul slot="body" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
            <li class="list-group-item"><a href="#">Gli artisti</a></li>
            <li class="list-group-item"><a href="#">Il luogo</a></li>
            <li class="list-group-item"><a href="#">Il programma dettagliato</a></li>
          </ul>
          <div slot="footer" style="flex-grow:1">
            <a class="it-card-link" href="#">Iscriviti per rimanere aggiornato</a>
          </div>
          <a slot="footer" href="#" target="_blank" class="it-card-link">
            Apri la mappa
            <span class="visually-hidden"> di Titolo evento (si apre in una nuova finestra)</span>
            <it-icon class="ms-2" color="secondary" name="it-external-link" size="sm"></it-icon>
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height">
          <a slot="title" href="#">Argomento X</a>
          <span slot="text">Descrizione breve dell'argomento in poche righe non troncate.</span>
          <ul slot="body" class="list-group list-group-flush" aria-label="Contenuti in evidenza:">
            <li class="list-group-item"><a href="#" class="it-card-link">Titolo notizia affine</a></li>
            <li class="list-group-item"><a href="#" class="it-card-link">Titolo media affine</a></li>
            <li class="list-group-item"><a href="#" class="it-card-link">Altro titolo scheda affine</a></li>
            <li class="list-group-item"><a href="#" class="it-card-link">Pagina profilo affine</a></li>
          </ul>
        </it-card>
      </div>
    </div>
  \`
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Card banner',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="banner">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
        </it-card>
      </div>
    </div>
  \`
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Card banner con azione',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="banner">
          <span slot="title">Titolo del contenuto</span>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
          <a slot="footer" href="#">
            Scopri maggiori informazioni
            <span class="visually-hidden">su Titolo del contenuto</span>
          </a>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="banner">
          <span slot="title">Titolo del contenuto</span>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
          <it-button slot="footer" variant="primary" outline>
            Apri il form di iscrizione
            <span class="visually-hidden">per Titolo del contenuto</span>
          </it-button>
        </it-card>
      </div>
    </div>
  \`
}`,...y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Card banner inline',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="inline-banner">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="inline-banner-reverse">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Sottotitolo</span>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="inline-banner-mini">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Versione inline anche su mobile</span>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card variant="inline-banner-mini-reverse">
          <a slot="title" href="#">Titolo del contenuto</a>
          <it-icon slot="image" color="secondary" name="it-chart-line" size="xl"></it-icon>
          <span slot="subtitle">Versione inline anche su mobile</span>
        </it-card>
      </div>
    </div>
  \`
}`,...z.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Bordi e ombre',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card shadow="md">
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card shadow="lg">
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">&nbsp;</div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card shadow="md" border="0">
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card shadow="lg" border="0">
          <a slot="title" href="#">Titolo h3</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
        </it-card>
      </div>
    </div>
  \`
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card ratio="21x9">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Card con immagine con proporzioni 21:9.</span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card ratio="16x9">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Card con immagine con proporzioni 16:9.</span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card ratio="4x3">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Card con immagine con proporzioni 4:3.</span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card ratio="1x1">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">Card con immagine con proporzioni 1:1.</span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  \`
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Altezza delle card',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://picsum.photos/seed/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
      <div class="col-12 col-md-6 col-lg-6 mb-3 mb-md-4">
        <it-card full-height>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </div>
    </div>
  \`
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Pulsanti a tutta larghezza su mobile',
  decorators: [story => html\` <div style="display:grid;gap:24px;grid-template-columns:1fr 1fr;">\${story()}</div> \`],
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <it-card>
      <a slot="title" href="#">Titolo dell'evento</a>
      <span slot="subtitle">Dal 4 al 6 agosto</span>
      <span slot="text">
        Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe,
        senza troncamento.
      </span>
      <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
      <div slot="actions" class="d-grid gap-2 d-md-block">
        <a href="#" class="btn btn-outline-secondary">
          Prenota
          <span class="visually-hidden">per Titolo dell'evento</span>
        </a>
      </div>
    </it-card>
  \`
}`,...w.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Liste per gruppi numerosi di card',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <ul class="it-card-list row" aria-label="Risultati della ricerca: ">
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Primo risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Secondo risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Terzo risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Quarto risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Quinto risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
      <li class="col-12 col-md-6 col-lg-4 mb-3 mb-md-4">
        <it-card>
          <a slot="title" href="#">Sesto risultato</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22"> 22 aprile 2026 </time>
        </it-card>
      </li>
    </ul>
  \`
}`,...Q.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Uso di classi dedicate (per piccoli gruppi)',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="it-card-group">
      <it-card>
        <a slot="title" href="#">Titolo della prima card</a>
        <span slot="text"> Questo è un testo breve che riassume il contenuto della pagina di destinazione. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Titolo della seconda card</a>
        <span slot="text"> Questo è un testo breve che riassume il contenuto della pagina di destinazione. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Titolo della terza card</a>
        <span slot="text"> Questo è un testo breve che riassume il contenuto della pagina di destinazione. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Titolo della quarta card</a>
        <span slot="text"> Questo è un testo breve che riassume il contenuto della pagina di destinazione. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
    </div>
  \`
}`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Numero di colonne specifiche',
  argTypes: {
    ...disabledControls()
  },
  render: () => html\`
    <div class="it-card-group it-card-group-2-cols">
      <it-card>
        <a slot="title" href="#">Card in due colonne</a>
        <span slot="text"> Questo gruppo mostra sempre due colonne su viewport medie e grandi. </span>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card in due colonne</a>
        <span slot="text"> Questo gruppo mostra sempre due colonne su viewport medie e grandi. </span>
      </it-card>
    </div>
  \`
}`,...q.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Centrate orizzontalmente',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="it-card-group it-card-group-center">
      <it-card>
        <a slot="title" href="#">Card centrata</a>
        <span slot="text"> Questo gruppo ha le card centrate nella pagina. </span>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card centrata</a>
        <span slot="text"> Questo gruppo ha le card centrate nella pagina. </span>
      </it-card>
    </div>
  \`
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Uso rispetto al contenitore (sperimentale)',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="it-card-group it-card-group-container-aware">
      <it-card>
        <a slot="title" href="#">Card con Container Queries</a>
        <span slot="text"> Questa card si adatta alla dimensione del suo contenitore, non della viewport. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card con Container Queries</a>
        <span slot="text"> Questa card si adatta alla dimensione del suo contenitore, non della viewport. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card con Container Queries</a>
        <span slot="text"> Questa card si adatta alla dimensione del suo contenitore, non della viewport. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
      <it-card>
        <a slot="title" href="#">Card con Container Queries</a>
        <span slot="text"> Questa card si adatta alla dimensione del suo contenitore, non della viewport. </span>
        <time slot="footer" class="it-card-date" datetime="2026-10-12"> 12 ottobre, 2026 </time>
      </it-card>
    </div>
  \`
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Confronto in colonne diverse',
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    pageLayout: 'w-100'
  },
  render: () => html\`
    <div class="row">
      <div class="col-12 col-lg-8 mb-4">
        <div class="p-3 bg-light">
          <div class="it-card-group it-card-group-container-aware">
            <it-card>
              <a slot="title" href="#">Card in colonna larga</a>
              <span slot="text"> In questa colonna larga, le card si distribuiscono su più colonne. </span>
            </it-card>
            <it-card>
              <a slot="title" href="#">Card in colonna larga</a>
              <span slot="text"> In questa colonna larga, le card si distribuiscono su più colonne. </span>
            </it-card>
            <it-card>
              <a slot="title" href="#">Card in colonna larga</a>
              <span slot="text"> In questa colonna larga, le card si distribuiscono su più colonne. </span>
            </it-card>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 mb-4">
        <div class="p-3 bg-light">
          <div class="it-card-group it-card-group-container-aware">
            <it-card>
              <a slot="title" href="#">Card in colonna stretta</a>
              <span slot="text"> In questa colonna stretta, le card si dispongono su una singola colonna. </span>
            </it-card>
            <it-card>
              <a slot="title" href="#">Card in colonna stretta</a>
              <span slot="text"> In questa colonna stretta, le card si dispongono su una singola colonna. </span>
            </it-card>
            <it-card>
              <a slot="title" href="#">Card in colonna stretta</a>
              <span slot="text"> In questa colonna stretta, le card si dispongono su una singola colonna. </span>
            </it-card>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...B.parameters?.docs?.source}}};const $=["EsempioInterattivo","EditorialiStandard","EditorialiFeatured","CardInline","CardInlineMini","Eventi","EventiInline","Media","MediaVideoInline","ServiziEBandi","DocumentiEAllegati","ProfiliPersonali","Luoghi","ListeDiContenutiAffini","Banner","BannerConAzione","BannerInline","BordiEOmbre","Immagini","AltezzaDelleCard","PulsantiMobile","ListeCardNumerose","ClassiDedicate","ClassiDedicateColonne","ClassiDedicateCentrate","ClassiDedicateContainer","ClassiDedicateConfrontoColonne"],M=Object.freeze(Object.defineProperty({__proto__:null,AltezzaDelleCard:T,Banner:b,BannerConAzione:y,BannerInline:z,BordiEOmbre:x,CardInline:r,CardInlineMini:n,ClassiDedicate:k,ClassiDedicateCentrate:S,ClassiDedicateColonne:q,ClassiDedicateConfrontoColonne:B,ClassiDedicateContainer:A,DocumentiEAllegati:g,EditorialiFeatured:l,EditorialiStandard:s,EsempioInterattivo:o,Eventi:c,EventiInline:d,Immagini:C,ListeCardNumerose:Q,ListeDiContenutiAffini:f,Luoghi:h,Media:m,MediaVideoInline:p,ProfiliPersonali:v,PulsantiMobile:w,ServiziEBandi:u,__namedExportsOrder:$,default:I},Symbol.toStringTag,{value:"Module"}));export{T as A,b as B,r as C,g as D,o as E,C as I,h as L,m as M,v as P,M as S,s as a,l as b,n as c,c as d,d as e,p as f,u as g,f as h,y as i,z as j,x as k,w as l,Q as m,k as n,q as o,S as p,A as q,B as r};
