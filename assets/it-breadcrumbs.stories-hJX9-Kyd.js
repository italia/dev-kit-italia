import{r as I,e as T,n as d,i as F,b,a as D,t as M,o as P}from"./iframe-CLk7YE6Q.js";function s(a,e,r,t){var i=arguments.length,o=i<3?e:t,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,r,t);else for(var m=a.length-1;m>=0;m--)(c=a[m])&&(o=(i<3?c(o):i>3?c(e,r,o):c(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o}function n(a,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(a,e)}function _(a){var e,r,t="";if(typeof a=="string"||typeof a=="number")t+=a;else if(typeof a=="object")if(Array.isArray(a)){var i=a.length;for(e=0;e<i;e++)a[e]&&(r=_(a[e]))&&(t&&(t+=" "),t+=r)}else for(r in a)a[r]&&(t&&(t+=" "),t+=r);return t}function H(){for(var a,e,r=0,t="",i=arguments.length;r<i;r++)(a=arguments[r])&&(e=_(a))&&(t&&(t+=" "),t+=e);return t}const O=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:p}=window;let u,$="ltr",A="en";const R=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function j(){R&&($=document.documentElement.dir||"ltr",A=document.documentElement.lang||navigator.language),[...O.keys()].forEach(a=>{const e=a;typeof e.requestUpdate=="function"&&e.requestUpdate()})}if(R){const a=new MutationObserver(j);$=document.documentElement.dir||"ltr",A=document.documentElement.lang||navigator.language,a.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function B(...a){a.forEach(e=>{const r=e.$code.toLowerCase();p.has(r)?p.set(r,{...p.get(r),...e}):p.set(r,e),u||(u=e)}),j()}window.registerTranslation=B;class q{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){O.add(this.host)}hostDisconnected(){O.delete(this.host)}dir(){return`${this.host.dir||$}`.toLowerCase()}lang(){return`${this.host.lang||A}`.toLowerCase()}getTranslationData(e){const r=new Intl.Locale(e.replace(/_/g,"-")),t=r?.language.toLowerCase(),i=r?.region?.toLowerCase()??"",o=p.get(`${t}-${i}`),c=p.get(t);return{locale:r,language:t,region:i,primary:o,secondary:c}}exists(e,r){const{primary:t,secondary:i}=this.getTranslationData(r.lang??this.lang()),o={includeFallback:!1,...r};return!!(t&&t[e]||i&&i[e]||o.includeFallback&&u&&u[e])}term(e,...r){const{primary:t,secondary:i}=this.getTranslationData(this.lang());let o;if(t&&t[e])o=t[e];else if(i&&i[e])o=i[e];else if(u&&u[e])o=u[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...r):o}date(e,r){const t=new Date(e);return new Intl.DateTimeFormat(this.lang(),r).format(t)}number(e,r){const t=Number(e);return Number.isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(e,r,t){return new Intl.RelativeTimeFormat(this.lang(),t).format(e,r)}}const U=a=>class extends a{constructor(){super(...arguments),this.localize=new q(this)}get $localize(){return this.localize}$t(e){return this.localize.term(e)}$d(e,r){return this.localize.date(e,r)}$n(e,r){return this.localize.number(e,r)}};class W{constructor(e){this.tag=e}format(e,r){return[`[${this.tag}] ${r}`]}warn(e){console.warn(...this.format("warn",e))}error(e){console.error(...this.format("error",e))}info(e){console.info(...this.format("info",e))}}class L extends D{constructor(){super(),this.composeClass=H,this.logger=new W(this.tagName.toLowerCase())}get _ariaAttributes(){const e={};for(const r of this.getAttributeNames())r==="it-role"?e.role=this.getAttribute(r):r.startsWith("it-aria-")&&(e[r.replace(/^it-/,"")]=this.getAttribute(r));return e}generateId(e){return`${e}-${Math.random().toString(36).slice(2)}`}addFocus(e){}getActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){super.connectedCallback();const e=this.id?.length>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(e)}}const G=U(L),h=new WeakMap,v=new WeakMap,y=new WeakMap,S=new WeakSet,x=new WeakMap;class Q{constructor(e,r){this.submittedOnce=!1,this.handleFormData=t=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),c=this.options.value(this.host),m=this.host.tagName.toLowerCase(),V=m==="it-button";if(this.host.isConnected&&!i&&!V&&typeof o=="string"&&o.length>0&&typeof c<"u")switch(m){case"it-radio":this.host.checked&&t.formData.append(o,c);break;case"it-checkbox":this.host.checked&&t.formData.getAll(o).indexOf(c)<0&&t.formData.append(o,c);break;case"it-checkbox-group":break;default:Array.isArray(c)?c.forEach(N=>{t.formData.append(o,N.toString())}):t.formData.append(o,c.toString())}},this.handleFormSubmit=t=>{const i=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&h.get(this.form)?.forEach(m=>{this.setUserInteracted(m,!0)});const c=o(this.host);if(this.form&&!this.form.noValidate&&!i&&!c){t.preventDefault();const m=h.get(this.form);if(m){for(const V of m)if(!V.validity?.valid){V.scrollIntoView({behavior:"smooth",block:"center"});break}}}this.submittedOnce=!0},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.submittedOnce=!1,this.setUserInteracted(this.host,!1),x.set(this.host,[])},this.handleInteraction=t=>{const i=x.get(this.host);i.includes(t.type)||i.push(t.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const i of t)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const i of t)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options={form:t=>{const i=t.form;if(i){const c=t.getRootNode().querySelector(`#${i}`);if(c)return c}return t.closest("form")},name:t=>t.name,value:t=>t.value,disabled:t=>t.disabled??!1,reportValidity:t=>typeof t.reportValidity=="function"?t.reportValidity():!0,checkValidity:t=>typeof t.checkValidity=="function"?t.checkValidity():!0,setValue:(t,i)=>{t.value=i},assumeInteractionOn:["it-input"],...r}}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),x.set(this.host,[]),this.options.assumeInteractionOn.forEach(r=>{this.host.addEventListener(r,this.handleInteraction)})}hostDisconnected(){this.detachForm(),x.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,h.has(this.form)?h.get(this.form).add(this.host):h.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),v.has(this.form)||(v.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),y.has(this.form)||(y.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=h.get(this.form);e&&(this.submittedOnce=!1,e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),v.has(this.form)&&(this.form.reportValidity=v.get(this.form),v.delete(this.form)),y.has(this.form)&&(this.form.checkValidity=y.get(this.form),y.delete(this.form)),this.form=void 0))}setUserInteracted(e,r){r?S.add(e):S.delete(e),e.requestUpdate()}doAction(e,r){if(this.form){const t=document.createElement("button");t.type=e,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",r&&(t.name=r.name,t.value=r.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{r.hasAttribute(i)&&t.setAttribute(i,r.getAttribute(i))})),this.form.append(t),t.click(),t.remove()}}getForm(){return this.form??null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const r=this.host,t=!!S.has(r),i=!!r.required;r.toggleAttribute("data-required",i),r.toggleAttribute("data-optional",!i),r.toggleAttribute("data-invalid",!e),r.toggleAttribute("data-valid",e),r.toggleAttribute("data-user-invalid",!e&&t),r.toggleAttribute("data-user-valid",e&&t)}userInteracted(){return!!S.has(this.host)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const r=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||r.preventDefault(),this.host.dispatchEvent(r)||e?.preventDefault()}}const J={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityGroupRequired:"Scegli almeno un'opzione",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};B(J);class l extends G{constructor(){super(...arguments),this.formControlController=new Q(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.isInGroup=!1,this.validationMessage=""}get validity(){return this.inputElement?.validity}getForm(){return this.formControlController.getForm()}checkValidity(){return this.inputElement?.checkValidity()??!0}reportValidity(){const e=this.checkValidity();return this.handleValidationMessages(),e}setCustomValidity(e){this.inputElement.setCustomValidity(e),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(e){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(e){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(e){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(e){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const e=this.inputElement.validity,r=this.isInGroup===!0;e.valueMissing&&!r?this.setCustomValidity(this.$t("validityRequired")):e.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):e.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):e.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):e.typeMismatch||e.rangeUnderflow||e.rangeOverflow||e.stepMismatch||e.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}_handleChange(e){const r=e.target;let t;if(r instanceof HTMLInputElement)switch(r.type){case"checkbox":case"radio":t=r.checked;break;case"file":t=r.files;break;default:t=r.value}else r instanceof HTMLSelectElement&&r.multiple?t=Array.from(r.selectedOptions).map(i=>i.value):t=r.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:t,el:r},bubbles:!0,composed:!0}))}updated(e){super.updated?.(e),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.userInteracted()&&this.formControlController.updateValidity()}}s([I(),n("design:type",Object)],l.prototype,"_touched",void 0);s([T(".it-form__control"),n("design:type",HTMLInputElement)],l.prototype,"inputElement",void 0);s([d({type:String,reflect:!0}),n("design:type",Object)],l.prototype,"name",void 0);s([d({reflect:!0}),n("design:type",Object)],l.prototype,"value",void 0);s([d({type:Boolean,reflect:!0}),n("design:type",Object)],l.prototype,"disabled",void 0);s([d({reflect:!0,type:String}),n("design:type",Object)],l.prototype,"form",void 0);s([d({type:Boolean,reflect:!0,attribute:"custom-validation"}),n("design:type",Object)],l.prototype,"customValidation",void 0);s([d({attribute:"validity-message",reflect:!0}),n("design:type",String)],l.prototype,"validationText",void 0);s([d(),n("design:type",String)],l.prototype,"pattern",void 0);s([d(),n("design:type",Object)],l.prototype,"min",void 0);s([d(),n("design:type",Object)],l.prototype,"max",void 0);s([d(),n("design:type",Object)],l.prototype,"step",void 0);s([d({type:Number}),n("design:type",Object)],l.prototype,"minlength",void 0);s([d({type:Number}),n("design:type",Object)],l.prototype,"maxlength",void 0);s([d({type:Boolean,reflect:!0}),n("design:type",Object)],l.prototype,"required",void 0);s([d({type:Boolean}),n("design:type",Object)],l.prototype,"isInGroup",void 0);s([I(),n("design:type",Object)],l.prototype,"validationMessage",void 0);typeof window<"u"&&(window._itAnalytics=window._itAnalytics||{},window._itAnalytics={...window._itAnalytics,version:"1.0.0-alpha.5"});var K=F`/***************************** 1 ****************************************/
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
.breadcrumb {
  --bsi-breadcrumb-background: transparent;
  --bsi-breadcrumb-border-radius: 0;
  --bsi-breadcrumb-divider: '/';
  --bsi-breadcrumb-divider-color: var(--bsi-color-border-secondary);
  --bsi-breadcrumb-divider-flipped: var(--bsi-breadcrumb-divider);
  --bsi-breadcrumb-font-size: var(--bsi-label-font-size);
  --bsi-breadcrumb-item-padding-x: var(--bsi-spacing-xs);
  --bsi-breadcrumb-link-color: var(--bsi-color-text-secondary);
  --bsi-breadcrumb-link-font-weight: var(--bsi-font-weight-solid);
  --bsi-breadcrumb-margin: var(--bsi-spacing-s);
  --bsi-breadcrumb-padding: var(--bsi-spacing-3xs);
  --bsi-breadcrumb-separator-color: var(--bsi-color-background-secondary);
  --bsi-breadcrumb-separator-spacing: var(--bsi-spacing-xxs);
}

/* stylelint-disable-next-line no-duplicate-selectors */
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--bsi-breadcrumb-margin);
  padding: var(--bsi-breadcrumb-padding);
  background-color: var(--bsi-breadcrumb-background, transparent);
  list-style: none;
  font-size: var(--bsi-breadcrumb-font-size);
}
.breadcrumb.dark {
  --bsi-breadcrumb-background: var(--bsi-color-background-emphasis);
  --bsi-breadcrumb-link-color: var(--bsi-color-text-inverse);
  --bsi-breadcrumb-item-active-color: var(--bsi-color-text-inverse);
  --bsi-breadcrumb-divider-color: var(--bsi-color-text-inverse);
}
.breadcrumb.dark .breadcrumb-item a:hover {
  --bsi-breadcrumb-link-color: var(--bsi-color-text-inverse);
}
.breadcrumb.dark .breadcrumb-item .separator {
  color: var(--bsi-breadcrumb-link-color);
}

