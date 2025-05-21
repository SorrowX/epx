'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index$2 = require('../../draggable-table/index.js');
var index = require('../../array-base/index.js');
var hooks = require('../../array-base/src/hooks.js');
var constant$1 = require('../../array-base/src/constant.js');
var constant = require('./constant.js');
var index$1 = require('element-plus/es/utils/index');
var tags = require('../../../constants/tags.js');

var ArrayTableInner = vue.defineComponent({
  name: "ElArrayTable",
  props: {
    pagination: {
      type: null
    }
  },
  setup(props, { attrs, slots }) {
    const ns = elementPlus.useNamespace("array-table");
    const field = hooks.useField();
    const { keyMap, getKey } = index.ElArrayBase.useKey();
    const pagination = props.pagination;
    const hasPagination = vue.computed(() => index$1.isObject(pagination));
    const paginationProps = vue.computed(
      () => hasPagination.value ? pagination : {}
    );
    const dataSource = vue.computed(
      () => field ? Array.isArray(field.fieldValue) ? field.fieldValue.slice() : [] : []
    );
    const current = vue.ref(1);
    const total = vue.computed(() => {
      var _a;
      return ((_a = dataSource.value) == null ? void 0 : _a.length) || 0;
    });
    const pageSize = vue.computed(() => {
      var _a;
      return ((_a = paginationProps.value) == null ? void 0 : _a.pageSize) || 10;
    });
    const startIndex = vue.computed(() => (current.value - 1) * pageSize.value);
    const endIndex = vue.computed(() => startIndex.value + pageSize.value - 1);
    vue.provide(constant.StartIndexSymbol, startIndex);
    vue.provide(constant.GetKeySymbol, getKey);
    const data = vue.computed(
      () => {
        var _a;
        return (_a = dataSource.value) == null ? void 0 : _a.slice(startIndex.value, endIndex.value + 1);
      }
    );
    const handleCurrentChange = (currentPage) => {
      current.value = currentPage;
    };
    const handleSortData = (data2, { e }) => {
      if (field && Array.isArray(field.fieldValue)) {
        const { oldIndex, newIndex } = e;
        const newIdx = newIndex + startIndex.value;
        const oldIdx = oldIndex + startIndex.value;
        field.fieldValue.splice(
          newIdx,
          0,
          field.fieldValue.splice(oldIdx, 1)[0]
        );
      }
    };
    return () => {
      const renderPagination = () => {
        return [
          vue.h(
            elementPlus.ElPagination,
            {
              background: true,
              layout: "total, prev, pager, next",
              ...paginationProps.value,
              class: ns.b("pagination"),
              currentPage: current.value,
              pageSize: pageSize.value,
              total: total.value,
              onCurrentChange: handleCurrentChange
            },
            slots
          )
        ];
      };
      const paginationVNode = hasPagination.value ? renderPagination() : [];
      const renderTable = (data2) => {
        return vue.h(
          index.ElArrayBase,
          {
            keyMap
          },
          {
            default: () => {
              var _a, _b;
              return [
                (_a = slots == null ? void 0 : slots.prepend) == null ? void 0 : _a.call(slots, { field, keyMap, getKey }),
                vue.h(
                  index$2.ElDraggableTable,
                  {
                    ...attrs,
                    data: data2,
                    draggableProps: {
                      handle: constant$1.sortHandleKls
                    },
                    onSortData: handleSortData
                  },
                  {
                    ...slots,
                    default: () => {
                      var _a2;
                      return [(_a2 = slots.default) == null ? void 0 : _a2.call(slots, { field, keyMap, getKey })];
                    }
                  }
                ),
                ...paginationVNode,
                (_b = slots == null ? void 0 : slots.addition) == null ? void 0 : _b.call(slots, { field, keyMap, getKey })
              ];
            }
          }
        );
      };
      return vue.h(tags.DIV_TAG, { class: ns.b() }, [renderTable(data.value)]);
    };
  }
});

exports["default"] = ArrayTableInner;
//# sourceMappingURL=table.js.map
