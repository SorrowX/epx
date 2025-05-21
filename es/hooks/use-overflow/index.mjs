import { ref, watch, onBeforeUnmount } from 'vue';
import { throttle } from '../../utils/performance.mjs';

const CHECK_INTERVAL = 50;
const useOverflow = (containerRef, options) => {
  var _a;
  const overflow = ref(false);
  let resizeObserver;
  let mutationObserver;
  const defaultCondition = (contentWidth, containerWidth) => contentWidth > containerWidth;
  const condition = (_a = options == null ? void 0 : options.condition) != null ? _a : defaultCondition;
  const cleanup = () => {
    if (mutationObserver) {
      mutationObserver.disconnect();
      mutationObserver = null;
    }
    if (resizeObserver && containerRef.value) {
      resizeObserver.unobserve(containerRef.value);
      resizeObserver = null;
    }
  };
  const observer = () => {
    const container = containerRef.value;
    const containerWidth = container == null ? void 0 : container.getBoundingClientRect().width;
    const content = container == null ? void 0 : container.querySelector(options.selectors);
    const contentWidth = content == null ? void 0 : content.getBoundingClientRect().width;
    if (contentWidth && containerWidth && containerWidth !== 0) {
      overflow.value = condition(contentWidth, containerWidth) ? true : false;
    }
  };
  const stopWatch = watch(
    () => containerRef.value,
    (el) => {
      cleanup();
      if (el) {
        resizeObserver = new ResizeObserver(observer);
        resizeObserver.observe(el);
        mutationObserver = new MutationObserver(
          throttle(observer, CHECK_INTERVAL)
        );
        mutationObserver.observe(el, { childList: true, subtree: true });
        observer();
      }
    },
    { immediate: true, flush: "post" }
  );
  onBeforeUnmount(() => {
    cleanup();
    stopWatch();
  });
  return {
    overflow,
    observer,
    cleanup,
    stopWatch
  };
};

export { useOverflow };
//# sourceMappingURL=index.mjs.map
