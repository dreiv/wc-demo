/**
 * Hello Wold class
 */
export default class HelloWorld extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();
  }

  /**
   * Attach
   */
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <p>Hello World</p>
    `;
  }
}

// Register custom element
window.customElements.define('wc-helloworld', HelloWorld);
