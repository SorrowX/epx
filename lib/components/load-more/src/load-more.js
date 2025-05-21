'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const loadMoreProps = index.buildProps({
  status: {
    type: index.definePropType(String),
    default: "more"
  },
  iconType: {
    type: index.definePropType(String),
    default: "snow",
    values: ["snow", "circle"]
  },
  color: {
    type: index.definePropType(String)
  },
  textColor: {
    type: index.definePropType(String)
  },
  iconSize: {
    type: index.definePropType([String, Number]),
    default: 16
  },
  moreText: {
    type: index.definePropType(String)
  },
  loadingText: {
    type: index.definePropType(String)
  },
  noMoreText: {
    type: index.definePropType(String)
  },
  errorText: {
    type: index.definePropType(String)
  },
  height: {
    type: index.definePropType([String, Number]),
    default: "36"
  }
});
const loadMoreEmits = {
  click: (status) => !!status
};

exports.loadMoreEmits = loadMoreEmits;
exports.loadMoreProps = loadMoreProps;
//# sourceMappingURL=load-more.js.map
