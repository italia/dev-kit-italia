// upload.js — demo wiring for upload.html
// Mirrors the story helper custom elements from it-upload.stories.ts,
// adapted as plain vanilla JS for use without a build step.

const THUMBS = [
  'https://picsum.photos/seed/upload1/128/128',
  'https://picsum.photos/seed/upload2/128/128',
  'https://picsum.photos/seed/upload3/128/128',
  'https://picsum.photos/seed/upload4/128/128',
];

// ── Upload con stati file ─────────────────────────────────────────────────────

async function setupUploadFileStates() {
  const upload = document.getElementById('upload-states');
  if (!upload) return;
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
  dd.start();
}

// ── Drag & Drop — success state ───────────────────────────────────────────────

function setupDDSuccess() {
  const dd = document.getElementById('dd-success');
  if (!dd) return;
  dd.start();
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
    dd.reset();
    dd.start();
    let p = 0;
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
  dd.addEventListener('it-dd-drop', (e) => { e.preventDefault(); simulate(); });
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
  });
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    setupUploadFileStates();
    setupGalleryPrefilled();
    setupDDLoading();
    setupDDSuccess();
    setupDDInteractive();
    setupUploadForm();
  }, 0);
});

