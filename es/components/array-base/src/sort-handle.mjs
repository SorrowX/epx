import { defineComponent, h } from 'vue';
import { ElButton } from 'element-plus';
import { Rank } from '@element-plus/icons-vue';
import { useArray } from './hooks.mjs';
import { sortHandleKls } from './constant.mjs';

const ArrayBaseSortHandle = defineComponent({
  name: "ArrayBaseSortHandle",
  inheritAttrs: false,
  setup(props, { attrs, slots }) {
    const { field, form } = useArray();
    return () => {
      if (!field)
        return null;
      return h(
        ElButton,
        {
          size: "small",
          link: true,
          icon: Rank,
          disabled: form == null ? void 0 : form.disabled,
          ...attrs,
          class: [(form == null ? void 0 : form.disabled) ? "" : sortHandleKls.slice(1)].concat(
            attrs.class
          )
        },
        {
          default: () => {
            var _a;
            return [(_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)];
          }
        }
      );
    };
  }
});

export { ArrayBaseSortHandle };
//# sourceMappingURL=sort-handle.mjs.map
