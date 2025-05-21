import { defineComponent, ref, computed, h } from 'vue';
import { useNamespace } from 'element-plus';
import { useSortable } from '@vueuse/integrations/useSortable';
import { sortableListProps, sortableListEmits } from './sortable-list.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event.mjs';

var SortableList = defineComponent({
  name: "ElSortableList",
  inheritAttrs: false,
  props: sortableListProps,
  emits: sortableListEmits,
  setup(props, { attrs, slots, emit, expose }) {
    const ns = useNamespace("sortable-list");
    const target = ref();
    const list = computed({
      get() {
        return props.modelValue;
      },
      set(list2) {
        emit(UPDATE_MODEL_EVENT, list2);
        emit(CHANGE_EVENT, list2);
      }
    });
    const { start, stop, option } = useSortable(target, list, props.options);
    expose({
      start,
      stop,
      option
    });
    return () => {
      return h(
        props.tag,
        { ref: target, ...attrs, class: [ns.b(), attrs.class] },
        list.value.map((data, index) => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots, { data, index });
        })
      );
    };
  }
});

export { SortableList as default };
//# sourceMappingURL=index.mjs.map
