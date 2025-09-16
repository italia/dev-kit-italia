import{E as d,f as l,u as p}from"./lit-element-DvQWNfDj.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=t=>t??d;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=t=>(r,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,r)}):customElements.define(t,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:l},h=(t=u,r,e)=>{const{kind:a,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(e.name,t),a==="accessor"){const{name:n}=e;return{set(s){const c=r.get.call(this);r.set.call(this,s),this.requestUpdate(n,c,t)},init(s){return s!==void 0&&this.C(n,void 0,t,s),s}}}if(a==="setter"){const{name:n}=e;return function(s){const c=this[n];r.call(this,s),this.requestUpdate(n,c,t)}}throw Error("Unsupported decorator location: "+a)};function y(t){return(r,e)=>typeof e=="object"?h(t,r,e):((a,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,a),n?Object.getOwnPropertyDescriptor(i,o):void 0})(t,r,e)}export{y as n,m as o,g as t};
