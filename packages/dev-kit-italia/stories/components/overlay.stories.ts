import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@italia/icon';

const meta = {
  title: 'Componenti/Overlay',
  tags: ['documentation', 'new'],

  //   parameters: {
  //     docs: {
  //       description: {
  //         component: `
  // <Description>Per applicare label con opacità sovrapposte ad immagini o a qualsiasi altro elemento.</Description>

  // La struttura basica è composta da:
  // - un contenitore con classe \`.overlay-wrapper\`. L'elemento contenuto (ad esempipo una immagine) conserva la sua dimensione naturale.
  // - l’overlay, un elemento con classe \`.overlay-panel\`, si posizione a piede del contenitore. Ha un’altezza fissa e una larghezza corrispondente a quella del contenitore.

  // Nel caso il testo contenuto dell'overlay sia troppo lungo verrà troncato con l’utilizzo di ellissi.

  // Aggiungendo all’Overlay la classe \`.overlay-panel-fullheight\` questo coprirà per intero il contenitore.

  // <div class="text-muted fst-italic">Negli esempi seguenti mostreremo le classi applicate al caso di una immagine con contenitore \`<figure>\` . </div>

  // <div class="callout callout-primary"><div class="callout-inner"><div class="callout-title"><span class="text">Stili</span></div>
  // <p>In caso non si stia utilizzando il bundle unico, assicurarsi di avere importato tutti i fogli di stile necessari da \`bootstrap-italia\`.</p></div></div>

  // `,
  //       },
  //     },
  //   },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Esempio: Story = {
  ...meta,
  name: 'Overlay default',
  parameters: {
    docs: {
      description: {
        story: `
Il colore predefinito dell’Overlay corrisponde al colore \`primary\`.
`,
      },
    },
  },
  render: () =>
    html` <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p><strong>Overlay ad altezza fissa</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <p><strong>Overlay a tutta altezza</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-panel-fullheight"><span>Label immagine</span></figcaption>
          </figure>
        </div>
        <div class="col-12">
          <p><strong>Esempio con differenti proporzioni</strong></p>
          <figure class="overlay-wrapper w-100">
            <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel"><span>Label immagine</span></figcaption>
          </figure>
        </div>
      </div>
    </div>`,
};

export const Nero: Story = {
  ...meta,
  name: 'Overlay nero',
  parameters: {
    docs: {
      description: {
        story: `
Aggiungendo all’Overlay la classe \`.overlay-black\` si ottiene un overlay di colore nero.
`,
      },
    },
  },
  render: () =>
    html` <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p><strong>Overlay ad altezza fissa</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <p><strong>Overlay a tutta altezza</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-panel-fullheight overlay-black">
              <span>Label immagine</span>
            </figcaption>
          </figure>
        </div>
        <div class="col-12">
          <p><strong>Esempio con differenti proporzioni</strong></p>
          <figure class="overlay-wrapper w-100">
            <img src="https://picsum.photos/800/300?image=1055" alt="descrizione immagine" class="img-fluid w-100" />
            <figcaption class="overlay-panel overlay-black"><span>Label immagine</span></figcaption>
          </figure>
        </div>
      </div>
    </div>`,
};

export const ConIcona: Story = {
  ...meta,
  name: 'Overlay con icona',
  parameters: {
    docs: {
      description: {
        story: `
Per ottenere un Overlay con icona centrata in verticale ed orizzontale aggiungere la classe \`.overlay-icon\`.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Ricordarsi di aggiungere un testo alternativo per screen reader che comunichi lo stesso messaggio dell’icona.</p></div></div>
`,
      },
    },
  },
  render: () =>
    html` <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <p><strong>Overlay primary (default)</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" />
            <figcaption class="overlay-panel overlay-icon">
              <span class="visually-hidden">Immagine Preferita</span>
              <it-icon name="it-star-outline" color="inverse"></it-icon>
            </figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-6">
          <p><strong>Overlay nero</strong></p>
          <figure class="overlay-wrapper">
            <img src="https://picsum.photos/240/160?image=1056" alt="descrizione immagine" />
            <figcaption class="overlay-panel overlay-black overlay-icon">
              <span class="visually-hidden">Immagine Preferita</span>
              <it-icon name="it-star-outline" color="inverse"></it-icon>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>`,
};
