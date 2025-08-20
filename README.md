<h1 align="center">Design Web Components</h1>

<p align="center">
  <img src="public/favicons/android-chrome-512x512.png" alt="logo del design system .italia" width="120px" height="auto"/>
  <br>
  <i>Design Web Components è un toolkit
    <br> che implementa il Design system .italia</i>
  <br>
</p>

<p align="center">
  <a href="https://italia.github.io/design-web-components"><strong>italia.github.io/design-web-components</strong></a>
  <br>
</p>

<p align="center">
    <!-- <a href="https://www.npmjs.com/package/design-react-kit"><img src="https://img.shields.io/npm/v/design-react-kit.svg" alt="NPM"></a>
    <a href="https://github.com/italia/design-react-kit/actions"><img src="https://github.com/italia/design-react-kit/actions/workflows/ci.yml/badge.svg" alt="Build"></a>
    <a href="https://codecov.io/gh/italia/design-react-kit"><img src="https://codecov.io/gh/italia/design-react-kit/branch/main/graph/badge.svg?token=0Ud6YSFi0r" alt="codecov"></a> -->
    <a href="https://github.com/italia/design-web-components/blob/main/LICENSE"><img src="https://img.shields.io/github/license/italia/design-web-components.svg" alt="License"></a>
    <a href="https://github.com/italia/design-web-components/issues"><img src="https://img.shields.io/github/issues/italia/design-web-components.svg" alt="GitHub issues"></a>
</p>

<!-- <p align="center">
  <a href="https://developersitalia.slack.com/messages/C04J92F9XM2/">
    <img src="https://img.shields.io/badge/Slack%20channel-%23design--dev--react-blue.svg" alt="Join the #design-system-react channel" />
  </a>
  <a href="https://slack.developers.italia.it/">
    <img src="https://slack.developers.italia.it/badge.svg" alt="Get invited" />
  </a>
</p> -->

<!-- _Read this in other languages: [English 🇬🇧](README.EN.md)._ -->

_⚠️ Attenzione: questo repository e i relativi pacchetti sono in lavorazione. Attualmente sono pubblicati per permetterne lo sviluppo, non sono consigliati per l'utilizzo in ambienti di produzione._

## Intro

**Design Web Components** è un set di Web components che implementa il Design system .italia e i componenti presenti su [UI Kit Italia](https://github.com/italia/design-ui-kit).
Per navigare la libreria e visualizzare i componenti, è stato utilizzato [Storybook](https://storybook.js.org/).
La versione pubblica dello Storybook è disponibile [qui](https://italia.github.io/design-web-components) per l'ultima release stabile pubblicata.

## Come usare la libreria

Per utilizzare Design Web Components come dipendenza in un'app è possibile installarla da [npm](https://www.npmjs.com/~italia).

## Come contribuire 💙

Per installare la libreria e avviare lo Storybook in locale, è necessario avere installato [Node.js](https://nodejs.org/) e [pnpm](https://pnpm.io/).

Per installare le dipendenze:

```sh
pnpm install
```

Per avviare lo Storybook in locale:

```sh
pnpm storybook
```

### Testare l'integrazione dei Web Components in altri framework JavaScript

Si consiglia di partire creando un progetto di esempio utilizzando il framework desiderato e importando i Web Components da Design Web Components.

```bash
# Esegui questo comando
npm create vite@latest test-app
# Poi segui il prompt!
```

Dopo aver creato il progetto, è possibile installare Design Web Components come dipendenza:

```bash
npm install @italia/design-web-components
```

A questo punto bisogna importare i Web Components nel progetto.

```javascript
import '@italia/design-web-components/styles.css';
import '@italia/design-web-components/elements.js';

// Pronti a utilizzare i Web Components!
return (
  <div>
    <it-button ...></it-button>
  </div>
)
```

Come alternativa, è possibile installare i singoli pacchetti dei Web Components. Sarà comunque necessario importare il file CSS generale come mostrato sopra.

```bash
npm install @italia/button
```

```javascript
import '@italia/design-web-components/styles.css';
import '@italia/button/it-button.js';

return (
  <div>
    <it-button ...></it-button>
  </div>
)
```

## Processo di Rilascio 🚀

Il progetto utilizza [Changesets](https://github.com/changesets/changesets) per gestire i rilasci di tutti i pacchetti. Per informazioni dettagliate, consulta la [documentazione di rilascio](./RELEASE.md).

Il workflow GitHub Actions pubblicherà automaticamente tutti i pacchetti su NPM.
