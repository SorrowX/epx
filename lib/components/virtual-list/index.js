'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var virtualList = require('./src/virtual-list.js');
var index = require('element-plus/es/utils/index');

const ElVirtualList = index.withInstall(index$1["default"]);

exports.virtualListEmits = virtualList.virtualListEmits;
exports.virtualListProps = virtualList.virtualListProps;
exports.ElVirtualList = ElVirtualList;
exports["default"] = ElVirtualList;
//# sourceMappingURL=index.js.map
