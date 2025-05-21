'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const editorToolBarContextKey = Symbol("editorToolBarContextKey");
const provideToolBarContext = (context) => {
  return vue.provide(editorToolBarContextKey, context);
};
const useToolBarContext = () => {
  return vue.inject(editorToolBarContextKey);
};

exports.editorToolBarContextKey = editorToolBarContextKey;
exports.provideToolBarContext = provideToolBarContext;
exports.useToolBarContext = useToolBarContext;
//# sourceMappingURL=hooks.js.map
