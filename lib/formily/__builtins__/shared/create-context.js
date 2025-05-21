'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const createContext = (defaultValue) => {
  const injectKey = Symbol();
  return {
    Provider: vue.defineComponent({
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
        const value = vue.toRef(props, "value");
        vue.provide(injectKey, vue.readonly(value));
        return () => {
          var _a;
          return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots);
        };
      }
    }),
    Consumer: vue.defineComponent({
      name: "ContextConsumer",
      setup(_props, { slots }) {
        const value = vue.inject(injectKey);
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
  return vue.inject(key, vue.ref(null));
};

exports.createContext = createContext;
exports.useContext = useContext;
//# sourceMappingURL=create-context.js.map
