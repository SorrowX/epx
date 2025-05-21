'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var list = require('./list.js');
var hooks = require('./hooks.js');
var performance = require('../../../utils/performance.js');
var tags = require('../../../constants/tags.js');

var List = vue.defineComponent({
  name: "ElList",
  inheritAttrs: false,
  props: list.listProps,
  emits: list.listEmits,
  setup(props, { attrs, slots, expose }) {
    const ns = elementPlus.useNamespace("list");
    const target = vue.ref();
    const scrollbarRef = vue.ref();
    const { handleLoad, renderLoadMore, isShouldTrigger } = hooks.useLoad(
      vue.toRefs(props),
      {
        direction: "bottom",
        handleError: () => handleLoad(true)
      }
    );
    const {
      handlePreLoad,
      renderLoadMore: renderLoadMoreTop,
      isShouldTrigger: isShouldTriggerTop
    } = hooks.useLoad(vue.toRefs(props), {
      direction: "top",
      handleError: () => handlePreLoad(true, target.value)
    });
    const onThrottleScroll = performance.throttle(() => {
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
    vue.onMounted(() => {
      initTarget();
    });
    const scrollToBottom = () => {
      vue.nextTick(() => {
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
        const list = vue.h(
          tags.DIV_TAG,
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
      return nativeScrollbar ? vue.h(tags.DIV_TAG, data, [...renderChild()]) : vue.h(elementPlus.ElScrollbar, data, {
        default: () => renderChild()
      });
    };
  }
});

exports["default"] = List;
//# sourceMappingURL=index.js.map
