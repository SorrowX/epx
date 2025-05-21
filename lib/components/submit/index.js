'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var submit = require('./src/submit.js');
var index = require('element-plus/es/utils/index');

const ElSubmit = index.withInstall(index$1["default"]);

exports.submitEmits = submit.submitEmits;
exports.submitProps = submit.submitProps;
exports.ElSubmit = ElSubmit;
exports["default"] = ElSubmit;
//# sourceMappingURL=index.js.map
