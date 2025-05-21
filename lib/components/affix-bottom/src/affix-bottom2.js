'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var affixBottom = require('./affix-bottom.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "ElAffixBottom"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: affixBottom.affixBottomProps,
  setup(__props) {
    const ns = elementPlus.useNamespace("affix-bottom");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), vue.mergeProps({
        style: { position: _ctx.position },
        class: vue.unref(ns).b()
      }, _ctx.$attrs), {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["style", "class"]);
    };
  }
});
var AffixBottom = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "affix-bottom.vue"]]);

exports["default"] = AffixBottom;
//# sourceMappingURL=affix-bottom2.js.map
