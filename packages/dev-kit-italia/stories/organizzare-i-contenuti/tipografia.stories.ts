/* eslint-disable storybook/no-redundant-story-name */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const meta = {
  title: 'Organizzare i contenuti/Tipografia',
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const TitilliumWeb: Story = {
  name: 'Titillium Web',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p class="font-sans-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
<p class="font-sans-serif">abcdefghijklmnopqrstuvwxyz</p>
<p class="font-sans-serif">0123456789</p>`,
      },
    },
  },
  render: () =>
    html`<p class="font-sans-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p class="font-sans-serif">abcdefghijklmnopqrstuvwxyz</p>
      <p class="font-sans-serif">0123456789</p>`,
};

export const Lora: Story = {
  name: 'Lora',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p class="font-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
<p class="font-serif">abcdefghijklmnopqrstuvwxyz</p>
<p class="font-serif">0123456789</p>`,
      },
    },
  },
  render: () =>
    html`<p class="font-serif">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p class="font-serif">abcdefghijklmnopqrstuvwxyz</p>
      <p class="font-serif">0123456789</p>`,
};

export const RobotoMono: Story = {
  name: 'Roboto Mono',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p class="font-monospace">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
<p class="font-monospace">abcdefghijklmnopqrstuvwxyz</p>
<p class="font-monospace">0123456789</p>`,
      },
    },
  },
  render: () =>
    html`<p class="font-monospace">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
      <p class="font-monospace">abcdefghijklmnopqrstuvwxyz</p>
      <p class="font-monospace">0123456789</p>`,
};

export const Intestazioni: Story = {
  name: 'Intestazioni',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<h1 class="no_toc">Intestazione di tipo h1</h1>
<h2 class="no_toc">Intestazione di tipo h2</h2>
<h3 class="no_toc">Intestazione di tipo h3</h3>
<h4 class="no_toc">Intestazione di tipo h4</h4>
<h5 class="no_toc">Intestazione di tipo h5</h5>
<h6 class="no_toc">Intestazione di tipo h6</h6>`,
      },
    },
  },
  render: () =>
    html`<h1 class="no_toc">Intestazione di tipo h1</h1>
      <h2 class="no_toc">Intestazione di tipo h2</h2>
      <h3 class="no_toc">Intestazione di tipo h3</h3>
      <h4 class="no_toc">Intestazione di tipo h4</h4>
      <h5 class="no_toc">Intestazione di tipo h5</h5>
      <h6 class="no_toc">Intestazione di tipo h6</h6>`,
};

export const StiliIntestazioni: Story = {
  name: 'Stili intestazioni',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p class="h1">Testo con classe .h1</p>
<p class="h2">Testo con classe .h2</p>
<p class="h3">Testo con classe .h3</p>
<p class="h4">Testo con classe .h4</p>
<p class="h5">Testo con classe .h5</p>
<p class="h6">Testo con classe .h6</p>`,
      },
    },
  },
  render: () =>
    html`<p class="h1">Testo con classe .h1</p>
      <p class="h2">Testo con classe .h2</p>
      <p class="h3">Testo con classe .h3</p>
      <p class="h4">Testo con classe .h4</p>
      <p class="h5">Testo con classe .h5</p>
      <p class="h6">Testo con classe .h6</p>`,
};

export const IntestazioneH1InEvidenza: Story = {
  name: 'Intestazione h1 in evidenza',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<h1 class="no_toc display-1">Intestazione di tipo h1 in evidenza</h1>`,
      },
    },
  },
  render: () => html`<h1 class="no_toc display-1">Intestazione di tipo h1 in evidenza</h1>`,
};

export const ParagrafiContenuti: Story = {
  name: 'Paragrafi contenuti',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p>Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna. Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars studiorum, prodita quaerimus.</p>
<p>Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna. Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars studiorum, prodita quaerimus.</p>`,
      },
    },
  },
  render: () =>
    html`<p>
        Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna.
        Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars
        studiorum, prodita quaerimus.
      </p>
      <p>
        Ullamco laboris nisi ut aliquid ex ea commodi consequat. Curabitur blandit tempus ardua ridiculus sed magna.
        Curabitur est gravida et libero vitae dictum. Phasellus laoreet lorem vel dolor tempus vehicula. Magna pars
        studiorum, prodita quaerimus.
      </p>`,
};

export const ParagrafiInEvidenza: Story = {
  name: 'Paragrafi in evidenza',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p class="lead">Paragrafo in evidenza</p>`,
      },
    },
  },
  render: () => html`<p class="lead">Paragrafo in evidenza</p>`,
};

