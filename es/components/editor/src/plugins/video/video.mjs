import { defineComponent, computed, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeProps, guardReactiveProps } from 'vue';
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3';
import _export_sfc from '../../../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  __name: "video",
  props: nodeViewProps,
  setup(__props) {
    const props = __props;
    const attrs = computed(() => {
      return {
        ...props.node.attrs
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NodeViewWrapper), { class: "tiptap-extension-video" }, {
        default: withCtx(() => [
          createElementVNode(
            "video",
            normalizeProps(guardReactiveProps(attrs.value)),
            null,
            16
          )
        ]),
        _: 1
      });
    };
  }
});
var Component = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "video.vue"]]);

export { Component as default };
//# sourceMappingURL=video.mjs.map
