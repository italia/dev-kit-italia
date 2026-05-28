import{b as o,o as i}from"./iframe-CObMHJH1.js";import{S as F}from"./formControlReusableStories-DtIrioM9.js";const D={$code:"it",$name:"Italiano",$dir:"ltr",upload_label:"Carica file",upload_file_list_label:"File caricati",upload_remove_loading:"Annulla caricamento file {name}",upload_remove_done:"Rimuovi file {name}",upload_remove_error:"Riprova caricamento file {name}",upload_status_loading:"Caricamento file:",upload_status_success:"File caricato:",upload_status_error:"Errore caricamento file:",upload_gallery_label:"Carica foto",upload_avatar_label:"Aggiorna foto dell'avatar",upload_avatar_overlay_label:"Aggiorna",upload_dd_title:"Trascina il file per caricarlo",upload_dd_description:"oppure selezionalo dal dispositivo",upload_dd_select:"selezionalo dal dispositivo",upload_dd_progress_label:"Avanzamento caricamento",upload_dd_status_dragover:"File pronto per il rilascio",upload_dd_status_loading:"Caricamento in corso...",upload_dd_status_success:"Caricamento completato",validityRequired:"Seleziona almeno un file."},g=["https://picsum.photos/seed/upload1/128/128","https://picsum.photos/seed/upload2/128/128","https://picsum.photos/seed/upload3/128/128","https://picsum.photos/seed/upload4/128/128"];class I extends HTMLElement{connectedCallback(){setTimeout(async()=>{const e=this.querySelector("it-upload");if(!e)return;await e.updateComplete;const t=e.addFile(new File(["x".repeat(71303168)],"nome-file-01.jpg",{type:"image/jpeg"})),v=e.addFile(new File(["x".repeat(9437184)],"nome-file-02-nome-file-lungo-per-ellissi.jpg",{type:"image/jpeg"})),x=e.addFile(new File(["x".repeat(3145728)],"nome-file-03.jpg",{type:"image/jpeg"})),E=e.addFile(new File(["x".repeat(2097152)],"nome-file-04.jpg",{type:"image/jpeg"}));e.setFileStatus(t,"success"),e.setFileStatus(v,"success"),e.setFileStatus(x,"loading",43),e.setFileStatus(E,"error"),e.setFileThumbnail(t,g[0]),e.setFileThumbnail(v,g[1]),e.setFileThumbnail(x,g[2]),e.setFileThumbnail(E,g[3])},0)}}customElements.get("story-upload-file-states")||customElements.define("story-upload-file-states",I);class T extends HTMLElement{connectedCallback(){setTimeout(async()=>{const e=this.querySelector("it-upload-drag-drop");e&&(e._fileName="nome_file.pdf",e._fileWeight="3.7 MB",e._fileType="PDF",e.start())},0)}}customElements.get("story-upload-dd-loading")||customElements.define("story-upload-dd-loading",T);class A extends HTMLElement{connectedCallback(){setTimeout(async()=>{const e=this.querySelector("it-upload-drag-drop");e&&(e._fileName="nome_file.pdf",e._fileWeight="3.7 MB",e._fileType="PDF",e.start(),e.progress(1),e.success())},0)}}customElements.get("story-upload-dd-success")||customElements.define("story-upload-dd-success",A);class _ extends HTMLElement{connectedCallback(){const e=document.createElement("button");e.type="button",e.textContent="Simula Upload",e.className="btn btn-primary mb-3",e.addEventListener("click",()=>this._simulate()),this.prepend(e),this.addEventListener("it-dd-drop",t=>{t.preventDefault(),this._simulate()})}disconnectedCallback(){clearInterval(this._timer)}_simulate(){const e=this.querySelector("it-upload-drag-drop");if(!e)return;clearInterval(this._timer),e.reset(),e._fileName="nome_file.pdf",e._fileWeight="3.7 MB",e._fileType="PDF",e.start();let t=0;this._timer=setInterval(()=>{t=Math.min(1,t+.1),e.progress(t),t>=1&&(clearInterval(this._timer),setTimeout(()=>e.success(),500))},300)}}customElements.get("story-upload-dd-interactive")||customElements.define("story-upload-dd-interactive",_);class q extends HTMLElement{connectedCallback(){setTimeout(async()=>{const e=this.querySelector("it-upload");if(!e)return;await e.updateComplete;const t=e.addFile(new File(["x"],"foto-01.jpg",{type:"image/jpeg"})),v=e.addFile(new File(["x"],"foto-02.jpg",{type:"image/jpeg"}));e.setFileThumbnail(t,g[0]),e.setFileThumbnail(v,g[1]),e.setFileStatus(t,"success"),e.setFileStatus(v,"success")},0)}}customElements.get("story-upload-gallery-prefilled")||customElements.define("story-upload-gallery-prefilled",q);const z=a=>o`
  <it-upload
    name="${i(a.name||void 0)}"
    ?multiple="${a.multiple}"
    accept="${i(a.accept||void 0)}"
    ?image-preview="${a["image-preview"]}"
    variant="${i(a.variant||void 0)}"
    support-text="${i(a["support-text"]||void 0)}"
    ?disabled="${a.disabled}"
    ?required="${a.required}"
    ?auto-success="${a["auto-success"]}"
  >
    <span slot="label">${D.upload_label}</span>
  </it-upload>
`,S=a=>o`
  <it-upload-avatar
    src="${i(a.src||void 0)}"
    alt="${i(a.alt||void 0)}"
    size="${i(a.size||void 0)}"
    name="${i(a.name||void 0)}"
    ?disabled="${a.disabled}"
    ?required="${a.required}"
  ></it-upload-avatar>
`,U=a=>o`
  <it-upload-drag-drop
    accept="${i(a.accept||void 0)}"
    name="${i(a.name||void 0)}"
    illustration="${i(a.illustration||void 0)}"
    ?disabled="${a.disabled}"
    ?required="${a.required}"
  ></it-upload-drag-drop>
`,w={title:"Componenti/Form/Upload",tags:["a11y-ok","web-component"],component:"it-upload",parameters:{docs:{description:{component:`
Elementi dei form dedicati al caricamento file.

Il componente Upload consente l'upload di file attraverso diverse modalità: lista verticale, anteprima immagini, gallery, avatar, o drag & drop.

[Approfondisci come e quando usare il componente Upload](https://designers.italia.it/design-system/componenti/upload/)
`}}}},f={name:"Esempio interattivo",tags:["!autodocs","!dev"],args:{variant:"default",multiple:!1,"image-preview":!1,accept:"","support-text":"",disabled:!1,required:!1,"auto-success":!0},argTypes:{variant:{description:"Layout del componente.",control:{type:"select"},options:["default","gallery"],table:{defaultValue:{summary:"default"}}},multiple:{description:"Consente la selezione multipla di file.",control:"boolean",table:{defaultValue:{summary:"false"}}},"image-preview":{description:"Mostra un'anteprima thumbnail per le immagini caricate.",control:"boolean",table:{defaultValue:{summary:"false"}}},accept:{description:'Tipi di file accettati, es. "image/*,.pdf".',control:"text"},"support-text":{description:"Testo di supporto visualizzato sotto il pulsante.",control:"text"},disabled:{description:"Disabilita il componente.",control:"boolean",table:{defaultValue:{summary:"false"}}},required:{description:"Rende il campo obbligatorio nella validazione del form.",control:"boolean",table:{defaultValue:{summary:"false"}}},"auto-success":{description:"I file passano automaticamente allo stato success appena selezionati.",control:"boolean",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{canvas:{sourceState:"closed"}}},render:a=>z(a)},y={name:"Esempio interattivo Avatar",tags:["!autodocs","!dev"],args:{src:"https://randomuser.me/api/portraits/men/21.jpg",alt:"Mario Rossi",size:"xxl",disabled:!1,required:!1},argTypes:{src:{description:"URL dell'immagine avatar corrente.",control:"text"},alt:{description:"Testo alternativo per l'immagine.",control:"text"},size:{description:"Dimensione del componente.",control:{type:"select"},options:["xl","xxl"],table:{defaultValue:{summary:"xxl"}}},disabled:{description:"Disabilita il componente.",control:"boolean",table:{defaultValue:{summary:"false"}}},required:{description:"Rende il campo obbligatorio nella validazione del form. Se src è già valorizzato, il requisito è soddisfatto.",control:"boolean",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{canvas:{sourceState:"closed"}}},render:a=>S(a)},h={name:"Esempio interattivo Drag & Drop",tags:["!autodocs","!dev"],args:{accept:"",illustration:"",disabled:!1,required:!1},argTypes:{accept:{description:'Tipi di file accettati, es. "image/*,.pdf".',control:"text"},illustration:{description:"URL illustrazione personalizzata. Se omesso viene usata quella predefinita.",control:"text"},disabled:{description:"Disabilita il componente.",control:"boolean",table:{defaultValue:{summary:"false"}}},required:{description:"Rende il campo obbligatorio nella validazione del form.",control:"boolean",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{canvas:{sourceState:"closed"}}},render:a=>U(a)},l={name:"Upload con lista di file",parameters:{docs:{description:{story:"Upload base che mostra i file caricati in una lista verticale con icone sostituite da thumbnail (image-preview)."},source:{language:"html",code:`
<it-upload name="upload-list" multiple accept="image/*" image-preview auto-success>
  <span slot="label">Carica file</span>
</it-upload>

<script>
  const uploadList = document.querySelector('it-upload[name="upload-list"]');

  // Ascolta le modifiche alla lista dei file
  uploadList.addEventListener('it-change', (event) => {
    console.log('File aggiornati:', event.detail.files);
  });
<\/script>
        `}}},render:()=>o`
    ${z({name:"upload-list",multiple:!0,accept:"image/*","image-preview":!0,"auto-success":!0})}
  `},r={name:"Upload con lista di file - stati",parameters:{docs:{description:{story:"Esempio con file pre-caricati in tutti gli stati supportati: `success` (caricato), `loading` al 43% di avanzamento, `error` (fallito), e `loading` a 0% (avvio). I file in stato `success` mostrano un'icona di conferma e un pulsante X separato: l'utente può rimuoverli anche dopo il caricamento, senza dover ricaricare il form."},source:{language:"html",code:`
<it-upload id="upload-states" multiple image-preview name="upload-states">
  <span slot="label">Carica file</span>
</it-upload>

<script>
  const upload = document.getElementById('upload-states');

  // 1. Aggiungi i file (genera gli ID interni)
  const id1 = upload.addFile(new File([''], 'nome-file-01.jpg', { type: 'image/jpeg' }));
  const id2 = upload.addFile(new File([''], 'nome-file-02-nome-file-lungo-per-ellissi.jpg', { type: 'image/jpeg' }));
  const id3 = upload.addFile(new File([''], 'nome-file-03.jpg', { type: 'image/jpeg' }));
  const id4 = upload.addFile(new File([''], 'nome-file-04.jpg', { type: 'image/jpeg' }));

  // 2. Imposta lo stato e il progresso
  upload.setFileStatus(id1, 'success');
  upload.setFileStatus(id2, 'success');
  upload.setFileStatus(id3, 'loading', 43); // 43%
  upload.setFileStatus(id4, 'error');

  // 3. Imposta le thumbnail
  upload.setFileThumbnail(id1, 'https://picsum.photos/seed/upload1/128/128');
  upload.setFileThumbnail(id2, 'https://picsum.photos/seed/upload2/128/128');
  upload.setFileThumbnail(id3, 'https://picsum.photos/seed/upload3/128/128');
  upload.setFileThumbnail(id4, 'https://picsum.photos/seed/upload4/128/128');
<\/script>
        `}}},render:()=>o`
    <story-upload-file-states>
      ${z({name:"upload-states",multiple:!0,"image-preview":!0})}
    </story-upload-file-states>
  `},s={parameters:{docs:{description:{story:'Con `variant="gallery"` le foto caricate vengono visualizzate in una griglia a "pictures wall", ideale per gestire upload multipli di immagini.'},source:{language:"html",code:`
<it-upload id="upload-gallery" variant="gallery" multiple accept="image/*" name="upload-gallery">
  <span slot="label">Carica immagini</span>
</it-upload>

<script>
  const gallery = document.getElementById('upload-gallery');

  // Aggiungi programmaticamente le immagini alla galleria
  const id1 = gallery.addFile(new File([''], 'foto-01.jpg', { type: 'image/jpeg' }));
  const id2 = gallery.addFile(new File([''], 'foto-02.jpg', { type: 'image/jpeg' }));

  // Imposta le thumbnail e segnale come completate
  gallery.setFileThumbnail(id1, 'https://picsum.photos/seed/upload1/128/128');
  gallery.setFileThumbnail(id2, 'https://picsum.photos/seed/upload2/128/128');

  gallery.setFileStatus(id1, 'success');
  gallery.setFileStatus(id2, 'success');
<\/script>
        `}}},render:()=>o`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        ${z({name:"upload-gallery",variant:"gallery",multiple:!0,accept:"image/*"})}
      </div>

      <div>
        <h5>Esempio immagini caricate</h5>
        <story-upload-gallery-prefilled>
          ${z({name:"upload-gallery-filled",variant:"gallery",multiple:!0,accept:"image/*"})}
        </story-upload-gallery-prefilled>
      </div>
    </div>
  `},d={name:"Upload con Avatar",parameters:{docs:{description:{story:"Questo elemento combina la visualizzazione di un Avatar con un input file per permettere il caricamento di una foto profilo. Disponibile in due dimensioni: standard e piccola (sm)."},source:{language:"html",code:`
<div style="display: flex; gap: 3rem; flex-wrap: wrap; align-items: flex-start;">
  <div>
    <h5 style="margin-top: 0;">Dimensione Standard</h5>
    <it-upload-avatar
      src="https://randomuser.me/api/portraits/men/21.jpg"
      alt="Mario Rossi"
      size="xxl"
      name="avatar-standard"
    ></it-upload-avatar>
  </div>
  <div>
    <h5 style="margin-top: 0;">Dimensione Piccola</h5>
    <it-upload-avatar
      src="https://randomuser.me/api/portraits/women/21.jpg"
      alt="Laura Bianchi"
      size="xl"
      name="avatar-sm"
    ></it-upload-avatar>
  </div>
</div>

<script>
  const avatarStandard = document.querySelector('it-upload-avatar[name="avatar-standard"]');

  // Recupera il file selezionato dall'utente per effettuare l'upload
  avatarStandard.addEventListener('it-change', (event) => {
    const newAvatarFile = event.detail.files[0];
    console.log('Nuovo avatar selezionato:', newAvatarFile);
  });
<\/script>
        `}}},render:()=>o`
    <div style="display: flex; gap: 3rem; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <h5 style="margin-top: 0;">Dimensione Standard</h5>
        ${S({src:"https://randomuser.me/api/portraits/men/21.jpg",alt:"Mario Rossi",size:"xxl",name:"avatar-standard"})}
      </div>
      <div>
        <h5 style="margin-top: 0;">Dimensione Piccola</h5>
        ${S({src:"https://randomuser.me/api/portraits/women/21.jpg",alt:"Laura Bianchi",size:"xl",name:"avatar-sm"})}
      </div>
    </div>
  `},n={name:"Upload Drag & Drop",parameters:{docs:{description:{story:`Componente per il caricamento tramite trascinamento. Mostra diversi stati: idle (inattivo), dragover (file trascinato), loading (caricamento), success (completato).
L'avanzamento è visualizzato con un indicatore di progresso a ciambella.`},source:{language:"html",code:`
<div style="display: flex; flex-direction: column; gap: 3rem;">

  <div>
    <h5>Default</h5>
    <it-upload-drag-drop name="upload-dd-idle"></it-upload-drag-drop>
  </div>

  <div>
    <h5>Simula caricamento</h5>
    <it-upload-drag-drop id="dd-loading" name="upload-dd-loading"></it-upload-drag-drop>
  </div>

  <div>
    <h5>Processo completato</h5>
    <it-upload-drag-drop id="dd-success" name="upload-dd-success"></it-upload-drag-drop>
  </div>

  <div>
    <h5>Esempio animato</h5>
    <button type="button" id="btn-simulate" class="btn btn-primary mb-3">Simula Upload</button>
    <it-upload-drag-drop id="dd-interactive" name="upload-dd-demo"></it-upload-drag-drop>
  </div>

</div>

<script>
  // -- 2. Setup Loading State --
  const ddLoading = document.getElementById('dd-loading');
  ddLoading.start();

  // -- 3. Setup Success State --
  const ddSuccess = document.getElementById('dd-success');
  ddSuccess.start();
  ddSuccess.progress(1);
  ddSuccess.success();

  // -- 4. Setup Interactive/Animated --
  const ddInteractive = document.getElementById('dd-interactive');
  const btnSimulate = document.getElementById('btn-simulate');
  let simulationTimer;

  const startSimulation = () => {
    clearInterval(simulationTimer);
    ddInteractive.reset();
    ddInteractive.start();
    let p = 0;

    simulationTimer = setInterval(() => {
      p = Math.min(1, p + 0.1);
      ddInteractive.progress(p);

      if (p >= 1) {
        clearInterval(simulationTimer);
        setTimeout(() => ddInteractive.success(), 500);
      }
    }, 300);
  };

  // Avvia l'animazione al click del bottone o quando l'utente seleziona/trascina un file reale
  btnSimulate.addEventListener('click', startSimulation);
  ddInteractive.addEventListener('it-dd-drop', (e) => { e.preventDefault(); startSimulation(); });
<\/script>
        `}}},render:()=>o`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h5>Default</h5>
        ${U({name:"upload-dd-idle",accept:""})}
      </div>

      <div>
        <h5>Simula caricamento</h5>
        <story-upload-dd-loading>
          <it-upload-drag-drop name="upload-dd-loading"></it-upload-drag-drop>
        </story-upload-dd-loading>
      </div>

      <div>
        <h5>Processo completato</h5>
        <story-upload-dd-success>
          <it-upload-drag-drop name="upload-dd-success"></it-upload-drag-drop>
        </story-upload-dd-success>
      </div>

      <div>
        <h5>Esempio animato</h5>
        <story-upload-dd-interactive style="display: flex; flex-direction: column; align-items: flex-start; gap: 1rem;">
          <it-upload-drag-drop name="upload-dd-demo"></it-upload-drag-drop>
        </story-upload-dd-interactive>
      </div>
    </div>
  `},p={name:"Integrazione form e validazione",parameters:{docs:{description:{story:"Esempio con tutti e tre i componenti upload obbligatori all'interno di un form. `<it-upload>` e `<it-upload-drag-drop>` e `<it-upload-avatar>` richiedono che l'utente selezioni un file. \nProva a inviare il form per vedere la validazione in azione."},source:{language:"html",code:`
<form id="demo-form" style="display: flex; flex-direction: column; gap: 2rem;">
  <div>
    <h5>Lista file (obbligatorio)</h5>
    <it-upload name="allegati" required multiple accept="image/*,.pdf">
      <span slot="label">Allega documenti</span>
    </it-upload>
  </div>

  <div>
    <h5>Avatar (obbligatorio)</h5>
    <it-upload-avatar
      name="foto-profilo"
      required
      alt="Mario Rossi"
    ></it-upload-avatar>
  </div>

  <div>
    <h5>Drag &amp; Drop (obbligatorio)</h5>
    <it-upload-drag-drop name="documento" required></it-upload-drag-drop>
  </div>

  <div>
    <it-button type="submit" variant="primary">Invia</it-button>
  </div>
</form>

<script>
  document.getElementById('demo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form inviato con successo!');
  });
<\/script>
        `}}},render:()=>o`
    <form style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h5>Lista file (obbligatorio)</h5>
        <it-upload name="allegati" required multiple accept="image/*,.pdf">
          <span slot="label">Allega documenti</span>
        </it-upload>
      </div>

      <div>
        <h5>Avatar (obbligatorio)</h5>
        <it-upload-avatar name="foto-profilo" required alt="Mario Rossi"></it-upload-avatar>
      </div>

      <div>
        <h5>Drag &amp; Drop (obbligatorio)</h5>
        <it-upload-drag-drop name="documento" required></it-upload-drag-drop>
      </div>

      <div style="margin-top: 0.5rem;">
        <it-button type="submit" variant="primary">Invia</it-button>
      </div>
    </form>
  `},c={...F({componentName:"it-upload",otherProps:'|`files`| Array di sola lettura dei file caricati (`UploadFile[]`). |\n|`auto-success`| Se presente, i file passano automaticamente allo stato `success` appena selezionati. |\n|`variant`| Layout: `default` (lista verticale) oppure `gallery` (griglia immagini). |\n|`multiple`| Consente la selezione di più file contemporaneamente. |\n|`accept`| Tipi di file accettati, es. `"image/*,.pdf"`. |\n|`image-preview`| Mostra thumbnail in anteprima al posto dell\'icona file (consigliato per immagini). |\n|`support-text`| Testo di supporto visualizzato sotto il pulsante. |',otherMethods:"|`addFile(file)`| Aggiunge un file con stato `loading`. Ritorna l'id interno generato. | file: File |\n|`setFileStatus(id, status, progress?)`| Aggiorna lo stato (`loading`, `success`, `error`) e il progresso (0–100) di un file. | id, status, progress? |\n|`setFileThumbnail(id, dataUrl)`| Imposta una thumbnail (data URL) per un file. | id, dataUrl |\n|`removeFile(id)`| Rimuove un file dalla lista. | id |",otherEvents:"|`it-upload-add`| Emesso quando uno o più file vengono selezionati. `detail: { files: File[], name, id }` |\n|`it-upload-remove`| Emesso quando un file viene rimosso. `detail: { id, name, componentName, componentId }` |\n|`it-change`| Emesso a ogni modifica alla lista. `detail: { files: File[], name, id }` |"}),tags:["!dev"]},u={...F({componentName:"it-upload-avatar",otherProps:"|`src`| URL dell'immagine avatar corrente. Se valorizzato soddisfa il requisito `required`. |\n|`alt`| Testo alternativo per l'immagine avatar. |\n|`size`| Dimensione del componente: `xxl` (standard) oppure `xl` (piccola). |\n|`accept`| Tipi di file accettati (default: `image/*`). |\n|`overlay-label`| Testo dell'overlay al passaggio del mouse / focus. Default: \"Aggiorna\" (i18n). |\n|`files`| Array di sola lettura: contiene il file selezionato (`UploadFile[]`). |",otherMethods:"",otherEvents:"|`it-change`| Emesso quando l'utente seleziona un nuovo file. `detail: { files: File[], name, id }` |"}),tags:["!dev"]},m={...F({componentName:"it-upload-drag-drop",otherProps:'|`accept`| Tipi di file accettati, es. `"image/*,.pdf"`. |\n|`illustration`| URL illustrazione personalizzata. Se omesso viene usata quella predefinita inclusa nel bundle. |\n|`files`| Array di sola lettura: contiene il file selezionato (`UploadFile[]`). |',otherMethods:"|`start()`| Avvia lo stato di caricamento mostrando il progress circolare. | - |\n|`progress(value)`| Aggiorna il progresso (valore 0–1). | value: number |\n|`success()`| Segna il caricamento come completato. | - |\n|`reset()`| Ripristina lo stato iniziale. | - |",otherEvents:"|`it-dd-start`| Emesso al dragenter. Annullabile via `preventDefault()`: se non annullato parte `start()` automaticamente. `detail: {}` |\n|`it-dd-drop`| Emesso al drop o selezione da file input. Annullabile via `preventDefault()`: se non annullato parte `start()` + progress indeterminato automaticamente. `detail: { file: File, name, id }` |\n|`it-change`| Emesso sempre al drop/selezione (retrocompatibilità). `detail: { file: File, name, id }` |"}),tags:["!dev"]},b={name:"i18n",tags:["!dev"],render:()=>o`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Per questi componenti sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = ${JSON.stringify(D,null,2)}
\`\`\`
`}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  args: {
    variant: 'default',
    multiple: false,
    'image-preview': false,
    accept: '',
    'support-text': '',
    disabled: false,
    required: false,
    'auto-success': true
  },
  argTypes: {
    variant: {
      description: 'Layout del componente.',
      control: {
        type: 'select'
      },
      options: ['default', 'gallery'],
      table: {
        defaultValue: {
          summary: 'default'
        }
      }
    },
    multiple: {
      description: 'Consente la selezione multipla di file.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    'image-preview': {
      description: "Mostra un'anteprima thumbnail per le immagini caricate.",
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    accept: {
      description: 'Tipi di file accettati, es. "image/*,.pdf".',
      control: 'text'
    },
    'support-text': {
      description: 'Testo di supporto visualizzato sotto il pulsante.',
      control: 'text'
    },
    disabled: {
      description: 'Disabilita il componente.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    required: {
      description: 'Rende il campo obbligatorio nella validazione del form.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    'auto-success': {
      description: 'I file passano automaticamente allo stato success appena selezionati.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    }
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'closed'
      }
    }
  },
  render: params => renderUpload(params as Partial<UploadProps>)
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo Avatar',
  tags: ['!autodocs', '!dev'],
  args: {
    src: 'https://randomuser.me/api/portraits/men/21.jpg',
    alt: 'Mario Rossi',
    size: 'xxl' as AvatarSize,
    disabled: false,
    required: false
  },
  argTypes: {
    src: {
      description: "URL dell'immagine avatar corrente.",
      control: 'text'
    },
    alt: {
      description: "Testo alternativo per l'immagine.",
      control: 'text'
    },
    size: {
      description: 'Dimensione del componente.',
      control: {
        type: 'select'
      },
      options: ['xl', 'xxl'],
      table: {
        defaultValue: {
          summary: 'xxl'
        }
      }
    },
    disabled: {
      description: 'Disabilita il componente.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    required: {
      description: 'Rende il campo obbligatorio nella validazione del form. Se src è già valorizzato, il requisito è soddisfatto.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    }
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'closed'
      }
    }
  },
  render: params => renderUploadAvatar(params as Partial<UploadAvatarProps>)
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo Drag & Drop',
  tags: ['!autodocs', '!dev'],
  args: {
    accept: '',
    illustration: '',
    disabled: false,
    required: false
  },
  argTypes: {
    accept: {
      description: 'Tipi di file accettati, es. "image/*,.pdf".',
      control: 'text'
    },
    illustration: {
      description: 'URL illustrazione personalizzata. Se omesso viene usata quella predefinita.',
      control: 'text'
    },
    disabled: {
      description: 'Disabilita il componente.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    required: {
      description: 'Rende il campo obbligatorio nella validazione del form.',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    }
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'closed'
      }
    }
  },
  render: params => renderUploadDragDrop(params as Partial<UploadDragDropProps>)
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Upload con lista di file',
  parameters: {
    docs: {
      description: {
        story: 'Upload base che mostra i file caricati in una lista verticale con icone sostituite da thumbnail (image-preview).'
      },
      source: {
        language: 'html',
        code: \`
<it-upload name="upload-list" multiple accept="image/*" image-preview auto-success>
  <span slot="label">Carica file</span>
</it-upload>

<script>
  const uploadList = document.querySelector('it-upload[name="upload-list"]');

  // Ascolta le modifiche alla lista dei file
  uploadList.addEventListener('it-change', (event) => {
    console.log('File aggiornati:', event.detail.files);
  });
<\/script>
        \`
      }
    }
  },
  render: () => html\`
    \${renderUpload({
    name: 'upload-list',
    multiple: true,
    accept: 'image/*',
    'image-preview': true,
    'auto-success': true
  })}
  \`
}`,...l.parameters?.docs?.source},description:{story:`Upload con lista di file — visualizza i file caricati in una lista verticale
con possibilità di rimozione singola. Supporta i seguenti stati: loading, success, error.`,...l.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Upload con lista di file - stati',
  parameters: {
    docs: {
      description: {
        story: "Esempio con file pre-caricati in tutti gli stati supportati: \`success\` (caricato), \`loading\` al 43% di avanzamento, \`error\` (fallito), e \`loading\` a 0% (avvio). I file in stato \`success\` mostrano un'icona di conferma e un pulsante X separato: l'utente può rimuoverli anche dopo il caricamento, senza dover ricaricare il form."
      },
      source: {
        language: 'html',
        code: \`
<it-upload id="upload-states" multiple image-preview name="upload-states">
  <span slot="label">Carica file</span>
</it-upload>

<script>
  const upload = document.getElementById('upload-states');

  // 1. Aggiungi i file (genera gli ID interni)
  const id1 = upload.addFile(new File([''], 'nome-file-01.jpg', { type: 'image/jpeg' }));
  const id2 = upload.addFile(new File([''], 'nome-file-02-nome-file-lungo-per-ellissi.jpg', { type: 'image/jpeg' }));
  const id3 = upload.addFile(new File([''], 'nome-file-03.jpg', { type: 'image/jpeg' }));
  const id4 = upload.addFile(new File([''], 'nome-file-04.jpg', { type: 'image/jpeg' }));

  // 2. Imposta lo stato e il progresso
  upload.setFileStatus(id1, 'success');
  upload.setFileStatus(id2, 'success');
  upload.setFileStatus(id3, 'loading', 43); // 43%
  upload.setFileStatus(id4, 'error');

  // 3. Imposta le thumbnail
  upload.setFileThumbnail(id1, 'https://picsum.photos/seed/upload1/128/128');
  upload.setFileThumbnail(id2, 'https://picsum.photos/seed/upload2/128/128');
  upload.setFileThumbnail(id3, 'https://picsum.photos/seed/upload3/128/128');
  upload.setFileThumbnail(id4, 'https://picsum.photos/seed/upload4/128/128');
<\/script>
        \`
      }
    }
  },
  render: () => html\`
    <story-upload-file-states>
      \${renderUpload({
    name: 'upload-states',
    multiple: true,
    'image-preview': true
  })}
    </story-upload-file-states>
  \`
}`,...r.parameters?.docs?.source},description:{story:"Mostra la lista file con esempi di tutti gli stati: loading (con progresso), success ed error.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Con \`variant="gallery"\` le foto caricate vengono visualizzate in una griglia a "pictures wall", ideale per gestire upload multipli di immagini.'
      },
      source: {
        language: 'html',
        code: \`
<it-upload id="upload-gallery" variant="gallery" multiple accept="image/*" name="upload-gallery">
  <span slot="label">Carica immagini</span>
</it-upload>

<script>
  const gallery = document.getElementById('upload-gallery');

  // Aggiungi programmaticamente le immagini alla galleria
  const id1 = gallery.addFile(new File([''], 'foto-01.jpg', { type: 'image/jpeg' }));
  const id2 = gallery.addFile(new File([''], 'foto-02.jpg', { type: 'image/jpeg' }));

  // Imposta le thumbnail e segnale come completate
  gallery.setFileThumbnail(id1, 'https://picsum.photos/seed/upload1/128/128');
  gallery.setFileThumbnail(id2, 'https://picsum.photos/seed/upload2/128/128');

  gallery.setFileStatus(id1, 'success');
  gallery.setFileStatus(id2, 'success');
<\/script>
        \`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        \${renderUpload({
    name: 'upload-gallery',
    variant: 'gallery',
    multiple: true,
    accept: 'image/*'
  })}
      </div>

      <div>
        <h5>Esempio immagini caricate</h5>
        <story-upload-gallery-prefilled>
          \${renderUpload({
    name: 'upload-gallery-filled',
    variant: 'gallery',
    multiple: true,
    accept: 'image/*'
  })}
        </story-upload-gallery-prefilled>
      </div>
    </div>
  \`
}`,...s.parameters?.docs?.source},description:{story:'Upload Gallery — visualizza le foto in una griglia a "pictures wall"',...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Upload con Avatar',
  parameters: {
    docs: {
      description: {
        story: 'Questo elemento combina la visualizzazione di un Avatar con un input file per permettere il caricamento di una foto profilo. Disponibile in due dimensioni: standard e piccola (sm).'
      },
      source: {
        language: 'html',
        code: \`
<div style="display: flex; gap: 3rem; flex-wrap: wrap; align-items: flex-start;">
  <div>
    <h5 style="margin-top: 0;">Dimensione Standard</h5>
    <it-upload-avatar
      src="https://randomuser.me/api/portraits/men/21.jpg"
      alt="Mario Rossi"
      size="xxl"
      name="avatar-standard"
    ></it-upload-avatar>
  </div>
  <div>
    <h5 style="margin-top: 0;">Dimensione Piccola</h5>
    <it-upload-avatar
      src="https://randomuser.me/api/portraits/women/21.jpg"
      alt="Laura Bianchi"
      size="xl"
      name="avatar-sm"
    ></it-upload-avatar>
  </div>
</div>

<script>
  const avatarStandard = document.querySelector('it-upload-avatar[name="avatar-standard"]');

  // Recupera il file selezionato dall'utente per effettuare l'upload
  avatarStandard.addEventListener('it-change', (event) => {
    const newAvatarFile = event.detail.files[0];
    console.log('Nuovo avatar selezionato:', newAvatarFile);
  });
<\/script>
        \`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: 3rem; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <h5 style="margin-top: 0;">Dimensione Standard</h5>
        \${renderUploadAvatar({
    src: 'https://randomuser.me/api/portraits/men/21.jpg',
    alt: 'Mario Rossi',
    size: 'xxl',
    name: 'avatar-standard'
  })}
      </div>
      <div>
        <h5 style="margin-top: 0;">Dimensione Piccola</h5>
        \${renderUploadAvatar({
    src: 'https://randomuser.me/api/portraits/women/21.jpg',
    alt: 'Laura Bianchi',
    size: 'xl',
    name: 'avatar-sm'
  })}
      </div>
    </div>
  \`
}`,...d.parameters?.docs?.source},description:{story:"Upload con Avatar — combina un avatar con input file per upload foto profilo",...d.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Upload Drag & Drop',
  parameters: {
    docs: {
      description: {
        story: "Componente per il caricamento tramite trascinamento. Mostra diversi stati: idle (inattivo), dragover (file trascinato), loading (caricamento), success (completato).\\nL'avanzamento è visualizzato con un indicatore di progresso a ciambella."
      },
      source: {
        language: 'html',
        code: \`
<div style="display: flex; flex-direction: column; gap: 3rem;">

  <div>
    <h5>Default</h5>
    <it-upload-drag-drop name="upload-dd-idle"></it-upload-drag-drop>
  </div>

  <div>
    <h5>Simula caricamento</h5>
    <it-upload-drag-drop id="dd-loading" name="upload-dd-loading"></it-upload-drag-drop>
  </div>

  <div>
    <h5>Processo completato</h5>
    <it-upload-drag-drop id="dd-success" name="upload-dd-success"></it-upload-drag-drop>
  </div>

  <div>
    <h5>Esempio animato</h5>
    <button type="button" id="btn-simulate" class="btn btn-primary mb-3">Simula Upload</button>
    <it-upload-drag-drop id="dd-interactive" name="upload-dd-demo"></it-upload-drag-drop>
  </div>

</div>

<script>
  // -- 2. Setup Loading State --
  const ddLoading = document.getElementById('dd-loading');
  ddLoading.start();

  // -- 3. Setup Success State --
  const ddSuccess = document.getElementById('dd-success');
  ddSuccess.start();
  ddSuccess.progress(1);
  ddSuccess.success();

  // -- 4. Setup Interactive/Animated --
  const ddInteractive = document.getElementById('dd-interactive');
  const btnSimulate = document.getElementById('btn-simulate');
  let simulationTimer;

  const startSimulation = () => {
    clearInterval(simulationTimer);
    ddInteractive.reset();
    ddInteractive.start();
    let p = 0;

    simulationTimer = setInterval(() => {
      p = Math.min(1, p + 0.1);
      ddInteractive.progress(p);

      if (p >= 1) {
        clearInterval(simulationTimer);
        setTimeout(() => ddInteractive.success(), 500);
      }
    }, 300);
  };

  // Avvia l'animazione al click del bottone o quando l'utente seleziona/trascina un file reale
  btnSimulate.addEventListener('click', startSimulation);
  ddInteractive.addEventListener('it-dd-drop', (e) => { e.preventDefault(); startSimulation(); });
<\/script>
        \`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h5>Default</h5>
        \${renderUploadDragDrop({
    name: 'upload-dd-idle',
    accept: ''
  })}
      </div>

      <div>
        <h5>Simula caricamento</h5>
        <story-upload-dd-loading>
          <it-upload-drag-drop name="upload-dd-loading"></it-upload-drag-drop>
        </story-upload-dd-loading>
      </div>

      <div>
        <h5>Processo completato</h5>
        <story-upload-dd-success>
          <it-upload-drag-drop name="upload-dd-success"></it-upload-drag-drop>
        </story-upload-dd-success>
      </div>

      <div>
        <h5>Esempio animato</h5>
        <story-upload-dd-interactive style="display: flex; flex-direction: column; align-items: flex-start; gap: 1rem;">
          <it-upload-drag-drop name="upload-dd-demo"></it-upload-drag-drop>
        </story-upload-dd-interactive>
      </div>
    </div>
  \`
}`,...n.parameters?.docs?.source},description:{story:"Upload Drag & Drop — caricamento tramite trascinamento",...n.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Integrazione form e validazione',
  parameters: {
    docs: {
      description: {
        story: "Esempio con tutti e tre i componenti upload obbligatori all'interno di un form. " + "\`<it-upload>\` e \`<it-upload-drag-drop>\` e \`<it-upload-avatar>\` richiedono che l'utente selezioni un file. " + '\\nProva a inviare il form per vedere la validazione in azione.'
      },
      source: {
        language: 'html',
        code: \`
<form id="demo-form" style="display: flex; flex-direction: column; gap: 2rem;">
  <div>
    <h5>Lista file (obbligatorio)</h5>
    <it-upload name="allegati" required multiple accept="image/*,.pdf">
      <span slot="label">Allega documenti</span>
    </it-upload>
  </div>

  <div>
    <h5>Avatar (obbligatorio)</h5>
    <it-upload-avatar
      name="foto-profilo"
      required
      alt="Mario Rossi"
    ></it-upload-avatar>
  </div>

  <div>
    <h5>Drag &amp; Drop (obbligatorio)</h5>
    <it-upload-drag-drop name="documento" required></it-upload-drag-drop>
  </div>

  <div>
    <it-button type="submit" variant="primary">Invia</it-button>
  </div>
</form>

<script>
  document.getElementById('demo-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form inviato con successo!');
  });
<\/script>
        \`
      }
    }
  },
  render: () => html\`
    <form style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h5>Lista file (obbligatorio)</h5>
        <it-upload name="allegati" required multiple accept="image/*,.pdf">
          <span slot="label">Allega documenti</span>
        </it-upload>
      </div>

      <div>
        <h5>Avatar (obbligatorio)</h5>
        <it-upload-avatar name="foto-profilo" required alt="Mario Rossi"></it-upload-avatar>
      </div>

      <div>
        <h5>Drag &amp; Drop (obbligatorio)</h5>
        <it-upload-drag-drop name="documento" required></it-upload-drag-drop>
      </div>

      <div style="margin-top: 0.5rem;">
        <it-button type="submit" variant="primary">Invia</it-button>
      </div>
    </form>
  \`
}`,...p.parameters?.docs?.source},description:{story:"Integrazione in un form HTML con validazione nativa required.",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  ...StoryFormControlMethodAndProps({\n    componentName: 'it-upload',\n    otherProps: `|\\`files\\`| Array di sola lettura dei file caricati (\\`UploadFile[]\\`). |\n|\\`auto-success\\`| Se presente, i file passano automaticamente allo stato \\`success\\` appena selezionati. |\n|\\`variant\\`| Layout: \\`default\\` (lista verticale) oppure \\`gallery\\` (griglia immagini). |\n|\\`multiple\\`| Consente la selezione di più file contemporaneamente. |\n|\\`accept\\`| Tipi di file accettati, es. \\`\"image/*,.pdf\"\\`. |\n|\\`image-preview\\`| Mostra thumbnail in anteprima al posto dell'icona file (consigliato per immagini). |\n|\\`support-text\\`| Testo di supporto visualizzato sotto il pulsante. |`,\n    otherMethods: `|\\`addFile(file)\\`| Aggiunge un file con stato \\`loading\\`. Ritorna l'id interno generato. | file: File |\n|\\`setFileStatus(id, status, progress?)\\`| Aggiorna lo stato (\\`loading\\`, \\`success\\`, \\`error\\`) e il progresso (0–100) di un file. | id, status, progress? |\n|\\`setFileThumbnail(id, dataUrl)\\`| Imposta una thumbnail (data URL) per un file. | id, dataUrl |\n|\\`removeFile(id)\\`| Rimuove un file dalla lista. | id |`,\n    otherEvents: `|\\`it-upload-add\\`| Emesso quando uno o più file vengono selezionati. \\`detail: { files: File[], name, id }\\` |\n|\\`it-upload-remove\\`| Emesso quando un file viene rimosso. \\`detail: { id, name, componentName, componentId }\\` |\n|\\`it-change\\`| Emesso a ogni modifica alla lista. \\`detail: { files: File[], name, id }\\` |`\n  }),\n  tags: ['!dev']\n}",...c.parameters?.docs?.source},description:{story:"Proprietà, Metodi e Eventi di `<it-upload>`",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{\n  ...StoryFormControlMethodAndProps({\n    componentName: 'it-upload-avatar',\n    otherProps: `|\\`src\\`| URL dell'immagine avatar corrente. Se valorizzato soddisfa il requisito \\`required\\`. |\n|\\`alt\\`| Testo alternativo per l'immagine avatar. |\n|\\`size\\`| Dimensione del componente: \\`xxl\\` (standard) oppure \\`xl\\` (piccola). |\n|\\`accept\\`| Tipi di file accettati (default: \\`image/*\\`). |\n|\\`overlay-label\\`| Testo dell'overlay al passaggio del mouse / focus. Default: \"Aggiorna\" (i18n). |\n|\\`files\\`| Array di sola lettura: contiene il file selezionato (\\`UploadFile[]\\`). |`,\n    otherMethods: '',\n    otherEvents: `|\\`it-change\\`| Emesso quando l'utente seleziona un nuovo file. \\`detail: { files: File[], name, id }\\` |`\n  }),\n  tags: ['!dev']\n}",...u.parameters?.docs?.source},description:{story:"Proprietà, Metodi e Eventi di `<it-upload-avatar>`",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{\n  ...StoryFormControlMethodAndProps({\n    componentName: 'it-upload-drag-drop',\n    otherProps: `|\\`accept\\`| Tipi di file accettati, es. \\`\"image/*,.pdf\"\\`. |\n|\\`illustration\\`| URL illustrazione personalizzata. Se omesso viene usata quella predefinita inclusa nel bundle. |\n|\\`files\\`| Array di sola lettura: contiene il file selezionato (\\`UploadFile[]\\`). |`,\n    otherMethods: `|\\`start()\\`| Avvia lo stato di caricamento mostrando il progress circolare. | - |\n|\\`progress(value)\\`| Aggiorna il progresso (valore 0–1). | value: number |\n|\\`success()\\`| Segna il caricamento come completato. | - |\n|\\`reset()\\`| Ripristina lo stato iniziale. | - |`,\n    otherEvents: `|\\`it-dd-start\\`| Emesso al dragenter. Annullabile via \\`preventDefault()\\`: se non annullato parte \\`start()\\` automaticamente. \\`detail: {}\\` |\n|\\`it-dd-drop\\`| Emesso al drop o selezione da file input. Annullabile via \\`preventDefault()\\`: se non annullato parte \\`start()\\` + progress indeterminato automaticamente. \\`detail: { file: File, name, id }\\` |\n|\\`it-change\\`| Emesso sempre al drop/selezione (retrocompatibilità). \\`detail: { file: File, name, id }\\` |`\n  }),\n  tags: ['!dev']\n}",...m.parameters?.docs?.source},description:{story:"Proprietà, Metodi e Eventi di `<it-upload-drag-drop>`",...m.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'i18n',
  tags: ['!dev'],
  render: () => html\`<div class="hide-preview"></div>\`,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        story: \`
Per questi componenti sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\\\`\\\`\\\`js
const translation = \${JSON.stringify(i18nIT, null, 2)}
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...b.parameters?.docs?.source}}};const L=["EsempioInterattivoUpload","EsempioInterattivoAvatar","EsempioInterattivoDragDrop","UploadConListaDiFile","UploadConStatoFile","UploadGallery","UploadConAvatar","UploadDragDrop","UploadFormIntegrazione","MetodiEPropUpload","MetodiEPropAvatar","MetodiEPropDragDrop","I18n"],P=Object.freeze(Object.defineProperty({__proto__:null,EsempioInterattivoAvatar:y,EsempioInterattivoDragDrop:h,EsempioInterattivoUpload:f,I18n:b,MetodiEPropAvatar:u,MetodiEPropDragDrop:m,MetodiEPropUpload:c,UploadConAvatar:d,UploadConListaDiFile:l,UploadConStatoFile:r,UploadDragDrop:n,UploadFormIntegrazione:p,UploadGallery:s,__namedExportsOrder:L,default:w},Symbol.toStringTag,{value:"Module"}));export{f as E,b as I,c as M,P as S,r as U,s as a,y as b,d as c,h as d,n as e,p as f,u as g,m as h};
