import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref } from 'vue';
import { useNamespace } from 'element-plus';
import { textHighlightProps } from './text-highlight.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "ElTextHighlight"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: textHighlightProps,
  setup(__props) {
    const ns = useNamespace("text-highlight");
    const props = __props;
    const highlightCharacter = () => {
      const { content: content2, text, color, ignoreCase } = props;
      const regex = new RegExp(text, ignoreCase ? "gi" : "g");
      return content2.replace(
        regex,
        (t) => `<span style="color: ${color}">${t}</span>`
      );
    };
    const content = computed(
      () => props.text ? highlightCharacter() : props.content
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).b()),
        innerHTML: content.value
      }, null, 10, ["innerHTML"]);
    };
  }
});
var TextHighlight = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "text-highlight.vue"]]);

export { TextHighlight as default };
//# sourceMappingURL=text-highlight2.mjs.map
