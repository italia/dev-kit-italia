import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import './globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import KitElementsLoader from '../components/KitElementsLoader';

export const metadata = {
  title: 'Dev Kit Italia + Next.js',
  description: 'Esempio di integrazione SSR-safe di @italia/dev-kit-italia con Next.js App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <KitElementsLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
