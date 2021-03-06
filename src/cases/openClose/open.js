/**
 * Open implementation class
 */
class Open extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        :host {
          display: block;
        }
        h1 {
          font-weigh: bold;
          font-size: 50px;
          text-align: center;
        }
      </style>
      <h1>Open</h1>
    `;
  }
}

// Register custom element
window.customElements.define('wc-open', Open);
