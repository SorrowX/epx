import { defineComponent, openBlock, createBlock, Teleport as Teleport$1, renderSlot } from 'vue';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({ name: "Portal" });
const _sfc_main = defineComponent({
  ...__default__,
  props: {
    to: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport$1, {
        to: __props.to || "body",
        disabled: !__props.to
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, ["to", "disabled"]);
    };
  }
});
var Teleport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "teleport.vue"]]);

export { Teleport as default };
//# sourceMappingURL=teleport.mjs.map
