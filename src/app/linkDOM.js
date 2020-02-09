let $main;
let $buttons;

// Link DOM
const linkDOM = () => {
  $main = document.querySelector('main');
  $buttons = document.querySelectorAll('button');

  // Set an event for each item
  [...$buttons].forEach(item =>
    item.addEventListener('click', _handleItemClick),
  );
};

/**
 * Remove DOM
 * @private
 */
const _clearMain = () => {
  while ($main.firstChild) {
    $main.removeChild($main.firstChild);
  }
};

/**
 * Click each item
 * @private
 * @param {CustomEvent} evt
 */
const _handleItemClick = evt => {
  // Initialize
  _clearMain();
  // Attach the tag to main
  $main.appendChild(document.createElement(evt.currentTarget.dataset.tagName));
};

export default linkDOM;
