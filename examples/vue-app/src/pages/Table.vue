<template>
  <div class="container my-5">
    <h1 class="mb-4">Esempi di Tabelle</h1>

    <!-- Tabella base -->
    <section class="mb-5">
      <h2>Tabella base</h2>
      <p>
        Usando il markup di base della tabella, ecco come appaiono le tabelle che utilizzano la classe
        <code>.table</code> in Bootstrap Italia.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>mario.verdi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Tabella responsive -->
    <section class="mb-5">
      <h2>Tabella responsive</h2>
      <p>
        Le tabelle responsive consentono di scorrere le tabelle orizzontalmente con facilità. Usa
        <code>.table-responsive</code> per tabelle con scorrimento orizzontale.
      </p>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Intestazione</th>
              <th scope="col">Intestazione</th>
              <th scope="col">Intestazione</th>
              <th scope="col">Intestazione</th>
              <th scope="col">Intestazione</th>
              <th scope="col">Intestazione</th>
              <th scope="col">Intestazione</th>
              <th scope="col">Intestazione</th>
              <th scope="col">Intestazione</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
              <td>Cella</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Tabelle colorate -->
    <section class="mb-5">
      <h2>Tabelle colorate</h2>
      <p>Utilizza le classi contestuali per colorare l'intera tabella.</p>

      <table class="table table-primary mb-3">
        <tbody>
          <tr>
            <th scope="row">Default</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-secondary mb-3">
        <tbody>
          <tr>
            <th scope="row">Secondary</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-success mb-3">
        <tbody>
          <tr>
            <th scope="row">Success</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-danger mb-3">
        <tbody>
          <tr>
            <th scope="row">Danger</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-warning">
        <tbody>
          <tr>
            <th scope="row">Warning</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Righe colorate -->
    <section class="mb-5">
      <h2>Righe colorate</h2>
      <p>Utilizza le classi contestuali per colorare singole righe della tabella.</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Classe</th>
            <th scope="col">Intestazione</th>
            <th scope="col">Intestazione</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Default</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
          <tr class="table-primary">
            <th scope="row">Primary</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
          <tr class="table-secondary">
            <th scope="row">Secondary</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
          <tr class="table-success">
            <th scope="row">Success</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
          <tr class="table-danger">
            <th scope="row">Danger</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
          <tr class="table-warning">
            <th scope="row">Warning</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
          <tr class="table-info">
            <th scope="row">Info</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
          <tr class="table-light">
            <th scope="row">Light</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
          <tr class="table-dark">
            <th scope="row">Dark</th>
            <td>Cella</td>
            <td>Cella</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Tabella striata -->
    <section class="mb-5">
      <h2>Tabella striata</h2>
      <p>
        Usa <code>.table-striped</code> per aggiungere delle striature zebrate ad ogni riga della tabella contenute in
        <code>&lt;tbody&gt;</code>.
      </p>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>mario.verdi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Tabella hover -->
    <section class="mb-5">
      <h2>Tabella con hover</h2>
      <p>
        Aggiungi <code>.table-hover</code> per abilitare lo stato hover sulle righe della tabella contenute in
        <code>&lt;tbody&gt;</code>.
      </p>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>mario.verdi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Tabella attiva -->
    <section class="mb-5">
      <h2>Tabella attiva</h2>
      <p>Evidenzia una riga o cella della tabella aggiungendo la classe <code>.table-active</code>.</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-active">
            <th scope="row">1</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td class="table-active" colspan="2">Mario Verdi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Tabella con bordi -->
    <section class="mb-5">
      <h2>Tabella con bordi</h2>
      <p>Aggiungi <code>.table-bordered</code> per avere i bordi a tutti i lati della tabella e su tutte le celle.</p>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Tabella senza bordi -->
    <section class="mb-5">
      <h2>Tabella senza bordi</h2>
      <p>Aggiungi la classe <code>.table-borderless</code> per una tabella senza bordi.</p>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Tabella compatta -->
    <section class="mb-5">
      <h2>Tabella compatta</h2>
      <p>Aggiungi <code>.table-sm</code> per rendere le tabelle più compatte dimezzando il cell padding.</p>
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Intestazione light -->
    <section class="mb-5">
      <h2>Intestazione light</h2>
      <p>
        Come per le tabelle utilizza le classi varianti come <code>.table-light</code> per modificare l'aspetto di
        <code>&lt;thead&gt;</code>.
      </p>
      <table class="table">
        <thead class="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>mario.verdi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Intestazione dark -->
    <section class="mb-5">
      <h2>Intestazione dark</h2>
      <p>
        Utilizza <code>.table-dark</code> per modificare l'aspetto di <code>&lt;thead&gt;</code> con uno stile scuro.
      </p>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>mario.verdi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Tabella con footer -->
    <section class="mb-5">
      <h2>Tabella con footer</h2>
      <p>Le tabelle possono avere un footer utilizzando l'elemento <code>&lt;tfoot&gt;</code>.</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>mario.verdi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">Footer</td>
          </tr>
        </tfoot>
      </table>
    </section>

    <!-- Tabella con caption -->
    <section class="mb-5">
      <h2>Tabella con caption</h2>
      <p>
        Un <code>&lt;caption&gt;</code> funziona come un'intestazione per una tabella. Aiuta gli utenti con screen
        reader a trovare una tabella e capire di cosa si tratta e decidere se vogliono leggerla.
      </p>
      <table class="table">
        <caption>
          Lista di utenti
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>mario.verdi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Tabella con caption-top -->
    <section class="mb-5">
      <h2>Tabella con caption in alto</h2>
      <p>
        Per renderizzare la <code>&lt;caption&gt;</code> in cima alla tabella utilizza la classe
        <code>.caption-top</code>.
      </p>
      <table class="table caption-top">
        <caption>
          Lista di utenti
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mario</td>
            <td>Verdi</td>
            <td>mario.verdi</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Francesco</td>
            <td>Bianchi</td>
            <td>francesco.bianchi</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Alessandro</td>
            <td>Rossi</td>
            <td>alessandro.rossi</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
