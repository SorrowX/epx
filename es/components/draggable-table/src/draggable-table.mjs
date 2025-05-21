import { buildProps, isArray } from 'element-plus/es/utils/index';

const draggableTableProps = buildProps({
  draggableProps: {
    type: Object,
    default: () => ({})
  }
});
const draggableTableEmits = {
  "sort-data": (data) => isArray(data)
};

export { draggableTableEmits, draggableTableProps };
//# sourceMappingURL=draggable-table.mjs.map
