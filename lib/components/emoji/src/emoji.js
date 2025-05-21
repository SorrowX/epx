'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');
var event = require('../../../constants/event.js');

const commonProps = {
  modelValue: {
    type: null
  },
  type: {
    type: String,
    default: "text",
    values: ["text", "code", "image", "icon"]
  },
  keepAlive: {
    type: Boolean,
    default: true
  }
};
const commonEmits = {
  [event.UPDATE_MODEL_EVENT]: (str) => index.isString(str),
  [event.CHANGE_EVENT]: (item, type) => index.isObject(item) && index.isString(type)
};
const emojiProps = index.buildProps({ ...commonProps });
const emojiEmits = {
  ...commonEmits,
  "click-tab": (tab) => !!tab
};
const emoticonProps = index.buildProps({
  ...commonProps
});
const emoticonEmits = {
  ...commonEmits
};

exports.emojiEmits = emojiEmits;
exports.emojiProps = emojiProps;
exports.emoticonEmits = emoticonEmits;
exports.emoticonProps = emoticonProps;
//# sourceMappingURL=emoji.js.map