export const MarkupSemanticoNeiParagrafi: Story = {
  name: 'Markup semantico nei paragrafi',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p>Esempio di testo <u>sottolineato</u>.</p>
<p>Esempio di testo <mark>evidenziato</mark>.</p>
<p>Esempio di testo <em>corsivo</em>.</p>
<p>Esempio di testo <strong>in grassetto</strong>.</p>
<p>Esempio di testo <small>rimpicciolito</small>.</p>
<p>Esempio di <code>codice</code> in un paragrafo di testo.</p>
<ins>Testo aggiunto</ins>
<del>Testo rimosso</del>`,
      },
    },
  },
  render: () =>
    html`<p>Esempio di testo <u>sottolineato</u>.</p>
      <p>Esempio di testo <mark>evidenziato</mark>.</p>
      <p>Esempio di testo <em>corsivo</em>.</p>
      <p>Esempio di testo <strong>in grassetto</strong>.</p>
      <p>Esempio di testo <small>rimpicciolito</small>.</p>
      <p>Esempio di <code>codice</code> in un paragrafo di testo.</p>
      <ins>Testo aggiunto</ins>
      <del>Testo rimosso</del>`,
};

export const Link: Story = {
  name: 'Link',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p>Esempio di <a href="#">link normale</a>.</p>
<p>Esempio di <a href="#">link con icona <svg role="presentation" class="icon icon-sm icon-primary"><title>Freccia destra</title><use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg></a></p>`,
      },
    },
  },
  render: () =>
    html`<p>Esempio di <a href="#">link normale</a>.</p>
      <p>
        Esempio di
        <a href="#"
          >link con icona
          <svg role="presentation" class="icon icon-sm icon-primary">
            <title>Freccia destra</title>
            <use href="/dist/svg/sprites.svg#it-arrow-right"></use></svg
        ></a>
      </p>`,
};

export const Abbreviazioni: Story = {
  name: 'Abbreviazioni',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>`,
      },
    },
  },
  render: () =>
    html`<p><abbr title="attribute">attr</abbr></p>
      <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>`,
};

export const Citazioni: Story = {
  name: 'Citazioni',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<blockquote class="blockquote">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
</blockquote>`,
      },
    },
  },
  render: () =>
    html`<blockquote class="blockquote">
      <p class="mb-0">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt sequi eos ratione.
      </p>
    </blockquote>`,
};

export const CitazioniConFonte: Story = {
  name: 'Citazioni con fonte',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<blockquote class="blockquote">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer">Nome Cognome da <cite title="Titolo fonte">Titolo fonte</cite></footer>
</blockquote>`,
      },
    },
  },
  render: () =>
    html`<blockquote class="blockquote">
      <p class="mb-0">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt sequi eos ratione.
      </p>
      <footer class="blockquote-footer">Nome Cognome da <cite title="Titolo fonte">Titolo fonte</cite></footer>
    </blockquote>`,
};

export const CitazioneCentrata: Story = {
  name: 'Citazione, centrata',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<blockquote class="blockquote text-center">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer">Nome Cognome da <cite title="Titolo fonte">Titolo fonte</cite></footer>
</blockquote>`,
      },
    },
  },
  render: () =>
    html`<blockquote class="blockquote text-center">
      <p class="mb-0">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt sequi eos ratione.
      </p>
      <footer class="blockquote-footer">Nome Cognome da <cite title="Titolo fonte">Titolo fonte</cite></footer>
    </blockquote>`,
};

