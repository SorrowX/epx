'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const handlerMap = /* @__PURE__ */ new WeakMap();
function handleResize(entries) {
  for (let i = 0, len = entries.length; i < len; ++i) {
    const entry = entries[i];
    const handler = handlerMap.get(entry.target);
    if (typeof handler === "function") {
      handler(entry);
    }
  }
}
let resizeObserver = null;
const createResizeObserver = () => {
  if (!resizeObserver) {
    resizeObserver = new window.ResizeObserver(handleResize);
  }
};
function observeResize(el, handler) {
  handlerMap.set(el, handler);
  resizeObserver == null ? void 0 : resizeObserver.observe(el);
}
function unobserveResize(el) {
  if (handlerMap.has(el)) {
    resizeObserver == null ? void 0 : resizeObserver.unobserve(el);
    handlerMap.delete(el);
  }
}
function useResize() {
  createResizeObserver();
  return {
    observeResize,
    unobserveResize
  };
}

exports.observeResize = observeResize;
exports.unobserveResize = unobserveResize;
exports.useResize = useResize;
//# sourceMappingURL=index.js.map
