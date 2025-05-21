import { defineComponent, ref, computed, watch, unref, h } from 'vue';
import { useNamespace } from 'element-plus';
import useListData from '../hooks/use-list-data.mjs';
import useDisplayData from '../hooks/use-display-data.mjs';
import { BubbleContextProvider } from '../context.mjs';
import Bubble from '../bubble/index.mjs';
import { bubbleListProps } from './bubble-list.mjs';
import { useState } from '../../../../hooks/use-state/index.mjs';
import { useEventCallback } from '../../../../hooks/use-event-callback/index.mjs';
import { DIV_TAG } from '../../../../constants/tags.mjs';

var BubbleList = defineComponent({
  name: "ElBubbleList",
  props: bubbleListProps,
  setup(props, { attrs, slots, expose }) {
    const ns = useNamespace("bubble-list");
    const listPrefixCls = ns.b();
    const TOLERANCE = 1;
    const listRef = ref();
    const bubbleRefs = ref({});
    const items = computed(() => props.items);
    const mergedData = useListData(items, props.roles);
    const [displayData, onTypingComplete] = useDisplayData(
      mergedData,
      (key) => {
        var _a;
        (_a = props.onLastBubbleTypingComplete) == null ? void 0 : _a.call(props, key);
      }
    );
    const [scrollReachEnd, setScrollReachEnd] = useState(true);
    const [updateCount, setUpdateCount] = useState(0);
    const onInternalScroll = (e) => {
      const target = e.target;
      setScrollReachEnd(
        target.scrollHeight - Math.abs(target.scrollTop) - target.clientHeight <= TOLERANCE
      );
    };
    watch(updateCount, () => {
      var _a, _b;
      if (props.autoScroll && unref(listRef) && unref(scrollReachEnd)) {
        (_b = unref(listRef)) == null ? void 0 : _b.scrollTo({
          top: (_a = unref(listRef)) == null ? void 0 : _a.scrollHeight
        });
      }
    });
    watch(
      () => unref(displayData).length,
      () => {
        var _a;
        if (props.autoScroll) {
          const lastItemKey = (_a = unref(displayData)[unref(displayData).length - 2]) == null ? void 0 : _a.key;
          const bubbleInst = unref(bubbleRefs)[lastItemKey];
          if (bubbleInst && bubbleInst.nativeElement) {
            const { top, bottom } = bubbleInst.nativeElement.getBoundingClientRect();
            const { top: listTop, bottom: listBottom } = unref(listRef).getBoundingClientRect();
            const isVisible = top < listBottom && bottom > listTop;
            if (isVisible) {
              setUpdateCount(unref(updateCount) + 1);
              setScrollReachEnd(true);
            }
          }
        }
      }
    );
    const onBubbleUpdate = useEventCallback(() => {
      if (props.autoScroll) {
        setUpdateCount(unref(updateCount) + 1);
      }
    });
    const context = computed(() => ({
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
          unref(listRef).scrollTo({
            top: offset,
            behavior
          });
        } else if (key !== void 0) {
          const bubbleInst = unref(bubbleRefs)[key];
          if (bubbleInst) {
            const index = unref(displayData).findIndex(
              (dataItem) => dataItem.key === key
            );
            setScrollReachEnd(index === unref(displayData).length - 1);
            bubbleInst.nativeElement.scrollIntoView({
              behavior,
              block
            });
          }
        }
      }
    });
    return () => {
      return h(
        BubbleContextProvider,
        {
          value: context.value
        },
        {
          default: () => {
            return h(
              DIV_TAG,
              {
                ...attrs,
                class: [
                  ns.b(),
                  scrollReachEnd.value ? `${listPrefixCls}-reach-end` : ""
                ].concat(attrs.class),
                ref: listRef,
                onScroll: onInternalScroll
              },
              unref(displayData).map(({ key, ...bubble }) => {
                return h(
                  Bubble,
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

export { BubbleList as default };
//# sourceMappingURL=index.mjs.map
