import { directive, Directive, AttributePart, DirectiveParameters } from 'lit/directive.js';

const ARIA_IDREF_ATTRIBUTES = new Map([
  ['aria-activedescendant', 'ariaActivedescendantElement'],
  ['aria-controls', 'ariaControlsElements'],
  ['aria-describedby', 'ariaDescribedByElements'],
  ['aria-details', 'ariaDetailsElements'],
  ['aria-errormessage', 'ariaErrormessageElements'],
  ['aria-flowto', 'ariaFlowtoElements'],
  ['aria-labelledby', 'ariaLabelledByElements'],
  ['aria-owns', 'ariaOwnsElements'],
]);

function resolveAriaIdRefs(element: Element, value: string): HTMLElement[] | null {
  const ids = value
    .trim()
    .split(/\s+/)
    .filter((id) => id.length > 0);

  if (ids.length === 0) return null;

  const root = element.getRootNode();
  let resolvedElements: (HTMLElement | null)[] = [];

  if (root instanceof ShadowRoot) {
    resolvedElements = ids.map((id) => root.getElementById(id) as HTMLElement | null);
  } else if (root instanceof Document) {
    resolvedElements = ids.map((id) => root.getElementById(id) as HTMLElement | null);
  } else {
    resolvedElements = ids.map((id) => document.getElementById(id) as HTMLElement | null);
  }

  if (resolvedElements.filter((el) => el !== null).length === 0) {
    resolvedElements = ids.map((id) => document.getElementById(id) as HTMLElement | null);
  }

  const validElements = resolvedElements.filter((el) => el !== null) as HTMLElement[];

  return validElements.length === ids.length ? validElements : null;
}

function setInternalsProperty(el: any, name: string, resolvedElements: HTMLElement[]) {
  if (name === 'aria-activedescendant') {
    const [firstElement] = resolvedElements;
    // eslint-disable-next-line no-param-reassign
    el[name] = firstElement;
  } else {
    // eslint-disable-next-line no-param-reassign
    el[name] = resolvedElements;
  }
}
class SetAttributesDirective extends Directive {
  update(part: AttributePart, [attributes]: DirectiveParameters<this>) {
    const el = (part as any).element;
    const internals = el.internals ?? null;

    for (const [name, value] of Object.entries(attributes)) {
      if (value == null) {
        el.removeAttribute(name);
      } else {
        const internalsPropertyName = ARIA_IDREF_ATTRIBUTES.get(name);
        if (internalsPropertyName) {
          const resolvedElements = resolveAriaIdRefs(el, String(value));

          if (resolvedElements) {
            if (internals) {
              // Set on ElementInternals
              setInternalsProperty(internals, internalsPropertyName, resolvedElements);
            } else {
              // Set internals property on shadowdom item
              el.setAttribute(name, String(value));
              setInternalsProperty(el, internalsPropertyName, resolvedElements);
            }
          }
        } else {
          // Non-ARIA IDREF attributes: set normally
          el.setAttribute(name, String(value));
        }
      }
    }
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(_attributes: Record<string, string>) {
    return null;
  }
}

/* How to use:

<textarea ${setAttributes(this._ariaAttributes)} ... />
*/
const setAttributes = directive(SetAttributesDirective);

export default setAttributes;
