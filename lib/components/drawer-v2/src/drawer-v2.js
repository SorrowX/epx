'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const drawerV2Props = index.buildProps({
  title: {
    type: String
  },
  triggerProps: {
    type: index.definePropType(Object)
  },
  cancelProps: {
    type: index.definePropType(Object)
  },
  sureProps: {
    type: index.definePropType(Object)
  },
  onCancel: {
    type: index.definePropType(Function)
  },
  onSure: {
    type: index.definePropType(Function)
  }
});
const drawerV2Emits = {};

exports.drawerV2Emits = drawerV2Emits;
exports.drawerV2Props = drawerV2Props;
//# sourceMappingURL=drawer-v2.js.map
