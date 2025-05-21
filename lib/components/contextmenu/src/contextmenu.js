'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const contextmenuProps = index.buildProps({
  data: {
    type: null
  },
  options: {
    type: index.definePropType(Array),
    default: () => []
  }
});
const contextmenuEmits = {
  change: (value, valuePath) => !!value && !!valuePath
};

exports.contextmenuEmits = contextmenuEmits;
exports.contextmenuProps = contextmenuProps;
//# sourceMappingURL=contextmenu.js.map
