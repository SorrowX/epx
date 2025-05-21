function isValidElement(element) {
  return isVueOptions(element) || element && typeof element === "object" && "componentOptions" in element && "context" in element && element.tag !== void 0;
}
function isVnode(element) {
  return element && typeof element === "object" && "componentOptions" in element && "context" in element && element.tag !== void 0;
}
function isVueOptions(options) {
  return options && (typeof options.template === "string" || typeof options.render === "function");
}
function composeExport(s0, s1) {
  return Object.assign(s0, s1);
}

export { composeExport, isValidElement, isVnode, isVueOptions };
//# sourceMappingURL=utils.mjs.map
