'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var reset = require('./reset.js');
var index = require('../../../hooks/use-form/index.js');
var index$1 = require('element-plus/es/utils/index');

var Reset = vue.defineComponent({
  name: "ElReset",
  inheritAttrs: false,
  props: reset.resetProps,
  setup(props, { attrs, slots }) {
    const form = index.useForm();
    const resetFields = form == null ? void 0 : form.resetFields;
    return () => {
      return vue.h(
        elementPlus.ElButton,
        {
          nativeType: "button",
          ...attrs,
          onClick: (e) => {
            if (index$1.isFunction(attrs.onClick)) {
              if (attrs.onClick(e) === false)
                return;
            }
            resetFields == null ? void 0 : resetFields();
          }
        },
        slots
      );
    };
  }
});

exports["default"] = Reset;
//# sourceMappingURL=index.js.map
