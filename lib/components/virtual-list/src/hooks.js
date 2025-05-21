'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const cacheKey = Symbol("cacheKey");
const useCache = (props) => {
  const map = vue.ref(/* @__PURE__ */ new Map());
  const size = vue.computed(
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
    if (!vue.unref(map).has(i)) {
      vue.unref(map).set(i, getDataSize(entry, el));
    } else {
      const oldDataSize = vue.unref(map).get(i);
      const newDataSize = getDataSize(entry, el);
      if (oldDataSize.height !== newDataSize.height || oldDataSize.width !== newDataSize.width) {
        vue.unref(map).set(i, newDataSize);
      }
    }
  };
  const getRealSize = (i) => {
    if (vue.unref(map).has(i)) {
      return vue.unref(map).get(i)[size.value];
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

exports.cacheKey = cacheKey;
exports.useCache = useCache;
//# sourceMappingURL=hooks.js.map
