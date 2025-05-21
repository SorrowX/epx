'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var core = require('@vueuse/core');
var hooks = require('../../list/src/hooks.js');
var hooks$1 = require('./hooks.js');
var virtualList = require('./virtual-list.js');
var scrollbar = require('./scrollbar.js');
var item = require('./item.js');
var performance = require('../../../utils/performance.js');
var tags = require('../../../constants/tags.js');
var index = require('element-plus/es/utils/index');

var VirtualList = vue.defineComponent({
  name: "ElVirtualList",
  inheritAttrs: false,
  props: virtualList.virtualListProps,
  emits: virtualList.virtualListEmits,
  setup(props, { attrs, slots, expose, emit }) {
    const ns = elementPlus.useNamespace("virtual-list");
    const propsRefs = vue.toRefs(props);
    const { list: listRef } = propsRefs;
    const { direction, overscan } = props;
    const scrollbarRef = vue.ref();
    const { isShouldTrigger, handleLoad, renderLoadMore } = hooks.useLoad(propsRefs, {
      direction: "bottom",
      handleError: () => {
        handleLoad(true, {
          finallyCallback: updateRenderList
        });
      }
    });
    const cache = hooks$1.useCache(props);
    vue.provide(hooks$1.cacheKey, cache);
    const isDynamicSize = vue.computed(() => !props.itemFixed);
    const createItemSize = () => {
      return isDynamicSize.value ? (i) => cache.getRealSize(i) : props.itemSize;
    };
    const { list, containerProps, wrapperProps, scrollTo } = core.useVirtualList(
      listRef,
      {
        [direction === "vertical" ? "itemHeight" : "itemWidth"]: createItemSize(),
        overscan
      }
    );
    const updateRenderList = () => {
      const container = containerProps.ref.value;
      if (container) {
        const offset = direction === "vertical" ? "scrollTop" : "scrollLeft";
        container[offset] += 1;
      }
    };
    const handleInfiniteScroll = (shouldTrigger) => {
      var _a;
      if (index.isFunction(props.infiniteScroll) && !props.infiniteScrollDisabled && shouldTrigger) {
        (_a = props.infiniteScroll) == null ? void 0 : _a.call(props);
      }
    };
    const handleInfiniteScrollup = async (e) => {
      var _a;
      const { scrollTop } = e.target;
      const shouldTrigger = scrollTop < props.infiniteScrollDistance;
      if (index.isFunction(props.infiniteScrollup) && !props.infiniteScrollDisabled && shouldTrigger) {
        let firstData = null;
        try {
          firstData = listRef.value[0];
          await ((_a = props.infiniteScrollup) == null ? void 0 : _a.call(props));
        } catch (e2) {
        } finally {
          const index = listRef.value.indexOf(firstData);
          if (index !== -1) {
            scrollTo(index);
          }
        }
      }
    };
    const onThrottleScroll = performance.throttle((e) => {
      const shouldTrigger = isShouldTrigger(e.target);
      handleLoad(shouldTrigger, {
        finallyCallback: updateRenderList
      });
      handleInfiniteScroll(shouldTrigger);
      handleInfiniteScrollup(e);
    }, props.infiniteScrollDelay);
    const { onScroll } = containerProps;
    const handleScroll = (e) => {
      emit("scroll", e);
      onScroll();
      onThrottleScroll(e);
    };
    const initContainerRef = () => {
      if (!props.nativeScrollbar) {
        containerProps.ref.value = scrollbarRef.value.wrapRef;
      }
    };
    vue.onMounted(() => {
      initContainerRef();
    });
    expose({
      scrollTo
    });
    return () => {
      var _a;
      const renderContent = () => vue.h(
        tags.DIV_TAG,
        {
          style: {
            ...wrapperProps.value.style
          },
          class: ns.b("wrapper")
        },
        list.value.map((item$1) => {
          const { data, index } = item$1;
          return vue.h(
            item["default"],
            { data, isDynamicSize: isDynamicSize.value, key: index, index },
            {
              default: () => {
                var _a2;
                return (_a2 = slots.default) == null ? void 0 : _a2.call(slots, item$1);
              }
            }
          );
        })
      );
      const renderChild = () => {
        var _a2, _b;
        return [
          vue.h(tags.DIV_TAG, { class: ns.b("before") }, (_a2 = slots.before) == null ? void 0 : _a2.call(slots)),
          renderContent(),
          renderLoadMore(),
          vue.h(tags.DIV_TAG, { class: ns.b("after") }, (_b = slots.after) == null ? void 0 : _b.call(slots))
        ];
      };
      return props.nativeScrollbar ? vue.h(
        tags.DIV_TAG,
        {
          class: [ns.b(), attrs.class],
          style: {
            ...(_a = attrs.style) != null ? _a : {},
            ...index.isObject(containerProps.style) ? containerProps.style : {}
          },
          ref: containerProps.ref,
          onScroll: handleScroll
        },
        renderChild()
      ) : vue.h(
        scrollbar["default"],
        {
          ref: scrollbarRef,
          class: [ns.b(), attrs.class],
          style: attrs.style,
          wrapOptions: {
            style: {
              ...index.isObject(containerProps.style) ? containerProps.style : {}
            },
            onScroll: handleScroll
          }
        },
        {
          default: () => renderChild()
        }
      );
    };
  }
});

exports["default"] = VirtualList;
//# sourceMappingURL=index.js.map
