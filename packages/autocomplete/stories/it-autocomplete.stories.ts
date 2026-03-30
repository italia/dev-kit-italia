/* eslint-disable no-useless-escape */
import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { AutocompleteOption } from '../src/types';
import i18nIT from '../src/locales/it.js';

interface AutocompleteProps {
  id: string;
  label: string;
  name: string;
  form: string;
  customValidation: boolean;
  validityMessage: string;
  value: string;
  disabled?: boolean;
  required: boolean;
  placeholder: string;
  supportText: string;
  labelHidden: boolean;
  minLength: number;
  defaultValue: string;
  showArrow: boolean;
  source: AutocompleteOption[] | ((query: string, populateResults: (results: AutocompleteOption[]) => void) => void);
}

const italianRegions = [
  { value: 'abruzzo', label: 'Abruzzo' },
  { value: 'basilicata', label: 'Basilicata' },
  { value: 'calabria', label: 'Calabria' },
  { value: 'campania', label: 'Campania' },
  { value: 'emilia-romagna', label: 'Emilia Romagna' },
  { value: 'friuli-venezia-giulia', label: 'Friuli Venezia Giulia' },
  { value: 'lazio', label: 'Lazio' },
  { value: 'liguria', label: 'Liguria' },
  { value: 'lombardia', label: 'Lombardia' },
  { value: 'marche', label: 'Marche' },
  { value: 'molise', label: 'Molise' },
  { value: 'piemonte', label: 'Piemonte' },
  { value: 'puglia', label: 'Puglia' },
  { value: 'sardegna', label: 'Sardegna' },
  { value: 'sicilia', label: 'Sicilia' },
  { value: 'toscana', label: 'Toscana' },
  { value: 'trentino-alto-adige', label: 'Trentino Alto Adige' },
  { value: 'umbria', label: 'Umbria' },
  { value: 'valle-aosta', label: "Valle d'Aosta" },
  { value: 'veneto', label: 'Veneto' },
];

// Renderizza il componente it-autocomplete
const renderComponent = (params: any) =>
  html`<it-autocomplete
    id="${ifDefined(params.id || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    .value="${params.value}"
    ?disabled="${params.disabled}"
    ?required="${params.required}"
    form="${ifDefined(params.form || undefined)}"
    ?custom-validation="${params.customValidation}"
    validity-message="${ifDefined(params.validityMessage || undefined)}"
    placeholder="${ifDefined(params.placeholder || undefined)}"
    support-text="${ifDefined(params.supportText || undefined)}"
    ?label-hidden="${params.labelHidden}"
    min-length="${ifDefined(params.minLength || undefined)}"
    default-value="${params.defaultValue ? JSON.stringify(params.defaultValue) : nothing}"
    source="${params.source ? JSON.stringify(params.source) : nothing}"
  >
    <span slot="label">${params.label}</span>
  </it-autocomplete>`;

const meta = {
  title: 'Componenti/Form/Autocomplete',
  tags: ['alpha', 'a11y-ok', 'web-component'],
  component: 'it-autocomplete',
  parameters: {
    layout: 'padded',
    docs: {
      source: { excludeDecorators: true },
    },
  },
  args: {
    id: 'autocomplete-regione',
    label: 'Regione',
    name: 'regione',
    value: '',
    form: '',
    customValidation: false,
    validityMessage: '',

    disabled: false,
    required: false,
    placeholder: '',
    supportText: '',
    labelHidden: false,
    minLength: 0,
    defaultValue: '',
    source: italianRegions,
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'ID del campo',
    },
    label: {
      control: 'text',
      description: 'Etichetta del campo',
    },
    name: {
      control: 'text',
      description: 'Nome del campo',
    },
    value: {
      control: false,
      description:
        'Valore corrente del campo: non modificare direttamente, usare gli eventi e/o default-value per inizializzazione con valore preimpostato.',
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    form: {
      control: 'text',
      type: 'string',
      description: "ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form ",
    },
    customValidation: {
      name: 'custom-validation',
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description:
        'Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`.',
    },
    validityMessage: {
      name: 'validity-message',
      control: 'text',
      description:
        "Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido.",
    },
    placeholder: {
      control: 'text',
      description: 'Testo segnaposto',
    },
    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto',
    },
    labelHidden: {
      name: 'label-hidden',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description: "Nasconde visivamente l'etichetta",
    },

    minLength: {
      name: 'min-length',
      control: 'number',
      table: { defaultValue: { summary: '0' } },
      description: 'Numero minimo di caratteri prima di mostrare i suggerimenti',
    },
    defaultValue: {
      name: 'default-value',
      control: 'text',
      description: 'Valore di default, deve corrispondere a uno dei valori delle opzioni (option.value)',
    },
    source: {
      control: 'object',
      description:
        'Sorgente di dati: array di oggetti `{value:string, label:string}` o funzione asincrona. Consulta la sezione "Opzioni dinamiche" per maggiori dettagli.',
    },
  },
  decorators: [(Story) => html` <div style="min-height: 400px;">${Story()}</div>`],
} satisfies Meta<AutocompleteProps>;

export default meta;
type Story = StoryObj<AutocompleteProps>;

