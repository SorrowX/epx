'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var videoViewer$1 = require('./src/video-viewer2.js');
var videoViewer = require('./src/video-viewer.js');
var index = require('element-plus/es/utils/index');

const ElVideoViewer = index.withInstall(videoViewer$1["default"]);

exports.videoViewerEmits = videoViewer.videoViewerEmits;
exports.videoViewerProps = videoViewer.videoViewerProps;
exports.ElVideoViewer = ElVideoViewer;
exports["default"] = ElVideoViewer;
//# sourceMappingURL=index.js.map
