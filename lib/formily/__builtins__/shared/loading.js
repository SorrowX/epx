'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var elementPlus = require('element-plus');

const loading = async (loadingText = "Loading...", processor) => {
  let loadingInstance = null;
  const loading2 = setTimeout(() => {
    loadingInstance = elementPlus.ElLoading.service({
      text: loadingText,
      background: "transparent"
    });
  }, 100);
  try {
    return await processor();
  } finally {
    loadingInstance == null ? void 0 : loadingInstance.close();
    clearTimeout(loading2);
  }
};

exports.loading = loading;
//# sourceMappingURL=loading.js.map
