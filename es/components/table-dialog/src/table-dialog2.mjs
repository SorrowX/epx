import { UPDATE_MODEL_EVENT, CANCEL_EVENT } from '../../../constants/event.mjs';
import { buildProps, isArray } from 'element-plus/es/utils/index';

const tableDialogProps = buildProps({
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
  [UPDATE_MODEL_EVENT]: (values) => isArray(values),
  [CANCEL_EVENT]: () => null
};

export { tableDialogEmits, tableDialogProps };
//# sourceMappingURL=table-dialog2.mjs.map
