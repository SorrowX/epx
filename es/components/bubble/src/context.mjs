import { shallowRef, defineComponent, computed, provide, watch, unref, triggerRef, inject } from 'vue';
import { definePropType } from 'element-plus/es/utils/index';

const BubbleContextKey = Symbol("BubbleContext");
const globalBubbleContextApi = shallowRef();
const useBubbleContextProvider = (value) => {
  provide(BubbleContextKey, value);
  watch(
    value,
    () => {
      globalBubbleContextApi.value = unref(value);
      triggerRef(globalBubbleContextApi);
    },
    { immediate: true, deep: true }
  );
};
const useBubbleContextInject = () => {
  return inject(
    BubbleContextKey,
    computed(() => globalBubbleContextApi.value || {})
  );
};
const BubbleContextProvider = defineComponent({
  props: {
    value: definePropType(Object)
  },
  setup(props, { slots }) {
    useBubbleContextProvider(computed(() => props.value || {}));
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});

export { BubbleContextProvider, BubbleContextProvider as default, globalBubbleContextApi, useBubbleContextInject, useBubbleContextProvider };
//# sourceMappingURL=context.mjs.map
