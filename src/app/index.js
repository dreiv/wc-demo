import linkDOM from './linkDOM';

const template = document.createElement('template');

template.innerHTML = /*html*/ `
  <h1>Web Components with Webpack Starter Kit</h1>

  <div class="box">
    <button data-tag-name="wc-helloworld">show</button>
    <span>Hello World</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-lifecycle">show</button>
    <span>LifeCycle</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-adapted-callback">show</button>
    <span>Adapted Callback</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-extends">show</button>
    <span>Extends</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-3ways">show</button>
    <span>Initialize 3 ways</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-shadow-noshadow">show</button>
    <span>Enable or Disable of ShadowRoot</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-open-close">show</button>
    <span>Open or Close of ShadowRoot</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-template">show</button>
    <span>Template</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-slot">show</button>
    <span>Slot</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-adopted-stylesheets">show</button>
    <span>Adopted Stylesheets</span>
  </div>

  <main>
    <!-- Attach component -->
  </main>
`;

/**
 * App class
 */
class App extends HTMLElement {
  /**
   * Attach
   */
  connectedCallback() {
    const temp = document.importNode(template.content, true);
    this.appendChild(temp);

    linkDOM();
  }
}

// Register custom element
window.customElements.define('my-app', App);
