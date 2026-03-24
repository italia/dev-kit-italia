import React from 'react';

const Progress = () => {
  return (
    <>
      <h1>Progress</h1>

      <section>
        <h2>Barra di avanzamento</h2>
        <div className="d-flex flex-column gap-3">
          <it-progress type="bar" value="50" it-aria-label="Caricamento al 50%"></it-progress>

          <h3 className="mt-4">Con etichetta</h3>
          <it-progress type="bar" value="35" show-value it-aria-label="Progresso con etichetta">
            35%
          </it-progress>

          <h3 className="mt-4">Indeterminato</h3>
          <it-progress type="bar" indeterminate it-aria-label="Caricamento in corso"></it-progress>

          <h3 className="mt-4">Varianti di colore</h3>
          <it-progress type="bar" value="25" color="success" it-aria-label="Caricamento successo"></it-progress>
          <it-progress type="bar" value="50" color="warning" it-aria-label="Caricamento warning"></it-progress>
          <it-progress type="bar" value="75" color="danger" it-aria-label="Caricamento danger"></it-progress>
        </div>
      </section>

      <section>
        <h2>Donut</h2>
        <div className="row g-4">
          <div className="col-6">
            <p className="mb-2">Stato iniziale</p>
            <it-progress type="donut" value="0" it-aria-label="Caricamento 0%"></it-progress>
          </div>
          <div className="col-6">
            <p className="mb-2">Stato avanzamento</p>
            <it-progress type="donut" value="75" it-aria-label="Caricamento 75%"></it-progress>
          </div>
        </div>
      </section>

      <section>
        <h2>Spinner</h2>

        <h3 className="mt-4">Spinner base</h3>
        <div className="d-flex flex-wrap gap-4 align-items-center">
          <it-progress type="spinner" size="md" it-aria-label="Spinner standard"></it-progress>
          <it-progress type="spinner" active size="md" it-aria-label="Spinner attivo"></it-progress>
        </div>

        <h3 className="mt-4">Dimensioni dello spinner</h3>
        <div className="d-flex flex-wrap gap-4 align-items-center">
          <it-progress type="spinner" active size="sm" it-aria-label="Spinner small"></it-progress>
          <it-progress type="spinner" active size="lg" it-aria-label="Spinner large"></it-progress>
          <it-progress type="spinner" active size="xl" it-aria-label="Spinner extra large"></it-progress>
        </div>

        <h3 className="mt-4">Spinner doppio</h3>
        <div className="d-flex flex-wrap gap-4 align-items-center">
          <it-progress type="spinner" double active size="md" it-aria-label="Spinner doppio attivo"></it-progress>
        </div>
      </section>

      <section>
        <h2>Button con Progress</h2>
        <div className="d-flex flex-wrap gap-3 align-items-center">
          <it-button variant="primary" disabled className="m-4">
            Label del pulsante
            <it-icon name="it-github" color="inverse"></it-icon>
            <it-progress type="bar" value="50" it-aria-label="Caricamento"></it-progress>
          </it-button>
          <it-button variant="secondary" disabled className="m-4">
            Label del pulsante
            <it-icon name="it-github" color="inverse"></it-icon>
            <it-progress type="bar" value="75" it-aria-label="Caricamento"></it-progress>
          </it-button>
        </div>
      </section>
    </>
  );
};

function simulateUpload() {
  const uploadBtn = document.getElementById('uploadBtn');
  const progressContainer = document.getElementById('progressContainer');
  const uploadSuccess = document.getElementById('uploadSuccess');
  const uploadProgress = document.getElementById('uploadProgress');

  uploadBtn.style.display = 'none';
  progressContainer.style.display = 'block';
  uploadSuccess.style.display = 'none';

  let value = 0;
  const interval = setInterval(() => {
    value += Math.random() * 30;
    if (value > 100) value = 100;
    uploadProgress.setAttribute('value', Math.floor(value));

    if (value >= 100) {
      clearInterval(interval);
      progressContainer.style.display = 'none';
      uploadSuccess.style.display = 'block';
      setTimeout(() => {
        uploadBtn.style.display = 'block';
        uploadSuccess.style.display = 'none';
      }, 2000);
    }
  }, 500);
}

export default Progress;
