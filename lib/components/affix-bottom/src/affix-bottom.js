'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const affixBottomProps = index.buildProps({
  position: {
    type: String,
    default: "absolute",
    values: ["absolute", "fixed"]
  },
  tag: {
    type: String,
    default: "div"
  }
});
const affixBottomEmits = {};

exports.affixBottomEmits = affixBottomEmits;
exports.affixBottomProps = affixBottomProps;
//# sourceMappingURL=affix-bottom.js.map
