'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var panel = require('./src/panel.js');
var dropdownV2 = require('./src/dropdown-v2.js');
var index = require('element-plus/es/utils/index');

const ElDropdownV2Panel = index.withInstall(panel["default"]);
const ElDropdownV2 = index.withInstall(index$1["default"]);

exports.dropdownV2Emits = dropdownV2.dropdownV2Emits;
exports.dropdownV2Props = dropdownV2.dropdownV2Props;
exports.ElDropdownV2 = ElDropdownV2;
exports.ElDropdownV2Panel = ElDropdownV2Panel;
exports["default"] = ElDropdownV2;
//# sourceMappingURL=index.js.map
