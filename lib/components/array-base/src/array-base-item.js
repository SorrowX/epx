'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var constant = require('./constant.js');

const ArrayBaseItem = vue.defineComponent({
  name: "ArrayBaseItem",
  props: {
    index: {
      type: Number
    },
    record: {
      type: null
    }
  },
  setup(props, { slots }) {
    vue.provide(constant.ItemSymbol, props);
    return () => vue.renderSlot(slots, "default");
  }
});

exports.ArrayBaseItem = ArrayBaseItem;
//# sourceMappingURL=array-base-item.js.map
