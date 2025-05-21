import { defineComponent, ref, computed, openBlock, createElementBlock, Fragment, createElementVNode, normalizeClass, unref, renderSlot, createVNode, mergeProps, withCtx, createBlock, resolveDynamicComponent, createCommentVNode, Transition, nextTick } from 'vue';
import { useNamespace, useLocale, ElPopover, ElScrollbar } from 'element-plus';
import Emoticon from './emoticon.mjs';
import FontEmoticon from './font-emoticon.mjs';
import Tabs from './tabs.mjs';
import { emojiProps, emojiEmits } from './emoji.mjs';
import { WX_TYPE, COMMOM_TYPE } from './helper.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event.mjs';

const __default__ = defineComponent({
  name: "ElEmoji"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: emojiProps,
  emits: emojiEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const TransitionAlias = Transition;
    const props = __props;
    const emit = __emit;
    const ns = useNamespace("emoji");
    const { t } = useLocale();
    const scrollbarRef = ref();
    const popoverRef = ref();
    const triggerRef = ref();
    const visible = ref(false);
    const curTab = ref(WX_TYPE);
    const options = ref([
      {
        label: t("epx.emoji.weixinEmoji"),
        value: WX_TYPE
      },
      {
        label: t("epx.emoji.commonEmoji"),
        value: COMMOM_TYPE
      }
    ]);
    const activeComponent = computed(
      () => curTab.value === WX_TYPE ? Emoticon : FontEmoticon
    );
    const hidden = () => {
      var _a, _b;
      (_b = (_a = unref(popoverRef)) == null ? void 0 : _a.hide) == null ? void 0 : _b.call(_a);
    };
    const handleChange = (item) => {
      var _a;
      hidden();
      const value = (_a = item[props.type]) != null ? _a : item["text"];
      emit(UPDATE_MODEL_EVENT, value);
      emit(CHANGE_EVENT, item, curTab.value);
    };
    const handleEnter = () => {
      visible.value = true;
    };
    const handleLeave = () => {
      if (props.keepAlive)
        return;
      visible.value = false;
      curTab.value = WX_TYPE;
    };
    const updateScrollbar = () => {
      nextTick(() => {
        var _a, _b;
        (_b = (_a = scrollbarRef.value) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a);
      });
    };
    const handleChangeTab = (value) => {
      curTab.value = value;
      emit("click-tab", value);
    };
    __expose({
      scrollbarRef,
      updateScrollbar
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createElementVNode(
            "span",
            {
              ref_key: "triggerRef",
              ref: triggerRef,
              class: normalizeClass(unref(ns).b())
            },
            [
              renderSlot(_ctx.$slots, "trigger")
            ],
            2
          ),
          createVNode(unref(ElPopover), mergeProps({
            ref_key: "popoverRef",
            ref: popoverRef,
            trigger: "click",
            placement: "top",
            persistent: "",
            "virtual-triggering": "",
            "virtual-ref": triggerRef.value,
            width: 347,
            "show-arrow": false
          }, _ctx.$attrs, {
            "popper-class": unref(ns).b("popper-class"),
            onBeforeEnter: handleEnter,
            onAfterLeave: handleLeave
          }), {
            default: withCtx(() => [
              visible.value ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass(unref(ns).b("panpel"))
                },
                [
                  createVNode(Tabs, {
                    options: options.value,
                    onChange: handleChangeTab
                  }, null, 8, ["options"]),
                  createVNode(
                    unref(ElScrollbar),
                    {
                      ref_key: "scrollbarRef",
                      ref: scrollbarRef,
                      height: "300px"
                    },
                    {
                      default: withCtx(() => [
                        createVNode(unref(TransitionAlias), {
                          mode: "out-in",
                          name: `${unref(ns).namespace.value}-fade-in-linear`
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(
                              resolveDynamicComponent(activeComponent.value),
                              { onChange: handleChange },
                              null,
                              32
                            ))
                          ]),
                          _: 1
                        }, 8, ["name"])
                      ]),
                      _: 1
                    },
                    512
                  )
                ],
                2
              )) : createCommentVNode("v-if", true)
            ]),
            _: 1
          }, 16, ["virtual-ref", "popper-class"])
        ],
        64
      );
    };
  }
});
var Emoji = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "index.vue"]]);

export { Emoji as default };
//# sourceMappingURL=index.mjs.map
