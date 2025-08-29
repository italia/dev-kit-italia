import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(document.getElementById('form'));
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <>
      <h1>it-form</h1>
      <form id='form' onSubmit={handleSubmit}>
        <it-input id='nome' name='nome' label='Nome'></it-input>
        <it-input id='cognome' name='cognome' label='Cogome'></it-input>
        <it-input
          id='email'
          name='email'
          label='E-mail'
          type='email'
          support-text='Inserisci la tua email'
          custom-validation
        ></it-input>
        <it-input
          id='messaggio'
          name='messaggio'
          label='Messaggio'
          type='textarea'
          support-text='Inserisci il tuo messaggio'
          custom-validation
        ></it-input>

        <it-button type='submit' variant='primary' block>
          Invia
        </it-button>
      </form>
    </>
  );
};

export default Form;
