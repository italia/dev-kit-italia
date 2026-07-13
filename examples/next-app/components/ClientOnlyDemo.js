'use client';

import dynamic from 'next/dynamic';

// In the App Router, dynamic(..., { ssr: false }) must be invoked from a
// client component, hence this thin wrapper.
const NoSsrKit = dynamic(() => import('./NoSsrKit'), { ssr: false });

export default function ClientOnlyDemo() {
  return (
    <section>
      <h2>Componenti esclusi dal render server</h2>
      <NoSsrKit />
    </section>
  );
}
