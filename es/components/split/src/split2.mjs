import { buildProps, definePropType } from 'element-plus/es/utils/index';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event.mjs';

const splitProps = buildProps({
  modelValue: {
    type: definePropType(Number),
    default: 0.5
  },
  vertical: {
    type: definePropType(Boolean),
    default: false
  },
  min: {
    type: definePropType(Number),
    default: 0.1
  },
  max: {
    type: definePropType(Number),
    default: 0.9
  }
});
const splitEmits = {
  [UPDATE_MODEL_EVENT]: (value) => value,
  [CHANGE_EVENT]: (value) => value
};

export { splitEmits, splitProps };
//# sourceMappingURL=split2.mjs.map
