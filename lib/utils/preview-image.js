'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');

const previewImage = (options) => {
  const container = document.createElement("div");
  const vnode = vue.h(elementPlus.ElImageViewer, {
    ...options,
    teleported: true,
    onClose() {
      vue.render(null, container);
    }
  });
  vue.render(vnode, container);
};

exports.previewImage = previewImage;
//# sourceMappingURL=preview-image.js.map
