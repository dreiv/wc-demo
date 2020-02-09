import LifecycleItem from './item.js';

/**
 * Lifecycle testing class
 */
export default class Lifecycle extends HTMLElement {
  /**
   * Attach
   */
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <wc-lifecycle-item label="LifeCycle"></wc-lifecycle-item>
    `;

    // Register `LifecycleItem` from the component on this side
    // If you define it in `LifecycleItem`, `window.customElements.define` is called
    // Then `observedAttributes` is also called
    // So it is not suitable for life cycle testing
    if (!window.customElements.get('wc-lifecycle-item')) {
      window.customElements.define('wc-lifecycle-item', LifecycleItem);
    }
  }
}

// Register custom element
window.customElements.define('wc-lifecycle', Lifecycle);
