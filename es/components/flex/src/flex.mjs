import { buildProps, definePropType } from 'element-plus/es/utils/index';

const flexProps = buildProps({
  vertical: {
    type: Boolean,
    default: false
  },
  wrap: {
    type: definePropType(String)
  },
  justify: {
    type: definePropType(String)
  },
  align: {
    type: definePropType(String)
  },
  flex: {
    type: definePropType([Number, String])
  },
  gap: {
    type: definePropType([
      Number,
      String
    ])
  },
  component: {
    type: null
  }
});
const flexEmits = {};

export { flexEmits, flexProps };
//# sourceMappingURL=flex.mjs.map
