'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');
var event = require('../../../constants/event.js');

const splitProps = index.buildProps({
  modelValue: {
    type: index.definePropType(Number),
    default: 0.5
  },
  vertical: {
    type: index.definePropType(Boolean),
    default: false
  },
  min: {
    type: index.definePropType(Number),
    default: 0.1
  },
  max: {
    type: index.definePropType(Number),
    default: 0.9
  }
});
const splitEmits = {
  [event.UPDATE_MODEL_EVENT]: (value) => value,
  [event.CHANGE_EVENT]: (value) => value
};

exports.splitEmits = splitEmits;
exports.splitProps = splitProps;
//# sourceMappingURL=split2.js.map
