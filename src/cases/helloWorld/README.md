NOTE: Don't put `this.innerHTML` in your `constructor`. Because you can't add
children or manipulate `attributes` in the `constructor` yet. If do that, you'll
get an error like this:

```
Uncaught DOMException: Failed to construct 'CustomElement': The result must not have children
```
