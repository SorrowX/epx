'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const draggableTableProps = index.buildProps({
  draggableProps: {
    type: Object,
    default: () => ({})
  }
});
const draggableTableEmits = {
  "sort-data": (data) => index.isArray(data)
};

exports.draggableTableEmits = draggableTableEmits;
exports.draggableTableProps = draggableTableProps;
//# sourceMappingURL=draggable-table.js.map
