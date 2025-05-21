import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, Fragment, renderList, toDisplayString } from 'vue';
import { useNamespace } from 'element-plus';
import { emoticonProps, emoticonEmits } from './emoji.mjs';
import { emoticonList, WX_TYPE } from './helper.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event.mjs';

const __default__ = defineComponent({
  name: "ElEmoticon"
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
    const ns = useNamespace("emoji-face");
    const list = computed(() => [...emoticonList]);
    const handleClick = (item) => {
      var _a;
      model.value = (_a = item[props.type]) != null ? _a : "";
      emit(CHANGE_EVENT, item, WX_TYPE);
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
            renderList(list.value, (item, index) => {
              return openBlock(), createElementBlock("a", {
                key: index,
                title: item.describe,
                class: normalizeClass([item.className]),
                onClick: ($event) => handleClick(item)
              }, toDisplayString(item.describe), 11, ["title", "onClick"]);
            }),
            128
          ))
        ],
        2
      );
    };
  }
});
var Emoticon = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "emoticon.vue"]]);

export { Emoticon as default };
//# sourceMappingURL=emoticon.mjs.map
