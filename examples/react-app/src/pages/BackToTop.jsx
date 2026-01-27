import React from 'react';

const BackToTop = () => {
  return (
    <>
      <h1>it-back-to-top</h1>

      <section style={{ height: '2000px', background: 'linear-gradient(white, lightgray)', marginTop: '20px' }}>
        <p>Scrolla la pagina per vedere il pulsante "Torna su" apparire nell'angolo in basso a destra.</p>
      </section>
      <it-back-to-top it-aria-label="Torna su"></it-back-to-top>
    </>
  );
};

export default BackToTop;
