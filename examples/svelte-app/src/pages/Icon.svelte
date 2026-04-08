<h1>Icon</h1>

<it-icon name="it-star-full" align="middle"></it-icon>
<section>
  <h2>Varianti di colore</h2>
  <div style="display:flex; gap:20px; align-items:center; background-color:#ddd;padding:2rem">
    <it-icon name="it-star-full" label="col primary" color="primary"></it-icon>
    <it-icon name="it-star-full" label="col secondary" color="secondary"></it-icon>
    <it-icon name="it-star-full" label="col success" color="success"></it-icon>
    <it-icon name="it-star-full" label="col warning" color="warning"></it-icon>
    <it-icon name="it-star-full" label="col danger" color="danger"></it-icon>
    <it-icon name="it-star-full" label="col inverse" color="inverse"></it-icon>
  </div>
</section>
<section>
  <h2>Varianti di dimensione</h2>
  <div>
    <div style="display: flex; gap: 20px; align-items: baseline;">
      <div><it-icon name="it-star-full" size="xs"></it-icon></div>
      <div><it-icon name="it-star-full" size="sm"></it-icon></div>
      <div><it-icon name="it-star-full"></it-icon></div>
      <div><it-icon name="it-star-full" size="lg"></it-icon></div>
      <div><it-icon name="it-star-full" size="xl"></it-icon></div>
    </div>
  </div>
</section>
<section>
  <h2>Varianti di allineamento</h2>
  <div style="line-height: 5rem">
    <it-icon name="it-star-full" label="align top" align="top" size="lg"></it-icon>
    <it-icon name="it-star-full" label="align middle" align="middle" size="lg"></it-icon>
    <it-icon name="it-star-full" label="align bottom" align="bottom" size="lg"></it-icon>
  </div>
</section>
<section>
  <h2>Spaziatura</h2>
  <div>
    <div style="display: flex; gap: 20px; align-items: baseline;">
      <div><it-icon name="it-star-full" size="xs" padded></it-icon></div>
      <div><it-icon name="it-star-full" size="sm" padded></it-icon></div>
      <div><it-icon name="it-star-full" padded></it-icon></div>
      <div><it-icon name="it-star-full" size="lg" padded></it-icon></div>
      <div><it-icon name="it-star-full" size="xl" padded></it-icon></div>
    </div>
  </div>
</section>
<section>
  <h2>SVG personalizzato</h2>
  <div style="display: flex; gap: 20px; align-items: baseline;">
    <it-icon size="sm" label="Icona utente">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="red"></circle>
      </svg>
    </it-icon>
  </div>
</section>
<section>
  <h2>SVG esterno</h2>
  <div style="display: flex; gap: 20px; align-items: baseline;">
    <it-icon
      size="xl"
      label="Stemma 1"
      src="https://upload.wikimedia.org/wikipedia/commons/1/12/Palermo-Stemma_%281999%29.svg"
    ></it-icon>
    <it-icon size="xl" label="Stemma 2" src="https://upload.wikimedia.org/wikipedia/commons/3/31/Roma-Stemma-2.svg"
    ></it-icon>
    <it-icon
      size="xl"
      label="Stemma 3"
      src="https://upload.wikimedia.org/wikipedia/commons/9/93/CoA_Citt%C3%A0_di_Milano.svg"
    ></it-icon>
  </div>
</section>
