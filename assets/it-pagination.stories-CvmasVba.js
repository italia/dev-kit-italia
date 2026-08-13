import{b as n,o as u}from"./iframe-Ug63oIzY.js";const y=["start","center","end"];var v=Object.freeze,x=Object.defineProperty,P=(a,i)=>v(x(a,"raw",{value:v(a.slice())})),f,b;const S=a=>n`
  <it-pagination-item page="${a.page}" ?disabled="${a.disabled}">
    <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>${a.label}</a>
  </it-pagination-item>
`,C=(a,i=[])=>n`
  <it-pagination
    total="${u(a.total||void 0)}"
    value="${u(a.value)}"
    align="${u(a.align)}"
    ?disable-responsive="${u(a.disableResponsive)}"
  >
    <a href="#" slot="prev">
      <it-icon name="it-chevron-left"></it-icon>
      <span class="visually-hidden">Pagina precedente</span>
    </a>
    ${i.map(k=>S(k))}
    <a href="#" slot="next">
      <it-icon name="it-chevron-right"></it-icon>
      <span class="visually-hidden">Pagina successiva</span>
    </a>
  </it-pagination>
`,T=[{page:"1",label:"1"},{page:"2",label:"2"},{page:"3",label:"3"},{page:"4",label:"4"},{page:"5",label:"5"}],N={title:"Componenti/Pagination",tags:["a11y-ok","web-component"],decorators:[(a,i)=>i.parameters.overrideMetaWrapper?a():n`
        <div style="padding-block: 2rem;margin:auto;display:flex;">
          <!-- START COMPONENT -->
          ${a()}
          <!-- END COMPONENT -->
        </div>
      `],parameters:{layout:"fullscreen",docs:{source:{excludeDecorators:!0}},a11y:{config:{rules:[{id:"list",enabled:!1},{id:"listitem",enabled:!1}]}}},args:{value:"1",total:"5",align:"center",disableResponsive:!1,simpleMode:!1,visiblePages:5,itAriaLabel:"Paginazione"},argTypes:{value:{control:"text",description:"Pagina corrente selezionata",table:{defaultValue:{summary:"1"}}},total:{control:!1,description:"Numero totale di pagine, se non specificato viene calcolato in base agli elementi `it-pagination-item` presenti. Utile per indicare un numero di pagine diverso rispetto agli elementi effettivamente presenti (es. con caricamento dinamico) e in modalità simple-mode",table:{defaultValue:{summary:void 0}}},align:{control:"select",description:"Allineamento della paginazione",options:y,table:{defaultValue:{summary:"start"}}},disableResponsive:{name:"disable-responsive",control:"boolean",description:"Disabilita responsive mode (nasconde pagine non correnti su mobile)",table:{defaultValue:{summary:"false"}}},simpleMode:{name:"simple-mode",control:!1,description:"Abilita simple mode (mostra solo pagina corrente / totale, ottimizzato per mobile). Vai alla storia dedicata per l'esempio.",table:{defaultValue:{summary:"false"}}},visiblePages:{name:"visible-pages",control:"number",description:"Numero di pagine visibili quando il totale (total) supera questo valore. Verranno mostrati i puntini '...' per indicare la presenza di ulteriori pagine.",table:{defaultValue:{summary:"5"}}},itAriaLabel:{name:"it-aria-label",control:"text",description:"Imposta l'attributo `aria-label` per il componente, utile per migliorare l'accessibilità.",table:{defaultValue:{summary:"Paginazione"}}}}},e={tags:["!dev"],render:a=>C(a,T)},t={name:"Con pulsanti avanti e indietro",render:()=>n`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  `},s={name:"Con link testuali",render:()=>n`
    <it-pagination value="3">
      <a href="#" slot="prev">Precedente</a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">Successiva</a>
    </it-pagination>
  `},o={name:"Allineamento a sinistra",render:()=>n`
    <it-pagination value="2" align="start">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `},p={name:"Allineamento centrato",render:()=>n`
    <it-pagination value="2" align="center">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `},l={name:"Allineamento a destra",decorators:[a=>n` <div style="width:100%">${a()}</div> `],render:()=>n`
    <it-pagination value="2" align="end">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `},r={name:"Paginazione responsive",render:()=>n`
    <it-pagination value="1">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina</span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `},g={name:"Con numero totale di pagine",render:()=>n`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `},c={name:"Con selettore pagine",render:()=>n(f||(f=P([`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>

      <div slot="page-changer">
        <label for="page-size" class="visually-hidden">Elementi per pagina:</label>
        <select id="page-size" class="form-select" style="padding-right: 1.5rem;">
          <option value="10">10/pagina</option>
          <option value="20" selected>20/pagina</option>
          <option value="50">50/pagina</option>
          <option value="100">100/pagina</option>
        </select>
      </div>
    </it-pagination>

    <script>
      const pageSizeSelect = document.getElementById('page-size');
      pageSizeSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        console.log('PageChanger: Elementi per pagina selezionati:', selectedValue);
      });
    <\/script>
  `])))},m={name:"Con salto a pagina specifica",render:()=>n(b||(b=P([`
    <it-pagination id="jump" value="5" total="10">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>
      <it-pagination-item page="6">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>6</a>
      </it-pagination-item>
      <it-pagination-item page="7">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>7</a>
      </it-pagination-item>
      <it-pagination-item page="8">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>8</a>
      </it-pagination-item>
      <it-pagination-item page="9">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>9</a>
      </it-pagination-item>
      <it-pagination-item page="10">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>10</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>

      <div slot="jump-to-page" style="display: flex; align-items: center; gap: 0.5rem;">
        <it-input
          id="jumper-example"
          type="number"
          name="jumper-example"
          placeholder="Vai a ..."
          label-hidden
          style="width: 80px;"
        >
          <span slot="label">Vai a ...</span>
        </it-input>
      </div>
    </it-pagination>
    <script>
      const jumperInput = document.getElementById('jumper-example');
      const pagination = document.getElementById('jump');
      const pTot = parseInt(pagination.getAttribute('total'));

      jumperInput.addEventListener('it-change', () => {
        const pageNumber = jumperInput.value;
        if (pageNumber < 1 || pageNumber > pTot) {
          console.log('JumpToPage: Numero di pagina non valido', pageNumber);
          return;
        }
        console.log('JumpToPage: Vai a pagina', pageNumber);
        pagination.value = pageNumber.toString();
      });
    <\/script>
  `])))},d={args:{value:"3",total:"10"},render:()=>n`
    <it-pagination simple-mode value="1" total="5">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  `},h={args:{value:"25",total:"50",visiblePages:5},render:()=>n`
    <it-pagination value="25" total="50" visible-pages="5" disable-responsive>
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      ${Array.from({length:50},(a,i)=>i+1).map(a=>n`
          <it-pagination-item page="${a}">
            <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>${a}</a>
          </it-pagination-item>
        `)}

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  render: args => renderComponent(args, defaultItems)
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Con pulsanti avanti e indietro',
  render: () => html\`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  \`
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Con link testuali',
  render: () => html\`
    <it-pagination value="3">
      <a href="#" slot="prev">Precedente</a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">Successiva</a>
    </it-pagination>
  \`
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Allineamento a sinistra',
  render: () => html\`
    <it-pagination value="2" align="start">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  \`
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Allineamento centrato',
  render: () => html\`
    <it-pagination value="2" align="center">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  \`
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Allineamento a destra',
  decorators: [story => html\` <div style="width:100%">\${story()}</div> \`],
  render: () => html\`
    <it-pagination value="2" align="end">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  \`
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Paginazione responsive',
  render: () => html\`
    <it-pagination value="1">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina</span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  \`
}`,...r.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Con numero totale di pagine',
  render: () => html\`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  \`
}`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Con selettore pagine',
  render: () => html\`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>

      <div slot="page-changer">
        <label for="page-size" class="visually-hidden">Elementi per pagina:</label>
        <select id="page-size" class="form-select" style="padding-right: 1.5rem;">
          <option value="10">10/pagina</option>
          <option value="20" selected>20/pagina</option>
          <option value="50">50/pagina</option>
          <option value="100">100/pagina</option>
        </select>
      </div>
    </it-pagination>

    <script>
      const pageSizeSelect = document.getElementById('page-size');
      pageSizeSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        console.log('PageChanger: Elementi per pagina selezionati:', selectedValue);
      });
    <\/script>
  \`
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Con salto a pagina specifica',
  render: () => html\`
    <it-pagination id="jump" value="5" total="10">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>
      <it-pagination-item page="6">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>6</a>
      </it-pagination-item>
      <it-pagination-item page="7">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>7</a>
      </it-pagination-item>
      <it-pagination-item page="8">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>8</a>
      </it-pagination-item>
      <it-pagination-item page="9">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>9</a>
      </it-pagination-item>
      <it-pagination-item page="10">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>10</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>

      <div slot="jump-to-page" style="display: flex; align-items: center; gap: 0.5rem;">
        <it-input
          id="jumper-example"
          type="number"
          name="jumper-example"
          placeholder="Vai a ..."
          label-hidden
          style="width: 80px;"
        >
          <span slot="label">Vai a ...</span>
        </it-input>
      </div>
    </it-pagination>
    <script>
      const jumperInput = document.getElementById('jumper-example');
      const pagination = document.getElementById('jump');
      const pTot = parseInt(pagination.getAttribute('total'));

      jumperInput.addEventListener('it-change', () => {
        const pageNumber = jumperInput.value;
        if (pageNumber < 1 || pageNumber > pTot) {
          console.log('JumpToPage: Numero di pagina non valido', pageNumber);
          return;
        }
        console.log('JumpToPage: Vai a pagina', pageNumber);
        pagination.value = pageNumber.toString();
      });
    <\/script>
  \`
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: '3',
    total: '10'
  },
  render: () => html\`
    <it-pagination simple-mode value="1" total="5">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  \`
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: '25',
    total: '50',
    visiblePages: 5
  },
  render: () => html\`
    <it-pagination value="25" total="50" visible-pages="5" disable-responsive>
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      \${Array.from({
    length: 50
  }, (_, i) => i + 1).map(page => html\`
          <it-pagination-item page="\${page}">
            <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>\${page}</a>
          </it-pagination-item>
        \`)}

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  \`
}`,...h.parameters?.docs?.source}}};const z=["EsempioInterattivo","ConNavigazione","ConNavigazioneTestuale","AllineamentoStart","AllineamentoCenter","AllineamentoEnd","Responsive","ConTotale","ConPageChanger","ConJumpToPage","SimpleMode","MoreMode"],E=Object.freeze(Object.defineProperty({__proto__:null,AllineamentoCenter:p,AllineamentoEnd:l,AllineamentoStart:o,ConJumpToPage:m,ConNavigazione:t,ConNavigazioneTestuale:s,ConPageChanger:c,ConTotale:g,EsempioInterattivo:e,MoreMode:h,Responsive:r,SimpleMode:d,__namedExportsOrder:z,default:N},Symbol.toStringTag,{value:"Module"}));export{o as A,t as C,e as E,h as M,E as P,r as R,d as S,s as a,g as b,c,m as d,p as e,l as f};
