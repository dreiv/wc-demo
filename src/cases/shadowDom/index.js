import './noShadow.js';
import './shadow.js';

/**
 * ShadowRoot testing class
 */
export default class ShadowNoShadow extends HTMLElement {
  /**
   * Attach
   */
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <style>
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 50px 0;
        }
        wc-shadow-noshadow,
        wc-noshadow,
        wc-shadow {
          flex: 1
        }
      </style>
      <h1>Enable or Disable of ShadowRoot</h1>
      <div class="container">
        <wc-noshadow></wc-noshadow>
        <wc-shadow><wc-shadow>
      </div>
    `;
  }
}

// Register custom element
window.customElements.define('wc-shadow-noshadow', ShadowNoShadow);
