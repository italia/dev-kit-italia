import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { PAGINATION_ALIGNMENTS, type PaginationAlignment } from '../src/types.js';

interface PaginationProps {
  value?: string;
  align?: PaginationAlignment;
  total?: string;
  disableResponsive?: boolean;
  simpleMode?: boolean;
  visiblePages?: number;
  itAriaLabel?: string;
}

interface PaginationItemProps {
  page: string;
  label: string;
  disabled?: boolean;
}

const renderPaginationItem = (params: PaginationItemProps) => html`
  <it-pagination-item page="${params.page}" ?disabled="${params.disabled}">
    <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>${params.label}</a>
  </it-pagination-item>
`;

const renderComponent = (params: PaginationProps, items: PaginationItemProps[] = []) => html`
  <it-pagination
    total="${ifDefined(params.total || undefined)}"
    value="${ifDefined(params.value)}"
    align="${ifDefined(params.align)}"
    ?disable-responsive="${ifDefined(params.disableResponsive)}"
  >
    <a href="#" slot="prev">
      <it-icon name="it-chevron-left"></it-icon>
      <span class="visually-hidden">Pagina precedente</span>
    </a>
    ${items.map((item) => renderPaginationItem(item))}
    <a href="#" slot="next">
      <it-icon name="it-chevron-right"></it-icon>
      <span class="visually-hidden">Pagina successiva</span>
    </a>
  </it-pagination>
`;

const defaultItems: PaginationItemProps[] = [
  { page: '1', label: '1' },
  { page: '2', label: '2' },
  { page: '3', label: '3' },
  { page: '4', label: '4' },
  { page: '5', label: '5' },
];

