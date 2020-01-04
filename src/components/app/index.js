import { linkDOM } from './domLink';

const template = document.createElement('template');

template.innerHTML = /*html*/ `
  <h1>Web Components with Webpack Starter Kit</h1>

  <div class="box">
    <button data-tag-name="wc-helloworld">show</button>
    <span>Hello World</span>
  </div>

  <main>
    <!-- Attach component -->
  </main>
`;

class App extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const temp = document.importNode(template.content, true);
    this.appendChild(temp);

    linkDOM();
  }
}

customElements.define('my-app', App);
