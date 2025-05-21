'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var hooks = require('./hooks.js');
var constant = require('./constant.js');

const ArrayBase = vue.defineComponent({
  name: "ArrayBase",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    keyMap: {
      type: [Array]
    }
  },
  setup(props, { slots }) {
    const field = hooks.useField();
    const form = hooks.useForm();
    vue.provide(constant.ArrayBaseSymbol, {
      field,
      form,
      keyMap: props.keyMap
    });
    return () => vue.renderSlot(slots, "default");
  }
});

exports.ArrayBase = ArrayBase;
//# sourceMappingURL=array-base.js.map
