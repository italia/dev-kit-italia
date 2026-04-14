/* eslint-disable wc/require-listener-teardown */
/* eslint-disable max-classes-per-file */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { StoryFormControlMethodAndProps } from '@italia/globals';

import type { AvatarSize } from '@italia/avatar';
import type { UploadVariant } from '../src/types.js';
import type { ItUpload } from '../src/it-upload.js';
import type { ItUploadDragDrop } from '../src/it-upload-drag-drop.js';
import i18nIT from '../src/locales/it.js';

// ── Story-helper custom elements ───────────────────────────────────────────────
// Plain HTMLElement subclasses that imperatively set up demo state after the
// story renders. They avoid <script> tags (which are inert inside <template>
// fragments) and play() functions.

// ── Placeholder thumbnail data URIs used by story helpers ─────────────────────
// Small solid-colour SVGs serve as stand-in thumbnails for mock file entries.
// picsum.photos URLs would require network; these work offline.
const THUMBS = [
  'https://picsum.photos/seed/upload1/128/128',
  'https://picsum.photos/seed/upload2/128/128',
  'https://picsum.photos/seed/upload3/128/128',
  'https://picsum.photos/seed/upload4/128/128'
];
/** Populates an inner <it-upload> with files in loading, success and error states. */
class StoryUploadFileStates extends HTMLElement {
  connectedCallback() {
    setTimeout(async () => {
      const upload = this.querySelector<ItUpload>('it-upload');
      if (!upload) return;
      await upload.updateComplete;

      const id1 = upload.addFile(new File(['x'.repeat(71_303_168)], 'nome-file-01.jpg', { type: 'image/jpeg' }));
      const id2 = upload.addFile(new File(['x'.repeat(9_437_184)], 'nome-file-02-nome-file-lungo-per-ellissi.jpg', { type: 'image/jpeg' }));
      const id3 = upload.addFile(new File(['x'.repeat(3_145_728)], 'nome-file-03.jpg', { type: 'image/jpeg' }));
      const id4 = upload.addFile(new File(['x'.repeat(2_097_152)], 'nome-file-04.jpg', { type: 'image/jpeg' }));

      upload.setFileStatus(id1, 'success');
      upload.setFileStatus(id2, 'success');
      upload.setFileStatus(id3, 'loading', 43);
      upload.setFileStatus(id4, 'error');

      upload.setFileThumbnail(id1, THUMBS[0]);
      upload.setFileThumbnail(id2, THUMBS[1]);
      upload.setFileThumbnail(id3, THUMBS[2]);
      upload.setFileThumbnail(id4, THUMBS[3]);
    }, 0);
  }
}
if (!customElements.get('story-upload-file-states')) {
  customElements.define('story-upload-file-states', StoryUploadFileStates);
}

/** Sets a drag-drop to loading state at a given progress value (0-1). */
class StoryUploadDDLoading extends HTMLElement {
  connectedCallback() {
    setTimeout(async () => {
      const dd = this.querySelector<ItUploadDragDrop>('it-upload-drag-drop');
      if (!dd) return;
      dd.simulateUpload('nome_file.pdf', 3_900_000);
    }, 0);
  }
}
if (!customElements.get('story-upload-dd-loading')) {
  customElements.define('story-upload-dd-loading', StoryUploadDDLoading);
}

/** Sets a drag-drop to success state. */
class StoryUploadDDSuccess extends HTMLElement {
  connectedCallback() {
    setTimeout(async () => {
      const dd = this.querySelector<ItUploadDragDrop>('it-upload-drag-drop');
      if (!dd) return;
      dd.simulateUpload('nome_file.pdf', 3_900_000);
      dd.progress(1);
      dd.success();
    }, 0);
  }
}
if (!customElements.get('story-upload-dd-success')) {
  customElements.define('story-upload-dd-success', StoryUploadDDSuccess);
}

/**
 * Adds a "Simula Upload" button above the drag-drop component.
 * Clicking it (or dropping/selecting a file) triggers auto-progress simulation
 * at +10% every 300 ms — mirroring the Angular reference demo.
 */
class StoryUploadDDInteractive extends HTMLElement {
  private _timer?: ReturnType<typeof setInterval>;

