import { defineComponent, computed, h } from 'vue';
import { ElSpace } from 'element-plus';
import { FormBaseItem } from '../form-item/index.mjs';
import { stylePrefix } from '../__builtins__/configs/index.mjs';

const FormButtonGroup = defineComponent({
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
    const prefixCls = `${stylePrefix}-form-button-group`;
    const spaceStyle = computed(() => {
      return {
        justifyContent: props.align === "left" ? "flex-start" : props.align === "right" ? "flex-end" : "center",
        display: "flex"
      };
    });
    return () => {
      if (props.alignFormItem) {
        return h(
          FormBaseItem,
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
            default: () => h(
              ElSpace,
              { size: props.gutter, style: [{ ...spaceStyle.value }] },
              slots
            )
          }
        );
      } else {
        return h(
          ElSpace,
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

export { FormButtonGroup, FormButtonGroup as default };
//# sourceMappingURL=index.mjs.map
