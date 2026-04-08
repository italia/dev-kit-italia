import React from 'react';

export default function BadgeDemo() {
  return (
    <>
      <h1>Badge</h1>
      <section>
        <h2>Badge - dimensione</h2>

        <div class="h1">
          Titolo di esempio h1<span class="badge badge-secondary">New</span>
        </div>
        <div class="h2">
          Titolo di esempio h2<span class="badge badge-secondary">New</span>
        </div>
        <div class="h3">
          Titolo di esempio h3<span class="badge badge-secondary">New</span>
        </div>
        <div class="h4">
          Titolo di esempio h4<span class="badge badge-secondary">New</span>
        </div>
        <div class="h5">
          Titolo di esempio h5<span class="badge badge-secondary">New</span>
        </div>
        <div class="h6">
          Titolo di esempio h6<span class="badge badge-secondary">New</span>
        </div>
      </section>

      {/* bottoni e link */}
      <section>
        <h2>Bottoni e link</h2>

        <it-button variant="primary">
          Notifiche
          <span class="badge badge-sm badge-inverse">4</span>
          <span class="visually-hidden">Messaggi non letti</span>
        </it-button>
      </section>

      {/* variazioni di colore */}
      <section>
        <h2>Variazioni di colore</h2>

        <span class="badge badge-primary mx-2">Primary</span>
        <span class="badge badge-secondary mx-2">Secondary</span>
        <span class="badge badge-success mx-2">Success</span>
        <span class="badge badge-danger mx-2">Danger</span>
        <span class="badge badge-warning mx-2">Warning</span>
      </section>

      {/* arrotondati */}
      <section>
        <h2>Badges arrotondati</h2>

        <span class="badge rounded-pill badge-primary mx-2">Primary</span>
        <span class="badge rounded-pill badge-secondary mx-2">Secondary</span>
        <span class="badge rounded-pill badge-success mx-2">Success</span>
        <span class="badge rounded-pill badge-danger mx-2">Danger</span>
        <span class="badge rounded-pill badge-warning mx-2">Warning</span>
      </section>

      {/* link */}
      <section>
        <h2>Link</h2>

        <a href="#" class="badge badge-primary mx-2">
          Primary
        </a>
        <a href="#" class="badge badge-secondary mx-2">
          Secondary
        </a>
        <a href="#" class="badge badge-success mx-2">
          Success
        </a>
        <a href="#" class="badge badge-danger mx-2">
          Danger
        </a>
        <a href="#" class="badge badge-warning mx-2">
          Warning
        </a>
      </section>
    </>
  );
}
