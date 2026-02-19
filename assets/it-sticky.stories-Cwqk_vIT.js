import{o as i,A as c,b as m}from"./iframe-D9yc0utV.js";function u({stackable:n,paddingTop:p,stickyClassName:d,positionType:l}){return m`
    <it-sticky
      ?stackable=${i(n)}
      padding-top=${i(p||c)}
      sticky-class-name=${i(d||c)}
      position-type=${i(l||c)}
    >
      <div class="bg-primary text-white p-3">Elemento Sticky</div>
    </it-sticky>
  `}const y={title:"Componenti/Sticky",component:"it-sticky",tags:["alpha","a11y-ok","web-component"],args:{stackable:!1,paddingTop:0,stickyClassName:void 0,positionType:void 0},argTypes:{stackable:{control:"boolean",description:"Attiva/disattiva la possibilità di rendere l'elemento impilabile su altri elementi sticky presenti in pagina",table:{defaultValue:{summary:!1}}},paddingTop:{control:"number",description:"Indica la distanza dall'elemento in sticky dal margine superiore",table:{defaultValue:{summary:0}}},stickyClassName:{control:"text",type:"string",description:"Classi CSS da applicare all'elemento quando viene attivata la funzionalità sticky",table:{defaultValue:{summary:""}}},positionType:{control:{type:"select"},type:"string",options:["sticky","fixed"],description:"Indica il valore della proprietà CSS `position`. I valori ammessi sono `sticky` o `fixed`",table:{defaultValue:{summary:"sticky"}}}},render:n=>u(n)},e={tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}}},a={args:{paddingTop:50}},s={parameters:{docs:{source:{code:`<it-sticky position-type="fixed">
  <div class="bg-primary text-white p-3">Elemento Sticky</div>
</it-sticky>`}}}},t={args:{stickyClassName:"bg-light text-black"}},o={args:{stackable:!0,paddingTop:0,stickyClassName:""}},r={parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    paddingTop: 50
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<it-sticky position-type="fixed">
  <div class="bg-primary text-white p-3">Elemento Sticky</div>
</it-sticky>\`
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    stickyClassName: 'bg-light text-black'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    stackable: true,
    paddingTop: 0,
    stickyClassName: ''
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: {
        hidden: true,
        sourceState: 'none'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const g=["EsempioInterattivo","Offset","PositionFixed","ClassiPersonalizzate","VersioneImpilabile","EventiCustom"],b=Object.freeze(Object.defineProperty({__proto__:null,ClassiPersonalizzate:t,EsempioInterattivo:e,EventiCustom:r,Offset:a,PositionFixed:s,VersioneImpilabile:o,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{t as C,e as E,a as O,s as P,b as S,o as V};
