import React from 'react';

const Input = () => {
  return (
    <>
      <h1>it-input</h1>
      <div className="flex">
        <it-input
          id="exampleInputText"
          label="Campo di testo"
          type="text"
          name="testo"
        ></it-input>
        {/* <it-input
          id="exampleInputEmail"
          label="Campo email"
          type="email"
          name="email"
        ></it-input>
        <it-input
          id="exampleInputNumber"
          label="Campo numerico"
          type="number"
          name="number"
        ></it-input>
        <it-input
          id="exampleInputTel"
          label="Campo telefonico"
          type="tel"
          name="telefono"
        ></it-input>
        <it-input
          id="exampleInputTime"
          label="Campo orario"
          type="time"
          name="orario"
        ></it-input> */}
      </div>
      {/* <section>
        <h2>Varianti di colore</h2>
        <div className="flex"></div>
      </section> */}
    </>
  );
};

export default Input;
