import './item.js';
import './inner.html';

/**
 * AdaptedCallback testing class
 */
export default class AdaptedCallback extends HTMLElement {
  /**
   * Attach
   */
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <style>
        .container {
          width: 500px;
          margin: 0 auto;
        }
        iframe {
          width:100%;
          height: 200px;
        }
        .button {
          display: block;
          width: 100%;
        }
      </style>
      <wc-adapted-item></wc-adapted-item>
      <div class="container">
        <div>Outer html</div>
        <button class="button">move</button>
        <iframe src="./inner.html">
      </div>
    `;
    this.clickListener = this.handleClick.bind(this);
    const buttonElm = this.querySelector('.button');
    buttonElm.addEventListener('click', this.clickListener);
  }

  /**
   * Detach
   */
  disconnectedCallback() {
    const buttonElm = this.querySelector('.button');
    buttonElm.removeEventListener('click', this.clickListener);
  }

  /**
   * Click button
   */
  handleClick() {
    const item = this.querySelector('wc-adapted-item');
    const iframeElm = this.querySelector('iframe');
    iframeElm.contentDocument.body.appendChild(item);
  }
}

// Register custom element
window.customElements.define('wc-adapted-callback', AdaptedCallback);
