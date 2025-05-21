'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index = require('../../array-base/index.js');
var constant = require('./constant.js');

var ArrayTableColumn = vue.defineComponent({
  name: "ElArrayTableColumn",
  setup(props, { attrs, slots }) {
    const startIndex = vue.inject(constant.StartIndexSymbol, vue.ref(0));
    const getKey = vue.inject(constant.GetKeySymbol, (index) => String(index));
    return () => {
      return vue.h(
        elementPlus.ElTableColumn,
        {
          ...attrs
        },
        {
          ...slots,
          default: ({ $index, column, row }) => {
            const realIndex = startIndex.value + $index;
            return vue.h(
              index.ElArrayBase.Item,
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

exports["default"] = ArrayTableColumn;
//# sourceMappingURL=column.js.map