// Esempio interattivo
export const EsempioInterattivo: Story = {
  render: (args) => html`${renderComponent({ ...args })}`,
  args: {
    ...meta.args,
    placeholder: 'Seleziona una regione...',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

// Placeholder
export const Placeholder: Story = {
  name: 'Con placeholder',
  args: {
    label: 'Cerca regione',
    placeholder: 'Es: Lombardia',
  },
  render: (args) => renderComponent(args),
};

// Testo di supporto
export const TestoDiSupporto: Story = {
  name: 'Con testo di supporto',
  args: {
    label: 'Regione di residenza',
    supportText: 'Seleziona la regione in cui risiedi',
  },
  render: (args) => renderComponent(args),
};

// Campo obbligatorio
export const CampoObbligatorio: Story = {
  name: 'Campo obbligatorio',
  args: {
    label: 'Regione',
    required: true,
    supportText: 'Questo campo è obbligatorio',
  },
  render: (args) => renderComponent(args),
};

// Con minLength
export const ConMinLength: Story = {
  name: 'Con lunghezza minima',
  args: {
    label: 'Regione',
    minLength: 3,
    supportText: 'Digita almeno 3 caratteri per vedere i suggerimenti',
  },
  render: (args) => renderComponent(args),
};

// Disabilitato
export const Disabilitato: Story = {
  name: 'Campo disabilitato',
  args: {
    label: 'Regione',
    disabled: true,
    defaultValue: 'Lombardia',
  },
  render: (args) => renderComponent(args),
};

export const MatriceComportamento: Story = {
  name: 'Valore di default',
  parameters: {
    docs: {
      description: {
        story: `Questa griglia dimostra come il componente reagisce alle combinazioni di **Source** e **Default Value**.
        <br>Notare come il **Caso 3** (Async + Stringa) fallisca visivamente (input vuoto) perché il componente non può risolvere la label "Roma" dall'ID "rm" senza una source statica.
        Il **Caso 2** mostra come un Oggetto venga accettato anche se non presente nella source ("Fiducia").`,
      },
      source: {
        language: 'html',
        code: `<div class="row g-4">

  <div class="col-12 col-md-6">
    <h6>Source Statica + Default Stringa</h6>
    <it-autocomplete id="matrix-1" label="Città" default-value="rm" source="[{&quot;value&quot;:&quot;rm&quot;,&quot;label&quot;:&quot;Roma&quot;},{&quot;value&quot;:&quot;mi&quot;,&quot;label&quot;:&quot;Milano&quot;}]" >
      <span slot="label">Città</span>
    </it-autocomplete>
  </div>


  <div class="col-12 col-md-6">
    <h6>Source Function + Default Oggetto</h6>
    <it-autocomplete id="matrix-2" label="Città">
      <span slot="label">Città</span>
    </it-autocomplete>
  </div>


</div>

<script>
  // Dati statici
  const staticSource = [
    { value: 'rm', label: 'Roma' },
    { value: 'mi', label: 'Milano' }
  ];

  // Funzione asincrona simulata
  const asyncSource = (query, populateResults) => {
    setTimeout(() => {
      const filtered = staticSource.filter(i =>
        i.label.toLowerCase().includes(query.toLowerCase())
      );
      populateResults(filtered);
    }, 500);
  };

  // --- CONFIGURAZIONE JS ---


  // CASO 2: Async + Stringa
  // Qui il componente ha value="rm", ma non avendo la lista (è una funzione),
  // non sa che "rm" corrisponde a "Roma". L'input apparirà VUOTO.
  document.getElementById('matrix-2').source = asyncSource;

</script>`,
      },
    },
  },
  render: () => {
    // Source Statica (Manca "Torino")
    const staticSource = [
      { value: 'rm', label: 'Roma' },
      { value: 'mi', label: 'Milano' },
    ];
    // Source Async (Simulata)
    const asyncSource = (query: string, populateResults: any) => {
      setTimeout(
        () => populateResults(staticSource.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()))),
        500,
      );
    };

    return html`
      <div class="row g-4" style-"height: 600px;">
        <div class="col-12 col-md-6">
          <div class="p-3 border rounded">
            <h6 class="fw-bold">Source Statica + Default value Stringa</h6>
            ${renderComponent({
              label: 'Città',
              name: 'matrix-1',
              defaultValue: 'rm',
              source: staticSource,
            })}
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="p-3 border rounded border-success">
            <h6 class="fw-bold">Source Function + Default value Oggetto</h6>
            <it-autocomplete
              label="Città"
              name="matrix-2"
              default-value="${JSON.stringify({ value: 'rm', label: 'Roma' })}"
              .source="${asyncSource}"
            >
              <span slot="label">Città</span>
            </it-autocomplete>
          </div>
        </div>
      </div>
    `;
  },
};
export const LabelHidden: Story = {
  name: 'Etichetta nascosta',
  args: {
    label: 'Cerca regione',
    labelHidden: true,
    placeholder: 'Cerca regione...',
  },
  render: (args) => renderComponent(args),
};

