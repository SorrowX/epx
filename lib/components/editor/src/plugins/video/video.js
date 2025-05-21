'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vue3 = require('@tiptap/vue-3');
var pluginVue_exportHelper = require('../../../../../_virtual/plugin-vue_export-helper.js');

const _sfc_main = vue.defineComponent({
  __name: "video",
  props: vue3.nodeViewProps,
  setup(__props) {
    const props = __props;
    const attrs = vue.computed(() => {
      return {
        ...props.node.attrs
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(vue3.NodeViewWrapper), { class: "tiptap-extension-video" }, {
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "video",
            vue.normalizeProps(vue.guardReactiveProps(attrs.value)),
            null,
            16
          )
        ]),
        _: 1
      });
    };
  }
});
var Component = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "video.vue"]]);

exports["default"] = Component;
//# sourceMappingURL=video.js.map
