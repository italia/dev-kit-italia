// This module is only ever loaded on the client, via next/dynamic with
// ssr: false (see ClientOnlyDemo.js). Because it never runs server-side, the
// static module-level import below is safe here — the alternative pattern
// described in packages/dev-kit-italia/stories/frameworks/SSR.mdx for
// components whose markup is meaningless without client-side JS (here,
// scroll position).
import '@italia/dev-kit-italia/elements.js';

export default function NoSsrKit() {
  return (
    <>
      <p>
        Scorri la pagina per vedere il pulsante &ldquo;Torna su&rdquo; apparire nell&rsquo;angolo in basso a destra.
        Questo componente non ha markup utile lato server (dipende dalla posizione di scroll), quindi viene escluso
        interamente dal render server con <code>next/dynamic</code> e <code>{'{ ssr: false }'}</code>.
      </p>
      <it-back-to-top it-aria-label="Torna su" border></it-back-to-top>
    </>
  );
}