.breadcrumb-item {
  padding-left: 0;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: var(--bsi-breadcrumb-divider, "/") /* rtl: var(--bsi-breadcrumb-divider, "/") */;
  padding-right: var(--bsi-breadcrumb-item-padding-x);
  float: left;
  color: var(--bsi-breadcrumb-divider-color);
}
.breadcrumb-item + .breadcrumb-item:before {
  display: none;
}
.breadcrumb-item a {
  color: var(--bsi-breadcrumb-link-color);
  font-weight: var(--bsi-breadcrumb-link-font-weight);
}
.breadcrumb-item a:hover {
  --bsi-breadcrumb-link-color: var(--bsi-color-link-secondary-hover);
}
.breadcrumb-item.active {
  color: var(--bsi-breadcrumb-item-active-color);
  font-weight: var(--bsi-font-weight-regular);
  pointer-events: none;
}
.breadcrumb-item .separator {
  display: inline-block;
  padding: 0 var(--bsi-breadcrumb-separator-spacing);
  color: var(--bsi-breadcrumb-separator-color);
}

.breadcrumb-item ::slotted(a) {
  display: inline-block;
  color: var(--bsi-breadcrumb-link-color) !important;
  font-weight: var(--bsi-breadcrumb-link-font-weight) !important;
}

