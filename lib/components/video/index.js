'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var video$1 = require('./src/video2.js');
var video = require('./src/video.js');
var index = require('element-plus/es/utils/index');

const ElVideo = index.withInstall(video$1["default"]);

exports.videoEmits = video.videoEmits;
exports.videoProps = video.videoProps;
exports.ElVideo = ElVideo;
exports["default"] = ElVideo;
//# sourceMappingURL=index.js.map
