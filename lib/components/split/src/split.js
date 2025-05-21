'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var split = require('./split2.js');
var hooks = require('./hooks.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var event = require('../../../constants/event.js');

const __default__ = vue.defineComponent({
  name: "ElSplit"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: split.splitProps,
  emits: split.splitEmits,
  setup(__props, { emit: __emit }) {
    const ns = elementPlus.useNamespace("split");
    const nsPanel = elementPlus.useNamespace("split__panel");
    const props = __props;
    const emit = __emit;
    const wrapper = vue.ref();
    const currentValue = vue.ref(props.modelValue);
    const offset = vue.computed(() => {
      return props.vertical ? "offsetHeight" : "offsetWidth";
    });
    const position = vue.computed(() => {
      return props.vertical ? ["top", "bottom"] : ["left", "right"];
    });
    const outer = vue.computed(() => {
      var _a, _b;
      return (_b = (_a = wrapper.value) == null ? void 0 : _a[offset.value]) != null ? _b : 0;
    });
    const min = vue.computed(
      () => props.min <= 1 ? props.min : props.min / outer.value
    );
    const max = vue.computed(
      () => props.max <= 1 ? props.max : props.max / outer.value
    );
    function handleChange(value) {
      if (value.toFixed(5) !== currentValue.value.toFixed(5)) {
        currentValue.value = value;
        emit(event.CHANGE_EVENT, value);
        emit(event.UPDATE_MODEL_EVENT, value);
      }
    }
    const { target: handler, moving } = hooks.useMoving({
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
    const leftPaneStyle = vue.computed(() => {
      return {
        [position.value[1]]: `${(1 - currentValue.value) * 100}%`
      };
    });
    const rightPaneStyle = vue.computed(() => {
      return {
        [position.value[0]]: `${currentValue.value * 100}%`
      };
    });
    const triggerStyle = vue.computed(() => {
      return {
        [position.value[0]]: `calc(${currentValue.value * 100}% - var(${ns.cssVarName("split-handler-size")}) * 0.5)`
      };
    });
    return (_ctx, _cache) => {
      var _a;
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          ref_key: "wrapper",
          ref: wrapper,
          class: vue.normalizeClass([
            vue.unref(ns).b(),
            vue.unref(ns).m(vue.unref(moving) ? "moving" : ""),
            vue.unref(ns).m(_ctx.vertical ? "vertical" : "horizontal"),
            _ctx.$attrs.class
          ]),
          style: vue.normalizeStyle({ ...(_a = _ctx.$attrs.style) != null ? _a : {} })
        },
        [
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass([vue.unref(ns).e("panel"), vue.unref(nsPanel).m(_ctx.vertical ? "top" : "left")]),
              style: vue.normalizeStyle(leftPaneStyle.value)
            },
            [
              vue.renderSlot(_ctx.$slots, "left")
            ],
            6
          ),
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass([vue.unref(ns).e("panel"), vue.unref(nsPanel).m(_ctx.vertical ? "bottom" : "right")]),
              style: vue.normalizeStyle(rightPaneStyle.value)
            },
            [
              vue.renderSlot(_ctx.$slots, "right")
            ],
            6
          ),
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(vue.unref(ns).e("trigger")),
              style: vue.normalizeStyle(triggerStyle.value)
            },
            [
              vue.createElementVNode(
                "div",
                {
                  ref_key: "handler",
                  ref: handler,
                  class: vue.normalizeClass(vue.unref(ns).e("handler"))
                },
                [
                  vue.renderSlot(_ctx.$slots, "handler", {}, () => [
                    vue.createElementVNode(
                      "span",
                      {
                        class: vue.normalizeClass(vue.unref(ns).e("pointer"))
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
var Split = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "split.vue"]]);

exports["default"] = Split;
//# sourceMappingURL=split.js.map
