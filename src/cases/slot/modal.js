// Create template tag
const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <style>
    :host {
      display: block;
    }
  </style>
  <dialog open>
    <button class="close">&times;</button>
    <slot name="content"></slot>
  </dialog>
`;

/**
 * Modal implementation class
 */
export default class Modal extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._closeElm = this.shadowRoot.querySelector('.close');
    this._onCloseListener = () => this.handleCloseClick();
  }

  /**
   * Attach
   */
  connectedCallback() {
    this._closeElm.addEventListener('click', this._onCloseListener);
  }

  /**
   * Detach
   */
  disconnectedCallback() {
    this._closeElm.removeEventListener('click', this._onCloseListener);
  }

  /**
   * Click close
   */
  handleCloseClick() {
    const dialogElm = this.shadowRoot.querySelector('dialog');
    dialogElm.close();
  }
}

// Register custom element
window.customElements.define('wc-modal', Modal);
