'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var sortableList = require('./src/sortable-list.js');
var index = require('element-plus/es/utils/index');

const ElSortableList = index.withInstall(index$1["default"]);

exports.sortableListEmits = sortableList.sortableListEmits;
exports.sortableListProps = sortableList.sortableListProps;
exports.ElSortableList = ElSortableList;
exports["default"] = ElSortableList;
//# sourceMappingURL=index.js.map
