import{o as i,b as e}from"./iframe-DvG09N_F.js";const g=["","current","past"],f=["h2","h3","h4","h5","h6"],h=["primary","secondary","success","danger","warning","info","light","dark"],b=["ol","ul"],y={title:"Componenti/Timeline",tags:["a11y-ok","web-component","new"],component:"it-timeline",parameters:{layout:"padded"}},n={name:"Esempio interattivo – Timeline classica",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},argTypes:{variant:{control:"select",options:g,description:"Variante colore del pin: vuota (futuro), `current` (presente, azzurro), `past` (passato, blu scuro)",table:{defaultValue:{summary:""}}},date:{control:"text",description:"Etichetta testuale del periodo (es. MAGGIO 2026)",table:{defaultValue:{summary:""}}},headingLevel:{name:"heading-level",control:"select",options:f,description:"Livello heading del pin. Adattare alla gerarchia della pagina.",table:{defaultValue:{summary:"h3"}}}},args:{variant:"",date:"MAGGIO 2026",headingLevel:"h3"},render:t=>e`
    <it-timeline>
      <it-timeline-element
        variant=${i(t.variant||void 0)}
        date=${i(t.date)}
        heading-level=${i(t.headingLevel)}
      >
        <it-icon slot="pin-icon" name="it-file"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://placeholderimage.eu/api/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>
    </it-timeline>
  `},a={name:"Timeline classica",parameters:{docs:{description:{story:"Il componente timeline classica mostra eventi passati, presenti e futuri lungo un asse verticale (mobile) o centrale (desktop). Il pin ha tre varianti di colore: `past` (blu scuro, passato), `current` (azzurro, presente) e senza classe (bianco, futuro)."}}},render:()=>e`
    <it-timeline>
      <it-timeline-element variant="past" date="MAGGIO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-file"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://placeholderimage.eu/api/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>

      <it-timeline-element variant="past" date="GIUGNO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-calendar"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>

      <it-timeline-element variant="current" date="LUGLIO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-check-circle"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>

      <it-timeline-element variant="current" date="LUGLIO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-check-circle"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>

      <it-timeline-element date="AGOSTO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-star-outline"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>
    </it-timeline>
  `},o={name:"Esempio interattivo – Timeline point list",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"},description:{story:"La timeline point list è una variante compatta per presentare brevi sequenze di eventi o scadenze temporali."}}},argTypes:{as:{control:"select",options:b,description:"Tag HTML della lista. `ol` è raccomandato per sequenze cronologiche.",table:{defaultValue:{summary:"ol"}}},stackMobile:{name:"stack-mobile",control:"boolean",description:"Su mobile dispone la sezione laterale in verticale sopra il contenuto. Usare con card complete.",table:{defaultValue:{summary:"false"}}},color:{control:"select",options:h,description:"Colore predefinito della linea e del cerchio per tutti i punti. Singoli punti possono sovrascriverlo.",table:{defaultValue:{summary:"primary"}}},alignTop:{name:"align-top",control:"boolean",description:"Fissa il punto in cima al contenuto. Utile per contenuti lunghi.",table:{defaultValue:{summary:"false"}}},compact:{control:"boolean",description:"Rende la sezione laterale più compatta anche su desktop.",table:{defaultValue:{summary:"false"}}}},args:{as:"ol",stackMobile:!1,color:"primary",alignTop:!1,compact:!1},render:t=>e`
    <it-timeline
      variant="point-list"
      as=${i(t.as)}
      color=${i(t.color)}
      ?stack-mobile=${t.stackMobile}
    >
      <it-timeline-point ?align-top=${t.alignTop} ?compact=${t.compact}>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point ?align-top=${t.alignTop} ?compact=${t.compact}>
        <time slot="date" datetime="2025-12-14">
          <span class="visually-hidden">14 dicembre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">dic</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  `},s={name:"Con giorno e mese",render:()=>e`
    <it-timeline variant="point-list">
      <it-timeline-point>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ottobre</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  `},l={name:"Con anno, giorno e mese",render:()=>e`
    <it-timeline variant="point-list">
      <it-timeline-point>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-top font-monospace">2025</span>
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ottobre</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  `},p={name:"Layout compatto su desktop",render:()=>e`
    <it-timeline variant="point-list" compact>
      <it-timeline-point>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point compact="false">
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  `},c={name:"Traguardi con numeri e sigle",render:()=>e`
    <it-timeline variant="point-list">
      <it-timeline-point>
        <div slot="milestone">
          <span class="visually-hidden">Passo 1</span>
          <span class="point-visual">
            <span class="point-main font-monospace">1</span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point>
        <div slot="milestone">
          <span class="visually-hidden">Passo 1 di 3</span>
          <span class="point-visual">
            <span class="point-main font-monospace">1</span>
            <span class="point-bottom font-monospace">/ 3</span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point>
        <div slot="milestone">
          <span class="visually-hidden">Categoria AB, passo 1 di 3</span>
          <span class="point-visual">
            <span class="point-top font-monospace">AB</span>
            <span class="point-main font-monospace">1</span>
            <span class="point-bottom font-monospace">/ 3</span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  `},r={name:"Traguardi con icone",render:()=>e`
    <it-timeline variant="point-list">
      <it-timeline-point color="success">
        <div slot="milestone">
          <span class="visually-hidden">Milestone completata</span>
          <span class="point-visual">
            <span class="point-main font-monospace">
              <it-icon name="it-check-circle"></it-icon>
            </span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point color="primary">
        <div slot="milestone">
          <span class="visually-hidden">Documento rilasciato</span>
          <span class="point-visual">
            <span class="point-main font-monospace">
              <it-icon name="it-file"></it-icon>
            </span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point color="warning">
        <div slot="milestone">
          <span class="visually-hidden">Versione 2, codice JavaScript</span>
          <span class="point-visual">
            <span class="point-top font-monospace">v2</span>
            <span class="point-main font-monospace">
              <it-icon name="it-code-circle"></it-icon>
            </span>
            <span class="point-bottom font-monospace">JS</span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  `},m={name:"Varianti colore",decorators:[t=>e` <div style="display: flex; gap: 2rem; flex-wrap: wrap;">${t()}</div>`],render:()=>e`
    ${["primary","secondary","success","danger","warning","info"].map(t=>e` <it-timeline variant="point-list">
          <it-timeline-point color=${t}>
            <time slot="date" datetime="2025-10-14">
              <span class="visually-hidden">14 ottobre 2025</span>
              <span class="point-visual">
                <span class="point-main font-monospace">14</span>
                <span class="point-bottom font-monospace">ott</span>
              </span>
            </time>
            <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </it-timeline-point>
        </it-timeline>`)}
  `},d={name:"Varianti colore punti indipendenti",render:()=>e`
    <it-timeline variant="point-list">
      ${[void 0,"secondary","success","danger","warning","info"].map(t=>e`
          <it-timeline-point color=${i(t)}>
            <time slot="date" datetime="2025-10-14">
              <span class="visually-hidden">14 ottobre 2025</span>
              <span class="point-visual">
                <span class="point-main font-monospace">14</span>
                <span class="point-bottom font-monospace">ott</span>
              </span>
            </time>
            <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </it-timeline-point>
        `)}
    </it-timeline>
  `},u={name:"Timeline stile servizi pubblici",render:()=>e`
    <it-timeline variant="point-list" color="secondary">
      <it-timeline-point>
        <time slot="date" datetime="2022-01-04">
          <span class="visually-hidden">4 gennaio 2022</span>
          <span class="point-visual" aria-hidden="true">
            <span class="point-top font-monospace">2022</span>
            <span class="point-main font-monospace">04</span>
            <span class="point-bottom font-monospace">GEN</span>
          </span>
        </time>
        <it-card full-height border-top="secondary" slot="content">
          <span slot="title">Apertura iscrizioni</span>
          <div slot="body">Inizio del periodo per presentare la domanda di iscrizione all'asilo.</div>
        </it-card>
      </it-timeline-point>
      <it-timeline-point>
        <time slot="date" datetime="2022-02-04">
          <span class="visually-hidden">4 febbraio 2022</span>
          <span class="point-visual" aria-hidden="true">
            <span class="point-top font-monospace">2022</span>
            <span class="point-main font-monospace">04</span>
            <span class="point-bottom font-monospace">FEB</span>
          </span>
        </time>
        <it-card full-height border-top="secondary" slot="content">
          <span slot="title">Termine presentazione domande</span>
        </it-card>
      </it-timeline-point>
      <it-timeline-point>
        <time slot="date" datetime="2022-03-02">
          <span class="visually-hidden">2 marzo 2022</span>
          <span class="point-visual" aria-hidden="true">
            <span class="point-top font-monospace">2022</span>
            <span class="point-main font-monospace">02</span>
            <span class="point-bottom font-monospace">MAR</span>
          </span>
        </time>
        <it-card full-height border-top="secondary" slot="content">
          <span slot="title">Pubblicazione graduatorie</span>
          <div slot="body">Pubblicazione delle graduatorie provvisorie sul sito istituzionale.</div>
        </it-card>
      </it-timeline-point>
      <it-timeline-point align-top>
        <time slot="date" datetime="2022-04-02">
          <span class="visually-hidden">2 aprile 2022</span>
          <span class="point-visual" aria-hidden="true">
            <span class="point-top font-monospace">2022</span>
            <span class="point-main font-monospace">02</span>
            <span class="point-bottom font-monospace">APR</span>
          </span>
        </time>
        <it-card full-height border-top="secondary" slot="content">
          <span slot="title">Perfezionamento domande</span>
          <div slot="body">
            Termine ultimo per la conferma dell'iscrizione e il pagamento della quota. Fino al secondo o anche anche
            terzo riga utile per ulteriori istruzioni relative a questa scadenza. Se diventa così lungo bene avere la
            data allineata al to.
          </div>
        </it-card>
      </it-timeline-point>
    </it-timeline>
  `},v={name:"Esempio complesso con card complete",render:()=>e`
    <it-timeline variant="point-list" stack-mobile>
      <it-timeline-point align-top>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <it-card slot="content">
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-point>
      <it-timeline-point align-top color="danger">
        <time slot="date" datetime="2025-10-31">
          <span class="visually-hidden">31 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">31</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <it-card slot="content" variant="inline-mini">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile, 2026</time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://placeholderimage.eu/api/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </it-timeline-point>
      <it-timeline-point color="success" align-top>
        <div slot="milestone">
          <span class="visually-hidden">Milestone completata</span>
          <span class="point-visual">
            <span class="point-main font-monospace">
              <it-icon name="it-check-circle"></it-icon>
            </span>
          </span>
        </div>
        <it-card slot="content" variant="inline-mini-reverse">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://placeholderimage.eu/api/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-point>
    </it-timeline>
  `};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo – Timeline classica',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: TIMELINE_ELEMENT_VARIANTS,
      description: 'Variante colore del pin: vuota (futuro), \`current\` (presente, azzurro), \`past\` (passato, blu scuro)',
      table: {
        defaultValue: {
          summary: ''
        }
      }
    },
    date: {
      control: 'text',
      description: 'Etichetta testuale del periodo (es. MAGGIO 2026)',
      table: {
        defaultValue: {
          summary: ''
        }
      }
    },
    headingLevel: {
      name: 'heading-level',
      control: 'select',
      options: TIMELINE_HEADING_LEVELS,
      description: 'Livello heading del pin. Adattare alla gerarchia della pagina.',
      table: {
        defaultValue: {
          summary: 'h3'
        }
      }
    }
  } as Meta<TimelineElementProps>['argTypes'],
  args: {
    variant: '',
    date: 'MAGGIO 2026',
    headingLevel: 'h3'
  } as TimelineElementProps,
  render: (args: Record<string, unknown>) => html\`
    <it-timeline>
      <it-timeline-element
        variant=\${ifDefined(args.variant as string || undefined)}
        date=\${ifDefined(args.date as string)}
        heading-level=\${ifDefined(args.headingLevel as string)}
      >
        <it-icon slot="pin-icon" name="it-file"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://placeholderimage.eu/api/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>
    </it-timeline>
  \`
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Timeline classica',
  parameters: {
    docs: {
      description: {
        story: 'Il componente timeline classica mostra eventi passati, presenti e futuri lungo un asse verticale (mobile) o centrale (desktop). Il pin ha tre varianti di colore: \`past\` (blu scuro, passato), \`current\` (azzurro, presente) e senza classe (bianco, futuro).'
      }
    }
  },
  render: () => html\`
    <it-timeline>
      <it-timeline-element variant="past" date="MAGGIO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-file"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://placeholderimage.eu/api/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>

      <it-timeline-element variant="past" date="GIUGNO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-calendar"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>

      <it-timeline-element variant="current" date="LUGLIO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-check-circle"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>

      <it-timeline-element variant="current" date="LUGLIO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-check-circle"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>

      <it-timeline-element date="AGOSTO 2026" heading-level="h3">
        <it-icon slot="pin-icon" name="it-star-outline"></it-icon>
        <it-card>
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-element>
    </it-timeline>
  \`
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo – Timeline point list',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: 'La timeline point list è una variante compatta per presentare brevi sequenze di eventi o scadenze temporali.'
      }
    }
  },
  argTypes: {
    as: {
      control: 'select',
      options: TIMELINE_POINT_LIST_TAGS,
      description: 'Tag HTML della lista. \`ol\` è raccomandato per sequenze cronologiche.',
      table: {
        defaultValue: {
          summary: 'ol'
        }
      }
    },
    stackMobile: {
      name: 'stack-mobile',
      control: 'boolean',
      description: 'Su mobile dispone la sezione laterale in verticale sopra il contenuto. Usare con card complete.',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    color: {
      control: 'select',
      options: TIMELINE_POINT_COLORS,
      description: 'Colore predefinito della linea e del cerchio per tutti i punti. Singoli punti possono sovrascriverlo.',
      table: {
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    alignTop: {
      name: 'align-top',
      control: 'boolean',
      description: 'Fissa il punto in cima al contenuto. Utile per contenuti lunghi.',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    compact: {
      control: 'boolean',
      description: 'Rende la sezione laterale più compatta anche su desktop.',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    }
  } as Meta<TimelinePointListProps & TimelinePointProps>['argTypes'],
  args: {
    as: 'ol',
    stackMobile: false,
    color: 'primary',
    alignTop: false,
    compact: false
  } as TimelinePointListProps & TimelinePointProps,
  render: (args: Record<string, unknown>) => html\`
    <it-timeline
      variant="point-list"
      as=\${ifDefined(args.as as string)}
      color=\${ifDefined(args.color as string)}
      ?stack-mobile=\${args.stackMobile}
    >
      <it-timeline-point ?align-top=\${args.alignTop} ?compact=\${args.compact}>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point ?align-top=\${args.alignTop} ?compact=\${args.compact}>
        <time slot="date" datetime="2025-12-14">
          <span class="visually-hidden">14 dicembre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">dic</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  \`
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Con giorno e mese',
  render: () => html\`
    <it-timeline variant="point-list">
      <it-timeline-point>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ottobre</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  \`
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Con anno, giorno e mese',
  render: () => html\`
    <it-timeline variant="point-list">
      <it-timeline-point>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-top font-monospace">2025</span>
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ottobre</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  \`
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Layout compatto su desktop',
  render: () => html\`
    <it-timeline variant="point-list" compact>
      <it-timeline-point>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point compact="false">
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  \`
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Traguardi con numeri e sigle',
  render: () => html\`
    <it-timeline variant="point-list">
      <it-timeline-point>
        <div slot="milestone">
          <span class="visually-hidden">Passo 1</span>
          <span class="point-visual">
            <span class="point-main font-monospace">1</span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point>
        <div slot="milestone">
          <span class="visually-hidden">Passo 1 di 3</span>
          <span class="point-visual">
            <span class="point-main font-monospace">1</span>
            <span class="point-bottom font-monospace">/ 3</span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point>
        <div slot="milestone">
          <span class="visually-hidden">Categoria AB, passo 1 di 3</span>
          <span class="point-visual">
            <span class="point-top font-monospace">AB</span>
            <span class="point-main font-monospace">1</span>
            <span class="point-bottom font-monospace">/ 3</span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  \`
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Traguardi con icone',
  render: () => html\`
    <it-timeline variant="point-list">
      <it-timeline-point color="success">
        <div slot="milestone">
          <span class="visually-hidden">Milestone completata</span>
          <span class="point-visual">
            <span class="point-main font-monospace">
              <it-icon name="it-check-circle"></it-icon>
            </span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point color="primary">
        <div slot="milestone">
          <span class="visually-hidden">Documento rilasciato</span>
          <span class="point-visual">
            <span class="point-main font-monospace">
              <it-icon name="it-file"></it-icon>
            </span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
      <it-timeline-point color="warning">
        <div slot="milestone">
          <span class="visually-hidden">Versione 2, codice JavaScript</span>
          <span class="point-visual">
            <span class="point-top font-monospace">v2</span>
            <span class="point-main font-monospace">
              <it-icon name="it-code-circle"></it-icon>
            </span>
            <span class="point-bottom font-monospace">JS</span>
          </span>
        </div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </it-timeline-point>
    </it-timeline>
  \`
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Varianti colore',
  decorators: [Story => html\` <div style="display: flex; gap: 2rem; flex-wrap: wrap;">\${Story()}</div>\`],
  render: () => html\`
    \${(['primary', 'secondary', 'success', 'danger', 'warning', 'info'] as TimelinePointColor[]).map(color => html\` <it-timeline variant="point-list">
          <it-timeline-point color=\${color}>
            <time slot="date" datetime="2025-10-14">
              <span class="visually-hidden">14 ottobre 2025</span>
              <span class="point-visual">
                <span class="point-main font-monospace">14</span>
                <span class="point-bottom font-monospace">ott</span>
              </span>
            </time>
            <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </it-timeline-point>
        </it-timeline>\`)}
  \`
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Varianti colore punti indipendenti',
  render: () => html\`
    <it-timeline variant="point-list">
      \${([undefined, 'secondary', 'success', 'danger', 'warning', 'info'] as TimelinePointColor[]).map(color => html\`
          <it-timeline-point color=\${ifDefined(color)}>
            <time slot="date" datetime="2025-10-14">
              <span class="visually-hidden">14 ottobre 2025</span>
              <span class="point-visual">
                <span class="point-main font-monospace">14</span>
                <span class="point-bottom font-monospace">ott</span>
              </span>
            </time>
            <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </it-timeline-point>
        \`)}
    </it-timeline>
  \`
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Timeline stile servizi pubblici',
  render: () => html\`
    <it-timeline variant="point-list" color="secondary">
      <it-timeline-point>
        <time slot="date" datetime="2022-01-04">
          <span class="visually-hidden">4 gennaio 2022</span>
          <span class="point-visual" aria-hidden="true">
            <span class="point-top font-monospace">2022</span>
            <span class="point-main font-monospace">04</span>
            <span class="point-bottom font-monospace">GEN</span>
          </span>
        </time>
        <it-card full-height border-top="secondary" slot="content">
          <span slot="title">Apertura iscrizioni</span>
          <div slot="body">Inizio del periodo per presentare la domanda di iscrizione all'asilo.</div>
        </it-card>
      </it-timeline-point>
      <it-timeline-point>
        <time slot="date" datetime="2022-02-04">
          <span class="visually-hidden">4 febbraio 2022</span>
          <span class="point-visual" aria-hidden="true">
            <span class="point-top font-monospace">2022</span>
            <span class="point-main font-monospace">04</span>
            <span class="point-bottom font-monospace">FEB</span>
          </span>
        </time>
        <it-card full-height border-top="secondary" slot="content">
          <span slot="title">Termine presentazione domande</span>
        </it-card>
      </it-timeline-point>
      <it-timeline-point>
        <time slot="date" datetime="2022-03-02">
          <span class="visually-hidden">2 marzo 2022</span>
          <span class="point-visual" aria-hidden="true">
            <span class="point-top font-monospace">2022</span>
            <span class="point-main font-monospace">02</span>
            <span class="point-bottom font-monospace">MAR</span>
          </span>
        </time>
        <it-card full-height border-top="secondary" slot="content">
          <span slot="title">Pubblicazione graduatorie</span>
          <div slot="body">Pubblicazione delle graduatorie provvisorie sul sito istituzionale.</div>
        </it-card>
      </it-timeline-point>
      <it-timeline-point align-top>
        <time slot="date" datetime="2022-04-02">
          <span class="visually-hidden">2 aprile 2022</span>
          <span class="point-visual" aria-hidden="true">
            <span class="point-top font-monospace">2022</span>
            <span class="point-main font-monospace">02</span>
            <span class="point-bottom font-monospace">APR</span>
          </span>
        </time>
        <it-card full-height border-top="secondary" slot="content">
          <span slot="title">Perfezionamento domande</span>
          <div slot="body">
            Termine ultimo per la conferma dell'iscrizione e il pagamento della quota. Fino al secondo o anche anche
            terzo riga utile per ulteriori istruzioni relative a questa scadenza. Se diventa così lungo bene avere la
            data allineata al to.
          </div>
        </it-card>
      </it-timeline-point>
    </it-timeline>
  \`
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Esempio complesso con card complete',
  render: () => html\`
    <it-timeline variant="point-list" stack-mobile>
      <it-timeline-point align-top>
        <time slot="date" datetime="2025-10-14">
          <span class="visually-hidden">14 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">14</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <it-card slot="content">
          <a slot="title" href="#">Titolo del contenuto</a>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-point>
      <it-timeline-point align-top color="danger">
        <time slot="date" datetime="2025-10-31">
          <span class="visually-hidden">31 ottobre 2025</span>
          <span class="point-visual">
            <span class="point-main font-monospace">31</span>
            <span class="point-bottom font-monospace">ott</span>
          </span>
        </time>
        <it-card slot="content" variant="inline-mini">
          <a slot="title" href="#">Titolo contenuto editoriale</a>
          <div slot="footer" class="it-card-taxonomy">
            <a href="#" class="it-card-category it-card-link">
              <span class="visually-hidden">Categoria correlata: </span>
              Categoria
            </a>
          </div>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile, 2026</time>
          <figure slot="image" class="figure img-full">
            <img
              src="https://placeholderimage.eu/api/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
        </it-card>
      </it-timeline-point>
      <it-timeline-point color="success" align-top>
        <div slot="milestone">
          <span class="visually-hidden">Milestone completata</span>
          <span class="point-visual">
            <span class="point-main font-monospace">
              <it-icon name="it-check-circle"></it-icon>
            </span>
          </span>
        </div>
        <it-card slot="content" variant="inline-mini-reverse">
          <a slot="title" href="#">Titolo del contenuto</a>
          <figure slot="image" class="figure img-full">
            <img
              src="https://placeholderimage.eu/api/city/800/600"
              alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."
            />
          </figure>
          <span slot="text">
            Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro
            righe, senza troncamento.
          </span>
          <time slot="footer" class="it-card-date" datetime="2026-04-22">22 aprile 2026</time>
        </it-card>
      </it-timeline-point>
    </it-timeline>
  \`
}`,...v.parameters?.docs?.source}}};const L=["EsempioInterattivoClassica","TimelineClassica","EsempioInterattivoPointList","PointListConGiornoEMese","PointListConAnnoGiornoEMese","PointListCompatto","PointListTraguardiNumeri","PointListMilestoneIcone","PointListVariantiColoreFull","PointListVariantiColore","PointListServiziPubblici","PointListComplessa"],T=Object.freeze(Object.defineProperty({__proto__:null,EsempioInterattivoClassica:n,EsempioInterattivoPointList:o,PointListCompatto:p,PointListComplessa:v,PointListConAnnoGiornoEMese:l,PointListConGiornoEMese:s,PointListMilestoneIcone:r,PointListServiziPubblici:u,PointListTraguardiNumeri:c,PointListVariantiColore:d,PointListVariantiColoreFull:m,TimelineClassica:a,__namedExportsOrder:L,default:y},Symbol.toStringTag,{value:"Module"}));export{o as E,s as P,T as S,a as T,l as a,p as b,c,r as d,m as e,d as f,u as g,v as h};
