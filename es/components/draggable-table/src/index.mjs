import { nextTick, h, defineComponent } from 'vue';
import { ElTable, useNamespace } from 'element-plus';
import { UseSortable } from '@vueuse/integrations/useSortable/component';
import { moveArrayElement } from '@vueuse/integrations/useSortable';
import { draggableTableProps } from './draggable-table.mjs';
import { isArray } from 'element-plus/es/utils/index';

const ElTableComp = { ...ElTable };
const SORT_DATA_EVENT = "sort-data";
const TableBody = {
  ...ElTableComp.components.TableBody,
  render() {
    const { wrappedRowRender, store } = this;
    const data = store.states.data.value || [];
    const tableIns = this.context;
    const { draggableProps } = tableIns.props;
    const options = {
      animation: 300,
      ...draggableProps,
      onUpdate: (e) => {
        const { oldIndex, newIndex } = e;
        if (isArray(store.states.data.value)) {
          moveArrayElement(store.states.data, oldIndex, newIndex, e);
          nextTick(() => {
            const newData = store.states.data.value;
            store.commit("setData", newData);
            tableIns.emit(SORT_DATA_EVENT, newData, { e });
          });
        }
      }
    };
    return h(
      UseSortable,
      { options, tag: "tbody", tabIndex: -1, modelValue: [] },
      {
        default: () => data.reduce((acc, row) => {
          return acc.concat(wrappedRowRender(row, acc.length));
        }, [])
      }
    );
  }
};
const ElTableClone = {
  ...ElTableComp,
  name: "ElTableClone",
  components: { ...ElTableComp.components, TableBody },
  emits: [...ElTableComp.emits, SORT_DATA_EVENT],
  props: {
    ...ElTableComp.props,
    ...draggableTableProps
  }
};
const ElDraggableTable = defineComponent({
  name: "ElDraggableTable",
  setup(props, { slots, attrs }) {
    const ns = useNamespace("draggable-table");
    return () => h(
      ElTableClone,
      {
        ...attrs,
        class: ns.b()
      },
      slots
    );
  }
});

export { ElDraggableTable as default };
//# sourceMappingURL=index.mjs.map
