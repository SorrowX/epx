import { defineComponent, h } from 'vue';
import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElCheckboxButton, ElCheckbox, ElCheckboxGroup } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { resolveComponent } from '../__builtins__/shared/resolve-component.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';
import { composeExport } from '../__builtins__/shared/utils.mjs';

const CheckboxOption = defineComponent({
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
      return h(
        props.optionType === "button" ? ElCheckboxButton : ElCheckbox,
        {
          ...attrs
        },
        {
          default: () => {
            var _a;
            return [
              resolveComponent((_a = slots.default) != null ? _a : option == null ? void 0 : option.label, {
                option
              })
            ];
          }
        }
      );
    };
  }
});
const CheckboxGroupOption = defineComponent({
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
      const OptionType = props.optionType === "button" ? ElCheckboxButton : ElCheckbox;
      return h(
        ElCheckboxGroup,
        {
          ...attrs
        },
        {
          ...slots,
          default: () => options.map((option) => {
            if (typeof option === "string") {
              return h(
                OptionType,
                { label: option, value: option, key: option },
                {
                  default: () => {
                    var _a;
                    return [
                      resolveComponent((_a = slots == null ? void 0 : slots.option) != null ? _a : option, { option })
                    ];
                  }
                }
              );
            } else {
              return h(
                OptionType,
                {
                  key: String(option.value),
                  ...option
                },
                {
                  default: () => {
                    var _a;
                    return [
                      resolveComponent((_a = slots == null ? void 0 : slots.option) != null ? _a : option.label, {
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
const CheckboxGroup = connect(
  transformComponent(CheckboxGroupOption, {
    change: "update:modelValue"
  }),
  mapProps({ dataSource: "options", value: "modelValue" }),
  mapReadPretty(PreviewText.Select, { multiple: true })
);
const Checkbox = composeExport(
  connect(
    transformComponent(CheckboxOption, {
      change: "update:modelValue"
    }),
    mapProps({ value: "modelValue" }),
    mapReadPretty(PreviewText.Select)
  ),
  {
    Group: CheckboxGroup
  }
);

export { Checkbox, Checkbox as default };
//# sourceMappingURL=index.mjs.map
