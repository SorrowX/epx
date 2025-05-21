'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('./src/bubble/index.js');
var index$2 = require('./src/bubble-list/index.js');
var bubble = require('./src/bubble/bubble.js');
var bubbleList = require('./src/bubble-list/bubble-list.js');
var index = require('element-plus/es/utils/index');

const ElBubble = index.withInstall(index$1["default"]);
const ElBubbleList = index.withInstall(index$2["default"]);

exports.bubbleEmits = bubble.bubbleEmits;
exports.bubbleProps = bubble.bubbleProps;
exports.bubbleListEmits = bubbleList.bubbleListEmits;
exports.bubbleListProps = bubbleList.bubbleListProps;
exports.ElBubble = ElBubble;
exports.ElBubbleList = ElBubbleList;
exports["default"] = ElBubble;
//# sourceMappingURL=index.js.map