// Ricerca asincrona con funzione
export const RicercaAsincrona: Story = {
  name: 'Ricerca asincrona',
  parameters: {
    docs: {
      description: {
        story: `La property \`source\` può essere una funzione che riceve la query dell'utente e una callback \`populateResults\`. Utile per ricerche asincrone (API, database, ecc.).`,
      },
      source: {
        code: `<!-- HTML -->
<it-autocomplete id="autocomplete-async" name="citta">
  <span slot="label">Cerca città</span>
  <span slot="support-text">Digita almeno 2 caratteri</span>
</it-autocomplete>

<script>
  // Simulazione di un database di città
  const cities = [
    { value: 'milano', label: 'Milano' },
    { value: 'roma', label: 'Roma' },
    { value: 'napoli', label: 'Napoli' },
    { value: 'torino', label: 'Torino' },
    { value: 'palermo', label: 'Palermo' },
    { value: 'genova', label: 'Genova' },
    { value: 'bologna', label: 'Bologna' },
    { value: 'firenze', label: 'Firenze' },
    { value: 'bari', label: 'Bari' },
    { value: 'catania', label: 'Catania' },
    { value: 'venezia', label: 'Venezia' },
    { value: 'verona', label: 'Verona' },
    { value: 'messina', label: 'Messina' },
    { value: 'padova', label: 'Padova' },
    { value: 'trieste', label: 'Trieste' },
    { value: 'brescia', label: 'Brescia' },
    { value: 'parma', label: 'Parma' },
    { value: 'taranto', label: 'Taranto' },
    { value: 'prato', label: 'Prato' },
    { value: 'modena', label: 'Modena' },
    { value: 'reggio-calabria', label: 'Reggio Calabria' },
    { value: 'reggio-emilia', label: 'Reggio Emilia' },
    { value: 'perugia', label: 'Perugia' },
    { value: 'ravenna', label: 'Ravenna' },
    { value: 'livorno', label: 'Livorno' },
    { value: 'cagliari', label: 'Cagliari' },
    { value: 'foggia', label: 'Foggia' },
  ];

  const autocomplete = document.getElementById('autocomplete-async');

  // Funzione di ricerca asincrona
  autocomplete.source = function(query, populateResults) {
    // Simula un ritardo di rete (800ms)
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const results = cities
        .filter(city => city.label.toLowerCase().includes(lowerQuery))
        .slice(0, 10); // Limita a 10 risultati

      populateResults(results);
    }, 800);
  };
</script>`,
      },
    },
  },
  render: () => {
    const cities = [
      { value: 'milano', label: 'Milano' },
      { value: 'roma', label: 'Roma' },
      { value: 'napoli', label: 'Napoli' },
      { value: 'torino', label: 'Torino' },
      { value: 'palermo', label: 'Palermo' },
      { value: 'genova', label: 'Genova' },
      { value: 'bologna', label: 'Bologna' },
      { value: 'firenze', label: 'Firenze' },
      { value: 'bari', label: 'Bari' },
      { value: 'catania', label: 'Catania' },
      { value: 'venezia', label: 'Venezia' },
      { value: 'verona', label: 'Verona' },
      { value: 'messina', label: 'Messina' },
      { value: 'padova', label: 'Padova' },
      { value: 'trieste', label: 'Trieste' },
      { value: 'brescia', label: 'Brescia' },
      { value: 'parma', label: 'Parma' },
      { value: 'taranto', label: 'Taranto' },
      { value: 'prato', label: 'Prato' },
      { value: 'modena', label: 'Modena' },
      { value: 'reggio-calabria', label: 'Reggio Calabria' },
      { value: 'reggio-emilia', label: 'Reggio Emilia' },
      { value: 'perugia', label: 'Perugia' },
      { value: 'ravenna', label: 'Ravenna' },
      { value: 'livorno', label: 'Livorno' },
      { value: 'cagliari', label: 'Cagliari' },
      { value: 'foggia', label: 'Foggia' },
    ];

    const searchFunction = (query: string, populateResults: (results: AutocompleteOption[]) => void) => {
      // Simula un ritardo di rete
      setTimeout(() => {
        const lowerQuery = query.toLowerCase();
        const results = cities.filter((city) => city.label.toLowerCase().includes(lowerQuery)).slice(0, 10);
        populateResults(results);
      }, 800);
    };

    return html`
      <it-autocomplete id="autocomplete-async" name="citta" .source="${searchFunction}" min-length="2">
        <span slot="label">Cerca città</span>
        <span slot="support-text">Digita almeno 2 caratteri per vedere i suggerimenti</span>
      </it-autocomplete>
    `;
  },
};

