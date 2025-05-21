import { buildProps, definePropType } from 'element-plus/es/utils/index';

const ellipsisProps = buildProps({
  rows: {
    type: [Number, String]
  },
  condition: {
    type: definePropType([Function])
  }
});
const ellipsisEmits = {};

export { ellipsisEmits, ellipsisProps };
//# sourceMappingURL=ellipsis.mjs.map
