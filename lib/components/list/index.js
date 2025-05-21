'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var list = require('./src/list.js');
var index = require('element-plus/es/utils/index');

const ElList = index.withInstall(index$1["default"]);

exports.listEmits = list.listEmits;
exports.listProps = list.listProps;
exports.ElList = ElList;
exports["default"] = ElList;
//# sourceMappingURL=index.js.map
