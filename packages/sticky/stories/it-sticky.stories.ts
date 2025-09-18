import { html, nothing } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';
import type { StickyOptions } from '@italia/sticky';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@italia/sticky';

function renderSticky({ stackable, paddingTop, stickyClassName, positionType }: StickyOptions) {
  return html`
    <it-sticky
      ?stackable=${ifDefined(stackable)}
      padding-top=${ifDefined(paddingTop || nothing)}
      sticky-class-name=${ifDefined(stickyClassName || nothing)}
      position-type=${ifDefined(positionType || nothing)}
    >
      <div class="bg-primary text-white p-3">Elemento Sticky</div>
    </it-sticky>
  `;
}
const meta: Meta = {
  title: 'Componenti/Sticky',
  component: 'it-sticky',
  tags: ['autodocs'],
  args: {
    stackable: false,
    paddingTop: 0,
    stickyClassName: undefined,
    positionType: undefined,
  },
  parameters: {
    docs: {
      description: {
        component: `<Description>Rende un elemento della pagina costantemente visibile allo scorrere della pagina.</Description>
Talvolta è necessario che uno o più elementi della pagina restino sempre visibili anche quando essa viene fatta scorrere. Questo comportamento viene comunemente definito “sticky”.
<br>


Il componente <code>&lt;it-sticky&gt;</code> consente di mantenere visibile un elemento della pagina durante lo scroll, applicando automaticamente il comportamento “sticky”.
<br>
Per utilizzarlo, basta racchiudere il contenuto da fissare all’interno del tag <code>&lt;it-sticky&gt;</code>.
Il componente gestisce in autonomia anche casi avanzati, come elementi impilabili o con padding e classi personalizzate, attraverso specifiche proprietà.
<br>

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--single-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
`,
      },
    },
  },
  argTypes: {
    stackable: {
      control: 'boolean',
      description:
        "Attiva/disattiva la possibilità di rendere l'elemento impilabile su altri elementi sticky presenti in pagina",
      table: { defaultValue: { summary: false } },
    },
    paddingTop: {
      control: 'number',
      description: "Indica la distanza dall'elemento in sticky dal margine superiore",
      table: { defaultValue: { summary: 0 } },
    },
    stickyClassName: {
      control: 'text',
      description: "Classi CSS da applicare all'elemento quando viene attivata la funzionalità sticky",
      table: { defaultValue: { summary: '' } },
    },
    positionType: {
      control: { type: 'select' },
      options: ['sticky', 'fixed'],
      description: 'Indica il valore della proprietà CSS `position`. I valori ammessi sono `sticky` o `fixed`',
      table: { defaultValue: { summary: 'sticky' } },
    },
  },
  render: (args) => renderSticky(args),
};
export default meta;

type Story = StoryObj;

export const Base: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const TopOffset: Story = {
  name: 'Offset',
  args: {
    paddingTop: 50,
  },
  parameters: {
    docs: {
      description: {
        story: `
Impostando la proprietà <code>padding-top</code>, è possibile definire un offset in pixel tra l’elemento e il margine superiore.
È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--padded-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
        `,
      },
    },
  },
};
export const Fixed: Story = {
  name: 'Position fixed',

  parameters: {
    docs: {
      description: {
        story: `
Il componente assegna all’elemento la proprietà CSS \`position\` con valore \`sticky\` di default.<br>
In alcuni casi, questo valore può causare problemi di posizionamento, specialmente se l’elemento cambia altezza quando diventa sticky.
Per questi scenari, è possibile forzare il valore \`fixed\` tramite l’attributo <code>position-type="fixed"</code>.
<br>

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--fixed-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
        `,
      },
      source: {
        code: `<it-sticky position-type="fixed">
  <div class="bg-primary text-white p-3">Elemento Sticky</div>
</it-sticky>`,
      },
    },
  },
};
export const CustomClass: Story = {
  name: 'Classi personalizzate',
  args: {
    stickyClassName: 'bg-light text-black',
  },
  parameters: {
    docs: {
      description: {
        story: `
Per personalizzare lo stile dell’elemento quando è sticky o fixed, puoi usare la proprietà <code>sticky-class-name</code>:
tutte le classi CSS che inserisci in questo attributo verranno aggiunte all’elemento quando diventa sticky e rimosse quando torna normale.

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--fixed-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
        `,
      },
    },
  },
};

export const Stackable: Story = {
  name: 'Versione impilabile',
  args: {
    stackable: true,
    paddingTop: 0,
    stickyClassName: '',
  },
  parameters: {
    docs: {
      description: {
        story: `
Se sono presenti più componenti sticky nella pagina, è possibile fare in modo che si impilino l’uno sull’altro utilizzando l’attributo <code>stackable</code>.

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--stackable-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
<br> Un'altra <a href="iframe.html?globals=&id=esempi-sticky--stackable-sticky-resize&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> mostra invece il comportamento con media query e breakpoint.
        `,
      },
    },
  },
};
