'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var emoticon = require('./emoticon.js');
var fontEmoticon = require('./font-emoticon.js');
var tabs = require('./tabs.js');
var emoji = require('./emoji.js');
var helper = require('./helper.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var event = require('../../../constants/event.js');

const __default__ = vue.defineComponent({
  name: "ElEmoji"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: emoji.emojiProps,
  emits: emoji.emojiEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const TransitionAlias = vue.Transition;
    const props = __props;
    const emit = __emit;
    const ns = elementPlus.useNamespace("emoji");
    const { t } = elementPlus.useLocale();
    const scrollbarRef = vue.ref();
    const popoverRef = vue.ref();
    const triggerRef = vue.ref();
    const visible = vue.ref(false);
    const curTab = vue.ref(helper.WX_TYPE);
    const options = vue.ref([
      {
        label: t("epx.emoji.weixinEmoji"),
        value: helper.WX_TYPE
      },
      {
        label: t("epx.emoji.commonEmoji"),
        value: helper.COMMOM_TYPE
      }
    ]);
    const activeComponent = vue.computed(
      () => curTab.value === helper.WX_TYPE ? emoticon["default"] : fontEmoticon["default"]
    );
    const hidden = () => {
      var _a, _b;
      (_b = (_a = vue.unref(popoverRef)) == null ? void 0 : _a.hide) == null ? void 0 : _b.call(_a);
    };
    const handleChange = (item) => {
      var _a;
      hidden();
      const value = (_a = item[props.type]) != null ? _a : item["text"];
      emit(event.UPDATE_MODEL_EVENT, value);
      emit(event.CHANGE_EVENT, item, curTab.value);
    };
    const handleEnter = () => {
      visible.value = true;
    };
    const handleLeave = () => {
      if (props.keepAlive)
        return;
      visible.value = false;
      curTab.value = helper.WX_TYPE;
    };
    const updateScrollbar = () => {
      vue.nextTick(() => {
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
      return vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        null,
        [
          vue.createElementVNode(
            "span",
            {
              ref_key: "triggerRef",
              ref: triggerRef,
              class: vue.normalizeClass(vue.unref(ns).b())
            },
            [
              vue.renderSlot(_ctx.$slots, "trigger")
            ],
            2
          ),
          vue.createVNode(vue.unref(elementPlus.ElPopover), vue.mergeProps({
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
            "popper-class": vue.unref(ns).b("popper-class"),
            onBeforeEnter: handleEnter,
            onAfterLeave: handleLeave
          }), {
            default: vue.withCtx(() => [
              visible.value ? (vue.openBlock(), vue.createElementBlock(
                "div",
                {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(ns).b("panpel"))
                },
                [
                  vue.createVNode(tabs["default"], {
                    options: options.value,
                    onChange: handleChangeTab
                  }, null, 8, ["options"]),
                  vue.createVNode(
                    vue.unref(elementPlus.ElScrollbar),
                    {
                      ref_key: "scrollbarRef",
                      ref: scrollbarRef,
                      height: "300px"
                    },
                    {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(TransitionAlias), {
                          mode: "out-in",
                          name: `${vue.unref(ns).namespace.value}-fade-in-linear`
                        }, {
                          default: vue.withCtx(() => [
                            (vue.openBlock(), vue.createBlock(
                              vue.resolveDynamicComponent(activeComponent.value),
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
              )) : vue.createCommentVNode("v-if", true)
            ]),
            _: 1
          }, 16, ["virtual-ref", "popper-class"])
        ],
        64
      );
    };
  }
});
var Emoji = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "index.vue"]]);

exports["default"] = Emoji;
//# sourceMappingURL=index.js.map
