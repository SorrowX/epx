import { defineComponent, ref, toRefs, onMounted, h, nextTick } from 'vue';
import { useNamespace, ElScrollbar } from 'element-plus';
import { listProps, listEmits } from './list.mjs';
import { useLoad } from './hooks.mjs';
import { throttle } from '../../../utils/performance.mjs';
import { DIV_TAG } from '../../../constants/tags.mjs';

var List = defineComponent({
  name: "ElList",
  inheritAttrs: false,
  props: listProps,
  emits: listEmits,
  setup(props, { attrs, slots, expose }) {
    const ns = useNamespace("list");
    const target = ref();
    const scrollbarRef = ref();
    const { handleLoad, renderLoadMore, isShouldTrigger } = useLoad(
      toRefs(props),
      {
        direction: "bottom",
        handleError: () => handleLoad(true)
      }
    );
    const {
      handlePreLoad,
      renderLoadMore: renderLoadMoreTop,
      isShouldTrigger: isShouldTriggerTop
    } = useLoad(toRefs(props), {
      direction: "top",
      handleError: () => handlePreLoad(true, target.value)
    });
    const onThrottleScroll = throttle(() => {
      handleLoad(isShouldTrigger(target.value));
      handlePreLoad(
        isShouldTriggerTop(target.value),
        target.value
      );
    }, props.infiniteScrollDelay);
    const handleScroll = () => {
      onThrottleScroll();
    };
    const initTarget = () => {
      if (!props.nativeScrollbar) {
        target.value = scrollbarRef.value.wrapRef;
      }
    };
    onMounted(() => {
      initTarget();
    });
    const scrollToBottom = () => {
      nextTick(() => {
        const content = target.value;
        if (content) {
          content.scrollTop = content.scrollHeight - content.clientHeight;
        }
      });
    };
    expose({
      target,
      scrollToBottom
    });
    return () => {
      const { nativeScrollbar } = props;
      const renderChild = () => {
        const list = h(
          DIV_TAG,
          { class: ns.b("wrap") },
          props.list.map((item, index) => {
            var _a;
            return (_a = slots.default) == null ? void 0 : _a.call(slots, { data: item, index });
          })
        );
        return [renderLoadMoreTop(true), list, renderLoadMore()];
      };
      const data = {
        ...attrs,
        class: [ns.b(), attrs.class, nativeScrollbar ? ns.m("scrollbar") : ""],
        ref: nativeScrollbar ? target : scrollbarRef,
        onScroll: handleScroll
      };
      return nativeScrollbar ? h(DIV_TAG, data, [...renderChild()]) : h(ElScrollbar, data, {
        default: () => renderChild()
      });
    };
  }
});

export { List as default };
//# sourceMappingURL=index.mjs.map
