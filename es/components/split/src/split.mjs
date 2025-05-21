import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, renderSlot } from 'vue';
import { useNamespace } from 'element-plus';
import { splitProps, splitEmits } from './split2.mjs';
import { useMoving } from './hooks.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';

const __default__ = defineComponent({
  name: "ElSplit"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: splitProps,
  emits: splitEmits,
  setup(__props, { emit: __emit }) {
    const ns = useNamespace("split");
    const nsPanel = useNamespace("split__panel");
    const props = __props;
    const emit = __emit;
    const wrapper = ref();
    const currentValue = ref(props.modelValue);
    const offset = computed(() => {
      return props.vertical ? "offsetHeight" : "offsetWidth";
    });
    const position = computed(() => {
      return props.vertical ? ["top", "bottom"] : ["left", "right"];
    });
    const outer = computed(() => {
      var _a, _b;
      return (_b = (_a = wrapper.value) == null ? void 0 : _a[offset.value]) != null ? _b : 0;
    });
    const min = computed(
      () => props.min <= 1 ? props.min : props.min / outer.value
    );
    const max = computed(
      () => props.max <= 1 ? props.max : props.max / outer.value
    );
    function handleChange(value) {
      if (value.toFixed(5) !== currentValue.value.toFixed(5)) {
        currentValue.value = value;
        emit(CHANGE_EVENT, value);
        emit(UPDATE_MODEL_EVENT, value);
      }
    }
    const { target: handler, moving } = useMoving({
      lazy: true,
      capture: false,
      onStart: (state, event) => {
        if (!wrapper.value || event.button > 0) {
          return false;
        }
        state.start = currentValue.value * outer.value;
        state.target = currentValue.value;
      },
      onMove: (state) => {
        const delta = props.vertical ? state.deltaY : state.deltaX;
        const start = state.start;
        const value = Math.min(
          Math.max(min.value, (start + delta) / outer.value),
          max.value
        );
        handleChange(value);
      }
    });
    const leftPaneStyle = computed(() => {
      return {
        [position.value[1]]: `${(1 - currentValue.value) * 100}%`
      };
    });
    const rightPaneStyle = computed(() => {
      return {
        [position.value[0]]: `${currentValue.value * 100}%`
      };
    });
    const triggerStyle = computed(() => {
      return {
        [position.value[0]]: `calc(${currentValue.value * 100}% - var(${ns.cssVarName("split-handler-size")}) * 0.5)`
      };
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(
        "div",
        {
          ref_key: "wrapper",
          ref: wrapper,
          class: normalizeClass([
            unref(ns).b(),
            unref(ns).m(unref(moving) ? "moving" : ""),
            unref(ns).m(_ctx.vertical ? "vertical" : "horizontal"),
            _ctx.$attrs.class
          ]),
          style: normalizeStyle({ ...(_a = _ctx.$attrs.style) != null ? _a : {} })
        },
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass([unref(ns).e("panel"), unref(nsPanel).m(_ctx.vertical ? "top" : "left")]),
              style: normalizeStyle(leftPaneStyle.value)
            },
            [
              renderSlot(_ctx.$slots, "left")
            ],
            6
          ),
          createElementVNode(
            "div",
            {
              class: normalizeClass([unref(ns).e("panel"), unref(nsPanel).m(_ctx.vertical ? "bottom" : "right")]),
              style: normalizeStyle(rightPaneStyle.value)
            },
            [
              renderSlot(_ctx.$slots, "right")
            ],
            6
          ),
          createElementVNode(
            "div",
            {
              class: normalizeClass(unref(ns).e("trigger")),
              style: normalizeStyle(triggerStyle.value)
            },
            [
              createElementVNode(
                "div",
                {
                  ref_key: "handler",
                  ref: handler,
                  class: normalizeClass(unref(ns).e("handler"))
                },
                [
                  renderSlot(_ctx.$slots, "handler", {}, () => [
                    createElementVNode(
                      "span",
                      {
                        class: normalizeClass(unref(ns).e("pointer"))
                      },
                      null,
                      2
                    )
                  ])
                ],
                2
              )
            ],
            6
          )
        ],
        6
      );
    };
  }
});
var Split = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "split.vue"]]);

export { Split as default };
//# sourceMappingURL=split.mjs.map
