'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index = require('../../dropdown-v2/index.js');
var contextmenu = require('./contextmenu.js');
var hooks = require('./hooks.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');

const __default__ = vue.defineComponent({
  name: "ElContextmenu"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: contextmenu.contextmenuProps,
  emits: contextmenu.contextmenuEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const { visible, triggerRef, handleContextMenu } = hooks.useContextMenu();
    const ns = elementPlus.useNamespace("contextmenu");
    const hide = () => visible.value = false;
    const handleChange = (value, valuePath) => {
      emit("change", value, valuePath);
      hide();
    };
    __expose({
      hide,
      handleContextMenu
    });
    return (_ctx, _cache) => {
      const _component_el_tooltip = vue.resolveComponent("el-tooltip");
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(vue.unref(ns).b())
        },
        [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(vue.unref(ns).e("trigger")),
            onContextmenu: vue.unref(handleContextMenu)
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 42, ["onContextmenu"]),
          vue.createVNode(_component_el_tooltip, vue.mergeProps({
            visible: vue.unref(visible),
            "onUpdate:visible": ($event) => vue.isRef(visible) ? visible.value = $event : null,
            effect: "light",
            trigger: "click",
            placement: "bottom-start",
            "popper-class": "contextmenu__popper-kls",
            offset: 0,
            "hide-after": 0,
            "virtual-triggering": "",
            "show-arrow": false,
            "gpu-acceleration": false,
            "virtual-ref": vue.unref(triggerRef),
            transition: `${vue.unref(ns).namespace.value}-zoom-in-top`
          }, _ctx.$attrs), {
            content: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "menu", vue.normalizeProps(vue.guardReactiveProps({ data: _ctx.data })), () => [
                vue.unref(visible) ? (vue.openBlock(), vue.createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(ns).e("menu"))
                  },
                  [
                    vue.createVNode(vue.unref(index.ElDropdownV2Panel), {
                      options: _ctx.options,
                      onSelect: handleChange
                    }, null, 8, ["options"])
                  ],
                  2
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            _: 3
          }, 16, ["visible", "onUpdate:visible", "virtual-ref", "transition"])
        ],
        2
      );
    };
  }
});
var Contextmenu = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "contextmenu.vue"]]);

exports["default"] = Contextmenu;
//# sourceMappingURL=contextmenu2.js.map
