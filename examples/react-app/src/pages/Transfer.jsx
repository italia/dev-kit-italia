import React from 'react';

const Transfer = () => {
  return (
    <>
      <h1>Transfer</h1>

      <h2>Base</h2>
      <it-transfer name="transfer-base">
        <it-transfer-item value="item1">Voce 1</it-transfer-item>
        <it-transfer-item value="item2">Voce 2</it-transfer-item>
        <it-transfer-item value="item3">Voce 3</it-transfer-item>
        <it-transfer-item value="item4">Voce 4</it-transfer-item>
        <it-transfer-item value="item5">Voce 5</it-transfer-item>
        <it-transfer-item value="item6">Voce 6</it-transfer-item>
      </it-transfer>

      <h2>Con valori preimpostati</h2>
      <it-transfer name="transfer-preset">
        <it-transfer-item value="item7">Voce 7</it-transfer-item>
        <it-transfer-item value="item8">Voce 8</it-transfer-item>
        <it-transfer-item value="item9">Voce 9</it-transfer-item>
        <it-transfer-item value="item10" target={true}>Voce 10</it-transfer-item>
        <it-transfer-item value="item11" target={true}>Voce 11</it-transfer-item>
        <it-transfer-item value="item12" target={true}>Voce 12</it-transfer-item>
      </it-transfer>

      <h2>Etichette personalizzate</h2>
      <it-transfer
        name="transfer-labels"
        source-label="Comuni disponibili"
        target-label="Comuni selezionati"
      >
        <it-transfer-item value="rm">Roma</it-transfer-item>
        <it-transfer-item value="mi">Milano</it-transfer-item>
        <it-transfer-item value="na">Napoli</it-transfer-item>
        <it-transfer-item value="to">Torino</it-transfer-item>
      </it-transfer>

      <h2>Con elemento non trasferibile</h2>
      <it-transfer name="transfer-disabled-item">
        <it-transfer-item value="a">Voce A</it-transfer-item>
        <it-transfer-item value="b" disabled={true}>Voce B (non trasferibile)</it-transfer-item>
        <it-transfer-item value="c">Voce C</it-transfer-item>
      </it-transfer>

      <h2>Disabilitato</h2>
      <it-transfer name="transfer-disabled" disabled={true}>
        <it-transfer-item value="x">Voce X</it-transfer-item>
        <it-transfer-item value="y">Voce Y</it-transfer-item>
        <it-transfer-item value="z" target={true}>Voce Z</it-transfer-item>
      </it-transfer>
    </>
  );
};

export default Transfer;
