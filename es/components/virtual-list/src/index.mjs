import { defineComponent, toRefs, ref, provide, computed, onMounted, h } from 'vue';
import { useNamespace } from 'element-plus';
import { useVirtualList } from '@vueuse/core';
import { useLoad } from '../../list/src/hooks.mjs';
import { useCache, cacheKey } from './hooks.mjs';
import { virtualListProps, virtualListEmits } from './virtual-list.mjs';
import Scrollbar from './scrollbar.mjs';
import Item from './item.mjs';
import { throttle } from '../../../utils/performance.mjs';
import { DIV_TAG } from '../../../constants/tags.mjs';
import { isObject, isFunction } from 'element-plus/es/utils/index';

var VirtualList = defineComponent({
  name: "ElVirtualList",
  inheritAttrs: false,
  props: virtualListProps,
  emits: virtualListEmits,
  setup(props, { attrs, slots, expose, emit }) {
    const ns = useNamespace("virtual-list");
    const propsRefs = toRefs(props);
    const { list: listRef } = propsRefs;
    const { direction, overscan } = props;
    const scrollbarRef = ref();
    const { isShouldTrigger, handleLoad, renderLoadMore } = useLoad(propsRefs, {
      direction: "bottom",
      handleError: () => {
        handleLoad(true, {
          finallyCallback: updateRenderList
        });
      }
    });
    const cache = useCache(props);
    provide(cacheKey, cache);
    const isDynamicSize = computed(() => !props.itemFixed);
    const createItemSize = () => {
      return isDynamicSize.value ? (i) => cache.getRealSize(i) : props.itemSize;
    };
    const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
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
      if (isFunction(props.infiniteScroll) && !props.infiniteScrollDisabled && shouldTrigger) {
        (_a = props.infiniteScroll) == null ? void 0 : _a.call(props);
      }
    };
    const handleInfiniteScrollup = async (e) => {
      var _a;
      const { scrollTop } = e.target;
      const shouldTrigger = scrollTop < props.infiniteScrollDistance;
      if (isFunction(props.infiniteScrollup) && !props.infiniteScrollDisabled && shouldTrigger) {
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
    const onThrottleScroll = throttle((e) => {
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
    onMounted(() => {
      initContainerRef();
    });
    expose({
      scrollTo
    });
    return () => {
      var _a;
      const renderContent = () => h(
        DIV_TAG,
        {
          style: {
            ...wrapperProps.value.style
          },
          class: ns.b("wrapper")
        },
        list.value.map((item) => {
          const { data, index } = item;
          return h(
            Item,
            { data, isDynamicSize: isDynamicSize.value, key: index, index },
            {
              default: () => {
                var _a2;
                return (_a2 = slots.default) == null ? void 0 : _a2.call(slots, item);
              }
            }
          );
        })
      );
      const renderChild = () => {
        var _a2, _b;
        return [
          h(DIV_TAG, { class: ns.b("before") }, (_a2 = slots.before) == null ? void 0 : _a2.call(slots)),
          renderContent(),
          renderLoadMore(),
          h(DIV_TAG, { class: ns.b("after") }, (_b = slots.after) == null ? void 0 : _b.call(slots))
        ];
      };
      return props.nativeScrollbar ? h(
        DIV_TAG,
        {
          class: [ns.b(), attrs.class],
          style: {
            ...(_a = attrs.style) != null ? _a : {},
            ...isObject(containerProps.style) ? containerProps.style : {}
          },
          ref: containerProps.ref,
          onScroll: handleScroll
        },
        renderChild()
      ) : h(
        Scrollbar,
        {
          ref: scrollbarRef,
          class: [ns.b(), attrs.class],
          style: attrs.style,
          wrapOptions: {
            style: {
              ...isObject(containerProps.style) ? containerProps.style : {}
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

export { VirtualList as default };
//# sourceMappingURL=index.mjs.map