// Esempio con dati dinamici
export const DatiDinamici: Story = {
  name: 'Cambiare i valori dinamicamente',
  parameters: {
    docs: {
      source: {
        code: `<!-- HTML -->
<div class="row">
  <div class="col-12 col-md-6 mb-3">
    <div class="form-group">
      <label for="categoria-select">Categoria alimento</label>
      <select id="categoria-select" class="form-control">
        <option value="frutta">Frutta</option>
        <option value="verdura">Verdura</option>
        <option value="cereali">Cereali</option>
        <option value="legumi">Legumi</option>
        <option value="latticini">Latticini</option>
      </select>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <it-autocomplete id="autocomplete-alimento" name="alimento">
      <span slot="label">Alimento</span>
    </it-autocomplete>
  </div>
</div>

<script>
  const categories = {
    frutta: [
      { value: 'mela', label: 'Mela' },
      { value: 'pera', label: 'Pera' },
      { value: 'banana', label: 'Banana' },
      { value: 'arancia', label: 'Arancia' },
      { value: 'fragola', label: 'Fragola' },
      { value: 'kiwi', label: 'Kiwi' },
      { value: 'ananas', label: 'Ananas' },
      { value: 'mango', label: 'Mango' },
      { value: 'pesca', label: 'Pesca' },
      { value: 'albicocca', label: 'Albicocca' },
      { value: 'ciliegia', label: 'Ciliegia' },
      { value: 'uva', label: 'Uva' },
      { value: 'melone', label: 'Melone' },
      { value: 'anguria', label: 'Anguria' },
      { value: 'pompelmo', label: 'Pompelmo' },
      { value: 'mandarino', label: 'Mandarino' },
      { value: 'limone', label: 'Limone' },
      { value: 'prugna', label: 'Prugna' },
      { value: 'fico', label: 'Fico' },
      { value: 'melograno', label: 'Melograno' }
    ],
    verdura: [
      { value: 'carota', label: 'Carota' },
      { value: 'pomodoro', label: 'Pomodoro' },
      { value: 'lattuga', label: 'Lattuga' },
      { value: 'zucchina', label: 'Zucchina' },
      { value: 'melanzana', label: 'Melanzana' },
      { value: 'peperone', label: 'Peperone' },
      { value: 'cipolla', label: 'Cipolla' },
      { value: 'aglio', label: 'Aglio' },
      { value: 'patata', label: 'Patata' },
      { value: 'spinaci', label: 'Spinaci' },
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'cavolfiore', label: 'Cavolfiore' },
      { value: 'cavolo', label: 'Cavolo' },
      { value: 'sedano', label: 'Sedano' },
      { value: 'finocchio', label: 'Finocchio' },
      { value: 'cetriolo', label: 'Cetriolo' },
      { value: 'ravanello', label: 'Ravanello' },
      { value: 'rucola', label: 'Rucola' },
      { value: 'valeriana', label: 'Valeriana' },
      { value: 'barbabietola', label: 'Barbabietola' }
    ],
    cereali: [
      { value: 'riso', label: 'Riso' },
      { value: 'pasta', label: 'Pasta' },
      { value: 'pane', label: 'Pane' },
      { value: 'farro', label: 'Farro' },
      { value: 'orzo', label: 'Orzo' },
      { value: 'quinoa', label: 'Quinoa' },
      { value: 'avena', label: 'Avena' },
      { value: 'miglio', label: 'Miglio' },
      { value: 'grano-saraceno', label: 'Grano saraceno' },
      { value: 'segale', label: 'Segale' },
      { value: 'couscous', label: 'Couscous' },
      { value: 'bulgur', label: 'Bulgur' },
      { value: 'amaranto', label: 'Amaranto' },
      { value: 'mais', label: 'Mais' },
      { value: 'kamut', label: 'Kamut' }
    ],
    legumi: [
      { value: 'fagioli', label: 'Fagioli' },
      { value: 'lenticchie', label: 'Lenticchie' },
      { value: 'ceci', label: 'Ceci' },
      { value: 'piselli', label: 'Piselli' },
      { value: 'fave', label: 'Fave' },
      { value: 'soia', label: 'Soia' },
      { value: 'lupini', label: 'Lupini' },
      { value: 'fagioli-borlotti', label: 'Fagioli borlotti' },
      { value: 'fagioli-cannellini', label: 'Fagioli cannellini' },
      { value: 'fagioli-neri', label: 'Fagioli neri' },
      { value: 'cicerchie', label: 'Cicerchie' },
      { value: 'fagiolini', label: 'Fagiolini' }
    ],
    latticini: [
      { value: 'latte', label: 'Latte' },
      { value: 'yogurt', label: 'Yogurt' },
      { value: 'mozzarella', label: 'Mozzarella' },
      { value: 'parmigiano', label: 'Parmigiano' },
      { value: 'pecorino', label: 'Pecorino' },
      { value: 'gorgonzola', label: 'Gorgonzola' },
      { value: 'ricotta', label: 'Ricotta' },
      { value: 'burro', label: 'Burro' },
      { value: 'formaggio-spalmabile', label: 'Formaggio spalmabile' },
      { value: 'mascarpone', label: 'Mascarpone' },
      { value: 'fontina', label: 'Fontina' },
      { value: 'taleggio', label: 'Taleggio' },
      { value: 'grana-padano', label: 'Grana Padano' },
      { value: 'caciocavallo', label: 'Caciocavallo' }
    ]
  };

  function updateAutocomplete(category) {
    const autocomplete = document.getElementById('autocomplete-alimento');
    if (autocomplete) {
      autocomplete.source = categories[category];
      autocomplete.value = '';
      autocomplete.focus();
    }
  }

  // Inizializza l'autocomplete quando è pronto
  const autocomplete = document.getElementById('autocomplete-alimento');
  autocomplete.addEventListener('it-autocomplete-ready', function() {
    // Imposta i dati iniziali (frutta)
    autocomplete.source = categories.frutta;

    // Gestisci il cambio categoria
    const select = document.getElementById('categoria-select');
    select.addEventListener('change', function(e) {
      updateAutocomplete(e.target.value);
    });
  });
</script>`,
      },
    },
  },
  render: () => {
    const categories = {
      frutta: [
        { value: 'mela', label: 'Mela' },
        { value: 'pera', label: 'Pera' },
        { value: 'banana', label: 'Banana' },
        { value: 'arancia', label: 'Arancia' },
        { value: 'fragola', label: 'Fragola' },
        { value: 'kiwi', label: 'Kiwi' },
        { value: 'ananas', label: 'Ananas' },
        { value: 'mango', label: 'Mango' },
        { value: 'pesca', label: 'Pesca' },
        { value: 'albicocca', label: 'Albicocca' },
        { value: 'ciliegia', label: 'Ciliegia' },
        { value: 'uva', label: 'Uva' },
        { value: 'melone', label: 'Melone' },
        { value: 'anguria', label: 'Anguria' },
        { value: 'pompelmo', label: 'Pompelmo' },
        { value: 'mandarino', label: 'Mandarino' },
        { value: 'limone', label: 'Limone' },
        { value: 'prugna', label: 'Prugna' },
        { value: 'fico', label: 'Fico' },
        { value: 'melograno', label: 'Melograno' },
      ],
      verdura: [
        { value: 'carota', label: 'Carota' },
        { value: 'pomodoro', label: 'Pomodoro' },
        { value: 'lattuga', label: 'Lattuga' },
        { value: 'zucchina', label: 'Zucchina' },
        { value: 'melanzana', label: 'Melanzana' },
        { value: 'peperone', label: 'Peperone' },
        { value: 'cipolla', label: 'Cipolla' },
        { value: 'aglio', label: 'Aglio' },
        { value: 'patata', label: 'Patata' },
        { value: 'spinaci', label: 'Spinaci' },
        { value: 'broccoli', label: 'Broccoli' },
        { value: 'cavolfiore', label: 'Cavolfiore' },
        { value: 'cavolo', label: 'Cavolo' },
        { value: 'sedano', label: 'Sedano' },
        { value: 'finocchio', label: 'Finocchio' },
        { value: 'cetriolo', label: 'Cetriolo' },
        { value: 'ravanello', label: 'Ravanello' },
        { value: 'rucola', label: 'Rucola' },
        { value: 'valeriana', label: 'Valeriana' },
        { value: 'barbabietola', label: 'Barbabietola' },
      ],
      cereali: [
        { value: 'riso', label: 'Riso' },
        { value: 'pasta', label: 'Pasta' },
        { value: 'pane', label: 'Pane' },
        { value: 'farro', label: 'Farro' },
        { value: 'orzo', label: 'Orzo' },
        { value: 'quinoa', label: 'Quinoa' },
        { value: 'avena', label: 'Avena' },
        { value: 'miglio', label: 'Miglio' },
        { value: 'grano-saraceno', label: 'Grano saraceno' },
        { value: 'segale', label: 'Segale' },
        { value: 'couscous', label: 'Couscous' },
        { value: 'bulgur', label: 'Bulgur' },
        { value: 'amaranto', label: 'Amaranto' },
        { value: 'mais', label: 'Mais' },
        { value: 'kamut', label: 'Kamut' },
      ],
      legumi: [
        { value: 'fagioli', label: 'Fagioli' },
        { value: 'lenticchie', label: 'Lenticchie' },
        { value: 'ceci', label: 'Ceci' },
        { value: 'piselli', label: 'Piselli' },
        { value: 'fave', label: 'Fave' },
        { value: 'soia', label: 'Soia' },
        { value: 'lupini', label: 'Lupini' },
        { value: 'fagioli-borlotti', label: 'Fagioli borlotti' },
        { value: 'fagioli-cannellini', label: 'Fagioli cannellini' },
        { value: 'fagioli-neri', label: 'Fagioli neri' },
        { value: 'cicerchie', label: 'Cicerchie' },
        { value: 'fagiolini', label: 'Fagiolini' },
      ],
      latticini: [
        { value: 'latte', label: 'Latte' },
        { value: 'yogurt', label: 'Yogurt' },
        { value: 'mozzarella', label: 'Mozzarella' },
        { value: 'parmigiano', label: 'Parmigiano' },
        { value: 'pecorino', label: 'Pecorino' },
        { value: 'gorgonzola', label: 'Gorgonzola' },
        { value: 'ricotta', label: 'Ricotta' },
        { value: 'burro', label: 'Burro' },
        { value: 'formaggio-spalmabile', label: 'Formaggio spalmabile' },
        { value: 'mascarpone', label: 'Mascarpone' },
        { value: 'fontina', label: 'Fontina' },
        { value: 'taleggio', label: 'Taleggio' },
        { value: 'grana-padano', label: 'Grana Padano' },
        { value: 'caciocavallo', label: 'Caciocavallo' },
      ],
    };

    const updateAutocomplete = (category: keyof typeof categories) => {
      const autocomplete = document.getElementById('autocomplete-alimento') as any;
      if (autocomplete) {
        autocomplete.source = categories[category];
        autocomplete.value = '';
      }
    };

    const handleReady = () => {
      const select = document.getElementById('categoria-select') as HTMLSelectElement;
      if (select) {
        select.addEventListener('change', (e) => {
          updateAutocomplete((e.target as HTMLSelectElement).value as keyof typeof categories);
        });
      }
    };

    return html`
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <div class="form-group">
            <label for="categoria-select">Categoria alimento</label>
            <select id="categoria-select" class="form-control">
              <option value="frutta">Frutta</option>
              <option value="verdura">Verdura</option>
              <option value="cereali">Cereali</option>
              <option value="legumi">Legumi</option>
              <option value="latticini">Latticini</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <it-autocomplete
            id="autocomplete-alimento"
            name="alimento"
            .source="${categories.frutta}"
            @it-autocomplete-ready="${handleReady}"
          >
            <span slot="label">Alimento</span>
          </it-autocomplete>
        </div>
      </div>
    `;
  },
};
// Integrazione con form
export const IntegrazioneForm: Story = {
  name: 'Integrazione con form',
  parameters: {
    docs: {
      description: {
        story: `Il componente \`<it-autocomplete>\` si integra perfettamente con i form HTML nativi. Supporta la validazione nativa del browser con l'attributo \`required\` e può essere utilizzato con FormData per l'invio dei dati.`,
      },
      source: {
        code: `<!-- HTML -->
<form id="form-autocomplete">
  <div class="row">
    <div class="col-12 col-md-6 mb-3">
      <it-autocomplete name="regione" required>
        <span slot="label">Regione *</span>
        <span slot="support-text">Campo obbligatorio</span>
      </it-autocomplete>
    </div>
    <div class="col-12 col-md-6 mb-3">
      <it-autocomplete name="provincia">
        <span slot="label">Provincia</span>
        <span slot="support-text">Campo facoltativo</span>
      </it-autocomplete>
    </div>
  </div>
  <it-button type="submit" variant="primary">Invia</it-button>
  <div id="form-output" class="mt-3"></div>
</form>

<script>
  const italianRegions = [
    { value: 'abruzzo', label: 'Abruzzo' },
    { value: 'basilicata', label: 'Basilicata' },
    { value: 'calabria', label: 'Calabria' },
    { value: 'campania', label: 'Campania' },
    { value: 'emilia-romagna', label: 'Emilia Romagna' },
    { value: 'friuli-venezia-giulia', label: 'Friuli Venezia Giulia' },
    { value: 'lazio', label: 'Lazio' },
    { value: 'liguria', label: 'Liguria' },
    { value: 'lombardia', label: 'Lombardia' },
    { value: 'marche', label: 'Marche' },
    { value: 'molise', label: 'Molise' },
    { value: 'piemonte', label: 'Piemonte' },
    { value: 'puglia', label: 'Puglia' },
    { value: 'sardegna', label: 'Sardegna' },
    { value: 'sicilia', label: 'Sicilia' },
    { value: 'toscana', label: 'Toscana' },
    { value: 'trentino-alto-adige', label: 'Trentino Alto Adige' },
    { value: 'umbria', label: 'Umbria' },
    { value: 'valle-d-aosta', label: "Valle d'Aosta" },
    { value: 'veneto', label: 'Veneto' },
  ];
  const provinces = [
    { value: 'milano', label: 'Milano' },
    { value: 'roma', label: 'Roma' },
    { value: 'napoli', label: 'Napoli' },
    { value: 'torino', label: 'Torino' },
    { value: 'palermo', label: 'Palermo' },
    { value: 'genova', label: 'Genova' },
  ];

  const form = document.getElementById('form-autocomplete');
  const output = document.getElementById('form-output');
  const regioneAutocomplete = form.querySelector('[name="regione"]');
  const provinciaAutocomplete = form.querySelector('[name="provincia"]');

  // Imposta le sorgenti dati
  regioneAutocomplete.source = italianRegions;
  provinciaAutocomplete.source = provinces;

  // Gestisci il submit del form
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    output.innerHTML = \`
      <div class="alert alert-success" role="alert">
        Dati inviati:
        <pre>\${JSON.stringify(data, null, 2)}</pre>
      </div>
    \`;
  });
</script>`,
      },
    },
  },
  render: () => {
    const form = document.getElementById('form-autocomplete') as HTMLFormElement;
    const output = document.getElementById('form-output');

    if (form && output) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data: Record<string, any> = {};
        formData.forEach((value, key) => {
          data[key] = value;
        });

        output.innerHTML = `
            <div class="alert alert-success" role="alert">
              Dati inviati:
              <pre>${JSON.stringify(data, null, 2)}</pre>
            </div>
          `;
      });
    }

    return html`
      <form id="form-autocomplete">
        <div class="row">
          <div class="col-12 col-md-6 mb-3">
            <it-autocomplete name="regione" support-text="Campo obbligatorio" required .source="${italianRegions}">
              <span slot="label">Regione</span>
            </it-autocomplete>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <it-autocomplete
              name="provincia"
              support-text="Campo facoltativo"
              .source="${[
                { value: 'milano', label: 'Milano' },
                { value: 'roma', label: 'Roma' },
                { value: 'napoli', label: 'Napoli' },
                { value: 'torino', label: 'Torino' },
                { value: 'palermo', label: 'Palermo' },
                { value: 'genova', label: 'Genova' },
              ]}"
            >
              <span slot="label">Provincia</span>
            </it-autocomplete>
          </div>
        </div>
        <it-button type="submit" variant="primary">Invia</it-button>
        <div id="form-output" class="mt-3"></div>
      </form>
    `;
  },
};

