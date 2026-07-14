import KitDemo from '../components/KitDemo';
import ClientOnlyDemo from '../components/ClientOnlyDemo';

export default function Home() {
  return (
    <main className="container my-4">
      <it-callout variant="primary">
        <it-icon slot="icon" name="it-info-circle" aria-hidden="true"></it-icon>
        <span slot="title">Solo integrazione SSR</span>
        <p>
          Questo esempio Next.js mostra soltanto l&rsquo;integrazione lato server (SSR) del Dev Kit Italia. Per esempi
          completi dei componenti in React, consulta l&rsquo;app di esempio React.
        </p>
      </it-callout>

      <h1>Dev Kit Italia + Next.js</h1>
      <p>
        Questo esempio integra i web component di <code>@italia/dev-kit-italia</code> in una app Next.js (App Router)
        senza causare crash durante il rendering lato server, secondo i pattern descritti nella pagina Storybook
        &ldquo;Framework/SSR&rdquo;.
      </p>

      <KitDemo />
      <ClientOnlyDemo />
    </main>
  );
}
