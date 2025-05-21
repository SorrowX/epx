import { defineComponent, openBlock, createBlock, resolveDynamicComponent, mergeProps, unref, withCtx, renderSlot } from 'vue';
import { useNamespace } from 'element-plus';
import { affixBottomProps } from './affix-bottom.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "ElAffixBottom"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: affixBottomProps,
  setup(__props) {
    const ns = useNamespace("affix-bottom");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), mergeProps({
        style: { position: _ctx.position },
        class: unref(ns).b()
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["style", "class"]);
    };
  }
});
var AffixBottom = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "affix-bottom.vue"]]);

export { AffixBottom as default };
//# sourceMappingURL=affix-bottom2.mjs.map
