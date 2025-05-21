'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var editor$1 = require('./src/editor2.js');
var index$1 = require('./src/toolbar/index.js');
var editor = require('./src/editor.js');
var helper = require('./src/helper.js');
var index = require('element-plus/es/utils/index');

const ElEditor = index.withInstall(editor$1["default"]);
const ElEditorToolbar = index.withInstall(index$1["default"]);

exports.editorEmits = editor.editorEmits;
exports.editorProps = editor.editorProps;
exports.filterOption = helper.filterOption;
exports.getTextContent = helper.getTextContent;
exports.ElEditor = ElEditor;
exports.ElEditorToolbar = ElEditorToolbar;
exports["default"] = ElEditor;
//# sourceMappingURL=index.js.map