  connectedCallback() {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Simula Upload';
    btn.className = 'btn btn-primary mb-3';
    btn.addEventListener('click', () => this._simulate());
    this.prepend(btn);

    this.addEventListener('it-change', () => this._simulate());
  }

  disconnectedCallback() {
    clearInterval(this._timer);
  }

  private _simulate() {
    const dd = this.querySelector<ItUploadDragDrop>('it-upload-drag-drop');
    if (!dd) return;
    clearInterval(this._timer);
    if (dd._state !== 'loading') {
      dd.simulateUpload('nome_file.pdf', 3_900_000);
    }
    let p = dd._progress / 100;
    this._timer = setInterval(() => {
      p = Math.min(1, p + 0.1);
      dd.progress(p);
      if (p >= 1) {
        clearInterval(this._timer);
        setTimeout(() => dd.success(), 500);
      }
    }, 300);
  }
}
if (!customElements.get('story-upload-dd-interactive')) {
  customElements.define('story-upload-dd-interactive', StoryUploadDDInteractive);
}

/** Populates an inner <it-upload> (gallery variant) with 2 pre-loaded images. */
class StoryUploadGalleryPrefilled extends HTMLElement {
  connectedCallback() {
    setTimeout(async () => {
      const upload = this.querySelector<ItUpload>('it-upload');
      if (!upload) return;
      await upload.updateComplete;

      const id1 = upload.addFile(new File(['x'], 'foto-01.jpg', { type: 'image/jpeg' }));
      const id2 = upload.addFile(new File(['x'], 'foto-02.jpg', { type: 'image/jpeg' }));

      upload.setFileThumbnail(id1, THUMBS[0]);
      upload.setFileThumbnail(id2, THUMBS[1]);
      upload.setFileStatus(id1, 'success');
      upload.setFileStatus(id2, 'success');
    }, 0);
  }
}
if (!customElements.get('story-upload-gallery-prefilled')) {
  customElements.define('story-upload-gallery-prefilled', StoryUploadGalleryPrefilled);
}

interface UploadProps {
  name: string;
  multiple: boolean;
  accept: string;
  imagePreview: boolean;
  variant: UploadVariant;
  supportText: string;
  disabled: boolean;
  required: boolean;
  autoSuccess: boolean;
}

interface UploadAvatarProps {
  src: string;
  alt: string;
  size: AvatarSize;
  name: string;
  disabled: boolean;
  required: boolean;
}

interface UploadDragDropProps {
  name: string;
  accept: string;
  illustration: string;
  disabled: boolean;
  required: boolean;
}

const renderUpload = (params: Partial<UploadProps>) => html`
  <it-upload
    name="${ifDefined(params.name || undefined)}"
    ?multiple="${params.multiple}"
    accept="${ifDefined(params.accept || undefined)}"
    ?image-preview="${params.imagePreview}"
    variant="${ifDefined(params.variant || undefined)}"
    support-text="${ifDefined(params.supportText || undefined)}"
    ?disabled="${params.disabled}"
    ?required="${params.required}"
    ?auto-success="${params.autoSuccess}"
  >
    <span slot="label">${i18nIT.upload_label}</span>
  </it-upload>
`;

const renderUploadAvatar = (params: Partial<UploadAvatarProps>) => html`
  <it-upload-avatar
    src="${ifDefined(params.src || undefined)}"
    alt="${ifDefined(params.alt || undefined)}"
    size="${ifDefined(params.size || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    ?disabled="${params.disabled}"
    ?required="${params.required}"
  ></it-upload-avatar>
`;

const renderUploadDragDrop = (params: Partial<UploadDragDropProps>) => html`
  <it-upload-drag-drop
    accept="${ifDefined(params.accept || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    illustration="${ifDefined(params.illustration || undefined)}"
    ?disabled="${params.disabled}"
    ?required="${params.required}"
  ></it-upload-drag-drop>
`;

