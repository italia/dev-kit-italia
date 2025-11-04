import React from 'react';

const Sticky = () => {
  return (
    <>
      <h1>it-sticky</h1>
      <div style={{ background: 'linear-gradient(#eee, #ccc)' }}>
        <section>
          <h2>Esempio componente it-sticky</h2>
          <p>Scrollare la pagina per vedere l'effetto sticky</p>
          <it-sticky className="w-100 bg-primary p-2 text-white">
            <div className="w-100">Elemento sticky</div>
          </it-sticky>
          <div style={{ height: '800px' }}></div>
        </section>

        <section>
          <h2>Esempio componente it-sticky: position-top offset</h2>
          <p>Scrollare la pagina per vedere l'effetto sticky con offset</p>
          <it-sticky className="w-100 bg-primary p-2 text-white" padding-top="50">
            <div className="w-100">Elemento sticky con top offset</div>
          </it-sticky>
          <div style={{ height: '800px' }}></div>
        </section>

        <section>
          <h2>Esempio componente it-sticky: position-type fixed</h2>
          <p>
            Scrollare la pagina per vedere l'effetto sticky: vedrai applicate la classi bg-warning w-100 l-0 fornite a
            sticky-class-name
          </p>
          <it-sticky
            sticky-class-name="bg-warning w-100 l-0"
            position-type="fixed"
            stackable
            className="w-100 bg-primary p-2 text-white"
          >
            <div className="w-100">Elemento sticky Fixed</div>
          </it-sticky>
        </section>

        <section>
          <h2>Sticky impilabili con resize</h2>
          <p>
            Scrollare la pagina per vedere l'effetto sticky: vedrai il componenti impilarsi uno sopra l'altro, e
            l'ultimo mantenere il suo top offset di 50px. Questo esempio mostra più componenti it-sticky con attributo
            stackable e la gestione dei resize del suo contenitore (ie media query).
          </p>

          <div style={{ containerType: 'inline-size', height: '100%', transition: 'width 0.3s', padding: '1rem' }}>
            <label htmlFor="size">Seleziona la larghezza del contenuto:</label>
            <select
              id="size"
              name="size"
              onChange={(e) => {
                const container = e.target.closest('section').querySelector('.container-resizable');
                if (container) {
                  container.style.width = `${e.target.value}px`;
                  container.getBoundingClientRect();
                }
              }}
            >
              <option value="1200">1200px</option>
              <option value="1000">1000px</option>
              <option value="800">800px</option>
              <option value="600">600px</option>
              <option value="400">400px</option>
            </select>

            <div className="container-resizable" style={{ width: '1200px', transition: 'width 0.3s' }}>
              <it-sticky className="bg-primary p-2 text-white w-100" stackable>
                <div className="resizable-content">Sticky Stackable 1</div>
              </it-sticky>

              <div style={{ height: '500px' }}></div>

              <it-sticky className="bg-success p-2 text-white w-100" stackable>
                <div className="resizable-content">Sticky Stackable 2</div>
              </it-sticky>

              <div style={{ height: '500px' }}></div>
              <it-sticky className="bg-success p-2 text-white w-100" stackable padding-top="50">
                <div className="resizable-content">Sticky Stackable with top offset</div>
              </it-sticky>

              <div style={{ height: '500px' }}></div>

              <it-sticky className="bg-danger p-2 text-white w-100" stackable>
                <div className="resizable-content">Sticky Stackable 3</div>
              </it-sticky>
              <div style={{ height: '1000px' }}></div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .resizable-content {
          height: 40px;
          transition: height 0.3s;
        }

        @container (max-width: 1200px) {
          .resizable-content {
            height: 40px;
          }
        }
        @container (max-width: 1000px) {
          .resizable-content {
            height: 60px;
          }
        }
        @container (max-width: 800px) {
          .resizable-content {
            height: 80px;
          }
        }
        @container (max-width: 500px) {
          .resizable-content {
            height: 100px;
          }
        }

        .l-0 {
          left: 0 !important;
        }
      `}</style>
    </>
  );
};

export default Sticky;
