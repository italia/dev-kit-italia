import React from 'react';

const Collapse = () => {
  return (
    <>
      <h1>it-collapse</h1>
      
      <p>
        Il componente Collapse permette di mostrare e nascondere contenuti con un'animazione fluida.
      </p>

      <section>
        <h2>Comportamento base</h2>
        <p>La proprietà <code>as</code> seleziona il tag del trigger di default.</p>
        
        <div className="mb-3">
          <it-collapse as="button" variant="primary">
            <span slot="label">Apri sezione (button)</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </it-collapse>
        </div>

        <div className="mb-3">
          <it-collapse as="a" variant="link">
            <span slot="label">Apri sezione (a)</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </it-collapse>
        </div>
      </section>

      <section>
        <h2>Varianti del trigger</h2>
        <p>Usa l'attributo <code>variant</code> per applicare le varianti Bootstrap Italia ai trigger di Collapse.</p>
        
        <h3>Varianti colore</h3>
        <div className="d-flex flex-column gap-3 mb-4">
          <it-collapse variant="primary" as="button">
            <span slot="label">Pulsante primary</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse primary
            </div>
          </it-collapse>
          
          <it-collapse variant="secondary" as="button">
            <span slot="label">Pulsante secondary</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse secondary
            </div>
          </it-collapse>
          
          <it-collapse variant="success" as="button">
            <span slot="label">Pulsante success</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse success
            </div>
          </it-collapse>
          
          <it-collapse variant="danger" as="button">
            <span slot="label">Pulsante danger</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse danger
            </div>
          </it-collapse>
          
          <it-collapse variant="warning" as="button">
            <span slot="label">Pulsante warning</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse warning
            </div>
          </it-collapse>
          
          <it-collapse variant="link" as="button">
            <span slot="label">Pulsante link</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse link
            </div>
          </it-collapse>
        </div>

        <h3>Varianti outline</h3>
        <div className="d-flex flex-column gap-3 mb-4">
          <it-collapse variant="primary" outline={true} as="button">
            <span slot="label">Pulsante outline primary</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse outline primary
            </div>
          </it-collapse>
          
          <it-collapse variant="secondary" outline={true} as="button">
            <span slot="label">Pulsante outline secondary</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse outline secondary
            </div>
          </it-collapse>
          
          <it-collapse variant="success" outline={true} as="button">
            <span slot="label">Pulsante outline success</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse outline success
            </div>
          </it-collapse>
          
          <it-collapse variant="danger" outline={true} as="button">
            <span slot="label">Pulsante outline danger</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse outline danger
            </div>
          </it-collapse>
          
          <it-collapse variant="warning" outline={true} as="button">
            <span slot="label">Pulsante outline warning</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse outline warning
            </div>
          </it-collapse>
          
          <it-collapse variant="link" outline={true} as="button">
            <span slot="label">Pulsante outline link</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse outline link
            </div>
          </it-collapse>
        </div>

        <h3>Dimensioni</h3>
        <div className="d-flex flex-column gap-3 mb-4">
          <it-collapse size="xs" variant="primary" as="button">
            <span slot="label">Pulsante xs</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse xs
            </div>
          </it-collapse>
          
          <it-collapse size="sm" variant="primary" as="button">
            <span slot="label">Pulsante sm</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse sm
            </div>
          </it-collapse>
          
          <it-collapse size="lg" variant="primary" as="button">
            <span slot="label">Pulsante lg</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Contenuto del collapse lg
            </div>
          </it-collapse>
        </div>
      </section>

      <section>
        <h2>Stato iniziale aperto</h2>
        <p>L'attributo <code>default-open</code> permette di avere il collapse aperto al primo rendering.</p>
        
        <div className="mb-3">
          <it-collapse defaultOpen={true} as="button">
            <span slot="label">Apri sezione (button)</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Questo collapse è aperto di default al caricamento della pagina.
            </div>
          </it-collapse>
        </div>

        <div className="mb-3">
          <it-collapse as="a">
            <span slot="label">Apri sezione (a)</span>
            <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
              Questo collapse è chiuso di default.
            </div>
          </it-collapse>
        </div>
      </section>

      <section>
        <h2>Link come trigger</h2>
        <p>È possibile utilizzare un link come trigger del collapse.</p>
        
        <it-collapse as="a">
          <span slot="label">Link per aprire il collapse</span>
          <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </it-collapse>
      </section>

      <section>
        <h2>Trigger personalizzato</h2>
        <p>È possibile utilizzare un trigger personalizzato inserendo un elemento nello slot <code>trigger</code>.</p>
        
        <it-collapse>
          <button className="my-custom-collapse-button" slot="trigger">
            <span slot="label">Trigger custom</span>
          </button>
          <div slot="content" style={{padding: '1.5rem 1rem', backgroundColor: '#fff', border: '1px solid black', borderRadius:'4px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </it-collapse>

        <style jsx>{`
          .my-custom-collapse-button {
            background-color: #e0e0e0;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
          }
          .my-custom-collapse-button:hover {
            background-color: #d5d5d5;
          }
        `}</style>
      </section>
    </>
  );
};

export default Collapse;
