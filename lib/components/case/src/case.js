'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var _case = require('./case2.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "ElCase"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: _case.caseProps,
  emits: _case.caseEmits,
  setup(__props) {
    const { t } = elementPlus.useLocale();
    const ns = elementPlus.useNamespace("case");
    console.log(123, t("el.case.title"));
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(vue.unref(ns).b())
        },
        [
          vue.createElementVNode(
            "p",
            null,
            vue.toDisplayString(vue.unref(t)("epx.case.title")),
            1
          ),
          vue.renderSlot(_ctx.$slots, "default")
        ],
        2
      );
    };
  }
});
var Case = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "case.vue"]]);

exports["default"] = Case;
//# sourceMappingURL=case.js.map
