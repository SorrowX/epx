import { isVNode, h, toRaw } from 'vue';

const resolveComponent = (child, props) => {
  if (child) {
    if (typeof child === "string" || typeof child === "number") {
      return child;
    } else if (typeof child === "function") {
      return child(props);
    } else if (isVNode(child)) {
      return child;
    } else {
      return h(toRaw(child), props);
    }
  }
  return null;
};

export { resolveComponent };
//# sourceMappingURL=resolve-component.mjs.map
