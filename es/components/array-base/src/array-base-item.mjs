import { defineComponent, provide, renderSlot } from 'vue';
import { ItemSymbol } from './constant.mjs';

const ArrayBaseItem = defineComponent({
  name: "ArrayBaseItem",
  props: {
    index: {
      type: Number
    },
    record: {
      type: null
    }
  },
  setup(props, { slots }) {
    provide(ItemSymbol, props);
    return () => renderSlot(slots, "default");
  }
});

export { ArrayBaseItem };
//# sourceMappingURL=array-base-item.mjs.map
