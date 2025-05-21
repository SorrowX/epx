'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var component = require('@vueuse/integrations/useSortable/component');
var useSortable = require('@vueuse/integrations/useSortable');
var draggableTable = require('./draggable-table.js');
var index = require('element-plus/es/utils/index');

const ElTableComp = { ...elementPlus.ElTable };
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
        if (index.isArray(store.states.data.value)) {
          useSortable.moveArrayElement(store.states.data, oldIndex, newIndex, e);
          vue.nextTick(() => {
            const newData = store.states.data.value;
            store.commit("setData", newData);
            tableIns.emit(SORT_DATA_EVENT, newData, { e });
          });
        }
      }
    };
    return vue.h(
      component.UseSortable,
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
    ...draggableTable.draggableTableProps
  }
};
const ElDraggableTable = vue.defineComponent({
  name: "ElDraggableTable",
  setup(props, { slots, attrs }) {
    const ns = elementPlus.useNamespace("draggable-table");
    return () => vue.h(
      ElTableClone,
      {
        ...attrs,
        class: ns.b()
      },
      slots
    );
  }
});

exports["default"] = ElDraggableTable;
//# sourceMappingURL=index.js.map
