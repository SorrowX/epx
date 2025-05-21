'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index$1 = require('../../load-more/index.js');
var index = require('element-plus/es/utils/index');
var tags = require('../../../constants/tags.js');

const useLoad = (props, options = {
  direction: "bottom"
}) => {
  const {
    load,
    preLoad,
    finished,
    loadingText,
    errorText,
    noMoreText,
    infiniteScrollDistance
  } = props;
  const { t } = elementPlus.useLocale();
  const loading = vue.ref(false);
  const error = vue.ref(false);
  const isBottomDirection = options.direction === "bottom";
  const hasLoad = vue.computed(
    () => isBottomDirection ? load.value && index.isFunction(load.value) : preLoad.value && index.isFunction(preLoad.value)
  );
  const shouldRenderLoading = vue.computed(
    () => hasLoad.value && loading.value && !error.value && !finished.value
  );
  const shouldRenderError = vue.computed(
    () => hasLoad.value && error.value && !finished.value
  );
  const shouldRenderFinished = vue.computed(() => hasLoad.value && finished.value);
  const calcLoadingText = vue.computed(
    () => {
      var _a;
      return (_a = loadingText.value) != null ? _a : t("epx.loadMore.loadingText");
    }
  );
  const calcErrorText = vue.computed(
    () => {
      var _a;
      return (_a = errorText.value) != null ? _a : t("epx.loadMore.errorText");
    }
  );
  const calcFinishedText = vue.computed(
    () => {
      var _a;
      return (_a = noMoreText.value) != null ? _a : t("epx.loadMore.noMoreText");
    }
  );
  const status = vue.computed(() => {
    let status2 = "";
    if (shouldRenderLoading.value) {
      status2 = "loading";
    }
    if (shouldRenderFinished.value) {
      status2 = "noMore";
    }
    if (shouldRenderError.value) {
      status2 = "error";
    }
    return status2;
  });
  const handleLoad = async (shouldTrigger, options2) => {
    var _a, _b, _c, _d;
    if (shouldTrigger && hasLoad.value && !loading.value && !finished.value && !error.value) {
      try {
        loading.value = true;
        error.value = false;
        await ((_a = load.value) == null ? void 0 : _a.call(load));
        (_b = options2 == null ? void 0 : options2.successCallback) == null ? void 0 : _b.call(options2);
      } catch (e) {
        error.value = true;
        (_c = options2 == null ? void 0 : options2.errorCallback) == null ? void 0 : _c.call(options2);
      } finally {
        loading.value = false;
        (_d = options2 == null ? void 0 : options2.finallyCallback) == null ? void 0 : _d.call(options2);
      }
    }
  };
  const cache = {
    scrollHeight: 0
  };
  const recordCache = (target) => {
    var _a;
    cache.scrollHeight = (_a = target == null ? void 0 : target.scrollHeight) != null ? _a : 0;
  };
  const fixedScrollbarPosition = (target) => {
    vue.nextTick(() => {
      var _a;
      if (target) {
        const scrollHeight = (_a = target.scrollHeight) != null ? _a : 0;
        const oldScrollHeight = cache.scrollHeight;
        target.scrollTop = Math.max(scrollHeight - oldScrollHeight, 0);
      }
    });
  };
  const handlePreLoad = async (shouldTrigger, target) => {
    var _a;
    if (shouldTrigger && hasLoad.value && !loading.value && !finished.value && !error.value) {
      try {
        loading.value = true;
        error.value = false;
        recordCache(target);
        await ((_a = preLoad.value) == null ? void 0 : _a.call(preLoad));
      } catch (e) {
        error.value = true;
      } finally {
        loading.value = false;
        fixedScrollbarPosition(target);
      }
    }
  };
  const handleClickError = (type) => {
    var _a;
    if (type === "error") {
      loading.value = false;
      error.value = false;
      (_a = options.handleError) == null ? void 0 : _a.call(options);
    }
  };
  const renderLoadMore = (placeholder = false) => {
    const loadMoreVNode = hasLoad.value && status.value ? vue.h(index$1.ElLoadMore, {
      status: status.value,
      loadingText: calcLoadingText.value,
      noMoreText: calcFinishedText.value,
      errorText: calcErrorText.value,
      onClick: handleClickError
    }) : "";
    return placeholder && hasLoad.value ? vue.h(
      tags.DIV_TAG,
      {
        style: {
          height: "36px"
        }
      },
      [loadMoreVNode]
    ) : loadMoreVNode;
  };
  let preScrollTop = 0;
  const isShouldTrigger = (target) => {
    const { scrollHeight, scrollTop, clientHeight } = target;
    if (isBottomDirection) {
      const isDownward = scrollTop > preScrollTop;
      preScrollTop = scrollTop;
      const shouldTrigger = scrollHeight - (scrollTop + clientHeight) < infiniteScrollDistance.value;
      return isDownward && shouldTrigger;
    } else {
      return scrollTop === 0;
    }
  };
  return {
    handleLoad,
    handlePreLoad,
    renderLoadMore,
    isShouldTrigger
  };
};

exports.useLoad = useLoad;
//# sourceMappingURL=hooks.js.map
