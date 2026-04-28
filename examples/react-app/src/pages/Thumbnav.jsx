const IMAGES = [
  { src: 'https://picsum.photos/240/160?image=1056', alt: 'Visualizza immagine 1' },
  { src: 'https://picsum.photos/240/160?image=1050', alt: 'Visualizza immagine 2' },
  { src: 'https://picsum.photos/240/160?image=1044', alt: 'Visualizza immagine 3' },
  { src: 'https://picsum.photos/240/160?image=1039', alt: 'Visualizza immagine 4' },
  { src: 'https://picsum.photos/240/160?image=1029', alt: 'Visualizza immagine 5' },
];

const renderItems = (count = 3, firstActive = true) =>
  IMAGES.slice(0, count).map((img, i) => (
    <it-thumbnav-item key={img.src}>
      <a href="#" className={`ratio ratio-3x2${i === 0 && firstActive ? ' active' : ''}`}>
        <img src={img.src} alt={img.alt} />
      </a>
    </it-thumbnav-item>
  ));

const Thumbnav = () => (
  <div>
    <h1>Thumbnav</h1>

    <section>
      <h2>Thumbnav base</h2>
      <p>Il primo elemento ha la classe <code>active</code> per indicare lo stato selezionato.</p>
      <it-thumbnav>{renderItems(3)}</it-thumbnav>
    </section>

    <section>
      <h2>Versione small</h2>
      <p>Aggiungi l'attributo <code>small</code> per ottenere thumbnail di dimensione ridotta (120px).</p>
      <it-thumbnav small>{renderItems(3)}</it-thumbnav>
    </section>

    <section>
      <h2>Hover senza zoom</h2>
      <p>Usa <code>hover="nozoom"</code> per disabilitare l'effetto di zoom al passaggio del mouse.</p>
      <it-thumbnav hover="nozoom">{renderItems(3)}</it-thumbnav>
    </section>

    <section>
      <h2>Hover con layer nero</h2>
      <p>Usa <code>hover="black"</code> per mostrare un overlay nero semitrasparente al passaggio del mouse.</p>
      <it-thumbnav hover="black">{renderItems(3)}</it-thumbnav>
    </section>

    <section>
      <h2>Hover con layer primary</h2>
      <p>Usa <code>hover="primary"</code> per mostrare un overlay di colore primary al passaggio del mouse.</p>
      <it-thumbnav hover="primary">{renderItems(3)}</it-thumbnav>
    </section>

    <section>
      <h2>Thumbnav verticale</h2>
      <p>Aggiungi <code>vertical</code> per disporre le thumbnail in colonna.</p>
      <it-thumbnav vertical>{renderItems(3)}</it-thumbnav>
    </section>

    <section>
      <h2>Griglia a larghezza fissa</h2>
      <p>Usa <code>fixed</code> per assegnare a ogni thumbnail una larghezza fissa di 240px.</p>
      <it-thumbnav fixed>{renderItems(5)}</it-thumbnav>
    </section>

    <section>
      <h2>Griglia automatica — 3 per riga</h2>
      <p>Usa <code>auto="3"</code> per distribuire le thumbnail su tutta la larghezza del contenitore in 3 colonne.</p>
      <it-thumbnav auto="3">{renderItems(5)}</it-thumbnav>
    </section>

    <section>
      <h2>Griglia automatica — 5 per riga</h2>
      <it-thumbnav auto="5">{renderItems(5)}</it-thumbnav>
    </section>

    <section>
      <h2>Overlay orizzontale inferiore</h2>
      <p>Inserisci la Thumbnav in un contenitore con <code>.position-relative</code> e usa <code>position="bottom"</code>.</p>
      <div className="position-relative" style={{ height: '400px' }}>
        <img
          src="https://picsum.photos/1280/720?image=1056"
          alt="Descrizione immagine"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <it-thumbnav position="bottom" small>{renderItems(3)}</it-thumbnav>
      </div>
    </section>

    <section>
      <h2>Overlay orizzontale superiore</h2>
      <div className="position-relative" style={{ height: '400px' }}>
        <img
          src="https://picsum.photos/1280/720?image=1050"
          alt="Descrizione immagine"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <it-thumbnav position="top" small>{renderItems(3)}</it-thumbnav>
      </div>
    </section>

    <section>
      <h2>Overlay verticale a sinistra</h2>
      <div className="position-relative" style={{ height: '500px' }}>
        <img
          src="https://picsum.photos/1280/720?image=1044"
          alt="Descrizione immagine"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <it-thumbnav position="left" small>{renderItems(3)}</it-thumbnav>
      </div>
    </section>

    <section>
      <h2>Overlay verticale a destra</h2>
      <div className="position-relative" style={{ height: '500px' }}>
        <img
          src="https://picsum.photos/1280/720?image=1039"
          alt="Descrizione immagine"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <it-thumbnav position="right" small>{renderItems(3)}</it-thumbnav>
      </div>
    </section>
  </div>
);

export default Thumbnav;
