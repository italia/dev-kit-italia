import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Back = () => {
  const backRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = backRef.current;
    if (!el) return;
    const onNavigate = (e) => {
      e.preventDefault();
      navigate(-1);
    };
    el.addEventListener('it-back-navigate', onNavigate);
    return () => el.removeEventListener('it-back-navigate', onNavigate);
  }, [navigate]);

  return (
    <>
      <h1>Back</h1>

      <section>
        <h2>Link</h2>
        <it-back>
          <a href="#" className="go-back">
            <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
            <span>Torna indietro</span>
          </a>
        </it-back>
      </section>

      <section>
        <h2>Pulsanti</h2>
        <it-back>
          <it-button variant="primary" className="go-back" icon>
            <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
            <span>Torna indietro</span>
          </it-button>
        </it-back>

        <it-back>
          <it-button variant="primary" className="go-back" icon>
            <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
            <span>Torna indietro</span>
          </it-button>
        </it-back>
      </section>

      <section>
        <h2>Navigazione personalizzata</h2>
        <p>
          L'evento `it-back-navigate` è cancelable. Chiamando `event.preventDefault()` impedisci
          `window.history.back()` e puoi gestire la navigazione indietro secondo il router del tuo framework.
        </p>
        <it-back ref={backRef}>
          <a href="#" className="go-back">
            <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
            <span>Torna indietro</span>
          </a>
        </it-back>
      </section>
    </>
  );
};

export default Back;
