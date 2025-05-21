'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const createIconComponent = (options) => {
  return vue.defineComponent({
    name: options.name,
    render() {
      return vue.h("div", {
        style: {
          display: "contents"
        },
        innerHTML: options.svg
      });
    }
  });
};

exports.createIconComponent = createIconComponent;
//# sourceMappingURL=helper.js.map
