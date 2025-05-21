'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');

var Loading = vue.defineComponent({
  name: "ElBubbleLoading",
  inheritAttrs: false,
  setup(props, { attrs }) {
    const ns = elementPlus.useNamespace("bubble-dot");
    const itemKlass = ns.b("item");
    return () => {
      return vue.h(
        "span",
        { ...attrs, class: ns.b() },
        Array.from({ length: 3 }).map((_, index) => {
          return vue.h("i", {
            key: `item-${index + 1}`,
            class: itemKlass
          });
        })
      );
    };
  }
});

exports["default"] = Loading;
//# sourceMappingURL=loading.js.map
