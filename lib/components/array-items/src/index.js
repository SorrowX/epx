'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var useSortable = require('@vueuse/integrations/useSortable');
var hooks = require('../../array-base/src/hooks.js');
var index = require('../../array-base/index.js');
var constant = require('../../array-base/src/constant.js');
var util = require('../../../utils/util.js');
var index$1 = require('element-plus/es/utils/index');
var tags = require('../../../constants/tags.js');

const ArrayItemsInner = vue.defineComponent({
  name: "ElArrayItems",
  setup(props, { slots }) {
    const ns = elementPlus.useNamespace("array-items");
    const prefixCls = ns.b();
    const field = hooks.useField();
    const { getKey, keyMap } = index.ElArrayBase.useKey();
    const target = vue.ref();
    const dataSource = vue.computed(
      () => field ? index$1.isArray(field.fieldValue) ? field.fieldValue.slice() : [] : []
    );
    useSortable.useSortable(target, [], {
      animation: 200,
      handle: constant.sortHandleKls,
      onUpdate: (e) => {
        const { oldIndex, newIndex } = e;
        if (field && index$1.isArray(field.fieldValue)) {
          useSortable.moveArrayElement(field.fieldValue, oldIndex, newIndex, e);
        }
        if (index$1.isArray(keyMap)) {
          keyMap.splice(newIndex, 0, keyMap.splice(oldIndex, 1)[0]);
        }
      }
    });
    return () => {
      const renderItems = () => {
        const renderItem = ({
          record,
          index: index$1
        }) => {
          const key = getKey(index$1);
          return vue.h(
            tags.DIV_TAG,
            {
              key,
              class: [ns.b("list-item")]
            },
            vue.h(
              index.ElArrayBase.Item,
              {
                key,
                index: index$1,
                record
              },
              {
                default: () => {
                  var _a;
                  return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, {
                    $index: index$1,
                    $record: record,
                    field
                  });
                }
              }
            )
          );
        };
        return vue.h(
          tags.DIV_TAG,
          {
            ref: target,
            class: [ns.b("list")]
          },
          dataSource.value.map(
            (data, index) => renderItem({ record: data, index })
          )
        );
      };
      return vue.h(
        index.ElArrayBase,
        {
          keyMap
        },
        {
          default: () => vue.h(
            tags.DIV_TAG,
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
var ArrayItems = util.composeExport(ArrayItemsInner, {
  Addition: index.ElArrayBase.Addition,
  Remove: index.ElArrayBase.Remove,
  SortHandle: index.ElArrayBase.SortHandle,
  MoveDown: index.ElArrayBase.MoveDown,
  MoveUp: index.ElArrayBase.MoveUp,
  Index: index.ElArrayBase.Index
});

exports.ArrayItemsInner = ArrayItemsInner;
exports["default"] = ArrayItems;
//# sourceMappingURL=index.js.map
