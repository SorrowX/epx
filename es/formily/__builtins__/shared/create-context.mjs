import { defineComponent, toRef, provide, readonly, inject, ref } from 'vue';

const createContext = (defaultValue) => {
  const injectKey = Symbol();
  return {
    Provider: defineComponent({
      name: "ContextProvider",
      props: {
        value: {
          type: null,
          default() {
            return defaultValue != null ? defaultValue : null;
          }
        }
      },
      setup(props, { slots }) {
        const value = toRef(props, "value");
        provide(injectKey, readonly(value));
        return () => {
          var _a;
          return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots);
        };
      }
    }),
    Consumer: defineComponent({
      name: "ContextConsumer",
      setup(_props, { slots }) {
        const value = inject(injectKey);
        return () => {
          var _a;
          return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, value);
        };
      }
    }),
    injectKey
  };
};
const useContext = (context) => {
  const key = context.injectKey;
  return inject(key, ref(null));
};

export { createContext, useContext };
//# sourceMappingURL=create-context.mjs.map
