'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var table = require('./table.js');
var pagination = require('./pagination.js');
var tablePage = require('./table-page.js');
var useGlobalConfig = require('../../config-provider-v2/src/hooks/use-global-config.js');
var tags = require('../../../constants/tags.js');

var TablePage = vue.defineComponent({
  name: "ElTablePage",
  props: {
    ...tablePage.tablePageProps
  },
  setup(props, { attrs, slots, expose, emit }) {
    const epTableRef = vue.ref();
    const pageTableRef = vue.ref();
    const headerWrapperRef = vue.ref();
    const tableWrapperRef = vue.ref();
    const footerWrapperRef = vue.ref();
    const ns = elementPlus.useNamespace("table");
    const ROOT_PREFIX = ns.b("page");
    const TABLE_PREFIX = ns.b("wrapper");
    const { tablePageConfig } = useGlobalConfig.useTablePageConfig();
    const pagination$1 = vue.computed(() => {
      return {
        ...tablePageConfig.value.pagination,
        ...props.pagination
      };
    });
    const firstPageSize = vue.computed(
      () => {
        var _a, _b, _c;
        return (_c = (_b = pagination$1.value.defaultPageSize) != null ? _b : (_a = pagination$1.value.pageSizes) == null ? void 0 : _a[0]) != null ? _c : 10;
      }
    );
    const config = vue.computed(() => {
      return {
        ...tablePageConfig.value.config,
        ...props.config
      };
    });
    const currentPageKey = vue.computed(() => config.value.currentPage);
    const pageSizeKey = vue.computed(() => config.value.pageSize);
    const totalKey = vue.computed(() => config.value.total);
    const isEmpty = vue.computed(
      () => state.loading === false && state.tableData.length === 0
    );
    const state = vue.reactive({
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
      const empty = vue.h(elementPlus.ElEmpty, { imageSize: 120, ...pureAttrs }, slots);
      const table$1 = vue.h(table["default"], tableData, {
        empty: () => empty,
        ...slots
      });
      const loadingTable = vue.withDirectives(table$1, [[elementPlus.vLoading, state.loading]]);
      const wrapperTable = vue.h(
        tags.DIV_TAG,
        {
          class: [
            TABLE_PREFIX,
            needFixed || isEmpty.value ? `${TABLE_PREFIX}--fixed` : ""
          ],
          ref: tableWrapperRef
        },
        [
          slots.table ? vue.withDirectives((_a = slots.table({ list: state.tableData })) == null ? void 0 : _a[0], [
            [elementPlus.vLoading, state.loading]
          ]) : loadingTable
        ]
      );
      const paginationVnode = vue.h(
        pagination["default"],
        {
          ...pagination$1.value,
          ref: footerWrapperRef,
          currentPage: state[currentPageKey.value],
          pageSize: state[pageSizeKey.value],
          total: state[totalKey.value],
          onSizeChange: handleSizeChange,
          onCurrentChange: handleCurrentChange
        },
        slots
      );
      return vue.h(
        tags.DIV_TAG,
        {
          class: ROOT_PREFIX,
          ref: pageTableRef
        },
        [
          vue.h(
            tags.DIV_TAG,
            {
              class: `${ROOT_PREFIX}__header`,
              ref: headerWrapperRef
            },
            [slots.header && slots.header()]
          ),
          wrapperTable,
          vue.withDirectives(paginationVnode, [[vue.vShow, props.showPagination]])
        ]
      );
    };
  }
});

exports["default"] = TablePage;
//# sourceMappingURL=index.js.map
