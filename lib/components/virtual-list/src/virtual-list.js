'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const virtualListProps = index.buildProps({
  list: {
    type: index.definePropType(Array),
    default: () => []
  },
  itemFixed: {
    type: Boolean,
    default: false
  },
  itemSize: {
    type: index.definePropType(Number),
    default: 20
  },
  direction: {
    type: String,
    default: "vertical",
    values: ["vertical", "horizontal"]
  },
  overscan: {
    type: Number,
    default: 10
  },
  nativeScrollbar: {
    type: Boolean,
    default: false
  },
  infiniteScroll: {
    type: index.definePropType(Function)
  },
  infiniteScrollup: {
    type: index.definePropType(Function)
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
const virtualListEmits = {
  scroll: (e) => !!e
};

exports.virtualListEmits = virtualListEmits;
exports.virtualListProps = virtualListProps;
//# sourceMappingURL=virtual-list.js.map
