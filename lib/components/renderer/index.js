'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var renderer = require('./src/renderer.js');
var index = require('element-plus/es/utils/index');

const ElRenderer = index.withInstall(index$1["default"]);

exports.rendererEmits = renderer.rendererEmits;
exports.rendererProps = renderer.rendererProps;
exports.ElRenderer = ElRenderer;
exports["default"] = ElRenderer;
//# sourceMappingURL=index.js.map
