import { defineComponent, ref, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, createElementVNode, toDisplayString, createCommentVNode } from 'vue';
import { useNamespace } from 'element-plus';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { definePropType } from 'element-plus/es/utils/index';
import { CHANGE_EVENT } from '../../../constants/event.mjs';

const __default__ = defineComponent({
  name: "ElEmojiTabs"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: {
    options: {
      type: definePropType(Array),
      default: () => []
    }
  },
  emits: {
    [CHANGE_EVENT]: (value) => !!value
  },
  setup(__props, { emit: __emit }) {
    const curIndex = ref(0);
    const emit = __emit;
    const ns = useNamespace("emoji-tabs");
    const handleClick = (item, index) => {
      curIndex.value = index;
      emit(CHANGE_EVENT, item.value);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns).b())
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(__props.options, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: normalizeClass([unref(ns).e("item"), index === curIndex.value ? "active" : ""]),
                onClick: ($event) => handleClick(item, index)
              }, [
                createElementVNode(
                  "span",
                  null,
                  toDisplayString(item.label),
                  1
                ),
                index < __props.options.length - 1 ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass(unref(ns).m("line"))
                  },
                  null,
                  2
                )) : createCommentVNode("v-if", true)
              ], 10, ["onClick"]);
            }),
            128
          ))
        ],
        2
      );
    };
  }
});
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "tabs.vue"]]);

export { Tabs as default };
//# sourceMappingURL=tabs.mjs.map
