import { defineComponent, h } from 'vue';
import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElRadioButton, ElRadio, ElRadioGroup } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { resolveComponent } from '../__builtins__/shared/resolve-component.mjs';
import { transformComponent } from '../__builtins__/shared/transform-component.mjs';
import { composeExport } from '../__builtins__/shared/utils.mjs';

const RadioGroupOption = defineComponent({
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
      const OptionType = props.optionType === "button" ? ElRadioButton : ElRadio;
      return h(
        ElRadioGroup,
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
const RadioGroup = connect(
  transformComponent(RadioGroupOption, {
    change: "update:modelValue"
  }),
  mapProps({ dataSource: "options", value: "modelValue" }),
  mapReadPretty(PreviewText.Select)
);
const Radio = composeExport(ElRadio, {
  Group: RadioGroup
});

export { Radio, Radio as default };
//# sourceMappingURL=index.mjs.map
