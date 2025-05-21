import { defineComponent, provide, renderSlot } from 'vue';
import { useField, useForm } from './hooks.mjs';
import { ArrayBaseSymbol } from './constant.mjs';

const ArrayBase = defineComponent({
  name: "ArrayBase",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    keyMap: {
      type: [Array]
    }
  },
  setup(props, { slots }) {
    const field = useField();
    const form = useForm();
    provide(ArrayBaseSymbol, {
      field,
      form,
      keyMap: props.keyMap
    });
    return () => renderSlot(slots, "default");
  }
});

export { ArrayBase };
//# sourceMappingURL=array-base.mjs.map