// Esempio regioni e comuni con dati reali
export const RegioniEComuni: Story = {
  name: 'Regioni e Comuni',
  parameters: {
    docs: {
      description: {
        story: `Esempio di autocomplete collegati: selezionando una regione, il secondo autocomplete si popola con i comuni di quella regione. I dati provengono da un file JSON esterno con circa 7.800 comuni italiani reali.`,
      },
      source: {
        code: `<!-- HTML -->
<div class="row">
  <div class="col-12 col-md-6 mb-3">
    <it-autocomplete id="autocomplete-regione" support-text="Seleziona una regione italiana" name="regione">
      <span slot="label">Regione</span>
    </it-autocomplete>
  </div>
  <div class="col-12 col-md-6">
    <it-autocomplete id="autocomplete-comune" support-text="Seleziona una regione per abilitare questo campo e selezionare il comune" name="comune" disabled>
      <span slot="label">Comune</span>
    </it-autocomplete>
  </div>
</div>

<script>
  let comuniData = [];
  let regioniUniche = [];

  // Carica i dati dei comuni
  fetch('/assets/comuni.json')
    .then(response => response.json())
    .then(data => {
      comuniData = data;

      // Estrai le regioni uniche e ordinale
      const regioniSet = new Set(data.map(item => item.regione));
      regioniUniche = Array.from(regioniSet).sort().map(regione => ({
        value: regione.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
        label: regione
      }));

      // Imposta le regioni nell'autocomplete
      const regioneAutocomplete = document.getElementById('autocomplete-regione');
      regioneAutocomplete.source = regioniUniche;
    })
    .catch(error => {
      console.error('Errore caricamento comuni:', error);
    });

  const regioneAutocomplete = document.getElementById('autocomplete-regione');
  const comuneAutocomplete = document.getElementById('autocomplete-comune');

  // Reset del valore comune quando si seleziona una regione
  regioneAutocomplete.addEventListener('it-autocomplete-ready', function() {
    regioneAutocomplete.addEventListener('it-autocomplete-select', function(e) {
      comuneAutocomplete.value = '';
    });
  });

  // Quando cambia il valore della regione, abilita e popola i comuni
  regioneAutocomplete.addEventListener('it-change', function(e) {
    if (e.detail.value) {
      // Il valore ora è il kebab-case value, dobbiamo trovare la label corrispondente
      const selectedRegione = regioniUniche.find(r => r.value === e.detail.value);
      const regione = selectedRegione ? selectedRegione.label : e.detail.value;

      comuneAutocomplete.disabled = false;

      // Filtra i comuni per la regione selezionata
      const comuniDellaRegione = comuniData
        .filter(item => item.regione === regione)
        .map(item => ({
          value: item.comune.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
          label: item.comune
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

      // Imposta direttamente l'array dei comuni filtrati
      comuneAutocomplete.source = comuniDellaRegione;
    }
  });
</script>`,
      },
    },
  },
  render: () => {
    let comuniData: Array<{ comune: string; regione: string }> = [];
    let regioniUniche: Array<{ value: string; label: string }> = [];

    // Carica i dati dei comuni dal file JSON immediatamente
    fetch('/assets/comuni.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nel caricamento dei comuni');
        }
        return response.json();
      })
      .then((data) => {
        comuniData = data;

        // Estrai le regioni uniche e convertile in oggetti {value, label}
        const regioniSet = new Set(data.map((item: { regione: string }) => item.regione));
        // @ts-ignore
        regioniUniche = Array.from(regioniSet)
          .sort()
          .map((regione) => ({
            // @ts-ignore
            value: regione.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
            label: regione,
          }));

        // Aspetta che l'autocomplete sia nel DOM
        const regioneAutocomplete = document.getElementById('autocomplete-regione-nested') as any;
        if (regioneAutocomplete) {
          regioneAutocomplete.source = regioniUniche;
        }
      })
      .catch((error) => {
        console.error('Errore caricamento comuni:', error);
      });

    // Setup listener per il cambio regione quando l'autocomplete è pronto
    const handleRegioneReady = () => {
      const regioneAutocomplete = document.getElementById('autocomplete-regione-nested') as any;
      const comuneAutocomplete = document.getElementById('autocomplete-comune-nested') as any;

      if (regioneAutocomplete && comuneAutocomplete) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        regioneAutocomplete.addEventListener('it-autocomplete-select', (_e: CustomEvent) => {
          comuneAutocomplete.value = '';
        });
      }
    };

    const handleRegioneChange = (e: CustomEvent) => {
      const comuneAutocomplete = document.getElementById('autocomplete-comune-nested') as any;
      if (e.detail.value && comuneAutocomplete) {
        // Il valore ora è il kebab-case value, dobbiamo trovare la label corrispondente
        const selectedRegione = regioniUniche.find((r) => r.value === e.detail.value);
        const regione = selectedRegione ? selectedRegione.label : e.detail.value;

        comuneAutocomplete.disabled = false;
        // Filtra i comuni per la regione selezionata e convertili in oggetti {value, label}
        const comuniDellaRegione = comuniData
          .filter((item) => item.regione === regione)
          .map((item) => ({
            value: item.comune.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
            label: item.comune,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        // Imposta direttamente l'array dei comuni filtrati (come in DatiDinamici)
        comuneAutocomplete.source = comuniDellaRegione;
      }
    };

    return html`
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <it-autocomplete
            id="autocomplete-regione-nested"
            name="regione"
            support-text="Seleziona una regione italiana"
            source="${regioniUniche}"
            @it-autocomplete-ready="${handleRegioneReady}"
            @it-change="${handleRegioneChange}"
          >
            <span slot="label">Regione</span>
          </it-autocomplete>
        </div>
        <div class="col-12 col-md-6">
          <it-autocomplete
            id="autocomplete-comune-nested"
            support-text="Seleziona una regione per abilitare questo campo e selezionare il comune"
            name="comune"
            disabled
          >
            <span slot="label">Comune</span>
          </it-autocomplete>
        </div>
      </div>
    `;
  },
};
export const ValidazioneCustom: Story = {
  name: 'Validazione custom',
  render: () => {
    const validateInput = (e: CustomEvent) => {
      const input = e.target as any;
      const { value } = e.detail;
      const validValues = ['Lombardia', 'Lazio', 'Toscana', 'Sicilia'];

      if (value && !validValues.includes(value)) {
        input.setCustomValidity('La regione selezionata non è valida. Scegli tra Lombardia, Lazio, Toscana o Sicilia.');
      } else {
        input.setCustomValidity('');
      }
    };

    return html`
      <it-autocomplete
        id="autocomplete-validazione"
        name="regione"
        custom-validation
        validity-message="Regione non valida"
        label="Regione (validazione custom)"
        support-text="Scegli tra Lombardia, Lazio, Toscana o Sicilia"
        .source="${italianRegions}"
        @it-change="${validateInput}"
      >
        <span slot="label">Regione</span>
      </it-autocomplete>
    `;
  },
};

// Gestione eventi
export const GestioneEventi: Story = {
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      source: {
        code: `<!-- HTML -->
<div>
  <it-autocomplete id="autocomplete-eventi" name="regione">
    <span slot="label">Regione</span>
  </it-autocomplete>
  <div id="event-output" style="margin-top: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
    <div><em>Digita o seleziona una regione per vedere gli eventi</em></div>
  </div>
</div>

<script>
  const italianRegions = [
    { value: 'abruzzo', label: 'Abruzzo' },
    { value: 'basilicata', label: 'Basilicata' },
    { value: 'calabria', label: 'Calabria' },
    { value: 'campania', label: 'Campania' },
    { value: 'emilia-romagna', label: 'Emilia Romagna' },
    { value: 'friuli-venezia-giulia', label: 'Friuli Venezia Giulia' },
    { value: 'lazio', label: 'Lazio' },
    { value: 'liguria', label: 'Liguria' },
    { value: 'lombardia', label: 'Lombardia' },
    { value: 'marche', label: 'Marche' },
    { value: 'molise', label: 'Molise' },
    { value: 'piemonte', label: 'Piemonte' },
    { value: 'puglia', label: 'Puglia' },
    { value: 'sardegna', label: 'Sardegna' },
    { value: 'sicilia', label: 'Sicilia' },
    { value: 'toscana', label: 'Toscana' },
    { value: 'trentino-alto-adige', label: 'Trentino Alto Adige' },
    { value: 'umbria', label: 'Umbria' },
    { value: 'valle-d-aosta', label: "Valle d'Aosta" },
    { value: 'veneto', label: 'Veneto' },
  ];

  const autocomplete = document.getElementById('autocomplete-eventi');
  const output = document.getElementById('event-output');

  // Imposta la sorgente dati
  autocomplete.source = italianRegions;

  // Ascolta l'evento 'it-autocomplete-ready' (quando il componente è inizializzato)
  autocomplete.addEventListener('it-autocomplete-ready', function(e) {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Evento inizializzazione';
    output.appendChild(newDiv);
  });

  // Ascolta l'evento 'it-autocomplete-search' (quando l'utente digita)
  autocomplete.addEventListener('it-autocomplete-search', function(e) {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Evento ricerca nell\\'autocomplete: testo ' + e.detail.value;
    output.appendChild(newDiv);
  });

  // Ascolta l'evento 'it-change' (quando il valore cambia)
  autocomplete.addEventListener('it-change', function(e) {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Evento change: selezionato ' + e.detail.value;
    output.appendChild(newDiv);
  });
</script>`,
      },
    },
  },
  render: () => {
    const handleReady = () => {
      const autocomplete = document.getElementById('autocomplete-eventi') as any;
      const output = document.getElementById('event-output');

      if (autocomplete && output) {
        const newContent = document.createTextNode(`Evento inizializzazione`);
        const newDiv = document.createElement('div');
        newDiv.appendChild(newContent);
        output.appendChild(newDiv);
      }
    };
    const handleChange = (e: any) => {
      const autocomplete = document.getElementById('autocomplete-eventi') as any;
      const output = document.getElementById('event-output');

      if (autocomplete && output) {
        const newContent = document.createTextNode(`Evento change: selezionato ${e.detail.value}`);
        const newDiv = document.createElement('div');
        newDiv.appendChild(newContent);
        output.appendChild(newDiv);
      }
    };
    const handleInputChange = (e: any) => {
      const autocomplete = document.getElementById('autocomplete-eventi') as any;
      const output = document.getElementById('event-output');

      if (autocomplete && output) {
        const newContent = document.createTextNode(`Evento ricerca nell'autocomplete: testo ${e.detail.value}`);
        const newDiv = document.createElement('div');
        newDiv.appendChild(newContent);
        output.appendChild(newDiv);
      }
    };

    return html`
      <div>
        <it-autocomplete
          id="autocomplete-eventi"
          name="regione"
          .source="${italianRegions}"
          @it-autocomplete-ready="${handleReady}"
          @it-autocomplete-search="${handleInputChange}"
          @it-change="${handleChange}"
        >
          <span slot="label">Regione</span>
        </it-autocomplete>
        <div id="event-output" style="margin-top: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
          <div><em>Digita o seleziona una regione per vedere gli eventi</em></div>
        </div>
      </div>
    `;
  },
};

