import linkDOM from './linkDOM';

// Create template tag
const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <h1>Features of web components</h1>

  <div class="box">
    <button data-tag-name="wc-helloworld">show</button>
    <span>🌍 1. HelloWorld with simple CustomElements</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-lifecycle">show</button>
    <span>🚴 2. Try the life cycle (other than Adapted Callback)</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-adapted-callback">show</button>
    <span>🎣 3. Adapted Callback</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-extends">show</button>
    <span>🔧 4. Extends HtmlXXXElement</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-3ways">show</button>
    <span>🛤️ 5. Three main ways to generate CustomElements</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-shadow-noshadow">show</button>
    <span>🌓 6. CustomElements with shadow DOM and without</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-open-close">show</button>
    <span>🚪 7. Open and Close mode of ShadowRoot</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-template">show</button>
    <span>🐾 8. Template</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-slot">show</button>
    <span>🎰 9. Slot</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-adopted-stylesheets">show</button>
    <span>🌸 10. Adopted Stylesheets</span>
  </div>

  <div class="box">
    <button data-tag-name="wc-todo-list">show</button>
    <span>🍺 11. (Extra) Todo List Example</span>
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
    // Activate template with cloneNode
    this.appendChild(template.content.cloneNode(true));

    linkDOM();
  }
}

// Register custom element
window.customElements.define('my-app', App);
