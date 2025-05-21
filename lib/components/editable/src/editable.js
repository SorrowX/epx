'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var iconsVue = require('@element-plus/icons-vue');
var event = require('../../../constants/event.js');
var index = require('element-plus/es/utils/index');

const editableProps = index.buildProps({
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
    default: iconsVue.Edit
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
  [event.CHANGE_EVENT]: (editable, options) => index.isBoolean(editable && index.isObject(options))
};

exports.editableEmits = editableEmits;
exports.editableProps = editableProps;
//# sourceMappingURL=editable.js.map
