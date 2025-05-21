import { buildProps } from 'element-plus/es/utils/index';

const tablePageProps = buildProps({
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

export { tablePageEmits, tablePageProps };
//# sourceMappingURL=table-page.mjs.map
