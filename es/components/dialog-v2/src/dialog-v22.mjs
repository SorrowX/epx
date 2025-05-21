import { buildProps, definePropType } from 'element-plus/es/utils/index';

const dialogV2Props = buildProps({
  title: {
    type: String
  },
  triggerProps: {
    type: definePropType(Object)
  },
  cancelProps: {
    type: definePropType(Object)
  },
  sureProps: {
    type: definePropType(Object)
  },
  onCancel: {
    type: definePropType(Function)
  },
  onSure: {
    type: definePropType(Function)
  }
});
const dialogV2Emits = {};

export { dialogV2Emits, dialogV2Props };
//# sourceMappingURL=dialog-v22.mjs.map
