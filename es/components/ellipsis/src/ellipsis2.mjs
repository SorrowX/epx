import { defineComponent, ref, useAttrs, computed, resolveComponent, openBlock, createBlock, mergeProps, unref, withCtx, renderSlot, createElementVNode, normalizeClass, normalizeStyle, createElementBlock, createCommentVNode } from 'vue';
import { useNamespace } from 'element-plus';
import { ellipsisProps, ellipsisEmits } from './ellipsis.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useOverflow } from '../../../hooks/use-overflow/index.mjs';

const __default__ = defineComponent({
  name: "ElEllipsis"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: ellipsisProps,
  emits: ellipsisEmits,
  setup(__props) {
    var _a;
    const props = __props;
    const ns = useNamespace("ellipsis");
    const rootRef = ref();
    const contentRef = ref();
    const { overflow } = useOverflow(rootRef, {
      selectors: `.${ns.b("content")}`,
      condition: (_a = props.condition) != null ? _a : (contentWidth, containerWidth) => {
        return Number(props.rows) ? contentWidth >= containerWidth : contentWidth > containerWidth;
      }
    });
    const attrs = useAttrs();
    const rootStyle = computed(() => {
      var _a2;
      return (_a2 = attrs.style) != null ? _a2 : {};
    });
    const tooltipAttrs = computed(() => {
      const pureAttrs = {
        ...attrs
      };
      delete pureAttrs.class;
      delete pureAttrs.style;
      return pureAttrs;
    });
    const getellipsisStyle = (rows) => {
      return {
        overflow: "hidden",
        display: "-webkit-box",
        "white-space": "normal",
        "text-overflow": "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": rows
      };
    };
    const contentStyle = computed(() => {
      return Number(props.rows) ? getellipsisStyle(Number(props.rows)) : {};
    });
    return (_ctx, _cache) => {
      const _component_el_tooltip = resolveComponent("el-tooltip");
      return openBlock(), createBlock(_component_el_tooltip, mergeProps({
        disabled: !unref(overflow),
        placement: "top",
        effect: "light"
      }, tooltipAttrs.value), {
        content: withCtx(() => [
          renderSlot(_ctx.$slots, "content", {}, () => [
            renderSlot(_ctx.$slots, "default")
          ])
        ]),
        default: withCtx(() => {
          var _a2;
          return [
            createElementVNode(
              "div",
              {
                ref_key: "rootRef",
                ref: rootRef,
                class: normalizeClass([unref(ns).b(), (_a2 = _ctx.$attrs) == null ? void 0 : _a2.class]),
                style: normalizeStyle(rootStyle.value)
              },
              [
                createElementVNode(
                  "div",
                  {
                    class: normalizeClass([unref(ns).b("container")])
                  },
                  [
                    createElementVNode(
                      "div",
                      {
                        ref_key: "contentRef",
                        ref: contentRef,
                        class: normalizeClass([unref(ns).b("content")]),
                        style: normalizeStyle(contentStyle.value)
                      },
                      [
                        renderSlot(_ctx.$slots, "default")
                      ],
                      6
                    )
                  ],
                  2
                ),
                unref(overflow) ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass(unref(ns).b("action"))
                  },
                  [
                    renderSlot(_ctx.$slots, "action")
                  ],
                  2
                )) : createCommentVNode("v-if", true)
              ],
              6
            )
          ];
        }),
        _: 3
      }, 16, ["disabled"]);
    };
  }
});
var Ellipsis = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ellipsis.vue"]]);

export { Ellipsis as default };
//# sourceMappingURL=ellipsis2.mjs.map
