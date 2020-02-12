# (1) observedAttributes

When a custom element is registered in `window.customElements.define`,
`observedAttributes` is called and returns an array to listen for attribute
changes. The reason for choosing an attribute to listen on here is that if you
listen to all properties, there is overhead.

# (2) constructor

Next, `constructor` is called and initialization processing is performed.
The responsibilities of the `constructor` are to set up event listeners and to
create a `shadowRoot`. When you try to use it as a `constructor`, note that it
is a pattern that receives arguments from outside and sets it to attribute. At
this point, it is still an error to set a value for attribute, so be careful.
Also, an operation that attempts to add a child element such as
`this.innerHTML` in the constructor will result in an error. The solution is to
manipulate `attributes` and `render` with `connectedCallback`.

# (3) attributeChangedCallback

After the `constructor` is called, it can receive attribute changes, and
`attributeChangedCallback` is called.

# (4) connectedCallback

`connectedCallback` is called when the tag is attached. The responsibility of
`connectedCallback` is fetching resources and rendering.

# (5) disconnectedCallback

When the tag is detached, `disconnectedCallback` is called. The responsibility
of `disconnectedCallback` is to clean up memory, such as remove event listeners.
