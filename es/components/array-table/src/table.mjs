import { defineComponent, computed, ref, provide, h } from 'vue';
import { useNamespace, ElPagination } from 'element-plus';
import { ElDraggableTable } from '../../draggable-table/index.mjs';
import { ElArrayBase } from '../../array-base/index.mjs';
import { useField } from '../../array-base/src/hooks.mjs';
import { sortHandleKls } from '../../array-base/src/constant.mjs';
import { StartIndexSymbol, GetKeySymbol } from './constant.mjs';
import { isObject } from 'element-plus/es/utils/index';
import { DIV_TAG } from '../../../constants/tags.mjs';

var ArrayTableInner = defineComponent({
  name: "ElArrayTable",
  props: {
    pagination: {
      type: null
    }
  },
  setup(props, { attrs, slots }) {
    const ns = useNamespace("array-table");
    const field = useField();
    const { keyMap, getKey } = ElArrayBase.useKey();
    const pagination = props.pagination;
    const hasPagination = computed(() => isObject(pagination));
    const paginationProps = computed(
      () => hasPagination.value ? pagination : {}
    );
    const dataSource = computed(
      () => field ? Array.isArray(field.fieldValue) ? field.fieldValue.slice() : [] : []
    );
    const current = ref(1);
    const total = computed(() => {
      var _a;
      return ((_a = dataSource.value) == null ? void 0 : _a.length) || 0;
    });
    const pageSize = computed(() => {
      var _a;
      return ((_a = paginationProps.value) == null ? void 0 : _a.pageSize) || 10;
    });
    const startIndex = computed(() => (current.value - 1) * pageSize.value);
    const endIndex = computed(() => startIndex.value + pageSize.value - 1);
    provide(StartIndexSymbol, startIndex);
    provide(GetKeySymbol, getKey);
    const data = computed(
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
          h(
            ElPagination,
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
        return h(
          ElArrayBase,
          {
            keyMap
          },
          {
            default: () => {
              var _a, _b;
              return [
                (_a = slots == null ? void 0 : slots.prepend) == null ? void 0 : _a.call(slots, { field, keyMap, getKey }),
                h(
                  ElDraggableTable,
                  {
                    ...attrs,
                    data: data2,
                    draggableProps: {
                      handle: sortHandleKls
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
      return h(DIV_TAG, { class: ns.b() }, [renderTable(data.value)]);
    };
  }
});

export { ArrayTableInner as default };
//# sourceMappingURL=table.mjs.map
