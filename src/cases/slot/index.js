import './modal.js';

// Create template tag
const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <style>
    :host {
      display: block;
    }
    h1 {
      font-weigh: bold;
      font-size: 50px;
      text-align: center;
    }
    .container {
      margin-top: 20px;
    }
  </style>
  <h1>Slot</h1>
  <button class="signin-button">signin</button>
  <button class="signup-button">signup</button>
  <div class="container"></div>
`;

/**
 * Slot testing class
 */
export default class Slot extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._signinBtnElm = this.shadowRoot.querySelector('.signin-button');
    this._signupBtnElm = this.shadowRoot.querySelector('.signup-button');

    this._onSigninClickListener = this.handleSigninClick.bind(this);
    this._onSignupClickListener = this.handleSignupClick.bind(this);
  }

  /**
   * Attach
   */
  connectedCallback() {
    this._signinBtnElm.addEventListener('click', this._onSigninClickListener);
    this._signupBtnElm.addEventListener('click', this._onSignupClickListener);
  }

  /**
   * Detach
   */
  disconnectedCallback() {
    this._signinBtnElm.removeEventListener(
      'click',
      this._onSigninClickListener,
    );
    this._signupBtnElm.removeEventListener(
      'click',
      this._onSignupClickListener,
    );
  }

  /**
   * Click signin
   */
  handleSigninClick() {
    const containerElm = this.shadowRoot.querySelector('.container');
    containerElm.innerHTML = /*html*/ `
      <wc-modal>
        <div slot="content">
          <h1>Signin</h1>
        </div>
      </wc-modal>
    `;
  }

  /**
   * Click signup
   */
  handleSignupClick() {
    const containerElm = this.shadowRoot.querySelector('.container');
    containerElm.innerHTML = /*html*/ `
      <wc-modal>
        <div slot="content">
          <h1>Signup</h1>
        </div>
      </wc-modal>
    `;
  }
}

// Register custom element
window.customElements.define('wc-slot', Slot);
