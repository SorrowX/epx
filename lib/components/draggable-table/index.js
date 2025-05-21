'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var draggableTable = require('./src/draggable-table.js');
var index = require('element-plus/es/utils/index');

const ElDraggableTable = index.withInstall(index$1["default"]);

exports.draggableTableEmits = draggableTable.draggableTableEmits;
exports.draggableTableProps = draggableTable.draggableTableProps;
exports.ElDraggableTable = ElDraggableTable;
exports["default"] = ElDraggableTable;
//# sourceMappingURL=index.js.map
