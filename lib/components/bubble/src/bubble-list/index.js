'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var useListData = require('../hooks/use-list-data.js');
var useDisplayData = require('../hooks/use-display-data.js');
var context = require('../context.js');
var index$2 = require('../bubble/index.js');
var bubbleList = require('./bubble-list.js');
var index = require('../../../../hooks/use-state/index.js');
var index$1 = require('../../../../hooks/use-event-callback/index.js');
var tags = require('../../../../constants/tags.js');

var BubbleList = vue.defineComponent({
  name: "ElBubbleList",
  props: bubbleList.bubbleListProps,
  setup(props, { attrs, slots, expose }) {
    const ns = elementPlus.useNamespace("bubble-list");
    const listPrefixCls = ns.b();
    const TOLERANCE = 1;
    const listRef = vue.ref();
    const bubbleRefs = vue.ref({});
    const items = vue.computed(() => props.items);
    const mergedData = useListData["default"](items, props.roles);
    const [displayData, onTypingComplete] = useDisplayData["default"](
      mergedData,
      (key) => {
        var _a;
        (_a = props.onLastBubbleTypingComplete) == null ? void 0 : _a.call(props, key);
      }
    );
    const [scrollReachEnd, setScrollReachEnd] = index.useState(true);
    const [updateCount, setUpdateCount] = index.useState(0);
    const onInternalScroll = (e) => {
      const target = e.target;
      setScrollReachEnd(
        target.scrollHeight - Math.abs(target.scrollTop) - target.clientHeight <= TOLERANCE
      );
    };
    vue.watch(updateCount, () => {
      var _a, _b;
      if (props.autoScroll && vue.unref(listRef) && vue.unref(scrollReachEnd)) {
        (_b = vue.unref(listRef)) == null ? void 0 : _b.scrollTo({
          top: (_a = vue.unref(listRef)) == null ? void 0 : _a.scrollHeight
        });
      }
    });
    vue.watch(
      () => vue.unref(displayData).length,
      () => {
        var _a;
        if (props.autoScroll) {
          const lastItemKey = (_a = vue.unref(displayData)[vue.unref(displayData).length - 2]) == null ? void 0 : _a.key;
          const bubbleInst = vue.unref(bubbleRefs)[lastItemKey];
          if (bubbleInst && bubbleInst.nativeElement) {
            const { top, bottom } = bubbleInst.nativeElement.getBoundingClientRect();
            const { top: listTop, bottom: listBottom } = vue.unref(listRef).getBoundingClientRect();
            const isVisible = top < listBottom && bottom > listTop;
            if (isVisible) {
              setUpdateCount(vue.unref(updateCount) + 1);
              setScrollReachEnd(true);
            }
          }
        }
      }
    );
    const onBubbleUpdate = index$1.useEventCallback(() => {
      if (props.autoScroll) {
        setUpdateCount(vue.unref(updateCount) + 1);
      }
    });
    const context$1 = vue.computed(() => ({
      onUpdate: onBubbleUpdate
    }));
    expose({
      nativeElement: listRef,
      scrollTo: ({
        key,
        offset,
        behavior = "smooth",
        block
      }) => {
        if (typeof offset === "number") {
          vue.unref(listRef).scrollTo({
            top: offset,
            behavior
          });
        } else if (key !== void 0) {
          const bubbleInst = vue.unref(bubbleRefs)[key];
          if (bubbleInst) {
            const index = vue.unref(displayData).findIndex(
              (dataItem) => dataItem.key === key
            );
            setScrollReachEnd(index === vue.unref(displayData).length - 1);
            bubbleInst.nativeElement.scrollIntoView({
              behavior,
              block
            });
          }
        }
      }
    });
    return () => {
      return vue.h(
        context.BubbleContextProvider,
        {
          value: context$1.value
        },
        {
          default: () => {
            return vue.h(
              tags.DIV_TAG,
              {
                ...attrs,
                class: [
                  ns.b(),
                  scrollReachEnd.value ? `${listPrefixCls}-reach-end` : ""
                ].concat(attrs.class),
                ref: listRef,
                onScroll: onInternalScroll
              },
              vue.unref(displayData).map(({ key, ...bubble }) => {
                return vue.h(
                  index$2["default"],
                  {
                    ...bubble,
                    key,
                    ref: (node) => {
                      if (node) {
                        bubbleRefs.value[key] = node;
                      } else {
                        delete bubbleRefs.value[key];
                      }
                    },
                    onTypingComplete: () => {
                      var _a;
                      (_a = bubble.onTypingComplete) == null ? void 0 : _a.call(bubble);
                      onTypingComplete(key);
                    }
                  },
                  slots
                );
              })
            );
          }
        }
      );
    };
  }
});

exports["default"] = BubbleList;
//# sourceMappingURL=index.js.map
