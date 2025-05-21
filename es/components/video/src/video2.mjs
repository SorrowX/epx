import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, createCommentVNode, normalizeProps, guardReactiveProps, toDisplayString, createElementVNode, createVNode, withCtx } from 'vue';
import { useNamespace, ElIcon } from 'element-plus';
import * as index from '../../icons-vue/index.mjs';
import { videoProps, videoEmits } from './video.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { formatTime } from '../../../utils/date-time.mjs';
import { isNumber } from 'element-plus/es/utils/index';

const __default__ = defineComponent({
  name: "ElVideo"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: videoProps,
  emits: videoEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const { VideoPlayer } = index;
    const props = __props;
    const emit = __emit;
    const ns = useNamespace("video");
    const isPlayed = ref(false);
    const paused = ref(true);
    const videoRef = ref(null);
    const setPaused = (bool) => paused.value = bool;
    const setIsPlayed = (bool) => isPlayed.value = bool;
    const hasPoster = computed(() => !isPlayed.value && !!props.poster);
    const hasDuration = computed(() => hasPoster.value && !!props.duration);
    const formatDuration = computed(
      () => isNumber(props.duration) ? formatTime(props.duration) : props.duration
    );
    const handlePlay = () => {
      setPaused(false);
    };
    const handlePause = () => {
      setPaused(true);
    };
    const handleClick = (e) => {
      setIsPlayed(true);
      const video = videoRef.value;
      if (video) {
        if (video.ended || video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
      emit("click", paused.value, e);
    };
    __expose({
      video: videoRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns).b())
        },
        [
          renderSlot(_ctx.$slots, "poster", {}, () => [
            hasPoster.value ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: normalizeClass(unref(ns).e("poster")),
              src: _ctx.poster,
              onLoad: _ctx.onCoverLoad
            }, null, 42, ["src", "onLoad"])) : createCommentVNode("v-if", true)
          ]),
          renderSlot(_ctx.$slots, "duration", normalizeProps(guardReactiveProps({ formatDuration: formatDuration.value })), () => [
            hasDuration.value ? (openBlock(), createElementBlock(
              "span",
              {
                key: 0,
                class: normalizeClass(unref(ns).e("duration"))
              },
              toDisplayString(formatDuration.value),
              3
            )) : createCommentVNode("v-if", true)
          ]),
          createElementVNode("video", {
            ref_key: "videoRef",
            ref: videoRef,
            controls: "",
            class: normalizeClass(unref(ns).e("video")),
            src: _ctx.src,
            hidden: hasPoster.value,
            onEnded: handlePause,
            onPause: handlePause,
            onPlay: handlePlay
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 42, ["src", "hidden"]),
          hasPoster.value ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(unref(ns).e("player-wrap")),
              onClick: handleClick
            },
            [
              renderSlot(_ctx.$slots, "player", normalizeProps(guardReactiveProps({ handleClick })), () => [
                createVNode(unref(ElIcon), {
                  class: normalizeClass(unref(ns).e("player")),
                  size: "42",
                  color: "rgba(0,0,0,0.6)"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(VideoPlayer))
                  ]),
                  _: 1
                }, 8, ["class"])
              ])
            ],
            2
          )) : createCommentVNode("v-if", true)
        ],
        2
      );
    };
  }
});
var Video = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "video.vue"]]);

export { Video as default };
//# sourceMappingURL=video2.mjs.map
