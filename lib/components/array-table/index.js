'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./src/index.js');
var column = require('./src/column.js');
var index$1 = require('element-plus/es/utils/index');

const ElArrayTable = index$1.withInstall(index.ArrayTable);
const ElArrayTableColumn = index$1.withInstall(column["default"]);

exports.ArrayTable = index.ArrayTable;
exports.ElArrayTable = ElArrayTable;
exports.ElArrayTableColumn = ElArrayTableColumn;
exports["default"] = ElArrayTable;
//# sourceMappingURL=index.js.map
