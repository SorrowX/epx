'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vue$1 = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var resolveComponent = require('../__builtins__/shared/resolve-component.js');
var transformComponent = require('../__builtins__/shared/transform-component.js');
var utils = require('../__builtins__/shared/utils.js');

const CheckboxOption = vue.defineComponent({
  name: "Checkbox",
  inheritAttrs: false,
  props: {
    optionType: {
      type: String,
      default: "default"
    }
  },
  setup(props, { attrs, slots }) {
    return () => {
      const option = {
        label: attrs.label,
        value: attrs.value
      };
      return vue.h(
        props.optionType === "button" ? elementPlus.ElCheckboxButton : elementPlus.ElCheckbox,
        {
          ...attrs
        },
        {
          default: () => {
            var _a;
            return [
              resolveComponent.resolveComponent((_a = slots.default) != null ? _a : option == null ? void 0 : option.label, {
                option
              })
            ];
          }
        }
      );
    };
  }
});
const CheckboxGroupOption = vue.defineComponent({
  name: "CheckboxGroup",
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
      const OptionType = props.optionType === "button" ? elementPlus.ElCheckboxButton : elementPlus.ElCheckbox;
      return vue.h(
        elementPlus.ElCheckboxGroup,
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
const CheckboxGroup = vue$1.connect(
  transformComponent.transformComponent(CheckboxGroupOption, {
    change: "update:modelValue"
  }),
  vue$1.mapProps({ dataSource: "options", value: "modelValue" }),
  vue$1.mapReadPretty(index.PreviewText.Select, { multiple: true })
);
const Checkbox = utils.composeExport(
  vue$1.connect(
    transformComponent.transformComponent(CheckboxOption, {
      change: "update:modelValue"
    }),
    vue$1.mapProps({ value: "modelValue" }),
    vue$1.mapReadPretty(index.PreviewText.Select)
  ),
  {
    Group: CheckboxGroup
  }
);

exports.Checkbox = Checkbox;
exports["default"] = Checkbox;
//# sourceMappingURL=index.js.map
