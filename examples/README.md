# Esempi di integrazione di Dev Kit Italia su diversi framework JavaScript

## React, Svelte, Vue

Queste applicazioni sono generate e gestite con [Vite](https://vite.dev/).
Per avviare l'applicazione di esempio con l'integrazione dei componenti web in uno di questi framework, è sufficiente eseguire:

```bash
cd react-app
npm install
npm run dev
```

Una volta avviato il server di sviluppo, l'applicazione sarà accessibile all'indirizzo [http://localhost:5173](http://localhost:5173).

## Next.js

Questa applicazione è generata con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) (App Router) e usa l'esportazione statica di Next.js (`output: 'export'`). Per avviare l'applicazione di esempio:

```bash
cd next-app
npm install
npm run dev
```

Una volta avviato il server di sviluppo, l'applicazione sarà accessibile all'indirizzo [http://localhost:3000/next-app](http://localhost:3000/next-app).

Questo esempio mostra come integrare i web component del kit in un contesto con rendering lato server senza causare crash in fase di build/prerendering, secondo i pattern documentati nella pagina Storybook "Framework/SSR".

## Angular

Questa applicazione è generata e gestita con [Angular CLI](https://angular.io/cli).
Per avviare l'applicazione di esempio con l'integrazione dei componenti web in Angular, è necessario eseguire:

```bash
cd angular-app
npm install
npm start
```

## Contenuti di esempio

I contenuti di esempio già esistenti sono repliche degli esempi che si trovano nella [documentazione ufficiale di Dev Kit Italia](https://dev-kit-italia.vercel.app/). Usando questi come esempio è possibile sperimentare l'integrazione dei componenti web in diversi framework JavaScript.
