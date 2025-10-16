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
        <it-radio-group name="gruppo1" value={selectedValue} onChange={handleChange}>
          <span slot="legend">Gruppo di radio</span>
          <it-radio id="radio1" value="opzione1">
            <span slot="label">Radio di esempio 1</span>
          </it-radio>
          <it-radio id="radio2" value="opzione2">
            <span slot="label">Radio di esempio 2</span>
          </it-radio>
          <it-radio id="radio3" value="opzione3">
            <span slot="label">Radio di esempio 3</span>
          </it-radio>
        </it-radio-group>
        <p>
          Valore selezionato: <strong>{selectedValue}</strong>
        </p>
      </section>

      {/* Testo di supporto */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Testo di Supporto</h2>
        <it-radio-group name="gruppo-support">
          <span slot="legend">Esempio con testo di supporto</span>
          <it-radio
            id="radio-support1"
            value="opzione1"
            support-text="Questo è un testo di supporto per il radio button"
          >
            <span slot="label">Radio con testo di supporto</span>
          </it-radio>
          <it-radio id="radio-support2" value="opzione2">
            <span slot="label">Altro radio</span>
          </it-radio>
        </it-radio-group>
      </section>

      {/* Radio inline */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Radio Inline</h2>
        <fieldset>
          <legend>Gruppo di radio</legend>
          <it-radio-group
            name="gruppo-inline"
            value={selectedInline}
            onChange={(e) => setSelectedInline(e.target.value)}
          >
            <it-radio id="radio-inline1" value="opzione1" inline>
              <span slot="label">Radio inline 1</span>
            </it-radio>
            <it-radio id="radio-inline2" value="opzione2" inline>
              <span slot="label">Radio inline 2</span>
            </it-radio>
            <it-radio id="radio-inline3" value="opzione3" inline>
              <span slot="label">Radio inline 3</span>
            </it-radio>
          </it-radio-group>
        </fieldset>
      </section>

      {/* Radio disabilitato */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Radio Disabilitato</h2>
        <fieldset>
          <legend>Gruppo di radio</legend>
          <it-radio-group name="gruppo-disabled">
            <it-radio id="radio-disabled1" value="opzione1" checked disabled>
              <span slot="label">Radio selezionato e disabilitato</span>
            </it-radio>
            <it-radio id="radio-disabled2" value="opzione2" disabled>
              <span slot="label">Radio disabilitato</span>
            </it-radio>
            <it-radio id="radio-disabled3" value="opzione3">
              <span slot="label">Radio abilitato</span>
            </it-radio>
          </it-radio-group>
        </fieldset>
      </section>

      {/* Raggruppati visivamente */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Raggruppati Visivamente</h2>
        <div className="row">
          <fieldset className="col-12 col-md-6">
            <legend>Gruppo di radio</legend>
            <it-radio-group
              name="gruppo-visual"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
            >
              <it-radio id="radio-group1" value="opzione1" group>
                <span slot="label">Opzione 1</span>
              </it-radio>
              <it-radio id="radio-group2" value="opzione2" group>
                <span slot="label">Opzione 2</span>
              </it-radio>
              <it-radio id="radio-group3" value="opzione3" group>
                <span slot="label">Opzione 3</span>
              </it-radio>
            </it-radio-group>
          </fieldset>
          <fieldset className="col-12 col-md-6">
            <legend>Gruppo di radio con supportText</legend>
            <it-radio-group name="gruppo-visual2">
              <it-radio
                id="radio-group4"
                value="opzione1"
                group
                checked
                support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero"
              >
                <span slot="label">Opzione 1</span>
              </it-radio>
              <it-radio
                id="radio-group5"
                value="opzione2"
                group
                support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero"
              >
                <span slot="label">Opzione 2</span>
              </it-radio>
              <it-radio
                id="radio-group6"
                value="opzione3"
                group
                support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero"
              >
                <span slot="label">Opzione 3</span>
              </it-radio>
            </it-radio-group>
          </fieldset>
        </div>
      </section>

      {/* Form con validazione */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Radio Group con Validazione</h2>
        <form id="demo-form" onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>
              Seleziona un'opzione <span className="text-danger">*</span>
            </legend>
            <it-radio-group name="scelta" required>
              <it-radio value="si">
                <span slot="label">Sì, accetto</span>
              </it-radio>
              <it-radio value="no">
                <span slot="label">No, non accetto</span>
              </it-radio>
              <it-radio value="forse">
                <span slot="label">Forse</span>
              </it-radio>
            </it-radio-group>
          </fieldset>
          <button type="submit" className="btn btn-primary mt-3">
            Invia
          </button>
          <p className="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
        </form>
      </section>
    </div>
  );
}

export default RadioExamples;
