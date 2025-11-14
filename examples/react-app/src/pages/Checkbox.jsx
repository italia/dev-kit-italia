import React, { useEffect, useState } from 'react';
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const Checkbox = () => {
  return (
    <>
      <h1>it-checkbox</h1>

      <it-checkbox id="chExample" name="esempio">
        <span slot="label">Checkbox di esempio</span>
      </it-checkbox>
      <section>
        <h2>Checked</h2>
        <it-checkbox id="checked" name="esempioChecked" checked={true}>
          <span slot="label">Checkbox di esempio selezionata</span>
        </it-checkbox>
      </section>

      <section>
        <h2>Indeterminate</h2>
        <it-checkbox id="indeterminate" indeterminate={true}>
          <span slot="label">Checkbox di esempio indeterminata</span>
        </it-checkbox>
      </section>
      <section>
        <h2>Disabilitata</h2>
        <it-checkbox id="disabledd" disabled={true}>
          <span slot="label">Checkbox di esempio disabilitata</span>
        </it-checkbox>
      </section>

      <section>
        <h2>Required</h2>
        <it-checkbox id="required" required={true}>
          <span slot="label">Checkbox di esempio required</span>
        </it-checkbox>
      </section>

      <section>
        <h2>Inline</h2>
        <fieldset>
          <legend>Gruppo di checkbox</legend>
          <it-checkbox id="inline-1" inline={true}>
            <span slot="label">Checkbox di esempio inline 1</span>
          </it-checkbox>
          <it-checkbox id="inline-2" inline={true}>
            <span slot="label">Checkbox di esempio inline 2</span>
          </it-checkbox>
        </fieldset>
      </section>

      <section>
        <h2>Raggruppamento</h2>
        <fieldset>
          <legend>Gruppo di checkbox</legend>
          <it-checkbox id="inline-1" group={true}>
            <span slot="label">Checkbox di esempio inline 1</span>
          </it-checkbox>
          <it-checkbox id="inline-2" group={true}>
            <span slot="label">Checkbox di esempio inline 2</span>
          </it-checkbox>
        </fieldset>
      </section>

      <section>
        <h2>Testo di supporto</h2>

        <it-checkbox id="supporttext" supportText="Testo di supporto">
          <span slot="label">Checkbox di esempio</span>
        </it-checkbox>
      </section>

      <section>
        <h2>Validazione custom</h2>

        <it-checkbox
          id="customvalidation"
          supportText="Testo di supporto"
          custom-validation={true}
          validity-message="Obbligatorio!"
        >
          <span slot="label">Checkbox di esempio</span>
        </it-checkbox>
      </section>
    </>
  );
};

export default Checkbox;