const meta = {
  title: 'Componenti/Form/Upload',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-upload',
  parameters: {
    docs: {
      description: {
        component: `
Elementi dei form dedicati al caricamento file.

Il componente Upload consente l'upload di file attraverso diverse modalità: lista verticale, anteprima immagini, gallery, avatar, o drag & drop.

[Approfondisci come e quando usare il componente Upload](https://designers.italia.it/design-system/componenti/upload/)
`,
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

// ── Storie interattive ────────────────────────────────────────────────────────

export const EsempioInterattivoUpload: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  args: {
    variant: 'default',
    multiple: false,
    imagePreview: false,
    accept: '',
    supportText: '',
    disabled: false,
    required: false,
    autoSuccess: true,
  },
  argTypes: {
    variant: {
      description: 'Layout del componente.',
      control: { type: 'select' },
      options: ['default', 'gallery'],
    },
    multiple: {
      description: 'Consente la selezione multipla di file.',
      control: 'boolean',
    },
    imagePreview: {
      description: 'Mostra un\'anteprima thumbnail per le immagini caricate.',
      control: 'boolean',
    },
    accept: {
      description: 'Tipi di file accettati, es. "image/*,.pdf".',
      control: 'text',
    },
    supportText: {
      description: 'Testo di supporto visualizzato sotto il pulsante.',
      control: 'text',
    },
    disabled: {
      description: 'Disabilita il componente.',
      control: 'boolean',
    },
    required: {
      description: 'Rende il campo obbligatorio nella validazione del form.',
      control: 'boolean',
    },
    autoSuccess: {
      description: 'I file passano automaticamente allo stato success appena selezionati.',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'closed' },
    },
  },
  render: (params) => renderUpload(params as Partial<UploadProps>),
};

export const EsempioInterattivoAvatar: Story = {
  name: 'Esempio interattivo Avatar',
  tags: ['!autodocs', '!dev'],
  args: {
    src: 'https://randomuser.me/api/portraits/men/21.jpg',
    alt: 'Mario Rossi',
    size: 'xxl' as AvatarSize,
    disabled: false,
    required: false,
  },
  argTypes: {
    src: {
      description: 'URL dell\'immagine avatar corrente.',
      control: 'text',
    },
    alt: {
      description: 'Testo alternativo per l\'immagine.',
      control: 'text',
    },
    size: {
      description: 'Dimensione del componente.',
      control: { type: 'select' },
      options: ['xl', 'xxl'],
    },
    disabled: {
      description: 'Disabilita il componente.',
      control: 'boolean',
    },
    required: {
      description: 'Rende il campo obbligatorio nella validazione del form. Se src è già valorizzato, il requisito è soddisfatto.',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'closed' },
    },
  },
  render: (params) => renderUploadAvatar(params as Partial<UploadAvatarProps>),
};

export const EsempioInterattivoDragDrop: Story = {
  name: 'Esempio interattivo Drag & Drop',
  tags: ['!autodocs', '!dev'],
  args: {
    accept: '',
    illustration: '',
    disabled: false,
    required: false,
  },
  argTypes: {
    accept: {
      description: 'Tipi di file accettati, es. "image/*,.pdf".',
      control: 'text',
    },
    illustration: {
      description: 'URL illustrazione personalizzata. Se omesso viene usata quella predefinita.',
      control: 'text',
    },
    disabled: {
      description: 'Disabilita il componente.',
      control: 'boolean',
    },
    required: {
      description: 'Rende il campo obbligatorio nella validazione del form.',
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'closed' },
    },
  },
  render: (params) => renderUploadDragDrop(params as Partial<UploadDragDropProps>),
};

/**
 * Upload con lista di file — visualizza i file caricati in una lista verticale
 * con possibilità di rimozione singola. Supporta i seguenti stati: loading, success, error.
 */
export const UploadConListaDiFile: Story = {
  name: 'Upload con lista di file',
  parameters: {
    docs: {
      description: {
        story:
          'Upload base che mostra i file caricati in una lista verticale con icone sostituite da thumbnail (image-preview).',
      },
      source: {
        language: 'html',
        code: `
<it-upload name="upload-list" multiple accept="image/*" image-preview auto-success>
  <span slot="label">Carica file</span>
</it-upload>

<script>
  const uploadList = document.querySelector('it-upload[name="upload-list"]');

  // Ascolta le modifiche alla lista dei file
  uploadList.addEventListener('it-change', (event) => {
    console.log('File aggiornati:', event.detail.files);
  });
</script>
        `,
      },
    },
  },
  render: () => html`
    ${renderUpload({
      name: 'upload-list',
      multiple: true,
      accept: 'image/*',
      imagePreview: true,
      autoSuccess: true,
    })}
  `,
};

