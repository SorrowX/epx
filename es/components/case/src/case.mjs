import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, toDisplayString, renderSlot } from 'vue';
import { useLocale, useNamespace } from 'element-plus';
import { caseProps, caseEmits } from './case2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "ElCase"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: caseProps,
  emits: caseEmits,
  setup(__props) {
    const { t } = useLocale();
    const ns = useNamespace("case");
    console.log(123, t("el.case.title"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns).b())
        },
        [
          createElementVNode(
            "p",
            null,
            toDisplayString(unref(t)("epx.case.title")),
            1
          ),
          renderSlot(_ctx.$slots, "default")
        ],
        2
      );
    };
  }
});
var Case = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "case.vue"]]);

export { Case as default };
//# sourceMappingURL=case.mjs.map
