import{j as e,M as s}from"./blocks-CT7VCudE.js";import{useMDXComponents as t}from"./index-JxopJXbk.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DqPvw_k1.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Accessibilità"}),`
`,e.jsx(i.h1,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Questa guida estende il ",e.jsx(i.a,{href:"https://designers.italia.it/design-system/fondamenti/accessibilita/",rel:"nofollow",children:"fondamento Accessibilità del design system .italia"})," documentando come si comportano alcuni dei principali strumenti di verifica automatica su pagine realizzate con i web component Dev Kit Italia. In Dev Kit Italia coesistono componenti implementati come web component e altri come documentazione HTML: i primi richiedono accortezze specifiche nella verifica dell'accessibilità, che è appunto l'oggetto di questa guida."]}),`
`,e.jsxs(i.p,{children:["Dev Kit Italia adotta per i web component un ",e.jsx(i.a,{href:"/?path=/docs/documentazione-tecnica--documentazione",children:"approccio HTML-first con slot"}),": il contenuto significativo vive nel light DOM, il componente lo proietta nel shadow DOM e l'accessibility tree del browser lo espone alle tecnologie assistive. Alcuni strumenti di verifica attraversano correttamente il shadow DOM, altri lo ignorano, altri producono falsi positivi."]}),`
`,e.jsxs(i.p,{children:["I tool automatici rilevano solo una parte degli errori di accessibilità: molti criteri WCAG richiedono valutazione umana. I controlli manuali sono sempre necessari e per flussi critici è indispensabile coinvolgere esperti di accessibilità e, ove necessario, utenti reali. Vedi la sezione ",e.jsx(i.a,{href:"#verifiche-manuali",children:"Verifiche manuali"})," per le indicazioni specifiche sui web component."]}),`
`,e.jsxs(i.p,{children:["I contenuti che seguono fanno riferimento ai tool testati al momento della stesura (axe-core v4.11.1, Siteimprove v2.0, ARC Toolkit v5.7.10, WAVE 3.2.7.1, MAUVE++ 4.0.2) su questi componenti: Accordion, Breadcrumbs, Button, Callout, Card, Checkbox, Chip, Dropdown, Hero, Input, Modal, Radio button, Select. La ",e.jsx(i.a,{href:"https://italia.github.io/design-jekyll-devkit-theme/test-a11y/",rel:"nofollow",children:"pagina di test"})," e i contenuti di questa guida potranno essere integrate nel tempo con nuovi componenti, casi di test e tool aggiuntivi."]}),`
`,e.jsxs(i.p,{children:["Feedback e contributi: ",e.jsx(i.a,{href:"https://github.com/italia/dev-kit-italia/issues",rel:"nofollow",children:"apri una segnalazione"})," su ",e.jsx(i.code,{children:"italia/dev-kit-italia"}),"."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"tool-consigliati",children:"Tool consigliati"}),`
`,e.jsx(i.p,{children:"I principali tool di verifica automatica hanno comportamenti molto diversi tra loro su web component che usano shadow DOM come quelli di Dev Kit Italia. La tabella seguente riassume alcuni dei comportamenti osservati sulla pagina di test."}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Tool"}),e.jsx("th",{children:"Heading/label vuoti"}),e.jsxs("th",{children:["Contrasto di colori personalizzati con ",e.jsx("code",{children:"::part()"})]}),e.jsx("th",{children:"Gerarchia heading"}),e.jsx("th",{children:"Note"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"axe-core"})}),e.jsx("td",{children:'Sì, con "best practices" attive'}),e.jsx("td",{children:"Sì"}),e.jsx("td",{children:"Sì"}),e.jsx("td",{children:"Tool consigliato"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"pa11y con axe runner"})}),e.jsx("td",{children:"Sì"}),e.jsx("td",{children:"Sì"}),e.jsx("td",{children:"Sì"}),e.jsx("td",{children:"Tool CLI consigliato"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"Siteimprove"})}),e.jsx("td",{children:"Sì"}),e.jsxs("td",{children:["No (punto cieco su ",e.jsx("code",{children:"::part()"}),")"]}),e.jsx("td",{children:"Sì"}),e.jsx("td",{children:"Accurato su heading e struttura semantica"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"WAVE"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Parziale"}),e.jsx("td",{children:"No, falsi positivi"}),e.jsx("td",{children:"Utile solo per contrasto light DOM"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"ARC Toolkit"})}),e.jsx("td",{children:"No, falsi positivi"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"No, falsi positivi"}),e.jsx("td",{children:"Vedi sezione falsi positivi"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"MAUVE++"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Ignora il shadow DOM"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("strong",{children:"pa11y con default htmlcs runner"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Ignora il shadow DOM"})]})]})]}),`
`,e.jsxs(i.p,{children:["Tra i tool testati, ",e.jsx(i.strong,{children:"axe-core"})," è quello più affidabile, classificando correttamente sia i casi implementati bene sia gli errori reali. Per una copertura più ampia durante lo sviluppo, combinarlo con ",e.jsx(i.strong,{children:"pa11y con axe runner"})," e/o ",e.jsx(i.strong,{children:"Siteimprove"}),"."]}),`
`,e.jsx(i.h3,{id:"per-cli-e-cicd",children:"Per CLI e CI/CD"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-bash",children:`npx pa11y <url> --standard WCAG2AA --runner axe
`})}),`
`,e.jsxs(i.p,{children:["Esempio di configurazione ",e.jsx(i.code,{children:".pa11yci"}),":"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-json",children:`{
  "defaults": {
    "runner": "axe",
    "standard": "WCAG2AA",
    "ignore": []
  },
  "urls": [
    "https://example-pa-site.gov.it/",
    "https://example-pa-site.gov.it/contatti"
  ]
}
`})}),`
`,e.jsxs(i.p,{children:["Aggiungere all'ignore list gli eventuali falsi positivi se documentati, ad esempio ",e.jsx(i.code,{children:"list"})," per i breadcrumbs. Verificare periodicamente caso per caso che le regole ignorate siano effettivamente falsi positivi."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"slot-obbligatori",children:"Slot obbligatori"}),`
`,e.jsxs(i.p,{children:["Quando uno slot che alimenta un elemento semantico non è popolato, il componente genera un nodo accessibile con nome vuoto nell'accessibility tree — un heading ",e.jsx(i.code,{children:'""'})," o una label ",e.jsx(i.code,{children:'""'}),". Il kit segnala il problema nella console del browser (esempio di messaggio: ",e.jsx(i.code,{children:"[it-card] no title slot content found"}),"). Questi warning di sviluppo vanno trattati come errori in CI."]}),`
`,e.jsx(i.p,{children:"Esempi con slot obbligatori non popolati:"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Componente"}),e.jsx("th",{children:"Slot obbligatorio"}),e.jsx("th",{children:"Elemento generato"}),e.jsx("th",{children:"Conseguenza se vuoto"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<it-card>"})}),e.jsx("td",{children:e.jsx("code",{children:"title"})}),e.jsx("td",{children:e.jsx("code",{children:"<h3>"})}),e.jsxs("td",{children:["Heading con ",e.jsx("code",{children:'Name: ""'})]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<it-callout>"})}),e.jsx("td",{children:e.jsx("code",{children:"title"})}),e.jsxs("td",{children:[e.jsx("code",{children:"<h2>"})," dentro ",e.jsx("code",{children:"<div>"})]}),e.jsxs("td",{children:[e.jsx("code",{children:"aria-labelledby"})," con riferimento rotto"]})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<it-input>"})}),e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:e.jsx("code",{children:"<label>"})}),e.jsx("td",{children:"Label vuota"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<it-select>"})}),e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:e.jsx("code",{children:"<label>"})}),e.jsx("td",{children:"Label vuota"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<it-checkbox>"})}),e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:e.jsx("code",{children:"<label>"})}),e.jsx("td",{children:"Label vuota"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<it-radio>"})}),e.jsx("td",{children:e.jsx("code",{children:"label"})}),e.jsx("td",{children:"radio"}),e.jsx("td",{children:"Controllo senza nome accessibile"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"<it-modal>"})}),e.jsx("td",{children:e.jsx("code",{children:"header"})}),e.jsx("td",{children:e.jsx("code",{children:"<section>"})}),e.jsxs("td",{children:["Section senza ",e.jsx("code",{children:"aria-label"})," né ",e.jsx("code",{children:"aria-labelledby"})]})]})]})]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"falsi-positivi-noti",children:"Falsi positivi noti"}),`
`,e.jsx(i.p,{children:"Alcuni tool segnalano errori su componenti correttamente implementati. I casi documentati di seguito non corrispondono a problemi reali e non richiedono azioni correttive. La lista non è esaustiva: altri falsi positivi potrebbero emergere con tool, versioni o componenti non testati."}),`
`,e.jsx(i.h3,{id:"arc-toolkit",children:"ARC Toolkit"}),`
`,e.jsxs(i.p,{children:["ARC Toolkit entra nel shadow DOM ma non risolve correttamente la proiezione degli slot. Con componenti ",e.jsx(i.strong,{children:"correttamente popolati"})," segnala molti falsi positivi come:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-card>"})," con slot ",e.jsx(i.code,{children:"title"}),': "heading vuoto" (WCAG 1.3.1)']}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-callout>"})," con slot ",e.jsx(i.code,{children:"title"}),': "heading vuoto" (WCAG 1.3.1)']}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-input>"})," con slot ",e.jsx(i.code,{children:"label"}),": errore label (WCAG 1.3.1)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-button>"})," con testo: errore button (WCAG 4.1.2)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-select>"})," con slot ",e.jsx(i.code,{children:"label"}),": errore label (WCAG 1.3.1)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"<it-checkbox>"})," con slot ",e.jsx(i.code,{children:"label"}),": errore label (WCAG 1.3.1)"]}),`
`]}),`
`,e.jsx(i.p,{children:"Nella configurazione attuale produce quindi un numero elevato di falsi positivi, rendendo difficile distinguere errori reali. Non consigliato come tool primario."}),`
`,e.jsx(i.h3,{id:"axe-core-e-pa11y-con-axe-runner-breadcrumbs",children:"axe-core e pa11y con axe runner: breadcrumbs"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"list"})," e ",e.jsx(i.code,{children:"listitem"})," segnalati su ",e.jsx(i.code,{children:"<it-breadcrumbs>"}),". L'accessibility tree è corretto. Falso positivo documentato nella storia del componente al ",e.jsx(i.a,{href:"/?path=/docs/componenti-breadcrumbs--documentazione#accessibilit%C3%A0",children:"paragrafo Accessibilità"}),"."]}),`
`,e.jsxs(i.h3,{id:"it-carousel-live-region-aria-live-e-comportamento-nei-screen-reader",children:[e.jsx(i.code,{children:"it-carousel"}),": live region (",e.jsx(i.code,{children:"aria-live"}),") e comportamento nei screen reader"]}),`
`,e.jsxs(i.p,{children:["Il supporto all'",e.jsx(i.code,{children:"aria-live"})," region è incostante tra combinazioni di screen reader, sistemi operativi e browser (es. VoiceOver + Chrome/Firefox su macOS non funziona). Non costituisce una violazione WCAG: l'attributo è opzionale per la specifica W3C e il feedback primario è garantito dal pattern ",e.jsx(i.code,{children:'role="tablist"'})," del componente. Dettagli e tabella di compatibilità nella storia del componente al ",e.jsx(i.a,{href:"/?path=/docs/componenti-carousel--documentazione#accessibilit%C3%A0",children:"paragrafo Accessibilità"}),"."]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"limiti-strutturali",children:"Limiti strutturali"}),`
`,e.jsx(i.h3,{id:"aria-cross-shadow-root",children:"ARIA cross-shadow-root"}),`
`,e.jsxs(i.p,{children:["Quando si usano gli attributi ",e.jsx(i.code,{children:"it-aria-describedby"})," o ",e.jsx(i.code,{children:"it-aria-labelledby"})," su ",e.jsx(i.code,{children:"<it-input>"}),", questi vengono applicati all'elemento ",e.jsx(i.code,{children:"<input>"})," generato nel shadow DOM. Tuttavia, se l'ID referenziato appartiene a un elemento nel light DOM esterno allo shadow DOM del componente, la descrizione o la label ",e.jsx(i.strong,{children:"non viene annunciata dai lettori di schermo"}),". È un limite della specifica W3C: questi attributi aria fanno sempre riferimento a ID nello stesso scope DOM."]}),`
`,e.jsxs(i.p,{children:["Per ",e.jsx(i.code,{children:"<it-input>"})," Dev Kit Italia mette a disposizione attributi dedicati che generano automaticamente tutti gli attributi necessari dentro lo shadow DOM:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"support-text"}),": testo di supporto interno al componente"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"validity-message"}),": messaggio di validazione"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"custom-validation"}),": validazione custom"]}),`
`]}),`
`,e.jsx(i.h3,{id:"tool-senza-supporto-shadow-dom",children:"Tool senza supporto shadow DOM"}),`
`,e.jsxs(i.p,{children:["Strumenti basati su serializzazione DOM standard ",e.jsx(i.strong,{children:"non entrano nel shadow DOM"}),":"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Non percepiscono elementi semantici (heading, label, button) e ruoli ARIA generati nel shadow DOM"}),`
`,e.jsx(i.li,{children:"Non segnalano errori né componenti implementati correttamente"}),`
`,e.jsxs(i.li,{children:["Segnalano solo elementi nel light DOM (slot con ",e.jsx(i.code,{children:"style"})," inline, elementi HTML della pagina)"]}),`
`]}),`
`,e.jsx(i.p,{children:"Una pagina che usa web component Dev Kit Italia è quindi non verificabile con questo tipo di strumenti."}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"verifiche-manuali",children:"Verifiche manuali"}),`
`,e.jsx(i.p,{children:"Le verifiche automatiche non sono sufficienti, molti criteri WCAG richiedono valutazione umana e alcuni tool hanno i limiti specifici sul shadow DOM documentati in questa pagina. Semantica degli elementi, ingrandimento, navigazione da tastiera e lettori di schermo vanno sempre verificati manualmente."}),`
`,e.jsx(i.p,{children:e.jsx(i.strong,{children:"Combinazioni consigliate:"})}),`
`,e.jsxs(i.p,{children:["Il ",e.jsx(i.a,{href:"https://designers.italia.it/design-system/fondamenti/accessibilita/",rel:"nofollow",children:"fondamento Accessibilità"})," indica ",e.jsx(i.strong,{children:"Windows + Chrome + JAWS"})," come combinazione di riferimento. Data la relativa novità della tecnologia web component con shadow DOM, verificare su più combinazioni per rilevare comportamenti difformi tra browser e lettori di schermo. Un setup minimo:"]}),`
`,e.jsx(i.p,{children:"Desktop:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Windows + Chrome o Edge + JAWS o NVDA"}),`
`,e.jsx(i.li,{children:"macOS + Chrome o Safari + VoiceOver"}),`
`]}),`
`,e.jsx(i.p,{children:"Mobile:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"iOS + Safari + VoiceOver"}),`
`,e.jsx(i.li,{children:"Android + Chrome + TalkBack"}),`
`]}),`
`,e.jsx(i.p,{children:e.jsxs(i.strong,{children:["In aggiunta al ",e.jsx(i.a,{href:"https://designers.italia.it/design-system/fondamenti/accessibilita/",rel:"nofollow",children:"workflow descritto nel fondamento"}),", per i web component:"]})}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Console browser"}),": durante lo sviluppo, Dev Kit segnala gli slot vuoti obbligatori con warning specifici"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Tab Accessibility di Chrome DevTools"}),": selezionare l'elemento semantico nel shadow DOM del componente (es. ",e.jsx(i.code,{children:"<h3>"})," dentro ",e.jsx(i.code,{children:"<it-card>"}),"). Verificare ",e.jsx(i.code,{children:"Name"}),", ",e.jsx(i.code,{children:"Role"})," e attributi ARIA"]}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"verifiche-automatiche-in-storybook",children:"Verifiche automatiche in Storybook"}),`
`,e.jsx(i.p,{children:"Storybook integra strumenti di verifica automatica dell'accessibilità per le singole varianti dei componenti."}),`
`,e.jsx(i.h3,{id:"plugin-axe",children:"Plugin axe"}),`
`,e.jsx(i.p,{children:'I risultati delle verifiche del plugin axe sono disponibili nel tab "Accessibility" della storia.'}),`
`,e.jsx(i.h3,{id:"webtest-runner-con-a11ysnapshot",children:"@web/test-runner con a11ySnapshot"}),`
`,e.jsx(i.p,{children:"Complementare al plugin axe, permetterà di verificare programmaticamente:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Accessibility tree effettivo"}),`
`,e.jsx(i.li,{children:"Navigazione da tastiera con eventi nativi"}),`
`,e.jsx(i.li,{children:"Stati dinamici post-interazione"}),`
`]}),`
`,e.jsx(i.hr,{}),`
`,e.jsx(i.h2,{id:"riferimenti",children:"Riferimenti"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/fondamenti/accessibilita/",rel:"nofollow",children:"Fondamento Accessibilità di design system .italia"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/dequelabs/axe-core",rel:"nofollow",children:"axe-core"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://pa11y.org/",rel:"nofollow",children:"pa11y"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://open-wc.org/docs/testing/testing-package/",rel:"nofollow",children:"Open Web Components — testing"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"https://github.com/leobalter/cross-root-aria-delegation",rel:"nofollow",children:"Cross-root ARIA Delegation — proposta W3C"})}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://nolanlawson.com/2022/11/28/shadow-dom-and-accessibility-the-trouble-with-aria/",rel:"nofollow",children:"Shadow DOM and accessibility: the trouble with ARIA"})," — Nolan Lawson"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://alice.pages.igalia.com/blog/how-shadow-dom-and-accessibility-are-in-conflict/",rel:"nofollow",children:"How Shadow DOM and accessibility are in conflict"})," — Alice Boxhall (Igalia)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://dev.to/westbrook/testing-accessibility-with-shadow-roots-55cm",rel:"nofollow",children:"Testing Accessibility with Shadow Roots"})," — Westbrook Johnson (Adobe Spectrum)"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"https://open-wc.org/blog/testing-web-components-with-web-test-runner/",rel:"nofollow",children:"Testing Web Components with @web/test-runner"})," — Open Web Components"]}),`
`]})]})}function d(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default};
