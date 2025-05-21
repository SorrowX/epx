'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var hooks = require('./hooks.js');
var index$1 = require('../../../hooks/use-resize/index.js');
var index = require('element-plus/es/utils/index');
var performance = require('../../../utils/performance.js');

var Item = vue.defineComponent({
  name: "Item",
  inheritAttrs: false,
  props: {
    index: {
      type: Number
    },
    data: {
      type: index.definePropType(Object),
      default: () => ({})
    },
    isDynamicSize: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const cache = vue.inject(hooks.cacheKey);
    const { observeResize, unobserveResize } = index$1.useResize();
    const instance = vue.getCurrentInstance();
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
    const throttleResize = performance.throttle(handleResize, 100);
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
    vue.onMounted(() => {
      observe();
    });
    vue.onBeforeUnmount(() => {
      unobserve();
    });
    return () => vue.renderSlot(slots, "default");
  }
});

exports["default"] = Item;
//# sourceMappingURL=item.js.map
