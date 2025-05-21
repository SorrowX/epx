'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var textHighlight = require('./text-highlight.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "ElTextHighlight"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: textHighlight.textHighlightProps,
  setup(__props) {
    const ns = elementPlus.useNamespace("text-highlight");
    const props = __props;
    const highlightCharacter = () => {
      const { content: content2, text, color, ignoreCase } = props;
      const regex = new RegExp(text, ignoreCase ? "gi" : "g");
      return content2.replace(
        regex,
        (t) => `<span style="color: ${color}">${t}</span>`
      );
    };
    const content = vue.computed(
      () => props.text ? highlightCharacter() : props.content
    );
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(vue.unref(ns).b()),
        innerHTML: content.value
      }, null, 10, ["innerHTML"]);
    };
  }
});
var TextHighlight = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "text-highlight.vue"]]);

exports["default"] = TextHighlight;
//# sourceMappingURL=text-highlight2.js.map
