import { ref, computed, unref } from 'vue';

const cacheKey = Symbol("cacheKey");
const useCache = (props) => {
  const map = ref(/* @__PURE__ */ new Map());
  const size = computed(
    () => props.direction === "vertical" ? "height" : "width"
  );
  const getDataSize = (entry, el) => {
    var _a, _b, _c, _d, _e, _f;
    const height = (_c = (_b = (_a = entry.borderBoxSize) == null ? void 0 : _a[0]) == null ? void 0 : _b.blockSize) != null ? _c : entry.contentRect.height;
    const width = (_f = (_e = (_d = entry.borderBoxSize) == null ? void 0 : _d[0]) == null ? void 0 : _e.inlineSize) != null ? _f : entry.contentRect.width;
    let marginHeight = 0;
    let marginWidth = 0;
    const computedStyle = window.getComputedStyle(el);
    marginHeight += Number.parseInt(computedStyle.marginBottom, 10);
    marginWidth += Number.parseInt(computedStyle.marginRight, 10);
    return {
      height: height + marginHeight,
      width: width + marginWidth
    };
  };
  const setRealSize = (i, el, entry) => {
    if (!unref(map).has(i)) {
      unref(map).set(i, getDataSize(entry, el));
    } else {
      const oldDataSize = unref(map).get(i);
      const newDataSize = getDataSize(entry, el);
      if (oldDataSize.height !== newDataSize.height || oldDataSize.width !== newDataSize.width) {
        unref(map).set(i, newDataSize);
      }
    }
  };
  const getRealSize = (i) => {
    if (unref(map).has(i)) {
      return unref(map).get(i)[size.value];
    } else {
      return props.itemSize;
    }
  };
  return {
    map,
    setRealSize,
    getRealSize
  };
};

export { cacheKey, useCache };
//# sourceMappingURL=hooks.mjs.map
