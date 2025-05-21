import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, toDisplayString } from 'vue';
import { useNamespace } from 'element-plus';
import { emoticonProps, emoticonEmits } from './emoji.mjs';
import { useFontEmoticon, COMMOM_TYPE } from './helper.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event.mjs';

const __default__ = defineComponent({
  name: "ElFontEmoticon"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: emoticonProps,
  emits: emoticonEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const model = computed({
      get: () => props.modelValue,
      set: (val) => {
        emit(UPDATE_MODEL_EVENT, val);
      }
    });
    const ns = useNamespace("font-emoticon");
    const { peopleList } = useFontEmoticon();
    const handleClick = (item) => {
      var _a;
      model.value = (_a = item["text"]) != null ? _a : "";
      emit(CHANGE_EVENT, item, COMMOM_TYPE);
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
            renderList(unref(peopleList), (item, index) => {
              return openBlock(), createElementBlock("span", {
                key: index,
                class: normalizeClass(unref(ns).e("native")),
                onClick: ($event) => handleClick(item)
              }, toDisplayString(item.text), 11, ["onClick"]);
            }),
            128
          ))
        ],
        2
      );
    };
  }
});
var FontEmoticon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "font-emoticon.vue"]]);

export { FontEmoticon as default };
//# sourceMappingURL=font-emoticon.mjs.map
