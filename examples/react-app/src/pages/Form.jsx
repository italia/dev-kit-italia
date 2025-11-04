import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('form'));
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // Handle form submission logic here
    /*
    Per i campi di tipo checkbox multiple (stesso [name] e valori delle checkbox diversi),
    il valore si ottiene con formData.getAll(field_name) dove field_name è il valore dell'attributo [name] delle checkbox
    */
  };

  return (
    <>
      <h1>it-form</h1>
      <form id="form" onSubmit={handleSubmit}>
        <it-input id="nome" name="nome" label="Nome"></it-input>
        <it-input id="cognome" name="cognome" label="Cogome"></it-input>
        <it-input id="email" name="email" label="E-mail" type="email" support-text="Inserisci la tua email"></it-input>
        <it-input
          id="messaggio"
          name="messaggio"
          label="Messaggio"
          type="textarea"
          support-text="Inserisci il tuo messaggio"
        ></it-input>
        <it-checkbox
          id="privacy"
          name="privacy"
          label="Privacy"
          support-text="Accetto le condizioni sulla privacy"
        ></it-checkbox>

        <it-button type="submit" variant="primary" block>
          Invia
        </it-button>
      </form>
    </>
  );
};

export default Form;
