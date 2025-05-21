'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var fullScreen = require('./src/full-screen.js');
var index = require('element-plus/es/utils/index');

const ElFullScreen = index.withInstall(index$1["default"]);

exports.fullScreenEmits = fullScreen.fullScreenEmits;
exports.fullScreenProps = fullScreen.fullScreenProps;
exports.ElFullScreen = ElFullScreen;
exports["default"] = ElFullScreen;
//# sourceMappingURL=index.js.map
