'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('element-plus/es/utils/index');

const tablePageProps = index.buildProps({
  httpRequest: {
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
    default: () => ({})
  },
  firstInvoke: {
    type: Boolean,
    default: true
  },
  boundaryValue: {
    type: Number,
    default: 680
  },
  showPagination: {
    type: Boolean,
    default: true
  }
});
const tablePageEmits = {};

exports.tablePageEmits = tablePageEmits;
exports.tablePageProps = tablePageProps;
//# sourceMappingURL=table-page.js.map