/**
 * Mostra la lista file con esempi di tutti gli stati: loading (con progresso), success ed error.
 */
export const UploadConStatoFile: Story = {
  name: 'Upload con lista di file - stati',
  parameters: {
    docs: {
      description: {
        story:
          'Esempio con file pre-caricati in tutti gli stati supportati: `success` (caricato), `loading` al 43% di avanzamento, `error` (fallito), e `loading` a 0% (avvio).',
      },
      source: {
        language: 'html',
        code: `
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
</script>
        `,
      },
    },
  },
  render: () => html`
    <story-upload-file-states>
      ${renderUpload({
        name: 'upload-states',
        multiple: true,
        imagePreview: true,
      })}
    </story-upload-file-states>
  `,
};

/**
 * Upload Gallery — visualizza le foto in una griglia a "pictures wall"
 */
export const UploadGallery: Story = {
  name: 'Upload Gallery',
  parameters: {
    docs: {
      description: {
        story:
          'Con `variant="gallery"` le foto caricate vengono visualizzate in una griglia a "pictures wall", ideale per gestire upload multipli di immagini.',
      },
      source: {
        language: 'html',
        code: `
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
</script>
        `,
      },
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        ${renderUpload({
          name: 'upload-gallery',
          variant: 'gallery',
          multiple: true,
          accept: 'image/*',
        })}
      </div>

      <div>
        <h5>Esempio immagini caricate</h5>
        <story-upload-gallery-prefilled>
          ${renderUpload({
            name: 'upload-gallery-filled',
            variant: 'gallery',
            multiple: true,
            accept: 'image/*',
          })}
        </story-upload-gallery-prefilled>
      </div>
    </div>
  `,
};

/**
 * Upload con Avatar — combina un avatar con input file per upload foto profilo
 */
export const UploadConAvatar: Story = {
  name: 'Upload con Avatar',
  parameters: {
    docs: {
      description: {
        story:
          'Questo elemento combina la visualizzazione di un Avatar con un input file per permettere il caricamento di una foto profilo. Disponibile in due dimensioni: standard e piccola (sm).',
      },
      source: {
        language: 'html',
        code: `
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
</script>
        `,
      },
    },
  },
  render: () => html`
    <div style="display: flex; gap: 3rem; flex-wrap: wrap; align-items: flex-start;">
      <div>
        <h5 style="margin-top: 0;">Dimensione Standard</h5>
        ${renderUploadAvatar({
          src: 'https://randomuser.me/api/portraits/men/21.jpg',
          alt: 'Mario Rossi',
          size: 'xxl',
          name: 'avatar-standard',
        })}
      </div>
      <div>
        <h5 style="margin-top: 0;">Dimensione Piccola</h5>
        ${renderUploadAvatar({
          src: 'https://randomuser.me/api/portraits/women/21.jpg',
          alt: 'Laura Bianchi',
          size: 'xl',
          name: 'avatar-sm',
        })}
      </div>
    </div>
  `,
};

/**
 * Upload Drag & Drop — caricamento tramite trascinamento
 */
export const UploadDragDrop: Story = {
  name: 'Upload Drag & Drop',
  parameters: {
    docs: {
      description: {
        story:
          'Componente per il caricamento tramite trascinamento. Mostra diversi stati: idle (inattivo), dragover (file trascinato), loading (caricamento), success (completato). L\'avanzamento è visualizzato con un indicatore di progresso a ciambella.',
      },
      source: {
        language: 'html',
        code: `
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
  // Imposta file e lo blocca allo stato 'loading'
  ddLoading.simulateUpload('nome_file.pdf', 3900000);


  // -- 3. Setup Success State --
  const ddSuccess = document.getElementById('dd-success');
  // Imposta file, spinge il progresso al 100% e chiama success()
  ddSuccess.simulateUpload('nome_file.pdf', 3900000);
  ddSuccess.progress(1);
  ddSuccess.success();


  // -- 4. Setup Interactive/Animated --
  const ddInteractive = document.getElementById('dd-interactive');
  const btnSimulate = document.getElementById('btn-simulate');
  let simulationTimer;

  const startSimulation = () => {
    clearInterval(simulationTimer);

    // Inizializza i metadati se non sta già caricando
    if (ddInteractive._state !== 'loading') {
      ddInteractive.simulateUpload('nome_file.pdf', 3900000);
    }

    // Recupera il progresso attuale (da 0 a 1)
    let p = (ddInteractive._progress || 0) / 100;

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
  ddInteractive.addEventListener('it-change', startSimulation);
</script>
        `,
      },
    },
  },
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h5>Default</h5>
        ${renderUploadDragDrop({ name: 'upload-dd-idle', accept: '' })}
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
  `,
};

/**
 * Integrazione in un form HTML con validazione nativa required.
 */
export const UploadFormIntegrazione: Story = {
  name: 'Integrazione form e validazione',
  parameters: {
    docs: {
      description: {
        story:
          'Esempio con tutti e tre i componenti upload obbligatori all\'interno di un form. ' +
          '`<it-upload>` e `<it-upload-drag-drop>` e `<it-upload-avatar>` richiedono che l\'utente selezioni un file. ' +
          'Prova a inviare il form per vedere la validazione in azione.',
      },
      source: {
        language: 'html',
        code: `
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
</script>
        `,
      },
    },
  },
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 2rem;">
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

      <div style="margin-top: 0.5rem;">
        <it-button type="submit" variant="primary">Invia</it-button>
      </div>
    </form>
  `,
};

/**
 * Proprietà, Metodi e Eventi accessibili via JavaScript
 */
export const MetodiEPropPubblici: Story = {
  ...StoryFormControlMethodAndProps({
    componentName: 'it-upload',

    // Attenzione: nessun 'a capo' dopo il primo backtick!
    otherProps: `|\`files\`| Array dei file caricati (\`UploadFile[]\`). Disponibile in tutti e tre i componenti. |
|\`validity\`| Restituisce l'oggetto ValidityState nativo del campo input. |
|\`validationMessage\`| Messaggio di errore di validazione. |
|\`auto-success\` *it-upload*| Se presente, i file passano automaticamente allo stato \`success\` appena selezionati (senza dover chiamare \`setFileStatus()\`). Utile per scenari solo client-side. |
|\`illustration\` *it-upload-drag-drop*| URL dell'illustrazione mostrata nel componente. Se omesso viene usata l'illustrazione predefinita inclusa nel bundle. |
|\`overlay-label\` *it-upload-avatar*| Testo visibile nell'overlay desktop al passaggio del mouse / focus. Default: "Aggiorna" (i18n). |`,

    otherMethods: `|\`addFile()\` *it-upload*| Aggiunge programmaticamente un file con stato 'loading'. Ritorna l'id generato. | file |
|\`setFileStatus()\` *it-upload*| Aggiorna lo stato e il progresso (0-100) di un file. | id, status, progress? |
|\`setFileThumbnail()\` *it-upload*| Imposta una thumbnail (data URL) per un file. | id, dataUrl |
|\`removeFile()\` *it-upload*| Rimuove un file dalla lista. | id |
|\`start()\` *it-upload-drag-drop*| Avvia lo stato di caricamento mostrando il progress. | - |
|\`progress()\` *it-upload-drag-drop*| Aggiorna il progresso (valore 0-1). | value |
|\`success()\` *it-upload-drag-drop*| Segna il caricamento come completato. | - |
|\`reset()\` *it-upload-drag-drop*| Ripristina lo stato iniziale. | - |
|\`simulateUpload()\` *it-upload-drag-drop*| Imposta metadati file e avvia lo stato loading (utile per demo e test). | fileName, fileSize? |`,

    otherEvents: `|\`it-upload-add\` *it-upload*| Emesso quando file vengono selezionati. \`detail: { files: File[], name, id }\` |
|\`it-upload-remove\` *it-upload*| Emesso quando un file viene rimosso. \`detail: { id, name, componentName, componentId }\` |
|\`it-change\` *it-upload*, *it-upload-avatar* e *it-upload-drag-drop*| Emesso ad ogni modifica. \`detail: { files?: File[], file?: File, name, id }\` |`,
  }),
  tags: ['!dev'],
};
