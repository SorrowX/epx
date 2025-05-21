import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createVNode, mergeProps, withCtx, createBlock, resolveDynamicComponent } from 'vue';
import { useNamespace, ElIcon } from 'element-plus';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "EditorIcon",
  inheritAttrs: false
});
const _sfc_main = defineComponent({
  ...__default__,
  props: {
    icon: {
      type: null
    },
    active: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 18
    }
  },
  setup(__props) {
    const ns = useNamespace("editor-icon");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns).b(), __props.active ? "active" : ""])
        },
        [
          createVNode(unref(ElIcon), mergeProps({ size: __props.size }, _ctx.$attrs), {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(__props.icon)))
            ]),
            _: 1
          }, 16, ["size"])
        ],
        2
      );
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "icon.vue"]]);

export { Icon as default };
//# sourceMappingURL=icon.mjs.map
