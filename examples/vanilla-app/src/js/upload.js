// upload.js — demo wiring for upload.html
// Mirrors the story helper custom elements from it-upload.stories.ts,
// adapted as plain vanilla JS for use without a build step.

const THUMBS = [
  'https://picsum.photos/seed/upload1/128/128',
  'https://picsum.photos/seed/upload2/128/128',
  'https://picsum.photos/seed/upload3/128/128',
  'https://picsum.photos/seed/upload4/128/128',
];

// ── Event log ─────────────────────────────────────────────────────────────────

function logEvent(label, detail) {
  const log = document.getElementById('events-log');
  if (!log) return;
  const empty = log.querySelector('em');
  if (empty) empty.remove();
  const entry = document.createElement('div');
  entry.style.borderBottom = '1px solid #ddd';
  entry.style.paddingBottom = '0.25rem';
  entry.style.marginBottom = '0.25rem';
  const files = detail?.files ?? (detail?.file ? [detail.file] : []);
  const names = files.map((f) => f?.name ?? '?').join(', ') || '—';
  entry.textContent = `[${new Date().toLocaleTimeString()}] ${label}: ${names}`;
  log.prepend(entry);
}

// ── Upload con stati file ─────────────────────────────────────────────────────

async function setupUploadFileStates() {
  const upload = document.getElementById('upload-states');
  if (!upload) return;
  // Wait for Lit element to finish first render
  if (typeof upload.updateComplete !== 'undefined') {
    await upload.updateComplete;
  }

  const id1 = upload.addFile(new File(['x'.repeat(71_303_168)], 'nome-file-01.jpg', { type: 'image/jpeg' }));
  const id2 = upload.addFile(
    new File(['x'.repeat(9_437_184)], 'nome-file-02-nome-file-lungo-per-ellissi.jpg', { type: 'image/jpeg' }),
  );
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

// ── Upload Gallery pre-filled ─────────────────────────────────────────────────

async function setupGalleryPrefilled() {
  const upload = document.getElementById('upload-gallery-filled');
  if (!upload) return;
  if (typeof upload.updateComplete !== 'undefined') {
    await upload.updateComplete;
  }

  const id1 = upload.addFile(new File(['x'], 'foto-01.jpg', { type: 'image/jpeg' }));
  const id2 = upload.addFile(new File(['x'], 'foto-02.jpg', { type: 'image/jpeg' }));

  upload.setFileThumbnail(id1, THUMBS[0]);
  upload.setFileThumbnail(id2, THUMBS[1]);
  upload.setFileStatus(id1, 'success');
  upload.setFileStatus(id2, 'success');
}

// ── Drag & Drop — loading state ───────────────────────────────────────────────

function setupDDLoading() {
  const dd = document.getElementById('dd-loading');
  if (!dd) return;
  dd.simulateUpload('nome_file.pdf', 3_900_000);
}

// ── Drag & Drop — success state ───────────────────────────────────────────────

function setupDDSuccess() {
  const dd = document.getElementById('dd-success');
  if (!dd) return;
  dd.simulateUpload('nome_file.pdf', 3_900_000);
  dd.progress(1);
  dd.success();
}

// ── Drag & Drop — interactive animated ───────────────────────────────────────

function setupDDInteractive() {
  const dd = document.getElementById('dd-interactive');
  const btn = document.getElementById('btn-simulate-dd');
  if (!dd || !btn) return;

  let timer;

  const simulate = () => {
    clearInterval(timer);
    if (dd._state !== 'loading') {
      dd.simulateUpload('nome_file.pdf', 3_900_000);
    }
    let p = (dd._progress || 0) / 100;
    timer = setInterval(() => {
      p = Math.min(1, p + 0.1);
      dd.progress(p);
      if (p >= 1) {
        clearInterval(timer);
        setTimeout(() => dd.success(), 500);
      }
    }, 300);
  };

  btn.addEventListener('click', simulate);
  dd.addEventListener('it-change', simulate);
}

// ── Avatar event log ──────────────────────────────────────────────────────────

function setupAvatarLog() {
  const log = document.getElementById('avatar-log');
  if (!log) return;
  ['avatar-standard', 'avatar-small', 'avatar-empty'].forEach((id) => {
    const avatar = document.getElementById(id);
    if (!avatar) return;
    avatar.addEventListener('it-change', (event) => {
      const file = event.detail?.files?.[0];
      log.textContent = file ? `Nuovo avatar selezionato (${id}): ${file.name} (${(file.size / 1024).toFixed(1)} KB)` : '';
      logEvent(`it-change [${id}]`, event.detail);
    });
  });
}

// ── Upload base it-change log ─────────────────────────────────────────────────

function setupUploadEventListeners() {
  // Log it-change for the base upload
  const uploadBase = document.querySelector('it-upload[name="upload-base"]');
  if (uploadBase) {
    uploadBase.addEventListener('it-change', (e) => logEvent('it-change [upload-base]', e.detail));
  }

  // Log it-change for the gallery upload
  const galleryEmpty = document.getElementById('upload-gallery-empty');
  if (galleryEmpty) {
    galleryEmpty.addEventListener('it-change', (e) => logEvent('it-change [upload-gallery-empty]', e.detail));
  }

  // Log it-change for dd-interactive
  const ddInteractive = document.getElementById('dd-interactive');
  if (ddInteractive) {
    ddInteractive.addEventListener('it-change', (e) => logEvent('it-change [dd-interactive]', e.detail));
  }
}

// ── Form integration ──────────────────────────────────────────────────────────

function setupUploadForm() {
  const form = document.getElementById('upload-form');
  const result = document.getElementById('upload-form-result');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (result) {
      result.innerHTML = '<strong style="color: green;">✔ Form inviato con successo!</strong>';
    }
    console.log('Upload form submitted');
  });
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Use setTimeout(0) to let custom-elements upgrade before we call their methods
  setTimeout(() => {
    setupUploadFileStates();
    setupGalleryPrefilled();
    setupDDLoading();
    setupDDSuccess();
    setupDDInteractive();
    setupAvatarLog();
    setupUploadEventListeners();
    setupUploadForm();
  }, 0);
});
