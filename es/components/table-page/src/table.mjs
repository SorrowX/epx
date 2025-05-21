import { defineComponent, ref, computed, h } from 'vue';
import { ElRadio, ElTableColumn, ElTable } from 'element-plus';

var EpTable = defineComponent({
  name: "ElTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { attrs, slots, expose }) {
    var _a;
    const rowKey = (_a = attrs == null ? void 0 : attrs["row-key"]) != null ? _a : attrs == null ? void 0 : attrs["rowKey"];
    const onRadioSelectionChange = attrs == null ? void 0 : attrs.onRadioSelectionChange;
    const tableRef = ref(null);
    const currentSelectRow = ref(null);
    const hasRadioType = computed(
      () => props.columns.some((column) => column.type === "radio")
    );
    const radioColumn = computed(
      () => props.columns.find((column) => column.type === "radio")
    );
    if (hasRadioType.value && !rowKey) {
      console.error("[ElTablePage]: row-key is required");
    }
    const data = computed(() => {
      var _a2, _b;
      const data2 = (_a2 = attrs == null ? void 0 : attrs.data) != null ? _a2 : [];
      const reserveRadioSelection = (_b = radioColumn.value) == null ? void 0 : _b.reserveRadioSelection;
      const currentRow = currentSelectRow.value;
      return hasRadioType.value ? data2.map((row) => {
        if (!Object.prototype.hasOwnProperty.call(row, "__radioModelValue__")) {
          row.__radioModelValue__ = reserveRadioSelection ? currentRow ? (currentRow == null ? void 0 : currentRow[rowKey]) === row[rowKey] ? true : false : false : false;
        }
        return row;
      }) : data2;
    });
    const clearRadioSelection = () => {
      data.value.forEach((item) => {
        item.__radioModelValue__ = false;
      });
      currentSelectRow.value = null;
    };
    const getRadioSelectionRow = () => currentSelectRow.value;
    const toggleRadioRowSelection = (rowData, selected) => {
      const index = data.value.findIndex(
        (_) => _[rowKey] === rowData[rowKey]
      );
      if (index !== -1) {
        data.value[index]["__radioModelValue__"] = selected;
        if (selected) {
          currentSelectRow.value = data.value[index];
        }
      }
    };
    expose({
      getTable: () => {
        var _a2;
        const table = (_a2 = tableRef.value) != null ? _a2 : {};
        table.clearRadioSelection = clearRadioSelection;
        table.getRadioSelectionRow = getRadioSelectionRow;
        table.toggleRadioRowSelection = toggleRadioRowSelection;
        return table;
      }
    });
    return () => {
      const { columns } = props;
      const children = columns.map((column) => {
        var _a2;
        const formatSlots = {
          header: (data2) => {
            var _a3, _b;
            return (_b = (_a3 = column == null ? void 0 : column.headerCellRenderer) == null ? void 0 : _a3.call(column, data2)) != null ? _b : data2.column.label;
          }
        };
        if (!column.formatter) {
          formatSlots.default = (data2) => {
            var _a3, _b, _c, _d;
            return (_d = (_a3 = column == null ? void 0 : column.cellRenderer) == null ? void 0 : _a3.call(column, data2)) != null ? _d : (_c = data2 == null ? void 0 : data2.row) == null ? void 0 : _c[(_b = data2 == null ? void 0 : data2.column) == null ? void 0 : _b.property];
          };
        }
        if (column.type === "radio") {
          column.width = (_a2 = column.width) != null ? _a2 : 50;
          column.cellRenderer = ({ row, $index }) => {
            return h(ElRadio, {
              disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
              value: true,
              modelValue: row.__radioModelValue__,
              onChange() {
                clearRadioSelection();
                row.__radioModelValue__ = true;
                currentSelectRow.value = row;
                onRadioSelectionChange && onRadioSelectionChange(row);
              }
            });
          };
        }
        return h(ElTableColumn, { ...column }, formatSlots);
      });
      return h(
        ElTable,
        { ...attrs, ref: tableRef, data: data.value },
        {
          ...slots,
          default: () => children
        }
      );
    };
  }
});

export { EpTable as default };
//# sourceMappingURL=table.mjs.map
