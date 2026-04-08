import { useState } from 'react';

function Radio() {
  const [selectedValue, setSelectedValue] = useState('opzione1');
  const [selectedInline, setSelectedInline] = useState('opzione1');
  const [selectedGrouped, setSelectedGrouped] = useState('opzione1');

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
    <>
      <h1>Radio</h1>

      {/* Esempio base */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Esempio Base</h2>
        <it-radio-group name="gruppo1" value={selectedValue} onChange={handleChange}>
          <span slot="label">Gruppo di radio</span>
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
          <span slot="label">Esempio con testo di supporto</span>
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
        <it-radio-group
          name="gruppo-inline"
          inline
          value={selectedInline}
          onChange={(e) => setSelectedInline(e.target.value)}
        >
          <span slot="label">Esempio inline</span>
          <it-radio id="radio-inline1" value="opzione1">
            <span slot="label">Radio inline 1</span>
          </it-radio>
          <it-radio id="radio-inline2" value="opzione2">
            <span slot="label">Radio inline 2</span>
          </it-radio>
          <it-radio id="radio-inline3" value="opzione3">
            <span slot="label">Radio inline 3</span>
          </it-radio>
        </it-radio-group>
      </section>

      {/* Radio disabilitato */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Radio Disabilitato</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <it-radio-group name="gruppo-alcuni-disabled" value="opzione1">
              <span slot="label">Esempio con alcuni disabilitati</span>
              <it-radio id="radio-disabled1" value="opzione1" disabled>
                <span slot="label">Radio selezionato e disabilitato</span>
              </it-radio>
              <it-radio id="radio-disabled2" value="opzione2" disabled>
                <span slot="label">Radio disabilitato</span>
              </it-radio>
              <it-radio id="radio-disabled3" value="opzione3">
                <span slot="label">Radio abilitato</span>
              </it-radio>
            </it-radio-group>
          </div>
          <div className="col-12 col-md-6">
            <it-radio-group name="gruppo-tutti-disabled" value="opzione2" disabled>
              <span slot="label">Esempio con tutti disabilitati</span>
              <it-radio id="radio-disabled4" value="opzione1">
                <span slot="label">Radio selezionato e disabilitato</span>
              </it-radio>
              <it-radio id="radio-disabled5" value="opzione2">
                <span slot="label">Radio disabilitato</span>
              </it-radio>
              <it-radio id="radio-disabled6" value="opzione3">
                <span slot="label">Radio abilitato</span>
              </it-radio>
            </it-radio-group>
          </div>
        </div>
      </section>

      {/* Raggruppati visivamente */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Raggruppati Visivamente</h2>
        <div className="row">
          <div className="col-12 col-md-6">
            <it-radio-group
              name="gruppo-visual"
              grouped
              value={selectedGrouped}
              onChange={(e) => setSelectedGrouped(e.target.value)}
            >
              <span slot="label">Esempio grouped senza testo di supporto</span>
              <it-radio id="radio-group1" value="opzione1">
                <span slot="label">Opzione 1</span>
              </it-radio>
              <it-radio id="radio-group2" value="opzione2">
                <span slot="label">Opzione 2</span>
              </it-radio>
              <it-radio id="radio-group3" value="opzione3">
                <span slot="label">Opzione 3</span>
              </it-radio>
            </it-radio-group>
          </div>
          <div className="col-12 col-md-6">
            <it-radio-group name="gruppo-visual2" grouped>
              <span slot="label">Esempio grouped con testo di supporto</span>
              <it-radio
                id="radio-group4"
                value="opzione1"
                support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero"
              >
                <span slot="label">Opzione 1</span>
              </it-radio>
              <it-radio
                id="radio-group5"
                value="opzione2"
                support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero"
              >
                <span slot="label">Opzione 2</span>
              </it-radio>
              <it-radio
                id="radio-group6"
                value="opzione3"
                support-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero"
              >
                <span slot="label">Opzione 3</span>
              </it-radio>
            </it-radio-group>
          </div>
        </div>
      </section>

      {/* Form con validazione */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Radio Group con Validazione</h2>
        <form id="demo-form" onSubmit={handleFormSubmit}>
          <it-radio-group name="scelta" required>
            <span slot="label">
              Seleziona un'opzione <span className="text-danger">*</span>
            </span>
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
          <button type="submit" className="btn btn-primary mt-3">
            Invia
          </button>
          <p className="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
        </form>
      </section>
    </>
  );
}

export default Radio;
