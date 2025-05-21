'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var event = require('../../../constants/event.js');
var index = require('element-plus/es/utils/index');

const tableDialogProps = index.buildProps({
  rowKey: {
    type: String,
    required: true
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ""
  },
  width: {
    type: Number,
    default: 900
  },
  height: {
    type: Number,
    default: 500
  },
  type: {
    type: String,
    values: ["checkbox", "radio"],
    default: "checkbox"
  },
  selectable: {
    type: Function
  },
  columns: {
    type: Array,
    default: () => []
  },
  pagination: {
    type: Object,
    default: () => ({})
  },
  config: {
    type: Object,
    default: () => ({
      id: "id",
      label: "label"
    })
  },
  headerCellStyle: {
    type: Object,
    default: () => ({
      background: "#EBEEF5"
    })
  },
  hiddenRight: {
    type: Boolean,
    default: false
  },
  boundaryValue: {
    type: Number,
    default: 50
  },
  dynamicSizeListProps: {
    type: Object,
    default: () => ({})
  },
  unshift: {
    type: Boolean,
    default: false
  },
  selectedFieldTitle: {
    type: String,
    default: ""
  },
  cancelText: { type: String },
  sureText: { type: String },
  onSure: {
    type: Function
  }
});
const tableDialogEmits = {
  [event.UPDATE_MODEL_EVENT]: (values) => index.isArray(values),
  [event.CANCEL_EVENT]: () => null
};

exports.tableDialogEmits = tableDialogEmits;
exports.tableDialogProps = tableDialogProps;
//# sourceMappingURL=table-dialog2.js.map
