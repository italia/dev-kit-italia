import { useEffect, useRef, useState } from 'react';

const Forward = () => {
  const forwardRef = useRef(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const el = forwardRef.current;
    if (!el) return;
    const onNavigate = (e) => {
      e.preventDefault();
      setStatus(`Navigazione intercettata verso "${e.detail.href}". Scorro io…`);
      if (e.detail.target) {
        el.navigateTo(e.detail.target);
      }
    };
    el.addEventListener('it-forward-navigate', onNavigate);
    return () => el.removeEventListener('it-forward-navigate', onNavigate);
  }, []);

  return (
    <div className="container my-4">
      <h1>Forward</h1>

      <section className="mb-5">
        <h2>Esempio base</h2>
        <p className="mb-4">Clicca sull'icona per scorrere automaticamente alla sezione di destinazione.</p>
        <it-forward>
          <a href="#sezione-esempio" className="forward" aria-label="Vai a: Sezione di esempio">
            <it-icon name="it-expand" size="lg" color="primary"></it-icon>
          </a>
        </it-forward>
      </section>

      <div style={{ height: '100vh', background: 'linear-gradient(to bottom, #f0f6fc, #e6f0fa)' }}>
        <div className="container py-5">
          <h3>Contenuto intermedio</h3>
          <p>
            Questo è un contenuto che separa il link Forward dalla sezione di destinazione. L'animazione scorrerà
            automaticamente fino alla sezione target quando si clicca sul link sopra.
          </p>
        </div>
      </div>

      <div id="sezione-esempio" className="container my-5 py-5" style={{ background: '#fff3cd', borderRadius: '8px' }}>
        <h2>Sezione di esempio</h2>
        <p>
          Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
          Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim.
        </p>
        <p>
          Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim
          occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit.
        </p>
      </div>

      <section className="my-5">
        <h2>Seconda sezione</h2>
        <p className="mb-4">Altro esempio di navigazione con Forward.</p>
        <it-forward>
          <a href="#sezione-target" className="forward" aria-label="Vai a: Sezione target">
            <it-icon name="it-expand" size="lg" color="primary"></it-icon>
          </a>
        </it-forward>
      </section>

      <div style={{ height: '120vh', background: 'linear-gradient(to bottom, #e6f0fa, #d1e7f7)' }}>
        <div className="container py-5">
          <h3>Contenuto intermedio più lungo</h3>
          <p>Anche qui lo scroll sarà automatico e fluido.</p>
        </div>
      </div>

      <div id="sezione-target" className="container my-5 py-5" style={{ background: '#d1ecf1', borderRadius: '8px' }}>
        <h2>Sezione target</h2>
        <p>
          Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis
          labore cillum sint adipisicing exercitation ipsum.
        </p>
      </div>

      <section className="my-5">
        <h2>Navigazione personalizzata</h2>
        <p className="mb-4">
          L'evento `it-forward-navigate` è cancelable. Chiamando `event.preventDefault()` puoi intercettare lo
          scorrimento e gestire la navigazione in autonomia (ad esempio integrandola con il routing di un framework),
          richiamando poi `navigateTo(target)` quando opportuno.
        </p>
        <it-forward ref={forwardRef}>
          <a href="#sezione-personalizzata" className="forward" aria-label="Vai a: Sezione personalizzata">
            <it-icon name="it-expand" size="lg" color="primary"></it-icon>
          </a>
        </it-forward>
        <p className="mt-3" style={{ fontSize: '0.9rem' }} role="status" aria-live="polite">
          {status}
        </p>
      </section>

      <div style={{ height: '100vh', background: 'linear-gradient(to bottom, #d1e7f7, #c4dff0)' }}>
        <div className="container py-5">
          <h3>Contenuto intermedio</h3>
          <p>Questo contenuto separa il link Forward dalla sezione di destinazione.</p>
        </div>
      </div>

      <div
        id="sezione-personalizzata"
        className="container my-5 py-5"
        style={{ background: '#e2d9f3', borderRadius: '8px' }}
      >
        <h2>Sezione personalizzata</h2>
        <p>
          Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
        </p>
      </div>
    </div>
  );
};

export default Forward;
