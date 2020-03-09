/**
 * ShadowRoot disabled class
 */
class NOShadow extends HTMLElement {
  /**
   * Attach
   */
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <style>
        h1 {
          color: #3F51B5;
        }
        .box-noshadow {
          border: 1px solid lightgray;
          padding: 1rem;
        }
      </style>
      <div class="box-noshadow">
        <h1>Disable shadowRoot</h1>
      <div>
    `;
  }
}

// Register custom element
window.customElements.define('wc-noshadow', NOShadow);
