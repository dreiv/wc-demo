import './item.js';

// Create template tag
const template = document.createElement('template');
template.innerHTML = /*html*/ `
  <style>
    :host {
      display: block;
    }
    h1 {
      text-align: center;
      font-weight: bold;
      font-size: 3rem;
    }
    .container {
      padding: 1rem 0;
    }
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid lightgray;
      padding: 0.5rem;
    }
    input {
      flex-grow: 1;
      margin: 0 0.5rem;
      height: 1rem;
    }
    wc-todo-item + wc-todo-item {
      margin-top: 1rem;
    }
  </style>
  <h1>Todo List</h1>
  <form>
    <input type="text" />
    <button type="submit">submit</button>
  </form>
  <div class="container"></div>
`;

/**
 * TodoList class
 */
export default class TodoList extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._containerElm = this.shadowRoot.querySelector('.container');
    this._submitElm = this.shadowRoot.querySelector('form');
    this._inputElm = this.shadowRoot.querySelector('input');

    this._clickSubmitListener = this._tryAddItem.bind(this);
  }

  /**
   * Attach
   */
  connectedCallback() {
    this._submitElm.addEventListener('submit', this._clickSubmitListener);

    this._render();
  }

  /**
   * Detach
   */
  disconnectedCallback() {
    this._submitElm.removeEventListener('submit', this._clickSubmitListener);
    const todoElms = this.shadowRoot.querySelectorAll('wc-todo-item');
    [...todoElms].forEach(item => item.clearListeners());
  }

  /**
   * Render
   * @private
   */
  _render() {
    // Insert test data
    this._addItem('TaskC', false);
    this._addItem('TaskB', true);
    this._addItem('TaskA', false);
  }

  /**
   * Find Todo item from ID
   * @private
   * @param {string} id
   * @returns {Element | undefined}
   */
  _findItemById(id) {
    const todoElms = this.shadowRoot.querySelectorAll('wc-todo-item');
    const target = [...todoElms].find(item => item.id === id);

    return target;
  }

  /**
   * Try add todoItem
   * @private
   * @param {CustomEvent} evt
   */
  _tryAddItem(evt) {
    evt.preventDefault();
    const val = this._inputElm.value;
    if (!val) {
      return;
    }
    // Initialize input
    this._inputElm.value = '';
    this._addItem(val, false);
  }

  /**
   * Add todo item
   * @private
   * @param {label} label
   * @param {boolean} checked
   */
  _addItem(label, checked) {
    const todoElm = document.createElement('wc-todo-item');
    todoElm.label = label;
    todoElm.checked = checked;

    const onToggleListener = this._toggleItem.bind(this);
    const onRemoveListener = this._removeItem.bind(this);
    todoElm.addEventListener('onToggle', onToggleListener);
    todoElm.addEventListener('onRemove', onRemoveListener);
    todoElm.clearListeners = () => {
      todoElm.removeEventListener('onToggle', onToggleListener);
      todoElm.removeEventListener('onRemove', onRemoveListener);
    };

    // Add Todo items to the top of the container
    this._containerElm.insertBefore(todoElm, this._containerElm.firstChild);
  }

  /**
   * Toggle todo item for check mark
   * @private
   * @param {CustomEvent} e
   */
  _toggleItem(e) {
    const item = this._findItemById(e.detail.id);
    if (!item) {
      return;
    }

    // Toggle check mark
    item.checked = !item.checked;
  }

  /**
   * Remove todo item from todo list
   * @private
   * @param {CustomEvent} e
   */
  _removeItem(e) {
    const item = this._findItemById(e.detail.id);
    if (!item) {
      return;
    }

    // Remove target todo item
    this._containerElm.removeChild(item);
  }
}

// Register custom element
window.customElements.define('wc-todo-list', TodoList);
