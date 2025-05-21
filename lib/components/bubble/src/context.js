'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('element-plus/es/utils/index');

const BubbleContextKey = Symbol("BubbleContext");
const globalBubbleContextApi = vue.shallowRef();
const useBubbleContextProvider = (value) => {
  vue.provide(BubbleContextKey, value);
  vue.watch(
    value,
    () => {
      globalBubbleContextApi.value = vue.unref(value);
      vue.triggerRef(globalBubbleContextApi);
    },
    { immediate: true, deep: true }
  );
};
const useBubbleContextInject = () => {
  return vue.inject(
    BubbleContextKey,
    vue.computed(() => globalBubbleContextApi.value || {})
  );
};
const BubbleContextProvider = vue.defineComponent({
  props: {
    value: index.definePropType(Object)
  },
  setup(props, { slots }) {
    useBubbleContextProvider(vue.computed(() => props.value || {}));
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});

exports.BubbleContextProvider = BubbleContextProvider;
exports["default"] = BubbleContextProvider;
exports.globalBubbleContextApi = globalBubbleContextApi;
exports.useBubbleContextInject = useBubbleContextInject;
exports.useBubbleContextProvider = useBubbleContextProvider;
//# sourceMappingURL=context.js.map
