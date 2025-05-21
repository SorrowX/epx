import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot } from 'vue';
import { useNamespace } from 'element-plus';
import { dotProps } from './dot.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { isUndefined, addUnit } from 'element-plus/es/utils/index';

const __default__ = defineComponent({
  name: "ElDot"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: dotProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("dot");
    const isPresetsSize = computed(
      () => {
        var _a;
        return ["large", "default", "small"].includes((_a = props.size) != null ? _a : "");
      }
    );
    const spotStyle = computed(() => {
      const size = isUndefined(props.size) || isPresetsSize.value ? "" : addUnit(props.size);
      return {
        width: size,
        height: size,
        backgroundColor: props.color
      };
    });
    const sizeKls = computed(() => isPresetsSize.value ? ns.m(props.size) : "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.type), sizeKls.value])
        },
        [
          createElementVNode(
            "span",
            {
              class: normalizeClass(unref(ns).e("spot")),
              style: normalizeStyle(spotStyle.value)
            },
            null,
            6
          ),
          renderSlot(_ctx.$slots, "default")
        ],
        2
      );
    };
  }
});
var Dot = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "dot.vue"]]);

export { Dot as default };
//# sourceMappingURL=dot2.mjs.map
