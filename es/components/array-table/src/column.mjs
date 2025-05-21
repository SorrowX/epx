import { defineComponent, inject, ref, h } from 'vue';
import { ElTableColumn } from 'element-plus';
import { ElArrayBase } from '../../array-base/index.mjs';
import { StartIndexSymbol, GetKeySymbol } from './constant.mjs';

var ArrayTableColumn = defineComponent({
  name: "ElArrayTableColumn",
  setup(props, { attrs, slots }) {
    const startIndex = inject(StartIndexSymbol, ref(0));
    const getKey = inject(GetKeySymbol, (index) => String(index));
    return () => {
      return h(
        ElTableColumn,
        {
          ...attrs
        },
        {
          ...slots,
          default: ({ $index, column, row }) => {
            const realIndex = startIndex.value + $index;
            return h(
              ElArrayBase.Item,
              {
                index: realIndex,
                record: row,
                key: getKey($index)
              },
              {
                default: () => {
                  var _a;
                  return (_a = slots.default) == null ? void 0 : _a.call(slots, {
                    $index: realIndex,
                    $record: row,
                    index: $index,
                    column,
                    row
                  });
                }
              }
            );
          }
        }
      );
    };
  }
});

export { ArrayTableColumn as default };
//# sourceMappingURL=column.mjs.map
