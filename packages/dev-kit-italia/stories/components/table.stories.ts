import type { StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';

const basicTable = html`
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
`;

const responsiveTable = html`
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
`;

const responsiveSmTable = html`
  <div class="table-responsive-sm">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
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
        </tr>
        <tr>
          <th scope="row">2</th>
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
        </tr>
      </tbody>
    </table>
  </div>
`;

const responsiveMdTable = html`
  <div class="table-responsive-md">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
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
        </tr>
        <tr>
          <th scope="row">2</th>
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
        </tr>
      </tbody>
    </table>
  </div>
`;

const responsiveLgTable = html`
  <div class="table-responsive-lg">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
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
        </tr>
        <tr>
          <th scope="row">2</th>
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
        </tr>
      </tbody>
    </table>
  </div>
`;

const responsiveXlTable = html`
  <div class="table-responsive-xl">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
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
        </tr>
        <tr>
          <th scope="row">2</th>
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
        </tr>
      </tbody>
    </table>
  </div>
`;

const responsiveXxlTable = html`
  <div class="table-responsive-xxl">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
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
        </tr>
        <tr>
          <th scope="row">2</th>
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
        </tr>
      </tbody>
    </table>
  </div>
`;

const coloredTables = html`
  <table class="table table-default">
    <thead>
      <tr>
        <th scope="col">Default</th>
        <th scope="col">Cella</th>
        <th scope="col">Cella</th>
      </tr>
    </thead>
  </table>

  <table class="table table-secondary">
    <thead>
      <tr>
        <th scope="col">Secondary</th>
        <th scope="col">Cella</th>
        <th scope="col">Cella</th>
      </tr>
    </thead>
  </table>

  <table class="table table-success">
    <thead>
      <tr>
        <th scope="col">Success</th>
        <th scope="col">Cella</th>
        <th scope="col">Cella</th>
      </tr>
    </thead>
  </table>

  <table class="table table-danger">
    <thead>
      <tr>
        <th scope="col">Danger</th>
        <th scope="col">Cella</th>
        <th scope="col">Cella</th>
      </tr>
    </thead>
  </table>

  <table class="table table-warning">
    <thead>
      <tr>
        <th scope="col">Warning</th>
        <th scope="col">Cella</th>
        <th scope="col">Cella</th>
      </tr>
    </thead>
  </table>

  <table class="table table-info">
    <thead>
      <tr>
        <th scope="col">Info</th>
        <th scope="col">Cella</th>
        <th scope="col">Cella</th>
      </tr>
    </thead>
  </table>

  <table class="table table-light">
    <thead>
      <tr>
        <th scope="col">Light</th>
        <th scope="col">Cella</th>
        <th scope="col">Cella</th>
      </tr>
    </thead>
  </table>

  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Dark</th>
        <th scope="col">Cella</th>
        <th scope="col">Cella</th>
      </tr>
    </thead>
  </table>
`;

const coloredRows = html`
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Classe</th>
        <th scope="col">Intestazione</th>
        <th scope="col">Intestazione</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-default">
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
`;

const coloredCells = html`
  <table class="table">
    <thead>
      <tr>
        <th scope="col" class="table-default">Default</th>
        <th scope="col" class="table-primary">Primary</th>
        <th scope="col" class="table-secondary">Secondary</th>
        <th scope="col" class="table-success">Success</th>
        <th scope="col" class="table-danger">Danger</th>
        <th scope="col" class="table-warning">Warning</th>
        <th scope="col" class="table-info">Info</th>
        <th scope="col" class="table-light">Light</th>
        <th scope="col" class="table-dark">Dark</th>
      </tr>
    </thead>
  </table>
`;

const stripedTable = html`
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
`;

const stripedDarkTable = html`
  <table class="table table-dark table-striped">
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
`;

const hoverTable = html`
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
`;

const hoverStripedTable = html`
  <table class="table table-striped table-hover">
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
`;

const activeTable = html`
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
        <td class="table-active">Mario</td>
        <td class="table-active">Verdi</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
`;

const borderedTable = html`
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
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
`;

const borderedPrimaryTable = html`
  <table class="table table-bordered border-primary">
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
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
`;

const borderlessTable = html`
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
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
`;

const borderlessDarkTable = html`
  <table class="table table-dark table-borderless">
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
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
`;

const smallTable = html`
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
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
`;

const verticalAlignmentTable = html`
  <div class="table-responsive">
    <table class="table align-middle">
      <thead>
        <tr>
          <th scope="col" class="w-25">Intestazione 1</th>
          <th scope="col" class="w-25">Intestazione 2</th>
          <th scope="col" class="w-25">Intestazione 3</th>
          <th scope="col" class="w-25">Intestazione 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td>
            This here is some placeholder text, intended to take up quite a bit of vertical space, to
            demonstrate how the vertical alignment works in the preceding cells.
          </td>
        </tr>
        <tr class="align-bottom">
          <td>Questa cella eredita <code>vertical-align: bottom;</code> dalla riga</td>
          <td>Questa cella eredita <code>vertical-align: bottom;</code> dalla riga</td>
          <td>Questa cella eredita <code>vertical-align: bottom;</code> dalla riga</td>
          <td>
            This here is some placeholder text, intended to take up quite a bit of vertical space, to
            demonstrate how the vertical alignment works in the preceding cells.
          </td>
        </tr>
        <tr>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td>Questa cella eredita <code>vertical-align: middle;</code> dalla tabella</td>
          <td class="align-top">This cell is aligned to the top.</td>
          <td>
            This here is some placeholder text, intended to take up quite a bit of vertical space, to
            demonstrate how the vertical alignment works in the preceding cells.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`;

const nestingTable = html`
  <table class="table table-striped table-bordered">
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
        <td colspan="4">
          <table class="table mb-0">
            <thead>
              <tr>
                <th scope="col">Intestazione</th>
                <th scope="col">Intestazione</th>
                <th scope="col">Intestazione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">A</th>
                <td>Primo</td>
                <td>Ultimo</td>
              </tr>
              <tr>
                <th scope="row">B</th>
                <td>Primo</td>
                <td>Ultimo</td>
              </tr>
              <tr>
                <th scope="row">C</th>
                <td>Primo</td>
                <td>Ultimo</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Mario</td>
        <td>Verdi</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
`;

const theadLightTable = html`
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
`;

const theadDarkTable = html`
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
`;

const footerTable = html`
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
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4">Footer</td>
      </tr>
    </tfoot>
  </table>
`;

const captionTable = html`
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
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
`;

const captionTopTable = html`
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
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
`;

const meta = {
  title: 'Componenti/Table',
  component: 'table',
  tags: ['documentation', 'a11y-ok'],
};

export default meta;
type Story = StoryObj<{}>;

export const Placeholder: Story = {
  tags: ['!autodocs', '!dev'],
  parameters: {
    canvas: { hidden: true, sourceState: 'none' },
    viewMode: 'docs',
    docs: {
      page: null,
    },
  },
};

export const TabellaBase: Story = {
  render: () => html`${basicTable}`,
  name: 'Tabella base',
  parameters: {
    docs: {
      description: {
        story: `Usando il markup di base della tabella, ecco come appaiono le tabelle che utilizzano la classe \`.table\` in Bootstrap Italia. Tutti gli stili di tabella sono ereditari, il che significa che tutte le tabelle annidate avranno lo stesso stile della tabella genitrice.`,
      },
    },
  },
};

export const TabellaResponsive: Story = {
  render: () => html`${responsiveTable}`,
  name: 'Tabella responsive',
  parameters: {
    docs: {
      description: {
        story: `Le tabelle responsive consentono di scorrere le tabelle orizzontalmente con facilità. Usa \`.table-responsive\` per tabelle con scorrimento orizzontale attraverso ogni breakpoint.`,
      },
    },
  },
};

export const TabellaResponsiveSm: Story = {
  render: () => html`${responsiveSmTable}`,
  name: 'Tabella responsive SM',
  parameters: {
    docs: {
      description: {
        story: `Usa \`.table-responsive-sm\` per creare tabelle responsive fino al breakpoint SM (576px).`,
      },
    },
  },
};

export const TabellaResponsiveMd: Story = {
  render: () => html`${responsiveMdTable}`,
  name: 'Tabella responsive MD',
  parameters: {
    docs: {
      description: {
        story: `Usa \`.table-responsive-md\` per creare tabelle responsive fino al breakpoint MD (768px).`,
      },
    },
  },
};

export const TabellaResponsiveLg: Story = {
  render: () => html`${responsiveLgTable}`,
  name: 'Tabella responsive LG',
  parameters: {
    docs: {
      description: {
        story: `Usa \`.table-responsive-lg\` per creare tabelle responsive fino al breakpoint LG (992px).`,
      },
    },
  },
};

export const TabellaResponsiveXl: Story = {
  render: () => html`${responsiveXlTable}`,
  name: 'Tabella responsive XL',
  parameters: {
    docs: {
      description: {
        story: `Usa \`.table-responsive-xl\` per creare tabelle responsive fino al breakpoint XL (1200px).`,
      },
    },
  },
};

export const TabellaResponsiveXxl: Story = {
  render: () => html`${responsiveXxlTable}`,
  name: 'Tabella responsive XXL',
  parameters: {
    docs: {
      description: {
        story: `Usa \`.table-responsive-xxl\` per creare tabelle responsive fino al breakpoint XXL (1400px).`,
      },
    },
  },
};

export const TabelleColorate: Story = {
  render: () => html`${coloredTables}`,
  name: 'Tabelle colorate',
  parameters: {
    docs: {
      description: {
        story: `Utilizza le classi contestuali per colorare l'intera tabella.`,
      },
    },
  },
};

export const RigheColorate: Story = {
  render: () => html`${coloredRows}`,
  name: 'Righe colorate',
  parameters: {
    docs: {
      description: {
        story: `Utilizza le classi contestuali per colorare singole righe della tabella.`,
      },
    },
  },
};

export const CelleColorate: Story = {
  render: () => html`${coloredCells}`,
  name: 'Celle colorate',
  parameters: {
    docs: {
      description: {
        story: `Utilizza le classi contestuali per colorare singole celle della tabella.`,
      },
    },
  },
};

export const TabellaStriata: Story = {
  render: () => html`${stripedTable}`,
  name: 'Tabella striata',
  parameters: {
    docs: {
      description: {
        story: `Usa \`.table-striped\` per aggiungere delle striature zebrate ad ogni riga della tabella contenute in \`<tbody>\`.`,
      },
    },
  },
};

export const TabellaStriataDark: Story = {
  render: () => html`${stripedDarkTable}`,
  name: 'Tabella striata dark',
  parameters: {
    docs: {
      description: {
        story: `Le classi di stile sono applicabili anche alle varianti colorate, come la variante dark.`,
      },
    },
  },
};

export const TabellaHover: Story = {
  render: () => html`${hoverTable}`,
  name: 'Tabella con hover',
  parameters: {
    docs: {
      description: {
        story: `Aggiungi \`.table-hover\` per abilitare lo stato hover sulle righe della tabella contenute in \`<tbody>\`.`,
      },
    },
  },
};

export const TabellaHoverStriata: Story = {
  render: () => html`${hoverStripedTable}`,
  name: 'Tabella hover e striata',
  parameters: {
    docs: {
      description: {
        story: `Le tabelle con hover possono essere combinate con la variante striata.`,
      },
    },
  },
};

export const TabellaAttiva: Story = {
  render: () => html`${activeTable}`,
  name: 'Tabella attiva',
  parameters: {
    docs: {
      description: {
        story: `Evidenzia una riga o cella della tabella aggiungendo la classe \`.table-active\`.`,
      },
    },
  },
};

export const TabellaBordata: Story = {
  render: () => html`${borderedTable}`,
  name: 'Tabella con bordi',
  parameters: {
    docs: {
      description: {
        story: `Aggiungi \`.table-bordered\` per avere i bordi a tutti i lati della tabella e su tutte le celle.`,
      },
    },
  },
};

export const TabellaBordataPrimary: Story = {
  render: () => html`${borderedPrimaryTable}`,
  name: 'Tabella con bordi colorati',
  parameters: {
    docs: {
      description: {
        story: `Le utility di colorazione dei bordi possono essere utilizzate per cambiarne i colori.`,
      },
    },
  },
};

export const TabellaSenzaBordi: Story = {
  render: () => html`${borderlessTable}`,
  name: 'Tabella senza bordi',
  parameters: {
    docs: {
      description: {
        story: `Aggiungi la classe \`.table-borderless\` per una tabella senza bordi.`,
      },
    },
  },
};

export const TabellaSenzaBordiDark: Story = {
  render: () => html`${borderlessDarkTable}`,
  name: 'Tabella senza bordi dark',
  parameters: {
    docs: {
      description: {
        story: `La classe \`.table-borderless\` può essere utilizzata anche con varianti colorate.`,
      },
    },
  },
};

export const TabellaCompatta: Story = {
  render: () => html`${smallTable}`,
  name: 'Tabella compatta',
  parameters: {
    docs: {
      description: {
        story: `Aggiungi \`.table-sm\` per rendere le tabelle più compatte dimezzando il cell padding.`,
      },
    },
  },
};

export const AllineamentoVerticale: Story = {
  render: () => html`${verticalAlignmentTable}`,
  name: 'Allineamento verticale',
  parameters: {
    docs: {
      description: {
        story: `Le celle contenute nel \`<thead>\` sono sempre allineate verticalmente al bottom. Le celle del \`<tbody>\` ereditano l'allineamento da \`<table>\` e sono allineate al top per default. Utilizza le classi di allineamento verticale per riallineare dove necessario.`,
      },
    },
  },
};

export const TabellaAnnidamento: Story = {
  render: () => html`${nestingTable}`,
  name: 'Annidamento',
  parameters: {
    docs: {
      description: {
        story: `Gli stili di bordi, gli stili attivi e le varianti non sono ereditati dalle tabelle annidate.`,
      },
    },
  },
};

export const IntestazioneLight: Story = {
  render: () => html`${theadLightTable}`,
  name: 'Intestazione light',
  parameters: {
    docs: {
      description: {
        story: `Come per le tabelle, utilizza le classi varianti come \`.table-light\` per modificare l'aspetto di \`<thead>\`.`,
      },
    },
  },
};

export const IntestazioneDark: Story = {
  render: () => html`${theadDarkTable}`,
  name: 'Intestazione dark',
  parameters: {
    docs: {
      description: {
        story: `Utilizza \`.table-dark\` per modificare l'aspetto di \`<thead>\` con uno stile scuro.`,
      },
    },
  },
};

export const TabellaFooter: Story = {
  render: () => html`${footerTable}`,
  name: 'Footer',
  parameters: {
    docs: {
      description: {
        story: `Le tabelle possono avere un footer utilizzando l'elemento \`<tfoot>\`.`,
      },
    },
  },
};

export const TabellaCaption: Story = {
  render: () => html`${captionTable}`,
  name: 'Caption',
  parameters: {
    docs: {
      description: {
        story: `Un \`<caption>\` funziona come un'intestazione per una tabella. Aiuta gli utenti con screen reader a trovare una tabella e capire di cosa si tratta e decidere se vogliono leggerla.`,
      },
    },
  },
};

export const TabellaCaptionTop: Story = {
  render: () => html`${captionTopTable}`,
  name: 'Caption top',
  parameters: {
    docs: {
      description: {
        story: `Per renderizzare la \`<caption>\` in cima alla tabella utilizza la classe \`.caption-top\`.`,
      },
    },
  },
};
