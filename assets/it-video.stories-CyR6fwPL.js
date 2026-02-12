import{b as i,A as m,o as u}from"./iframe-C0TrFRga.js";const v={"Audio Player":"Lettore audio","Video Player":"Lettore video",Play:"Play",Pause:"Pausa",Replay:"Replay","Current Time":"Orario attuale",Duration:"Durata","Remaining Time":"Tempo rimanente","Stream Type":"Tipo di streaming",LIVE:"LIVE",Loaded:"Caricato",Progress:"Stato","Progress Bar":"Barra di avanzamento","progress bar timing: currentTime={1} duration={2}":"{1} di {2}",Fullscreen:"Schermo intero","Exit Fullscreen":"Chiudi Schermo intero",Mute:"Disattiva l’audio",Unmute:"Attiva l’audio","Playback Rate":"Velocità di riproduzione",Subtitles:"Sottotitoli","subtitles off":"Senza sottotitoli",Captions:"Sottotitoli non udenti","captions off":"Senza sottotitoli non udenti",Chapters:"Capitolo",Descriptions:"Descrizioni","descriptions off":"Descrizioni disattivate","Audio Track":"Traccia audio","Volume Level":"Livello del volume","You aborted the media playback":"La riproduzione del filmato è stata interrotta.","A network error caused the media download to fail part-way.":"Il download del filmato è stato interrotto a causa di un problema rete.","The media could not be loaded, either because the server or network failed or because the format is not supported.":"Il filmato non può essere caricato a causa di un errore nel server o nella rete o perché il formato non viene supportato.","The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":"La riproduzione del filmato è stata interrotta a causa di un file danneggiato o per l’utilizzo di impostazioni non supportate dal browser.","No compatible source was found for this media.":"Non ci sono fonti compatibili per questo filmato.","The media is encrypted and we do not have the keys to decrypt it.":"Il contenuto multimediale è criptato e non disponiamo delle chiavi per decifrarlo.","Play Video":"Riproduci il video",Close:"Chiudi","Close Modal Dialog":"Chiudi la finestra di dialogo","Modal Window":"Finestra di dialogo","This is a modal window":"Questa è una finestra di dialogo","This modal can be closed by pressing the Escape key or activating the close button.":"Questa finestra di dialogo può essere chiusa premendo sul tasto Esc o attivando il pulsante di chiusura.",", opens captions settings dialog":", aprire i parametri della trascrizione dei sottotitoli",", opens subtitles settings dialog":", aprire i parametri dei sottotitoli",", opens descriptions settings dialog":", aprire i parametri delle descrizioni",", selected":", selezionato","captions settings":"Parametri sottotitoli non udenti","subtitles settings":"Parametri sottotitoli","descriptions settings":"Parametri descrizioni",Text:"Testo",White:"Bianco",Black:"Nero",Red:"Rosso",Green:"Verde",Blue:"Blu",Yellow:"Giallo",Magenta:"Magenta",Cyan:"Ciano",Background:"Sfondo",Window:"Finestra",Transparent:"Trasparente","Semi-Transparent":"Semi-Trasparente",Opaque:"Opaco","Font Size":"Dimensione dei caratteri","Text Edge Style":"Stile dei bordi del testo",None:"Nessuno",Uniform:"Uniforme","Drop shadow":"Ombra","Font Family":"Carattere","Proportional Sans-Serif":"Sans-Serif proporzionale","Monospace Sans-Serif":"Sans-Serif monospaziato","Proportional Serif":"Serif proporzionale","Monospace Serif":"Serif monospaziato","Small Caps":"Maiuscoletto",Reset:"Reinizializza","restore all settings to the default values":"Ripristina i valori predefiniti per tutti i parametri",Done:"Fatto","Caption Settings Dialog":"Finestra di dialogo dei parametri della trascrizione dei sottotitoli","Beginning of dialog window. Escape will cancel and close the window.":"Inizio della finestra di dialogo. Il tasto Esc annullerà l’operazione e chiuderà la finestra.","End of dialog window.":"Fine della finestra di dialogo.","{1} is loading.":"{1} in fase di caricamento.","Exit Picture-in-Picture":"Esci dalla modalità Picture-in-Picture","Picture-in-Picture":"Picture-in-Picture",Color:"Colore",Opacity:"Opacità","Text Background":"Sfondo testo","Caption Area Background":"Sfondo area sottotitoli","Skip forward {1} seconds":"Avanti {1} secondi","Skip backward {1} seconds":"Indietro {1} secondi"},g={$code:"it",$name:"Italiano",$dir:"ltr",video_consent_icon:"it-video",video_consent_text:'Accetta i cookie di YouTube per vedere il video. Puoi gestire le preferenze nella <a href="#" class="text-white">cookie policy</a>.',video_consent_accept:"Accetta",video_consent_remember:"Ricorda per tutti i video"},o=e=>i`
  <it-video
    src="${u(e.src)}"
    poster="${u(e.poster)}"
    type="${u(e.type)}"
    options="${e.options?JSON.stringify(e.options):m}"
    translations="${e.translations?JSON.stringify(e.translations):m}"
    lang="${u(e.lang)}"
    track="${e.track?JSON.stringify(e.track):m}"
    >${e.slot}</it-video
  >
`,a={title:"Componenti/Video",tags:["a11y-ok","web-component"],component:"it-video",args:{src:"https://vjs.zencdn.net/v/oceans.webm",poster:"",type:"video/mp4",options:void 0,track:[],consentOptions:{},lang:"it",translations:{it:v},initPlugins:""},argTypes:{src:{control:"text",description:"Sorgente del video"},poster:{control:"text",description:"Sorgente dell'immagine di anteprima"},type:{control:"text",description:"Tipo del video.",table:{defaultValue:{summary:"video/mp4"}}},options:{control:"object",description:"Opzioni per il video player. https://videojs.com/guides/options/ qui tutte le opzioni disponibili."},track:{control:"text",table:{defaultValue:{summary:'[{kind:"chapter", src: "/path/file.ext", srclang:"it", label: "Capitoli", default: true }]'}},description:"Tracce per didascalie, sottotitoli, capitoli e descrizioni. Nel campo `kind` è necessario indicare la tipologia di traccia fra <ul><li>captions</li><li>subtitles</li><li>description</li><li>chapters</li><li>metadata</li></ul>"},consentOptions:{name:"consent-options",control:"object",description:"Oggetto per la configurazione del consenso dei cookie. <br/>Di default viene salvata una variabile nel localstorage con lo stesso nome del type del video, ma è possibile personalizzarla passando in `consentOptions` un valore per `consentKey`. <br/>Inoltre, quando viene dato il consenso permanente per i cookie, è possibile personalizzare il comportamento passando in questo oggetto due funzioni specifiche per la gestione della memorizzazione del consenso: `onAccept` e `isAccepted`.",table:{defaultValue:{summary:"{}"}}},lang:{control:"select",options:["it","en","fr","de","es"],description:"Lingua del player di cui verrano usate le corrispondenti 'translations'",table:{defaultValue:{summary:"it"}}},translations:{control:"object",description:"Traduzioni del player per le diverse lingue. Di base è disponibile solo la lingua it. Usare questa prop per aggiungere le traduzioni in altre lingue. "},initPlugins:{name:"init-plugins",control:"text",description:"Nome della propria funzione presente nella window che verrà invocata da video.js per inizializzare eventuali plugin aggiuntivi definiti dallo sviluppatore."}},decorators:[e=>i`<div class="sbdocs-video-container">${e()}</div>`]},t={...a,name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{source:{excludeDecorators:!0},canvas:{sourceState:"closed"}}},render:e=>i` ${o({...e})}`},n={...a,name:"Con trascrizione",render:e=>i` ${o({...e,translations:void 0,slot:i`<it-accordion class="vjs-transcription">
        <it-accordion-item>
          <span slot="heading" id="transcription-head4">Trascrizione</span>
          <div slot="content">
            Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
            facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
          </div>
        </it-accordion-item>
      </it-accordion>`})}`},r={...a,name:"Sottotitoli, didascalie, capitoli e descrizioni",render:e=>i`${o({...e,src:"./assets/video/ElephantsDream.mp4",track:[{kind:"captions",src:"./assets/video/subtitles-it.vtt",srclang:"it",label:"Italiano",default:!0},{kind:"captions",src:"./assets/video/subtitles-en.vtt",srclang:"en",label:"English"},{kind:"captions",src:"./assets/video/subtitles-es.vtt",srclang:"es",label:"Español"}],translations:void 0})}`},s={...a,name:"Immagine di anteprima",parameters:{docs:{description:{story:`
Per aggiungere un’immagine di anteprima come copertina al video, utilizza l’attributo \`poster\` inizializzato con la url dell’anteprima.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Attenzione</span></div>
<p>Le immagini caricate come copertina devono rispettare la stessa \`aspect ratio\` del video per una corretta visualizzazione.
</p></div></div>

`}}},render:e=>i`${o({...e,src:"./assets/video/ElephantsDream.mp4",poster:"./assets/video/ElephantsDream.mp4-poster21.jpg",translations:void 0})}`},l={...a,parameters:{docs:{description:{story:`
Servire i video tramite dei file in formato mp4 o webm (che sono i formati più supportati) non è la migliore soluzione in termini di performance e di ottimizzazione della banda.

Per garantire una buona esperienza utente è fondamentale scegliere il formato di riproduzione più adatto.

In questo contesto, i formati di streaming HLS e DASH offrono importanti vantaggi rispetto al tradizionale file MP4.

L’uso dei formati di streaming permette una riproduzione fluida dei video online grazie alla loro
capacità di adattarsi alla larghezza di banda disponibile. In questo modo si evitano interruzioni o rallentamenti durante la visualizzazione, migliorando l’esperienza utente. Inoltre, questi formati consentono di distribuire il contenuto su diverse piattaforme e dispositivi, aumentando la portabilità del video.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Suggerimento</span></div><p>FFmpeg è uno strumento di conversione multimediale open-source che consente di convertire facilmente i
file MP4 in formati adattivi come HLS o DASH, ti permette la conversione del video MP4 in un formato a
bitrate variabile per adattare la qualità del video alle diverse velocità di connessione degli utenti.
Approfondisci su <a href="https://ffmpeg.org/">FFmpeg</a>.</p></div></div>



Le playlist HLS e DASH possono essere riprodotte su più domini condividendo solo l’URL.
Tuttavia, a causa delle restrizioni imposte dalle politiche di sicurezza del browser, l’utilizzo di queste playlist in domini diversi da quello originale può causare errori CORS (Cross-Origin Resource Sharing).
In altre parole, il browser può rifiutare l’accesso alle risorse audio e video, impedendo la corretta riproduzione del contenuto multimediale.

Per superare questo problema, è necessario configurare correttamente il server che fornisce le risorse audio e video, consentendo l’accesso a domini esterni tramite le policy CORS.

Di seguito un esempio in formato MPEG-DASH:
`}}},render:e=>i`${o({...e,src:"./assets/video/ElephantsDreamDASH/ElephantsDream.mp4.mpd",type:"application/dash+xml",poster:"./assets/video/ElephantsDream.mp4-poster16.gif",track:[{kind:"captions",src:"./assets/video/subtitles-it.vtt",srclang:"it",label:"Italiano",default:!0},{kind:"captions",src:"./assets/video/subtitles-en.vtt",srclang:"en",label:"English"},{kind:"captions",src:"./assets/video/subtitles-es.vtt",srclang:"es",label:"Español"},{kind:"chapters",src:"./assets/video/chapters-it.vtt",srclang:"it",label:"Italiano"},{kind:"chapters",src:"./assets/video/chapters-en.vtt",srclang:"en",label:"English"},{kind:"chapters",src:"./assets/video/chapters-es.vtt",srclang:"es",label:"Español"}],translations:void 0})}`},d={...a,name:"Gestire più tracce audio",parameters:{docs:{description:{story:`
L’uso di più tracce audio nei video è una buona tecnica per migliorare l’accessibilità dei contenuti multimediali.
Ad esempio, è possibile creare una traccia audio aggiuntiva che descrive in dettaglio le immagini e le azioni che si svolgono nel video, per aiutare le persone non vedenti a comprendere il contenuto visivo.
Inoltre, l’aggiunta di tracce audio in lingue diverse consente di offrire il video in più lingue.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Tieni presente che</span></div>
<p>Video.js offre un’implementazione cross-browser delle tracce audio, a condizione che la
tecnologia di riproduzione supporti le tracce audio. Le tracce audio per i file mp4 sono
supportate solo da Safari, altri browser non supportano la riproduzione mp4 con più tracce
audio. L’unico modo per fornire l’audio multi-traccia cross-browser è l’uso dei formati
HLS e/o DASH.
Approfondisci su <a href="https://videojs.com/guides/audio-tracks/">Video.js</a></p>
</div></div>


Per vedere tutte le opzioni disponibili, consultare la documentazione di [VideoJS](https://videojs.com/guides/options/).

Di seguito un esempio in formato HLS multilingua.
`}}},render:e=>i`${o({...e,src:"./assets/video/ElephantsDreamHLS/ElephantsDream.mp4.m3u8",type:"application/x-mpegURL",poster:"./assets/video/ElephantsDream.mp4-poster21.jpg",translations:void 0})}`},c={...a,name:"Embed da piattaforme terze",parameters:{docs:{description:{story:`
Oltre a consentire la riproduzione di video direttamente sulle proprie pagine web, il player video.js offre anche la possibilità di incorporare video provenienti da altre piattaforme come YouTube.

Questa funzionalità consente di sfruttare i video già disponibili su queste piattaforme, senza doverli caricare sul proprio sito web.
Tuttavia, è importante tenere in considerazione la questione della privacy: quando si incorporano video di terze parti, si può finire per condividere con queste piattaforme i dati degli utenti che visualizzano i video, come ad esempio le informazioni sulla navigazione o l’indirizzo IP.
È quindi importante l’utilizzo di questa funzionalità assieme al componente di accettazione del consenso per garantire la protezione della privacy degli utenti.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Nota</span></div>
<p>Gli esempi che seguono fanno tutti riferimento alla piattaforma di terze parti YouTube.</p>
</div></div>

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Responsabilità della privacy</span></div>
<p>Coinvolgi il Responsabile per la protezione dei dati (RDP/DPO) della tua amministrazione e ricordati di aggiornare la cookie policy del sito. Designers Italia mette a disposizione il [kit Privacy](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/) per approfondire questi temi e in particolare uno strumento dedicato alla redazione della Cookie policy che trovi in [questa azione del kit](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/rispetta-la-privacy-per-il-go-live-di-un-sito/).</p>
</div></div>

### Attivazione dell’overlay di consenso
L’utilizzo di un overlay per il consenso è una soluzione comune per garantire la conformità alla normativa sulla privacy in materia di cookie e tracciamento degli utenti.
L’overlay per il consenso consente di informare l’utente sui cookie utilizzati e di ottenere il suo consenso in modo esplicito e consapevole alla riproduzione del video prima dell’installazione di qualunque cookie.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Obblighi</span></div>
<p>Per questo la Pubblica Amministrazione che fa uso di servizi di terze parti come YouTube deve necessariamente specificare l’utilizzo di cookie di tracciamento da parte di piattaforme di terze parti, inserendo inoltre il link alla propria cookie policy all’interno dell’overlay (dove adesso c’è il link a ‘#’).
Nella sezione seguente vengono illustrate le funzioni per la gestione delle preferenze con JavaScript.</p>
</div></div>

L'overlay di consenso viene automaticamente istanziato dal componente se si tratta di un video Youtube.

Per personalizzare il comportamento sulle scelte effettuate nell'overlay di consenso, è possibile passare al componente \`<it-video>\` l'attributo \`consentOptions\` con il seguente formato:

\`\`\`js
consentOptions = {
    consentKey?: string; //nome della variabile da usare nel localStorage per il salvataggio della preferenza sul consenso. Di default è 'youtube' per i video di Youtube.
    onAccept?: Function; //(accepted, consentKey)=>{} - funzione che viene invocata quando si accetta il consenso permanente per un video di questa tipologia. Se presente, non viene gestita la preferenza nel localstorage, ma è compito dello sviluppatore implementare la logica di salvataggio delle preferenze
    isAccepted?: Function; // (consentKey)=>{} - funzione che ritorna un valore booleano (true/false), che indica se l'utente ha gia accettato il consenso permanente per tutti i video di quel tipo.
  };
\`\`\`

Di default sono gia previsti testi e icona, ma è possibile (ed è suggerito) modificare il testo con il link alla pagina della privacy policy.
I testi e l'icona sono modificabili attraverso il sistema di traduzioni. Vedi la guida dedicata.
`}}},render:e=>i`${o({...e,src:"https://youtu.be/_0j7ZQ67KtY",type:void 0})}`},p={name:"i18n",tags:["!dev"],render:()=>i`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Oltre all'attributo \`translations\` che permette di modificare le traduzioni interne al player, sono disponibili ulteriori stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = ${JSON.stringify(g,null,2)}
\`\`\`
`}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true
      },
      canvas: {
        sourceState: 'closed'
      }
    }
  },
  render: params => html\` \${renderComponent({
    ...params
  })}\`
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Con trascrizione',
  render: params => html\` \${renderComponent({
    ...params,
    translations: undefined,
    slot: html\`<it-accordion class="vjs-transcription">
        <it-accordion-item>
          <span slot="heading" id="transcription-head4">Trascrizione</span>
          <div slot="content">
            Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
            facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
          </div>
        </it-accordion-item>
      </it-accordion>\`
  })}\`
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Sottotitoli, didascalie, capitoli e descrizioni',
  render: params => html\`\${renderComponent({
    ...params,
    src: './assets/video/ElephantsDream.mp4',
    track: [{
      kind: 'captions',
      src: './assets/video/subtitles-it.vtt',
      srclang: 'it',
      label: 'Italiano',
      default: true
    }, {
      kind: 'captions',
      src: './assets/video/subtitles-en.vtt',
      srclang: 'en',
      label: 'English'
    }, {
      kind: 'captions',
      src: './assets/video/subtitles-es.vtt',
      srclang: 'es',
      label: 'Español'
    }],
    translations: undefined
  })}\`
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Immagine di anteprima',
  parameters: {
    docs: {
      description: {
        story: \`
Per aggiungere un’immagine di anteprima come copertina al video, utilizza l’attributo \\\`poster\\\` inizializzato con la url dell’anteprima.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Attenzione</span></div>
<p>Le immagini caricate come copertina devono rispettare la stessa \\\`aspect ratio\\\` del video per una corretta visualizzazione.
</p></div></div>

\`
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params,
    src: './assets/video/ElephantsDream.mp4',
    poster: './assets/video/ElephantsDream.mp4-poster21.jpg',
    translations: undefined
  })}\`
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...meta,
  // name: 'Streaming',
  parameters: {
    docs: {
      description: {
        story: \`
Servire i video tramite dei file in formato mp4 o webm (che sono i formati più supportati) non è la migliore soluzione in termini di performance e di ottimizzazione della banda.

Per garantire una buona esperienza utente è fondamentale scegliere il formato di riproduzione più adatto.

In questo contesto, i formati di streaming HLS e DASH offrono importanti vantaggi rispetto al tradizionale file MP4.

L’uso dei formati di streaming permette una riproduzione fluida dei video online grazie alla loro
capacità di adattarsi alla larghezza di banda disponibile. In questo modo si evitano interruzioni o rallentamenti durante la visualizzazione, migliorando l’esperienza utente. Inoltre, questi formati consentono di distribuire il contenuto su diverse piattaforme e dispositivi, aumentando la portabilità del video.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Suggerimento</span></div><p>FFmpeg è uno strumento di conversione multimediale open-source che consente di convertire facilmente i
file MP4 in formati adattivi come HLS o DASH, ti permette la conversione del video MP4 in un formato a
bitrate variabile per adattare la qualità del video alle diverse velocità di connessione degli utenti.
Approfondisci su <a href="https://ffmpeg.org/">FFmpeg</a>.</p></div></div>



Le playlist HLS e DASH possono essere riprodotte su più domini condividendo solo l’URL.
Tuttavia, a causa delle restrizioni imposte dalle politiche di sicurezza del browser, l’utilizzo di queste playlist in domini diversi da quello originale può causare errori CORS (Cross-Origin Resource Sharing).
In altre parole, il browser può rifiutare l’accesso alle risorse audio e video, impedendo la corretta riproduzione del contenuto multimediale.

Per superare questo problema, è necessario configurare correttamente il server che fornisce le risorse audio e video, consentendo l’accesso a domini esterni tramite le policy CORS.

Di seguito un esempio in formato MPEG-DASH:
\`
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params,
    src: './assets/video/ElephantsDreamDASH/ElephantsDream.mp4.mpd',
    type: 'application/dash+xml',
    poster: './assets/video/ElephantsDream.mp4-poster16.gif',
    track: [{
      kind: 'captions',
      src: './assets/video/subtitles-it.vtt',
      srclang: 'it',
      label: 'Italiano',
      default: true
    }, {
      kind: 'captions',
      src: './assets/video/subtitles-en.vtt',
      srclang: 'en',
      label: 'English'
    }, {
      kind: 'captions',
      src: './assets/video/subtitles-es.vtt',
      srclang: 'es',
      label: 'Español'
    }, {
      kind: 'chapters',
      src: './assets/video/chapters-it.vtt',
      srclang: 'it',
      label: 'Italiano'
    }, {
      kind: 'chapters',
      src: './assets/video/chapters-en.vtt',
      srclang: 'en',
      label: 'English'
    }, {
      kind: 'chapters',
      src: './assets/video/chapters-es.vtt',
      srclang: 'es',
      label: 'Español'
    }],
    translations: undefined
  })}\`
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Gestire più tracce audio',
  parameters: {
    docs: {
      description: {
        story: \`
L’uso di più tracce audio nei video è una buona tecnica per migliorare l’accessibilità dei contenuti multimediali.
Ad esempio, è possibile creare una traccia audio aggiuntiva che descrive in dettaglio le immagini e le azioni che si svolgono nel video, per aiutare le persone non vedenti a comprendere il contenuto visivo.
Inoltre, l’aggiunta di tracce audio in lingue diverse consente di offrire il video in più lingue.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Tieni presente che</span></div>
<p>Video.js offre un’implementazione cross-browser delle tracce audio, a condizione che la
tecnologia di riproduzione supporti le tracce audio. Le tracce audio per i file mp4 sono
supportate solo da Safari, altri browser non supportano la riproduzione mp4 con più tracce
audio. L’unico modo per fornire l’audio multi-traccia cross-browser è l’uso dei formati
HLS e/o DASH.
Approfondisci su <a href="https://videojs.com/guides/audio-tracks/">Video.js</a></p>
</div></div>


Per vedere tutte le opzioni disponibili, consultare la documentazione di [VideoJS](https://videojs.com/guides/options/).

Di seguito un esempio in formato HLS multilingua.
\`
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params,
    src: './assets/video/ElephantsDreamHLS/ElephantsDream.mp4.m3u8',
    type: 'application/x-mpegURL',
    poster: './assets/video/ElephantsDream.mp4-poster21.jpg',
    translations: undefined
  })}\`
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...meta,
  name: 'Embed da piattaforme terze',
  parameters: {
    docs: {
      description: {
        story: \`
Oltre a consentire la riproduzione di video direttamente sulle proprie pagine web, il player video.js offre anche la possibilità di incorporare video provenienti da altre piattaforme come YouTube.

Questa funzionalità consente di sfruttare i video già disponibili su queste piattaforme, senza doverli caricare sul proprio sito web.
Tuttavia, è importante tenere in considerazione la questione della privacy: quando si incorporano video di terze parti, si può finire per condividere con queste piattaforme i dati degli utenti che visualizzano i video, come ad esempio le informazioni sulla navigazione o l’indirizzo IP.
È quindi importante l’utilizzo di questa funzionalità assieme al componente di accettazione del consenso per garantire la protezione della privacy degli utenti.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Nota</span></div>
<p>Gli esempi che seguono fanno tutti riferimento alla piattaforma di terze parti YouTube.</p>
</div></div>

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Responsabilità della privacy</span></div>
<p>Coinvolgi il Responsabile per la protezione dei dati (RDP/DPO) della tua amministrazione e ricordati di aggiornare la cookie policy del sito. Designers Italia mette a disposizione il [kit Privacy](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/) per approfondire questi temi e in particolare uno strumento dedicato alla redazione della Cookie policy che trovi in [questa azione del kit](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/rispetta-la-privacy-per-il-go-live-di-un-sito/).</p>
</div></div>

### Attivazione dell’overlay di consenso
L’utilizzo di un overlay per il consenso è una soluzione comune per garantire la conformità alla normativa sulla privacy in materia di cookie e tracciamento degli utenti.
L’overlay per il consenso consente di informare l’utente sui cookie utilizzati e di ottenere il suo consenso in modo esplicito e consapevole alla riproduzione del video prima dell’installazione di qualunque cookie.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Obblighi</span></div>
<p>Per questo la Pubblica Amministrazione che fa uso di servizi di terze parti come YouTube deve necessariamente specificare l’utilizzo di cookie di tracciamento da parte di piattaforme di terze parti, inserendo inoltre il link alla propria cookie policy all’interno dell’overlay (dove adesso c’è il link a ‘#’).
Nella sezione seguente vengono illustrate le funzioni per la gestione delle preferenze con JavaScript.</p>
</div></div>

L'overlay di consenso viene automaticamente istanziato dal componente se si tratta di un video Youtube.

Per personalizzare il comportamento sulle scelte effettuate nell'overlay di consenso, è possibile passare al componente \\\`<it-video>\\\` l'attributo \\\`consentOptions\\\` con il seguente formato:

\\\`\\\`\\\`js
consentOptions = {
    consentKey?: string; //nome della variabile da usare nel localStorage per il salvataggio della preferenza sul consenso. Di default è 'youtube' per i video di Youtube.
    onAccept?: Function; //(accepted, consentKey)=>{} - funzione che viene invocata quando si accetta il consenso permanente per un video di questa tipologia. Se presente, non viene gestita la preferenza nel localstorage, ma è compito dello sviluppatore implementare la logica di salvataggio delle preferenze
    isAccepted?: Function; // (consentKey)=>{} - funzione che ritorna un valore booleano (true/false), che indica se l'utente ha gia accettato il consenso permanente per tutti i video di quel tipo.
  };
\\\`\\\`\\\`

Di default sono gia previsti testi e icona, ma è possibile (ed è suggerito) modificare il testo con il link alla pagina della privacy policy.
I testi e l'icona sono modificabili attraverso il sistema di traduzioni. Vedi la guida dedicata.
\`
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params,
    src: 'https://youtu.be/_0j7ZQ67KtY',
    type: undefined
    // translations: undefined,
  })}\`
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'i18n',
  tags: ['!dev'],
  render: () => html\`<div class="hide-preview"></div>\`,
  parameters: {
    viewMode: 'docs',
    // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: \`
Oltre all'attributo \\\`translations\\\` che permette di modificare le traduzioni interne al player, sono disponibili ulteriori stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\\\`\\\`\\\`js
const translation = \${JSON.stringify(i18nIT, null, 2)}
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const z=["EsempioInterattivo","ConTrascrizione","SottotitoliDidascalieCapitoliEDescrizioni","ImmagineDiAnteprima","Streaming","GestirePiuTracceAudio","EmbedDaPiattaformeTerze","I18n"],b=Object.freeze(Object.defineProperty({__proto__:null,ConTrascrizione:n,EmbedDaPiattaformeTerze:c,EsempioInterattivo:t,GestirePiuTracceAudio:d,I18n:p,ImmagineDiAnteprima:s,SottotitoliDidascalieCapitoliEDescrizioni:r,Streaming:l,__namedExportsOrder:z,default:a},Symbol.toStringTag,{value:"Module"}));export{n as C,t as E,d as G,s as I,b as S,r as a,l as b,c,p as d};
