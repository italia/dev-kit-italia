<template>
  <h1>it-icon</h1>

  <it-icon name="it-star-full" align="middle"></it-icon>
  <section>
    <h2>Varianti di colore</h2>
    <div className="flex">
      <it-icon name="it-star-full" label="col primary" color="primary"></it-icon>

      <it-icon name="it-star-full" label="col secondary" color="secondary"></it-icon>

      <it-icon name="it-star-full" label="col success" color="success"></it-icon>

      <it-icon name="it-star-full" label="col warning" color="warning"></it-icon>

      <it-icon name="it-star-full" label="col danger" color="danger"></it-icon>

      <div :style="{ backgroundColor: '#000' }">
        <it-icon name="it-star-full" label="col inverse" color="inverse"></it-icon>
      </div>

      <div :style="{ backgroundColor: '#000' }">
        <it-icon name="it-star-full" label="col light" color="light"></it-icon>
      </div>

      <it-icon name="it-star-full" label="col disabled" color="disabled"></it-icon>

      <div :style="{ backgroundColor: '#000' }">
        <it-icon name="it-star-full" label="col white" color="white"></it-icon>
      </div>

      <span class="bg-light">
        <it-icon name="it-star-full" label="bg-light"></it-icon>
      </span>
      <span class="bg-dark">
        <it-icon name="it-star-full" label="bg-dark"></it-icon>
      </span>
    </div>
  </section>
  <section>
    <h2>Varianti di dimensione</h2>
    <div>
      <div className="flex">
        <div>
          <it-icon name="it-star-full" size="xs" align="middle"></it-icon>
        </div>
        <div>
          <it-icon name="it-star-full" size="sm" align="middle"></it-icon>
        </div>
        <div>
          <it-icon name="it-star-full" align="middle"></it-icon>
        </div>
        <div>
          <it-icon name="it-star-full" size="lg" align="middle"></it-icon>
        </div>
        <div>
          <it-icon name="it-star-full" size="xl" align="middle"></it-icon>
        </div>
      </div>
    </div>
  </section>
  <section>
    <h2>Varianti di allineamento</h2>
    <div className="flex">
      <div>
        <it-icon name="it-star-full" size="lg" label="align top" align="top"></it-icon>

        <it-icon name="it-star-full" size="lg" label="align middle" align="middle"></it-icon>

        <it-icon name="it-star-full" size="lg" label="align bottom" align="bottom"></it-icon>
      </div>
    </div>
  </section>
  <section>
    <h2>Spaziatura</h2>

    <div className="flex">
      <div>
        <it-icon name="it-star-full" size="xs" align="middle" padded="{true}"></it-icon>
      </div>
      <div>
        <it-icon name="it-star-full" size="sm" align="middle" padded="{true}"></it-icon>
      </div>
      <div>
        <it-icon name="it-star-full" align="middle" padded="{true}"></it-icon>
      </div>
      <div>
        <it-icon name="it-star-full" size="lg" align="middle" padded="{true}"></it-icon>
      </div>
      <div>
        <it-icon name="it-star-full" size="xl" align="middle" padded="{true}"></it-icon>
      </div>
    </div>
  </section>
  <section>
    <h2>SVG personalizzato</h2>
    <it-icon size="sm" label="Icona utente">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" fill="red"></circle>
      </svg>
    </it-icon>
  </section>
  <section>
    <h2>SVG esterno</h2>
    <div className="flex">
      <it-icon
        size="xl"
        label="Stemma 1"
        src="https://upload.wikimedia.org/wikipedia/commons/1/12/Palermo-Stemma_%281999%29.svg"
      ></it-icon>

      <it-icon
        size="xl"
        label="Stemma 2"
        src="https://upload.wikimedia.org/wikipedia/commons/3/31/Roma-Stemma-2.svg"
      ></it-icon>

      <it-icon
        size="xl"
        label="Stemma 3"
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/CoA_Citt%C3%A0_di_Milano.svg"
      ></it-icon>
    </div>
  </section>
</template>
