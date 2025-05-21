import { defineComponent, h } from 'vue';
import { connect, mapProps, mapReadPretty } from '@formily/vue';
import { ElSelect, ElOption } from 'element-plus';
import { PreviewText } from '../preview-text/index.mjs';
import { resolveComponent } from '../__builtins__/shared/resolve-component.mjs';

const SelectOption = defineComponent({
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
      return h(
        ElSelect,
        {
          ...attrs
        },
        {
          default: () => options.map((option) => {
            if (typeof option === "string") {
              return h(
                ElOption,
                { key: option, value: option, label: option },
                {
                  default: () => [
                    resolveComponent(slots == null ? void 0 : slots.option, { option })
                  ]
                }
              );
            } else {
              return h(
                ElOption,
                {
                  key: option.value,
                  ...option
                },
                {
                  default: () => [
                    resolveComponent(slots == null ? void 0 : slots.option, {
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
const Select = connect(
  SelectOption,
  mapProps({ dataSource: "options", value: "modelValue", loading: true }),
  mapReadPretty(PreviewText.Select)
);

export { Select, Select as default };
//# sourceMappingURL=index.mjs.map
