import { defineComponent, openBlock, createBlock, unref, withCtx, createVNode, mergeProps, createTextVNode, toDisplayString } from 'vue';
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3';
import { ElTag } from 'element-plus';
import _export_sfc from '../../../../../_virtual/plugin-vue_export-helper.mjs';

const _sfc_main = defineComponent({
  __name: "tag",
  props: nodeViewProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NodeViewWrapper), { class: "tiptap-extension-tag" }, {
        default: withCtx(() => [
          createVNode(unref(ElTag), mergeProps({
            id: _ctx.node.attrs.id,
            type: "primary",
            size: "small",
            class: _ctx.node.attrs.class
          }, _ctx.node.attrs.props), {
            default: withCtx(() => [
              createTextVNode(
                toDisplayString(_ctx.node.attrs.props.text),
                1
              )
            ]),
            _: 1
          }, 16, ["id", "class"])
        ]),
        _: 1
      });
    };
  }
});
var Component = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "tag.vue"]]);

export { Component as default };
//# sourceMappingURL=tag.mjs.map
