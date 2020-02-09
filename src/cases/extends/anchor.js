/**
 * ConfirmAnchor class that extends Anchor
 */
export default class ConfirmAnchor extends HTMLAnchorElement {
  /**
   * Attach
   */
  connectedCallback() {
    this.clickListener = evt => {
      const result = confirm(`Jump to link? : '${this.href}'`);

      if (!result) {
        // Disable Anchor action
        evt.preventDefault();
      }
    };
    this.addEventListener('click', this.clickListener);
  }

  /**
   * Detach
   */
  disconnectedCallback() {
    this.removeEventListener('click', this.clickListener);
  }
}

// Register custom element
// Add third argument when extends existing browser element
customElements.define('wc-confirm-anchor', ConfirmAnchor, { extends: 'a' });
