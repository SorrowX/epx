import { Edit } from '@element-plus/icons-vue';
import { CHANGE_EVENT } from '../../../constants/event.mjs';
import { buildProps, isBoolean, isObject } from 'element-plus/es/utils/index';

const editableProps = buildProps({
  modelValue: {
    type: null
  },
  trigger: {
    type: String,
    values: ["dblclick", "click", "icon"],
    default: "dblclick"
  },
  icon: {
    type: null,
    default: Edit
  },
  defaultEditState: {
    type: Boolean,
    default: false
  },
  focus: {
    type: Boolean,
    default: true
  }
});
const editableEmits = {
  [CHANGE_EVENT]: (editable, options) => isBoolean(editable && isObject(options))
};

export { editableEmits, editableProps };
//# sourceMappingURL=editable.mjs.map
