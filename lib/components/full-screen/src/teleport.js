'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({ name: "Portal" });
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: {
    to: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Teleport, {
        to: __props.to || "body",
        disabled: !__props.to
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 8, ["to", "disabled"]);
    };
  }
});
var Teleport = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "teleport.vue"]]);

exports["default"] = Teleport;
//# sourceMappingURL=teleport.js.map
