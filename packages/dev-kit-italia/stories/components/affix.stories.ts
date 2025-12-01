import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Componenti/Affix',
  tags: ['documentation', 'new'],
  //   parameters: {
  //     docs: {
  //       description: {
  //         component: `
  // <Description>Blocca la posizione di un elemento rispetto a un'area visibile della pagina una volta che questa viene raggiunta durante lo scorrimento.</Description>

  // Un elemento Affix rimane nella sua posizione originale fino a quando l’utente non scorre la pagina oltre l'elemento;
  // a quel punto, l’elemento viene “ancorato” a una zona fissa dello schermo (ad esempio la parte superiore).

  // Una volta che lo scorrimento della pagina supera l'area di ancoraggio dell'elemento, questo viene nascosto e non è più “ancorato”.

  // Questo comportamento è utile, per esempio, per mantenere visibili intestazioni, barre degli strumenti o pulsanti di azione dopo che si è superata una certa sezione del contenuto.

  // <div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Nota</span></div>
  // <p>È importante assicurarsi che un elemento Affix non nasconda il contenuto della pagina, soprattutto quando la dimensione della finestra del browser è ridotta.</p></div></div>
  // `,
  //       },
  //     },
  //   },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AffixTop: Story = {
  ...meta,
  name: 'Affix top',
  parameters: {
    docs: {
      description: {
        story: `
Per ancorare un elemento alla parte **alta** della pagina è sufficiente applicare la classe \`.affix-parent\` all’elemento che lo contiene e la classe **\`.affix-top\`** all’elemento stesso.

<div class="mt-5" style="font-size:0.9rem">Scorri il contenuto dell'esempio qui sotto per vedere l'effetto dell'affix.</div>
`,
      },
    },
  },
  render: () =>
    html` <h4 class="h6">Esempio 1:</h4>
      <div class="affix-example container border bg-white mb-4">
        <div class="row">
          <div class="col-6 col-md-3 p-2 affix-parent">
            <div class="neutral-1-bg-a7 p-3 mb-1">
              <p class="mb-0 white-color">Lorem ipsum</p>
            </div>
            <div class="neutral-1-bg-a7 p-3 mb-1">
              <p class="mb-0 white-color">Dolor sit</p>
            </div>
            <div class="primary-bg p-3 affix-top">
              <p class="mb-0 white-color">Affix top</p>
            </div>
          </div>
          <div class="col-6 col-md-9 p-2">
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur nulla
              justo, ullamcorper et pharetra nec, sagittis id augue. Ut imperdiet dolor neque, at imperdiet lectus
              finibus in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Duis fringilla nisi sed magna congue ultricies. Nam faucibus lacinia auctor. Morbi eget ullamcorper erat.
              Donec auctor, nulla non pellentesque vestibulum, nisl nulla iaculis lectus, nec tincidunt elit purus eu
              leo. Phasellus quis justo consequat, commodo mi pretium, porta turpis.
            </p>
            <p class="mb-0 d-none d-md-block">
              Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed
              semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at.
              Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula.
              Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras
              in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla
              nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna
              volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.
            </p>
          </div>
        </div>
        <div class="row p-2 d-none d-md-block">
          <p>
            Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper
            fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur
            varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu
            aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis
            tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis
            facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet.
            Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.
          </p>
        </div>
      </div>

      <h4 class="h6">Esempio 2:</h4>
      <div class="affix-example container affix-parent border bg-white">
        <div class="primary-bg p-3 mb-1 text-center affix-top">
          <p class="mb-0 white-color">Affix top</p>
        </div>
        <div class="row p-5">
          <p class="h3">Orci varius natoque penatibus et magnis</p>
          <p>
            Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper
            fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur
            varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu
            aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis
            tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis
            facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet.
            Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.
          </p>
          <p class="d-none d-md-block">
            Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla
            eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at
            diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus
            posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.
          </p>
        </div>
      </div>`,
};

