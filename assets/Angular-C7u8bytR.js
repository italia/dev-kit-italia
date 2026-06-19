import{j as n,M as o}from"./blocks-K0Q1kH6d.js";import{useMDXComponents as a}from"./index-DFZACyMp.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-P4qtb_wL.js";var r={GH_PAGES_PATH:"https://design-web-components.vercel.app"};const s=r.GH_PAGES_PATH+"/angular-app/";function t(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Framework/Angular"}),`
`,`
`,n.jsx(e.h1,{id:"angular",children:"Angular"}),`
`,n.jsx(e.p,{children:"Dev Kit Italia si integra nativamente con Angular tramite i Custom Elements standard del browser. I componenti si usano direttamente nei template senza bisogno di wrapper o librerie aggiuntive."}),`
`,n.jsxs(e.p,{children:[n.jsx("a",{href:s,title:"Vai all'esempio di integrazione Angular",children:"Esempio di integrazione"})," - ",n.jsx("a",{href:"https://github.com/italia/dev-kit-italia/tree/main/examples/angular-app",title:"Vai al codice su GitHub",children:"Codice GitHub"})]}),`
`,n.jsx("div",{class:"callout callout-warning",children:n.jsxs("div",{class:"callout-inner",children:[n.jsx("div",{class:"callout-title",children:n.jsx("span",{class:"text",children:"Attenzione"})}),n.jsx("p",{children:n.jsxs(e.p,{children:["Dev Kit Italia è testato unicamente su ",n.jsx("strong",{children:"Angular >= 20.0.0"}),", il funzionamento su versioni precedenti non è garantito, la versione minima supportata, stando alla documentazione Angular, è la 14.0.0, ma potrebbero esserci problemi di compatibilità con versioni inferiori alla 20.0.0."]})}),n.jsx("p",{children:n.jsxs(e.p,{children:[`Per il funzionamento corretto dei web components in Angular, è necessario
dichiarare `,n.jsx("code",{children:"CUSTOM_ELEMENTS_SCHEMA"}),` nel
decoratore `,n.jsx("code",{children:"@Component"})," di ogni componente che utilizza web components."]})})]})}),`
`,n.jsx(e.h2,{id:"installazione",children:"Installazione"}),`
`,n.jsx(e.p,{children:"Installa il pacchetto nel tuo progetto Angular:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @italia/dev-kit-italia
# oppure
pnpm add @italia/dev-kit-italia
# oppure
yarn add @italia/dev-kit-italia
`})}),`
`,n.jsx(e.h2,{id:"importazione",children:"Importazione"}),`
`,n.jsxs(e.p,{children:["Nel punto di ingresso dell'applicazione (",n.jsx(e.code,{children:"main.ts"}),"), importa i componenti e i fogli di stile:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// main.ts
import '@italia/dev-kit-italia/elements.js';
import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/full.css';
`})}),`
`,n.jsx(e.h2,{id:"utilizzo",children:"Utilizzo"}),`
`,n.jsxs(e.p,{children:["Aggiungi ",n.jsx(e.code,{children:"CUSTOM_ELEMENTS_SCHEMA"})," nel decoratore ",n.jsx(e.code,{children:"@Component"})," di ogni componente che usa web components, poi usa i componenti direttamente nel template e gestisci gli eventi con la sintassi Angular:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// button.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <it-button variant="primary" type="button" (click)="onButtonClick($event)">
      Cliccami
    </it-button>
  \`,
})
export class ButtonComponent {
  onButtonClick(event: Event): void {
    alert('Mi hai cliccato!');
  }
}
`})}),`
`,n.jsx(e.h2,{id:"routing",children:"Routing"}),`
`,n.jsxs(e.p,{children:["Dev Kit Italia è progettato in modo che ogni elemento interattivo che normalmente contiene un tag ",n.jsx(e.code,{children:"<a>"})," lo esponga come slot."]}),`
`,n.jsxs(e.p,{children:["Questo ti permette di passare direttamente la direttiva ",n.jsx(e.code,{children:"routerLink"})," di Angular — senza alcun wrapper aggiuntivo."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// nav-item.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <it-dropdown-item>
      <a [routerLink]="'/pagina'">Vai alla pagina</a>
    </it-dropdown-item>
  \`,
})
export class NavItemComponent {}
`})}),`
`,n.jsx(e.h2,{id:"internazionalizzazione",children:"Internazionalizzazione"}),`
`,n.jsxs(e.p,{children:["Per gestire l'internazionalizzazione in una applicazione Angular, è necessario importare ",n.jsx(e.code,{children:"registerTranslation"}),` e registrare le traduzioni.
Questo può essere fatto nel punto di ingresso dell'applicazione, se le traduzioni sono centralizzate in un unico punto:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';
import '@italia/dev-kit-italia/fonts.css';
import '@italia/dev-kit-italia/styles.css';
import '@italia/dev-kit-italia/elements.js';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr' as const,
  showHidePassword: 'Mostra/Nascondi Password CUSTOM.',
};

registerTranslation(it);

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
`})}),`
`,n.jsx(e.p,{children:"Oppure all'interno dei propri componenti:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// MyPassword.component.ts

import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerTranslation } from '@italia/dev-kit-italia/elements.js';

const it = {
  $code: 'it',
  $name: 'Italiano',
  $dir: 'ltr' as const,
  showHidePassword: 'Mostra/Nascondi Password (in CUSTOM COMPONENT).',
};

@Component({
  selector: 'app-my-password',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <it-input
      id="campo-password"
      type="password"
      name="campo-password"
      support-text="Inserisci almeno 8 caratteri e alcuni caratteri speciali."
      strength-meter
      minlength="8"
      suggestions
    >
      <span slot="label">Campo password</span>
    </it-input>
  \`,
})
export class MyPasswordComponent implements OnInit {
  ngOnInit(): void {
    registerTranslation(it);
  }
}
`})})]})}function m(i={}){const{wrapper:e}={...a(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{m as default,s as path};
