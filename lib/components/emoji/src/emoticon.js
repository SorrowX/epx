'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var emoji = require('./emoji.js');
var helper = require('./helper.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var event = require('../../../constants/event.js');

const __default__ = vue.defineComponent({
  name: "ElEmoticon"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: emoji.emoticonProps,
  emits: emoji.emoticonEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const model = vue.computed({
      get: () => props.modelValue,
      set: (val) => {
        emit(event.UPDATE_MODEL_EVENT, val);
      }
    });
    const ns = elementPlus.useNamespace("emoji-face");
    const list = vue.computed(() => [...helper.emoticonList]);
    const handleClick = (item) => {
      var _a;
      model.value = (_a = item[props.type]) != null ? _a : "";
      emit(event.CHANGE_EVENT, item, helper.WX_TYPE);
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
            vue.renderList(list.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("a", {
                key: index,
                title: item.describe,
                class: vue.normalizeClass([item.className]),
                onClick: ($event) => handleClick(item)
              }, vue.toDisplayString(item.describe), 11, ["title", "onClick"]);
            }),
            128
          ))
        ],
        2
      );
    };
  }
});
var Emoticon = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "emoticon.vue"]]);

exports["default"] = Emoticon;
//# sourceMappingURL=emoticon.js.map
