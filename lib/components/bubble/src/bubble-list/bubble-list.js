'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const bubbleListProps = index.buildProps({
  autoScroll: {
    type: Boolean,
    default: true
  },
  items: {
    type: index.definePropType(Array),
    default: () => []
  },
  roles: {
    type: index.definePropType([Object, Function])
  },
  onLastBubbleTypingComplete: {
    type: index.definePropType(Function)
  }
});
const bubbleListEmits = {};

exports.bubbleListEmits = bubbleListEmits;
exports.bubbleListProps = bubbleListProps;
//# sourceMappingURL=bubble-list.js.map
