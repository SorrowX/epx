import { provide, inject } from 'vue';

const editorToolBarContextKey = Symbol("editorToolBarContextKey");
const provideToolBarContext = (context) => {
  return provide(editorToolBarContextKey, context);
};
const useToolBarContext = () => {
  return inject(editorToolBarContextKey);
};

export { editorToolBarContextKey, provideToolBarContext, useToolBarContext };
//# sourceMappingURL=hooks.mjs.map
