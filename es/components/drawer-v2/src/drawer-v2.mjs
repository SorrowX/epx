import { buildProps, definePropType } from 'element-plus/es/utils/index';

const drawerV2Props = buildProps({
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
const drawerV2Emits = {};

export { drawerV2Emits, drawerV2Props };
//# sourceMappingURL=drawer-v2.mjs.map
