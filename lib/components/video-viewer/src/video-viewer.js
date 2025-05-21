'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const videoViewerProps = index.buildProps({
  urlList: {
    type: index.definePropType(Array),
    default: () => index.mutable([])
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: Boolean,
  teleported: Boolean,
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  zoomRate: {
    type: Number,
    default: 1.2
  },
  minScale: {
    type: Number,
    default: 0.2
  },
  maxScale: {
    type: Number,
    default: 7
  },
  crossorigin: {
    type: index.definePropType(String)
  }
});
const videoViewerEmits = {
  close: () => true,
  switch: (index$1) => index.isNumber(index$1),
  rotate: (deg) => index.isNumber(deg)
};

exports.videoViewerEmits = videoViewerEmits;
exports.videoViewerProps = videoViewerProps;
//# sourceMappingURL=video-viewer.js.map
