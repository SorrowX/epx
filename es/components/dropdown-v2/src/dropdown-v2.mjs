import { buildProps, definePropType } from 'element-plus/es/utils/index';

const dropdownV2Props = buildProps({
  options: {
    type: definePropType(Array),
    default: () => []
  },
  splitButton: {
    type: definePropType(Boolean),
    default: false
  },
  triggerProps: {
    type: definePropType(Object)
  }
});
const dropdownV2Emits = {
  change: (value, valuePath) => !!value && !!valuePath
};

export { dropdownV2Emits, dropdownV2Props };
//# sourceMappingURL=dropdown-v2.mjs.map
