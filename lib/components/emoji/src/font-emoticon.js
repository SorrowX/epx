'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var emoji = require('./emoji.js');
var helper = require('./helper.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var event = require('../../../constants/event.js');

const __default__ = vue.defineComponent({
  name: "ElFontEmoticon"
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
    const ns = elementPlus.useNamespace("font-emoticon");
    const { peopleList } = helper.useFontEmoticon();
    const handleClick = (item) => {
      var _a;
      model.value = (_a = item["text"]) != null ? _a : "";
      emit(event.CHANGE_EVENT, item, helper.COMMOM_TYPE);
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
            vue.renderList(vue.unref(peopleList), (item, index) => {
              return vue.openBlock(), vue.createElementBlock("span", {
                key: index,
                class: vue.normalizeClass(vue.unref(ns).e("native")),
                onClick: ($event) => handleClick(item)
              }, vue.toDisplayString(item.text), 11, ["onClick"]);
            }),
            128
          ))
        ],
        2
      );
    };
  }
});
var FontEmoticon = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "font-emoticon.vue"]]);

exports["default"] = FontEmoticon;
//# sourceMappingURL=font-emoticon.js.map
