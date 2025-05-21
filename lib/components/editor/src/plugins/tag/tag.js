'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vue3 = require('@tiptap/vue-3');
var elementPlus = require('element-plus');
var pluginVue_exportHelper = require('../../../../../_virtual/plugin-vue_export-helper.js');

const _sfc_main = vue.defineComponent({
  __name: "tag",
  props: vue3.nodeViewProps,
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(vue3.NodeViewWrapper), { class: "tiptap-extension-tag" }, {
        default: vue.withCtx(() => [
          vue.createVNode(vue.unref(elementPlus.ElTag), vue.mergeProps({
            id: _ctx.node.attrs.id,
            type: "primary",
            size: "small",
            class: _ctx.node.attrs.class
          }, _ctx.node.attrs.props), {
            default: vue.withCtx(() => [
              vue.createTextVNode(
                vue.toDisplayString(_ctx.node.attrs.props.text),
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
var Component = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "tag.vue"]]);

exports["default"] = Component;
//# sourceMappingURL=tag.js.map
