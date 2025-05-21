import { defineComponent, computed, ref, provide, onMounted, watchEffect, h, inject } from 'vue';
import { observer } from '@formily/reactive-vue';
import { markRaw } from '@formily/reactive';
import { Grid } from '@formily/grid';
import { useFormLayout } from '../form-layout/index.mjs';
import { composeExport } from '../__builtins__/shared/utils.mjs';
import { stylePrefix } from '../__builtins__/configs/index.mjs';

const FormGridSymbol = Symbol("FormGridContext");
const createFormGrid = (props) => {
  return markRaw(new Grid(props));
};
const useFormGrid = () => inject(FormGridSymbol);
const useGridSpan = (gridSpan) => {
  return gridSpan;
};
const useGridColumn = (gridSpan = 1) => {
  return gridSpan;
};
const FormGridInner = observer(
  defineComponent({
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
      const layout = useFormLayout();
      const gridInstance = computed(() => {
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
        return markRaw((options == null ? void 0 : options.grid) ? options.grid : new Grid(options));
      });
      const prefixCls = `${stylePrefix}-form-grid`;
      const root = ref();
      provide(FormGridSymbol, gridInstance);
      onMounted(() => {
        watchEffect((onInvalidate) => {
          const dispose = gridInstance.value.connect(root.value);
          onInvalidate(() => {
            dispose();
          });
        });
      });
      return () => {
        return h(
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
const FormGridColumn = observer({
  name: "FFormGridColumn",
  props: {
    gridSpan: {
      type: Number,
      default: 1
    }
  },
  setup(props, { slots }) {
    return () => {
      return h(
        "div",
        {
          "data-grid-span": props.gridSpan
        },
        slots
      );
    };
  }
});
const FormGrid = composeExport(FormGridInner, {
  GridColumn: FormGridColumn,
  useGridSpan,
  useFormGrid,
  createFormGrid
});

export { FormGrid, createFormGrid, FormGrid as default, useFormGrid, useGridColumn };
//# sourceMappingURL=index.mjs.map
