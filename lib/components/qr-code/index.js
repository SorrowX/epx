'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/index.js');
var qrCode = require('./src/qr-code.js');
var index = require('element-plus/es/utils/index');

const ElQrCode = index.withInstall(index$1["default"]);

exports.getDefaultIconConfig = qrCode.getDefaultIconConfig;
exports.qrCodeEmits = qrCode.qrCodeEmits;
exports.qrCodeProps = qrCode.qrCodeProps;
exports.ElQrCode = ElQrCode;
exports["default"] = ElQrCode;
//# sourceMappingURL=index.js.map
