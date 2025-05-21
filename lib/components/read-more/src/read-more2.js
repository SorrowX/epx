'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var readMore = require('./read-more.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var event = require('../../../constants/event.js');

const __default__ = vue.defineComponent({
  name: "ElReadMore"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: readMore.readMoreProps,
  emits: readMore.readMoreEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t } = elementPlus.useLocale();
    const ns = elementPlus.useNamespace("read-more");
    const props = __props;
    const emit = __emit;
    const wrapper = vue.ref();
    const initial = vue.ref(false);
    const dataset = vue.reactive({
      height: 0
    });
    const openText = vue.computed(() => {
      var _a;
      return (_a = props.openText) != null ? _a : t("epx.collapse.openText");
    });
    const closeText = vue.computed(() => {
      var _a;
      return (_a = props.closeText) != null ? _a : t("epx.collapse.closeText");
    });
    const warpperClass = vue.computed(
      () => !props.modelValue ? "expanded" : "collapse"
    );
    const warpperStyle = vue.computed(() => {
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
    const hasTrigger = vue.computed(() => {
      const height = Number.parseFloat(props.height);
      const wrapperHeight = dataset.height;
      return wrapperHeight > height;
    });
    vue.onMounted(() => {
      updateDataset();
      vue.nextTick(() => {
        initial.value = true;
      });
    });
    vue.onUpdated(() => {
      updateDataset();
    });
    const handleToggle = () => {
      const value = !props.modelValue;
      emit(event.UPDATE_MODEL_EVENT, value);
      emit(event.CHANGE_EVENT, value);
    };
    __expose({
      handleToggle,
      hasTrigger,
      updateDataset
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass([vue.unref(ns).b(), _ctx.transition && initial.value ? vue.unref(ns).m("transition") : ""])
        },
        [
          vue.createElementVNode(
            "div",
            {
              ref_key: "wrapper",
              ref: wrapper,
              class: vue.normalizeClass([vue.unref(ns).e("wrapper"), warpperClass.value]),
              style: vue.normalizeStyle(warpperStyle.value)
            },
            [
              vue.renderSlot(_ctx.$slots, "default"),
              _ctx.overlay && _ctx.modelValue && hasTrigger.value ? (vue.openBlock(), vue.createElementBlock(
                "div",
                {
                  key: 0,
                  class: vue.normalizeClass(vue.unref(ns).e("overlay"))
                },
                null,
                2
              )) : vue.createCommentVNode("v-if", true)
            ],
            6
          ),
          vue.renderSlot(_ctx.$slots, "trigger", vue.normalizeProps(vue.guardReactiveProps({ hasTrigger: hasTrigger.value })), () => [
            hasTrigger.value ? (vue.openBlock(), vue.createElementBlock(
              "div",
              {
                key: 0,
                class: vue.normalizeClass(vue.unref(ns).e("trigger")),
                onClick: handleToggle
              },
              [
                vue.createElementVNode(
                  "span",
                  null,
                  vue.toDisplayString(_ctx.modelValue ? openText.value : closeText.value),
                  1
                ),
                vue.createVNode(vue.unref(elementPlus.ElIcon), null, {
                  default: vue.withCtx(() => [
                    _ctx.modelValue ? (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.ArrowDown), { key: 0 })) : (vue.openBlock(), vue.createBlock(vue.unref(iconsVue.ArrowUp), { key: 1 }))
                  ]),
                  _: 1
                })
              ],
              2
            )) : vue.createCommentVNode("v-if", true)
          ])
        ],
        2
      );
    };
  }
});
var ReadMore = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "read-more.vue"]]);

exports["default"] = ReadMore;
//# sourceMappingURL=read-more2.js.map
