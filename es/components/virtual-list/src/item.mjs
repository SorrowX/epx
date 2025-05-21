import { defineComponent, inject, getCurrentInstance, onMounted, onBeforeUnmount, renderSlot } from 'vue';
import { cacheKey } from './hooks.mjs';
import { useResize } from '../../../hooks/use-resize/index.mjs';
import { definePropType } from 'element-plus/es/utils/index';
import { throttle } from '../../../utils/performance.mjs';

var Item = defineComponent({
  name: "Item",
  inheritAttrs: false,
  props: {
    index: {
      type: Number
    },
    data: {
      type: definePropType(Object),
      default: () => ({})
    },
    isDynamicSize: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const cache = inject(cacheKey);
    const { observeResize, unobserveResize } = useResize();
    const instance = getCurrentInstance();
    const getEl = () => {
      var _a, _b;
      const el = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$el;
      if ((el == null ? void 0 : el.nextElementSibling) && el.nextElementSibling !== el.nextSibling && el.nodeType === 3 && el.nodeValue !== "") {
        return null;
      } else {
        return (_b = el == null ? void 0 : el.nextElementSibling) != null ? _b : null;
      }
    };
    let observed = false;
    const setRealSize = (entry) => {
      if (props.isDynamicSize) {
        const el = getEl();
        cache.setRealSize(props.index, el, entry);
      }
    };
    function handleResize(entry) {
      setRealSize(entry);
    }
    const throttleResize = throttle(handleResize, 100);
    function observe() {
      if (observed)
        return;
      const el = getEl();
      if (el) {
        observeResize(el, throttleResize);
        observed = true;
      }
    }
    function unobserve() {
      if (observed) {
        const el = getEl();
        if (el) {
          unobserveResize(el);
        }
        observed = false;
      }
    }
    onMounted(() => {
      observe();
    });
    onBeforeUnmount(() => {
      unobserve();
    });
    return () => renderSlot(slots, "default");
  }
});

export { Item as default };
//# sourceMappingURL=item.mjs.map
