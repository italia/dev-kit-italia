import { useState } from 'react';
import '@italia/radio';

function RadioExamples() {
  const [selectedValue, setSelectedValue] = useState('opzione1');
  const [selectedInline, setSelectedInline] = useState('opzione1');
  const [selectedGroup, setSelectedGroup] = useState('opzione1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    alert(`Form valido! Dati: ${JSON.stringify(data)}`);
  };

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Esempi Radio Button - React</h1>

      {/* Esempio base */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Esempio Base</h2>
        <fieldset>
          <legend>Gruppo di radio</legend>
          <it-radio
            id="radio1"
            name="gruppo1"
            value="opzione1"
            checked={selectedValue === 'opzione1'}
            onChange={handleChange}
          >
            <span slot="label">Radio di esempio 1</span>
          </it-radio>
          <it-radio
            id="radio2"
            name="gruppo1"
            value="opzione2"
            checked={selectedValue === 'opzione2'}
            onChange={handleChange}
          >
            <span slot="label">Radio di esempio 2</span>
          </it-radio>
          <it-radio
            id="radio3"
            name="gruppo1"
            value="opzione3"
            checked={selectedValue === 'opzione3'}
            onChange={handleChange}
          >
            <span slot="label">Radio di esempio 3</span>
          </it-radio>
        </fieldset>
        <p>
          Valore selezionato: <strong>{selectedValue}</strong>
        </p>
      </section>

      {/* Testo di supporto */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Testo di Supporto</h2>
        <fieldset>
          <legend>Gruppo di radio con testo di supporto</legend>
          <it-radio
            id="radio-support1"
            name="gruppo-support"
            value="opzione1"
            support-text="Questo è un testo di supporto per il radio button"
          >
            <span slot="label">Radio con testo di supporto</span>
          </it-radio>
          <it-radio id="radio-support2" name="gruppo-support" value="opzione2">
            <span slot="label">Altro radio</span>
          </it-radio>
        </fieldset>
      </section>

      {/* Radio inline */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Radio Inline</h2>
        <fieldset>
          <legend>Gruppo di radio</legend>
          <it-radio
            id="radio-inline1"
            name="gruppo-inline"
            value="opzione1"
            inline
            checked={selectedInline === 'opzione1'}
            onChange={(e) => setSelectedInline(e.target.value)}
          >
            <span slot="label">Radio inline 1</span>
          </it-radio>
          <it-radio
            id="radio-inline2"
            name="gruppo-inline"
            value="opzione2"
            inline
            checked={selectedInline === 'opzione2'}
            onChange={(e) => setSelectedInline(e.target.value)}
          >
            <span slot="label">Radio inline 2</span>
          </it-radio>
          <it-radio
            id="radio-inline3"
            name="gruppo-inline"
            value="opzione3"
            inline
            checked={selectedInline === 'opzione3'}
            onChange={(e) => setSelectedInline(e.target.value)}
          >
            <span slot="label">Radio inline 3</span>
          </it-radio>
        </fieldset>
      </section>

      {/* Radio disabilitato */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Radio Disabilitato</h2>
        <fieldset>
          <legend>Gruppo di radio</legend>
          <it-radio id="radio-disabled1" name="gruppo-disabled" value="opzione1" checked disabled>
            <span slot="label">Radio selezionato e disabilitato</span>
          </it-radio>
          <it-radio id="radio-disabled2" name="gruppo-disabled" value="opzione2" disabled>
            <span slot="label">Radio disabilitato</span>
          </it-radio>
          <it-radio id="radio-disabled3" name="gruppo-disabled" value="opzione3">
            <span slot="label">Radio abilitato</span>
          </it-radio>
        </fieldset>
      </section>

      {/* Raggruppati visivamente */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Raggruppati Visivamente</h2>
        <div className="row">
          <fieldset className="col-12 col-md-6">
            <legend>Gruppo di radio</legend>
            <div>
              <it-radio
                id="radio-group1"
                name="gruppo-visual"
                value="opzione1"
                group
                checked={selectedGroup === 'opzione1'}
                onChange={(e) => setSelectedGroup(e.target.value)}
              >
                <span slot="label">Opzione 1</span>
              </it-radio>
              <it-radio
                id="radio-group2"
                name="gruppo-visual"
                value="opzione2"
                group
                checked={selectedGroup === 'opzione2'}
                onChange={(e) => setSelectedGroup(e.target.value)}
              >
                <span slot="label">Opzione 2</span>
              </it-radio>
              <it-radio
                id="radio-group3"
                name="gruppo-visual"
                value="opzione3"
                group
                checked={selectedGroup === 'opzione3'}
                onChange={(e) => setSelectedGroup(e.target.value)}
              >
                <span slot="label">Opzione 3</span>
              </it-radio>
            </div>
          </fieldset>
        </div>
      </section>

      {/* Form con validazione */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Validazione (Required)</h2>
        <form id="demo-form" onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Seleziona un'opzione *</legend>
            <it-radio name="scelta-required" value="si" required>
              <span slot="label">Sì</span>
            </it-radio>
            <it-radio name="scelta-required" value="no" required>
              <span slot="label">No</span>
            </it-radio>
          </fieldset>
          <button type="submit" className="btn btn-primary mt-3">
            Invia
          </button>
        </form>
      </section>
    </div>
  );
}

export default RadioExamples;
