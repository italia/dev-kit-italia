import React from 'react';

const BackToTop = () => {
  return (
    <>
      <h1>Back to top</h1>

      <section style={{ height: '2000px', background: 'linear-gradient(white, lightgray)', marginTop: '20px' }}>
        <p>Scrolla la pagina per vedere il pulsante "Torna su" apparire nell'angolo in basso a destra.</p>
        <p class="small">
          Il componente è stato inserito nel file App.jsx per fare in modo che la sua posizione nel DOM sia dopo il
          footer. In questo modo è anche presente in tutte le pagine dell'applicazione di esempio.
        </p>
      </section>
    </>
  );
};

export default BackToTop;
