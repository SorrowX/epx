import { buildProps, definePropType, isObject, isString } from 'element-plus/es/utils/index';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';

const editorProps = buildProps({
  modelValue: {
    type: String,
    default: ""
  },
  maxlength: {
    type: [String, Number],
    default: ""
  },
  options: {
    type: definePropType([Array, Function]),
    default: () => []
  },
  prefix: {
    type: definePropType(String),
    default: "@"
  },
  extensions: {
    type: definePropType(Array),
    default: () => []
  },
  placeholder: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disableEnterEmit: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: true
  },
  editorOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  resize: {
    type: Boolean,
    default: false
  }
});
const editorEmits = {
  enter: (values) => isObject(values),
  [UPDATE_MODEL_EVENT]: (value) => isString(value)
};

export { editorEmits, editorProps };
//# sourceMappingURL=editor.mjs.map
