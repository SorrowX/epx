'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const videoProps = index.buildProps({
  src: {
    type: index.definePropType(String)
  },
  poster: {
    type: index.definePropType(String)
  },
  duration: {
    type: index.definePropType([String, Number])
  },
  onCoverLoad: {
    type: index.definePropType(Function)
  },
  readonly: {
    type: index.definePropType(Boolean),
    default: false
  }
});
const videoEmits = {
  click: (paused, event) => {
    return index.isBoolean(paused) && event instanceof MouseEvent;
  }
};

exports.videoEmits = videoEmits;
exports.videoProps = videoProps;
//# sourceMappingURL=video.js.map