export const CitazioneADestra: Story = {
  name: 'Citazione, a destra',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<blockquote class="blockquote text-end">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>`,
      },
    },
  },
  render: () =>
    html`<blockquote class="blockquote text-end">
      <p class="mb-0">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt sequi eos ratione.
      </p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>`,
};

export const CitazioneBase: Story = {
  name: 'Citazione, base',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<blockquote class="blockquote blockquote-simple">
  <p class="mb-0">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
</blockquote>`,
      },
    },
  },
  render: () =>
    html`<blockquote class="blockquote blockquote-simple">
      <p class="mb-0">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt sequi eos ratione.
      </p>
    </blockquote>`,
};

export const CitazioneCard: Story = {
  name: 'Citazione, card',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<blockquote class="blockquote blockquote-card">
  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer"><cite title="Titolo fonte">Titolo fonte</cite></footer>
</blockquote>`,
      },
    },
  },
  render: () =>
    html`<blockquote class="blockquote blockquote-card">
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt sequi eos ratione.
      </p>
      <footer class="blockquote-footer"><cite title="Titolo fonte">Titolo fonte</cite></footer>
    </blockquote>`,
};

export const CitazioneCardConSfondoScuro: Story = {
  name: 'Citazione, card con sfondo scuro',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<blockquote class="blockquote blockquote-card dark">
  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt sequi eos ratione.</p>
  <footer class="blockquote-footer"><cite title="Titolo fonte">Titolo fonte</cite></footer>
</blockquote>`,
      },
    },
  },
  render: () =>
    html`<blockquote class="blockquote blockquote-card dark">
      <p>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt sequi eos ratione.
      </p>
      <footer class="blockquote-footer"><cite title="Titolo fonte">Titolo fonte</cite></footer>
    </blockquote>`,
};

export const ListaSenzaStile: Story = {
  name: 'Lista senza stile',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul class="list-unstyled">
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>`,
      },
    },
  },
  render: () =>
    html`<ul class="list-unstyled">
      <li>Lorem ipsum dolor sit amet</li>
      <li>Consectetur adipiscing elit</li>
      <li>Integer molestie lorem at massa</li>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>
        Nulla volutpat aliquam velit
        <ul class="list-unstyled">
          <li>Phasellus iaculis neque</li>
          <li>Purus sodales ultricies</li>
          <li>Vestibulum laoreet porttitor sem</li>
          <li>Ac tristique libero volutpat at</li>
        </ul>
      </li>
      <li>Faucibus porta lacus fringilla vel</li>
      <li>Aenean sit amet erat nunc</li>
      <li>Eget porttitor lorem</li>
    </ul>`,
};

export const ListaInline: Story = {
  name: 'Lista inline',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>`,
      },
    },
  },
  render: () =>
    html`<ul class="list-inline">
      <li class="list-inline-item">Lorem ipsum</li>
      <li class="list-inline-item">Phasellus iaculis</li>
      <li class="list-inline-item">Nulla volutpat</li>
    </ul>`,
};

export const ListaAllineamentoDescrizione: Story = {
  name: 'Lista, allineamento descrizione',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        code: `<dl class="row">
  <dt class="col-sm-3">Lista descrizioni</dt>
  <dd class="col-sm-9">Una lista di discrezioni è lo strumento ideale per definire dei termini.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Testo troncato: questo testo troppo lungo verrà troncato</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Annidamento</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Lista descrizione annidata</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>`,
      },
    },
  },
  render: () =>
    html`<dl class="row">
      <dt class="col-sm-3">Lista descrizioni</dt>
      <dd class="col-sm-9">Una lista di discrezioni è lo strumento ideale per definire dei termini.</dd>

      <dt class="col-sm-3">Euismod</dt>
      <dd class="col-sm-9">
        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
      </dd>

      <dt class="col-sm-3">Malesuada porta</dt>
      <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

      <dt class="col-sm-3 text-truncate">Testo troncato: questo testo troppo lungo verrà troncato</dt>
      <dd class="col-sm-9">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
        risus.
      </dd>

      <dt class="col-sm-3">Annidamento</dt>
      <dd class="col-sm-9">
        <dl class="row">
          <dt class="col-sm-4">Lista descrizione annidata</dt>
          <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
        </dl>
      </dd>
    </dl>`,
};
