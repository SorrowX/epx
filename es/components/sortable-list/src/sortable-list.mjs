import { buildProps, definePropType } from 'element-plus/es/utils/index';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event.mjs';

const sortableListProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    required: true
  },
  tag: {
    type: definePropType(String),
    default: "div"
  },
  options: {
    type: definePropType(Object),
    default: () => ({
      animation: 300
    })
  }
});
const sortableListEmits = {
  [UPDATE_MODEL_EVENT]: (value) => !!value,
  [CHANGE_EVENT]: (value) => !!value
};

export { sortableListEmits, sortableListProps };
//# sourceMappingURL=sortable-list.mjs.map
