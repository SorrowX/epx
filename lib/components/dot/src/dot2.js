'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var dot = require('./dot.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('element-plus/es/utils/index');

const __default__ = vue.defineComponent({
  name: "ElDot"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: dot.dotProps,
  setup(__props) {
    const props = __props;
    const ns = elementPlus.useNamespace("dot");
    const isPresetsSize = vue.computed(
      () => {
        var _a;
        return ["large", "default", "small"].includes((_a = props.size) != null ? _a : "");
      }
    );
    const spotStyle = vue.computed(() => {
      const size = index.isUndefined(props.size) || isPresetsSize.value ? "" : index.addUnit(props.size);
      return {
        width: size,
        height: size,
        backgroundColor: props.color
      };
    });
    const sizeKls = vue.computed(() => isPresetsSize.value ? ns.m(props.size) : "");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass([vue.unref(ns).b(), vue.unref(ns).m(_ctx.type), sizeKls.value])
        },
        [
          vue.createElementVNode(
            "span",
            {
              class: vue.normalizeClass(vue.unref(ns).e("spot")),
              style: vue.normalizeStyle(spotStyle.value)
            },
            null,
            6
          ),
          vue.renderSlot(_ctx.$slots, "default")
        ],
        2
      );
    };
  }
});
var Dot = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "dot.vue"]]);

exports["default"] = Dot;
//# sourceMappingURL=dot2.js.map
