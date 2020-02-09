import './close.js';
import './open.js';

/**
 * Open and Close testing class
 */
export default class OpenClose extends HTMLElement {
  /**
   * Attach
   */
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <style>
        .button {
          width: 100px;
          height: 20px;
          display: block;
          margin: 0 auto;
        }
      </style>
      <h1>Mode of ShadowRoot</h1>
      <button class="button">click</button>
      <wc-open></wc-open>
      <wc-close></wc-close>
    `;

    this.clickListener = this.handleClick.bind(this);
    const buttonElm = this.querySelector('button');
    buttonElm.addEventListener('click', this.clickListener);
  }

  /**
   * Detach
   */
  disconnectedCallback() {
    const buttonElm = this.querySelector('button');
    buttonElm.removeEventListener('click', this.clickListener);
  }

  /**
   * Ckick button
   */
  handleClick() {
    const openElm = this.querySelector('wc-open');
    const closeElm = this.querySelector('wc-close');

    if (openElm.shadowRoot) {
      // Come here
      alert('Get Open ShadowDOM', openElm.shadowRoot);
    }
    if (closeElm.shadowRoot) {
      // Don't come here
      alert('Get Closed ShadowDOM', openElm.shadowRoot);
    }

    console.log(openElm.shadowRoot);
    // shadowRoot returns null
    console.log(closeElm.shadowRoot);
  }
}

// Register custom element
window.customElements.define('wc-open-close', OpenClose);
