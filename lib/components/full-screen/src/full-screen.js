'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');
var tags = require('../../../constants/tags.js');

const fullScreenProps = index.buildProps({
  tag: {
    type: index.definePropType(String),
    default: tags.DIV_TAG
  },
  type: {
    type: index.definePropType(String),
    default: "window",
    values: ["window", "browser"]
  }
});
const fullScreenEmits = {};

exports.fullScreenEmits = fullScreenEmits;
exports.fullScreenProps = fullScreenProps;
//# sourceMappingURL=full-screen.js.map
