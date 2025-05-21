'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const listProps = index.buildProps({
  list: {
    type: index.definePropType(Array),
    default: () => []
  },
  nativeScrollbar: {
    type: Boolean,
    default: false
  },
  infiniteScrollDisabled: {
    type: Boolean,
    default: false
  },
  infiniteScrollDelay: {
    type: Number,
    default: 16
  },
  infiniteScrollDistance: {
    type: Number,
    default: 20
  },
  load: {
    type: index.definePropType(Function)
  },
  preLoad: {
    type: index.definePropType(Function)
  },
  finished: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String
  },
  errorText: {
    type: String
  },
  noMoreText: {
    type: String
  }
});
const listEmits = {};

exports.listEmits = listEmits;
exports.listProps = listProps;
//# sourceMappingURL=list.js.map
