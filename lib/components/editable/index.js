'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var editable = require('./src/editable.js');
var index = require('element-plus/es/utils/index');

const ElEditable = index.withInstall(index$1["default"]);

exports.editableEmits = editable.editableEmits;
exports.editableProps = editable.editableProps;
exports.ElEditable = ElEditable;
exports["default"] = ElEditable;
//# sourceMappingURL=index.js.map
