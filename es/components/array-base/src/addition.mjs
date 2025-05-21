import { defineComponent, h } from 'vue';
import { useNamespace, ElButton } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import { useArray } from './hooks.mjs';

const ArrayBaseAddition = defineComponent({
  name: "ArrayBaseAddition",
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: ""
    },
    method: {
      type: String,
      default: "push"
    },
    defaultValue: {
      type: null,
      default: ""
    }
  },
  setup(props, { attrs, slots }) {
    const ns = useNamespace("array-base");
    const { field, form, keyMap } = useArray();
    return () => {
      if (!field)
        return null;
      return h(
        ElButton,
        {
          class: `${ns.b("addition")}`,
          icon: Plus,
          disabled: form == null ? void 0 : form.disabled,
          ...attrs,
          onClick: (evt) => {
            var _a;
            if (attrs.onClick) {
              return (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, evt, { field, form, keyMap });
            }
            if (form == null ? void 0 : form.disabled)
              return;
            evt.stopPropagation();
            const defaultValue = props.defaultValue;
            if (props.method === "unshift") {
              field == null ? void 0 : field.fieldValue.unshift(defaultValue);
            } else {
              field == null ? void 0 : field.fieldValue.push(defaultValue);
            }
          }
        },
        {
          default: () => {
            var _a, _b;
            return [(_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : props.title];
          }
        }
      );
    };
  }
});

export { ArrayBaseAddition };
//# sourceMappingURL=addition.mjs.map
