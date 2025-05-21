import { defineComponent, ref, computed, h } from 'vue';
import { useNamespace } from 'element-plus';
import { useSortable, moveArrayElement } from '@vueuse/integrations/useSortable';
import { useField } from '../../array-base/src/hooks.mjs';
import { ElArrayBase } from '../../array-base/index.mjs';
import { sortHandleKls } from '../../array-base/src/constant.mjs';
import { composeExport } from '../../../utils/util.mjs';
import { isArray } from 'element-plus/es/utils/index';
import { DIV_TAG } from '../../../constants/tags.mjs';

const ArrayItemsInner = defineComponent({
  name: "ElArrayItems",
  setup(props, { slots }) {
    const ns = useNamespace("array-items");
    const prefixCls = ns.b();
    const field = useField();
    const { getKey, keyMap } = ElArrayBase.useKey();
    const target = ref();
    const dataSource = computed(
      () => field ? isArray(field.fieldValue) ? field.fieldValue.slice() : [] : []
    );
    useSortable(target, [], {
      animation: 200,
      handle: sortHandleKls,
      onUpdate: (e) => {
        const { oldIndex, newIndex } = e;
        if (field && isArray(field.fieldValue)) {
          moveArrayElement(field.fieldValue, oldIndex, newIndex, e);
        }
        if (isArray(keyMap)) {
          keyMap.splice(newIndex, 0, keyMap.splice(oldIndex, 1)[0]);
        }
      }
    });
    return () => {
      const renderItems = () => {
        const renderItem = ({
          record,
          index
        }) => {
          const key = getKey(index);
          return h(
            DIV_TAG,
            {
              key,
              class: [ns.b("list-item")]
            },
            h(
              ElArrayBase.Item,
              {
                key,
                index,
                record
              },
              {
                default: () => {
                  var _a;
                  return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, {
                    $index: index,
                    $record: record,
                    field
                  });
                }
              }
            )
          );
        };
        return h(
          DIV_TAG,
          {
            ref: target,
            class: [ns.b("list")]
          },
          dataSource.value.map(
            (data, index) => renderItem({ record: data, index })
          )
        );
      };
      return h(
        ElArrayBase,
        {
          keyMap
        },
        {
          default: () => h(
            DIV_TAG,
            {
              class: [prefixCls]
            },
            {
              default: () => {
                var _a, _b, _c;
                return [
                  (_a = slots == null ? void 0 : slots.prepend) == null ? void 0 : _a.call(slots, { field, keyMap, getKey }),
                  renderItems(),
                  (_b = slots == null ? void 0 : slots.addition) == null ? void 0 : _b.call(slots, { field, keyMap, getKey }),
                  (_c = slots == null ? void 0 : slots.append) == null ? void 0 : _c.call(slots, { field, keyMap, getKey })
                ];
              }
            }
          )
        }
      );
    };
  }
});
var ArrayItems = composeExport(ArrayItemsInner, {
  Addition: ElArrayBase.Addition,
  Remove: ElArrayBase.Remove,
  SortHandle: ElArrayBase.SortHandle,
  MoveDown: ElArrayBase.MoveDown,
  MoveUp: ElArrayBase.MoveUp,
  Index: ElArrayBase.Index
});

export { ArrayItemsInner, ArrayItems as default };
//# sourceMappingURL=index.mjs.map
