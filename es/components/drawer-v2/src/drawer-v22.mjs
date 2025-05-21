import { defineComponent, ref, computed, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, unref, renderSlot, createVNode, normalizeProps, guardReactiveProps, withCtx, createTextVNode, toDisplayString, mergeProps, createBlock, createCommentVNode } from 'vue';
import { useNamespace, useLocale, ElButton, ElDrawer, ElIcon } from 'element-plus';
import { Close } from '@element-plus/icons-vue';
import { drawerV2Props } from './drawer-v2.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "ElDrawerV2",
  inheritAttrs: false
});
const _sfc_main = defineComponent({
  ...__default__,
  props: drawerV2Props,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const ns = useNamespace("drawer-v2");
    const { t } = useLocale();
    const visible = ref(false);
    const loading = ref(false);
    const hiddenCancel = computed(() => {
      var _a, _b;
      return (_b = (_a = props.cancelProps) == null ? void 0 : _a.hidden) != null ? _b : false;
    });
    const hiddenSure = computed(() => {
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
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass(unref(ns).b("trigger")),
              onClick: open
            },
            [
              renderSlot(_ctx.$slots, "trigger", {}, () => [
                createVNode(
                  unref(ElButton),
                  normalizeProps(guardReactiveProps(_ctx.triggerProps)),
                  {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(
                          toDisplayString((_a = _ctx.triggerProps) == null ? void 0 : _a.triggerText),
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
          createVNode(unref(ElDrawer), mergeProps({
            modelValue: visible.value,
            "onUpdate:modelValue": ($event) => visible.value = $event,
            "append-to-body": "",
            "show-close": false,
            "modal-class": unref(ns).b()
          }, _ctx.$attrs), {
            header: withCtx((scoped) => [
              renderSlot(_ctx.$slots, "header", normalizeProps(guardReactiveProps(scoped)), () => [
                createElementVNode(
                  "div",
                  {
                    class: normalizeClass(unref(ns).b("header"))
                  },
                  [
                    createElementVNode(
                      "span",
                      { class: "title" },
                      toDisplayString(_ctx.title),
                      1
                    ),
                    createVNode(unref(ElIcon), {
                      size: "16",
                      onClick: scoped.close
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Close))
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ],
                  2
                )
              ])
            ]),
            default: withCtx(() => [
              createElementVNode(
                "div",
                {
                  class: normalizeClass(unref(ns).b("content"))
                },
                [
                  renderSlot(_ctx.$slots, "default")
                ],
                2
              )
            ]),
            footer: withCtx(() => [
              renderSlot(_ctx.$slots, "footer", {}, () => [
                createElementVNode(
                  "div",
                  {
                    class: normalizeClass(unref(ns).b("footer"))
                  },
                  [
                    !hiddenCancel.value ? (openBlock(), createBlock(
                      unref(ElButton),
                      mergeProps({ key: 0 }, _ctx.cancelProps, { onClick: handleCancel }),
                      {
                        default: withCtx(() => {
                          var _a, _b;
                          return [
                            createTextVNode(
                              toDisplayString((_b = (_a = _ctx.cancelProps) == null ? void 0 : _a.cancelText) != null ? _b : unref(t)("epx.common.cancel")),
                              1
                            )
                          ];
                        }),
                        _: 1
                      },
                      16
                    )) : createCommentVNode("v-if", true),
                    !hiddenSure.value ? (openBlock(), createBlock(unref(ElButton), mergeProps({ key: 1 }, _ctx.sureProps, {
                      type: "primary",
                      loading: loading.value,
                      onClick: handleSure
                    }), {
                      default: withCtx(() => {
                        var _a, _b;
                        return [
                          createTextVNode(
                            toDisplayString((_b = (_a = _ctx.sureProps) == null ? void 0 : _a.sureText) != null ? _b : unref(t)("epx.common.sure")),
                            1
                          )
                        ];
                      }),
                      _: 1
                    }, 16, ["loading"])) : createCommentVNode("v-if", true)
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
var DrawerV2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "drawer-v2.vue"]]);

export { DrawerV2 as default };
//# sourceMappingURL=drawer-v22.mjs.map
