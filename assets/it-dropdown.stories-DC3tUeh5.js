import{a as Ft,i as Wt,x as y}from"./lit-element-DvQWNfDj.js";import{n as z,o as _,t as jt}from"./property-DPMN11qy.js";import"./it-button-DGMbvwhA.js";import{r as oo,e as Bt}from"./query-Dd0DvlgZ.js";import"./it-icon-CeoUM-NU.js";import"./directive-CJw_OlP2.js";import"./iframe-BJMmF07V.js";function k(t,e,o,n){var i=arguments.length,a=i<3?e:n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}function A(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt;(function(t){t.NO_ERROR="",t.INVALID="invalid",t.ERROR_REQUIRED="required",t.PATTERN="pattern",t.MINLENGTH="minlength",t.MAXLENGTH="maxlength"})(Xt||(Xt={}));function Ne(t){var e,o,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(o=Ne(t[e]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o);return n}function no(){for(var t,e,o=0,n="",i=arguments.length;o<i;o++)(t=arguments[o])&&(e=Ne(t))&&(n&&(n+=" "),n+=e);return n}const io=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:mt}=window,Fe=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function We(){Fe&&(document.documentElement.dir,document.documentElement.lang||navigator.language),[...io.keys()].forEach(t=>{const e=t;typeof e.requestUpdate=="function"&&e.requestUpdate()})}if(Fe){const t=new MutationObserver(We);document.documentElement.dir,document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ro(...t){t.forEach(e=>{const o=e.$code.toLowerCase();mt.has(o)?mt.set(o,{...mt.get(o),...e}):mt.set(o,e)}),We()}window.registerTranslation=ro;let ao=class{constructor(e){this.tag=e}format(e,o){return[`[${this.tag}] ${o}`]}warn(e){console.warn(...this.format("warn",e))}error(e){console.error(...this.format("error",e))}info(e){console.info(...this.format("info",e))}},je=class extends Ft{constructor(){super(),this.composeClass=no,this.logger=new ao(this.tagName.toLowerCase())}get _ariaAttributes(){const e={};for(const o of this.getAttributeNames())o==="it-role"?e.role=this.getAttribute(o):o.startsWith("it-aria-")&&(e[o.replace(/^it-/,"")]=this.getAttribute(o));return e}generateId(e){return`${e}-${Math.random().toString(36).slice(2)}`}addFocus(e){}getActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}connectedCallback(){var o;super.connectedCallback();const e=((o=this.id)==null?void 0:o.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(e)}};class so{constructor(e){this.host=e,this.host.addController(this)}setConfig(e){this.config=e}hostDisconnected(){this.host.removeController(this)}getActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}handleKeyDown(e){if(!this.config)return;const o=this.config.getItems(),n=o.indexOf(this.getActiveElement());switch(e.key){case"ArrowDown":e.preventDefault(),o.length&&n<o.length-1&&this.config.setActive(n<0?0:n+1);break;case"ArrowUp":e.preventDefault(),o.length&&this.config.setActive(n<0?o.length-1:n-1);break;case"Home":e.preventDefault(),o.length&&this.config.setActive(0);break;case"End":e.preventDefault(),o.length&&this.config.setActive(o.length-1);break;case"Escape":e.preventDefault(),this.config.closeMenu();break}}}var lo=Wt`/***************************** 1 ****************************************/
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
.dropdown-menu {
  --bs-dropdown-zindex: 8;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: var(--bs-spacing-xxs);
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: var(--bs-label-font-size);
  --bs-dropdown-color: var(--bs-color-text-base);
  --bs-dropdown-background: var(--bs-color-background-inverse);
  --bs-dropdown-border-color: transparent;
  --bs-dropdown-border-radius: var(--bs-radius-smooth);
  --bs-dropdown-border-width: 0;
  --bs-dropdown-inner-border-radius: var(--bs-radius-smooth);
  --bs-dropdown-divider-bg: var(--bs-color-border-subtle);
  --bs-dropdown-divider-margin-y: var(--bs-spacing-xxs);
  --bs-dropdown-box-shadow: var(--bs-elevation-medium);
  --bs-dropdown-link-color: var(--bs-color-text-primary);
  --bs-dropdown-link-hover-color: var(--bs-color-text-primary-hover);
  --bs-dropdown-link-active-color: var(--bs-color-text-primary-active);
  --bs-dropdown-item-padding-x: var(--bs-spacing-s);
  --bs-dropdown-item-padding-y: var(--bs-spacing-xs);
  --bs-dropdown-header-color: var(--bs-color-text-secondary);
  --bs-dropdown-header-font-size: var(--bs-label-font-size);
  --bs-dropdown-header-padding-x: var(--bs-spacing-s);
  --bs-dropdown-header-padding-y: var(--bs-spacing-xxs);
  --bs-dropdown-notch-base-size: 1.125rem;
  --bs-dropdown-notch-position-x: 20px;
  --bs-dropdown-notch-position-y: -8px;
  --bs-dropdown-animation-speed: var(--bs-transition-instant);
  --bs-dropdown-vertical-shift: 10px;
}

.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  margin: 0;
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: 0 0 var(--bs-dropdown-border-radius) var(--bs-dropdown-border-radius);
  background-color: var(--bs-dropdown-background);
  color: var(--bs-dropdown-color);
  list-style: none;
  text-align: left;
  background-clip: padding-box;
  font-size: var(--bs-dropdown-font-size);
  box-shadow: var(--bs-dropdown-box-shadow);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--bs-dropdown-spacer);
}
.dropdown-menu.full-width {
  width: 100%;
}
.dropdown-menu.full-width .link-list li {
  display: inline-block;
  width: auto;
}
.dropdown-menu.full-width .link-list li:hover, .dropdown-menu.full-width .link-list li:focus {
  background: none;
  text-decoration: underline;
}
.dropdown-menu .link-list {
  margin-bottom: 0;
}
.dropdown-menu:before {
  position: absolute;
  top: var(--bs-dropdown-notch-position-y);
  left: var(--bs-dropdown-notch-position-x);
  content: "";
  width: var(--bs-dropdown-notch-base-size);
  height: var(--bs-dropdown-notch-base-size);
  border-radius: var(--bs-dropdown-border-radius);
  background-color: var(--bs-dropdown-background);
  transform: rotate(45deg);
}
.dropdown-menu[data-popper-placement=top-start] {
  border-radius: var(--bs-dropdown-border-radius) var(--bs-dropdown-border-radius) 0 0;
}
.dropdown-menu[data-popper-placement=top-start]:before {
  top: auto;
  bottom: var(--bs-dropdown-notch-position-y);
}
.dropdown-menu[data-popper-placement=bottom-end]:before {
  right: calc(var(--bs-dropdown-notch-position-x) / 2);
  left: auto;
}
.dropdown-menu.dark {
  --bs-dropdown-text-color: hsl(0, 0%, 83%);
  --bs-dropdown-background: var(--bs-color-background-primary-muted);
  --bs-dropdown-link-color: hsl(0, 0%, 83%);
  --bs-dropdown-divider-bg: transparent;
  --bs-dropdown-link-active-color: var(--bs-color-text-inverses);
  --bs-dropdown-header-color: hsl(0, 0%, 45%);
}
.dropdown-menu.dark:before {
  background-color: var(--bs-dropdown-background);
}
.dropdown-menu.dark .link-list-heading {
  color: var(--bs-color-text-inverse);
}
.dropdown-menu.dark .link-list span.divider {
  background: #2e465e;
}
.dropdown-menu.dark .link-list a span,
.dropdown-menu.dark .link-list a:hover span {
  color: var(--bs-color-text-inverse);
}
.dropdown-menu.dark .link-list a.active span {
  text-decoration: underline;
}
.dropdown-menu.show {
  display: block;
}
.dropdown-menu.show[data-popper-placement=bottom-start] {
  animation: dropdownFadeIn forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=top-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=left-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=left-start]:before {
  top: 20px;
  right: -6px;
  left: auto;
}
.dropdown-menu.show[data-popper-placement=right-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=right-start]:before {
  top: 20px;
  left: -6px;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--bs-dropdown-spacer);
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--bs-dropdown-spacer);
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--bs-dropdown-spacer);
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: var(--bs-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-dropdown-divider-bg);
  opacity: 1;
}

.dropdown-item.list-item {
  width: auto;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  border: 0;
  background-color: transparent;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.dropdown-item.list-item:hover, .dropdown-item.list-item:focus {
  text-decoration: none;
}

.dropdown-header {
  display: block;
  margin-bottom: 0;
  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
  color: var(--bs-dropdown-header-color);
  font-size: var(--bs-dropdown-header-font-size);
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  color: var(--bs-dropdown-link-color);
}

@keyframes dropdownFadeIn {
  0% {
    margin-top: 0;
    opacity: 0;
  }
  100% {
    margin-top: var(--bs-dropdown-vertical-shift);
    opacity: 1;
  }
}
@keyframes dropdownFadeInTop {
  0% {
    margin-top: 0;
    opacity: 0;
  }
  100% {
    margin-top: -var(--bs-dropdown-vertical-shift);
    opacity: 1;
  }
}
.dropdown.dropup .dropdown-toggle:after,
.btn-group.dropup .dropdown-toggle:after {
  display: none;
}
.dropdown.dropup .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropup .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: scaleY(1);
}
.dropdown.dropup .dropdown-toggle .icon-expand,
.btn-group.dropup .dropdown-toggle .icon-expand {
  transform: scaleY(-1);
}
.dropdown.dropend .dropdown-toggle:after,
.btn-group.dropend .dropdown-toggle:after {
  display: none;
}
.dropdown.dropend .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropend .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: rotate(90deg);
}
.dropdown.dropend .dropdown-toggle .icon-expand,
.btn-group.dropend .dropdown-toggle .icon-expand {
  transform: rotate(-90deg);
}
.dropdown.dropstart .dropdown-toggle:before,
.btn-group.dropstart .dropdown-toggle:before {
  display: none;
}
.dropdown.dropstart .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropstart .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: rotate(-90deg);
}
.dropdown.dropstart .dropdown-toggle .icon-expand,
.btn-group.dropstart .dropdown-toggle .icon-expand {
  transform: rotate(90deg);
}

.btn-dropdown {
  --bs-dropdown-button-color: var(--bs-color-text-primary);
  --bs-dropdown-button-padding: 10px;
  --bs-dropdown-button-background: #fff;
  border-radius: 0;
  box-shadow: none;
  color: var(--bs-dropdown-button-color);
}
@media (min-width: 992px) {
  .btn-dropdown {
    font-size: var(--bs-label-font-size-m);
  }
}
.btn-dropdown:hover {
  --bs-dropdown-button-color: var(--bs-color-text-primary-hover);
  text-decoration: underline;
}
.btn-dropdown:not(:disabled):active {
  box-shadow: none;
}

.btn-dropdown:after,
.dropdown-toggle:after {
  content: "";
  display: inline;
  width: auto;
  height: auto;
  margin: 0;
  border: none;
  vertical-align: bottom;
}
.btn-dropdown .icon-expand,
.dropdown-toggle .icon-expand {
  transition: transform var(--bs-dropdown-animation-speed);
}
.btn-dropdown .icon.icon-xs,
.dropdown-toggle .icon.icon-xs {
  transform: translateY(-1px);
  transition: transform var(--bs-dropdown-animation-speed);
}
.btn-dropdown[aria-expanded=true] .icon-expand,
.dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: scaleY(-1);
}

.link-list-wrapper {
  --bs-linklist-divider-size: 1px;
  --bs-linklist-heading-font-size: var(--bs-heading-6-font-size);
  --bs-linklist-item-font-size: var(--bs-label-font-size);
  --bs-linklist-item-line-height: var(--bs-label-line-height);
  --bs-linklist-item-spacing: var(--bs-spacing-xxs);
  --bs-linklist-nested-spacing: var(--bs-spacing-s);
}

.link-list-wrapper .link-list-heading,
.link-list-wrapper h3 {
  margin-bottom: var(--bs-spacing-xxs);
  color: var(--bs-color-text-base);
  font-size: var(--bs-linklist-heading-font-size);
  font-weight: var(--bs-heading-font-weight-weak);
  line-height: var(--bs-heading-line-height);
}
.link-list-wrapper h3 {
  padding: 0 var(--bs-spacing-m);
  color: var(--bs-color-text-base);
}
.link-list-wrapper ul {
  padding: 0;
  list-style-type: none;
}
.link-list-wrapper ul.link-sublist {
  padding-left: var(--bs-linklist-nested-spacing);
}
.link-list-wrapper li span,
.link-list-wrapper .list-item {
  font-size: var(--bs-linklist-item-font-size);
  line-height: var(--bs-linklist-item-line-height);
}
.link-list-wrapper .list-item {
  position: relative;
  display: inline-block;
  padding-top: var(--bs-linklist-item-spacing);
  padding-bottom: var(--bs-linklist-item-spacing);
  text-decoration: none;
}
.link-list-wrapper .list-item.active span, .link-list-wrapper .list-item:hover:not(.disable) span {
  text-decoration: underline;
}
.link-list-wrapper .list-item.active span {
  color: var(--bs-color-text-primary-active);
}
.link-list-wrapper .list-item.active .icon {
  color: var(--bs-color-icon-primary-active);
}
.link-list-wrapper .list-item:hover:not(.disabled) span {
  color: var(--bs-color-link-hover);
}
.link-list-wrapper .list-item:hover:not(.disabled) p {
  color: var(--bs-color-text-secondary);
}
.link-list-wrapper .list-item:hover:not(.disabled) .icon {
  fill: var(--bs-icon-primary-hover);
}
.link-list-wrapper .list-item:hover:not(.disabled) .icon.icon-inverse {
  fill: var(--bs-icon-inverse);
}
.link-list-wrapper .list-item.disabled {
  cursor: not-allowed;
}
.link-list-wrapper .list-item.disabled:hover span {
  text-decoration: none;
}
.link-list-wrapper .list-item.disabled span {
  color: var(--bs-color-text-disabled);
}
.link-list-wrapper .list-item.disabled svg {
  fill: var(--bs-icon-disabled);
}
.link-list-wrapper .list-item.disabled svg.secondary {
  fill: var(--bs-icon-disabled);
}
.link-list-wrapper .list-item.medium,
.link-list-wrapper .list-item .list-item-title {
  font-weight: var(--bs-font-weight-solid);
}
.link-list-wrapper .list-item.large {
  --bs-linklist-item-font-size: var(--bs-label-font-size-m);
}
.link-list-wrapper .list-item.avatar {
  display: flex;
  margin-bottom: var(--bs-spacing-xxs);
}
.link-list-wrapper .list-item.avatar .avatar {
  display: block;
  margin-right: var(--bs-spacing-s);
}
.link-list-wrapper .list-item.icon-right, .link-list-wrapper .list-item.icon-left {
  padding-right: 0;
  padding-left: 0;
}
.link-list-wrapper .list-item.icon-left .icon {
  left: 0;
  flex-shrink: 0;
  margin-right: var(--bs-spacing-xxs);
}
.link-list-wrapper .list-item.icon-left p {
  width: 100%;
}
.link-list-wrapper .list-item.icon-right {
  width: 100%;
}
.link-list-wrapper .list-item.icon-right .list-item-title-icon-wrapper {
  justify-content: space-between;
}
.link-list-wrapper .list-item.right-icon .list-item-title-icon-wrapper {
  justify-content: space-between;
}
.link-list-wrapper .list-item.right-icon .icon {
  transition: transform 0.3s;
}
.link-list-wrapper .list-item.right-icon .icon.secondary {
  color: var(--bs-icon-secondary);
}
.link-list-wrapper .list-item[data-bs-toggle] .icon {
  transition: transform 0.3s;
}
.link-list-wrapper .list-item[aria-expanded=true] .icon {
  transform: scale(-1);
}
.link-list-wrapper .list-item .icon {
  display: inline-block;
  flex-shrink: 0;
}
.link-list-wrapper .list-item .list-item-title-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link-list-wrapper .list-item .list-item-title-icon-wrapper .list-item-title {
  margin-right: var(--bs-spacing-xxs);
}
.link-list-wrapper .list-item > p {
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-caption-font-size);
  line-height: var(--bs-caption-line-height);
}
.link-list-wrapper .list-item > span {
  display: inline-block;
  color: var(--bs-color-link);
}
.link-list-wrapper .divider {
  display: block;
  height: var(--bs-linklist-divider-size);
  margin: var(--bs-spacing-xxs) 0;
  background: var(--bs-color-border-subtle);
}
.link-list-wrapper .form-check {
  padding: 0 var(--bs-spacing-m);
}

.multiline .list-item-title-icon-wrapper {
  margin-bottom: var(--bs-spacing-3xs);
}
.multiline .list-item.icon-right .list-item-title-icon-wrapper {
  margin-right: 0;
}
.multiline .list-item-title {
  font-size: var(--bs-label-font-size);
}
@media (min-width: 992px) {
  .multiline .list-item-title {
    font-size: var(--bs-label-font-size-m);
  }
}
.multiline .list-item {
  width: 100%;
}
.multiline p {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .link-list-wrapper ul li a.large.icon-left,
  .link-list-wrapper ul li a.large.icon-right {
    --bs-linklist-item-spacing: var(--bs-spacing-s);
  }
}
.dark .link-list li a.disabled,
.dark .link-list li a.disabled span {
  color: hsla(0, 0%, 100%, 0.35);
}

.dropdown-menu::before {
  content: none;
}
.dropdown-menu.dark {
  --bs-dropdown-header-color: var(--bs-color-text-inverse);
  --bs-color-border-subtle: #2e465e;
}
.dropdown-menu .arrow {
  z-index: -1;
  width: var(--bs--dropdown-notch-base-size);
  height: var(--bs--dropdown-notch-base-size);
  border-radius: var(--bs--dropdown-border-radius);
  background-color: var(--bs--dropdown-background);
}

.link-list {
  margin-top: 0;
}

:host {
  position: relative;
  display: inline-block;
  --bs-icon-default: currentColor;
}

it-button,
it-popover {
  display: inline-block;
}

.dropdown-toggle-icon.top {
  transform: scaleY(-1);
}
.dropdown-toggle-icon.left {
  transform: rotate(90deg);
}
.dropdown-toggle-icon.right {
  transform: rotate(-90deg);
}`;let D=class extends je{constructor(){super(...arguments),this.disabled=!1,this.variant="primary",this.alignment="bottom-start",this.dark=!1,this.fullWidth=!1,this.itRole="menu",this._popoverOpen=!1,this._buttonId=this.generateId("it-dropdown"),this._menuId=this.generateId("it-dropdown-menu"),this._ariaNav=new so(this),this._onTriggerClick=()=>{this.disabled||(this._popoverOpen=!this._popoverOpen)},this._onPopoverOpen=()=>{this._popoverOpen=!0},this._onPopoverClose=()=>{this._popoverOpen=!1},this._onKeyDown=e=>{const o=this._menuItems.map(r=>r.getFocusableElement()).filter(r=>!!r),n=this.getActiveElement();if(!n)return;const i=o.indexOf(n);e.key==="Tab"&&(e.shiftKey&&i===-1&&(this._popoverOpen=!1),!e.shiftKey&&i===o.length-1&&(this._popoverOpen=!1),n.ariaDisabled&&(e.shiftKey?this._ariaNav.handleKeyDown(new KeyboardEvent("keydown",{...e,key:"ArrowUp"})):this._ariaNav.handleKeyDown(new KeyboardEvent("keydown",{...e,key:"ArrowDown"}))));const a=()=>{this._ariaNav.setConfig({getItems:()=>o,setActive:r=>{var s;return(s=o[r])==null?void 0:s.focus()},closeMenu:()=>{this.addEventListener("it-popover-close",()=>{var r;(r=this._triggerEl)==null||r.focus()},{once:!0,capture:!0}),this._popoverOpen=!1},trigger:this._triggerEl}),this._ariaNav.handleKeyDown(e)};if(["ArrowDown","ArrowUp"].includes(e.key)&&!this._popoverOpen&&i===-1){this.addEventListener("it-popover-open",a,{once:!0}),this._popoverOpen=!0;return}a()}}get _triggerEl(){var e;return((e=this.shadowRoot)==null?void 0:e.getElementById(this._buttonId))??null}get _menuItems(){return this._slotEl?this._slotEl.assignedElements({flatten:!0}).filter(e=>e.tagName==="IT-DROPDOWN-ITEM"):[]}_setChildrenProperties(){for(const e of this._menuItems)e.dark=this.dark,e.fullWidth=this.fullWidth,this.itRole==="menu"?e.itRole="menuitem":this.itRole==="listbox"?e.itRole="option":this.itRole==="tree"?e.itRole="treeitem":e.itRole=void 0}updated(){this._setChildrenProperties()}render(){return y`
      <it-popover
        placement=${this.alignment}
        @it-popover-open=${this._onPopoverOpen}
        @it-popover-close=${this._onPopoverClose}
        ?open=${this._popoverOpen}
      >
        <it-button
          id=${this._buttonId}
          slot="trigger"
          ?it-aria-disabled="${this.disabled}"
          type="button"
          variant=${_(this.variant)}
          size=${_(this.size)}
          @click=${this._onTriggerClick}
          @keydown=${{handleEvent:this._onKeyDown,capture:!0}}
          class="dropdown-toggle"
          exportparts="focusable"
          it-aria-haspopup="${this.itRole==="list"?"true":this.itRole}"
          it-aria-controls=${this._menuId}
        >
          ${this.alignment.startsWith("left")?y`<it-icon
                name=${this._popoverOpen?"it-collapse":"it-expand"}
                class="dropdown-toggle-icon left"
                size="sm"
              ></it-icon>`:""}
          ${this.label}
          ${this.alignment.startsWith("left")?"":y`<it-icon
                name=${this._popoverOpen?"it-collapse":"it-expand"}
                class=${this.composeClass("dropdown-toggle-icon",{right:this.alignment.startsWith("right"),top:this.alignment.startsWith("top")})}
                size="sm"
              ></it-icon>`}
        </it-button>
        <div
          slot="content"
          class="${this.composeClass("dropdown-menu",{show:this._popoverOpen,dark:this.dark,"full-width":this.fullWidth})}"
          aria-labelledby=${this._buttonId}
        >
          <div class="link-list-wrapper">
            <slot name="header"></slot>
            <ul
              id=${this._menuId}
              class="link-list"
              role=${_(this.itRole!=="list"?this.itRole:void 0)}
              @keydown=${{handleEvent:this._onKeyDown,capture:!0}}
              aria-orientation=${_(this.fullWidth?"horizontal":void 0)}
            >
              <slot @slotchange=${this._setChildrenProperties}></slot>
            </ul>
          </div>
        </div>
      </it-popover>
    `}};D.styles=lo;D.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0};k([z({type:String}),A("design:type",String)],D.prototype,"label",void 0);k([z({type:Boolean,reflect:!0}),A("design:type",Object)],D.prototype,"disabled",void 0);k([z({type:String}),A("design:type",String)],D.prototype,"size",void 0);k([z({type:String}),A("design:type",String)],D.prototype,"variant",void 0);k([z({type:String}),A("design:type",String)],D.prototype,"alignment",void 0);k([z({type:Boolean}),A("design:type",Object)],D.prototype,"dark",void 0);k([z({type:Boolean,attribute:"full-width",reflect:!0}),A("design:type",Object)],D.prototype,"fullWidth",void 0);k([z({type:String,attribute:"it-role"}),A("design:type",String)],D.prototype,"itRole",void 0);k([oo(),A("design:type",Object)],D.prototype,"_popoverOpen",void 0);k([Bt("slot:not([name])"),A("design:type",HTMLSlotElement)],D.prototype,"_slotEl",void 0);D=k([jt("it-dropdown")],D);var po=Wt`/***************************** 1 ****************************************/
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
.dropdown-menu {
  --bs-dropdown-zindex: 8;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: var(--bs-spacing-xxs);
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: var(--bs-label-font-size);
  --bs-dropdown-color: var(--bs-color-text-base);
  --bs-dropdown-background: var(--bs-color-background-inverse);
  --bs-dropdown-border-color: transparent;
  --bs-dropdown-border-radius: var(--bs-radius-smooth);
  --bs-dropdown-border-width: 0;
  --bs-dropdown-inner-border-radius: var(--bs-radius-smooth);
  --bs-dropdown-divider-bg: var(--bs-color-border-subtle);
  --bs-dropdown-divider-margin-y: var(--bs-spacing-xxs);
  --bs-dropdown-box-shadow: var(--bs-elevation-medium);
  --bs-dropdown-link-color: var(--bs-color-text-primary);
  --bs-dropdown-link-hover-color: var(--bs-color-text-primary-hover);
  --bs-dropdown-link-active-color: var(--bs-color-text-primary-active);
  --bs-dropdown-item-padding-x: var(--bs-spacing-s);
  --bs-dropdown-item-padding-y: var(--bs-spacing-xs);
  --bs-dropdown-header-color: var(--bs-color-text-secondary);
  --bs-dropdown-header-font-size: var(--bs-label-font-size);
  --bs-dropdown-header-padding-x: var(--bs-spacing-s);
  --bs-dropdown-header-padding-y: var(--bs-spacing-xxs);
  --bs-dropdown-notch-base-size: 1.125rem;
  --bs-dropdown-notch-position-x: 20px;
  --bs-dropdown-notch-position-y: -8px;
  --bs-dropdown-animation-speed: var(--bs-transition-instant);
  --bs-dropdown-vertical-shift: 10px;
}

.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  margin: 0;
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: 0 0 var(--bs-dropdown-border-radius) var(--bs-dropdown-border-radius);
  background-color: var(--bs-dropdown-background);
  color: var(--bs-dropdown-color);
  list-style: none;
  text-align: left;
  background-clip: padding-box;
  font-size: var(--bs-dropdown-font-size);
  box-shadow: var(--bs-dropdown-box-shadow);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--bs-dropdown-spacer);
}
.dropdown-menu.full-width {
  width: 100%;
}
.dropdown-menu.full-width .link-list li {
  display: inline-block;
  width: auto;
}
.dropdown-menu.full-width .link-list li:hover, .dropdown-menu.full-width .link-list li:focus {
  background: none;
  text-decoration: underline;
}
.dropdown-menu .link-list {
  margin-bottom: 0;
}
.dropdown-menu:before {
  position: absolute;
  top: var(--bs-dropdown-notch-position-y);
  left: var(--bs-dropdown-notch-position-x);
  content: "";
  width: var(--bs-dropdown-notch-base-size);
  height: var(--bs-dropdown-notch-base-size);
  border-radius: var(--bs-dropdown-border-radius);
  background-color: var(--bs-dropdown-background);
  transform: rotate(45deg);
}
.dropdown-menu[data-popper-placement=top-start] {
  border-radius: var(--bs-dropdown-border-radius) var(--bs-dropdown-border-radius) 0 0;
}
.dropdown-menu[data-popper-placement=top-start]:before {
  top: auto;
  bottom: var(--bs-dropdown-notch-position-y);
}
.dropdown-menu[data-popper-placement=bottom-end]:before {
  right: calc(var(--bs-dropdown-notch-position-x) / 2);
  left: auto;
}
.dropdown-menu.dark {
  --bs-dropdown-text-color: hsl(0, 0%, 83%);
  --bs-dropdown-background: var(--bs-color-background-primary-muted);
  --bs-dropdown-link-color: hsl(0, 0%, 83%);
  --bs-dropdown-divider-bg: transparent;
  --bs-dropdown-link-active-color: var(--bs-color-text-inverses);
  --bs-dropdown-header-color: hsl(0, 0%, 45%);
}
.dropdown-menu.dark:before {
  background-color: var(--bs-dropdown-background);
}
.dropdown-menu.dark .link-list-heading {
  color: var(--bs-color-text-inverse);
}
.dropdown-menu.dark .link-list span.divider {
  background: #2e465e;
}
.dropdown-menu.dark .link-list a span,
.dropdown-menu.dark .link-list a:hover span {
  color: var(--bs-color-text-inverse);
}
.dropdown-menu.dark .link-list a.active span {
  text-decoration: underline;
}
.dropdown-menu.show {
  display: block;
}
.dropdown-menu.show[data-popper-placement=bottom-start] {
  animation: dropdownFadeIn forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=top-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=left-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=left-start]:before {
  top: 20px;
  right: -6px;
  left: auto;
}
.dropdown-menu.show[data-popper-placement=right-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=right-start]:before {
  top: 20px;
  left: -6px;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--bs-dropdown-spacer);
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--bs-dropdown-spacer);
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--bs-dropdown-spacer);
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: var(--bs-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-dropdown-divider-bg);
  opacity: 1;
}

.dropdown-item.list-item {
  width: auto;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  border: 0;
  background-color: transparent;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.dropdown-item.list-item:hover, .dropdown-item.list-item:focus {
  text-decoration: none;
}

.dropdown-header {
  display: block;
  margin-bottom: 0;
  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
  color: var(--bs-dropdown-header-color);
  font-size: var(--bs-dropdown-header-font-size);
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  color: var(--bs-dropdown-link-color);
}

@keyframes dropdownFadeIn {
  0% {
    margin-top: 0;
    opacity: 0;
  }
  100% {
    margin-top: var(--bs-dropdown-vertical-shift);
    opacity: 1;
  }
}
@keyframes dropdownFadeInTop {
  0% {
    margin-top: 0;
    opacity: 0;
  }
  100% {
    margin-top: -var(--bs-dropdown-vertical-shift);
    opacity: 1;
  }
}
.dropdown.dropup .dropdown-toggle:after,
.btn-group.dropup .dropdown-toggle:after {
  display: none;
}
.dropdown.dropup .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropup .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: scaleY(1);
}
.dropdown.dropup .dropdown-toggle .icon-expand,
.btn-group.dropup .dropdown-toggle .icon-expand {
  transform: scaleY(-1);
}
.dropdown.dropend .dropdown-toggle:after,
.btn-group.dropend .dropdown-toggle:after {
  display: none;
}
.dropdown.dropend .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropend .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: rotate(90deg);
}
.dropdown.dropend .dropdown-toggle .icon-expand,
.btn-group.dropend .dropdown-toggle .icon-expand {
  transform: rotate(-90deg);
}
.dropdown.dropstart .dropdown-toggle:before,
.btn-group.dropstart .dropdown-toggle:before {
  display: none;
}
.dropdown.dropstart .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropstart .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: rotate(-90deg);
}
.dropdown.dropstart .dropdown-toggle .icon-expand,
.btn-group.dropstart .dropdown-toggle .icon-expand {
  transform: rotate(90deg);
}

.btn-dropdown {
  --bs-dropdown-button-color: var(--bs-color-text-primary);
  --bs-dropdown-button-padding: 10px;
  --bs-dropdown-button-background: #fff;
  border-radius: 0;
  box-shadow: none;
  color: var(--bs-dropdown-button-color);
}
@media (min-width: 992px) {
  .btn-dropdown {
    font-size: var(--bs-label-font-size-m);
  }
}
.btn-dropdown:hover {
  --bs-dropdown-button-color: var(--bs-color-text-primary-hover);
  text-decoration: underline;
}
.btn-dropdown:not(:disabled):active {
  box-shadow: none;
}

.btn-dropdown:after,
.dropdown-toggle:after {
  content: "";
  display: inline;
  width: auto;
  height: auto;
  margin: 0;
  border: none;
  vertical-align: bottom;
}
.btn-dropdown .icon-expand,
.dropdown-toggle .icon-expand {
  transition: transform var(--bs-dropdown-animation-speed);
}
.btn-dropdown .icon.icon-xs,
.dropdown-toggle .icon.icon-xs {
  transform: translateY(-1px);
  transition: transform var(--bs-dropdown-animation-speed);
}
.btn-dropdown[aria-expanded=true] .icon-expand,
.dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: scaleY(-1);
}

:host {
  display: block;
}

:host li:focus-visible,
:host li a:focus-visible {
  outline: none;
}

a {
  color: var(--bs-color-link);
  text-decoration: underline;
  text-decoration-skip-ink: auto;
  text-underline-offset: 2px;
}
a:hover {
  color: var(--bs-color-link-hover);
  text-decoration: underline;
}

li span,
.list-item {
  font-size: var(--bs-linklist-item-font-size);
  line-height: var(--bs-linklist-item-line-height);
}

.list-item {
  position: relative;
  display: inline-block;
  padding-top: var(--bs-linklist-item-spacing);
  padding-bottom: var(--bs-linklist-item-spacing);
  text-decoration: none;
}
.list-item.active span, .list-item:hover:not(.disable) span {
  text-decoration: underline;
}
.list-item.active span {
  color: var(--bs-color-text-primary-active);
}
.list-item.active .icon {
  color: var(--bs-color-icon-primary-active);
}
.list-item:hover:not(.disabled) span {
  color: var(--bs-color-link-hover);
}
.list-item:hover:not(.disabled) p {
  color: var(--bs-color-text-secondary);
}
.list-item:hover:not(.disabled) .icon {
  fill: var(--bs-icon-primary-hover);
}
.list-item:hover:not(.disabled) .icon.icon-inverse {
  fill: var(--bs-icon-inverse);
}
.list-item.disabled {
  cursor: not-allowed;
}
.list-item.disabled:hover span {
  text-decoration: none;
}
.list-item.disabled span {
  color: var(--bs-color-text-disabled);
}
.list-item.disabled svg {
  fill: var(--bs-icon-disabled);
}
.list-item.disabled svg.secondary {
  fill: var(--bs-icon-disabled);
}
.list-item.medium,
.list-item .list-item-title {
  font-weight: var(--bs-font-weight-solid);
}
.list-item.large {
  --bs-linklist-item-font-size: var(--bs-label-font-size-m);
}
.list-item.avatar {
  display: flex;
  margin-bottom: var(--bs-spacing-xxs);
}
.list-item.avatar .avatar {
  display: block;
  margin-right: var(--bs-spacing-s);
}
.list-item.icon-right, .list-item.icon-left {
  padding-right: 0;
  padding-left: 0;
}
.list-item.icon-left .icon {
  left: 0;
  flex-shrink: 0;
  margin-right: var(--bs-spacing-xxs);
}
.list-item.icon-left p {
  width: 100%;
}
.list-item.icon-right {
  width: 100%;
}
.list-item.icon-right .list-item-title-icon-wrapper {
  justify-content: space-between;
}
.list-item.right-icon .list-item-title-icon-wrapper {
  justify-content: space-between;
}
.list-item.right-icon .icon {
  transition: transform 0.3s;
}
.list-item.right-icon .icon.secondary {
  color: var(--bs-icon-secondary);
}
.list-item[aria-expanded=true] .icon {
  transform: scale(-1);
}
.list-item .icon {
  display: inline-block;
  flex-shrink: 0;
}
.list-item .list-item-title-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-item .list-item-title-icon-wrapper .list-item-title {
  margin-right: var(--bs-spacing-xxs);
}
.list-item > p {
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-caption-font-size);
  line-height: var(--bs-caption-line-height);
}
.list-item > span {
  display: inline-block;
  color: var(--bs-color-link);
}

.divider {
  display: block;
  height: var(--bs-linklist-divider-size);
  margin: var(--bs-spacing-xxs) 0;
  background: var(--bs-color-border-subtle);
}

.dark a span,
.dark a:hover span {
  --bs-color-link: var(--bs-color-text-inverse);
  --bs-color-link-hover: var(--bs-color-text-inverse);
}
.dark a.active span {
  text-decoration: underline;
}
.dark li a.disabled,
.dark li a.disabled span {
  color: hsla(0, 0%, 100%, 0.35);
}

.fw {
  display: inline-block;
  width: auto;
}
.fw:hover, .fw:focus {
  background: none;
  text-decoration: underline;
}`;let S=class extends je{constructor(){super(...arguments),this.label="",this.value="",this.active=!1,this.large=!1,this.separator=!1,this.dark=!1,this.fullWidth=!1}getFocusableElement(){var e;return((e=this.shadowRoot)==null?void 0:e.querySelector("a, button"))??null}handlePress(e){this.disabled&&e.preventDefault()}render(){if(this.separator)return y`<li><span class="divider" role="separator"></span></li>`;const e=this.composeClass({dark:this.dark,fw:this.fullWidth}),o=this.composeClass("list-item","dropdown-item",{disabled:this.disabled,active:this.active,large:this.large}),n=y`
      <slot name="prefix"></slot>
      <slot>${this.label}${this.active?y`<span class="visually-hidden"> attivo</span>`:null}</slot>
      <slot name="suffix"></slot>
    `;return y`
      <li
        role="${_(this.itRole==="menuitem"||this.itRole==="option"||this.itRole==="treeitem"?"none":void 0)}"
        class=${_(e||void 0)}
      >
        ${this.href?y`<a
              class=${o}
              part="focusable"
              href=${this.href}
              role=${_(this.itRole)}
              aria-disabled=${_(this.disabled||void 0)}
              @keydown=${this.handlePress}
              @click=${this.handlePress}
              ><span>${n}</span></a
            >`:y`<span class="dropdown-item-text">${n}</span>`}
      </li>
    `}};S.styles=po;k([z({type:String}),A("design:type",Object)],S.prototype,"label",void 0);k([z({type:String}),A("design:type",Object)],S.prototype,"value",void 0);k([z({type:String}),A("design:type",String)],S.prototype,"href",void 0);k([z({type:Boolean,reflect:!0}),A("design:type",Object)],S.prototype,"active",void 0);k([z({type:Boolean,reflect:!0}),A("design:type",Object)],S.prototype,"large",void 0);k([z({type:Boolean,reflect:!0}),A("design:type",Object)],S.prototype,"separator",void 0);k([z({type:Boolean,reflect:!0}),A("design:type",Object)],S.prototype,"dark",void 0);k([z({type:Boolean,attribute:"full-width",reflect:!0}),A("design:type",Object)],S.prototype,"fullWidth",void 0);k([z({type:String,attribute:"it-role"}),A("design:type",String)],S.prototype,"itRole",void 0);k([z({type:Boolean,reflect:!0}),A("design:type",Boolean)],S.prototype,"disabled",void 0);S=k([jt("it-dropdown-item")],S);function pt(t,e,o,n){var i=arguments.length,a=i<3?e:n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}function Ct(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qt;(function(t){t.NO_ERROR="",t.INVALID="invalid",t.ERROR_REQUIRED="required",t.PATTERN="pattern",t.MINLENGTH="minlength",t.MAXLENGTH="maxlength"})(Qt||(Qt={}));function Be(t){var e,o,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(o=Be(t[e]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o);return n}function co(){for(var t,e,o=0,n="",i=arguments.length;o<i;o++)(t=arguments[o])&&(e=Be(t))&&(n&&(n+=" "),n+=e);return n}const mo=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:ut}=window,He=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function Ve(){He&&(document.documentElement.dir,document.documentElement.lang||navigator.language),[...mo.keys()].forEach(t=>{const e=t;typeof e.requestUpdate=="function"&&e.requestUpdate()})}if(He){const t=new MutationObserver(Ve);document.documentElement.dir,document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function uo(...t){t.forEach(e=>{const o=e.$code.toLowerCase();ut.has(o)?ut.set(o,{...ut.get(o),...e}):ut.set(o,e)}),Ve()}window.registerTranslation=uo;class fo{constructor(e){this.tag=e}format(e,o){return[`[${this.tag}] ${o}`]}warn(e){console.warn(...this.format("warn",e))}error(e){console.error(...this.format("error",e))}info(e){console.info(...this.format("info",e))}}class wo extends Ft{constructor(){super(),this.composeClass=co,this.logger=new fo(this.tagName.toLowerCase())}get _ariaAttributes(){const e={};for(const o of this.getAttributeNames())o==="it-role"?e.role=this.getAttribute(o):o.startsWith("it-aria-")&&(e[o.replace(/^it-/,"")]=this.getAttribute(o));return e}generateId(e){return`${e}-${Math.random().toString(36).slice(2)}`}addFocus(e){}getActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}connectedCallback(){var o;super.connectedCallback();const e=((o=this.id)==null?void 0:o.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(e)}}const J=Math.min,C=Math.max,Rt=Math.round,ft=Math.floor,B=t=>({x:t,y:t}),go={left:"right",right:"left",bottom:"top",top:"bottom"},bo={start:"end",end:"start"};function Pt(t,e,o){return C(t,J(e,o))}function at(t,e){return typeof t=="function"?t(e):t}function Z(t){return t.split("-")[0]}function st(t){return t.split("-")[1]}function qe(t){return t==="x"?"y":"x"}function Ht(t){return t==="y"?"height":"width"}function U(t){return["top","bottom"].includes(Z(t))?"y":"x"}function Vt(t){return qe(U(t))}function ho(t,e,o){o===void 0&&(o=!1);const n=st(t),i=Vt(t),a=Ht(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(r=_t(r)),[r,_t(r)]}function vo(t){const e=_t(t);return[It(t),e,It(e)]}function It(t){return t.replace(/start|end/g,e=>bo[e])}function yo(t,e,o){const n=["left","right"],i=["right","left"],a=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?a:r;default:return[]}}function xo(t,e,o,n){const i=st(t);let a=yo(Z(t),o==="start",n);return i&&(a=a.map(r=>r+"-"+i),e&&(a=a.concat(a.map(It)))),a}function _t(t){return t.replace(/left|right|bottom|top/g,e=>go[e])}function ko(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ye(t){return typeof t!="number"?ko(t):{top:t,right:t,bottom:t,left:t}}function Dt(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function Jt(t,e,o){let{reference:n,floating:i}=t;const a=U(e),r=Vt(e),s=Ht(r),d=Z(e),l=a==="y",c=n.x+n.width/2-i.width/2,m=n.y+n.height/2-i.height/2,f=n[s]/2-i[s]/2;let p;switch(d){case"top":p={x:c,y:n.y-i.height};break;case"bottom":p={x:c,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:m};break;case"left":p={x:n.x-i.width,y:m};break;default:p={x:n.x,y:n.y}}switch(st(e)){case"start":p[r]-=f*(o&&l?-1:1);break;case"end":p[r]+=f*(o&&l?-1:1);break}return p}const zo=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:a=[],platform:r}=o,s=a.filter(Boolean),d=await(r.isRTL==null?void 0:r.isRTL(e));let l=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:c,y:m}=Jt(l,n,d),f=n,p={},u=0;for(let w=0;w<s.length;w++){const{name:b,fn:g}=s[w],{x:h,y:v,data:E,reset:x}=await g({x:c,y:m,initialPlacement:n,placement:f,strategy:i,middlewareData:p,rects:l,platform:r,elements:{reference:t,floating:e}});c=h??c,m=v??m,p={...p,[b]:{...p[b],...E}},x&&u<=50&&(u++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:c,y:m}=Jt(l,f,d)),w=-1)}return{x:c,y:m,placement:f,strategy:i,middlewareData:p}};async function qt(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:a,rects:r,elements:s,strategy:d}=t,{boundary:l="clippingAncestors",rootBoundary:c="viewport",elementContext:m="floating",altBoundary:f=!1,padding:p=0}=at(e,t),u=Ye(p),b=s[f?m==="floating"?"reference":"floating":m],g=Dt(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement(b)))==null||o?b:b.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:l,rootBoundary:c,strategy:d})),h=m==="floating"?{x:n,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating)),E=await(a.isElement==null?void 0:a.isElement(v))?await(a.getScale==null?void 0:a.getScale(v))||{x:1,y:1}:{x:1,y:1},x=Dt(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:h,offsetParent:v,strategy:d}):h);return{top:(g.top-x.top+u.top)/E.y,bottom:(x.bottom-g.bottom+u.bottom)/E.y,left:(g.left-x.left+u.left)/E.x,right:(x.right-g.right+u.right)/E.x}}const Ao=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:a,platform:r,elements:s,middlewareData:d}=e,{element:l,padding:c=0}=at(t,e)||{};if(l==null)return{};const m=Ye(c),f={x:o,y:n},p=Vt(i),u=Ht(p),w=await r.getDimensions(l),b=p==="y",g=b?"top":"left",h=b?"bottom":"right",v=b?"clientHeight":"clientWidth",E=a.reference[u]+a.reference[p]-f[p]-a.floating[u],x=f[p]-a.reference[p],L=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l));let $=L?L[v]:0;(!$||!await(r.isElement==null?void 0:r.isElement(L)))&&($=s.floating[v]||a.floating[u]);const Y=E/2-x/2,W=$/2-w[u]/2-1,M=J(m[g],W),G=J(m[h],W),j=M,X=$-w[u]-G,R=$/2-w[u]/2+Y,et=Pt(j,R,X),K=!d.arrow&&st(i)!=null&&R!==et&&a.reference[u]/2-(R<j?M:G)-w[u]/2<0,P=K?R<j?R-j:R-X:0;return{[p]:f[p]+P,data:{[p]:et,centerOffset:R-et-P,...K&&{alignmentOffset:P}},reset:K}}}),Eo=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:a,rects:r,initialPlacement:s,platform:d,elements:l}=e,{mainAxis:c=!0,crossAxis:m=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:w=!0,...b}=at(t,e);if((o=a.arrow)!=null&&o.alignmentOffset)return{};const g=Z(i),h=U(s),v=Z(s)===s,E=await(d.isRTL==null?void 0:d.isRTL(l.floating)),x=f||(v||!w?[_t(s)]:vo(s)),L=u!=="none";!f&&L&&x.push(...xo(s,w,u,E));const $=[s,...x],Y=await qt(e,b),W=[];let M=((n=a.flip)==null?void 0:n.overflows)||[];if(c&&W.push(Y[g]),m){const R=ho(i,r,E);W.push(Y[R[0]],Y[R[1]])}if(M=[...M,{placement:i,overflows:W}],!W.every(R=>R<=0)){var G,j;const R=(((G=a.flip)==null?void 0:G.index)||0)+1,et=$[R];if(et&&(!(m==="alignment"?h!==U(et):!1)||M.every(I=>I.overflows[0]>0&&U(I.placement)===h)))return{data:{index:R,overflows:M},reset:{placement:et}};let K=(j=M.filter(P=>P.overflows[0]<=0).sort((P,I)=>P.overflows[1]-I.overflows[1])[0])==null?void 0:j.placement;if(!K)switch(p){case"bestFit":{var X;const P=(X=M.filter(I=>{if(L){const Q=U(I.placement);return Q===h||Q==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(Q=>Q>0).reduce((Q,eo)=>Q+eo,0)]).sort((I,Q)=>I[1]-Q[1])[0])==null?void 0:X[0];P&&(K=P);break}case"initialPlacement":K=s;break}if(i!==K)return{reset:{placement:K}}}return{}}}};async function $o(t,e){const{placement:o,platform:n,elements:i}=t,a=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=Z(o),s=st(o),d=U(o)==="y",l=["left","top"].includes(r)?-1:1,c=a&&d?-1:1,m=at(e,t);let{mainAxis:f,crossAxis:p,alignmentAxis:u}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return s&&typeof u=="number"&&(p=s==="end"?u*-1:u),d?{x:p*c,y:f*l}:{x:f*l,y:p*c}}const Ro=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:a,placement:r,middlewareData:s}=e,d=await $o(e,t);return r===((o=s.offset)==null?void 0:o.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:i+d.x,y:a+d.y,data:{...d,placement:r}}}}},_o=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:a=!0,crossAxis:r=!1,limiter:s={fn:b=>{let{x:g,y:h}=b;return{x:g,y:h}}},...d}=at(t,e),l={x:o,y:n},c=await qt(e,d),m=U(Z(i)),f=qe(m);let p=l[f],u=l[m];if(a){const b=f==="y"?"top":"left",g=f==="y"?"bottom":"right",h=p+c[b],v=p-c[g];p=Pt(h,p,v)}if(r){const b=m==="y"?"top":"left",g=m==="y"?"bottom":"right",h=u+c[b],v=u-c[g];u=Pt(h,u,v)}const w=s.fn({...e,[f]:p,[m]:u});return{...w,data:{x:w.x-o,y:w.y-n,enabled:{[f]:a,[m]:r}}}}}},Do=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,n;const{placement:i,rects:a,platform:r,elements:s}=e,{apply:d=()=>{},...l}=at(t,e),c=await qt(e,l),m=Z(i),f=st(i),p=U(i)==="y",{width:u,height:w}=a.floating;let b,g;m==="top"||m==="bottom"?(b=m,g=f===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(g=m,b=f==="end"?"top":"bottom");const h=w-c.top-c.bottom,v=u-c.left-c.right,E=J(w-c[b],h),x=J(u-c[g],v),L=!e.middlewareData.shift;let $=E,Y=x;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(Y=v),(n=e.middlewareData.shift)!=null&&n.enabled.y&&($=h),L&&!f){const M=C(c.left,0),G=C(c.right,0),j=C(c.top,0),X=C(c.bottom,0);p?Y=u-2*(M!==0||G!==0?M+G:C(c.left,c.right)):$=w-2*(j!==0||X!==0?j+X:C(c.top,c.bottom))}await d({...e,availableWidth:Y,availableHeight:$});const W=await r.getDimensions(s.floating);return u!==W.width||w!==W.height?{reset:{rects:!0}}:{}}}};function Ot(){return typeof window<"u"}function dt(t){return Ke(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Ke(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ke(t){return Ot()?t instanceof Node||t instanceof O(t).Node:!1}function N(t){return Ot()?t instanceof Element||t instanceof O(t).Element:!1}function H(t){return Ot()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function Zt(t){return!Ot()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function ct(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=F(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function Co(t){return["table","td","th"].includes(dt(t))}function St(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Yt(t){const e=Kt(),o=N(t)?F(t):t;return["transform","translate","scale","rotate","perspective"].some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Oo(t){let e=tt(t);for(;H(e)&&!rt(e);){if(Yt(e))return e;if(St(e))return null;e=tt(e)}return null}function Kt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rt(t){return["html","body","#document"].includes(dt(t))}function F(t){return O(t).getComputedStyle(t)}function Tt(t){return N(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function tt(t){if(dt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Zt(t)&&t.host||V(t);return Zt(e)?e.host:e}function Ue(t){const e=tt(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:H(e)&&ct(e)?e:Ue(e)}function lt(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Ue(t),a=i===((n=t.ownerDocument)==null?void 0:n.body),r=O(i);if(a){const s=Nt(r);return e.concat(r,r.visualViewport||[],ct(i)?i:[],s&&o?lt(s):[])}return e.concat(i,lt(i,[],o))}function Nt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ge(t){const e=F(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=H(t),a=i?t.offsetWidth:o,r=i?t.offsetHeight:n,s=Rt(o)!==a||Rt(n)!==r;return s&&(o=a,n=r),{width:o,height:n,$:s}}function Ut(t){return N(t)?t:t.contextElement}function it(t){const e=Ut(t);if(!H(e))return B(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:a}=Ge(e);let r=(a?Rt(o.width):o.width)/n,s=(a?Rt(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!s||!Number.isFinite(s))&&(s=1),{x:r,y:s}}const So=B(0);function Xe(t){const e=O(t);return!Kt()||!e.visualViewport?So:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function To(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==O(t)?!1:e}function ot(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),a=Ut(t);let r=B(1);e&&(n?N(n)&&(r=it(n)):r=it(t));const s=To(a,o,n)?Xe(a):B(0);let d=(i.left+s.x)/r.x,l=(i.top+s.y)/r.y,c=i.width/r.x,m=i.height/r.y;if(a){const f=O(a),p=n&&N(n)?O(n):n;let u=f,w=Nt(u);for(;w&&n&&p!==u;){const b=it(w),g=w.getBoundingClientRect(),h=F(w),v=g.left+(w.clientLeft+parseFloat(h.paddingLeft))*b.x,E=g.top+(w.clientTop+parseFloat(h.paddingTop))*b.y;d*=b.x,l*=b.y,c*=b.x,m*=b.y,d+=v,l+=E,u=O(w),w=Nt(u)}}return Dt({width:c,height:m,x:d,y:l})}function Gt(t,e){const o=Tt(t).scrollLeft;return e?e.left+o:ot(V(t)).left+o}function Qe(t,e,o){o===void 0&&(o=!1);const n=t.getBoundingClientRect(),i=n.left+e.scrollLeft-(o?0:Gt(t,n)),a=n.top+e.scrollTop;return{x:i,y:a}}function Mo(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const a=i==="fixed",r=V(n),s=e?St(e.floating):!1;if(n===r||s&&a)return o;let d={scrollLeft:0,scrollTop:0},l=B(1);const c=B(0),m=H(n);if((m||!m&&!a)&&((dt(n)!=="body"||ct(r))&&(d=Tt(n)),H(n))){const p=ot(n);l=it(n),c.x=p.x+n.clientLeft,c.y=p.y+n.clientTop}const f=r&&!m&&!a?Qe(r,d,!0):B(0);return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-d.scrollLeft*l.x+c.x+f.x,y:o.y*l.y-d.scrollTop*l.y+c.y+f.y}}function Lo(t){return Array.from(t.getClientRects())}function Po(t){const e=V(t),o=Tt(t),n=t.ownerDocument.body,i=C(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),a=C(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+Gt(t);const s=-o.scrollTop;return F(n).direction==="rtl"&&(r+=C(e.clientWidth,n.clientWidth)-i),{width:i,height:a,x:r,y:s}}function Io(t,e){const o=O(t),n=V(t),i=o.visualViewport;let a=n.clientWidth,r=n.clientHeight,s=0,d=0;if(i){a=i.width,r=i.height;const l=Kt();(!l||l&&e==="fixed")&&(s=i.offsetLeft,d=i.offsetTop)}return{width:a,height:r,x:s,y:d}}function No(t,e){const o=ot(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,a=H(t)?it(t):B(1),r=t.clientWidth*a.x,s=t.clientHeight*a.y,d=i*a.x,l=n*a.y;return{width:r,height:s,x:d,y:l}}function te(t,e,o){let n;if(e==="viewport")n=Io(t,o);else if(e==="document")n=Po(V(t));else if(N(e))n=No(e,o);else{const i=Xe(t);n={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Dt(n)}function Je(t,e){const o=tt(t);return o===e||!N(o)||rt(o)?!1:F(o).position==="fixed"||Je(o,e)}function Fo(t,e){const o=e.get(t);if(o)return o;let n=lt(t,[],!1).filter(s=>N(s)&&dt(s)!=="body"),i=null;const a=F(t).position==="fixed";let r=a?tt(t):t;for(;N(r)&&!rt(r);){const s=F(r),d=Yt(r);!d&&s.position==="fixed"&&(i=null),(a?!d&&!i:!d&&s.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ct(r)&&!d&&Je(t,r))?n=n.filter(c=>c!==r):i=s,r=tt(r)}return e.set(t,n),n}function Wo(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const r=[...o==="clippingAncestors"?St(e)?[]:Fo(e,this._c):[].concat(o),n],s=r[0],d=r.reduce((l,c)=>{const m=te(e,c,i);return l.top=C(m.top,l.top),l.right=J(m.right,l.right),l.bottom=J(m.bottom,l.bottom),l.left=C(m.left,l.left),l},te(e,s,i));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function jo(t){const{width:e,height:o}=Ge(t);return{width:e,height:o}}function Bo(t,e,o){const n=H(e),i=V(e),a=o==="fixed",r=ot(t,!0,a,e);let s={scrollLeft:0,scrollTop:0};const d=B(0);function l(){d.x=Gt(i)}if(n||!n&&!a)if((dt(e)!=="body"||ct(i))&&(s=Tt(e)),n){const p=ot(e,!0,a,e);d.x=p.x+e.clientLeft,d.y=p.y+e.clientTop}else i&&l();a&&!n&&i&&l();const c=i&&!n&&!a?Qe(i,s):B(0),m=r.left+s.scrollLeft-d.x-c.x,f=r.top+s.scrollTop-d.y-c.y;return{x:m,y:f,width:r.width,height:r.height}}function Lt(t){return F(t).position==="static"}function ee(t,e){if(!H(t)||F(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return V(t)===o&&(o=o.ownerDocument.body),o}function Ze(t,e){const o=O(t);if(St(t))return o;if(!H(t)){let i=tt(t);for(;i&&!rt(i);){if(N(i)&&!Lt(i))return i;i=tt(i)}return o}let n=ee(t,e);for(;n&&Co(n)&&Lt(n);)n=ee(n,e);return n&&rt(n)&&Lt(n)&&!Yt(n)?o:n||Oo(t)||o}const Ho=async function(t){const e=this.getOffsetParent||Ze,o=this.getDimensions,n=await o(t.floating);return{reference:Bo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Vo(t){return F(t).direction==="rtl"}const qo={convertOffsetParentRelativeRectToViewportRelativeRect:Mo,getDocumentElement:V,getClippingRect:Wo,getOffsetParent:Ze,getElementRects:Ho,getClientRects:Lo,getDimensions:jo,getScale:it,isElement:N,isRTL:Vo};function to(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Yo(t,e){let o=null,n;const i=V(t);function a(){var s;clearTimeout(n),(s=o)==null||s.disconnect(),o=null}function r(s,d){s===void 0&&(s=!1),d===void 0&&(d=1),a();const l=t.getBoundingClientRect(),{left:c,top:m,width:f,height:p}=l;if(s||e(),!f||!p)return;const u=ft(m),w=ft(i.clientWidth-(c+f)),b=ft(i.clientHeight-(m+p)),g=ft(c),v={rootMargin:-u+"px "+-w+"px "+-b+"px "+-g+"px",threshold:C(0,J(1,d))||1};let E=!0;function x(L){const $=L[0].intersectionRatio;if($!==d){if(!E)return r();$?r(!1,$):n=setTimeout(()=>{r(!1,1e-7)},1e3)}$===1&&!to(l,t.getBoundingClientRect())&&r(),E=!1}try{o=new IntersectionObserver(x,{...v,root:i.ownerDocument})}catch{o=new IntersectionObserver(x,v)}o.observe(t)}return r(!0),a}function Ko(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:d=!1}=n,l=Ut(t),c=i||a?[...l?lt(l):[],...lt(e)]:[];c.forEach(g=>{i&&g.addEventListener("scroll",o,{passive:!0}),a&&g.addEventListener("resize",o)});const m=l&&s?Yo(l,o):null;let f=-1,p=null;r&&(p=new ResizeObserver(g=>{let[h]=g;h&&h.target===l&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var v;(v=p)==null||v.observe(e)})),o()}),l&&!d&&p.observe(l),p.observe(e));let u,w=d?ot(t):null;d&&b();function b(){const g=ot(t);w&&!to(w,g)&&o(),w=g,u=requestAnimationFrame(b)}return o(),()=>{var g;c.forEach(h=>{i&&h.removeEventListener("scroll",o),a&&h.removeEventListener("resize",o)}),m==null||m(),(g=p)==null||g.disconnect(),p=null,d&&cancelAnimationFrame(u)}}const Uo=Ro,Go=_o,Xo=Eo,Qo=Do,Jo=Ao,Zo=(t,e,o)=>{const n=new Map,i={platform:qo,...o},a={...i.platform,_c:n};return zo(t,e,{...i,platform:a})};var tn=Wt`/***************************** 1 ****************************************/
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
:host {
  --bs-dropdown-background: var(--bs-color-background-inverse);
}`;let nt=class extends wo{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this._onDocumentClick=e=>{if(!this.open)return;const o=e.composedPath();!o.includes(this)&&!o.includes(this._contentElement)&&!o.includes(this._triggerElement)&&(this.open=!1)}}get _triggerElement(){var e;return(e=this._triggerSlot)==null?void 0:e.assignedElements({flatten:!0})[0]}get _contentElement(){var e;return(e=this._contentSlot)==null?void 0:e.assignedElements({flatten:!0})[0]}_setChildrenProperties(){var e,o,n,i;this._triggerElement&&this._triggerElement.tagName==="IT-BUTTON"?(this._triggerElement.hasAttribute("it-aria-haspopup")||(e=this._triggerElement)==null||e.setAttribute("it-aria-haspopup","true"),this._triggerElement.expanded=this.open):((o=this._triggerElement)!=null&&o.hasAttribute("aria-haspopup")||(n=this._triggerElement)==null||n.setAttribute("aria-haspopup","true"),(i=this._triggerElement)==null||i.setAttribute("aria-expanded",String(this.open)))}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),document.addEventListener("click",this._onDocumentClick)}disconnectedCallback(){var e,o;(e=super.disconnectedCallback)==null||e.call(this),document.removeEventListener("click",this._onDocumentClick),(o=this._cleanup)==null||o.call(this)}updated(e){this._setChildrenProperties(),e.has("open")&&(this.open?(this._show(),this.dispatchEvent(new CustomEvent("it-popover-open",{bubbles:!0,composed:!0}))):(this._hide(),this.dispatchEvent(new CustomEvent("it-popover-close",{bubbles:!0,composed:!0}))))}_createArrow(){this._contentElement&&(this._arrowElement||(this._arrowElement=document.createElement("div"),this._arrowElement.className="arrow",this._contentElement.prepend(this._arrowElement)))}_show(){!this._triggerElement||!this._contentElement||(this._contentElement.style.position="absolute",this._contentElement.style.visibility="visible",this._createArrow(),this._cleanup=Ko(this._triggerElement,this._contentElement,()=>{Zo(this._triggerElement,this._contentElement,{placement:this.placement,middleware:[Uo(12),Xo(),Go({padding:8}),Qo({apply({rects:e,elements:o}){Object.assign(o.floating.style,{minWidth:`${e.reference.width}px`})}}),Jo({element:this._arrowElement})]}).then(({x:e,y:o,placement:n,middlewareData:i})=>{if(Object.assign(this._contentElement.style,{left:`${e}px`,top:`${o}px`}),i.arrow){const{x:a,y:r}=i.arrow,s={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];Object.assign(this._arrowElement.style,{left:a!=null?"20px":"",top:r!=null?`${r}px`:"",right:"",bottom:"",[s]:"-8px",position:"absolute",transform:"rotate(45deg)"})}})}),this._focusContent())}_hide(){var e;(e=this._cleanup)==null||e.call(this),this._contentElement.style.visibility="hidden"}_focusContent(){var e,o;(o=(e=this._contentElement)==null?void 0:e.focus)==null||o.call(e)}toggle(){this.open=!this.open}openPopover(){this.open=!0}closePopover(){this.open=!1}render(){return y`
      <slot name="trigger" part="trigger" @slotchange=${this._setChildrenProperties}></slot>
      <slot name="content"></slot>
    `}};nt.styles=tn;pt([z({type:Boolean,reflect:!0}),Ct("design:type",Object)],nt.prototype,"open",void 0);pt([z({type:String}),Ct("design:type",String)],nt.prototype,"placement",void 0);pt([Bt('slot[name="trigger"]'),Ct("design:type",HTMLSlotElement)],nt.prototype,"_triggerSlot",void 0);pt([Bt('slot[name="content"]'),Ct("design:type",HTMLSlotElement)],nt.prototype,"_contentSlot",void 0);nt=pt([jt("it-popover")],nt);const Mt="height:200px;display:flex;align-items:flex-start;",T={title:"Componenti/Dropdown",component:"it-dropdown",tags:["autodocs"],args:{label:"Apri dropdown",disabled:!1,alignment:void 0,variant:"primary",size:void 0,"it-role":void 0,dark:!1,"full-width":!1},argTypes:{label:{control:"text"},disabled:{control:"boolean"},alignment:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"]},variant:{control:"select",options:["primary","secondary","success","danger","warning","light","link"]},size:{control:"select",options:["sm","lg"]},"it-role":{control:"select",options:["menu","list"]},dark:{control:"boolean"},"full-width":{control:"boolean"}},decorators:[t=>y`<div style=${Mt}>${t()}</div>`],parameters:{docs:{description:{component:'\n<Description>Attiva o disattiva overlay contestuali per visualizzare liste di link ed altro ancora con questi menu a tendina.</Description>\n\nPer la creazione di un dropdown è necessario utilizzare il componente `<it-dropdown>` che può contenere al suo interno uno o più `<it-dropdown-item>`.\nÈ necessario specificare l\'etichetta del menu tramite l\'attributo `label`.\nÈ possibile specificare una variante tramite l\'attributo `variant`, questa verrà applicata al pulsante di attivazione del menu.\n\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>Lo standard <a href="https://www.w3.org/TR/wai-aria/">WAI ARIA</a> definisce un widget con proprietà <a href="https://www.w3.org/TR/wai-aria/#menu">`role="menu"`</a>, specifica per i menu applicativi con link o azioni.\nQuesti menu possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei pulsanti di opzione, gruppi di pulsanti di opzione e sottomenu.</p>\n<p>I dropdown di **Dev Kit Italia** sono progettati per essere invece generici e applicabili a una varietà di situazioni. Per questo motivo, il componente `it-dropdown` ha come ruolo predefinito il ruolo `menu` e gestisce automaticamente il ruolo degli elementi interni, ma gli autori potranno modificare il ruolo del Dropdown generato da questo componente ad una semplice lista impostando l\'attributo `it-role="list"`.</p>\n<p>Questo componente comprende di base il supporto per la maggior parte delle interazioni standard del menu della tastiera, come la possibilità di spostarsi tra i singoli elementi `it-dropdown-item` usando i tasti freccia, e chiude il menu con il tasto ESC.</p>\n</div></div>\n'}}}};function q(t){return Object.keys(T.argTypes).reduce((e,o)=>(t!=null&&t.includes(o)||(e[o]={table:{disable:!0}}),e),{})}const wt={render:t=>y`
    <it-dropdown
      label=${t.label}
      ?disabled=${t.disabled}
      alignment=${_(t.alignment)}
      size=${_(t.size)}
      variant=${t.variant}
      it-role=${_(t["it-role"])}
      ?dark=${t.dark}
      ?full-width=${t["full-width"]}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},canvas:{sourceState:"shown"}}},tags:["!autodocs","!dev"]},gt={name:"Dropdown button varianti",render:()=>y`
    <it-dropdown label="Primario" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Secondario" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Success" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Danger" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[t=>y`<div style="${Mt}gap:0.5rem;flex-wrap:wrap;display:flex">${t()}</div>`],argTypes:{...q()},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Ovviamente sono disponibili tutte le varianti già disponibili per i pulsanti. Di seguito, un esempio di utilizzo con le varianti `primary`, `secondary`, `success` e `danger`."}}}},bt={render:()=>y`
    <it-dropdown label="Giù" alignment="bottom-start">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Su" alignment="top-start">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Sinistra" alignment="left">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Destra" alignment="right">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[t=>y`<div
        style="${Mt}gap:2rem;flex-wrap:wrap;align-items:space-between;justify-content:center;flex-direction:column;"
      >
        ${t()}
      </div>`],argTypes:{...q()},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per aprire le voci di menu in direzioni diverse,\nè possibile utilizzare l'attributo `alignment` con i valori `top`, `right`,\n`bottom`, `left`, `top-start`, `top-end`, `right-start`, `right-end`,\n`bottom-start`, `bottom-end`, `left-start` e `left-end`.\n\nI valori `top`, `right`, `bottom` e `left` aprono il menu in direzioni standard,\ncentrate rispetto al trigger,\nmentre i valori `top-start`, `top-end`, `right-start`, `right-end`,\n`bottom-start`, `bottom-end`, `left-start` e `left-end` permettono di specificare\nla posizione esatta del menu rispetto al trigger.\n"}}}},ht={name:"Menu con voci attive",render:t=>y`
    <it-dropdown label=${t.label} variant=${t.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...q(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:`Aggiungere l'attributo active agli elementi del dropdown che si vogliono mostrare come attivi.
Per questioni di accessibilità il componente aggiungerà automaticamente <span class="visually-hidden"> attivo</span> in coda al testo degli elementi attivi.`}}}},vt={name:"Menu disabilitato",args:{disabled:!0},render:t=>y`
    <it-dropdown label=${t.label} ?disabled=${t.disabled} variant=${t.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...q(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungere l'attributo `disabled` al dropdown per **disabilitarlo** completamente."}}}},yt={name:"Menu con voci disabilitate",render:t=>y`
    <it-dropdown label=${t.label} variant=${t.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...q(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungere l'attributo `disabled` agli elementi del dropdown che si vogliono mostrare come **disabilitati**."}}}},xt={name:"Menu con intestazioni e separatori",render:t=>y`
    <it-dropdown label="Item con separatore e header" variant=${t.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Prima voce</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Dopo separatore</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...q(["variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"All'interno del menu dropdown possono essere inseriti header e separatori."}}}},kt={name:"Menu con voci grandi",render:t=>y`
    <it-dropdown label=${t.label} variant=${t.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Grande</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...q(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per aumentare la dimensione degli elementi contenuti nel dropdown\nè sufficiente aggiungere agli stessi l'attributo `large`."}}}},zt={name:"Menu a tutta larghezza",args:{"full-width":!0},render:t=>y`
    <it-dropdown
      label=${t.label}
      ?disabled=${t.disabled}
      alignment=${_(t.alignment)}
      size=${_(t.size)}
      variant=${_(t.variant)}
      it-role=${_(t["it-role"])}
      ?dark=${t.dark}
      ?full-width=${t["full-width"]}
      style="width: 100%;"
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[t=>y`<div style="${Mt}min-width:300px">${t()}</div>`],parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button\nè sufficiente aggiungere l'attributo `full-width`.\nI link e testi contenuti al suo interno saranno disposti in orizzontale."}}}},At={name:"Menu con icona a destra",render:t=>y`
    <it-dropdown label=${t.label} variant=${t.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...q(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa\nallineata a destra utilizzando lo slot `suffix`"}}}},Et={name:"Menu con icona a sinistra",render:t=>y`
    <it-dropdown label=${t.label} variant=${t.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...q(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa\nallineata a sinistra utilizzando lo slot `prefix`"}}}},$t={name:"Menu scuro",args:{dark:!0},render:t=>y`
    <it-dropdown label=${t.label} variant=${t.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...q(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungendo l'attributo `dark` al dropdown si ottiene una versione con un colore primario scuro.\nLink ed elementi interni vengono declinati di conseguenza."}}}};var oe,ne,ie;wt.parameters={...wt.parameters,docs:{...(oe=wt.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${args.variant}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  tags: ['!autodocs', '!dev']
}`,...(ie=(ne=wt.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var re,ae,se;gt.parameters={...gt.parameters,docs:{...(re=gt.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Dropdown button varianti',
  render: () => html\`
    <it-dropdown label="Primario" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Secondario" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Success" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Danger" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}gap:0.5rem;flex-wrap:wrap;display:flex">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: 'Ovviamente sono disponibili tutte le varianti già disponibili per i pulsanti. Di seguito, un esempio di utilizzo con le varianti \`primary\`, \`secondary\`, \`success\` e \`danger\`.'
      }
    }
  }
}`,...(se=(ae=gt.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var de,le,pe;bt.parameters={...bt.parameters,docs:{...(de=bt.parameters)==null?void 0:de.docs,source:{originalSource:'{\n  render: () => html`\n    <it-dropdown label="Giù" alignment="bottom-start">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Su" alignment="top-start">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Sinistra" alignment="left">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Destra" alignment="right">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n  `,\n  decorators: [Story => html`<div\n        style="${containerStyle}gap:2rem;flex-wrap:wrap;align-items:space-between;justify-content:center;flex-direction:column;"\n      >\n        ${Story()}\n      </div>`],\n  argTypes: {\n    ...disabledControls()\n  },\n  parameters: {\n    ...meta.parameters,\n    docs: {\n      source: {\n        excludeDecorators: true\n      },\n      description: {\n        story: `Per aprire le voci di menu in direzioni diverse,\nè possibile utilizzare l\'attributo \\`alignment\\` con i valori \\`top\\`, \\`right\\`,\n\\`bottom\\`, \\`left\\`, \\`top-start\\`, \\`top-end\\`, \\`right-start\\`, \\`right-end\\`,\n\\`bottom-start\\`, \\`bottom-end\\`, \\`left-start\\` e \\`left-end\\`.\n\nI valori \\`top\\`, \\`right\\`, \\`bottom\\` e \\`left\\` aprono il menu in direzioni standard,\ncentrate rispetto al trigger,\nmentre i valori \\`top-start\\`, \\`top-end\\`, \\`right-start\\`, \\`right-end\\`,\n\\`bottom-start\\`, \\`bottom-end\\`, \\`left-start\\` e \\`left-end\\` permettono di specificare\nla posizione esatta del menu rispetto al trigger.\n`\n      }\n    }\n  }\n}',...(pe=(le=bt.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,me,ue;ht.parameters={...ht.parameters,docs:{...(ce=ht.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Menu con voci attive',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo active agli elementi del dropdown che si vogliono mostrare come attivi.
Per questioni di accessibilità il componente aggiungerà automaticamente <span class="visually-hidden"> attivo</span> in coda al testo degli elementi attivi.\`
      }
    }
  }
}`,...(ue=(me=ht.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var fe,we,ge;vt.parameters={...vt.parameters,docs:{...(fe=vt.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Menu disabilitato',
  args: {
    disabled: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} ?disabled=\${args.disabled} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo \\\`disabled\\\` al dropdown per **disabilitarlo** completamente.\`
      }
    }
  }
}`,...(ge=(we=vt.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var be,he,ve;yt.parameters={...yt.parameters,docs:{...(be=yt.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Menu con voci disabilitate',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo \\\`disabled\\\` agli elementi del dropdown che si vogliono mostrare come **disabilitati**.\`
      }
    }
  }
}`,...(ve=(he=yt.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ye,xe,ke;xt.parameters={...xt.parameters,docs:{...(ye=xt.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Menu con intestazioni e separatori',
  render: args => html\`
    <it-dropdown label="Item con separatore e header" variant=\${args.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Prima voce</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Dopo separatore</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`All'interno del menu dropdown possono essere inseriti header e separatori.\`
      }
    }
  }
}`,...(ke=(xe=xt.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var ze,Ae,Ee;kt.parameters={...kt.parameters,docs:{...(ze=kt.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Menu con voci grandi',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Grande</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Per aumentare la dimensione degli elementi contenuti nel dropdown
è sufficiente aggiungere agli stessi l'attributo \\\`large\\\`.\`
      }
    }
  }
}`,...(Ee=(Ae=kt.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var $e,Re,_e;zt.parameters={...zt.parameters,docs:{...($e=zt.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  name: 'Menu a tutta larghezza',
  args: {
    'full-width': true
  },
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${ifDefined(args.variant)}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
      style="width: 100%;"
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}min-width:300px">\${Story()}</div>\`],
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button
è sufficiente aggiungere l'attributo \\\`full-width\\\`.
I link e testi contenuti al suo interno saranno disposti in orizzontale.\`
      }
    }
  }
}`,...(_e=(Re=zt.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var De,Ce,Oe;At.parameters={...At.parameters,docs:{...(De=At.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Menu con icona a destra',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa
allineata a destra utilizzando lo slot \\\`suffix\\\`\`
      }
    }
  }
}`,...(Oe=(Ce=At.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};var Se,Te,Me;Et.parameters={...Et.parameters,docs:{...(Se=Et.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Menu con icona a sinistra',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa
allineata a sinistra utilizzando lo slot \\\`prefix\\\`\`
      }
    }
  }
}`,...(Me=(Te=Et.parameters)==null?void 0:Te.docs)==null?void 0:Me.source}}};var Le,Pe,Ie;$t.parameters={...$t.parameters,docs:{...(Le=$t.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Menu scuro',
  args: {
    dark: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungendo l'attributo \\\`dark\\\` al dropdown si ottiene una versione con un colore primario scuro.
Link ed elementi interni vengono declinati di conseguenza.\`
      }
    }
  }
}`,...(Ie=(Pe=$t.parameters)==null?void 0:Pe.docs)==null?void 0:Ie.source}}};const fn=["Base","Varianti","Direzioni","MenuVociAttive","MenuDisabilitato","MenuVociDisabilitate","MenuIntestazioniSeparatori","MenuVociGrandi","MenuATuttaLarghezza","MenuIconaDestra","MenuIconaSinistra","MenuScuro"];export{wt as Base,bt as Direzioni,zt as MenuATuttaLarghezza,vt as MenuDisabilitato,At as MenuIconaDestra,Et as MenuIconaSinistra,xt as MenuIntestazioniSeparatori,$t as MenuScuro,ht as MenuVociAttive,yt as MenuVociDisabilitate,kt as MenuVociGrandi,gt as Varianti,fn as __namedExportsOrder,T as default};
