import React from 'react';

const Accordion = () => {
  const handleTabKey = (event) => {
    if (event.key === 'Tab') {
      // Preserva la navigazione con Tab
      return;
    }
  };

  return (
    <div onKeyDown={handleTabKey}>
      <h1>Accordion</h1>

      {/* Accordion Base */}
      <section>
        <h2>Accordion Base</h2>
        <p>L'accordion base permette di aprire e chiudere più elementi contemporaneamente.</p>

        <it-accordion>
          <it-accordion-item default-open>
            <span slot="heading">Elemento richiudibile #1</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #2</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #3</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
        </it-accordion>
      </section>

      {/* Modalità esclusiva */}
      <section>
        <h2>Modalità esclusiva</h2>
        <p>
          In modalità single, può essere aperto un solo elemento alla volta. Aprendo un elemento tutti gli altri si
          chiudono automaticamente.
        </p>

        <it-accordion mode="single">
          <it-accordion-item default-open>
            <span slot="heading">Elemento richiudibile #1</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #2</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #3</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
        </it-accordion>
      </section>

      {/* Header attivi */}
      <section>
        <h2>Stato attivo</h2>
        <p>
          Aggiungere la proprietà <code>background-active</code> per ottenere header con sfondo di colore primario
          quando questi sono attivi e il contenuto relativo è visibile.
        </p>

        <it-accordion background-active>
          <it-accordion-item default-open>
            <span slot="heading">Elemento richiudibile #1</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #2</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #3</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
        </it-accordion>
      </section>

      {/* Hover degli Header */}
      <section>
        <h2>Stato hover</h2>
        <p>
          Aggiungere la proprietà <code>background-hover</code> per ottenere header con sfondo di colore primario
          all'hover.
        </p>

        <it-accordion background-hover>
          <it-accordion-item default-open>
            <span slot="heading">Elemento richiudibile #1</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #2</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #3</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
        </it-accordion>
      </section>

      {/* Icona a sinistra */}
      <section>
        <h2>Icona a sinistra</h2>
        <p>
          Quando l'attributo <code>left-icon</code> è abilitato, le icone plus/minus vengono mostrate a sinistra del
          testo invece della freccia a destra. Questa variante è specifica per Bootstrap Italia.
        </p>

        <it-accordion left-icon>
          <it-accordion-item default-open>
            <span slot="heading">Elemento richiudibile #1</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #2</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #3</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
        </it-accordion>
      </section>

      {/* Accordion annidati */}
      <section>
        <h2>Accordion annidati</h2>
        <p>Più gruppi di accordion possono essere annidati.</p>
        <div className="alert alert-warning mb-4" role="alert">
          <strong>Accessibilità:</strong> Utilizzare questo approccio solo quando strettamente necessario: dal punto di
          vista dell'accessibilità non si tratta di una soluzione ottimale.
        </div>

        <it-accordion>
          <it-accordion-item default-open>
            <span slot="heading">Elemento richiudibile #1</span>
            <div slot="content">
              {/* Accordion annidato */}
              <it-accordion>
                <it-accordion-item as="h3" default-open>
                  <span slot="heading">Elemento richiudibile annidato #1</span>
                  <div slot="content">
                    Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien
                    dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper
                    nec turpis.
                  </div>
                </it-accordion-item>
                <it-accordion-item as="h3">
                  <span slot="heading">Elemento richiudibile annidato #2</span>
                  <div slot="content">
                    Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien
                    dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper
                    nec turpis.
                  </div>
                </it-accordion-item>
                <it-accordion-item as="h3">
                  <span slot="heading">Elemento richiudibile annidato #3</span>
                  <div slot="content">
                    Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien
                    dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper
                    nec turpis.
                  </div>
                </it-accordion-item>
              </it-accordion>
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #2</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
          <it-accordion-item>
            <span slot="heading">Elemento richiudibile #3</span>
            <div slot="content">
              Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
              facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
            </div>
          </it-accordion-item>
        </it-accordion>
      </section>
    </div>
  );
};

export default Accordion;
