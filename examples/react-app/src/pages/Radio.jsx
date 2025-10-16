import { useState } from 'react';

function Radio() {
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
      <h1>Esempi Radio Button</h1>

      {/* Form con validazione */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Validazione (Required)</h2>
        <form id="demo-form" onSubmit={handleFormSubmit}>
          <it-radio-group name="scelta" required value={selectedValue} onChange={handleChange}>
            <span slot="label">Esempio con validazione</span>
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
          <button type="submit" class="btn btn-primary mt-3">
            Invia
          </button>
          <p class="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
        </form>
      </section>
    </div>
  );
}

export default Radio;
