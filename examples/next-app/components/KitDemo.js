// Static custom-element markup (including slotted content) stays in the JSX, so
// the server emits it as plain HTML: HTML-first, level 2 of the SSR guide
// (packages/dev-kit-italia/stories/frameworks/SSR.mdx). The elements are
// registered on the client once by KitElementsLoader in the root layout, which
// upgrades this markup after mount — so this stays a plain server component with
// no client-side import of its own.
export default function KitDemo() {
  return (
    <section>
      <h2>Componenti con markup lato server (HTML-first)</h2>

      <it-button variant="primary" type="button">
        Cliccami
      </it-button>

      <it-input id="nome" type="text" name="nome">
        <span slot="label">Nome</span>
      </it-input>
    </section>
  );
}
