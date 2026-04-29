import { useEffect, useRef } from 'react';

const THUMBS = [
  'https://picsum.photos/seed/upload1/128/128',
  'https://picsum.photos/seed/upload2/128/128',
  'https://picsum.photos/seed/upload3/128/128',
  'https://picsum.photos/seed/upload4/128/128',
];

const Upload = () => {
  const uploadStatesRef = useRef(null);
  const uploadGalleryFilledRef = useRef(null);
  const ddLoadingRef = useRef(null);
  const ddSuccessRef = useRef(null);
  const ddInteractiveRef = useRef(null);
  const btnSimulateRef = useRef(null);
  const uploadFormRef = useRef(null);
  const uploadFormResultRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(async () => {
      // Upload con stati file
      const upload = uploadStatesRef.current;
      if (upload) {
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
      }

      // Gallery pre-filled
      const gallery = uploadGalleryFilledRef.current;
      if (gallery) {
        await gallery.updateComplete;
        const g1 = gallery.addFile(new File(['x'], 'foto-01.jpg', { type: 'image/jpeg' }));
        const g2 = gallery.addFile(new File(['x'], 'foto-02.jpg', { type: 'image/jpeg' }));
        gallery.setFileThumbnail(g1, THUMBS[0]);
        gallery.setFileThumbnail(g2, THUMBS[1]);
        gallery.setFileStatus(g1, 'success');
        gallery.setFileStatus(g2, 'success');
      }

      // DD loading state
      const ddLoading = ddLoadingRef.current;
      if (ddLoading) ddLoading.start();

      // DD success state
      const ddSuccess = ddSuccessRef.current;
      if (ddSuccess) {
        ddSuccess.start();
        ddSuccess.progress(1);
        ddSuccess.success();
      }

      // DD interactive
      const dd = ddInteractiveRef.current;
      const btn = btnSimulateRef.current;
      if (dd && btn) {
        let simTimer;
        const simulate = () => {
          clearInterval(simTimer);
          dd.reset();
          dd.start();
          let p = 0;
          simTimer = setInterval(() => {
            p = Math.min(1, p + 0.1);
            dd.progress(p);
            if (p >= 1) {
              clearInterval(simTimer);
              setTimeout(() => dd.success(), 500);
            }
          }, 300);
        };
        btn.addEventListener('click', simulate);
        dd.addEventListener('it-dd-drop', (e) => { e.preventDefault(); simulate(); });
      }

      // Form submit
      const form = uploadFormRef.current;
      const result = uploadFormResultRef.current;
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          if (result) result.innerHTML = '<strong style="color: green;">✔ Form inviato con successo!</strong>';
        });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1>Upload</h1>

      {/* 1. Upload con lista di file */}
      <section className="my-5">
        <h2>Upload con lista di file</h2>
        <it-upload name="upload-list" multiple accept="image/*" image-preview auto-success>
          <span slot="label">Carica file</span>
        </it-upload>
      </section>

      {/* 2. Upload con lista di file — stati */}
      <section className="my-5">
        <h2>Upload con lista di file — stati</h2>
        <it-upload ref={uploadStatesRef} id="upload-states" multiple image-preview name="upload-states">
          <span slot="label">Carica file</span>
        </it-upload>
      </section>

      {/* 3. Upload Gallery */}
      <section className="my-5">
        <h2>Upload Gallery</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <it-upload variant="gallery" multiple accept="image/*" name="upload-gallery">
              <span slot="label">Carica immagini</span>
            </it-upload>
          </div>
          <div>
            <h3>Esempio immagini caricate</h3>
            <it-upload ref={uploadGalleryFilledRef} variant="gallery" multiple accept="image/*" name="upload-gallery-filled">
              <span slot="label">Carica immagini</span>
            </it-upload>
          </div>
        </div>
      </section>

      {/* 4. Upload con Avatar */}
      <section className="my-5">
        <h2>Upload con Avatar</h2>
        <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ marginTop: 0 }}>Dimensione Standard</h3>
            <it-upload-avatar
              src="https://randomuser.me/api/portraits/men/21.jpg"
              alt="Mario Rossi"
              size="xxl"
              name="avatar-standard"
            ></it-upload-avatar>
          </div>
          <div>
            <h3 style={{ marginTop: 0 }}>Dimensione Piccola</h3>
            <it-upload-avatar
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="Laura Bianchi"
              size="xl"
              name="avatar-sm"
            ></it-upload-avatar>
          </div>
        </div>
      </section>

      {/* 5. Upload Drag & Drop */}
      <section className="my-5">
        <h2>Upload Drag &amp; Drop</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <h3>Default</h3>
            <it-upload-drag-drop name="upload-dd-idle"></it-upload-drag-drop>
          </div>
          <div>
            <h3>Simula caricamento</h3>
            <it-upload-drag-drop ref={ddLoadingRef} name="upload-dd-loading"></it-upload-drag-drop>
          </div>
          <div>
            <h3>Processo completato</h3>
            <it-upload-drag-drop ref={ddSuccessRef} name="upload-dd-success"></it-upload-drag-drop>
          </div>
          <div>
            <h3>Esempio animato</h3>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
              <it-button ref={btnSimulateRef} type="button" variant="primary" size="sm">Simula Upload</it-button>
              <it-upload-drag-drop ref={ddInteractiveRef} name="upload-dd-demo"></it-upload-drag-drop>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Integrazione form e validazione */}
      <section className="my-5">
        <h2>Integrazione form e validazione</h2>
        <form ref={uploadFormRef} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3>Lista file (obbligatorio)</h3>
            <it-upload name="allegati" required multiple accept="image/*,.pdf">
              <span slot="label">Allega documenti</span>
            </it-upload>
          </div>
          <div>
            <h3>Avatar (obbligatorio)</h3>
            <it-upload-avatar name="foto-profilo" required alt="Mario Rossi"></it-upload-avatar>
          </div>
          <div>
            <h3>Drag &amp; Drop (obbligatorio)</h3>
            <it-upload-drag-drop name="documento" required></it-upload-drag-drop>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <it-button type="submit" variant="primary">Invia</it-button>
          </div>
        </form>
        <div ref={uploadFormResultRef} style={{ marginTop: '1rem', fontSize: '0.875rem' }}></div>
      </section>
    </>
  );
};

export default Upload;