.breadcrumb-item.active ::slotted(a),
.breadcrumb-item.active ::slotted(*) {
  color: var(--bsi-breadcrumb-item-active-color, var(--bsi-body-color)) !important;
  cursor: default;
  font-weight: unset !important;
  pointer-events: none;
  text-decoration: none !important;
}`;let f=class extends L{constructor(){super(...arguments),this.current=!1,this.separator="/"}setCurrent(e){this.current=e}setSeparator(e){this.separator=e}_getSeparatorClasses(){const r=this.shadowRoot?.querySelector('slot[name="separator"]')?.assignedNodes({flatten:!0});return!r||r.length===0?!1:r.some(i=>i.nodeType===Node.ELEMENT_NODE)}render(){return this.current?b`
      <li class="breadcrumb-item active" aria-current="page" part="breadcrumb-item">
        <slot></slot>
      </li>
    `:b`
        <li class="breadcrumb-item" part="breadcrumb-item">
          <slot></slot>
          <span class="${this._getSeparatorClasses()?"":"separator"}" aria-hidden="true"
            ><slot name="separator" part="separator">${this.separator}</slot></span
          >
        </li>
      `}};f.styles=K;s([I(),n("design:type",Object)],f.prototype,"current",void 0);s([I(),n("design:type",Object)],f.prototype,"separator",void 0);f=s([M("it-breadcrumb-item")],f);var X=F`/***************************** 1 ****************************************/
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
.breadcrumb {
  --bsi-breadcrumb-background: transparent;
  --bsi-breadcrumb-border-radius: 0;
  --bsi-breadcrumb-divider: '/';
  --bsi-breadcrumb-divider-color: var(--bsi-color-border-secondary);
  --bsi-breadcrumb-divider-flipped: var(--bsi-breadcrumb-divider);
  --bsi-breadcrumb-font-size: var(--bsi-label-font-size);
  --bsi-breadcrumb-item-padding-x: var(--bsi-spacing-xs);
  --bsi-breadcrumb-link-color: var(--bsi-color-text-secondary);
  --bsi-breadcrumb-link-font-weight: var(--bsi-font-weight-solid);
  --bsi-breadcrumb-margin: var(--bsi-spacing-s);
  --bsi-breadcrumb-padding: var(--bsi-spacing-3xs);
  --bsi-breadcrumb-separator-color: var(--bsi-color-background-secondary);
  --bsi-breadcrumb-separator-spacing: var(--bsi-spacing-xxs);
}

