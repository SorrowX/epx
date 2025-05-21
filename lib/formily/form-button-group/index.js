'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index = require('../form-item/index.js');
var index$1 = require('../__builtins__/configs/index.js');

const FormButtonGroup = vue.defineComponent({
  name: "FFormButtonGroup",
  props: {
    align: {
      type: String,
      default: "left"
    },
    gutter: {
      type: Number,
      default: 8
    },
    alignFormItem: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots, attrs }) {
    const prefixCls = `${index$1.stylePrefix}-form-button-group`;
    const spaceStyle = vue.computed(() => {
      return {
        justifyContent: props.align === "left" ? "flex-start" : props.align === "right" ? "flex-end" : "center",
        display: "flex"
      };
    });
    return () => {
      if (props.alignFormItem) {
        return vue.h(
          index.FormBaseItem,
          {
            style: {
              margin: 0,
              padding: 0,
              width: "100%"
            },
            colon: false,
            label: " ",
            ...attrs
          },
          {
            default: () => vue.h(
              elementPlus.ElSpace,
              { size: props.gutter, style: [{ ...spaceStyle.value }] },
              slots
            )
          }
        );
      } else {
        return vue.h(
          elementPlus.ElSpace,
          {
            class: [prefixCls],
            style: [{ ...spaceStyle.value }],
            ...attrs,
            size: props.gutter
          },
          slots
        );
      }
    };
  }
});

exports.FormButtonGroup = FormButtonGroup;
exports["default"] = FormButtonGroup;
//# sourceMappingURL=index.js.map
