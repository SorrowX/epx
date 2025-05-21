import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createBlock, withCtx, createVNode, createCommentVNode, createElementVNode, toDisplayString } from 'vue';
import { useLocale, useNamespace, ElIcon } from 'element-plus';
import { Loading } from '@element-plus/icons-vue';
import * as index from '../../icons-vue/index.mjs';
import { loadMoreProps, loadMoreEmits } from './load-more.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { addUnit } from 'element-plus/es/utils/index';

const __default__ = defineComponent({
  name: "ElLoadMore"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: loadMoreProps,
  emits: loadMoreEmits,
  setup(__props, { emit: __emit }) {
    const { Loading: CircleLoading } = index;
    const props = __props;
    const emit = __emit;
    const { t } = useLocale();
    const ns = useNamespace("load-more");
    const Loading$1 = computed(
      () => props.iconType === "circle" ? CircleLoading : Loading
    );
    const loadingKlass = computed(
      () => props.iconType === "circle" ? ns.m("circle-loading") : ns.m("snow-loading")
    );
    const isMore = computed(() => props.status === "more");
    const isLoading = computed(() => props.status === "loading");
    const isNoMore = computed(() => props.status === "noMore");
    const isError = computed(() => props.status === "error");
    const calcMoreText = computed(
      () => {
        var _a;
        return (_a = props.moreText) != null ? _a : t("epx.loadMore.moreText");
      }
    );
    const calcLoadingText = computed(
      () => {
        var _a;
        return (_a = props.loadingText) != null ? _a : t("epx.loadMore.loadingText");
      }
    );
    const calcNoMoreText = computed(
      () => {
        var _a;
        return (_a = props.noMoreText) != null ? _a : t("epx.loadMore.noMoreText");
      }
    );
    const calcErrorText = computed(
      () => {
        var _a;
        return (_a = props.errorText) != null ? _a : t("epx.loadMore.errorText");
      }
    );
    const text = computed(() => {
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
    const textStyle = computed(() => {
      var _a;
      return {
        color: (_a = props.textColor) != null ? _a : props.color
      };
    });
    const rootStyle = computed(() => {
      return {
        height: addUnit(props.height)
      };
    });
    const handleClick = () => {
      emit("click", props.status);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns).b(), _ctx.$attrs.class]),
          style: normalizeStyle([rootStyle.value])
        },
        [
          isLoading.value ? (openBlock(), createBlock(unref(ElIcon), {
            key: 0,
            size: _ctx.iconSize,
            color: _ctx.color,
            class: normalizeClass([unref(ns).e("loading-icon"), loadingKlass.value])
          }, {
            default: withCtx(() => [
              createVNode(unref(Loading$1))
            ]),
            _: 1
          }, 8, ["size", "color", "class"])) : createCommentVNode("v-if", true),
          createElementVNode(
            "span",
            {
              class: normalizeClass([unref(ns).e("text"), unref(ns).m(_ctx.status)]),
              style: normalizeStyle(textStyle.value),
              onClick: handleClick
            },
            toDisplayString(text.value),
            7
          )
        ],
        6
      );
    };
  }
});
var LoadMore = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "load-more.vue"]]);

export { LoadMore as default };
//# sourceMappingURL=load-more2.mjs.map