/* stylelint-disable-next-line no-duplicate-selectors */
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: var(--bsi-breadcrumb-margin);
  padding: var(--bsi-breadcrumb-padding);
  background-color: var(--bsi-breadcrumb-background, transparent);
  list-style: none;
  font-size: var(--bsi-breadcrumb-font-size);
}
.breadcrumb.dark {
  --bsi-breadcrumb-background: var(--bsi-color-background-emphasis);
  --bsi-breadcrumb-link-color: var(--bsi-color-text-inverse);
  --bsi-breadcrumb-item-active-color: var(--bsi-color-text-inverse);
  --bsi-breadcrumb-divider-color: var(--bsi-color-text-inverse);
}
.breadcrumb.dark .breadcrumb-item a:hover {
  --bsi-breadcrumb-link-color: var(--bsi-color-text-inverse);
}
.breadcrumb.dark .breadcrumb-item .separator {
  color: var(--bsi-breadcrumb-link-color);
}

.breadcrumb-item {
  padding-left: 0;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: var(--bsi-breadcrumb-divider, "/") /* rtl: var(--bsi-breadcrumb-divider, "/") */;
  padding-right: var(--bsi-breadcrumb-item-padding-x);
  float: left;
  color: var(--bsi-breadcrumb-divider-color);
}
.breadcrumb-item + .breadcrumb-item:before {
  display: none;
}
.breadcrumb-item a {
  color: var(--bsi-breadcrumb-link-color);
  font-weight: var(--bsi-breadcrumb-link-font-weight);
}
.breadcrumb-item a:hover {
  --bsi-breadcrumb-link-color: var(--bsi-color-link-secondary-hover);
}
.breadcrumb-item.active {
  color: var(--bsi-breadcrumb-item-active-color);
  font-weight: var(--bsi-font-weight-regular);
  pointer-events: none;
}
.breadcrumb-item .separator {
  display: inline-block;
  padding: 0 var(--bsi-breadcrumb-separator-spacing);
  color: var(--bsi-breadcrumb-separator-color);
}

