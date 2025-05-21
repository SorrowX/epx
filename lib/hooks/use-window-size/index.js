'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var browser = require('../../utils/browser.js');

let width;
let height;
function useWindowSize() {
  if (!width) {
    width = vue.ref(0);
    height = vue.ref(0);
    if (browser.inBrowser) {
      const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      };
      update();
      window.addEventListener("resize", update, { passive: true });
      window.addEventListener("orientationchange", update, { passive: true });
    }
  }
  return { width, height };
}

exports.useWindowSize = useWindowSize;
//# sourceMappingURL=index.js.map
