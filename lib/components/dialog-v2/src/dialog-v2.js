'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var dialogV2 = require('./dialog-v22.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "ElDialogV2",
  inheritAttrs: false
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: dialogV2.dialogV2Props,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const ns = elementPlus.useNamespace("dialog-v2");
    const { t } = elementPlus.useLocale();
    const visible = vue.ref(false);
    const loading = vue.ref(false);
    const hiddenCancel = vue.computed(() => {
      var _a, _b;
      return (_b = (_a = props.cancelProps) == null ? void 0 : _a.hidden) != null ? _b : false;
    });
    const hiddenSure = vue.computed(() => {
      var _a, _b;
      return (_b = (_a = props.sureProps) == null ? void 0 : _a.hidden) != null ? _b : false;
    });
    const close = () => visible.value = false;
    const open = () => visible.value = true;
    const handleCancel = () => {
      props.onCancel ? props.onCancel({ close }) : close();
    };
    const handleSure = async () => {
      if (!props.onSure) {
        return close();
      }
      try {
        loading.value = true;
        await props.onSure({ close });
      } catch (e) {
      } finally {
        loading.value = false;
      }
    };
    __expose({
      close,
      open
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.createElementVNode(
            "div",
            {
              class: vue.normalizeClass(vue.unref(ns).b("trigger")),
              onClick: open
            },
            [
              vue.renderSlot(_ctx.$slots, "trigger", {}, () => [
                vue.createVNode(
                  vue.unref(elementPlus.ElButton),
                  vue.normalizeProps(vue.guardReactiveProps(_ctx.triggerProps)),
                  {
                    default: vue.withCtx(() => {
                      var _a;
                      return [
                        vue.createTextVNode(
                          vue.toDisplayString((_a = _ctx.triggerProps) == null ? void 0 : _a.triggerText),
                          1
                        )
                      ];
                    }),
                    _: 1
                  },
                  16
                )
              ])
            ],
            2
          ),
          vue.createVNode(vue.unref(elementPlus.ElDialog), vue.mergeProps({
            modelValue: visible.value,
            "onUpdate:modelValue": ($event) => visible.value = $event,
            "append-to-body": "",
            "show-close": false,
            "modal-class": vue.unref(ns).b()
          }, _ctx.$attrs), {
            header: vue.withCtx((scoped) => [
              vue.renderSlot(_ctx.$slots, "header", vue.normalizeProps(vue.guardReactiveProps(scoped)), () => [
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(vue.unref(ns).b("header"))
                  },
                  [
                    vue.createElementVNode(
                      "span",
                      { class: "title" },
                      vue.toDisplayString(_ctx.title),
                      1
                    ),
                    vue.createVNode(vue.unref(elementPlus.ElIcon), {
                      size: "16",
                      onClick: scoped.close
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(iconsVue.Close))
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ],
                  2
                )
              ])
            ]),
            default: vue.withCtx(() => [
              vue.createElementVNode(
                "div",
                {
                  class: vue.normalizeClass(vue.unref(ns).b("content"))
                },
                [
                  vue.renderSlot(_ctx.$slots, "default")
                ],
                2
              )
            ]),
            footer: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "footer", {}, () => [
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(vue.unref(ns).b("footer"))
                  },
                  [
                    !hiddenCancel.value ? (vue.openBlock(), vue.createBlock(
                      vue.unref(elementPlus.ElButton),
                      vue.mergeProps({ key: 0 }, _ctx.cancelProps, { onClick: handleCancel }),
                      {
                        default: vue.withCtx(() => {
                          var _a, _b;
                          return [
                            vue.createTextVNode(
                              vue.toDisplayString((_b = (_a = _ctx.cancelProps) == null ? void 0 : _a.cancelText) != null ? _b : vue.unref(t)("epx.common.cancel")),
                              1
                            )
                          ];
                        }),
                        _: 1
                      },
                      16
                    )) : vue.createCommentVNode("v-if", true),
                    !hiddenSure.value ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps({ key: 1 }, _ctx.sureProps, {
                      type: "primary",
                      loading: loading.value,
                      onClick: handleSure
                    }), {
                      default: vue.withCtx(() => {
                        var _a, _b;
                        return [
                          vue.createTextVNode(
                            vue.toDisplayString((_b = (_a = _ctx.sureProps) == null ? void 0 : _a.sureText) != null ? _b : vue.unref(t)("epx.common.sure")),
                            1
                          )
                        ];
                      }),
                      _: 1
                    }, 16, ["loading"])) : vue.createCommentVNode("v-if", true)
                  ],
                  2
                )
              ])
            ]),
            _: 3
          }, 16, ["modelValue", "onUpdate:modelValue", "modal-class"])
        ],
        64
      );
    };
  }
});
var DialogV2 = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "dialog-v2.vue"]]);

exports["default"] = DialogV2;
//# sourceMappingURL=dialog-v2.js.map