.breadcrumb.dark {
  --bsi-breadcrumb-padding: var(--bsi-spacing-3xs) var(--bsi-spacing-s);
}
.breadcrumb.dark ::slotted(it-breadcrumb-item) {
  --bsi-breadcrumb-link-color: #fff;
  --bsi-breadcrumb-item-active-color: #fff;
  --bsi-breadcrumb-separator-color: #fff;
}`;let g=class extends L{constructor(){super(...arguments),this.itAriaLabel="Breadcrumbs",this.separator="/",this.dark=!1}_setChildrenProperties(){const r=this.shadowRoot?.querySelector("slot")?.assignedElements({flatten:!0})||[];r.forEach((t,i)=>{if(t instanceof f){const o=i===r.length-1;t.setCurrent(o),t.setSeparator(this.separator)}})}render(){const e=this.dark?"breadcrumb dark":"breadcrumb";return b`
      <nav aria-label="${this.itAriaLabel}" part="breadcrumbs-container" class="breadcrumb-container">
        <ol class="${e}" part="breadcrumbs">
          <slot @slotchange=${this._setChildrenProperties}></slot>
        </ol>
      </nav>
    `}};g.styles=X;s([d({type:String,reflect:!0,attribute:"it-aria-label"}),n("design:type",Object)],g.prototype,"itAriaLabel",void 0);s([d({type:String,reflect:!0}),n("design:type",Object)],g.prototype,"separator",void 0);s([d({type:Boolean,reflect:!0}),n("design:type",Object)],g.prototype,"dark",void 0);g=s([M("it-breadcrumbs")],g);const Y={title:"Componenti/Breadcrumbs",tags:["alpha","web-component","a11y-ok"],component:"it-breadcrumbs",args:{"it-aria-label":"Percorso di navigazione",dark:!1},argTypes:{"it-aria-label":{control:"text",description:'Testo usato come `aria-label` sul contenitore di navigazione (es. "Percorso di navigazione").'},dark:{control:"boolean",description:"Imposta la variante a tema scuro."}}},k={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},render:a=>b`
    <it-breadcrumbs it-aria-label=${a["it-aria-label"]} ?dark="${P(a.dark)}">
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  `},w={tags:["!autodocs","!dev"],args:{"it-aria-label":"Breadcrumb con link"},render:a=>b`
    <it-breadcrumbs it-aria-label=${a["it-aria-label"]}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  `},E={name:"Con icona",render:()=>b`
    <it-breadcrumbs it-aria-label="Percorso di navigazione">
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Home</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Sezione</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Voce corrente</a>
      </it-breadcrumb-item>
    </it-breadcrumbs>
  `},z={args:{"it-aria-label":"Breadcrumb con separatore personalizzato",separator:">"},render:a=>b`
    <it-breadcrumbs label=${a["it-aria-label"]} separator=${a.separator}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <it-breadcrumbs it-aria-label="Percorso di navigazione con icona come separatore" class="mt-3">
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <style>
      .my-separator {
        margin-inline: -4px;
      }
    </style>
  `},C={name:"Sfondo scuro",render:()=>b`
    <it-breadcrumbs it-aria-label="Percorso di navigazione" dark>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione2" dark>
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione3" dark>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Home
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Sezione
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
        Voce corrente
      </it-breadcrumb-item>
    </it-breadcrumbs>
    <style>
      .my-separator {
        margin-inline: -4px;
      }
    </style>
  `};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  },
  render: args => html\`
    <it-breadcrumbs it-aria-label=\${args['it-aria-label']} ?dark="\${ifDefined(args.dark)}">
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  \`
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!autodocs', '!dev'],
  args: {
    'it-aria-label': 'Breadcrumb con link'
  },
  render: args => html\`
    <it-breadcrumbs it-aria-label=\${args['it-aria-label']}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
  \`
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Con icona',
  render: () => html\`
    <it-breadcrumbs it-aria-label="Percorso di navigazione">
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Home</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Sezione</a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#"><it-icon name="it-link" color="secondary" size="sm" class="me-1"></it-icon>Voce corrente</a>
      </it-breadcrumb-item>
    </it-breadcrumbs>
  \`
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    'it-aria-label': 'Breadcrumb con separatore personalizzato',
    separator: '>'
  },
  render: args => html\`
    <it-breadcrumbs label=\${args['it-aria-label']} separator=\${args.separator}>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <it-breadcrumbs it-aria-label="Percorso di navigazione con icona come separatore" class="mt-3">
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="secondary" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>

    <style>
      .my-separator {
        margin-inline: -4px;
      }
    </style>
  \`
}`,...z.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Sfondo scuro',
  render: () => html\`
    <it-breadcrumbs it-aria-label="Percorso di navigazione" dark>
      <it-breadcrumb-item><a href="#">Home</a></it-breadcrumb-item>
      <it-breadcrumb-item><a href="#">Sezione</a></it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione2" dark>
      <it-breadcrumb-item>
        <a href="#">Home</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">Sezione</a>
        <it-icon name="it-chevron-right" color="inverse" size="sm" slot="separator" class="my-separator"></it-icon>
      </it-breadcrumb-item>
      <it-breadcrumb-item>Voce corrente</it-breadcrumb-item>
    </it-breadcrumbs>
    <it-breadcrumbs it-aria-label="Percorso di navigazione3" dark>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Home
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <a href="#">
          <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
          Sezione
        </a>
      </it-breadcrumb-item>
      <it-breadcrumb-item>
        <it-icon name="it-link" color="inverse" size="sm" class="me-1"></it-icon>
        Voce corrente
      </it-breadcrumb-item>
    </it-breadcrumbs>
    <style>
      .my-separator {
        margin-inline: -4px;
      }
    </style>
  \`
}`,...C.parameters?.docs?.source}}};const Z=["EsempioInterattivo","ConLink","ConIcona","SeparatorePersonalizzato","Sfondo"],ie=Object.freeze(Object.defineProperty({__proto__:null,ConIcona:E,ConLink:w,EsempioInterattivo:k,SeparatorePersonalizzato:z,Sfondo:C,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{ie as B,E as C,k as E,z as S,C as a};
