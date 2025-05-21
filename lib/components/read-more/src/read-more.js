'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');
var event = require('../../../constants/event.js');

const readMoreProps = index.buildProps({
  height: {
    type: String,
    default: "200px"
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  transition: {
    type: Boolean,
    default: true
  },
  openText: {
    type: String
  },
  closeText: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: false
  }
});
const readMoreEmits = {
  [event.CHANGE_EVENT]: (value) => index.isBoolean(value),
  [event.UPDATE_MODEL_EVENT]: (value) => index.isBoolean(value)
};

exports.readMoreEmits = readMoreEmits;
exports.readMoreProps = readMoreProps;
//# sourceMappingURL=read-more.js.map
