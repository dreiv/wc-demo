/**
 * Hello Wold class
 */
export default class HelloWorld extends HTMLElement {
  /**
   * Attach
   */
  connectedCallback() {
    this.innerHTML = '<p>Hello World</p>';
  }
}

// Register custom element
customElements.define('wc-helloworld', HelloWorld);
