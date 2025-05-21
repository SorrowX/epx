'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const bubbleProps = index.buildProps({
  avatar: {
    type: index.definePropType([
      Object,
      Boolean
    ])
  },
  placement: {
    type: index.definePropType(String),
    default: "start",
    values: ["start", "end"]
  },
  loading: {
    type: Boolean,
    default: false
  },
  typing: {
    type: index.definePropType([Boolean, Object])
  },
  messageRender: {
    type: index.definePropType(Function)
  },
  loadingRender: {
    type: index.definePropType(Function)
  },
  variant: {
    type: index.definePropType(
      String
    ),
    default: "filled",
    values: ["filled", "borderless", "outlined", "shadow"]
  },
  shape: {
    type: index.definePropType(String),
    values: ["round", "corner", "arrow"]
  },
  onTypingComplete: {
    type: index.definePropType(Function)
  },
  header: {
    type: index.definePropType([Object, String])
  },
  content: {
    type: index.definePropType([Object, String])
  },
  footer: {
    type: index.definePropType([Object, String])
  },
  headerStyle: {
    type: index.definePropType([String, Object, Array])
  },
  headerClass: {
    type: String
  },
  contentStyle: {
    type: index.definePropType([String, Object, Array])
  },
  contentClass: {
    type: String
  },
  footerStyle: {
    type: index.definePropType([String, Object, Array])
  },
  footerClass: {
    type: String
  }
});
const bubbleEmits = {};

exports.bubbleEmits = bubbleEmits;
exports.bubbleProps = bubbleProps;
//# sourceMappingURL=bubble.js.map
