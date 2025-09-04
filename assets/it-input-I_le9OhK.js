import{e as P,i as R}from"./it-button-DjPat_nX.js";import{i as L,x as g,E as x,a as j}from"./lit-element-DvQWNfDj.js";import{o as m,n as c,e as I,r as f,t as O}from"./query-nkdlPDuA.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(o,t,e){return o?t(o):e==null?void 0:e(o)}function l(o,t,e,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,b;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,r);else for(var p=o.length-1;p>=0;p--)(b=o[p])&&(a=(i<3?b(a):i>3?b(t,e,a):b(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a}function n(o,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(o,t)}/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */const N=o=>{class t extends o{connectedCallback(){var r;super.connectedCallback(),this.closest("form")&&((r=this.closest("form"))==null||r.addEventListener("formdata",this._handleFormdata.bind(this)))}disconnectedCallback(){super.disconnectedCallback()}}return t};/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;(function(o){o.NO_ERROR="",o.INVALID="invalid",o.ERROR_REQUIRED="required",o.PATTERN="pattern",o.MINLENGTH="minlength",o.MAXLENGTH="maxlength"})(d||(d={}));const T=o=>{class t extends o{constructor(){super(...arguments),this._touched=!1}_getValidityMessage(r,i){return{[d.NO_ERROR]:"",[d.INVALID]:i[d.INVALID],[d.ERROR_REQUIRED]:i[d.ERROR_REQUIRED],[d.PATTERN]:i[d.PATTERN],[d.MINLENGTH]:i[d.MINLENGTH].replace("{minlength}",this.minlength.toString()),[d.MAXLENGTH]:i[d.MAXLENGTH].replace("{maxlength}",this.maxlength.toString())}[r]}_checkValidity(r,i=!0){if(this.customValidation)return;let a=i,b=a?this._getValidityMessage(d.NO_ERROR,r):this._getValidityMessage(d.INVALID,r);return(this.required||this._value&&(this.pattern||this.minlength>0||this.maxlength>0))&&(this.pattern&&(a=new RegExp(`^${this.pattern}$`,"u").test(this._value.toString()),a||(b=this._getValidityMessage(d.PATTERN,r))),typeof this.minlength<"u"&&this.minlength>0&&(a=a&&this._value.toString().length>=this.minlength,a||(b=this._getValidityMessage(d.MINLENGTH,r))),typeof this.maxlength<"u"&&this.maxlength>0&&(a=a&&this._value.toString().length<=this.maxlength,a||(b=this._getValidityMessage(d.MAXLENGTH,r))),this.required&&!this._value&&(a=!1,b=this._getValidityMessage(d.ERROR_REQUIRED,r))),this.invalid=!a,this.validityMessage=b,a}setCustomValidity(r){this.invalid=!!r,this.validityMessage=r}_handleBlur(){this._touched=!0,this.dispatchEvent(new FocusEvent("blur",{bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new FocusEvent("focus",{bubbles:!0,composed:!0}))}_handleClick(){this.dispatchEvent(new MouseEvent("click",{bubbles:!0,composed:!0}))}_handleChange(r){const i=r.target;let a;if(i instanceof HTMLInputElement)switch(i.type){case"checkbox":case"radio":a=i.checked;break;case"file":a=i.files;break;default:a=i.value}else i instanceof HTMLSelectElement&&i.multiple?a=Array.from(i.selectedOptions).map(b=>b.value):a=i.value;this.dispatchEvent(new CustomEvent("change",{detail:{value:a,el:i},bubbles:!0,composed:!0}))}}return t};class V extends R{update(t,[e]){const r=t.element;for(const[i,a]of Object.entries(e))a!=null?r.setAttribute(i,a):r.removeAttribute(i);return null}render(t){return null}}const E=P(V);function q(o){var t,e,r="";if(typeof o=="string"||typeof o=="number")r+=o;else if(typeof o=="object")if(Array.isArray(o)){var i=o.length;for(t=0;t<i;t++)o[t]&&(e=q(o[t]))&&(r&&(r+=" "),r+=e)}else for(e in o)o[e]&&(r&&(r+=" "),r+=e);return r}function A(){for(var o,t,e=0,r="",i=arguments.length;e<i;e++)(o=arguments[e])&&(t=q(o))&&(r&&(r+=" "),r+=t);return r}const y=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:u}=window;let h,k="ltr",$="en";const C=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function M(){C&&(k=document.documentElement.dir||"ltr",$=document.documentElement.lang||navigator.language),[...y.keys()].forEach(o=>{const t=o;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(C){const o=new MutationObserver(M);k=document.documentElement.dir||"ltr",$=document.documentElement.lang||navigator.language,o.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function S(...o){o.forEach(t=>{const e=t.$code.toLowerCase();u.has(e)?u.set(e,{...u.get(e),...t}):u.set(e,t),h||(h=t)}),M()}window.registerTranslation=S;class B{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){y.add(this.host)}hostDisconnected(){y.delete(this.host)}dir(){return`${this.host.dir||k}`.toLowerCase()}lang(){return`${this.host.lang||$}`.toLowerCase()}getTranslationData(t){var p;const e=new Intl.Locale(t.replace(/_/g,"-")),r=e==null?void 0:e.language.toLowerCase(),i=((p=e==null?void 0:e.region)==null?void 0:p.toLowerCase())??"",a=u.get(`${r}-${i}`),b=u.get(r);return{locale:e,language:r,region:i,primary:a,secondary:b}}exists(t,e){const{primary:r,secondary:i}=this.getTranslationData(e.lang??this.lang()),a={includeFallback:!1,...e};return!!(r&&r[t]||i&&i[t]||a.includeFallback&&h&&h[t])}term(t,...e){const{primary:r,secondary:i}=this.getTranslationData(this.lang());let a;if(r&&r[t])a=r[t];else if(i&&i[t])a=i[t];else if(h&&h[t])a=h[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof a=="function"?a(...e):a}date(t,e){const r=new Date(t);return new Intl.DateTimeFormat(this.lang(),e).format(r)}number(t,e){const r=Number(t);return Number.isNaN(r)?"":new Intl.NumberFormat(this.lang(),e).format(r)}relativeTime(t,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(t,e)}}const F=o=>class extends o{constructor(){super(...arguments),this.localize=new B(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,e){return this.localize.date(t,e)}$n(t,e){return this.localize.number(t,e)}};class D{constructor(t){this.tag=t}format(t,e){return[`[${this.tag}] ${e}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class H extends j{constructor(){super(),this.composeClass=A,this.logger=new D(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const e of this.getAttributeNames())e==="it-role"?t.role=this.getAttribute(e):e.startsWith("it-aria-")&&(t[e.replace(/^it-/,"")]=this.getAttribute(e));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}connectedCallback(){var e;super.connectedCallback();const t=((e=this.id)==null?void 0:e.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const U=F(H),v=(o,t)=>{let e="",r=!1;for(let i=0;i<t.length;i+=1){r=!0;for(let a=0;a<o&&a+i+o<t.length;a+=1)r=r&&t.charAt(a+i)===t.charAt(a+i+o);r?(i+=o-1,r=!1):e+=t.charAt(i)}return e},G=(o,t)=>{let e=0;if(o.trim().length===0)return-2;if(o.length<t)return-1;e+=o.length*4,e+=v(1,o).length-o.length,e+=v(2,o).length-o.length,e+=v(3,o).length-o.length,e+=v(4,o).length-o.length,o.match(/(.*[0-9].*[0-9].*[0-9])/)&&(e+=5);const r=/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/;return o.match(r)&&(e+=5),o.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(e+=10),o.match(/([a-zA-Z])/)&&o.match(/([0-9])/)&&(e+=15),o.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&o.match(/([0-9])/)&&(e+=15),o.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&o.match(/([a-zA-Z])/)&&(e+=15),(o.match(/^\w+$/)||o.match(/^\d+$/))&&(e-=10),e>100&&(e=100),e<0&&(e=0),e},Z=o=>o===-1||o===-2||o<26?"danger":o<51?"warning":(o<76,"success"),Q=(o,t)=>o===-1?t.shortPass:o===-2?"":o<26||o<51?t.badPass:o<76?t.goodPass:t.strongPass,w=[{key:"length",text:o=>o.suggestionLength.replace("{minLength}",o.minimumLength.toString()),test:(o,t)=>o.length>=t.minimumLength},{key:"uppercase",text:o=>o.suggestionUppercase,test:o=>/[A-Z]/.test(o)},{key:"lowercase",text:o=>o.suggestionLowercase,test:o=>/[a-z]/.test(o)},{key:"number",text:o=>o.suggestionNumber,test:o=>/[0-9]/.test(o)},{key:"special",text:o=>o.suggestionSpecial,test:o=>/[^A-Za-z0-9]/.test(o)}],X=(o,t,e)=>{let r=0;const i=o.length;return o.forEach(a=>{a.test(t,e)&&(r+=1)}),{completedCount:r,totalCount:i}},W={$code:"it",$name:"Italiano",$dir:"ltr",showHidePassword:"Mostra/Nascondi Password.",shortPass:"Password troppo breve.",badPass:"Password debole.",goodPass:"Password abbastanza sicura.",strongPass:"Password sicura.",ariaLabelPasswordMeter:"Robustezza della password",passwordSuggestionsLabel:"Suggerimenti per una buona password:",passwordSuggestionLength:"Almeno {minLength} caratteri.",passwordSuggestionUppercase:"Una o più maiuscole.",passwordSuggestionLowercase:"Una o più minuscole.",passwordSuggestionNumber:"Uno o più numeri.",passwordSuggestionSpecial:"Uno o più caratteri speciali.",passwordSuggestionFollowed:"suggerimenti seguiti",passwordSuggestionFollowedPlural:"suggerimenti seguiti",passwordSuggestionOf:"di",passwordSuggestionMetLabel:"Soddisfatto:",validityRequired:"Questo campo è obbligatorio.",validityInvalid:"Il valore non è corretto.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};var J=L`@charset "UTF-8";
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** NEUTRAL 1 ****************************************/
/***************************** NEUTRAL 2 ****************************************/
/***************************** NEUTRAL 2 / 3 ****************************************/
.form-check [type=checkbox]:focus + label,
.form-check [type=radio]:focus + label {
  border-color: hsl(0, 0%, 0%) !important;
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
  outline: 3px solid transparent !important;
  outline-offset: 3px !important;
}

.form-check [type=checkbox]:focus[data-focus-mouse=true] + label,
.form-check [type=radio]:focus[data-focus-mouse=true] + label {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  border-top: 1px solid;
  opacity: 0.25;
}

p {
  margin-top: 0;
  margin-bottom: var(--bs-paragraph-spacing);
}

abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: var(--bs-spacing-s);
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: var(--bs-spacing-l);
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: var(--bs-spacing-s);
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: var(--bs-font-weight-strong);
}

dd {
  margin-bottom: var(--bs-spacing-xxs);
  margin-left: 0;
}

blockquote {
  margin: 0 0 var(--bs-spacing-s);
}

sub,
sup {
  position: relative;
  font-size: var(--bs-font-size-1);
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: var(--bs-color-link);
  text-decoration: underline;
  text-decoration-skip-ink: auto;
  text-underline-offset: 2px;
}
a:hover:not(.btn) {
  color: var(--bs-color-link-hover);
  text-decoration: underline;
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-size: 1em;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: var(--bs-paragraph-spacing);
  overflow: auto;
}
pre code {
  word-break: normal;
}

a > code {
  color: inherit;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: hsl(210, 17%, 44%);
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none !important;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  float: left;
  width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: calc(1.275rem + 0.3vw);
  line-height: inherit;
}
@media (min-width: 1200px) {
  legend {
    font-size: 1.5rem;
  }
}
legend + * {
  clear: left;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.btn {
  --bs-btn-padding-x: var(--bs-spacing-s);
  --bs-btn-padding-y: var(--bs-spacing-xs);
  --bs-btn-font-family: var(--bs-font-sans);
  --bs-btn-font-weight: var(--bs-font-weight-solid);
  --bs-btn-font-size: var(--bs-label-font-size);
  --bs-btn-line-height: var(--bs-font-line-height-3);
  --bs-btn-text-color: var(--bs-color-text-primary);
  --bs-btn-background: transparent;
  --bs-btn-border-size: 0;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: var(--bs-radius-smooth);
  --bs-btn-outline-border-size: 2px;
  --bs-btn-outline-border-color: transparent;
  --bs-btn-disabled-opacity: 0.5;
}

.btn {
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background: var(--bs-btn-background);
  box-shadow: var(--bs-btn-box-shadow, none);
  color: var(--bs-btn-text-color);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: initial;
  width: auto;
  transition: all var(--bs-transition-instant) ease-in-out;
  user-select: none;
}
.btn:disabled, .btn.disabled {
  opacity: var(--bs-btn-disabled-opacity);
  cursor: not-allowed;
  pointer-events: none;
}
.btn:focus-visible {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
}
.btn-check:focus-visible + .btn {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
}

.btn-link {
  --bs-btn-background: transparent;
  --bs-btn-border-color: transparent;
  text-decoration: underline;
}
.btn-link:hover {
  color: var(--bs-color-link-hover);
}

.btn-xs {
  --bs-btn-padding-x: var(--bs-spacing-xs);
  --bs-btn-padding-y: var(--bs-spacing-xs);
  --bs-btn-font-size: var(--bs-label-font-size-s);
  --bs-btn-line-height: var(--bs-font-line-height-1);
  --bs-rounded-icon-size: 20px;
}

.btn-lg {
  --bs-btn-padding-x: var(--bs-spacing-m);
  --bs-btn-padding-y: var(--bs-spacing-s);
  --bs-btn-font-size: var(--bs-label-font-size-m);
  --bs-btn-line-height: var(--bs-font-line-height-5);
}

.btn-progress {
  position: relative;
}

.btn-icon {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--bs-icon-spacing);
}

.btn-full {
  align-self: stretch;
  width: inherit;
  border: none;
  box-shadow: none;
}
@media (min-width: 992px) {
  .btn-full {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
}

.btn:disabled:hover,
.btn.disabled:hover {
  cursor: not-allowed;
}

.btn-primary,
a.btn-primary {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-primary);
}
.btn-primary:hover,
a.btn-primary:hover {
  --bs-btn-background: var(--bs-color-background-primary-hover);
}
.btn-primary:active,
a.btn-primary:active {
  --bs-btn-background: var(--bs-color-background-primary-active);
}
.btn-primary.btn-progress,
a.btn-primary.btn-progress {
  border-color: hsl(210, 76%, 67%);
  opacity: 1;
  background-color: hsl(210, 76%, 67%);
}

.btn-secondary,
a.btn-secondary {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-secondary);
}
.btn-secondary:hover,
a.btn-secondary:hover {
  --bs-btn-background: var(--bs-color-background-secondary-hover);
}
.btn-secondary:active,
a.btn-secondary:active {
  --bs-btn-background: var(--bs-color-background-secondary-active);
}
.btn-secondary:disabled.btn-progress, .btn-secondary.disabled.btn-progress,
a.btn-secondary:disabled.btn-progress,
a.btn-secondary.disabled.btn-progress {
  border-color: hsl(210, 12%, 52%);
  opacity: 1;
  background-color: hsl(210, 12%, 52%);
}

.btn-success,
a.btn-success {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-success);
}
.btn-success:hover,
a.btn-success:hover {
  --bs-btn-background: var(--bs-color-background-success-hover);
}
.btn-success:active,
a.btn-success:active {
  --bs-btn-background: var(--bs-color-background-success-active);
}

.btn-warning,
a.btn-warning {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-warning);
}
.btn-warning:hover,
a.btn-warning:hover {
  --bs-btn-background: var(--bs-color-background-warning-hover);
}
.btn-warning:active,
a.btn-warning:active {
  --bs-btn-background: var(--bs-color-background-warning-active);
}

.btn-danger,
a.btn-danger {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-danger);
}
.btn-danger:hover,
a.btn-danger:hover {
  --bs-btn-background: var(--bs-color-background-danger-hover);
}
.btn-danger:active,
a.btn-danger:active {
  --bs-btn-background: var(--bs-color-background-danger-active);
}

.btn[class*=btn-outline-] {
  --bs-btn-box-shadow: inset 0 0 0 var(--bs-btn-outline-border-size) var(--bs-btn-outline-border-color);
}

.btn-outline-primary,
a.btn-outline-primary {
  --bs-btn-outline-border-color: var(--bs-color-border-primary);
  --bs-btn-text-color: var(--bs-color-text-primary);
}
.btn-outline-primary:hover,
a.btn-outline-primary:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-primary-hover);
  --bs-btn-text-color: var(--bs-color-link-hover);
}
.btn-outline-primary:active,
a.btn-outline-primary:active {
  --bs-btn-outline-border-color: var(--bs-color-border-primary-active);
  --bs-btn-text-color: var(--bs-color-link-active);
}
.btn-outline-secondary,
a.btn-outline-secondary {
  --bs-btn-outline-border-color: var(--bs-color-border-secondary);
  --bs-btn-text-color: var(--bs-color-text-secondary);
}
.btn-outline-secondary:hover,
a.btn-outline-secondary:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-secondary-hover);
  --bs-btn-text-color: var(--bs-color-text-secondary-hover);
}
.btn-outline-secondary:active,
a.btn-outline-secondary:active {
  --bs-btn-outline-border-color: var(--bs-color-border-secondary-active);
  --bs-btn-text-color: var(--bs-color-text-secondary-active);
}
.btn-outline-success,
a.btn-outline-success {
  --bs-btn-outline-border-color: var(--bs-color-border-success);
  --bs-btn-text-color: var(--bs-color-text-success);
}
.btn-outline-success:hover,
a.btn-outline-success:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-success-hover);
  --bs-btn-text-color: var(--bs-color-text-success-hover);
}
.btn-outline-success:active,
a.btn-outline-success:active {
  --bs-btn-outline-border-color: var(--bs-color-border-success-active);
  --bs-btn-text-color: var(--bs-color-text-success-active);
}
.btn-outline-warning,
a.btn-outline-warning {
  --bs-btn-outline-border-color: var(--bs-color-border-warning);
  --bs-btn-text-color: var(--bs-color-text-warning);
}
.btn-outline-warning:hover,
a.btn-outline-warning:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-warning-hover);
  --bs-btn-text-color: var(--bs-color-text-warning-hover);
}
.btn-outline-warning:active,
a.btn-outline-warning:active {
  --bs-btn-outline-border-color: var(--bs-color-border-warning-active);
  --bs-btn-text-color: var(--bs-color-text-warning-active);
}
.btn-outline-danger,
a.btn-outline-danger {
  --bs-btn-outline-border-color: var(--bs-color-border-danger);
  --bs-btn-text-color: var(--bs-color-text-danger);
}
.btn-outline-danger:hover,
a.btn-outline-danger:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-danger-hover);
  --bs-btn-text-color: var(--bs-color-text-danger-hover);
}
.btn-outline-danger:active,
a.btn-outline-danger:active {
  --bs-btn-outline-border-color: var(--bs-color-border-danger-active);
  --bs-btn-text-color: var(--bs-color-text-danger-active);
}

.bg-dark .btn-link {
  --bs-btn-text-color: var(--bs-color-text-inverse);
}
.bg-dark .btn-outline-primary,
.bg-dark a.btn-outline-primary,
.bg-dark .btn-outline-secondary,
.bg-dark a.btn-outline-secondary {
  --bs-btn-outline-border-color: var(--bs-color-border-inverse);
  --bs-btn-text-color: var(--bs-color-text-inverse);
}

.btn-close {
  position: relative;
  box-sizing: content-box;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  opacity: 0.5;
  background-color: transparent;
  color: var(--bs-color-text-base);
}
.btn-close .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn-close:hover {
  opacity: 1;
  text-decoration: none;
}
.btn-close:focus {
  opacity: 1;
}
.btn-close:disabled, .btn-close.disabled {
  opacity: var(--bs-btn-disabled-opacity);
  pointer-events: none;
  user-select: none;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.row {
  --bs-gutter-x: 24px;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-sm-1,
  .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-sm-2,
  .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-sm-2,
  .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-sm-3,
  .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .g-sm-3,
  .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .g-sm-4,
  .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-sm-4,
  .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-md-1,
  .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-md-2,
  .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-md-2,
  .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-md-3,
  .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .g-md-3,
  .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .g-md-4,
  .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-md-4,
  .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-lg-1,
  .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-lg-2,
  .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-lg-2,
  .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-lg-3,
  .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .g-lg-3,
  .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .g-lg-4,
  .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-lg-4,
  .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xl-1,
  .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xl-2,
  .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xl-2,
  .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xl-3,
  .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xl-3,
  .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xl-4,
  .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xl-4,
  .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.row.variable-gutters {
  margin-right: -12px;
  margin-left: -12px;
  margin-right: -6px;
  margin-left: -6px;
}
.row.variable-gutters > .col,
.row.variable-gutters > [class*=col-] {
  padding-right: 12px;
  padding-left: 12px;
}
.row.variable-gutters > .col,
.row.variable-gutters > [class*=col-] {
  padding-right: 6px;
  padding-left: 6px;
}
@media (min-width: 576px) {
  .row.variable-gutters {
    margin-right: -6px;
    margin-left: -6px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 6px;
    padding-left: 6px;
  }
}
@media (min-width: 768px) {
  .row.variable-gutters {
    margin-right: -10px;
    margin-left: -10px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 10px;
    padding-left: 10px;
  }
}
@media (min-width: 992px) {
  .row.variable-gutters {
    margin-right: -12px;
    margin-left: -12px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 12px;
    padding-left: 12px;
  }
}
@media (min-width: 1200px) {
  .row.variable-gutters {
    margin-right: -12px;
    margin-left: -12px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 12px;
    padding-left: 12px;
  }
}
@media (min-width: 1400px) {
  .row.variable-gutters {
    margin-right: -14px;
    margin-left: -14px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 14px;
    padding-left: 14px;
  }
}

.row.row-column-border > [class^=col-] {
  padding-top: var(--bs-spacing-l);
  padding-bottom: var(--bs-spacing-l);
  border-top: var(--bs-border-base) solid var(--bs-color-border-subtle);
}
.row.row-column-border > [class^=col-]:first-child {
  border: none;
}
.row.row-column-border > [class^=col-] .navbar {
  padding: 0;
}
.row.row-column-border > [class^=col-] .navbar .menu-wrapper .nav-link {
  padding-right: 0;
}
.row.row-column-menu-left > [class^=col-]:first-child {
  padding: var(--bs-spacing-s) 0;
}
.row.row-column-menu-right > [class^=col-]:last-child {
  padding: var(--bs-spacing-s) 0;
}
.row.row-card {
  background-color: var(--bs-color-background-inverse);
}
@media (min-width: 992px) {
  .row.row-column-border {
    margin-top: 1rem;
    border-top: var(--bs-border-base) solid var(--bs-color-border-subtle);
  }
  .row.row-column-border > [class^=col-] {
    padding: 3rem 3rem;
    border-top: none;
    border-left: var(--bs-border-base) solid var(--bs-color-border-subtle);
  }
  .row.row-column-border > [class^=col-]:first-child {
    border: none;
    padding-left: 0;
  }
  .row.row-column-border > [class^=col-] .navbar {
    padding: 8px 0;
  }
  .row.row-column-border > [class^=col-] .navbar .menu-wrapper {
    padding: 0;
  }
  .row.row-column-menu-left > [class^=col-]:first-child {
    padding: 0;
  }
  .row.row-column-menu-right > [class^=col-]:last-child {
    padding: 0;
  }
}
.row.row-full-width {
  max-width: 100vw;
  margin: 0 calc(-50vw + 50%);
}
.row.row-full-width > * {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.row.row-full-width > * img {
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: cover;
}
.row.row-title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (min-width: 576px) {
  .row.row-title {
    flex-direction: row;
    align-items: flex-start;
  }
}
.row.row-border h1 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h2 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h3 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h4 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h5 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h6 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
@media (min-width: 576px) {
  .row.row-border {
    border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
    padding-bottom: var(--bs-spacing-s);
    margin-bottom: var(--bs-spacing-s);
  }
  .row.row-border h1 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h2 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h3 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h4 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h5 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h6 {
    border: none;
    margin: 0;
    padding: 0;
  }
}
.row.row-calendar {
  display: block;
}

.sticky-wrapper.is-sticky {
  position: fixed;
}
.sticky-wrapper.is-sticky.navbar-wrapper {
  z-index: 1;
  left: 0;
  right: 0;
  width: auto;
}
.sticky-wrapper.is-sticky.navbar-wrapper .navbar {
  padding-top: var(--bs-spacing-s);
  padding-bottom: var(--bs-spacing-s);
  border-top: var(--bs-border-base) solid var(--bs-color-border-subtle);
}
.sticky-wrapper.is-sticky.navbar-wrapper.sticky-expanded {
  z-index: auto;
}
@media (min-width: 992px) {
  .sticky-wrapper.is-sticky.navbar-wrapper {
    z-index: auto;
    left: auto;
    right: auto;
    width: unset;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper .navbar {
    border: none;
    background-color: transparent;
    padding: 0;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper .navbar .menu-wrapper {
    padding: 0;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper .navbar .menu-wrapper .nav-link {
    padding-right: 0;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper .navbar.it-bottom-navscroll {
    border: none;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper.at-bottom {
    position: absolute;
    top: auto !important;
    bottom: 0;
  }
}
.sticky-wrapper.navbar-wrapper .navbar.it-top-navscroll, .sticky-wrapper.navbar-wrapper .navbar.it-bottom-navscroll {
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 16px;
  }
}
.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: var(--bs-progress-height) var(--bs-progress-height);
}

.progress-bar-animated {
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    animation: none;
  }
}

@keyframes progressBarIndeterminate {
  0% {
    left: -5%;
  }
  50% {
    width: 66%;
  }
  100% {
    left: 100%;
    width: 33%;
  }
}
.progress {
  --bs-progress-height: 16px;
  --bs-progress-font-size: 0.75rem;
  --bs-progress-bg: hsl(0, 0%, 90%);
  --bs-progress-border-radius: 0;
  --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-progress-bar-color: hsl(0, 0%, 100%);
  --bs-progress-bar-bg: hsl(210, 100%, 40%);
  --bs-progress-bar-transition: width 0.6s ease;
  display: flex;
  overflow: hidden;
  font-size: var(--bs-progress-font-size);
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
  height: 4px;
  box-shadow: none;
}
.progress.progress-color {
  background-color: hsl(210, 3%, 85%);
}
.progress.progress-indeterminate {
  position: relative;
}
.progress.progress-indeterminate .progress-bar {
  width: 0;
  animation: progressBarIndeterminate 1.4s cubic-bezier(0.77, 0, 0.175, 1) infinite forwards;
  position: absolute;
  top: 0;
  bottom: 0;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--bs-progress-bar-color);
  text-align: center;
  white-space: nowrap;
  transition: var(--bs-progress-bar-transition);
  background-color: hsl(210, 17%, 44%);
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-label {
  text-align: right;
  font-size: 0.75rem;
  color: hsl(0, 0%, 10%);
  font-weight: 500;
}

.btn-progress .progress {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  border-radius: 0 0 4px 4px;
}
.btn-progress .progress-bar {
  height: 4px;
}

@media (min-width: 576px) {
  .progress-bar-label {
    font-size: 0.75rem;
  }
}
body {
  font-family: var(--bs-font-sans);
}

p,
ul,
ol,
dl {
  font-size: var(--bs-body-font-size);
  line-height: var(--bs-body-line-height);
}

caption,
figcaption {
  font-size: var(--bs-caption-font-size);
  line-height: var(--bs-caption-line-height);
}

b,
strong {
  font-weight: var(--bs-font-weight-strong);
}

mark,
code {
  padding: 0 var(--bs-spacing-3xs);
}

mark {
  background-color: var(--bs-highlight-background);
}

pre,
code,
kbd,
samp {
  border-radius: var(--bs-radius-smooth);
  font-family: var(--bs-font-mono);
}

ins,
del {
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--bs-spacing-3xs) var(--bs-spacing-m);
  font: var(--bs-body-font-size);
  text-decoration: none;
}

ins {
  background-color: var(--bs-ins-background);
  text-decoration: none;
}

del {
  background-color: var(--bs-del-background);
}

del::before,
ins::before {
  position: absolute;
  left: 0.5rem;
}

del::before {
  content: "−";
}

ins::before {
  content: "+";
}

kbd {
  margin: 0 2px;
  padding: 2px var(--bs-spacing-3xs);
  border: var(--bs-border-base) solid var(--bs-color-border-subtle);
  background-color: var(--bs-color-background-secondary-lighter);
  box-shadow: var(--bs-elevation-low), 0 2px 0 0 hsla(255, 0%, 100%, 0.7) inset;
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-font-size-1);
  font-weight: var(--bs-font-weight-solid);
  white-space: nowrap;
}
kbd kbd {
  padding: 0;
  font-size: var(--bs-code-font-size);
}

small,
.small {
  font-size: var(--bs-caption-font-size);
}

.x-small {
  font-size: var(--bs-font-size-1);
}

h1,
.h1 {
  font-size: var(--bs-heading-1-font-size);
}

h2,
.h2 {
  font-size: var(--bs-heading-2-font-size);
}

h3,
.h3 {
  font-size: var(--bs-heading-3-font-size);
}

h4,
.h4 {
  font-size: var(--bs-heading-4-font-size);
}

h5,
.h5 {
  font-size: var(--bs-heading-5-font-size);
}

h6,
.h6 {
  font-size: var(--bs-heading-6-font-size);
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 0;
  margin-bottom: var(--bs-heading-spacing);
  line-height: var(--bs-heading-line-height);
}
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h1, p + h1,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h1,
p + .h1,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h2,
p + h2,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h2,
p + .h2,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h3,
p + h3,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h3,
p + .h3,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h4,
p + h4,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h4,
p + .h4,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h5,
p + h5,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h5,
p + .h5,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h6,
p + h6,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h6,
p + .h6 {
  padding-top: var(--bs-spacing-s);
}

h1,
h2,
h3,
.h1,
.h2,
.h3 {
  font-weight: var(--bs-heading-font-weight);
}

h4,
h5,
h6,
.h4,
.h5,
.h6 {
  font-weight: var(--bs-heading-font-weight-weak);
}

h1,
.h1,
.display-1 {
  letter-spacing: -1px;
}

.font-serif {
  font-family: var(--bs-font-serif) !important;
}

.font-sans-serif {
  font-family: var(--bs-font-sans) !important;
}

.font-monospace {
  font-family: var(--bs-font-mono) !important;
}

.display-1 {
  font-size: var(--bs-display-font-size);
  font-weight: var(--bs-heading-font-weight);
  line-height: var(--bs-heading-line-height);
}

.lead {
  font-size: var(--bs-lead-font-size);
  font-weight: var(--bs-lead-font-weight);
  line-height: var(--bs-lead-line-height);
}

blockquote,
.blockquote {
  margin: var(--bs-spacing-m) 0;
  margin-left: var(--bs-spacin-inline-xs);
  padding: var(--bs-spacing-s);
  border-left: var(--bs-border-thick) solid var(--bs-border-color-secondary);
  font-size: var(--bs-body-font-size);
  line-height: var(--bs-body-line-height);
}
blockquote > :last-child,
.blockquote > :last-child {
  margin-bottom: 0;
}
blockquote.text-end,
.blockquote.text-end {
  margin-right: var(--bs-spacin-inline-xs);
  border-right: var(--bs-border-thick) solid var(--bs-border-color-secondary);
}
blockquote.text-center, blockquote.text-end, blockquote.blockquote-simple,
.blockquote.text-center,
.blockquote.text-end,
.blockquote.blockquote-simple {
  margin-left: 0;
  border-right: none;
  border-left: none;
}
blockquote.text-center, blockquote.blockquote-simple,
.blockquote.text-center,
.blockquote.blockquote-simple {
  padding: 0;
}
blockquote.blockquote-simple,
.blockquote.blockquote-simple {
  font-style: italic;
}
blockquote.blockquote-card,
.blockquote.blockquote-card {
  margin-left: 0;
  padding: var(--bs-spacing-m);
  background-color: var(--bs-color-background-inverse);
  box-shadow: var(--bs-elevation-low);
}
blockquote.blockquote-card .blockquote-footer,
.blockquote.blockquote-card .blockquote-footer {
  font-size: inherit;
}
blockquote.blockquote-card .blockquote-footer:before,
.blockquote.blockquote-card .blockquote-footer:before {
  content: none;
}
blockquote.blockquote-card.dark,
.blockquote.blockquote-card.dark {
  border-left: none;
  background-color: var(--bs-color-background-primary);
  color: var(--bs-color-text-inverse);
}
blockquote.blockquote-card.dark .blockquote-footer,
.blockquote.blockquote-card.dark .blockquote-footer {
  color: var(--bs-color-text-inverse);
}

.blockquote-footer {
  margin-top: 0;
  margin-bottom: var(--bs-spacing-s);
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-label-font-size);
}
.blockquote-footer::before {
  content: "— ";
}
.bg-dark .blockquote-footer {
  color: var(--bs-color-text-muted);
}

.initialism {
  font-size: var(--bs-label-font-size-s);
  text-transform: uppercase;
}

:root {
  --bs-form-control-height: 2.5rem;
  --bs-form-control-spacing: var(--bs-spacing-xxs);
  --bs-form-control-background-color: var(--bs-color-background-inverse);
  --bs-form-control-border-color: var(--bs-color-border-secondary);
  --bs-form-control-border-radius: var(--bs-radius-smooth);
  --bs-form-control-placeholder-color: var(--bs-color-text-muted);
  --bs-form-control-label-color: var(--bs-color-text-secondary);
  --bs-form-control-text-color: var(--bs-color-text-base);
  --bs-form-control-font-size: var(--bs-body-font-size);
  --bs-form-group-spacing-y: var(--bs-spacing-m);
  --bs-form-checkbox-border-color: var(--bs-color-border-secondary);
  --bs-form-checkbox-border-radius: var(--bs-radius-smooth);
  --bs-form-checked-color: var(--bs-color-background-primary);
}

input[readonly],
textarea[readonly],
select[readonly] {
  --bs-form-control-border-color: var(--bs-color-border-subtle);
  --bs-form-control-background-color: var(--bs-color-background-muted);
  cursor: not-allowed;
}

input,
textarea,
select {
  display: block;
  width: 100%;
  padding: var(--bs-form-control-spacing);
  border: 1px solid var(--bs-form-control-border-color);
  border-radius: var(--bs-form-control-border-radius);
  background-color: var(--bs-form-control-background-color);
  color: var(--bs-form-control-text-color);
  font-size: var(--bs-form-control-font-size);
}
input.disabled, input:disabled,
textarea.disabled,
textarea:disabled,
select.disabled,
select:disabled {
  border-color: var(--bs-color-border-disabled);
  opacity: 1;
  background-color: var(--bs-color-background-disabled);
  color: var(--bs-color-text-disabled);
}

input:focus,
textarea:focus {
  outline: 3px solid transparent;
  outline-offset: 3px;
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
}

input::file-selector-button {
  margin: -0.375rem -0.75rem;
  padding: 0.375rem 0.75rem;
  border-width: 0;
  border-style: solid;
  border-radius: 0;
  border-color: inherit;
  color: hsl(0, 0%, 10%);
  pointer-events: none;
  margin-inline-end: 0.75rem;
  border-inline-end-width: 0;
  background-color: hsl(0, 0%, 100%);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  input::file-selector-button {
    transition: none;
  }
}
input:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: rgb(242.25, 242.25, 242.25);
}
input[type=file] {
  overflow: hidden;
}
input[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
input::-webkit-date-and-time-value {
  height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='hsl%280, 0%, 15%%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right var(--bs-form-control-spacing) center;
  background-size: 16px 12px;
  appearance: none;
}
select:focus {
  border-color: hsl(210, 17%, 44%);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 102, 204, 0.25);
}
select[multiple], select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
select:disabled {
  background-color: hsl(0, 0%, 90%);
}
select:disabled:hover {
  cursor: not-allowed;
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 hsl(0, 0%, 10%);
}
select option {
  font-weight: normal;
}
select:disabled {
  opacity: 1;
  background-color: hsl(210, 3%, 85%);
}

textarea {
  height: auto;
  font-size: var(--bs-body-font-size);
  line-height: 1.5;
}

label {
  display: inline-block;
  width: auto;
  max-width: 100%;
  margin-bottom: var(--bs-spacing-xxs);
  color: var(--bs-form-control-label-color);
  font-size: var(--bs-label-font-size-s);
  font-weight: var(--bs-font-weight-solid);
  line-height: var(--bs-label-line-height);
}

input,
textarea {
  outline: 0;
  box-shadow: none;
  transition: none;
  appearance: none;
}

input[type=date],
input[type=datetime-local],
input[type=time] {
  display: flex;
}

fieldset legend {
  z-index: 1;
  display: block;
  width: auto;
  max-width: 100%;
  margin-bottom: 0;
  padding: 0 var(--bs-form-input-spacing-x);
  float: none;
  background-color: transparent;
  color: var(--bs-form-input-color);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: calc(2.5rem - 1px);
  transition: 0.2s ease-out;
  cursor: text;
}

::placeholder {
  color: var(--bs-form-control-placeholder-color);
}

input::-webkit-datetime-edit {
  background-color: var(--bs-color-background-primary-lighter);
  color: var(--bs-form-contro-text-color);
}

.form-group {
  position: relative;
  margin-bottom: var(--bs-form-group-spacing-y);
}
.form-group label.input-symbol-label:not(.active) {
  left: 2.25rem;
}
.form-group small.form-text {
  margin: 0;
  font-size: 0.875rem;
}
.form-group input[type=time] ~ label {
  font-size: 0.875rem;
}

.form-text {
  margin: var(--bs-spacing-xxs) 0;
  color: var(--bs-color-text-secondary);
}

.form-group.active .form-file-name {
  padding-bottom: 1.95rem;
}

.warning-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  color: var(--bs-color-text-warning);
  font-size: 0.75rem;
}

.valid-feedback,
.invalid-feedback,
.warning-feedback {
  margin-left: 0.5rem;
}

.input-group .input-group-text .btn {
  border-radius: var(--bs-form-control-border-radius) 0 0 var(--bs-form-control-border-radius);
}
.input-group .input-group-append {
  margin-left: 0;
}
.input-group .input-group-append .btn {
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom: 1px solid hsl(210, 17%, 44%);
  border-radius: 0 var(--bs-form-control-border-radius) var(--bs-form-control-border-radius) 0;
}

.form-check {
  position: relative;
  margin-bottom: var(--bs-spacing-s);
  padding-left: 0;
}
.form-check + .form-check {
  margin-top: var(--bs-spacing-s);
}
.form-check [type=checkbox],
.form-check [type=radio] {
  position: absolute;
  height: 100%;
  margin-top: 0;
  margin-left: 0;
  opacity: 0;
}
.form-check [type=checkbox] + label,
.form-check [type=radio] + label {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 26px;
  font-size: var(--bs-label-font-size);
  font-weight: var(--bs-font-weight-solid);
  line-height: 1;
  cursor: pointer;
  user-select: none;
}
@media (min-width: 576px) {
  .form-check [type=checkbox] + label,
  .form-check [type=radio] + label {
    font-size: var(--bs-label-font-size-m);
  }
}
.form-check input[type=checkbox] + label::after,
.form-check input[type=checkbox] + label::before {
  position: absolute;
  left: 0;
  z-index: 1;
  content: "";
  border-width: 2px;
  border-style: solid;
  transition: all var(--bs-transition-instant) ease-out;
}
.form-check input[type=checkbox] + label::after {
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: var(--bs-form-control-border-radius);
}
.form-check input[type=checkbox]:checked + label::before {
  top: 3px;
  left: 3px;
  width: 6px;
  height: 12px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent var(--bs-color-border-inverse) var(--bs-color-border-inverse) transparent;
  opacity: 1;
  transform: rotate(40deg);
  transform-origin: 100% 100%;
  backface-visibility: hidden;
}
.form-check input[type=checkbox]:checked + label::after {
  z-index: 0;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
}
.form-check input[type=checkbox]:not(:checked) + label::after {
  z-index: 0;
  border-color: var(--bs-form-checkbox-border-color);
  background-color: transparent;
}
.form-check input[type=checkbox]:not(:checked) + label::before {
  top: 10px;
  left: 6px;
  width: 0;
  height: 0;
  border-color: transparent;
}
.form-check input[type=checkbox]:disabled + label {
  opacity: 1;
  cursor: not-allowed;
}
.form-check input[type=checkbox]:disabled:not(:checked) + label::after {
  border-color: var(--bs-color-border-disabled);
  background-color: transparent;
}
.form-check input[type=checkbox]:disabled:checked + label::after {
  border-color: var(--bs-color-border-disabled);
  background-color: var(--bs-color-border-disabled);
}
.form-check input[type=radio] + label::after, .form-check input[type=radio] + label::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  content: "";
  width: 20px;
  height: 20px;
  border-width: 2px;
  border-style: solid;
  border-radius: var(--bs-radius-rounded);
  transition: all var(--bs-transition-instant) ease-out;
}
.form-check input[type=radio]:not(:checked) + label::after, .form-check input[type=radio]:not(:checked) + label::before {
  border-color: var(var(--bs-form-checkbox-border-color));
}
.form-check input[type=radio]:not(:checked) + label:after {
  z-index: -1;
  transform: scale(0);
}
.form-check input[type=radio]:checked + label::after {
  z-index: 0;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
  transform: scale(0.64);
}
.form-check input[type=radio]:checked + label::before {
  border-color: var(--bs-form-checked-color);
}
.form-check input[type=radio]:disabled + label {
  cursor: not-allowed;
}
.form-check input[type=radio]:disabled:not(:checked) + label::after, .form-check input[type=radio]:disabled:not(:checked) + label::before {
  border-color: var(--bs-color-border-disabled);
}
.form-check input[type=radio]:disabled:checked + label::after {
  border-color: var(--bs-color-border-disabled);
  background-color: var(--bs-color-border-disabled);
}
.form-check input[type=radio]:disabled:checked + label::before {
  border-color: var(--bs-color-border-disabled);
}
.form-check.form-check-group {
  margin-bottom: 1rem;
  padding: 0 0 1rem 0;
  box-shadow: inset 0 -1px 0 0 rgba(1, 1, 1, 0.1);
}
.form-check.form-check-group input[type=checkbox] + label,
.form-check.form-check-group input[type=radio] + label {
  padding-right: 3.25rem;
  padding-left: 0;
}
.form-check.form-check-group input[type=checkbox] + label::after, .form-check.form-check-group input[type=checkbox] + label::before,
.form-check.form-check-group input[type=radio] + label::after,
.form-check.form-check-group input[type=radio] + label::before {
  right: 0;
  left: auto;
}
.form-check.form-check-group input[type=checkbox]:checked + label::before {
  right: 11px;
}
.form-check.form-check-group input[type=radio]:checked + label::before {
  right: 0;
}
.form-check.form-check-group .form-text {
  display: block;
  margin-bottom: 0.5rem;
  padding-right: 3.25rem;
}
.form-check.form-check-group input.semi-checked:not(:checked) + label::before {
  right: 4px;
  left: auto;
}
.form-check input.semi-checked:not(:checked) + label::before {
  top: 9px;
  left: 4px;
  width: 12px;
  height: 2px;
  border-width: 0;
  border-style: none;
  border-color: transparent;
  opacity: 1;
  background: var(--bs-color-background-inverse);
  transform: none;
  backface-visibility: hidden;
}
.form-check input.semi-checked:not(:checked) + label::after {
  z-index: 0;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
}

@media (prefers-reduced-motion: reduce) {
  fieldset legend,
  .form-group label,
  textarea,
  .form-check [type=checkbox],
  .form-check [type=radio],
  .form-check [type=checkbox] + label::after,
  .form-check [type=checkbox] + label::before,
  .form-check [type=radio] + label::after,
  .form-check [type=radio] + label::before,
  .toggles label input[type=checkbox] + .lever::before,
  .toggles label input[type=checkbox] + .lever::after {
    transition: none !important;
  }
}
.form-check [type=checkbox]:focus + label,
.form-check [type=radio]:focus + label {
  border-color: hsl(0, 0%, 0%) !important;
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
  outline: 3px solid transparent !important;
  outline-offset: 3px !important;
}

.form-check [type=checkbox]:focus[data-focus-mouse=true] + label,
.form-check [type=radio]:focus[data-focus-mouse=true] + label {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.form-control-plaintext {
  border: 0;
  --bs-form-control-border-color: transparent;
  --bs-form-control-border-radius: 0;
  --bs-form-control-background-color: transparent;
  --bs-form-control-spacing: 0;
}
.form-control-plaintext:focus {
  outline: 0;
  box-shadow: none !important;
}
.form-control-plaintext + label {
  cursor: text;
}

.form-control {
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 45px 30%;
}
.form-control:disabled {
  cursor: not-allowed;
  background: var(--bs-color-background-disabled);
  border: 0;
  color: var(--bs-color-text-disabled);
}
.was-validated .form-control:valid, .form-control.is-valid {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23008055' viewBox='0 0 192 512'%3E%3Cpath d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z'/%3E%3C/svg%3E");
}
.was-validated .form-control:invalid, .form-control.is-invalid {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23cc334d' viewBox='0 0 384 512'%3E%3Cpath d='M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z'/%3E%3C/svg%3E");
  border-color: var(--bs-color-border-danger);
}
.was-validated .form-control:invalid[type=number], .form-control.is-invalid[type=number] {
  background-size: 80px 30%;
}
.form-control.warning {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2%2012C2%206.47715%206.47715%202%2012%202C14.6522%202%2017.1957%203.05357%2019.0711%204.92893C20.9464%206.8043%2022%209.34784%2022%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012ZM3%2012C3%2016.9706%207.02944%2021%2012%2021C16.9706%2021%2021%2016.9706%2021%2012C21%207.02944%2016.9706%203%2012%203C7.02944%203%203%207.02944%203%2012ZM11.5%2014.2V5.7H12.7V14.2H11.5ZM12.6%2018.3V16.5H11.4V18.3H12.6Z%22/%3E%0A%3C/svg%3E") no-repeat;
  border-color: var(--bs-color-border-warning);
}
.form-control.is-valid ~ .warning-feedback {
  display: block;
}

.form-control-sm {
  --bs-form-control-spacing: var(--bs-spacing-xxs) var(--bs-spacing-3xs);
  --bs-form-control-font-size: var(--bs-label-font-size);
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  --bs-form-control-font-size: var(--bs-lead-font-size);
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: 2.5rem;
  border: 1px solid hsl(210, 17%, 44%);
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem);
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem);
}

.form-control-color {
  width: 3rem;
  height: 2.5rem;
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: 0;
}
.form-control-color::-webkit-color-swatch {
  border-radius: 0;
}
.form-control-color.form-control-sm {
  height: calc(1.5em + 0.5rem);
}
.form-control-color.form-control-lg {
  height: calc(1.5em + 1rem);
}

.password-icon {
  position: absolute;
  top: calc(var(--bs-form-control-spacing) * 4.5);
  right: var(--bs-form-control-spacing);
  z-index: 10;
  padding: 0 var(--bs-spacing-xxs);
  background-color: var(--bs-form-control-background-color);
  cursor: pointer;
}
.password-icon .icon {
  fill: var(--bs-icon-primary);
}

.password-meter {
  bottom: -12px;
  left: 0;
  width: 100%;
  max-width: 200px;
  height: 4px;
}
.password-meter .col-3 {
  height: 4px;
}

.password-caps {
  display: none;
}
.password-caps.show {
  display: block;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > input {
  border-left-width: 0;
}
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus,
.input-group > .form-floating:focus-within {
  z-index: 5;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 5;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: var(--bs-form-control-spacing) 0 var(--bs-form-control-spacing) var(--bs-form-control-spacing);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-font-weight-solid);
  color: var(--bs-form-inpunt-text-color);
  background-color: var(--bs-form-control-background-color);
  text-align: center;
  white-space: nowrap;
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: var(--bs-form-control-border-color);
  border-radius: var(--bs-form-control-border-radius);
}
.disabled .input-group-text {
  background-color: var(--bs-color-background-disabled);
  border-color: var(--bs-color-border-disabled);
  color: var(--bs-color-text-disabled);
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .form-floating:not(:first-child) > .form-control,
.input-group > .form-floating:not(:first-child) > .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.form-feedback {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
}
.form-feedback.just-validate-error-label {
  color: var(--bs-color-text-danger);
}

.input-group-text:has(~ [data-focus-mouse=true]:not(.btn)),
[data-focus-mouse=true]:not(.btn) ~ .input-group-text,
button:has(~ [data-focus-mouse=true]:not(.btn)),
[data-focus-mouse=true]:not(.btn) + button {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.input-group-text:has(~ .is-invalid),
.is-invalid ~ .input-group-text,
button:has(~ .is-invalid),
.is-invalid + button {
  border-color: var(--bs-color-border-danger) !important;
}

.sr-only-justvalidate-bi {
  display: none;
}

.just-validate-success-field {
  border-color: var(--bs-color-border-success) !important;
  padding-right: calc(1.5em + 0.75rem) !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23008055' viewBox='0 0 192 512'%3E%3Cpath d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z'/%3E%3C/svg%3E");
}

.input-group-text:has(~ .just-validate-success-field),
.just-validate-success-field ~ .input-group-text,
button:has(~ .just-validate-success-field),
.just-validate-success-field + button {
  border-color: var(--bs-color-border-success);
}

.just-validate-success-field + .input-group-text.align-buttons,
.is-invalid + .input-group-text.align-buttons {
  right: 30px;
}

.is-invalid + .input-group-text.align-buttons {
  bottom: 22px;
}

.autocomplete__wrapper .form-feedback.just-validate-error-label {
  position: absolute;
}

textarea.form-control {
  background-position: top 0.3em right 0.3em !important;
  background-size: 37px 30% !important;
}
textarea.is-invalid {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
textarea.just-validate-success-field {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

input[type=checkbox].just-validate-success-field + label,
input[type=radio].just-validate-success-field + label {
  color: var(--bs-color-text-success);
}

select.is-invalid {
  border: 1px solid var(--bs-color-border-danger);
}
select.just-validate-success-field {
  border: 1px solid var(--bs-color-border-success);
}

.position-absolute {
  position: absolute !important;
}

.w-100 {
  width: 100% !important;
}

.m-0 {
  margin: 0 !important;
}

.bg-muted {
  --bs-bg-opacity: 1;
  background-color: hsl(0, 0%, 96%) !important;
}

.bg-danger {
  --bs-bg-opacity: 1;
  background-color: hsl(350, 60%, 50%) !important;
}

.bg-warning {
  --bs-bg-opacity: 1;
  background-color: hsl(36, 100%, 30%) !important;
}

.bg-success {
  --bs-bg-opacity: 1;
  background-color: hsl(160, 100%, 25%) !important;
}

.border-start {
  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-end {
  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-white {
  --bs-border-opacity: 1;
  border-color: white !important;
}

.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}

.text-secondary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}

.text-success {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}

.text-info {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}

.text-warning {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}

.text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}

.text-light {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}

.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}

.text-black {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}

.text-white {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}

.text-100 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-100-rgb), var(--bs-text-opacity)) !important;
}

.text-200 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-200-rgb), var(--bs-text-opacity)) !important;
}

.text-300 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-300-rgb), var(--bs-text-opacity)) !important;
}

.text-400 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-400-rgb), var(--bs-text-opacity)) !important;
}

.text-500 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-500-rgb), var(--bs-text-opacity)) !important;
}

.text-600 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-600-rgb), var(--bs-text-opacity)) !important;
}

.text-700 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-700-rgb), var(--bs-text-opacity)) !important;
}

.text-800 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-800-rgb), var(--bs-text-opacity)) !important;
}

.text-900 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-900-rgb), var(--bs-text-opacity)) !important;
}

.text-body {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: hsl(210, 17%, 44%) !important;
}

.text-black-50 {
  --bs-text-opacity: 1;
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-reset {
  --bs-text-opacity: 1;
  color: inherit !important;
}

.d-none {
  display: none !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }
  .d-sm-none {
    display: none !important;
  }
}
@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }
  .d-md-none {
    display: none !important;
  }
}
@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }
  .d-lg-none {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }
  .d-xl-none {
    display: none !important;
  }
}
@media (min-width: 1400px) {
  .m-xxl-0 {
    margin: 0 !important;
  }
  .d-xxl-none {
    display: none !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }
}
:host {
  display: block;
}

.password-icon {
  top: calc(var(--bs-form-control-spacing) * 5);
  --bs-icon-default: var(--bs-icon-primary);
}`;S(W);let s=class extends T(N(U)){constructor(){super(...arguments),this.internals=this.attachInternals(),this.slotted=!1,this.invalid=!1,this.customValidation=!1,this.required=!1,this.validationText="",this.label="",this.labelHidden=!1,this.type="text",this.name="",this.placeholder="",this.supportText="",this.disabled=!1,this.plaintext=!1,this.readonly=!1,this.passwordStrengthMeter=!1,this.suggestions=!1,this.minlength=-1,this.maxlength=-1,this._passwordVisible=!1,this._strengthInfos="",this._score=0,this._value="",this._touched=!1,this.validityMessage=""}static get formAssociated(){return!0}get value(){return this._inputElement?this._inputElement.value:this._value}set value(t){const e=this._value;this._value=t,this.internals.setFormValue(t),this.requestUpdate("value",e),this._inputElement&&this._inputElement.value!==t&&(this._inputElement.value=t)}get inputElement(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("input")}_handleFormdata(t){if(!this.disabled){const{formData:e}=t;e.append(this.name,this._value)}}_handleInput(t){const e=t.target;this.value=e.value,this.passwordStrengthMeter&&this._checkPasswordStrength(e.value),this.dispatchEvent(new CustomEvent("on-input",{detail:{value:e.value,el:e},bubbles:!0,composed:!0}))}checkValidity(){if(!this.customValidation){const t=this._inputElement?this._inputElement.checkValidity():!0;this._checkValidity({[d.INVALID]:this.$t("validityInvalid"),[d.ERROR_REQUIRED]:this.$t("validityRequired"),[d.PATTERN]:this.$t("validityPattern"),[d.MINLENGTH]:this.$t("validityMinlength"),[d.MAXLENGTH]:this.$t("validityMaxlength")},t)}}_handleBlur(){super._handleBlur(),this.checkValidity()}firstUpdated(){var r,i;const t=(r=this.shadowRoot)==null?void 0:r.querySelector('slot[name="icon"]'),e=(i=this.shadowRoot)==null?void 0:i.querySelector('slot[name="append"]');t==null||t.addEventListener("slotchange",()=>{this.requestUpdate()}),e==null||e.addEventListener("slotchange",()=>{this.requestUpdate()})}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this);const t=this.getAttribute("value");t!==null&&(this.value=t),this.type==="password"&&this.minlength<0&&(this.minlength=8),requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}updated(t){var e,r,i;if((e=super.updated)==null||e.call(this,t),this.customValidation&&this.setCustomValidity(this.validationText),this.invalid){const a=((r=this.validationText)==null?void 0:r.length)>0?this.validationText:this.validityMessage??"Campo non valido";this.internals.setValidity({customError:this.invalid},a)}this.passwordStrengthMeter&&this.type!=="password"&&this.logger.warn("The strength-meter property is enabled, but type isn't password. Please, remove strength-meter property."),this.suggestions&&this.type!=="password"&&this.logger.warn("The suggestions property is enabled, but type isn't password. Please, remove suggestions this property."),(!this.label||((i=this.label)==null?void 0:i.length)===0)&&this.logger.warn(`Label is required to ensure accessibility. Please, define a label for <it-input name="${this.name}" ... /> . Set attribute label-hidden="true" if you don't want to show label.`)}_togglePasswordVisibility(){this._passwordVisible=!this._passwordVisible,this._inputElement&&(this._inputElement.type=this._passwordVisible?"text":"password")}_checkPasswordStrength(t){this._score=G(t,this.minlength),this._updateStrengthInfos()}_getPasswordConfig(){return{minimumLength:this.minlength,showHidePassword:this.$t("showHidePassword"),shortPass:this.$t("shortPass"),badPass:this.$t("badPass"),goodPass:this.$t("goodPass"),strongPass:this.$t("strongPass"),ariaLabelPasswordMeter:this.$t("ariaLabelPasswordMeter"),suggestionsLabel:this.$t("passwordSuggestionsLabel"),suggestionLength:this.$t("passwordSuggestionLength"),suggestionUppercase:this.$t("passwordSuggestionUppercase"),suggestionLowercase:this.$t("passwordSuggestionLowercase"),suggestionNumber:this.$t("passwordSuggestionNumber"),suggestionSpecial:this.$t("passwordSuggestionSpecial"),suggestionFollowed:this.$t("passwordSuggestionFollowed"),suggestionFollowedPlural:this.$t("passwordSuggestionFollowedPlural"),suggestionOf:this.$t("passwordSuggestionOf")}}_updateStrengthInfos(){let t=Q(this._score,{shortPass:this.$t("shortPass"),badPass:this.$t("badPass"),goodPass:this.$t("goodPass"),strongPass:this.$t("strongPass")});if(w){const{completedCount:e,totalCount:r}=X(w,this.value,this._getPasswordConfig()),i=e===1?this.$t("passwordSuggestionFollowed"):this.$t("passwordSuggestionFollowedPlural");t+=` ${e} ${this.$t("passwordSuggestionOf")} ${r} ${i}.`}this._strengthInfos=t}_renderTogglePasswordButton(){return this.type==="password"?g`
        <button
          type="button"
          class="password-icon btn"
          role="switch"
          aria-checked="${this._passwordVisible}"
          @click="${this._togglePasswordVisibility}"
          part="focusable"
        >
          <span class="visually-hidden">${this.$t("showHidePassword")}</span>
          <it-icon
            name="${this._passwordVisible?"it-password-visible":"it-password-invisible"}"
            size="sm"
          ></it-icon>
        </button>
      `:x}_renderSuggestions(){return this.suggestions?g`<div class="strength-meter-suggestions small form-text text-muted">
          <label class="visually-hidden" for="suggestions">${this.$t("passwordSuggestionsLabel")}</label>
          <div class="password-suggestions">
            ${w.map(t=>{const e=t.test(this.value,this._getPasswordConfig());return g`
                <div class="suggestion">
                  ${e?g` <svg
                        class="icon icon-xs me-1"
                        aria-label="${this.$t("passwordSuggestionMetLabel")}"
                        viewBox="0 0 24 24"
                        style="width: 1em; height: 1em;"
                      >
                        <path d="M9.6 16.9 4 11.4l.8-.7 4.8 4.8 8.5-8.4.7.7-9.2 9.1z"></path>
                      </svg>`:x}
                  <span>${t.text(this._getPasswordConfig())}</span>
                </div>
              `})}
          </div>
        </div>`:x}_renderpasswordStrengthMeter(){var t;if(this.type==="password"&&this.passwordStrengthMeter){const e=this._score<0?0:this._score,r=((t=this._value)==null?void 0:t.length)===0?"muted":Z(this._score);return g`<div class="password-strength-meter">
        ${this._renderSuggestions()}

        <p
          id=${`strengthMeterInfo_${this._id}`}
          class="${`strength-meter-info small form-text pt-0 text-${r}`}"
          aria-live="polite"
        >
          ${this._strengthInfos}
        </p>
        <div class="password-meter progress rounded-0 position-absolute">
          <div
            class="${this.composeClass("progress-bar",`bg-${r}`)}"
            style="width: ${e}%"
            role="progressbar"
            aria-valuenow="${e}"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="${this.$t("ariaLabelPasswordMeter")}"
          >
            <div class="row position-absolute w-100 m-0">
              <div class="col-3 border-start border-end border-white"></div>
              <div class="col-3 border-start border-end border-white"></div>
              <div class="col-3 border-start border-end border-white"></div>
              <div class="col-3 border-start border-end border-white"></div>
            </div>
          </div>
        </div>
      </div>`}return x}_renderInput(t){var a,b,p,z;const e=this.composeClass(((a=this.supportText)==null?void 0:a.length)>0?t:"",this.passwordStrengthMeter?`strengthMeterInfo_${this._id}`:"",((b=this._ariaAttributes["aria-describedby"])==null?void 0:b.length)>0?this._ariaAttributes["aria-describedby"]:"",((p=this.validityMessage)==null?void 0:p.length)>0?`invalid-feedback-${this._id}`:""),r=this.composeClass(this.plaintext?"form-control-plaintext":"form-control",this.size?`form-control-${this.size}`:"",this.invalid?"is-invalid":"",!this.invalid&&this._touched?"just-validate-success-field":"");let i;return this.type==="textarea"?i=g`
        <textarea
          part="textarea focusable"
          ${E(this._ariaAttributes)}
          aria-describedby=${m(e||void 0)}
          ?aria-invalid=${this.invalid}
          @input="${this._handleInput}"
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
          @click=${this._handleClick}
          @change=${this._handleChange}
          id="${this._id}"
          name="${this.name}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .value="${this._value}"
          placeholder=${m(this.placeholder||void 0)}
          class="${r}"
        ></textarea>
      `:i=g`
        <input
          part="input focusable"
          ${E(this._ariaAttributes)}
          aria-describedby=${m(e||void 0)}
          ?aria-invalid=${this.invalid}
          @input="${this._handleInput}"
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
          @click=${this._handleClick}
          @change=${this._handleChange}
          type="${this.type}"
          id="${this._id}"
          name="${this.name}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .value="${this._value}"
          placeholder=${m(this.placeholder||void 0)}
          class="${r}"
        />${this._renderTogglePasswordButton()}
      `,i=g`
      ${i}
      <div
        role="alert"
        id="invalid-feedback-${this._id}"
        class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
        ?hidden=${!(((z=this.validityMessage)==null?void 0:z.length)>0)}
      >
        <span class="visually-hidden">${this.label}: </span>${this.validityMessage}
      </div>
    `,i}render(){const t=`${this._id}-support-text`,e=g` ${_(this.supportText,()=>g` <small class="form-text" id="${t}">${this.supportText}</small> `)}`;return g`
      <div class="form-group" part="input-wrapper">
        <label
          for="${m(this._id||void 0)}"
          part="label"
          class="${this.composeClass("active",this.labelHidden?"visually-hidden":"")}"
          >${this.label}</label
        >

        ${_(this.slotted,()=>g` <div class="input-group">
                <span class="input-group-text">
                  <slot name="icon" @slotchange=${()=>this.requestUpdate()}></slot
                ></span>
                ${this._renderInput(t)}
                <div class="input-group-append">
                  <slot name="append" @slotchange=${()=>this.requestUpdate()}></slot>
                </div>
              </div>
              ${e} ${this._renderpasswordStrengthMeter()}`,()=>g` ${this._renderInput(t)} ${e} ${this._renderpasswordStrengthMeter()}`)}
      </div>
    `}};s.styles=J;l([c(),n("design:type",Object)],s.prototype,"internals",void 0);l([c({type:Boolean}),n("design:type",Object)],s.prototype,"slotted",void 0);l([c({type:Boolean,reflect:!0}),n("design:type",Object)],s.prototype,"invalid",void 0);l([c({type:Boolean,reflect:!0,attribute:"custom-validation"}),n("design:type",Object)],s.prototype,"customValidation",void 0);l([c({type:Boolean,reflect:!0}),n("design:type",Object)],s.prototype,"required",void 0);l([c({attribute:"validity-message"}),n("design:type",String)],s.prototype,"validationText",void 0);l([I("input"),n("design:type",HTMLInputElement)],s.prototype,"_inputElement",void 0);l([c({type:String}),n("design:type",Object)],s.prototype,"size",void 0);l([c({type:String}),n("design:type",Object)],s.prototype,"label",void 0);l([c({type:Boolean,attribute:"label-hidden"}),n("design:type",Object)],s.prototype,"labelHidden",void 0);l([c({type:String}),n("design:type",String)],s.prototype,"type",void 0);l([c({type:String}),n("design:type",Object)],s.prototype,"name",void 0);l([c({type:String}),n("design:type",Object)],s.prototype,"placeholder",void 0);l([c({type:String,attribute:"support-text"}),n("design:type",Object)],s.prototype,"supportText",void 0);l([c({type:Boolean}),n("design:type",Object)],s.prototype,"disabled",void 0);l([c({type:Boolean}),n("design:type",Object)],s.prototype,"plaintext",void 0);l([c({type:Boolean}),n("design:type",Object)],s.prototype,"readonly",void 0);l([c({type:Boolean,attribute:"strength-meter"}),n("design:type",Object)],s.prototype,"passwordStrengthMeter",void 0);l([c({type:Boolean}),n("design:type",Object)],s.prototype,"suggestions",void 0);l([c({type:Number}),n("design:type",Object)],s.prototype,"minlength",void 0);l([c({type:Number}),n("design:type",Object)],s.prototype,"maxlength",void 0);l([c({type:String}),n("design:type",String)],s.prototype,"pattern",void 0);l([f(),n("design:type",Object)],s.prototype,"_passwordVisible",void 0);l([f(),n("design:type",Object)],s.prototype,"_strengthInfos",void 0);l([f(),n("design:type",Object)],s.prototype,"_score",void 0);l([f(),n("design:type",Object)],s.prototype,"_value",void 0);l([f(),n("design:type",Object)],s.prototype,"_touched",void 0);l([c({type:String}),n("design:type",String)],s.prototype,"validityMessage",void 0);l([c({reflect:!0}),n("design:type",Object),n("design:paramtypes",[Object])],s.prototype,"value",null);s=l([O("it-input")],s);
