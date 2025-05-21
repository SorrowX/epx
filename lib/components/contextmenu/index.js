'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var contextmenu$1 = require('./src/contextmenu2.js');
var contextmenu = require('./src/contextmenu.js');
var index = require('element-plus/es/utils/index');

const ElContextmenu = index.withInstall(contextmenu$1["default"]);

exports.contextmenuEmits = contextmenu.contextmenuEmits;
exports.contextmenuProps = contextmenu.contextmenuProps;
exports.ElContextmenu = ElContextmenu;
exports["default"] = ElContextmenu;
//# sourceMappingURL=index.js.map
