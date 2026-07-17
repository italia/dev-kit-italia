'use client';

import { useEffect } from 'react';

// Registers the kit's custom elements on the client, once, for the whole app.
//
// elements.js defines Lit-based custom elements that extend HTMLElement at
// module-load time. HTMLElement does not exist in Node, so the import must be
// deferred to after mount (useEffect) rather than living at the top of a module
// that the server render would evaluate. Mounted in the root layout, this
// upgrades every static custom-element tag emitted server-side (header, footer
// and page markup): HTML-first, level 2 of the SSR guide
// (packages/dev-kit-italia/stories/frameworks/SSR.mdx).
export default function KitElementsLoader() {
  useEffect(() => {
    import('@italia/dev-kit-italia/elements.js');
  }, []);

  return null;
}