export const MetodiEPropPubblici: Story = {
  name: 'Proprietà, metodi ed eventi accessibili via js',
  tags: ['!dev'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: `
Il componente espone delle proprietà, metodi, ed eventi, utili per eventuali interazioni via js.



<br/>
<h4>Proprietà accessibili dall'esterno</h4>
| Nome | Descrizione |
|------|-------------|
|\`validity\`| Ritorna l'oggetto di validazione effettuata dal browser.|
|\`validationMessage\`| Ritorna il messaggio di errore in caso di validazione fallita.|

<h4>Metodi</h4>
| Nome | Descrizione | Argomenti |
|------|-------------|-----------|
|\`getForm()\`| Ritorna l'elemento del DOM corrispondente alla form di riferimento dell'input. | - |
|\`checkValidity()\`| Triggera la validazione nativa del browser sul campo, e restituisce true o false a seconda che l'input sia valido o meno. | - |
|\`reportValidity()\`| Controlla se l'elemento è valido secondo le regole di validazione del browser. Se non è valido, mostra un messaggio di errore (tooltip nativo del browser) e restituisce \`false\`. Se è valido, restituisce \`true\`. | - |
|\`setCustomValidity('')\`| Permette di impostare un messaggio di errore personalizzato passato come parametro. Se il messaggio non è vuoto, rende invalido l'elemento. Se invece il messaggio è vuoto (''), rende valido l'elemento. | message: String |


<h4>Eventi</h4>
| Nome | Descrizione |
|------|-------------|
|\`it-autocomplete-ready\`|  Emesso quando il componente è stato inizializzato |
|\`it-autocomplete-search\`| Emesso quando l'utente digita nel campo di ricerca |
|\`it-blur\`| Quando l'input perde il focus (blur) |
|\`it-click\`| Quando l'utente fa click sull'input dell'autocomplete |
|\`it-focus\`| Quando l'input riceve il focus (focus) |
|\`it-change\`| Quando il valore dell’input viene modificato e il browser emette \`change\` |
|\`invalid\`| Emesso dal browser quando la validazione fallisce|

`,
      },
    },
  },
};

export const I18n: Story = {
  name: 'i18n',
  tags: ['!dev'],
  render: () => html`<div class="hide-preview"></div>`,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        story: `
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = ${JSON.stringify(i18nIT, null, 2)}
\`\`\`
`,
      },
    },
  },
};
