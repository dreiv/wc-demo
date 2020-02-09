/**
 * Close implementation class
 */
class Close extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();
    const root = this.attachShadow({ mode: 'closed' });
    root.innerHTML = /*html*/ `
      <style>
        h1 {
          font-weigh: bold;
          font-size: 50px;
          text-align: center;
        }
      </style>
      <h1>Close</h1>
    `;
  }
}

// Register custom element
window.customElements.define('wc-close', Close);
