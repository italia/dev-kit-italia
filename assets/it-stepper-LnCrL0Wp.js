import{j as e,M as t,C as n,a as r}from"./blocks-CRFIrLVd.js";import{useMDXComponents as l}from"./index--O4jdOk5.js";import{S as c,E as a,a as d,T as p,b as h,N as m,P as u,c as x,d as j,C as v,F as f,e as g,f as b,g as z}from"./it-stepper.stories-BePUwHgN.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-CPP02t7X.js";function s(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(i.h1,{id:"stepper",children:"Stepper"}),`
`,e.jsx("description",{children:"Elementi di navigazione che mostrano l'avanzamento dell'utente all'interno di una procedura complessa e permettono di navigare tra i vari passaggi di interazione"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"it-stepper"}),` mostra lo stato di avanzamento di una procedura composta da più passaggi logici.
Ogni passaggio viene definito con un elemento `,e.jsx(i.code,{children:"it-stepper-step"})," inserito all'interno del componente."]}),`
`,e.jsx(i.p,{children:`Lo stepper è composto da intestazione, area contenuto e navigazione.
Puoi mostrare tutte le aree insieme oppure nasconderne alcune quando devi riprodurre solo l'intestazione, solo l'avanzamento o un flusso con salvataggio e conferma.`}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/steppers/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Stepper"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:[`Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente.
Per vedere come cambia il codice, clicca su `,e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["L'area contenuto utilizza ",e.jsx(i.code,{children:'aria-live="polite"'})," per notificare i lettori di schermo quando cambia lo step attivo."]}),`
`,e.jsxs(i.li,{children:["Il passo attivo espone ",e.jsx(i.code,{children:'aria-current="step"'})," nell'intestazione e nei pallini."]}),`
`,e.jsx(i.li,{children:'I passi confermati includono testo nascosto per screen reader con stato "Confermato".'}),`
`,e.jsx(i.li,{children:'Il passo attivo include testo nascosto con stato "Attivo".'}),`
`,e.jsxs(i.li,{children:["Per la variante ",e.jsx(i.code,{children:"numbers"}),', il testo nascosto include il numero dello step insieme allo stato, ad esempio "Confermato Step 1".']}),`
`,e.jsx(i.li,{children:"Progress bar e pallini usano il totale effettivo dei passi e comunicano lo stato corrente alle tecnologie assistive."}),`
`,e.jsx(i.li,{children:"I pulsanti di navigazione vengono disabilitati quando si raggiunge il primo o l'ultimo passo disponibile."}),`
`,e.jsxs(i.li,{children:["Il pulsante disabilitato tramite ",e.jsx(i.code,{children:"next-disabled"})," espone ",e.jsx(i.code,{children:"aria-disabled"}),", ma non spiega il motivo del blocco: abbinalo a un messaggio visibile, oppure blocca l'avanzamento al click per far comparire i messaggi dei singoli campi, che usano ",e.jsx(i.code,{children:'role="alert"'}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"intestazione",children:"Intestazione"}),`
`,e.jsxs(i.p,{children:["L'intestazione può essere personalizzata tramite l'attributo ",e.jsx(i.code,{children:"header-variant"}),`.
Sono disponibili tre varianti.`]}),`
`,e.jsx(i.h3,{id:"solo-testo",children:"Solo testo"}),`
`,e.jsxs(i.p,{children:["La variante predefinita (",e.jsx(i.code,{children:"text"}),") mostra l'etichetta di ciascun passo e il suo stato."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(i.h3,{id:"testo-e-icone",children:"Testo e icone"}),`
`,e.jsxs(i.p,{children:["La variante ",e.jsx(i.code,{children:"icons"}),` mostra un'icona prima dell'etichetta di ciascun passo.
Per ogni `,e.jsx(i.code,{children:"it-stepper-step"})," puoi specificare il nome dell'icona tramite l'attributo ",e.jsx(i.code,{children:"icon"}),", ad esempio ",e.jsx(i.code,{children:"it-calendar"}),", ",e.jsx(i.code,{children:"it-lock"})," o ",e.jsx(i.code,{children:"it-settings"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"testo-e-numeri",children:"Testo e numeri"}),`
`,e.jsxs(i.p,{children:["La variante ",e.jsx(i.code,{children:"numbers"}),` mostra il numero ordinale del passo all'interno di un cerchio.
I passi confermati mostrano una spunta al posto del numero.`]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h2,{id:"navigazione-degli-step",children:"Navigazione degli step"}),`
`,e.jsxs(i.p,{children:[`La barra di navigazione contiene i pulsanti "Indietro" e "Avanti".
Le etichette possono essere personalizzate tramite gli attributi `,e.jsx(i.code,{children:"prev-label"})," e ",e.jsx(i.code,{children:"next-label"}),"."]}),`
`,e.jsxs(i.p,{children:["Puoi navigare anche via JavaScript tramite i metodi pubblici ",e.jsx(i.code,{children:"next()"})," e ",e.jsx(i.code,{children:"prev()"}),", oppure modificando l'attributo ",e.jsx(i.code,{children:"current"}),`.
Ogni cambio di step emette un evento `,e.jsx(i.code,{children:"it-stepper-change"})," con ",e.jsx(i.code,{children:"detail.step"})," e ",e.jsx(i.code,{children:"detail.prevStep"}),"."]}),`
`,e.jsxs(i.p,{children:[`Quando è originato dal click sul pulsante "Avanti", l'evento è annullabile: `,e.jsx(i.code,{children:"preventDefault()"}),` impedisce il cambio di passo.
Emesso dai metodi `,e.jsx(i.code,{children:"next()"})," e ",e.jsx(i.code,{children:"prev()"})," non è annullabile, e non viene emesso affatto se modifichi direttamente ",e.jsx(i.code,{children:"current"}),`.
Vedi `,e.jsx(i.a,{href:"#validazione-del-form-nello-step",children:"Validazione del form nello step"})," per l'uso più comune."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h3,{id:"progress-bar",children:"Progress bar"}),`
`,e.jsxs(i.p,{children:["Imposta ",e.jsx(i.code,{children:'mobile-progress="bar"'}),` per mostrare una barra di progresso tra i pulsanti di navigazione.
Per impostazione predefinita l'indicatore segue il comportamento Bootstrap Italia ed è visibile solo su mobile.
Per modificare questa impostazione e mostrare l'indicatore su qualsiasi schermo, imposta l'attributo `,e.jsx(i.code,{children:"mobile-progress-on-desktop"}),"."]}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h3,{id:"pallini",children:"Pallini"}),`
`,e.jsxs(i.p,{children:["Imposta ",e.jsx(i.code,{children:'mobile-progress="dots"'}),` per mostrare dei pallini indicatori tra i pulsanti di navigazione.
I pallini completati vengono evidenziati e il pallino corrente espone testo accessibile.`]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"salva",children:"Salva"}),`
`,e.jsxs(i.p,{children:["Per aggiungere un'area di salvataggio sotto la barra di navigazione, usa l'attributo ",e.jsx(i.code,{children:"save-label"}),`.
Quando l'utente clicca sul pulsante di salvataggio, il componente emette l'evento `,e.jsx(i.code,{children:"it-stepper-save"}),"."]}),`
`,e.jsxs(i.p,{children:["Il titolo e la descrizione dell'area possono essere personalizzati tramite ",e.jsx(i.code,{children:"save-title"})," e ",e.jsx(i.code,{children:"save-description"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"conferma",children:"Conferma"}),`
`,e.jsxs(i.p,{children:["Aggiungi l'attributo ",e.jsx(i.code,{children:"show-confirm"}),` per sostituire il pulsante "Avanti" con il pulsante "Conferma".
Quando l'utente clicca sul pulsante, il componente emette l'evento `,e.jsx(i.code,{children:"it-stepper-confirm"}),": il componente non compie altre azioni, quindi cosa accade alla conferma è interamente a carico del consumer."]}),`
`,e.jsxs(i.p,{children:[`L'attributo non viene attivato automaticamente sull'ultimo passo: se vuoi che "Conferma" compaia solo alla fine del flusso, imposta `,e.jsx(i.code,{children:"show-confirm"}),` in base allo step attivo.
Vedi `,e.jsx(i.a,{href:"#validazione-del-form-nello-step",children:"Validazione del form nello step"})," per un esempio completo."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(i.h2,{id:"validazione-del-form-nello-step",children:"Validazione del form nello step"}),`
`,e.jsx(i.p,{children:`Quando un passo contiene un form, puoi impedire che l'utente avanzi finché i campi obbligatori non sono compilati.
Sono disponibili due approcci, utilizzabili anche insieme.`}),`
`,e.jsx(i.p,{children:'Il pulsante "Indietro" non viene mai bloccato: si può sempre tornare al passo precedente da un form non valido.'}),`
`,e.jsxs(i.p,{children:["Negli esempi che seguono ",e.jsx(i.code,{children:"show-confirm"})," viene attivato solo sull'ultimo passo, come descritto in ",e.jsx(i.a,{href:"#conferma",children:"Conferma"}),": lo stepper non riconosce da sé la fine del flusso."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const stepper = document.querySelector('it-stepper');

stepper.addEventListener('it-stepper-change', (e) => {
  const ultimo = stepper.querySelectorAll('it-stepper-step').length - 1;
  stepper.showConfirm = e.detail.step >= ultimo;
});
`})}),`
`,e.jsx(i.h3,{id:"disabilitare-il-pulsante",children:"Disabilitare il pulsante"}),`
`,e.jsxs(i.p,{children:["L'attributo ",e.jsx(i.code,{children:"next-disabled"}),' disabilita il pulsante "Avanti", oppure "Conferma" quando è attivo ',e.jsx(i.code,{children:"show-confirm"}),`: è anche l'unico modo per bloccare la conferma, che non ha un comportamento predefinito da annullare.
Tienilo allineato alla validità del form ascoltando l'evento `,e.jsx(i.code,{children:"it-input"}),", che i componenti di form propagano fino allo stepper."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const stepper = document.querySelector('it-stepper');
const form = stepper.querySelector('form');

// Il form è nel primo passo: solo lì l'avanzamento va bloccato.
const nonValido = (step) => step === 0 && !form.checkValidity();

const aggiornaStato = () => {
  stepper.nextDisabled = nonValido(stepper.current);
};

aggiornaStato();
form.addEventListener('it-input', aggiornaStato);
stepper.addEventListener('it-stepper-change', (e) => {
  stepper.nextDisabled = nonValido(e.detail.step);
});
`})}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(i.h3,{id:"bloccare-lavanzamento-al-click",children:"Bloccare l'avanzamento al click"}),`
`,e.jsxs(i.p,{children:[`In alternativa il pulsante resta attivo e l'avanzamento viene annullato al click, mostrando all'utente quali campi mancano.
Usa l'evento `,e.jsx(i.code,{children:"it-stepper-change"}),', che è annullabile quando è originato dal click su "Avanti".']}),`
`,e.jsxs(i.p,{children:[`I componenti di form del design kit non mostrano i messaggi nativi del browser: ogni controllo rende il proprio messaggio in linea, nascosto fino al primo invio del form.
Per farli comparire chiama `,e.jsx(i.code,{children:"requestSubmit()"}),`, che il form intercetta segnalando i campi non validi senza inviare nulla.
Verifica prima con `,e.jsx(i.code,{children:"checkValidity()"}),", altrimenti un form valido verrebbe inviato davvero."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const stepper = document.querySelector('it-stepper');
const form = stepper.querySelector('form');

stepper.addEventListener('it-stepper-change', (e) => {
  // Solo in avanti, e solo dal passo che contiene il form.
  if (e.detail.step > e.detail.prevStep && e.detail.prevStep === 0 && !form.checkValidity()) {
    e.preventDefault();
    form.requestSubmit();
  }
});
`})}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(i.h3,{id:"validazione-asincrona",children:"Validazione asincrona"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"preventDefault()"}),` va chiamato in modo sincrono dentro il listener.
Per un controllo lato server annulla subito l'avanzamento e chiama `,e.jsx(i.code,{children:"next()"})," al termine della verifica: il metodo pubblico non è annullabile, quindi non viene intercettato di nuovo dal listener."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`stepper.addEventListener('it-stepper-change', (e) => {
  if (e.detail.step <= e.detail.prevStep) return;

  e.preventDefault();
  validaSulServer(form).then((valido) => {
    if (valido) stepper.next();
  });
});
`})}),`
`,e.jsx(i.h2,{id:"sfondo-scuro",children:"Sfondo scuro"}),`
`,e.jsxs(i.p,{children:["L'attributo ",e.jsx(i.code,{children:"dark"})," attiva la variante per sfondo scuro."]}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(i.p,{children:"Le varianti dell'intestazione sono disponibili anche su sfondo scuro."}),`
`,e.jsx(n,{of:z}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, metodi ed eventi accessibili via JS"}),`
`,e.jsx(i.p,{children:"Il componente espone le seguenti proprietà, metodi e eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"proprietà",children:"Proprietà"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"current"}),", indice (0-based) del passo attivo. Modificarlo naviga direttamente a quel passo, senza emettere ",e.jsx(i.code,{children:"it-stepper-change"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"nextDisabled"}),', disabilita il pulsante "Avanti", oppure "Conferma" quando ',e.jsx(i.code,{children:"showConfirm"})," è attivo."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"showConfirm"}),`, sostituisce il pulsante "Avanti" con "Conferma". Non viene attivato automaticamente sull'ultimo passo.`]}),`
`]}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"next()"}),", avanza al passo successivo, se disponibile. L'evento ",e.jsx(i.code,{children:"it-stepper-change"})," che ne deriva non è cancellabile."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"prev()"}),", torna al passo precedente, se disponibile. Anche in questo caso l'evento non è cancellabile."]}),`
`]}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.p,{children:["Tutti gli eventi sono configurati con ",e.jsx(i.code,{children:"bubbles: true"})," e ",e.jsx(i.code,{children:"composed: true"}),"."]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-stepper-change"}),", emesso quando cambia il passo attivo. Nel ",e.jsx(i.code,{children:"detail"})," contiene ",e.jsx(i.code,{children:"{ step: number, prevStep: number }"}),', rispettivamente il nuovo indice e quello precedente. È cancellabile solo quando è originato dal click sul pulsante "Avanti": in quel caso ',e.jsx(i.code,{children:"event.preventDefault()"})," impedisce il cambio di passo. Non viene emesso se modifichi direttamente ",e.jsx(i.code,{children:"current"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-stepper-save"}),', emesso al click sul pulsante "Salva". Non ha ',e.jsx(i.code,{children:"detail"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-stepper-confirm"}),', emesso al click sul pulsante "Conferma". Non ha ',e.jsx(i.code,{children:"detail"})," e non è cancellabile: il componente non compie alcuna azione predefinita alla conferma, quindi non c'è nulla da impedire. Per bloccare la conferma usa ",e.jsx(i.code,{children:"nextDisabled"}),"."]}),`
`]}),`
`,e.jsx(i.h2,{id:"personalizzazione-degli-stili",children:"Personalizzazione degli stili"}),`
`,e.jsxs(i.p,{children:[`Il componente usa gli stili e le variabili tokenizzate di Bootstrap Italia.
Per personalizzazioni locali puoi usare il selettore `,e.jsx(i.code,{children:"::part"})," con questi valori:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"stepper"})," - contenitore principale."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"header"})," - area intestazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"header-list"})," - lista degli step nell'intestazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"content"})," - area contenuto."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"nav"})," - navigazione."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"progress"})," - progress bar mobile."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"dots"})," - pallini mobile."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"save"})," - area di salvataggio."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"/docs/personalizzazione-degli-stili--documentazione#selettore-part",children:"Vai alla guida sul selettore part"})})]})}function L(o={}){const{wrapper:i}={...l(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(s,{...o})}):s(o)}export{L as default};
