import React, { useRef, useEffect, useState } from 'react';

const Transfer = () => {
  const transferCancelRef = useRef(null);
  const [transferStatus, setTransferStatus] = useState('');
  const transferAsyncRef = useRef(null);
  const [asyncStatus, setAsyncStatus] = useState('');

  useEffect(() => {
    const el = transferCancelRef.current;
    if (!el) return;
    const onTransfer = (e) => {
      if (e.detail.action === 'transfer' && e.detail.target.length > 3) {
        e.preventDefault();
        setTransferStatus('Limite di 3 elementi nel target raggiunto.');
      } else {
        setTransferStatus('');
      }
    };
    el.addEventListener('it-transfer', onTransfer);
    return () => el.removeEventListener('it-transfer', onTransfer);
  }, []);

  useEffect(() => {
    const el = transferAsyncRef.current;
    if (!el) return;
    const onTransfer = (e) => {
      e.preventDefault();
      setAsyncStatus('Attendere conferma…');
      setTimeout(() => {
        el.commit(e.detail);
        setAsyncStatus('');
      }, 1000);
    };
    el.addEventListener('it-transfer', onTransfer);
    return () => el.removeEventListener('it-transfer', onTransfer);
  }, []);

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

      <h2>Evento cancelable: Limite di 3 elementi nel target</h2>
      <it-transfer ref={transferCancelRef} name="transfer-max-items">
        <it-transfer-item value="a">Voce A</it-transfer-item>
        <it-transfer-item value="b">Voce B</it-transfer-item>
        <it-transfer-item value="c">Voce C</it-transfer-item>
        <it-transfer-item value="d">Voce D</it-transfer-item>
        <it-transfer-item value="e">Voce E</it-transfer-item>
        <it-transfer-item value="f">Voce F</it-transfer-item>
      </it-transfer>
      <p role="status" aria-live="polite" style={{ marginTop: '1rem', color: '#d32f2f' }}>
        {transferStatus}
      </p>

      <h2>Evento cancelable con ripresa asincrona</h2>
      <it-transfer ref={transferAsyncRef} name="transfer-async">
        <it-transfer-item value="a">Voce A</it-transfer-item>
        <it-transfer-item value="b">Voce B</it-transfer-item>
        <it-transfer-item value="c">Voce C</it-transfer-item>
        <it-transfer-item value="d">Voce D</it-transfer-item>
      </it-transfer>
      <p role="status" aria-live="polite" style={{ marginTop: '1rem' }}>
        {asyncStatus}
      </p>
    </>
  );
};

export default Transfer;
