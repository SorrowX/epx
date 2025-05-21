import { defineComponent, h } from 'vue';
import { useNamespace } from 'element-plus';
import { useIndex } from './hooks.mjs';

const ArrayBaseIndex = defineComponent({
  name: "ArrayBaseIndex",
  props: {
    index: {
      type: Number
    },
    formatter: {
      type: Function
    }
  },
  setup(props, { attrs, slots }) {
    var _a;
    const ns = useNamespace("array-base");
    const index = useIndex(props.index);
    const formatter = (_a = props.formatter) != null ? _a : (index2) => `#${index2 + 1}.`;
    return () => {
      return h(
        "span",
        {
          class: ns.b("index"),
          ...attrs
        },
        {
          default: () => {
            var _a2, _b;
            return (_b = (_a2 = slots == null ? void 0 : slots.default) == null ? void 0 : _a2.call(slots)) != null ? _b : formatter(index.value);
          }
        }
      );
    };
  }
});

export { ArrayBaseIndex };
//# sourceMappingURL=order.mjs.map
