'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var reactiveVue = require('@formily/reactive-vue');
var reactive = require('@formily/reactive');
var grid = require('@formily/grid');
var index = require('../form-layout/index.js');
var utils = require('../__builtins__/shared/utils.js');
var index$1 = require('../__builtins__/configs/index.js');

const FormGridSymbol = Symbol("FormGridContext");
const createFormGrid = (props) => {
  return reactive.markRaw(new grid.Grid(props));
};
const useFormGrid = () => vue.inject(FormGridSymbol);
const useGridSpan = (gridSpan) => {
  return gridSpan;
};
const useGridColumn = (gridSpan = 1) => {
  return gridSpan;
};
const FormGridInner = reactiveVue.observer(
  vue.defineComponent({
    name: "FFormGrid",
    props: {
      columnGap: {
        type: Number
      },
      rowGap: {
        type: Number
      },
      minColumns: {
        type: [Number, Array]
      },
      minWidth: {
        type: [Number, Array]
      },
      maxColumns: {
        type: [Number, Array]
      },
      maxWidth: {
        type: [Number, Array]
      },
      breakpoints: {
        type: Array
      },
      colWrap: {
        type: Boolean,
        default: true
      },
      strictAutoFit: {
        type: Boolean,
        default: false
      },
      shouldVisible: {
        type: Function,
        default() {
          return () => true;
        }
      },
      grid: {
        type: Object
      }
    },
    setup(props, { slots }) {
      const layout = index.useFormLayout();
      const gridInstance = vue.computed(() => {
        var _a, _b, _c, _d;
        const newProps = {};
        Object.keys(props).forEach((key) => {
          if (typeof props[key] !== "undefined") {
            newProps[key] = props[key];
          }
        });
        const options = {
          columnGap: (_b = (_a = layout.value) == null ? void 0 : _a.gridColumnGap) != null ? _b : 8,
          rowGap: (_d = (_c = layout.value) == null ? void 0 : _c.gridRowGap) != null ? _d : 4,
          ...newProps
        };
        return reactive.markRaw((options == null ? void 0 : options.grid) ? options.grid : new grid.Grid(options));
      });
      const prefixCls = `${index$1.stylePrefix}-form-grid`;
      const root = vue.ref();
      vue.provide(FormGridSymbol, gridInstance);
      vue.onMounted(() => {
        vue.watchEffect((onInvalidate) => {
          const dispose = gridInstance.value.connect(root.value);
          onInvalidate(() => {
            dispose();
          });
        });
      });
      return () => {
        return vue.h(
          "div",
          {
            class: `${prefixCls}`,
            style: {
              gridTemplateColumns: gridInstance.value.templateColumns,
              gap: gridInstance.value.gap
            },
            ref: root
          },
          slots
        );
      };
    }
  })
);
const FormGridColumn = reactiveVue.observer({
  name: "FFormGridColumn",
  props: {
    gridSpan: {
      type: Number,
      default: 1
    }
  },
  setup(props, { slots }) {
    return () => {
      return vue.h(
        "div",
        {
          "data-grid-span": props.gridSpan
        },
        slots
      );
    };
  }
});
const FormGrid = utils.composeExport(FormGridInner, {
  GridColumn: FormGridColumn,
  useGridSpan,
  useFormGrid,
  createFormGrid
});

exports.FormGrid = FormGrid;
exports.createFormGrid = createFormGrid;
exports["default"] = FormGrid;
exports.useFormGrid = useFormGrid;
exports.useGridColumn = useGridColumn;
//# sourceMappingURL=index.js.map
