import './anchor.js';

/**
 * Extends testing class
 */
export default class Extends extends HTMLElement {
  /**
   * Attach
   */
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <style>
        a {
          display: block;
          text-align: center;
        }
      </style>
      <h1>Extend existing UI parts</h1>
      <!--
        Apply custom elements using the 'is' attribute
        Alternatively, it can also be created with the new operator, DOM API
      -->
      <a href="https://www.google.com/" is="wc-confirm-anchor">
        Google
      </a>
    `;
  }
}

// Register custom element
window.customElements.define('wc-extends', Extends);
