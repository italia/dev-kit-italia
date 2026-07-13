import KitDemo from '../components/KitDemo';
import ClientOnlyDemo from '../components/ClientOnlyDemo';

export default function Home() {
  return (
    <main>
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
