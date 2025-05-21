'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const submitProps = index.buildProps({
  onClick: {
    type: index.definePropType(Function)
  },
  onSubmit: {
    type: index.definePropType(Function)
  },
  onSubmitSuccess: {
    type: index.definePropType(Function)
  },
  onSubmitFailed: {
    type: index.definePropType(Function)
  }
});
const submitEmits = {};

exports.submitEmits = submitEmits;
exports.submitProps = submitProps;
//# sourceMappingURL=submit.js.map
