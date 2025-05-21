'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var previewFile$1 = require('./src/preview-file.js');
var previewFile = require('./src/preview-file2.js');
var helper = require('./src/helper.js');
var index = require('element-plus/es/utils/index');

const ElPreviewFile = index.withInstall(previewFile$1["default"]);

exports.previewFileEmits = previewFile.previewFileEmits;
exports.previewFileProps = previewFile.previewFileProps;
exports.AUDIO_TYPE = helper.AUDIO_TYPE;
exports.EXCEL_TYPE = helper.EXCEL_TYPE;
exports.IMAGE_TYPE = helper.IMAGE_TYPE;
exports.MARKDOWN_TYPE = helper.MARKDOWN_TYPE;
exports.PDF_TYPE = helper.PDF_TYPE;
exports.PPT_TYPE = helper.PPT_TYPE;
exports.PRESET_FILE_ICONS = helper.PRESET_FILE_ICONS;
exports.UNKNOWN_TYPE = helper.UNKNOWN_TYPE;
exports.VIDEO_TYPE = helper.VIDEO_TYPE;
exports.WORD_TYPE = helper.WORD_TYPE;
exports.ZIP_TYPE = helper.ZIP_TYPE;
exports.getIconState = helper.getIconState;
exports.matchExt = helper.matchExt;
exports.parseFileName = helper.parseFileName;
exports.parseSize = helper.parseSize;
exports.ElPreviewFile = ElPreviewFile;
exports["default"] = ElPreviewFile;
//# sourceMappingURL=index.js.map
