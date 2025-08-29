import React, { useEffect, useState } from 'react';
import { registerTranslation } from '@italia/design-web-components/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr',
  showHidePassword: 'Mostra/Nascondi Password (test input).',
};

const Input = () => {
  const [translationsLoaded, setTranslationsLoaded] = useState(false);
  useEffect(() => {
    console.log('registering translation', it);
    registerTranslation(it);
    setTranslationsLoaded(true);
  }, []);

  return (
    <>
      <h1>it-input</h1>

      <it-input id='exampleInputText' label='Campo di testo' type='text' name='testo'></it-input>
      <it-input id='exampleInputEmail' label='Campo email' type='email' name='email'></it-input>
      <it-input id='exampleInputNumber' label='Campo numerico' type='number' name='number'></it-input>
      <it-input id='exampleInputTel' label='Campo telefonico' type='tel' name='telefono'></it-input>
      <it-input id='exampleInputTime' label='Campo orario' type='time' name='orario'></it-input>
      <it-input
        id='field-disabled-example'
        label='Campo disabilitato'
        type='text'
        name='field-disabled-example'
        disabled={true}
      ></it-input>
      <it-input
        id='field-readonly-example'
        label='Campo readonly'
        type='text'
        name='field-readonly-example'
        readonly={true}
        value='Contenuto in sola lettura'
      ></it-input>
      <it-input
        id='field-readonlyplaintext-example'
        label='Campo readonly normalizzato come plaintext'
        type='text'
        name='field-readonlyplaintext-example'
        readonly={true}
        plaintext={true}
        value='Contenuto in sola lettura'
      ></it-input>
      {translationsLoaded && (
        <>
          <it-input
            id='field-password-example'
            label='Campo password'
            type='password'
            name='field-password-example'
            support-text='Inserisci almeno 8 caratteri e alcuni caratteri speciali.'
            minlength='8'
          ></it-input>
          <it-input
            id='field-password-strength-example'
            label='Campo password'
            type='password'
            name='field-password-strength-example'
            support-text='Inserisci almeno 8 caratteri e alcuni caratteri speciali.'
            strength-meter={true}
            minlength='8'
            suggestions={true}
          ></it-input>
        </>
      )}
      <it-input
        id='textarea-example'
        label='Area di testo'
        type='textarea'
        name='textarea-example'
        placeholder='Testo segnaposto'
      ></it-input>
      <it-input
        id='required-example'
        label='Campo obbligatorio'
        type='text'
        name='required-example'
        required=''
        placeholder='Testo segnaposto'
      ></it-input>
      <it-input
        id='external-validation-example'
        label='Validazione esterna'
        type='text'
        name='external-validation-example'
        validity-message='Questo campo è obbligatorio!'
        placeholder='Testo segnaposto'
        custom-validation=''
      ></it-input>
      {/* <section>
        <h2>Varianti di colore</h2>
        <div className="flex"></div>
      </section> */}
    </>
  );
};

export default Input;
