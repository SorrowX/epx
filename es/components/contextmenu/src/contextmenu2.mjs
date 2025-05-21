import { defineComponent, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, createVNode, mergeProps, isRef, withCtx, normalizeProps, guardReactiveProps, createCommentVNode } from 'vue';
import { useNamespace } from 'element-plus';
import { ElDropdownV2Panel } from '../../dropdown-v2/index.mjs';
import { contextmenuProps, contextmenuEmits } from './contextmenu.mjs';
import { useContextMenu } from './hooks.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';

const __default__ = defineComponent({
  name: "ElContextmenu"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: contextmenuProps,
  emits: contextmenuEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const { visible, triggerRef, handleContextMenu } = useContextMenu();
    const ns = useNamespace("contextmenu");
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
      const _component_el_tooltip = resolveComponent("el-tooltip");
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns).b())
        },
        [
          createElementVNode("div", {
            class: normalizeClass(unref(ns).e("trigger")),
            onContextmenu: unref(handleContextMenu)
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 42, ["onContextmenu"]),
          createVNode(_component_el_tooltip, mergeProps({
            visible: unref(visible),
            "onUpdate:visible": ($event) => isRef(visible) ? visible.value = $event : null,
            effect: "light",
            trigger: "click",
            placement: "bottom-start",
            "popper-class": "contextmenu__popper-kls",
            offset: 0,
            "hide-after": 0,
            "virtual-triggering": "",
            "show-arrow": false,
            "gpu-acceleration": false,
            "virtual-ref": unref(triggerRef),
            transition: `${unref(ns).namespace.value}-zoom-in-top`
          }, _ctx.$attrs), {
            content: withCtx(() => [
              renderSlot(_ctx.$slots, "menu", normalizeProps(guardReactiveProps({ data: _ctx.data })), () => [
                unref(visible) ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass(unref(ns).e("menu"))
                  },
                  [
                    createVNode(unref(ElDropdownV2Panel), {
                      options: _ctx.options,
                      onSelect: handleChange
                    }, null, 8, ["options"])
                  ],
                  2
                )) : createCommentVNode("v-if", true)
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
var Contextmenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "contextmenu.vue"]]);

export { Contextmenu as default };
//# sourceMappingURL=contextmenu2.mjs.map
