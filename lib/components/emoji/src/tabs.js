'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('element-plus/es/utils/index');
var event = require('../../../constants/event.js');

const __default__ = vue.defineComponent({
  name: "ElEmojiTabs"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: {
    options: {
      type: index.definePropType(Array),
      default: () => []
    }
  },
  emits: {
    [event.CHANGE_EVENT]: (value) => !!value
  },
  setup(__props, { emit: __emit }) {
    const curIndex = vue.ref(0);
    const emit = __emit;
    const ns = elementPlus.useNamespace("emoji-tabs");
    const handleClick = (item, index) => {
      curIndex.value = index;
      emit(event.CHANGE_EVENT, item.value);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(vue.unref(ns).b())
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.options, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: index,
                class: vue.normalizeClass([vue.unref(ns).e("item"), index === curIndex.value ? "active" : ""]),
                onClick: ($event) => handleClick(item, index)
              }, [
                vue.createElementVNode(
                  "span",
                  null,
                  vue.toDisplayString(item.label),
                  1
                ),
                index < __props.options.length - 1 ? (vue.openBlock(), vue.createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(ns).m("line"))
                  },
                  null,
                  2
                )) : vue.createCommentVNode("v-if", true)
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
var Tabs = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "tabs.vue"]]);

exports["default"] = Tabs;
//# sourceMappingURL=tabs.js.map
