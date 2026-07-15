function u(t,n,a,c){const e=new CustomEvent(n,{bubbles:!0,composed:!0,cancelable:!0,detail:a});return t.dispatchEvent(e),e.defaultPrevented||c(),e}export{u as d};
