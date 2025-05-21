'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const dropdownV2Props = index.buildProps({
  options: {
    type: index.definePropType(Array),
    default: () => []
  },
  splitButton: {
    type: index.definePropType(Boolean),
    default: false
  },
  triggerProps: {
    type: index.definePropType(Object)
  }
});
const dropdownV2Emits = {
  change: (value, valuePath) => !!value && !!valuePath
};

exports.dropdownV2Emits = dropdownV2Emits;
exports.dropdownV2Props = dropdownV2Props;
//# sourceMappingURL=dropdown-v2.js.map
