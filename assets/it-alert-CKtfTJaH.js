import{j as e,M as l,C as o,a as r}from"./blocks-DGm5YkTy.js";import{useMDXComponents as t}from"./index-DbevRHTU.js";import{S as c,E as a,a as d,L as u,C as h,b as m,c as p}from"./it-alert.stories-Ddzt6wZN.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-Ug63oIzY.js";import"./dispatch-cancelable-Dbrx1KBI.js";function s(n){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(i.h1,{id:"alert",children:"Alert"}),`
`,e.jsx("description",{children:"Breve messaggio di testo con uno stile grafico distintivo per avvisare gli utenti di un evento o di un'azione che richiede la loro attenzione."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsxs(i.p,{children:["Il componente Alert permette di creare messaggi di avviso contestuali che non interrompono il flusso di navigazione. Questi messaggi sono utili per ",e.jsx(i.strong,{children:"errori o problemi tecnici"}),", ",e.jsx(i.strong,{children:"conferme di completamento"}),", ",e.jsx(i.strong,{children:"eventi importanti"})," come scadenze e imprevisti."]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/alert/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Alert"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-callout--documentazione",children:"Callout"}),": permette di evidenziare delle informazioni testuali in pagina."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-modal--documentazione",children:"Modal"}),": avvisa l'utente di azioni necessarie da compiere."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.a,{href:"/docs/componenti-notification--documentazione",children:"Notification"}),": avvisi a comparsa temporanei in sovraimpressione sulla schermata."]}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(i.h2,{id:"varianti",children:"Varianti"}),`
`,e.jsx(i.p,{children:"Gli alert sono disponibili in cinque varianti di colore e sono adatti a qualsiasi lunghezza di testo."}),`
`,e.jsxs(i.p,{children:["Avvolgi il markup dell'alert nel componente ",e.jsx(i.code,{children:"<it-alert>"})," e usa l'attributo ",e.jsx(i.code,{children:"variant"})," per impostarne il colore (",e.jsx(i.code,{children:"primary"}),", ",e.jsx(i.code,{children:"secondary"}),", ",e.jsx(i.code,{children:"success"}),", ",e.jsx(i.code,{children:"warning"}),", ",e.jsx(i.code,{children:"danger"}),"): la classe ",e.jsx(i.code,{children:".alert-{variant}"})," corretta viene applicata automaticamente all'elemento interno. In questo modo è sufficiente scrivere ",e.jsx(i.code,{children:'<div class="alert">'})," senza ripetere manualmente la classe del colore."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-alert variant="success">
  <div class="alert">
    <it-icon name="it-check-circle" class="alert-icon"></it-icon>Questo è un alert di tipo "success".
  </div>
</it-alert>
`})}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-alert>"})," imposta automaticamente ",e.jsx(i.code,{children:'role="alert"'})," sull'elemento ",e.jsx(i.code,{children:".alert"})," interno (a meno che non sia già presente un ",e.jsx(i.code,{children:"role"})," esplicito): non è quindi più necessario aggiungerlo a mano nel markup. Il ruolo ",e.jsx(i.code,{children:"alert"})," definisce una ",e.jsx(i.em,{children:"live region"})," assertiva, che comunica il messaggio alle tecnologie assistive non appena viene mostrato."]}),`
`,e.jsxs(i.p,{children:["Il colore dell'alert trasmette un significato (errore, conferma, ecc.) che non viene però percepito da chi usa tecnologie assistive come i lettori di schermo. Assicurati quindi che le informazioni veicolate dal colore siano disponibili anche nel contenuto stesso, ad esempio nel testo visibile oppure con un testo aggiuntivo nascosto tramite la classe ",e.jsx(i.code,{children:".visually-hidden"}),"."]}),`
`,e.jsxs(i.p,{children:["Se l’alert include un pulsante di chiusura, valorizza l’attributo ",e.jsx(i.code,{children:"aria-label"})," dell’icona con un testo coerente con il contesto (ad esempio, “Chiudi nota”, “Chiudi”, “Nascondi”, ecc.)."]}),`
`,e.jsx(i.h2,{id:"link-evidenziato",children:"Link evidenziato"}),`
`,e.jsxs(i.p,{children:["Per dare risalto a un link all'interno dell'alert, usa la classe ",e.jsx(i.code,{children:".alert-link"}),"."]}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(i.h2,{id:"contenuto-aggiuntivo",children:"Contenuto aggiuntivo"}),`
`,e.jsx(i.p,{children:"Puoi aggiungere elementi HTML all'interno di un alert, come intestazioni, paragrafi e divisori."}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Nota bene"}),": nell'esempio è stata usata l'intestazione ",e.jsx(i.code,{children:"h4"}),` soltanto a scopo dimostrativo.
Usa sempre i tag di intestazione in modo coerente con la gerarchia dei contenuti della pagina che stai creando.`]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(i.h2,{id:"chiusura",children:"Chiusura"}),`
`,e.jsx(i.p,{children:"Per permettere agli utenti di chiudere un alert:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["aggiungi il pulsante di chiusura e la classe ",e.jsx(i.code,{children:".alert-dismissible"}),", così il padding destro verrà adattato automaticamente e il pulsante con classe ",e.jsx(i.code,{children:".btn-close"})," si posizionerà correttamente;"]}),`
`,e.jsxs(i.li,{children:["usa l'elemento ",e.jsx(i.code,{children:"<it-button>"})," per un comportamento corretto del pulsante di chiusura su tutti i dispositivi;"]}),`
`,e.jsxs(i.li,{children:["aggiungi le classi ",e.jsx(i.code,{children:".fade"})," e ",e.jsx(i.code,{children:".show"})," per animare l'alert alla chiusura."]}),`
`]}),`
`,e.jsxs(i.p,{children:["Il componente ",e.jsx(i.code,{children:"<it-alert>"})," gestisce di default la chiusura: al click sul pulsante ",e.jsx(i.code,{children:".btn-close"})," viene emesso l'evento ",e.jsx(i.code,{children:"it-alert-close"})," e, se non annullato, l'alert viene rimosso dal DOM (con la dissolvenza prevista da ",e.jsx(i.code,{children:".fade"}),")."]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-html",children:`<it-alert variant="warning">
  <div class="alert alert-dismissible fade show">
    <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
    <it-button type="button" class="btn-close" it-aria-label="Chiudi avviso">
      <it-icon name="it-close"></it-icon>
    </it-button>
  </div>