const meta: Meta<PaginationProps> = {
  title: 'Componenti/Pagination',
  tags: ['a11y-ok', 'web-component', 'alpha'],
  decorators: [
    (story, context) => {
      if (context.parameters.overrideMetaWrapper) return story();
      return html`
        <div style="padding-block: 2rem;margin:auto;display:flex;">
          <!-- START COMPONENT -->
          ${story()}
          <!-- END COMPONENT -->
        </div>
      `;
    },
  ],
  parameters: {
    layout: 'fullscreen',
    a11y: {
      config: {
        rules: [
          {
            id: 'list',
            enabled: false,
          },
          {
            id: 'listitem',
            enabled: false,
          },
        ],
      },
    },
  },
  args: {
    value: '1',
    total: '5',
    align: 'center',
    disableResponsive: false,
    simpleMode: false,
    visiblePages: 5,
    itAriaLabel: 'Paginazione',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Pagina corrente selezionata',
      table: { defaultValue: { summary: '1' } },
    },
    total: {
      control: false,
      description:
        'Numero totale di pagine, se non specificato viene calcolato in base agli elementi `it-pagination-item` presenti. Utile per indicare un numero di pagine diverso rispetto agli elementi effettivamente presenti (es. con caricamento dinamico) e in modalità simple-mode',
      table: { defaultValue: { summary: undefined } },
    },
    align: {
      control: 'select',
      description: 'Allineamento della paginazione',
      options: PAGINATION_ALIGNMENTS,
      table: { defaultValue: { summary: 'start' } },
    },
    disableResponsive: {
      name: 'disable-responsive',
      control: 'boolean',
      description: 'Disabilita responsive mode (nasconde pagine non correnti su mobile)',
      table: { defaultValue: { summary: 'false' } },
    },
    simpleMode: {
      name: 'simple-mode',
      control: false,
      description:
        "Abilita simple mode (mostra solo pagina corrente / totale, ottimizzato per mobile). Vai alla storia dedicata per l'esempio.",
      table: { defaultValue: { summary: 'false' } },
    },
    visiblePages: {
      name: 'visible-pages',
      control: 'number',
      description:
        "Numero di pagine visibili quando il totale (total) supera questo valore. Verranno mostrati i puntini '...' per indicare la presenza di ulteriori pagine.",
      table: { defaultValue: { summary: '5' } },
    },
    itAriaLabel: {
      name: 'it-aria-label',
      control: 'text',
      description: "Imposta l'attributo `aria-label` per il componente, utile per migliorare l'accessibilità.",
      table: { defaultValue: { summary: 'Paginazione' } },
    },
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const EsempioInterattivo: Story = {
  render: (args) => renderComponent(args, defaultItems),
};

export const ConNavigazione: Story = {
  name: 'Con pulsanti avanti e indietro',
  render: () => html`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  `,
};

export const ConNavigazioneTestuale: Story = {
  name: 'Con link testuali',
  render: () => html`
    <it-pagination value="3">
      <a href="#" slot="prev">Precedente</a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">Successiva</a>
    </it-pagination>
  `,
};

export const AllineamentoStart: Story = {
  name: 'Allineamento a sinistra',
  render: () => html`
    <it-pagination value="2" align="start">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};
export const AllineamentoCenter: Story = {
  name: 'Allineamento centrato',
  render: () => html`
    <it-pagination value="2" align="center">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};

export const AllineamentoEnd: Story = {
  name: 'Allineamento a destra',
  decorators: [(story) => html` <div style="width:100%">${story()}</div> `],
  render: () => html`
    <it-pagination value="2" align="end">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};

export const Responsive: Story = {
  name: 'Paginazione responsive',
  render: () => html`
    <it-pagination value="1">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina</span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};

export const ConTotale: Story = {
  name: 'Con numero totale di pagine',
  render: () => html`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};

export const ConPageChanger: Story = {
  name: 'Con selettore pagine',
  render: () => html`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>

      <div slot="page-changer">
        <label for="page-size" class="visually-hidden">Elementi per pagina:</label>
        <select id="page-size" class="form-select" style="padding-right: 1.5rem;">
          <option value="10">10/pagina</option>
          <option value="20" selected>20/pagina</option>
          <option value="50">50/pagina</option>
          <option value="100">100/pagina</option>
        </select>
      </div>
    </it-pagination>

    <script>
      const pageSizeSelect = document.getElementById('page-size');
      pageSizeSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        console.log('PageChanger: Elementi per pagina selezionati:', selectedValue);
      });
    </script>
  `,
};

export const ConJumpToPage: Story = {
  name: 'Con salto a pagina specifica',
  render: () => html`
    <it-pagination id="jump" value="5" total="20">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>

      <div slot="jump-to-page" style="display: flex; align-items: center; gap: 0.5rem;">
        <it-input
          id="jumper-example"
          type="number"
          name="jumper-example"
          placeholder="Vai a ..."
          label-hidden
          style="width: 80px;"
        >
          <span slot="label">Vai a ...</span>
        </it-input>
      </div>
    </it-pagination>
    <script>
      const jumperInput = document.getElementById('jumper-example');
      const pagination = document.getElementById('jump');
      const pTot = parseInt(pagination.getAttribute('total'));

      jumperInput.addEventListener('it-change', () => {
        const pageNumber = jumperInput.value;
        if (pageNumber < 1 || pageNumber > pTot) {
          console.log('JumpToPage: Numero di pagina non valido', pageNumber);
          return;
        }
        console.log('JumpToPage: Vai a pagina', pageNumber);
        pagination.value = pageNumber.toString();
      });
    </script>
  `,
};

export const SimpleMode: Story = {
  args: {
    value: '3',
    total: '10',
  },
  render: () => html`
    <it-pagination simple-mode value="1" total="5">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  `,
};

export const MoreMode: Story = {
  args: {
    value: '25',
    total: '50',
    visiblePages: 5,
  },
  render: () => html`
    <it-pagination value="25" total="50" visible-pages="5" disable-responsive>
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      ${Array.from({ length: 50 }, (_, i) => i + 1).map(
        (page) => html`
          <it-pagination-item page="${page}">
            <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>${page}</a>
          </it-pagination-item>
        `,
      )}

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  `,
};
