import { useState } from 'react';

export default function Rating() {
  const [requiredRating, setRequiredRating] = useState('');
  const [formRating, setFormRating] = useState('');
  const [comment, setComment] = useState('');

  const handleRequiredSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Rating selezionato: ${requiredRating}`);
    alert(`Rating selezionato: ${requiredRating}`);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Form inviato! Rating: ${formRating} Commento: ${comment}`);
    alert(`Form inviato! Rating: ${formRating} Commento: ${comment}`);
  };

  const handleReviewReset = () => {
    setFormRating('');
    setComment('');
  };

  return (
    <>
      <h1>Rating</h1>

      <section className="mb-5">
        <h2>Con valore preimpostato</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <it-rating name="rating-preset" value="3">
            <span slot="label">Valutazione</span>
            <it-rating-item value="1">
              <span slot="label">1 stella</span>
            </it-rating-item>
            <it-rating-item value="2">
              <span slot="label">2 stelle</span>
            </it-rating-item>
            <it-rating-item value="3" checked>
              <span slot="label">3 stelle</span>
            </it-rating-item>
            <it-rating-item value="4">
              <span slot="label">4 stelle</span>
            </it-rating-item>
            <it-rating-item value="5">
              <span slot="label">5 stelle</span>
            </it-rating-item>
          </it-rating>
        </div>
      </section>

      <section className="mb-5">
        <h2>Sola lettura</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <it-rating name="rating-readonly" value="4" read-only>
            <span slot="label">Sola lettura</span>
            <it-rating-item value="1">
              <span slot="label">1 stella</span>
            </it-rating-item>
            <it-rating-item value="2">
              <span slot="label">2 stelle</span>
            </it-rating-item>
            <it-rating-item value="3">
              <span slot="label">3 stelle</span>
            </it-rating-item>
            <it-rating-item value="4">
              <span slot="label">4 stelle</span>
            </it-rating-item>
            <it-rating-item value="5">
              <span slot="label">5 stelle</span>
            </it-rating-item>
          </it-rating>
        </div>
        <p className="mt-3 text-center">Valutazione 4 stelle su 5</p>
      </section>

      <section className="mb-5">
        <h2>Con icone personalizzate</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <it-rating name="rating-check" value="4" icon="it-check-circle">
            <span slot="label">Valutazione con check</span>
            <it-rating-item value="1">
              <span slot="label">1 check</span>
            </it-rating-item>
            <it-rating-item value="2">
              <span slot="label">2 check</span>
            </it-rating-item>
            <it-rating-item value="3">
              <span slot="label">3 check</span>
            </it-rating-item>
            <it-rating-item value="4">
              <span slot="label">4 check</span>
            </it-rating-item>
            <it-rating-item value="5">
              <span slot="label">5 check</span>
            </it-rating-item>
          </it-rating>
        </div>
      </section>

      <section className="mb-5">
        <h2>Obbligatorio</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleRequiredSubmit}>
            <it-rating
              name="rating-required"
              required
              value={requiredRating}
              // @ts-ignore
              onChange={(e) => setRequiredRating(e.target.value)}
            >
              <span slot="label">Valutazione (obbligatoria)</span>
              <it-rating-item value="1">
                <span slot="label">1 stella</span>
              </it-rating-item>
              <it-rating-item value="2">
                <span slot="label">2 stelle</span>
              </it-rating-item>
              <it-rating-item value="3">
                <span slot="label">3 stelle</span>
              </it-rating-item>
              <it-rating-item value="4">
                <span slot="label">4 stelle</span>
              </it-rating-item>
              <it-rating-item value="5">
                <span slot="label">5 stelle</span>
              </it-rating-item>
            </it-rating>
            <it-button type="submit" className="btn btn-primary mt-3">
              Invia
            </it-button>
          </form>
        </div>
      </section>

      <section className="mb-5">
        <h2>Integrazione con form</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handleReviewSubmit} onReset={handleReviewReset}>
            <div className="mb-4">
              <it-rating
                name="rating"
                required
                value={formRating}
                // @ts-ignore
                onChange={(e) => setFormRating(e.target.value)}
              >
                <span slot="label">Valuta questo servizio (obbligatorio)</span>
                <it-rating-item value="1">
                  <span slot="label">1 stella</span>
                </it-rating-item>
                <it-rating-item value="2">
                  <span slot="label">2 stelle</span>
                </it-rating-item>
                <it-rating-item value="3">
                  <span slot="label">3 stelle</span>
                </it-rating-item>
                <it-rating-item value="4">
                  <span slot="label">4 stelle</span>
                </it-rating-item>
                <it-rating-item value="5">
                  <span slot="label">5 stelle</span>
                </it-rating-item>
              </it-rating>
            </div>

            <div className="mb-4">
              <div className="form-group">
                <label htmlFor="comment">Commento</label>
                <textarea
                  id="comment"
                  name="comment"
                  className="form-control"
                  rows={3}
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
            </div>

            <it-button type="submit" className="btn btn-primary">
              Invia recensione
            </it-button>
            <it-button type="reset" className="btn btn-outline-primary ms-2">
              Reset
            </it-button>
          </form>
        </div>
      </section>
    </>
  );
}
