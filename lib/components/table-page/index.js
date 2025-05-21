'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var tablePage = require('./src/table-page.js');
var index = require('element-plus/es/utils/index');

const ElTablePage = index.withInstall(index$1["default"]);

exports.tablePageEmits = tablePage.tablePageEmits;
exports.tablePageProps = tablePage.tablePageProps;
exports.ElTablePage = ElTablePage;
exports["default"] = ElTablePage;
//# sourceMappingURL=index.js.map
