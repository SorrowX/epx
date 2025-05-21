'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const flexProps = index.buildProps({
  vertical: {
    type: Boolean,
    default: false
  },
  wrap: {
    type: index.definePropType(String)
  },
  justify: {
    type: index.definePropType(String)
  },
  align: {
    type: index.definePropType(String)
  },
  flex: {
    type: index.definePropType([Number, String])
  },
  gap: {
    type: index.definePropType([
      Number,
      String
    ])
  },
  component: {
    type: null
  }
});
const flexEmits = {};

exports.flexEmits = flexEmits;
exports.flexProps = flexProps;
//# sourceMappingURL=flex.js.map
