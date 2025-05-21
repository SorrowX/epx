'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vue$1 = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var resolveComponent = require('../__builtins__/shared/resolve-component.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');
var utils = require('../__builtins__/shared/utils.js');

const RadioGroupOption = vue.defineComponent({
  name: "FRadioGroup",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    optionType: {
      type: String,
      default: "default"
    }
  },
  setup(props, { attrs, slots }) {
    return () => {
      const options = props.options || [];
      const OptionType = props.optionType === "button" ? elementPlus.ElRadioButton : elementPlus.ElRadio;
      return vue.h(
        elementPlus.ElRadioGroup,
        {
          ...attrs
        },
        {
          ...slots,
          default: () => options.map((option) => {
            if (typeof option === "string") {
              return vue.h(
                OptionType,
                { label: option, value: option, key: option },
                {
                  default: () => {
                    var _a;
                    return [
                      resolveComponent.resolveComponent((_a = slots == null ? void 0 : slots.option) != null ? _a : option, { option })
                    ];
                  }
                }
              );
            } else {
              return vue.h(
                OptionType,
                {
                  key: String(option.value),
                  ...option
                },
                {
                  default: () => {
                    var _a;
                    return [
                      resolveComponent.resolveComponent((_a = slots == null ? void 0 : slots.option) != null ? _a : option.label, {
                        option
                      })
                    ];
                  }
                }
              );
            }
          })
        }
      );
    };
  }
});
const RadioGroup = vue$1.connect(
  transformComponent.transformComponent(RadioGroupOption, {
    change: "update:modelValue"
  }),
  vue$1.mapProps({ dataSource: "options", value: "modelValue" }),
  vue$1.mapReadPretty(index.PreviewText.Select)
);
const Radio = utils.composeExport(elementPlus.ElRadio, {
  Group: RadioGroup
});

exports.Radio = Radio;
exports["default"] = Radio;
//# sourceMappingURL=index.js.map
