'use client';

import { useEffect } from 'react';

// The kit's elements.js registers Lit-based custom elements, which extend
// HTMLElement at module load time. HTMLElement does not exist in Node, so the
// import must be deferred to after mount (useEffect) instead of living at the
// top of the module — even though this file is 'use client', a static
// module-level import would still be evaluated during the server render.
//
// The custom-element markup below (including its slotted content) stays
// static in the JSX, so the server still emits it: HTML-first, level 2 of
// packages/dev-kit-italia/stories/frameworks/SSR.mdx.
export default function KitDemo() {
  useEffect(() => {
    import('@italia/dev-kit-italia/elements.js');
  }, []);

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
