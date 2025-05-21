'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var hooks = require('./hooks.js');

const ArrayBaseIndex = vue.defineComponent({
  name: "ArrayBaseIndex",
  props: {
    index: {
      type: Number
    },
    formatter: {
      type: Function
    }
  },
  setup(props, { attrs, slots }) {
    var _a;
    const ns = elementPlus.useNamespace("array-base");
    const index = hooks.useIndex(props.index);
    const formatter = (_a = props.formatter) != null ? _a : (index2) => `#${index2 + 1}.`;
    return () => {
      return vue.h(
        "span",
        {
          class: ns.b("index"),
          ...attrs
        },
        {
          default: () => {
            var _a2, _b;
            return (_b = (_a2 = slots == null ? void 0 : slots.default) == null ? void 0 : _a2.call(slots)) != null ? _b : formatter(index.value);
          }
        }
      );
    };
  }
});

exports.ArrayBaseIndex = ArrayBaseIndex;
//# sourceMappingURL=order.js.map
