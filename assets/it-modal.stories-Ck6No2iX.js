import{b as e,o as M}from"./iframe-C0TrFRga.js";const C=["sm","lg","xl"],$=["center","left","right"],z=["alert","popconfirm","link-list"],t=i=>{const o=i.currentTarget.closest("it-modal");console.log("closeModal -> modal",o),o?.hide()},x=i=>{const o=i.currentTarget.closest("it-modal");console.log("openModal -> modal",o),o?.show()},q=i=>{const o=i.currentTarget.closest("it-modal");console.log("toggleModal -> modal",o),o?.toggle()},L={title:"Componenti/Modal",component:"it-modal",tags:["alpha","a11y-ok","web-component"],parameters:{layout:"fullscreen",docs:{story:{inline:!1,iframeHeight:420}}},args:{"modal-title":"Titolo modale","modal-description":"Descrizione della modale",size:"",position:void 0,scrollable:!1,"static-backdrop":!1,"hide-close-button":!1,variant:"","close-label":"Chiudi finestra modale","disable-animation":!1,"footer-shadow":!1,triggerLabel:"Apri modale",bodyContent:"Contenuto della modale. Può includere testo, form, o qualsiasi altro elemento."},argTypes:{"modal-title":{control:"text",description:"Titolo della modale (usa slot `header` per contenuto custom)"},"modal-description":{control:"text",description:"Descrizione della modale (usa slot `description` per contenuto custom), verrrà inserita in un elemento visivamente nascosto per i lettori di schermo."},size:{control:"select",options:C,description:"Dimensione della modale",table:{defaultValue:{summary:void 0}}},position:{control:"select",options:$,description:"Posizionamento della modale",table:{defaultValue:{summary:void 0}}},scrollable:{control:"boolean",description:"Abilita scroll interno al body",table:{defaultValue:{summary:"false"}}},"static-backdrop":{control:"boolean",description:"Disabilita chiusura su click backdrop",table:{defaultValue:{summary:"false"}}},"hide-close-button":{control:"boolean",description:"Nasconde il pulsante di chiusura"},variant:{control:"select",options:z,description:"Variante della modale",table:{defaultValue:{summary:void 0}}},"close-label":{control:"text",description:"Etichetta accessibile per il pulsante di chiusura",table:{defaultValue:{summary:"Chiudi finestra modale"}}},"disable-animation":{control:"boolean",description:"Disabilita animazione fade"},"footer-shadow":{control:"boolean",description:"Ombra sul footer per contenuti lunghi",table:{defaultValue:{summary:"false"}}},triggerLabel:{table:{disable:!0}},bodyContent:{table:{disable:!0}}}},a={name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},render:i=>e`
    <it-modal
      ?hide-close-button="${i["hide-close-button"]}"
      ?disable-animation="${i["disable-animation"]}"
      size="${M(i.size||void 0)}"
      position="${i.position}"
      variant="${M(i.variant||void 0)}"
      ?scrollable="${i.scrollable}"
      ?static-backdrop="${i["static-backdrop"]}"
      ?footer-shadow="${i["footer-shadow"]}"
      close-label="${i["close-label"]}"
      modal-title="${i["modal-title"]}"
      modal-description="${i["modal-description"]}"
    >
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">${i["modal-title"]}</span>
      <span slot="description">${i["modal-description"]}</span>
      <p slot="content">${i.bodyContent}</p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},n={name:"Con pulsante di chiusura",render:()=>e`
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
  `},l={name:"Con icona",render:()=>e`
    <it-modal variant="alert" close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <it-icon slot="header-icon" name="it-warning-circle" size="lg" color="warning"></it-icon>
      <span slot="header">Questo è un messaggio di notifica</span>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},r={name:"Modale con footer personalizzato",render:()=>e`
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
  `},s={name:"Modale con elementi form",render:()=>e`
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
  `},u={name:"Modale con Link List",render:()=>e`
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
  `},d={render:()=>e`
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
  `},c={parameters:{docs:{story:{iframeHeight:600}}},name:"Scroll di contenuti lunghi",render:()=>e`
    <it-modal footer-shadow close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Scroll di contenuti lunghi</span>
      <div slot="content">
        ${Array(20).fill(0).map(()=>e`
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            `)}
      </div>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},m={parameters:{docs:{story:{iframeHeight:600}}},name:"Scroll interno alla modale",render:()=>e`
    <it-modal scrollable footer-shadow close-label="Chiudi finestra modale">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">Modale con scroll interno</span>
      <div slot="content">
        ${Array(20).fill(0).map(()=>e`
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            `)}
      </div>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},p={name:"Centratura verticale",render:()=>e`
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
  `},b={parameters:{docs:{story:{iframeHeight:600}}},name:"Allineamento a sinistra",render:()=>e`
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
  `},g={parameters:{docs:{story:{iframeHeight:600}}},decorators:[i=>e` <div style="display:flex; height:100%; align-items:center;">${i()}</div> `],name:"Allineamento a destra",render:()=>e`
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
  `},f={parameters:{docs:{story:{iframeHeight:600}}},name:"Dimensioni opzionali",render:()=>e`
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
  `},v={name:"Backdrop statico",render:()=>e`
    <it-modal static-backdrop close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary">Apri modale con backdrop statico</it-button>
      <span slot="header">Modale con backdrop statico</span>
      <p slot="content">Questa modale non si chiude cliccando sullo sfondo.</p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},h={name:"Rimuovere l’animazione",render:()=>e`
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary">Apri modale senza animazione</it-button>
      <span slot="header">Modale senza animazione</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
  `},y={name:"Attivazione manuale via JS",decorators:[i=>e` <div style="display:flex; height:100%; align-items:center; gap:2rem;">${i()}</div> `],parameters:{docs:{source:{excludeDecorators:!0,code:`
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
        `}}},render:()=>e`
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary" @click="${x}">Modale con apertura manuale (show)</it-button>
      <span slot="header">Modale con apertura manuale</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="${t}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${t}">Conferma</it-button>
    </it-modal>
    <it-modal disable-animation close-label="Chiudi finestra modale">
      <it-button slot="trigger" variant="primary" @click="${q}"
        >Modale con apertura manuale (toggle)</it-button
      >
      <span slot="header">Modale con toggle manuale</span>
      <p slot="content">Questa modale appare immediatamente senza animazione di dissolvenza.</p>
      <it-button slot="footer" variant="outline-primary" @click="${q}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${q}">Conferma</it-button>
    </it-modal>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
      modal-title="\${args['modal-title']}"
      modal-description="\${args['modal-description']}"
    >
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <span slot="header">\${args['modal-title']}</span>
      <span slot="description">\${args['modal-description']}</span>
      <p slot="content">\${args.bodyContent}</p>
      <it-button slot="footer" variant="outline-primary" @click="\${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="\${closeModal}">Conferma</it-button>
    </it-modal>
  \`
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const A=["EsempioInterattivo","ModaleBase","ConIcona","FooterCustom","ConForm","ConLinkList","Popconfirm","ScrollLungo","ScrollInterno","CentraturaVerticale","AllineamentoSinistra","AllineamentoDestra","DimensioniOpzionali","BackdropStatico","SenzaAnimazione","AttivazioneViaJS"],E=Object.freeze(Object.defineProperty({__proto__:null,AllineamentoDestra:g,AllineamentoSinistra:b,AttivazioneViaJS:y,BackdropStatico:v,CentraturaVerticale:p,ConForm:s,ConIcona:l,ConLinkList:u,DimensioniOpzionali:f,EsempioInterattivo:a,FooterCustom:r,ModaleBase:n,Popconfirm:d,ScrollInterno:m,ScrollLungo:c,SenzaAnimazione:h,__namedExportsOrder:A,default:L},Symbol.toStringTag,{value:"Module"}));export{b as A,v as B,s as C,f as D,a as E,r as F,n as M,d as P,E as S,l as a,u as b,c,m as d,p as e,g as f,h as g,y as h};
