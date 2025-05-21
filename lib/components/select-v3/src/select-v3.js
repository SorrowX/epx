'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

var OptionTypeEnum = /* @__PURE__ */ ((OptionTypeEnum2) => {
  OptionTypeEnum2[OptionTypeEnum2["Wechat"] = 1] = "Wechat";
  OptionTypeEnum2[OptionTypeEnum2["BusinessWechat"] = 2] = "BusinessWechat";
  return OptionTypeEnum2;
})(OptionTypeEnum || {});
const selectV3Props = index.buildProps({
  options: {
    type: index.definePropType(Array),
    required: true
  },
  textEllipsisOptions: {
    type: Object,
    default: () => ({})
  },
  icon: {
    type: index.definePropType(Object)
  },
  iconOptions: {
    type: Object,
    default: () => ({})
  }
});
const selectV3Emits = {};

exports.OptionTypeEnum = OptionTypeEnum;
exports.selectV3Emits = selectV3Emits;
exports.selectV3Props = selectV3Props;
//# sourceMappingURL=select-v3.js.map
