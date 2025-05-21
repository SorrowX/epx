'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const dotProps = index.buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  color: String,
  size: {
    type: String
  }
});
const dotEmits = {};

exports.dotEmits = dotEmits;
exports.dotProps = dotProps;
//# sourceMappingURL=dot.js.map
