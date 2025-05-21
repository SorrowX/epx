import { defineComponent, ref, reactive, computed, onMounted, nextTick, onUpdated, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, renderSlot, createCommentVNode, normalizeProps, guardReactiveProps, toDisplayString, createVNode, withCtx, createBlock } from 'vue';
import { useLocale, useNamespace, ElIcon } from 'element-plus';
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue';
import { readMoreProps, readMoreEmits } from './read-more.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event.mjs';

const __default__ = defineComponent({
  name: "ElReadMore"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: readMoreProps,
  emits: readMoreEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t } = useLocale();
    const ns = useNamespace("read-more");
    const props = __props;
    const emit = __emit;
    const wrapper = ref();
    const initial = ref(false);
    const dataset = reactive({
      height: 0
    });
    const openText = computed(() => {
      var _a;
      return (_a = props.openText) != null ? _a : t("epx.collapse.openText");
    });
    const closeText = computed(() => {
      var _a;
      return (_a = props.closeText) != null ? _a : t("epx.collapse.closeText");
    });
    const warpperClass = computed(
      () => !props.modelValue ? "expanded" : "collapse"
    );
    const warpperStyle = computed(() => {
      return hasTrigger.value ? !props.modelValue ? {
        height: `${dataset.height}px`
      } : {
        height: props.height
      } : {
        height: "auto"
      };
    });
    const updateDataset = () => {
      const dom = wrapper.value;
      if (dom) {
        dataset.height = dom.scrollHeight;
      }
    };
    const hasTrigger = computed(() => {
      const height = Number.parseFloat(props.height);
      const wrapperHeight = dataset.height;
      return wrapperHeight > height;
    });
    onMounted(() => {
      updateDataset();
      nextTick(() => {
        initial.value = true;
      });
    });
    onUpdated(() => {
      updateDataset();
    });
    const handleToggle = () => {
      const value = !props.modelValue;
      emit(UPDATE_MODEL_EVENT, value);
      emit(CHANGE_EVENT, value);
    };
    __expose({
      handleToggle,
      hasTrigger,
      updateDataset
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns).b(), _ctx.transition && initial.value ? unref(ns).m("transition") : ""])
        },
        [
          createElementVNode(
            "div",
            {
              ref_key: "wrapper",
              ref: wrapper,
              class: normalizeClass([unref(ns).e("wrapper"), warpperClass.value]),
              style: normalizeStyle(warpperStyle.value)
            },
            [
              renderSlot(_ctx.$slots, "default"),
              _ctx.overlay && _ctx.modelValue && hasTrigger.value ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass(unref(ns).e("overlay"))
                },
                null,
                2
              )) : createCommentVNode("v-if", true)
            ],
            6
          ),
          renderSlot(_ctx.$slots, "trigger", normalizeProps(guardReactiveProps({ hasTrigger: hasTrigger.value })), () => [
            hasTrigger.value ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(unref(ns).e("trigger")),
                onClick: handleToggle
              },
              [
                createElementVNode(
                  "span",
                  null,
                  toDisplayString(_ctx.modelValue ? openText.value : closeText.value),
                  1
                ),
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    _ctx.modelValue ? (openBlock(), createBlock(unref(ArrowDown), { key: 0 })) : (openBlock(), createBlock(unref(ArrowUp), { key: 1 }))
                  ]),
                  _: 1
                })
              ],
              2
            )) : createCommentVNode("v-if", true)
          ])
        ],
        2
      );
    };
  }
});
var ReadMore = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "read-more.vue"]]);

export { ReadMore as default };
//# sourceMappingURL=read-more2.mjs.map
