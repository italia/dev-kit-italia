/* eslint-disable arrow-body-style */
import { html } from 'lit';

export const CollapsibleOrHiddenContentGuidelines = () => {
  return {
    name: 'Differenza tra Collapse, Accordion e Tabs',
    tags: ['!dev', '!autodocs'],
    render: () => html`<div class="hide-preview"></div>`,
    parameters: {
      // viewMode: 'docs', // assicura che si apra la tab Docs anziché Canvas
      docs: {
        description: {
          story: `
#### Differenza tra Collapse, Accordion e Tabs
I componenti Accordion, Tabs e Collapse funzionano tutti nascondendo sezioni di contenuto che l'utente può scegliere di visualizzare. Evitare di usare questi componenti l'uno all'interno dell'altro.

Se decidi di usare uno di questi componenti, considera quanto segue:

- L'utente ha bisogno di visualizzare più di una sezione alla volta? L'accordion può mostrare più sezioni contemporaneamente, a differenza dei tabs.

- L'utente deve passare rapidamente tra le sezioni? I tabs permettono di cambiare contenuto senza spostare le altre sezioni nella pagina, a differenza dell'accordion.

- Ci sono molte sezioni di contenuto? L'accordion può contenere più sezioni perché sono disposte verticalmente, mentre i tabs sono disposti orizzontalmente.

- Ci sono solo uno o due contenuti brevi e meno importanti? Il componente Collapse è più adatto perché visivamente più piccolo e meno prominente rispetto a un accordion o ai tabs.

<br/>

| Componente | Contenuti multipli | Visibilità | Esclusività | Uso tipico | Esempi |
|----------|--------------------|-------------|--------------|-------------|---------|
| **Collapse** | No | Singolo contenuto mostrato o nascosto | N/A | Mostrare o nascondere dettagli secondari | "Mostra dettagli", "Visualizza termini" |
| **Accordion** | Sì | Più sezioni espandibili | Solo una aperta alla volta *(consigliato)* | Raggruppare contenuti correlati in blocchi espandibili | FAQ, elenchi informativi |
| **Tabs** | Sì | Una sezione visibile alla volta | Sempre esclusiva | Organizzare viste equivalenti o alternative | Schede di impostazioni, pannelli di dati |
`,
        },
      },
    },
  };
};
