import { buildProps, isBoolean } from 'element-plus/es/utils/index';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';

const readMoreProps = buildProps({
  height: {
    type: String,
    default: "200px"
  },
  modelValue: {
    type: Boolean,
    default: true
  },
  transition: {
    type: Boolean,
    default: true
  },
  openText: {
    type: String
  },
  closeText: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: false
  }
});
const readMoreEmits = {
  [CHANGE_EVENT]: (value) => isBoolean(value),
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value)
};

export { readMoreEmits, readMoreProps };
//# sourceMappingURL=read-more.mjs.map
