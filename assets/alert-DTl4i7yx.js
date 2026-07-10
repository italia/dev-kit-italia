import{j as e,M as a,C as o}from"./blocks-HeM7HRRU.js";import{useMDXComponents as s}from"./index-BNB5zOl4.js";import{S as l,E as r,L as c,C as d,a as u}from"./alert.stories-Btm8bAm0.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-BBsXzWsk.js";function t(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
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
`,e.jsx(i.h2,{id:"anteprima-del-componente",children:"Anteprima del componente"}),`
`,e.jsx(i.p,{children:"Gli alert sono disponibili in quattro tipologie diverse e sono adatti a qualsiasi lunghezza di testo."}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Il colore dell'alert trasmette un significato (errore, conferma, ecc.) che non viene però percepito da chi usa tecnologie assistive come i lettori di schermo. Assicurati quindi che le informazioni veicolate dal colore siano disponibili anche nel contenuto stesso, ad esempio nel testo visibile oppure con un testo aggiuntivo nascosto tramite la classe ",e.jsx(i.code,{children:".visually-hidden"}),"."]}),`
`,e.jsxs(i.p,{children:["Se l’alert include un pulsante di chiusura, valorizza l’attributo ",e.jsx(i.code,{children:"aria-label"})," dell’icona con un testo coerente con il contesto (ad esempio, “Chiudi nota”, “Chiudi”, “Nascondi”, ecc.)."]}),`
`,e.jsx(i.h2,{id:"link-evidenziato",children:"Link evidenziato"}),`
`,e.jsxs(i.p,{children:["Per dare risalto a un link all'interno dell'alert, usa la classe ",e.jsx(i.code,{children:".alert-link"}),"."]}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(i.h2,{id:"contenuto-aggiuntivo",children:"Contenuto aggiuntivo"}),`
`,e.jsx(i.p,{children:"Puoi aggiungere elementi HTML all'interno di un alert, come intestazioni, paragrafi e divisori."}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Nota bene"}),": nell'esempio è stata usata l'intestazione ",e.jsx(i.code,{children:"h4"}),` soltanto a scopo dimostrativo.
Usa sempre i tag di intestazione in modo coerente con la gerarchia dei contenuti della pagina che stai creando.`]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(i.h2,{id:"chiusura",children:"Chiusura"}),`
`,e.jsx(i.p,{children:"Per permettere agli utenti di chiudere un alert:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["aggiungi il pulsante di chiusura e la classe ",e.jsx(i.code,{children:".alert-dismissible"}),", così il padding destro verrà adattato automaticamente e il pulsante con classe ",e.jsx(i.code,{children:".btn-close"})," si posizionerà correttamente;"]}),`
`,e.jsxs(i.li,{children:["usa l'elemento ",e.jsx(i.code,{children:"<it-button>"})," per un comportamento corretto del pulsante di chiusura su tutti i dispositivi;"]}),`
`,e.jsxs(i.li,{children:["aggiungi le classi ",e.jsx(i.code,{children:".fade"})," e ",e.jsx(i.code,{children:".show"})," per animare l'alert alla chiusura."]}),`
`]}),`
`,e.jsx(i.p,{children:"Questo è un esempio di implementazione del codice JavaScript necessario per la chiusura dell’alert. Puoi utilizzarlo così com’è o adattarlo alle tue esigenze."}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-javascript",children:`function handleClose(event) {
  const alertElement = event.target.closest('.alert');
  if (alertElement) {
    alertElement.classList.remove('show');
    setTimeout(() => {
      alertElement.remove();
    }, 150);
  }
}

document.querySelectorAll('.alert .btn-close').forEach(button => {
  button.addEventListener('click', handleClose);
});
`})}),`
`,e.jsx(i.p,{children:"Clicca sul pulsante in questo esempio per vedere il comportamento di chiusura dell'alert."}),`
`,e.jsx(o,{of:u})]})}function g(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{g as default};
