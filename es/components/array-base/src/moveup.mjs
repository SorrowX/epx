import { defineComponent, h } from 'vue';
import { useNamespace, ElButton } from 'element-plus';
import { ArrowUp } from '@element-plus/icons-vue';
import { useIndex, useArray } from './hooks.mjs';

const ArrayBaseMoveUp = defineComponent({
  name: "ArrayBaseMoveUp",
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
          class: `${ns.b("move-up")}`,
          size: "small",
          link: true,
          icon: ArrowUp,
          disabled: form == null ? void 0 : form.disabled,
          onClick: (evt) => {
            var _a;
            if (attrs.onClick) {
              return (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, evt, { field, form, keyMap });
            }
            if (form == null ? void 0 : form.disabled)
              return;
            evt.stopPropagation();
            const curIndex = indexRef.value;
            if (Array.isArray(keyMap)) {
              const length = keyMap.length - 1;
              let preIndex = indexRef.value - 1;
              preIndex = preIndex < 0 ? length : preIndex;
              keyMap.splice(preIndex, 0, keyMap.splice(curIndex, 1)[0]);
            }
            if (Array.isArray(field.fieldValue)) {
              const length = field.fieldValue.length - 1;
              let preIndex = indexRef.value - 1;
              preIndex = preIndex < 0 ? length : preIndex;
              field.fieldValue.splice(
                preIndex,
                0,
                field.fieldValue.splice(curIndex, 1)[0]
              );
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

export { ArrayBaseMoveUp };
//# sourceMappingURL=moveup.mjs.map
