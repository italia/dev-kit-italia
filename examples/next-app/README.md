# Esempio di integrazione: Next.js (App Router)

Applicazione Next.js 16 minimale che integra i web component di `@italia/dev-kit-italia` in un contesto con rendering lato server, senza causare crash in fase di build/prerendering. Replica i pattern documentati nella pagina Storybook "Framework/SSR":

- `components/KitDemo.js` — import di `elements.js` differito in `useEffect`, con markup e contenuto slottato statici nel JSX così che il server li emetta comunque (HTML-first);
- `components/ClientOnlyDemo.js` + `components/NoSsrKit.js` — esclusione completa dal render server tramite `next/dynamic` con `ssr: false`, per componenti privi di markup utile lato server.

## Avvio

```bash
npm install
npm run dev
```

L'applicazione sarà accessibile all'indirizzo [http://localhost:3000/next-app](http://localhost:3000/next-app) (il `basePath` è configurato per il deploy statico sotto `/next-app/`).

## Nota su Turbopack

Gli script `dev` e `build` usano `--webpack` anziché Turbopack (default in Next.js 16): il file `styles.css` del kit contiene attualmente una regola CSS malformata ereditata da `bootstrap-italia` (`var(-bsi-spacing-inset-m)`, manca un trattino) che il parser CSS di Turbopack rifiuta con un errore bloccante, mentre webpack la tollera. Il flag potrà essere rimosso quando il bug sarà corretto a monte.
