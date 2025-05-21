import { buildProps, definePropType } from 'element-plus/es/utils/index';

var OptionTypeEnum = /* @__PURE__ */ ((OptionTypeEnum2) => {
  OptionTypeEnum2[OptionTypeEnum2["Wechat"] = 1] = "Wechat";
  OptionTypeEnum2[OptionTypeEnum2["BusinessWechat"] = 2] = "BusinessWechat";
  return OptionTypeEnum2;
})(OptionTypeEnum || {});
const selectV3Props = buildProps({
  options: {
    type: definePropType(Array),
    required: true
  },
  textEllipsisOptions: {
    type: Object,
    default: () => ({})
  },
  icon: {
    type: definePropType(Object)
  },
  iconOptions: {
    type: Object,
    default: () => ({})
  }
});
const selectV3Emits = {};

export { OptionTypeEnum, selectV3Emits, selectV3Props };
//# sourceMappingURL=select-v3.mjs.map
