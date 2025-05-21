'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var iconsVue = require('@element-plus/icons-vue');
var index$1 = require('../../icons-vue/index.js');
var loadMore = require('./load-more.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('element-plus/es/utils/index');

const __default__ = vue.defineComponent({
  name: "ElLoadMore"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: loadMore.loadMoreProps,
  emits: loadMore.loadMoreEmits,
  setup(__props, { emit: __emit }) {
    const { Loading: CircleLoading } = index$1;
    const props = __props;
    const emit = __emit;
    const { t } = elementPlus.useLocale();
    const ns = elementPlus.useNamespace("load-more");
    const Loading = vue.computed(
      () => props.iconType === "circle" ? CircleLoading : iconsVue.Loading
    );
    const loadingKlass = vue.computed(
      () => props.iconType === "circle" ? ns.m("circle-loading") : ns.m("snow-loading")
    );
    const isMore = vue.computed(() => props.status === "more");
    const isLoading = vue.computed(() => props.status === "loading");
    const isNoMore = vue.computed(() => props.status === "noMore");
    const isError = vue.computed(() => props.status === "error");
    const calcMoreText = vue.computed(
      () => {
        var _a;
        return (_a = props.moreText) != null ? _a : t("epx.loadMore.moreText");
      }
    );
    const calcLoadingText = vue.computed(
      () => {
        var _a;
        return (_a = props.loadingText) != null ? _a : t("epx.loadMore.loadingText");
      }
    );
    const calcNoMoreText = vue.computed(
      () => {
        var _a;
        return (_a = props.noMoreText) != null ? _a : t("epx.loadMore.noMoreText");
      }
    );
    const calcErrorText = vue.computed(
      () => {
        var _a;
        return (_a = props.errorText) != null ? _a : t("epx.loadMore.errorText");
      }
    );
    const text = vue.computed(() => {
      let text2 = "";
      if (isMore.value) {
        text2 = calcMoreText.value;
      }
      if (isLoading.value) {
        text2 = calcLoadingText.value;
      }
      if (isNoMore.value) {
        text2 = calcNoMoreText.value;
      }
      if (isError.value) {
        text2 = calcErrorText.value;
      }
      return text2;
    });
    const textStyle = vue.computed(() => {
      var _a;
      return {
        color: (_a = props.textColor) != null ? _a : props.color
      };
    });
    const rootStyle = vue.computed(() => {
      return {
        height: index.addUnit(props.height)
      };
    });
    const handleClick = () => {
      emit("click", props.status);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass([vue.unref(ns).b(), _ctx.$attrs.class]),
          style: vue.normalizeStyle([rootStyle.value])
        },
        [
          isLoading.value ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElIcon), {
            key: 0,
            size: _ctx.iconSize,
            color: _ctx.color,
            class: vue.normalizeClass([vue.unref(ns).e("loading-icon"), loadingKlass.value])
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(Loading))
            ]),
            _: 1
          }, 8, ["size", "color", "class"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "span",
            {
              class: vue.normalizeClass([vue.unref(ns).e("text"), vue.unref(ns).m(_ctx.status)]),
              style: vue.normalizeStyle(textStyle.value),
              onClick: handleClick
            },
            vue.toDisplayString(text.value),
            7
          )
        ],
        6
      );
    };
  }
});
var LoadMore = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "load-more.vue"]]);

exports["default"] = LoadMore;
//# sourceMappingURL=load-more2.js.map
