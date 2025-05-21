'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vue$1 = require('@formily/vue');
var elementPlus = require('element-plus');
var index = require('../preview-text/index.js');
var resolveComponent = require('../__builtins__/shared/resolve-component.js');

const SelectOption = vue.defineComponent({
  name: "FSelect",
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { attrs, slots }) {
    return () => {
      const options = props.options || [];
      return vue.h(
        elementPlus.ElSelect,
        {
          ...attrs
        },
        {
          default: () => options.map((option) => {
            if (typeof option === "string") {
              return vue.h(
                elementPlus.ElOption,
                { key: option, value: option, label: option },
                {
                  default: () => [
                    resolveComponent.resolveComponent(slots == null ? void 0 : slots.option, { option })
                  ]
                }
              );
            } else {
              return vue.h(
                elementPlus.ElOption,
                {
                  key: option.value,
                  ...option
                },
                {
                  default: () => [
                    resolveComponent.resolveComponent(slots == null ? void 0 : slots.option, {
                      option
                    })
                  ]
                }
              );
            }
          }),
          ...slots
        }
      );
    };
  }
});
const Select = vue$1.connect(
  SelectOption,
  vue$1.mapProps({ dataSource: "options", value: "modelValue", loading: true }),
  vue$1.mapReadPretty(index.PreviewText.Select)
);

exports.Select = Select;
exports["default"] = Select;
//# sourceMappingURL=index.js.map
