/**
 * Label class
 */
export default class Label extends HTMLElement {
  /**
   * Create a whitelist to subscribe to attribute changes
   */
  static get observedAttributes() {
    return ['label'];
  }

  /**
   * Subscribe to attribute changes
   * @param {string} name
   * @param {string} oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'label':
        this._label = newValue;
        break;
      default:
        break;
    }
  }

  /**
   * Constructor
   */
  constructor(label) {
    super();

    this._label = label || '';
  }

  /**
   * Attach
   */
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <h1>${this._label || ''}</h1>
    `;
  }

  set label(val) {
    if (val) {
      this.setAttribute('label', val);
    } else {
      this.removeAttribute('label');
    }
  }
}

// Register custom element
window.customElements.define('wc-label', Label);