export const AffixBottom: Story = {
  ...meta,
  name: 'Affix bottom',
  parameters: {
    docs: {
      description: {
        story: `
Per ancorare un elemento alla parte **bassa** della pagina è sufficiente applicare la classe \`.affix-parent\` all’elemento che lo contiene e la classe **\`.affix-bottom\`** all’elemento stesso.
<div class="mt-5" style="font-size:0.9rem">Scorri il contenuto dell'esempio qui sotto per vedere l'effetto dell'affix.</div>`,
      },
    },
  },
  render: () =>
    html`<h4 class="h6">Esempio 1:</h4>
      <div class="affix-example container border bg-white mb-4">
        <p>
          Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper
          fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur
          varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu
          aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis
          tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis
          facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet.
          Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.
        </p>
        <div class="row">
          <div class="col-6 col-md-3 p-2 affix-parent">
            <div class="neutral-1-bg-a7 p-3 mb-1">
              <p class="mb-0 white-color">Lorem ipsum</p>
            </div>
            <div class="neutral-1-bg-a7 p-3 mb-1">
              <p class="mb-0 white-color">Dolor sit</p>
            </div>
            <div class="neutral-1-bg-a7 p-3 mb-1">
              <p class="mb-0 white-color">Lorem ipsum</p>
            </div>
            <div class="neutral-1-bg-a7 p-3 mb-1">
              <p class="mb-0 white-color">Dolor sit</p>
            </div>
            <div class="primary-bg p-3 affix-bottom">
              <p class="mb-0 white-color">Affix bottom</p>
            </div>
          </div>
          <div class="col-6 col-md-9 p-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie quis orci sit amet sodales. Sed
              imperdiet nisl suscipit risus pharetra, eget placerat nulla aliquam. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur nulla justo, ullamcorper et pharetra
              nec, sagittis id augue. Ut imperdiet dolor neque, at imperdiet lectus finibus in. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis fringilla nisi sed magna
              congue ultricies. Nam faucibus lacinia auctor. Morbi eget ullamcorper erat. Donec auctor, nulla non
              pellentesque vestibulum, nisl nulla iaculis lectus, nec tincidunt elit purus eu leo. Phasellus quis justo
              consequat, commodo mi pretium, porta turpis.
            </p>
            <p class="d-none d-md-block">
              Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed
              semper fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at.
              Curabitur varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula.
              Phasellus eu aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras
              in mollis tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla
              nisi, quis facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna
              volutpat imperdiet. Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.
            </p>
          </div>
        </div>
        <div class="row p-2 d-none d-md-block">
          <p>
            Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper
            fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur
            varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu
            aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis
            tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis
            facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet.
            Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.
          </p>
        </div>
      </div>

      <h4 class="h6">Esempio 2:</h4>
      <div class="affix-example container affix-parent border bg-white">
        <div class="row p-5">
          <p class="h3">Orci varius natoque penatibus et magnis</p>
          <p>
            Mauris placerat commodo tincidunt. Mauris finibus hendrerit molestie. Vestibulum gravida, lectus sed semper
            fringilla, libero felis vehicula quam, at efficitur nisl justo mattis orci. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nulla rutrum venenatis tellus, vel suscipit tellus faucibus at. Curabitur
            varius nisi a erat vulputate aliquet. Vivamus eu purus pretium, porta lacus id, mattis ligula. Phasellus eu
            aliquam nisi. Nunc dictum in nulla eget porttitor. Mauris dapibus vitae orci id posuere. Cras in mollis
            tortor. Sed felis turpis, auctor ullamcorper ipsum vel, porta tempor felis. Integer rutrum nulla nisi, quis
            facilisis ipsum hendrerit non. Aenean at fringilla ipsum. Mauris sodales fermentum magna volutpat imperdiet.
            Nullam condimentum orci purus, eget vulputate ipsum dapibus sit amet.
          </p>
          <p class="d-none d-md-block">
            Pellentesque faucibus scelerisque diam sit amet vulputate. Aliquam vitae justo tellus. Sed pharetra, nulla
            eu ullamcorper pharetra, enim sem posuere ante, eget faucibus quam nisl vitae augue. Sed fringilla augue at
            diam facilisis consectetur. Donec ut lorem aliquet, varius nulla et, lacinia nunc. Nullam sit amet risus
            posuere, egestas nisl ac, hendrerit ex. In eu fermentum felis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Vivamus lacinia dictum dui, non condimentum nisi consectetur.
          </p>
        </div>
        <div class="primary-bg p-3 mb-1 text-center affix-bottom">
          <p class="mb-0 white-color">Affix bottom</p>
        </div>
      </div>`,
};
