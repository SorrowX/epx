'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const resolveComponent = (child, props) => {
  if (child) {
    if (typeof child === "string" || typeof child === "number") {
      return child;
    } else if (typeof child === "function") {
      return child(props);
    } else if (vue.isVNode(child)) {
      return child;
    } else {
      return vue.h(vue.toRaw(child), props);
    }
  }
  return null;
};

exports.resolveComponent = resolveComponent;
//# sourceMappingURL=resolve-component.js.map
