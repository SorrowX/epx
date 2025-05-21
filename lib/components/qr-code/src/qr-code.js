'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const getDefaultIconConfig = () => {
  return {
    radius: 4,
    size: 40,
    backgroundColor: "#fff",
    padding: 4
  };
};
const qrCodeProps = index.buildProps({
  text: {
    type: index.definePropType(String),
    default: ""
  },
  options: {
    type: index.definePropType(Object),
    default: () => ({})
  },
  size: {
    type: index.definePropType([Number, String]),
    default: 120
  },
  margin: {
    type: index.definePropType([Number, String]),
    default: 2
  },
  color: {
    type: index.definePropType(String)
  },
  backgroundColor: {
    type: index.definePropType(String)
  },
  iconSrc: {
    type: index.definePropType(String)
  },
  iconConfig: {
    type: index.definePropType(Object),
    default: () => getDefaultIconConfig()
  }
});
const qrCodeEmits = {};

exports.getDefaultIconConfig = getDefaultIconConfig;
exports.qrCodeEmits = qrCodeEmits;
exports.qrCodeProps = qrCodeProps;
//# sourceMappingURL=qr-code.js.map
