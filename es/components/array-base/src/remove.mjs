import { defineComponent, h } from 'vue';
import { useNamespace, ElButton } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';
import { useIndex, useArray } from './hooks.mjs';

const ArrayBaseRemove = defineComponent({
  name: "ArrayBaseRemove",
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: ""
    },
    index: {
      type: Number
    }
  },
  setup(props, { attrs, slots }) {
    const ns = useNamespace("array-base");
    const indexRef = useIndex(props.index);
    const { field, form, keyMap } = useArray();
    return () => {
      if (!field)
        return null;
      return h(
        ElButton,
        {
          class: `${ns.b("remove")}`,
          link: true,
          size: "small",
          icon: Delete,
          disabled: form == null ? void 0 : form.disabled,
          onClick: (evt) => {
            var _a;
            if (attrs.onClick) {
              return (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, evt, { field, form, keyMap });
            }
            if (form == null ? void 0 : form.disabled)
              return;
            evt.stopPropagation();
            if (keyMap) {
              keyMap == null ? void 0 : keyMap.splice(indexRef.value, 1);
            }
            if (field) {
              field.fieldValue.splice(indexRef.value, 1);
            }
          },
          ...attrs
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

export { ArrayBaseRemove };
//# sourceMappingURL=remove.mjs.map
