import { defineComponent, ref, computed, reactive, h, withDirectives, vShow } from 'vue';
import { useNamespace, ElEmpty, vLoading } from 'element-plus';
import EpTable from './table.mjs';
import EpPagination from './pagination.mjs';
import { tablePageProps } from './table-page.mjs';
import { useTablePageConfig } from '../../config-provider-v2/src/hooks/use-global-config.mjs';
import { DIV_TAG } from '../../../constants/tags.mjs';

var TablePage = defineComponent({
  name: "ElTablePage",
  props: {
    ...tablePageProps
  },
  setup(props, { attrs, slots, expose, emit }) {
    const epTableRef = ref();
    const pageTableRef = ref();
    const headerWrapperRef = ref();
    const tableWrapperRef = ref();
    const footerWrapperRef = ref();
    const ns = useNamespace("table");
    const ROOT_PREFIX = ns.b("page");
    const TABLE_PREFIX = ns.b("wrapper");
    const { tablePageConfig } = useTablePageConfig();
    const pagination = computed(() => {
      return {
        ...tablePageConfig.value.pagination,
        ...props.pagination
      };
    });
    const firstPageSize = computed(
      () => {
        var _a, _b, _c;
        return (_c = (_b = pagination.value.defaultPageSize) != null ? _b : (_a = pagination.value.pageSizes) == null ? void 0 : _a[0]) != null ? _c : 10;
      }
    );
    const config = computed(() => {
      return {
        ...tablePageConfig.value.config,
        ...props.config
      };
    });
    const currentPageKey = computed(() => config.value.currentPage);
    const pageSizeKey = computed(() => config.value.pageSize);
    const totalKey = computed(() => config.value.total);
    const isEmpty = computed(
      () => state.loading === false && state.tableData.length === 0
    );
    const state = reactive({
      [currentPageKey.value]: 1,
      [pageSizeKey.value]: firstPageSize.value,
      [totalKey.value]: 0,
      loading: false,
      tableData: []
    });
    const query = async (params = {}) => {
      var _a, _b;
      const currentPageValue = (_a = params[currentPageKey.value]) != null ? _a : state[currentPageKey.value];
      const pageSizeValue = (_b = params[pageSizeKey.value]) != null ? _b : state[pageSizeKey.value];
      state[currentPageKey.value] = currentPageValue;
      state[pageSizeKey.value] = pageSizeValue;
      return new Promise((resolve, reject) => {
        var _a2;
        state.loading = true;
        (_a2 = props == null ? void 0 : props.httpRequest) == null ? void 0 : _a2.call(props, {
          params: {
            [currentPageKey.value]: currentPageValue,
            [pageSizeKey.value]: pageSizeValue,
            ...params
          },
          resolve: ({ list, total }) => {
            state.loading = false;
            state.tableData = list;
            state[totalKey.value] = total != null ? total : 0;
            emit("data-change", state);
            return resolve(state);
          },
          reject: (e) => {
            state.loading = false;
            emit("data-change", state);
            return reject(e);
          }
        });
      });
    };
    if (props.firstInvoke) {
      query();
    }
    const handleSizeChange = (pageSize) => {
      state[pageSizeKey.value] = pageSize;
      query();
    };
    const handleCurrentChange = (currentPage) => {
      state[currentPageKey.value] = currentPage;
      query();
    };
    const request = ({ ...args }) => {
      return query(args);
    };
    const getTable = () => {
      var _a;
      return (_a = epTableRef.value) == null ? void 0 : _a.getTable();
    };
    const getState = () => state;
    const getCurrentPageCounts = (currentPage, pageSize, total) => {
      const pages = Math.ceil(total / pageSize);
      const prevSize = (currentPage - 1) * pageSize;
      return total <= pageSize ? total : currentPage === pages ? total % prevSize : pageSize;
    };
    const getCurrentPageBySubtract = (count) => {
      const currentPageValue = state[currentPageKey.value];
      const counts = getCurrentPageCounts(
        currentPageValue,
        state[pageSizeKey.value],
        state[totalKey.value]
      );
      return Math.max(
        1,
        counts - count > 0 ? currentPageValue : currentPageValue - 1
      );
    };
    const getTableWrapperHeight = () => {
      const pageTable = pageTableRef.value;
      const header = headerWrapperRef.value;
      const footer = footerWrapperRef.value;
      if (pageTable && header && footer) {
        return pageTable.offsetHeight - header.offsetHeight - footer.$el.offsetHeight;
      } else {
        return 0;
      }
    };
    expose({
      request,
      getTable,
      getState,
      getCurrentPageCounts,
      getCurrentPageBySubtract,
      tableRef: tableWrapperRef
    });
    return () => {
      var _a;
      const { columns } = props;
      const tableWrapperHeight = getTableWrapperHeight();
      const needFixed = tableWrapperHeight > props.boundaryValue;
      const pureAttrs = { ...attrs };
      delete pureAttrs.class;
      delete pureAttrs.style;
      const tableData = {
        height: "100%",
        ...pureAttrs,
        columns,
        data: state.tableData,
        ref: epTableRef,
        key: needFixed || isEmpty.value ? "true" : "false"
      };
      const empty = h(ElEmpty, { imageSize: 120, ...pureAttrs }, slots);
      const table = h(EpTable, tableData, {
        empty: () => empty,
        ...slots
      });
      const loadingTable = withDirectives(table, [[vLoading, state.loading]]);
      const wrapperTable = h(
        DIV_TAG,
        {
          class: [
            TABLE_PREFIX,
            needFixed || isEmpty.value ? `${TABLE_PREFIX}--fixed` : ""
          ],
          ref: tableWrapperRef
        },
        [
          slots.table ? withDirectives((_a = slots.table({ list: state.tableData })) == null ? void 0 : _a[0], [
            [vLoading, state.loading]
          ]) : loadingTable
        ]
      );
      const paginationVnode = h(
        EpPagination,
        {
          ...pagination.value,
          ref: footerWrapperRef,
          currentPage: state[currentPageKey.value],
          pageSize: state[pageSizeKey.value],
          total: state[totalKey.value],
          onSizeChange: handleSizeChange,
          onCurrentChange: handleCurrentChange
        },
        slots
      );
      return h(
        DIV_TAG,
        {
          class: ROOT_PREFIX,
          ref: pageTableRef
        },
        [
          h(
            DIV_TAG,
            {
              class: `${ROOT_PREFIX}__header`,
              ref: headerWrapperRef
            },
            [slots.header && slots.header()]
          ),
          wrapperTable,
          withDirectives(paginationVnode, [[vShow, props.showPagination]])
        ]
      );
    };
  }
});

export { TablePage as default };
//# sourceMappingURL=index.mjs.map
