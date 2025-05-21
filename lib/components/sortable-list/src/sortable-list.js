'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');
var event = require('../../../constants/event.js');

const sortableListProps = index.buildProps({
  modelValue: {
    type: index.definePropType(Array),
    required: true
  },
  tag: {
    type: index.definePropType(String),
    default: "div"
  },
  options: {
    type: index.definePropType(Object),
    default: () => ({
      animation: 300
    })
  }
});
const sortableListEmits = {
  [event.UPDATE_MODEL_EVENT]: (value) => !!value,
  [event.CHANGE_EVENT]: (value) => !!value
};

exports.sortableListEmits = sortableListEmits;
exports.sortableListProps = sortableListProps;
//# sourceMappingURL=sortable-list.js.map
