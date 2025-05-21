'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "EditorIcon",
  inheritAttrs: false
});
const _sfc_main = vue.defineComponent({
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
    const ns = elementPlus.useNamespace("editor-icon");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass([vue.unref(ns).b(), __props.active ? "active" : ""])
        },
        [
          vue.createVNode(vue.unref(elementPlus.ElIcon), vue.mergeProps({ size: __props.size }, _ctx.$attrs), {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.icon)))
            ]),
            _: 1
          }, 16, ["size"])
        ],
        2
      );
    };
  }
});
var Icon = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "icon.vue"]]);

exports["default"] = Icon;
//# sourceMappingURL=icon.js.map
