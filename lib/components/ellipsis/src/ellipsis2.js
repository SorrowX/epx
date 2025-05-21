'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var ellipsis = require('./ellipsis.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-overflow/index.js');

const __default__ = vue.defineComponent({
  name: "ElEllipsis"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: ellipsis.ellipsisProps,
  emits: ellipsis.ellipsisEmits,
  setup(__props) {
    var _a;
    const props = __props;
    const ns = elementPlus.useNamespace("ellipsis");
    const rootRef = vue.ref();
    const contentRef = vue.ref();
    const { overflow } = index.useOverflow(rootRef, {
      selectors: `.${ns.b("content")}`,
      condition: (_a = props.condition) != null ? _a : (contentWidth, containerWidth) => {
        return Number(props.rows) ? contentWidth >= containerWidth : contentWidth > containerWidth;
      }
    });
    const attrs = vue.useAttrs();
    const rootStyle = vue.computed(() => {
      var _a2;
      return (_a2 = attrs.style) != null ? _a2 : {};
    });
    const tooltipAttrs = vue.computed(() => {
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
    const contentStyle = vue.computed(() => {
      return Number(props.rows) ? getellipsisStyle(Number(props.rows)) : {};
    });
    return (_ctx, _cache) => {
      const _component_el_tooltip = vue.resolveComponent("el-tooltip");
      return vue.openBlock(), vue.createBlock(_component_el_tooltip, vue.mergeProps({
        disabled: !vue.unref(overflow),
        placement: "top",
        effect: "light"
      }, tooltipAttrs.value), {
        content: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "content", {}, () => [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ]),
        default: vue.withCtx(() => {
          var _a2;
          return [
            vue.createElementVNode(
              "div",
              {
                ref_key: "rootRef",
                ref: rootRef,
                class: vue.normalizeClass([vue.unref(ns).b(), (_a2 = _ctx.$attrs) == null ? void 0 : _a2.class]),
                style: vue.normalizeStyle(rootStyle.value)
              },
              [
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass([vue.unref(ns).b("container")])
                  },
                  [
                    vue.createElementVNode(
                      "div",
                      {
                        ref_key: "contentRef",
                        ref: contentRef,
                        class: vue.normalizeClass([vue.unref(ns).b("content")]),
                        style: vue.normalizeStyle(contentStyle.value)
                      },
                      [
                        vue.renderSlot(_ctx.$slots, "default")
                      ],
                      6
                    )
                  ],
                  2
                ),
                vue.unref(overflow) ? (vue.openBlock(), vue.createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(ns).b("action"))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "action")
                  ],
                  2
                )) : vue.createCommentVNode("v-if", true)
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
var Ellipsis = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "ellipsis.vue"]]);

exports["default"] = Ellipsis;
//# sourceMappingURL=ellipsis2.js.map
