// Read SCSS file as a raw CSS text
import styleText from './index.component.scss';

// Create template tag
const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <h1>Adopted Stylesheets</h1>
`;

// Create stylesheet
const sheet = new CSSStyleSheet();
sheet.replaceSync(styleText);

/**
 * AdoptedStyleSheets implementation class
 */
export default class AdoptedStyleSheets extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }

  /**
   * Attach
   */
  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Register custom element
window.customElements.define('wc-adopted-stylesheets', AdoptedStyleSheets);
