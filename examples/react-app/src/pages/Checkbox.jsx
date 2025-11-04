import React, { useEffect, useState } from 'react';
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const Checkbox = () => {
  return (
    <>
      <h1>it-checkbox</h1>

      <it-checkbox id="chExample" label="Checkbox di esempio" name="esempio"></it-checkbox>
      <section>
        <h2>Checked</h2>
        <it-checkbox
          id="checked"
          label="Checkbox di esempio selezionata"
          name="esempioChecked"
          checked={true}
        ></it-checkbox>
      </section>

      <section>
        <h2>Indeterminate</h2>
        <it-checkbox id="indeterminate" label="Checkbox di esempio indeterminata" indeterminate={true}></it-checkbox>
      </section>
      <section>
        <h2>Disabilitata</h2>
        <it-checkbox id="disabledd" label="Checkbox di esempio disabilitata" disabled={true}></it-checkbox>
      </section>

      <section>
        <h2>Required</h2>
        <it-checkbox id="required" label="Checkbox di esempio required" required={true}></it-checkbox>
      </section>

      <section>
        <h2>Inline</h2>
        <fieldset>
          <legend>Gruppo di checkbox</legend>
          <it-checkbox id="inline-1" label="Checkbox di esempio inline 1" inline={true}></it-checkbox>
          <it-checkbox id="inline-2" label="Checkbox di esempio inline 2" inline={true}></it-checkbox>
        </fieldset>
      </section>

      <section>
        <h2>Raggruppamento</h2>
        <fieldset>
          <legend>Gruppo di checkbox</legend>
          <it-checkbox id="inline-1" label="Checkbox di esempio inline 1" group={true}></it-checkbox>
          <it-checkbox id="inline-2" label="Checkbox di esempio inline 2" group={true}></it-checkbox>
        </fieldset>
      </section>

      <section>
        <h2>Testo di supporto</h2>

        <it-checkbox id="supporttext" label="Checkbox di esempio" supportText="Testo di supporto"></it-checkbox>
      </section>

      <section>
        <h2>Validazione custom</h2>

        <it-checkbox
          id="customvalidation"
          label="Checkbox di esempio"
          supportText="Testo di supporto"
          custom-validation={true}
          validity-message="Obbligatorio!"
        ></it-checkbox>
      </section>
    </>
  );
};

export default Checkbox;
