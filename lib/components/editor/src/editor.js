'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');
var event = require('../../../constants/event.js');

const editorProps = index.buildProps({
  modelValue: {
    type: String,
    default: ""
  },
  maxlength: {
    type: [String, Number],
    default: ""
  },
  options: {
    type: index.definePropType([Array, Function]),
    default: () => []
  },
  prefix: {
    type: index.definePropType(String),
    default: "@"
  },
  extensions: {
    type: index.definePropType(Array),
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
    type: index.definePropType(Object),
    default: () => ({})
  },
  resize: {
    type: Boolean,
    default: false
  }
});
const editorEmits = {
  enter: (values) => index.isObject(values),
  [event.UPDATE_MODEL_EVENT]: (value) => index.isString(value)
};

exports.editorEmits = editorEmits;
exports.editorProps = editorProps;
//# sourceMappingURL=editor.js.map
