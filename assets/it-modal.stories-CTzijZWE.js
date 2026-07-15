import{b as i,o as k}from"./iframe-Ts_oPF3y.js";const $=["sm","lg","xl"],M=["center","left","right"],L=["alert","popconfirm","link-list"],t=e=>{const o=e.currentTarget.closest("it-modal");console.log("closeModal -> modal",o),o?.hide()},x=e=>{const o=e.currentTarget.closest("it-modal");console.log("openModal -> modal",o),o?.show()},C=e=>{const o=e.currentTarget.closest("it-modal");console.log("toggleModal -> modal",o),o?.toggle()},A={title:"Componenti/Modal",component:"it-modal",tags:["alpha","a11y-ok","web-component"],parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:420}}},args:{"modal-title":"Titolo modale","modal-description":"Descrizione della modale","custom-header":!1,size:"",position:void 0,scrollable:!1,"static-backdrop":!1,"hide-close-button":!1,"close-button-placement":"header",variant:"","close-label":"Chiudi finestra modale","disable-animation":!1,"footer-shadow":!1,triggerLabel:"Apri modale",bodyContent:"Contenuto della modale. Può includere testo, form, o qualsiasi altro elemento."},argTypes:{"modal-title":{control:"text",description:"Titolo della modale (usa slot `header` per contenuto custom)"},"modal-description":{control:"text",description:"Descrizione della modale (usa slot `description` per contenuto custom), verrrà inserita in un elemento visivamente nascosto per i lettori di schermo."},"custom-header":{control:"boolean",description:"Abilita header custom. In questo modo è possibile inserire un header personalizzato tramite slot, altrimenti lo slot header verrà inserito all'interno di un `h2` con classi predefinite per garantire la corretta semantica e accessibilità.",table:{defaultValue:{summary:"false"}}},size:{control:"select",options:$,description:"Dimensione della modale",table:{defaultValue:{summary:void 0}}},position:{control:"select",options:M,description:"Posizionamento della modale",table:{defaultValue:{summary:void 0}}},scrollable:{control:"boolean",description:"Abilita scroll interno al body",table:{defaultValue:{summary:"false"}}},"static-backdrop":{control:"boolean",description:"Disabilita chiusura su click backdrop",table:{defaultValue:{summary:"false"}}},"hide-close-button":{control:"boolean",description:"Nasconde il pulsante di chiusura"},"close-button-placement":{control:"select",options:["header","backdrop"],description:"Posizione del pulsante di chiusura: `header` (default) o `backdrop`",table:{defaultValue:{summary:"header"}}},variant:{control:"select",options:L,description:"Variante della modale",table:{defaultValue:{summary:void 0}}},"close-label":{control:"text",description:"Etichetta accessibile per il pulsante di chiusura",table:{defaultValue:{summary:"Chiudi finestra modale"}}},"disable-animation":{control:"boolean",description:"Disabilita animazione fade"},"footer-shadow":{control:"boolean",description:"Ombra sul footer per contenuti lunghi",table:{defaultValue:{summary:"false"}}},triggerLabel:{table:{disable:!0}},bodyContent:{table:{disable:!0}}}},n={name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},render:e=>i`
    <it-modal
      ?hide-close-button="${e["hide-close-button"]}"
      ?disable-animation="${e["disable-animation"]}"
      size="${k(e.size||void 0)}"
      position="${e.position}"
      variant="${k(e.variant||void 0)}"
      ?scrollable="${e.scrollable}"
      ?static-backdrop="${e["static-backdrop"]}"
      ?footer-shadow="${e["footer-shadow"]}"
      close-label="${e["close-label"]}"
      close-button-placement="${e["close-button-placement"]}"
      modal-title="${e["modal-title"]}"
      modal-description="${e["modal-description"]}"
      custom-header="${e["custom-header"]}"
    >
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">${e["modal-title"]}</span>
      <span slot="description">${e["modal-description"]}</span>
      <p slot="content">${e.bodyContent}</p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},l={name:"Con pulsante di chiusura",render:()=>i`
    <div class="d-flex gap-4">
      <it-modal close-label="Chiudi finestra modale" modal-description="Descrizione della modale">
        <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
        <span slot="header">Titolo modale</span>
        <p slot="content">Testo che descrive lo scopo della modale e quali sono le azioni richieste all'utente.</p>
        <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
        <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
      </it-modal>
      <it-modal hide-close-button>
        <it-button variant="primary" slot="trigger">Lancia la demo della modale senza close button</it-button>
        <span slot="header">Titolo modale</span>
        <p slot="content">Testo che descrive lo scopo della modale e quali sono le azioni richieste all'utente.</p>
        <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
        <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
      </it-modal>
    </div>
  `},r={name:"Con icona",render:()=>i`
    <it-modal variant="alert" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <it-icon slot="header-icon" name="it-warning-circle" size="lg" color="warning"></it-icon>
      <span slot="header">Questo è un messaggio di notifica</span>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},s={name:"Modale con footer personalizzato",render:()=>i`
    <it-modal close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Con footer personalizzato</span>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <div slot="footer" class="d-flex justify-content-between gap-2 align-items-center" style="width:100%;">
        <a href="#">Link di supporto</a>
        <div class="d-flex justify-content-end  gap-2">
          <it-button variant="outline-primary" @click="${t}">Annulla</it-button>
          <it-button variant="primary" @click="${t}">Conferma</it-button>
        </div>
      </div>
    </it-modal>
  `},u={name:"Modale con elementi form",render:()=>i`
    <it-modal close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Seleziona un'opzione dal form</span>
      <div slot="content">
        <it-radio-group name="gruppo1">
          <span slot="label">Esempio interattivo</span>
          <it-radio id="radio1" value="opzione1">
            <span slot="label">Radio di esempio 1</span>
          </it-radio>
          <it-radio id="radio2" value="opzione2">
            <span slot="label">Radio di esempio 2</span>
          </it-radio>
          <it-radio id="radio3" value="opzione3">
            <span slot="label">Radio di esempio 3</span>
          </it-radio>
        </it-radio-group>
      </div>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},d={name:"Modale con Link List",render:()=>i`
    <it-modal variant="link-list" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span
      >
      <div class="link-list-wrapper" slot="content">
        <ul class="link-list">
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 1</span>
            </a>
          </li>
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 2</span>
            </a>
          </li>
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 3</span>
            </a>
          </li>
        </ul>
      </div>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},c={render:()=>i`
    <div class="d-flex gap-3">
      <it-modal variant="popconfirm">
        <it-button variant="primary" slot="trigger">Popconfirm basico</it-button>
        <p slot="content">Breve messaggio di conferma inserito nella modale</p>
        <it-button slot="footer" variant="outline-primary" @click="${t}">Azione 1</it-button>
        <it-button slot="footer" variant="primary" @click="${t}">Azione 2</it-button>
      </it-modal>

      <it-modal variant="popconfirm">
        <it-button variant="primary" slot="trigger">Popconfirm con header</it-button>
        <span slot="header">Titolo modale</span>
        <p slot="content">Breve messaggio di conferma inserito nella modale</p>
        <it-button slot="footer" variant="outline-primary" @click="${t}">Azione 1</it-button>
        <it-button slot="footer" variant="primary" @click="${t}">Azione 2</it-button>
      </it-modal>
    </div>
  `},m={parameters:{docs:{story:{iframeHeight:600}}},name:"Scroll di contenuti lunghi",render:()=>i`
    <it-modal footer-shadow close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Scroll di contenuti lunghi</span>
      <div slot="content">
        ${Array(20).fill(0).map(()=>i`
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            `)}
      </div>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},p={parameters:{docs:{story:{iframeHeight:600}}},name:"Scroll interno alla modale",render:()=>i`
    <it-modal scrollable footer-shadow close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale con scroll interno</span>
      <div slot="content">
        ${Array(20).fill(0).map(()=>i`
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            `)}
      </div>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},b={name:"Centratura verticale",render:()=>i`
    <it-modal position="center" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Centratura verticale</span>
      <div slot="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},g={parameters:{docs:{story:{iframeHeight:600}}},name:"Allineamento a sinistra",render:()=>i`
    <it-modal position="left" close-label="Chiudi finestra modale" scrollable>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale allineata a sinistra</span>
      <p slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
      </p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},f={parameters:{docs:{story:{iframeHeight:600}}},decorators:[e=>i` <div style="display:flex; height:100%; align-items:center;">${e()}</div> `],name:"Allineamento a destra",render:()=>i`
    <it-modal position="right" close-label="Chiudi finestra modale" scrollable>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale allineata a destra</span>
      <p slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},v={parameters:{docs:{story:{iframeHeight:600}}},name:"Dimensioni opzionali",render:()=>i`
    <div class="d-flex gap-3 flex-wrap">
      <it-modal size="sm" close-label="Chiudi finestra modale">
        <it-button slot="trigger" variant="primary">Modale piccola</it-button>
        <span slot="header">Modale piccola</span>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
          ultricies sed. In hac habitasse platea dictumst. Ut placerat ligula sed tincidunt dictum. Pellentesque dapibus
          nisl vel varius dignissim. Aliquam leo ligula, dapibus vitae porttitor sed, laoreet in massa. Aliquam interdum
          sollicitudin libero, consectetur lacinia enim aliquet pretium. Vestibulum sit amet ornare velit, ac efficitur
          nisi. In leo mauris, ultrices in turpis sit amet, tempus placerat neque. Cras in dolor sit amet ante pharetra
          commodo. Aliquam cursus euismod velit, ut condimentum ipsum imperdiet ac..
        </p>
        <it-button slot="footer" variant="primary" @click="${t}">Chiudi</it-button>
      </it-modal>

      <it-modal size="lg" close-label="Chiudi finestra modale">
        <it-button slot="trigger" variant="primary">Modale grande</it-button>
        <span slot="header">Modale grande</span>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
          ultricies sed. In hac habitasse platea dictumst. Ut placerat ligula sed tincidunt dictum. Pellentesque dapibus
          nisl vel varius dignissim. Aliquam leo ligula, dapibus vitae porttitor sed, laoreet in massa. Aliquam interdum
          sollicitudin libero, consectetur lacinia enim aliquet pretium. Vestibulum sit amet ornare velit, ac efficitur
          nisi. In leo mauris, ultrices in turpis sit amet, tempus placerat neque. Cras in dolor sit amet ante pharetra
          commodo. Aliquam cursus euismod velit, ut condimentum ipsum imperdiet ac.
        </p>
        <it-button slot="footer" variant="primary" @click="${t}">Chiudi</it-button>
      </it-modal>

      <it-modal size="xl" close-label="Chiudi finestra modale">
        <it-button slot="trigger" variant="primary">Modale molto grande</it-button>
        <span slot="header">Modale molto grande</span>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
          ultricies sed. In hac habitasse platea dictumst. Ut placerat ligula sed tincidunt dictum. Pellentesque dapibus
          nisl vel varius dignissim. Aliquam leo ligula, dapibus vitae porttitor sed, laoreet in massa. Aliquam interdum
          sollicitudin libero, consectetur lacinia enim aliquet pretium. Vestibulum sit amet ornare velit, ac efficitur
          nisi. In leo mauris, ultrices in turpis sit amet, tempus placerat neque. Cras in dolor sit amet ante pharetra
          commodo. Aliquam cursus euismod velit, ut condimentum ipsum imperdiet ac.
        </p>
        <it-button slot="footer" variant="primary" @click="${t}">Chiudi</it-button>
      </it-modal>
    </div>
  `},h={name:"Backdrop statico",render:()=>i`
    <it-modal static-backdrop close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary">Apri modale con backdrop statico</it-button>
      <span slot="header">Modale con backdrop statico</span>
      <p slot="content">Questa modale non si chiude cliccando sullo sfondo.</p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},y={name:"Rimuovere l’animazione",render:()=>i`
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary">Apri modale senza animazione</it-button>
      <span slot="header">Modale senza animazione</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},q={name:"Attivazione manuale via JS",decorators:[e=>i` <div style="display:flex; height:100%; align-items:center; gap:2rem;">${e()}</div> `],parameters:{docs:{source:{excludeDecorators:!0,code:`
        <it-modal disable-animation close-label="Chiudi finestra modale">
          <it-button slot="trigger" variant="primary">Modale con apertura manuale (show)</it-button>
          <span slot="header">Modale con apertura manuale</span>
          <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
          <it-button slot="footer" variant="outline-primary">Annulla</it-button>
          <it-button slot="footer" variant="primary">Conferma</it-button>
        </it-modal>
        <it-modal disable-animation close-label="Chiudi finestra modale">
          <it-button slot="trigger" variant="primary">Modale con apertura manuale (toggle)</it-button
          >
          <span slot="header">Modale con toggle manuale</span>
          <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
          <it-button slot="footer" variant="outline-primary">Annulla</it-button>
          <it-button slot="footer" variant="primary">Conferma</it-button>
        </it-modal>
        <script>
          // Script di esempio per mostrare come attivare la modale via JS utilizzando i metodi show(), hide() e toggle()
          const modals = document.querySelectorAll('it-modal');
          const [modalShow, modalToggle] = modals;

          const openModal = (event) => {
            const el = event.currentTarget;
            const modal = el.closest('it-modal');
            console.log('openModal -> modal', modal);
            modal?.show();
          };
          const closeModal = (event) => {
            const el = event.currentTarget;
            const modal = el.closest('it-modal');
            console.log('closeModal -> modal', modal);
            modal?.hide();
          };
          const toggleModal = (event) => {
            const el = event.currentTarget;
            const modal = el.closest('it-modal');
            console.log('toggleModal -> modal', modal);
            modal?.toggle();
          };

          // Assegna gli event listener ai bottoni di trigger e footer
          modalShow.querySelector('[slot="trigger"]').addEventListener('click', openModal);
          modalShow.querySelectorAll('[slot="footer"] it-button').forEach((btn) => btn.addEventListener('click', closeModal));

          modalToggle.querySelector('[slot="trigger"]').addEventListener('click', toggleModal);
          modalToggle.querySelectorAll('[slot="footer"] it-button').forEach((btn) => btn.addEventListener('click', toggleModal));
        <\/script>
        `}}},render:()=>i`
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary" @click="${x}">Modale con apertura manuale (show)</it-button>
      <span slot="header">Modale con apertura manuale</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary" @click="${C}"
        >Modale con apertura manuale (toggle)</it-button
      >
      <span slot="header">Modale con toggle manuale</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="${C}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${C}">Conferma</it-button>
    </it-modal>
  `},z={name:"Chiusura con logica personalizzata",parameters:{docs:{description:{story:"L'evento `it-modal-close` è **cancelable**. Chiamando `event.preventDefault()` puoi intercettare la chiusura, eseguire una logica personalizzata — in questo esempio viene mostrato un messaggio informativo — e poi richiamare `hide()` per chiudere effettivamente la modale. Lo stesso schema si applica a `it-modal-open`."},source:{code:`<it-modal id="modal-custom-close">
  <it-button variant="primary" slot="trigger">Apri modale</it-button>
  <span slot="header">Chiusura con logica personalizzata</span>
  <p slot="content">Prova a chiudere la modale: verrà eseguita una logica personalizzata prima della chiusura effettiva.</p>
  <it-button slot="footer" variant="primary" id="modal-custom-close-footer">Chiudi</it-button>
</it-modal>

<div id="modal-close-alert" class="alert alert-info" role="alert" style="display:none">
  <strong>Operazione completata.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

<script type="module">
  const modal = document.getElementById('modal-custom-close');
  const alertEl = document.getElementById('modal-close-alert');
  let _closing = false;

  modal.addEventListener('it-modal-close', (e) => {
    if (_closing) return;
    e.preventDefault();
    alertEl.style.display = '';
    _closing = true;
    modal.hide();
    _closing = false;
  });

  document.getElementById('modal-custom-close-footer')
    ?.addEventListener('click', () => modal.hide());
<\/script>`}}},render:()=>{let e=!1;return i`
      <it-modal
        id="modal-custom-close"
        @it-modal-close=${a=>{if(e)return;a.preventDefault();const o=document.getElementById("modal-close-alert");o&&(o.style.display=""),e=!0,a.currentTarget.hide(),e=!1}}
      >
        <it-button variant="primary" slot="trigger">Apri modale</it-button>
        <span slot="header">Chiusura con logica personalizzata</span>
        <p slot="content">
          Prova a chiudere la modale: verrà eseguita una logica personalizzata prima della chiusura effettiva.
        </p>
        <it-button
          slot="footer"
          variant="primary"
          @click=${a=>{a.currentTarget.closest("it-modal")?.hide()}}
          >Chiudi</it-button
        >
      </it-modal>
      <div id="modal-close-alert" class="alert alert-info" role="alert" style="display:none">
        <strong>Operazione completata.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    `}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  },
  render: args => html\`
    <it-modal
      ?hide-close-button="\${args['hide-close-button']}"
      ?disable-animation="\${args['disable-animation']}"
      size="\${ifDefined(args.size || undefined)}"
      position="\${args.position}"
      variant="\${ifDefined(args.variant || undefined)}"
      ?scrollable="\${args.scrollable}"
      ?static-backdrop="\${args['static-backdrop']}"
      ?footer-shadow="\${args['footer-shadow']}"
      close-label="\${args['close-label']}"
      close-button-placement="\${args['close-button-placement']}"
      modal-title="\${args['modal-title']}"
      modal-description="\${args['modal-description']}"
      custom-header="\${args['custom-header']}"
    >
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">\${args['modal-title']}</span>
      <span slot="description">\${args['modal-description']}</span>
      <p slot="content">\${args.bodyContent}</p>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Con pulsante di chiusura',
  render: () => html\`
    <div class="d-flex gap-4">
      <it-modal close-label="Chiudi finestra modale" modal-description="Descrizione della modale">
        <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
        <span slot="header">Titolo modale</span>
        <p slot="content">Testo che descrive lo scopo della modale e quali sono le azioni richieste all'utente.</p>
        <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
        <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
      </it-modal>
      <it-modal hide-close-button>
        <it-button variant="primary" slot="trigger">Lancia la demo della modale senza close button</it-button>
        <span slot="header">Titolo modale</span>
        <p slot="content">Testo che descrive lo scopo della modale e quali sono le azioni richieste all'utente.</p>
        <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
        <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
      </it-modal>
    </div>
  \`
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Con icona',
  render: () => html\`
    <it-modal variant="alert" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <it-icon slot="header-icon" name="it-warning-circle" size="lg" color="warning"></it-icon>
      <span slot="header">Questo è un messaggio di notifica</span>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Modale con footer personalizzato',
  render: () => html\`
    <it-modal close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Con footer personalizzato</span>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <div slot="footer" class="d-flex justify-content-between gap-2 align-items-center" style="width:100%;">
        <a href="#">Link di supporto</a>
        <div class="d-flex justify-content-end  gap-2">
          <it-button variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
          <it-button variant="primary" @click="\${closeModal}">Conferma</it-button>
        </div>
      </div>
    </it-modal>
  \`
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Modale con elementi form',
  render: () => html\`
    <it-modal close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Seleziona un'opzione dal form</span>
      <div slot="content">
        <it-radio-group name="gruppo1">
          <span slot="label">Esempio interattivo</span>
          <it-radio id="radio1" value="opzione1">
            <span slot="label">Radio di esempio 1</span>
          </it-radio>
          <it-radio id="radio2" value="opzione2">
            <span slot="label">Radio di esempio 2</span>
          </it-radio>
          <it-radio id="radio3" value="opzione3">
            <span slot="label">Radio di esempio 3</span>
          </it-radio>
        </it-radio-group>
      </div>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Modale con Link List',
  render: () => html\`
    <it-modal variant="link-list" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span
      >
      <div class="link-list-wrapper" slot="content">
        <ul class="link-list">
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 1</span>
            </a>
          </li>
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 2</span>
            </a>
          </li>
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 3</span>
            </a>
          </li>
        </ul>
      </div>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <div class="d-flex gap-3">
      <it-modal variant="popconfirm">
        <it-button variant="primary" slot="trigger">Popconfirm basico</it-button>
        <p slot="content">Breve messaggio di conferma inserito nella modale</p>
        <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Azione 1</it-button>
        <it-button slot="footer" variant="primary" @click="\${closeModal}">Azione 2</it-button>
      </it-modal>

      <it-modal variant="popconfirm">
        <it-button variant="primary" slot="trigger">Popconfirm con header</it-button>
        <span slot="header">Titolo modale</span>
        <p slot="content">Breve messaggio di conferma inserito nella modale</p>
        <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Azione 1</it-button>
        <it-button slot="footer" variant="primary" @click="\${closeModal}">Azione 2</it-button>
      </it-modal>
    </div>
  \`
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: 600
      }
    }
  },
  name: 'Scroll di contenuti lunghi',
  render: () => html\`
    <it-modal footer-shadow close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Scroll di contenuti lunghi</span>
      <div slot="content">
        \${Array(20).fill(0).map(() => html\`
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            \`)}
      </div>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: 600
      }
    }
  },
  name: 'Scroll interno alla modale',
  render: () => html\`
    <it-modal scrollable footer-shadow close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale con scroll interno</span>
      <div slot="content">
        \${Array(20).fill(0).map(() => html\`
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            \`)}
      </div>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Centratura verticale',
  render: () => html\`
    <it-modal position="center" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Centratura verticale</span>
      <div slot="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: 600
      }
    }
  },
  name: 'Allineamento a sinistra',
  render: () => html\`
    <it-modal position="left" close-label="Chiudi finestra modale" scrollable>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale allineata a sinistra</span>
      <p slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..
      </p>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: 600
      }
    }
  },
  decorators: [story => html\` <div style="display:flex; height:100%; align-items:center;">\${story()}</div> \`],
  name: 'Allineamento a destra',
  render: () => html\`
    <it-modal position="right" close-label="Chiudi finestra modale" scrollable>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale allineata a destra</span>
      <p slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        iframeHeight: 600
      }
    }
  },
  name: 'Dimensioni opzionali',
  render: () => html\`
    <div class="d-flex gap-3 flex-wrap">
      <it-modal size="sm" close-label="Chiudi finestra modale">
        <it-button slot="trigger" variant="primary">Modale piccola</it-button>
        <span slot="header">Modale piccola</span>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
          ultricies sed. In hac habitasse platea dictumst. Ut placerat ligula sed tincidunt dictum. Pellentesque dapibus
          nisl vel varius dignissim. Aliquam leo ligula, dapibus vitae porttitor sed, laoreet in massa. Aliquam interdum
          sollicitudin libero, consectetur lacinia enim aliquet pretium. Vestibulum sit amet ornare velit, ac efficitur
          nisi. In leo mauris, ultrices in turpis sit amet, tempus placerat neque. Cras in dolor sit amet ante pharetra
          commodo. Aliquam cursus euismod velit, ut condimentum ipsum imperdiet ac..
        </p>
        <it-button slot="footer" variant="primary" @click="\${closeModal}">Chiudi</it-button>
      </it-modal>

      <it-modal size="lg" close-label="Chiudi finestra modale">
        <it-button slot="trigger" variant="primary">Modale grande</it-button>
        <span slot="header">Modale grande</span>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
          ultricies sed. In hac habitasse platea dictumst. Ut placerat ligula sed tincidunt dictum. Pellentesque dapibus
          nisl vel varius dignissim. Aliquam leo ligula, dapibus vitae porttitor sed, laoreet in massa. Aliquam interdum
          sollicitudin libero, consectetur lacinia enim aliquet pretium. Vestibulum sit amet ornare velit, ac efficitur
          nisi. In leo mauris, ultrices in turpis sit amet, tempus placerat neque. Cras in dolor sit amet ante pharetra
          commodo. Aliquam cursus euismod velit, ut condimentum ipsum imperdiet ac.
        </p>
        <it-button slot="footer" variant="primary" @click="\${closeModal}">Chiudi</it-button>
      </it-modal>

      <it-modal size="xl" close-label="Chiudi finestra modale">
        <it-button slot="trigger" variant="primary">Modale molto grande</it-button>
        <span slot="header">Modale molto grande</span>
        <p slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis felis tortor, ultrices congue orci
          ultricies sed. In hac habitasse platea dictumst. Ut placerat ligula sed tincidunt dictum. Pellentesque dapibus
          nisl vel varius dignissim. Aliquam leo ligula, dapibus vitae porttitor sed, laoreet in massa. Aliquam interdum
          sollicitudin libero, consectetur lacinia enim aliquet pretium. Vestibulum sit amet ornare velit, ac efficitur
          nisi. In leo mauris, ultrices in turpis sit amet, tempus placerat neque. Cras in dolor sit amet ante pharetra
          commodo. Aliquam cursus euismod velit, ut condimentum ipsum imperdiet ac.
        </p>
        <it-button slot="footer" variant="primary" @click="\${closeModal}">Chiudi</it-button>
      </it-modal>
    </div>
  \`
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Backdrop statico',
  render: () => html\`
    <it-modal static-backdrop close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary">Apri modale con backdrop statico</it-button>
      <span slot="header">Modale con backdrop statico</span>
      <p slot="content">Questa modale non si chiude cliccando sullo sfondo.</p>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Rimuovere l’animazione',
  render: () => html\`
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary">Apri modale senza animazione</it-button>
      <span slot="header">Modale senza animazione</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...y.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Attivazione manuale via JS',
  decorators: [story => html\` <div style="display:flex; height:100%; align-items:center; gap:2rem;">\${story()}</div> \`],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
        code: \`
        <it-modal disable-animation close-label="Chiudi finestra modale">
          <it-button slot="trigger" variant="primary">Modale con apertura manuale (show)</it-button>
          <span slot="header">Modale con apertura manuale</span>
          <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
          <it-button slot="footer" variant="outline-primary">Annulla</it-button>
          <it-button slot="footer" variant="primary">Conferma</it-button>
        </it-modal>
        <it-modal disable-animation close-label="Chiudi finestra modale">
          <it-button slot="trigger" variant="primary">Modale con apertura manuale (toggle)</it-button
          >
          <span slot="header">Modale con toggle manuale</span>
          <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
          <it-button slot="footer" variant="outline-primary">Annulla</it-button>
          <it-button slot="footer" variant="primary">Conferma</it-button>
        </it-modal>
        <script>
          // Script di esempio per mostrare come attivare la modale via JS utilizzando i metodi show(), hide() e toggle()
          const modals = document.querySelectorAll('it-modal');
          const [modalShow, modalToggle] = modals;

          const openModal = (event) => {
            const el = event.currentTarget;
            const modal = el.closest('it-modal');
            console.log('openModal -> modal', modal);
            modal?.show();
          };
          const closeModal = (event) => {
            const el = event.currentTarget;
            const modal = el.closest('it-modal');
            console.log('closeModal -> modal', modal);
            modal?.hide();
          };
          const toggleModal = (event) => {
            const el = event.currentTarget;
            const modal = el.closest('it-modal');
            console.log('toggleModal -> modal', modal);
            modal?.toggle();
          };

          // Assegna gli event listener ai bottoni di trigger e footer
          modalShow.querySelector('[slot="trigger"]').addEventListener('click', openModal);
          modalShow.querySelectorAll('[slot="footer"] it-button').forEach((btn) => btn.addEventListener('click', closeModal));

          modalToggle.querySelector('[slot="trigger"]').addEventListener('click', toggleModal);
          modalToggle.querySelectorAll('[slot="footer"] it-button').forEach((btn) => btn.addEventListener('click', toggleModal));
        <\/script>
        \`
      }
    }
  },
  render: () => html\`
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary" @click="\${openModal}">Modale con apertura manuale (show)</it-button>
      <span slot="header">Modale con apertura manuale</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary" @click="\${toggleModal}"
        >Modale con apertura manuale (toggle)</it-button
      >
      <span slot="header">Modale con toggle manuale</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="\${toggleModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${toggleModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Chiusura con logica personalizzata',
  parameters: {
    docs: {
      description: {
        story: \`L'evento \\\`it-modal-close\\\` è **cancelable**. Chiamando \\\`event.preventDefault()\\\` puoi intercettare la chiusura, eseguire una logica personalizzata — in questo esempio viene mostrato un messaggio informativo — e poi richiamare \\\`hide()\\\` per chiudere effettivamente la modale. Lo stesso schema si applica a \\\`it-modal-open\\\`.\`
      },
      source: {
        code: \`<it-modal id="modal-custom-close">
  <it-button variant="primary" slot="trigger">Apri modale</it-button>
  <span slot="header">Chiusura con logica personalizzata</span>
  <p slot="content">Prova a chiudere la modale: verrà eseguita una logica personalizzata prima della chiusura effettiva.</p>
  <it-button slot="footer" variant="primary" id="modal-custom-close-footer">Chiudi</it-button>
</it-modal>

<div id="modal-close-alert" class="alert alert-info" role="alert" style="display:none">
  <strong>Operazione completata.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>

<script type="module">
  const modal = document.getElementById('modal-custom-close');
  const alertEl = document.getElementById('modal-close-alert');
  let _closing = false;

  modal.addEventListener('it-modal-close', (e) => {
    if (_closing) return;
    e.preventDefault();
    alertEl.style.display = '';
    _closing = true;
    modal.hide();
    _closing = false;
  });

  document.getElementById('modal-custom-close-footer')
    ?.addEventListener('click', () => modal.hide());
<\/script>\`
      }
    }
  },
  render: () => {
    let _closing = false;
    return html\`
      <it-modal
        id="modal-custom-close"
        @it-modal-close=\${(e: Event) => {
      if (_closing) return;
      e.preventDefault();
      const alertEl = document.getElementById('modal-close-alert');
      if (alertEl) alertEl.style.display = '';
      _closing = true;
      (e.currentTarget as HTMLElement & {
        hide(): void;
      }).hide();
      _closing = false;
    }}
      >
        <it-button variant="primary" slot="trigger">Apri modale</it-button>
        <span slot="header">Chiusura con logica personalizzata</span>
        <p slot="content">
          Prova a chiudere la modale: verrà eseguita una logica personalizzata prima della chiusura effettiva.
        </p>
        <it-button
          slot="footer"
          variant="primary"
          @click=\${(e: Event) => {
      (e.currentTarget as HTMLElement).closest<HTMLElement & {
        hide(): void;
      }>('it-modal')?.hide();
    }}
          >Chiudi</it-button
        >
      </it-modal>
      <div id="modal-close-alert" class="alert alert-info" role="alert" style="display:none">
        <strong>Operazione completata.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    \`;
  }
}`,...z.parameters?.docs?.source}}};const E=["EsempioInterattivo","ModaleBase","ConIcona","FooterCustom","ConForm","ConLinkList","Popconfirm","ScrollLungo","ScrollInterno","CentraturaVerticale","AllineamentoSinistra","AllineamentoDestra","DimensioniOpzionali","BackdropStatico","SenzaAnimazione","AttivazioneViaJS","ChiusuraConConferma"],D=Object.freeze(Object.defineProperty({__proto__:null,AllineamentoDestra:f,AllineamentoSinistra:g,AttivazioneViaJS:q,BackdropStatico:h,CentraturaVerticale:b,ChiusuraConConferma:z,ConForm:u,ConIcona:r,ConLinkList:d,DimensioniOpzionali:v,EsempioInterattivo:n,FooterCustom:s,ModaleBase:l,Popconfirm:c,ScrollInterno:p,ScrollLungo:m,SenzaAnimazione:y,__namedExportsOrder:E,default:A},Symbol.toStringTag,{value:"Module"}));export{g as A,h as B,u as C,v as D,n as E,s as F,l as M,c as P,D as S,r as a,d as b,m as c,p as d,b as e,f,y as g,q as h,z as i};
