import{j as e,M as t,C as s}from"./blocks-DK8AJ4SG.js";import{useMDXComponents as a}from"./index-BmLyTK7M.js";import{S as l,E as r,L as c,C as d,a as u}from"./alert.stories-Dan_G_Bj.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DO9HwPeR.js";function o(n){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(i.h1,{id:"alert",children:"Alert"}),`
`,e.jsx("description",{children:"Breve messaggio di testo con uno stile grafico distintivo per avvisare gli utenti di un evento o di un'azione che richiede la loro attenzione"}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:`Il componente Alert permette di creare messaggi di avviso per gli utenti.
Questi messaggi sono utili per comunicare informazioni importanti o per avvisare gli utenti di situazioni che richiedono la loro attenzione,
contestualmente al flusso di navigazione e senza provocare interruzioni.`}),`
`,e.jsx(i.p,{children:"Un alert è usato per messaggi immediati e temporanei, come:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"errori"})," o problemi tecnici;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"eventi importanti"})," per cui è richiesta attenzione, come una scadenza imminente o un imprevisto;"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"conferme"})," di completamento."]}),`
`]}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/alert/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Alert"})}),`
`,e.jsx(i.h3,{id:"alternative-a-questo-componente",children:"Alternative a questo componente"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Callout (in lavorazione): permette di evidenziare delle informazioni testuali in pagina."}),`
`,e.jsx(i.li,{children:"Modal (in lavorazione): avvisa l'utente di azioni necessarie da compiere."}),`
`,e.jsx(i.li,{children:"Notifications (in lavorazione): avvisi a comparsa temporanei in sovraimpressione sulla schermata."}),`
`]}),`
`,e.jsx(i.h2,{id:"anteprima-del-componente",children:"Anteprima del componente"}),`
`,e.jsx(i.p,{children:"Gli avvisi sono disponibili in quattro tipologie diverse e sono adatti a qualsiasi lunghezza di testo."}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:[`L'uso del colore per aggiungere un significato fornisce solo un'indicazione visiva,
e non viene trasmesso agli utenti di tecnologie assistive come gli screen reader.
Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo visibile),
o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe `,e.jsx(i.code,{children:".visually-hidden"}),"."]}),`
`,e.jsxs(i.p,{children:["Se l'alert include un pulsante di chiusura, l'",e.jsx(i.code,{children:"aria-label"}),` che assegna il nome accessibile all'icona di chiusura deve essere valorizzato con contenuti correlati al contesto ("chiudi nota", "chiudi", "nascondi", ecc).`]}),`
`,e.jsx(i.h2,{id:"link-evidenziato",children:"Link evidenziato"}),`
`,e.jsxs(i.p,{children:["Usa la classe ",e.jsx(i.code,{children:".alert-link"})," per dare risalto ad un link all'interno dell'alert."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(i.h2,{id:"contenuto-aggiuntivo",children:"Contenuto aggiuntivo"}),`
`,e.jsx(i.p,{children:"I messaggi di avviso possono avere del contenuto HTML aggiuntivo come intestazioni, paragrafi e divisori."}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Nota bene"}),": l'intestazione ",e.jsx(i.code,{children:"h4"}),` all'interno dell'alert è stata usata solo a scopo dimostrativo.
Utilizza sempre i tag di intestazione in modo coerente con la gerarchia della pagina.`]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(i.h2,{id:"chiusura",children:"Chiusura"}),`
`,e.jsx(i.p,{children:"È possibile eliminare qualsiasi avviso mediante un pulsante di chiusura:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Inserisci il pulsante di chiusura e la classe ",e.jsx(i.code,{children:".alert-dismissible"}),", verrà così aggiunto un ulteriore padding alla destra dell'avviso e posizionerà correttamente il pulsante ",e.jsx(i.code,{children:".btn-close"}),"."]}),`
`,e.jsxs(i.li,{children:["Assicurati di utilizzare l'elemento ",e.jsx(i.code,{children:"<it-button>"})," per un comportamento corretto del pulsante di chiusura su tutti i dispositivi."]}),`
`,e.jsxs(i.li,{children:["Assicurati di aggiungere le classi ",e.jsx(i.code,{children:".fade"})," e ",e.jsx(i.code,{children:".show"})," per animare gli avvisi quando li si elimina."]}),`
`]}),`
`,e.jsx(i.p,{children:`Qui sotto trovi un esempio di implementazione del codice JavaScript necessario per la chiusura dell'alert.
Puoi usarlo così com'è oppure adattarlo alle tue esigenze.`}),`
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
`,e.jsx(i.p,{children:"Clicca sul pulsante di chiusura per vedere la funzionalità di rimozione alert in azione:"}),`
`,e.jsx(s,{of:u})]})}function g(n={}){const{wrapper:i}={...a(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{g as default};