</it-alert>
`})}),`
`,e.jsx(i.p,{children:"Clicca sul pulsante in questo esempio per vedere il comportamento di chiusura dell'alert."}),`
`,e.jsx(o,{of:m}),`
`,e.jsx(i.h3,{id:"logica-di-chiusura-personalizzata",children:"Logica di chiusura personalizzata"}),`
`,e.jsxs(i.p,{children:["L'evento ",e.jsx(i.code,{children:"it-alert-close"})," è ",e.jsx(i.strong,{children:"cancelable"}),". Chiamando ",e.jsx(i.code,{children:"event.preventDefault()"})," puoi intercettare la chiusura ed eseguire una logica personalizzata (ad esempio una conferma), richiamando poi il metodo pubblico ",e.jsx(i.code,{children:"close()"})," quando opportuno:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`const alert = document.querySelector('it-alert');
alert.addEventListener('it-alert-close', (e) => {
  e.preventDefault(); // impedisce la rimozione di default
  if (confirm('Vuoi davvero chiudere questo avviso?')) alert.close();
});
`})}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(i.h2,{id:"proprietà-metodi-ed-eventi-accessibili-via-js",children:"Proprietà, Metodi, ed Eventi accessibili via JS"}),`
`,e.jsx(i.p,{children:"Il componente espone i seguenti metodi e eventi accessibili via JavaScript."}),`
`,e.jsx(i.h3,{id:"metodi",children:"Metodi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"close()"})," — chiude l'alert con animazione di dissolvenza e lo rimuove dal DOM. Se presente, sposta il focus sul pulsante di chiusura dell'alert adiacente."]}),`
`]}),`
`,e.jsx(i.h3,{id:"eventi",children:"Eventi"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"it-alert-close"})," — emesso al click sul pulsante di chiusura. L'evento è cancellabile: chiamando ",e.jsx(i.code,{children:"event.preventDefault()"})," si impedisce la rimozione automatica. Il ",e.jsx(i.code,{children:"detail"})," contiene ",e.jsx(i.code,{children:"alert"}),", riferimento all'elemento ",e.jsx(i.code,{children:"it-alert"})," corrente."]}),`
`]})]})}function b(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{b as default};
