import React from 'react';

const Skiplinks = () => {
  return (
    <>
      <h1>it-skiplinks</h1>

      <it-skiplinks it-aria-label="Vai a:">
        <a href="#menu">Vai al menu</a>
        <a href="#main-content">Vai al contenuto principale</a>
        <a href="#satisfaction">Questa pagina ti è stata utile?</a>
        <a href="#footer">Vai al piè di pagina</a>
        <a href="https://form.agid.gov.it/view/xyz">Dichiarazione di accessibilità (link esterno su sito AgID</a>
      </it-skiplinks>
      <section>
        <h2>Numero ridotto di skiplinks</h2>
        <it-skiplinks>
          <a href="#menu">Vai al menu</a>
          <a href="#main-content">Vai al contenuto principale</a>
        </it-skiplinks>
      </section>
    </>
  );
};

export default Skiplinks;
