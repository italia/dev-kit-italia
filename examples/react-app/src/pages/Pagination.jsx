import { useEffect, useState } from 'react';

function Pagination() {
  const [testState, setTestState] = useState('3');
  useEffect(() => {
    const test = document.getElementById('statetest');
    test.addEventListener('it-pagination-change', (event) => {
      console.log('Pagination changed to page:', event.detail.page, typeof event.detail.page);
      setTestState(parseInt(event.detail.page).toString());
    });
  }, []);
  console.log('Render Pagination with testState:', testState);
  return (
    <div className="container my-4">
      <h1>Pagination Examples</h1>

      {/* Con pulsanti avanti e indietro */}
      <section className="mb-5">
        <h2>Con pulsanti avanti e indietro</h2>
        <it-pagination id="statetest" value={testState}>
          <a href="#" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span className="visually-hidden">Pagina precedente</span>
          </a>

          <it-pagination-item page="1">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>1
            </a>
          </it-pagination-item>
          <it-pagination-item page="2">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>2
            </a>
          </it-pagination-item>
          <it-pagination-item page="3">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>3
            </a>
          </it-pagination-item>
          <it-pagination-item page="4">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>4
            </a>
          </it-pagination-item>
          <it-pagination-item page="5">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>5
            </a>
          </it-pagination-item>

          <a href="#" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span className="visually-hidden">Pagina successiva</span>
          </a>
        </it-pagination>
        <p>Current state, page: {testState}</p>
      </section>

      {/* Con link testuali */}
      <section className="mb-5">
        <h2>Con link testuali</h2>
        <it-pagination value="3">
          <a href="#" slot="prev">
            Precedente
          </a>

          <it-pagination-item page="1">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>1
            </a>
          </it-pagination-item>
          <it-pagination-item page="2">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>2
            </a>
          </it-pagination-item>
          <it-pagination-item page="3">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>3
            </a>
          </it-pagination-item>
          <it-pagination-item page="4">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>4
            </a>
          </it-pagination-item>
          <it-pagination-item page="5">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>5
            </a>
          </it-pagination-item>

          <a href="#" slot="next">
            Successiva
          </a>
        </it-pagination>
      </section>

      {/* Allineamento a sinistra */}
      <section className="mb-5">
        <h2>Allineamento a sinistra</h2>
        <it-pagination value="2" align="start">
          <a href="#" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span className="visually-hidden">Pagina precedente</span>
          </a>
          <it-pagination-item page="1">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>1
            </a>
          </it-pagination-item>
          <it-pagination-item page="2">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>2
            </a>
          </it-pagination-item>
          <it-pagination-item page="3">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>3
            </a>
          </it-pagination-item>
          <a href="#" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span className="visually-hidden">Pagina successiva</span>
          </a>
          <p slot="total">Totale 300 elementi</p>
        </it-pagination>
      </section>

      {/* Allineamento centrato */}
      <section className="mb-5">
        <h2>Allineamento centrato</h2>
        <it-pagination value="2" align="center">
          <a href="#" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span className="visually-hidden">Pagina precedente</span>
          </a>
          <it-pagination-item page="1">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>1
            </a>
          </it-pagination-item>
          <it-pagination-item page="2">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>2
            </a>
          </it-pagination-item>
          <it-pagination-item page="3">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>3
            </a>
          </it-pagination-item>
          <a href="#" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span className="visually-hidden">Pagina successiva</span>
          </a>
          <p slot="total">Totale 300 elementi</p>
        </it-pagination>
      </section>

      {/* Allineamento a destra */}
      <section className="mb-5">
        <h2>Allineamento a destra</h2>
        <div style={{ width: '100%' }}>
          <it-pagination value="2" align="end">
            <a href="#" slot="prev">
              <it-icon name="it-chevron-left"></it-icon>
              <span className="visually-hidden">Pagina precedente</span>
            </a>
            <it-pagination-item page="1">
              <a href="#">
                <span className="d-inline-block d-sm-none">Pagina </span>1
              </a>
            </it-pagination-item>
            <it-pagination-item page="2">
              <a href="#">
                <span className="d-inline-block d-sm-none">Pagina </span>2
              </a>
            </it-pagination-item>
            <it-pagination-item page="3">
              <a href="#">
                <span className="d-inline-block d-sm-none">Pagina </span>3
              </a>
            </it-pagination-item>
            <a href="#" slot="next">
              <it-icon name="it-chevron-right"></it-icon>
              <span className="visually-hidden">Pagina successiva</span>
            </a>
            <p slot="total">Totale 300 elementi</p>
          </it-pagination>
        </div>
      </section>

      {/* Paginazione responsive */}
      <section className="mb-5">
        <h2>Paginazione responsive</h2>
        <it-pagination value="1">
          <a href="#" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span class="visually-hidden">Pagina precedente</span>
          </a>

          <it-pagination-item page="1">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>1
            </a>
          </it-pagination-item>
          <it-pagination-item page="2">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>2
            </a>
          </it-pagination-item>
          <it-pagination-item page="3">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>3
            </a>
          </it-pagination-item>
          <it-pagination-item page="4">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>4
            </a>
          </it-pagination-item>
          <it-pagination-item page="5">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina</span>5
            </a>
          </it-pagination-item>

          <a href="#" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span class="visually-hidden">Pagina successiva</span>
          </a>
          <p slot="total">Totale 300 elementi</p>
        </it-pagination>
      </section>

      {/* Con numero totale di pagine */}
      <section className="mb-5">
        <h2>Con numero totale di pagine</h2>
        <it-pagination value="3">
          <a href="#" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span class="visually-hidden">Pagina precedente</span>
          </a>

          <it-pagination-item page="1">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>1
            </a>
          </it-pagination-item>
          <it-pagination-item page="2">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>2
            </a>
          </it-pagination-item>
          <it-pagination-item page="3">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>3
            </a>
          </it-pagination-item>
          <it-pagination-item page="4">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>4
            </a>
          </it-pagination-item>
          <it-pagination-item page="5">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>5
            </a>
          </it-pagination-item>
          <a href="#" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span class="visually-hidden">Pagina successiva</span>
          </a>
          <p slot="total">Totale 300 elementi</p>
        </it-pagination>
      </section>

      {/* Con selettore pagine */}
      <section className="mb-5">
        <h2>Con selettore pagine</h2>
        <it-pagination value="3">
          <a href="#" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span class="visually-hidden">Pagina precedente</span>
          </a>

          <it-pagination-item page="1">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>1
            </a>
          </it-pagination-item>
          <it-pagination-item page="2">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>2
            </a>
          </it-pagination-item>
          <it-pagination-item page="3">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>3
            </a>
          </it-pagination-item>
          <it-pagination-item page="4">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>4
            </a>
          </it-pagination-item>
          <it-pagination-item page="5">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>5
            </a>
          </it-pagination-item>

          <a href="#" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span class="visually-hidden">Pagina successiva</span>
          </a>

          <div slot="page-changer">
            <label htmlFor="page-size" className="visually-hidden">
              Elementi per pagina:
            </label>
            <select
              id="page-size"
              className="form-select"
              style={{ paddingRight: '1.5rem' }}
              onChange={(e) => console.log('PageChanger:', e.target.value)}
            >
              <option value="10">10/pagina</option>
              <option value="20" defaultValue>
                20/pagina
              </option>
              <option value="50">50/pagina</option>
              <option value="100">100/pagina</option>
            </select>
          </div>
        </it-pagination>
      </section>

      {/* Con salto a pagina specifica */}
      <section className="mb-5">
        <h2>Con salto a pagina specifica</h2>
        <it-pagination id="jump" value="5" total="20">
          <a href="#" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span class="visually-hidden">Pagina precedente</span>
          </a>

          <it-pagination-item page="1">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>1
            </a>
          </it-pagination-item>
          <it-pagination-item page="2">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>2
            </a>
          </it-pagination-item>
          <it-pagination-item page="3">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>3
            </a>
          </it-pagination-item>
          <it-pagination-item page="4">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>4
            </a>
          </it-pagination-item>
          <it-pagination-item page="5">
            <a href="#">
              <span className="d-inline-block d-sm-none">Pagina </span>5
            </a>
          </it-pagination-item>

          <a href="#" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span class="visually-hidden">Pagina successiva</span>
          </a>

          <div slot="jump-to-page" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <it-input
              id="jumper-example"
              type="number"
              name="jumper-example"
              placeholder="Vai a ..."
              label-hidden
              style={{ width: '80px' }}
            >
              <span slot="label">Vai a ...</span>
            </it-input>
          </div>
        </it-pagination>
      </section>

      {/* Simple Mode */}
      <section className="mb-5">
        <h2>Simple Mode</h2>
        <it-pagination simple-mode value="1" total="5">
          <a href="#" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span className="visually-hidden">Pagina precedente</span>
          </a>
          <a href="#" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span className="visually-hidden">Pagina successiva</span>
          </a>
        </it-pagination>
      </section>

      {/* More Mode */}
      <section className="mb-5">
        <h2>More Mode</h2>
        <it-pagination value="25" total="50" visible-pages="5" disable-responsive>
          <a href="#" slot="prev">
            <it-icon name="it-chevron-left"></it-icon>
            <span className="visually-hidden">Pagina precedente</span>
          </a>

          {Array.from({ length: 50 }, (_, i) => i + 1).map((page) => (
            <it-pagination-item key={page} page={page.toString()}>
              <a href="#">
                <span className="d-inline-block d-sm-none">Pagina </span>
                {page}
              </a>
            </it-pagination-item>
          ))}

          <a href="#" slot="next">
            <it-icon name="it-chevron-right"></it-icon>
            <span className="visually-hidden">Pagina successiva</span>
          </a>
        </it-pagination>
      </section>
    </div>
  );
}

export default Pagination;
