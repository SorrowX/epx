'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var index$1 = require('../../icons-vue/index.js');
var video = require('./video.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var dateTime = require('../../../utils/date-time.js');
var index = require('element-plus/es/utils/index');

const __default__ = vue.defineComponent({
  name: "ElVideo"
});
const _sfc_main = vue.defineComponent({
  ...__default__,
  props: video.videoProps,
  emits: video.videoEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const { VideoPlayer } = index$1;
    const props = __props;
    const emit = __emit;
    const ns = elementPlus.useNamespace("video");
    const isPlayed = vue.ref(false);
    const paused = vue.ref(true);
    const videoRef = vue.ref(null);
    const setPaused = (bool) => paused.value = bool;
    const setIsPlayed = (bool) => isPlayed.value = bool;
    const hasPoster = vue.computed(() => !isPlayed.value && !!props.poster);
    const hasDuration = vue.computed(() => hasPoster.value && !!props.duration);
    const formatDuration = vue.computed(
      () => index.isNumber(props.duration) ? dateTime.formatTime(props.duration) : props.duration
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
      return vue.openBlock(), vue.createElementBlock(
        "div",
        {
          class: vue.normalizeClass(vue.unref(ns).b())
        },
        [
          vue.renderSlot(_ctx.$slots, "poster", {}, () => [
            hasPoster.value ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              class: vue.normalizeClass(vue.unref(ns).e("poster")),
              src: _ctx.poster,
              onLoad: _ctx.onCoverLoad
            }, null, 42, ["src", "onLoad"])) : vue.createCommentVNode("v-if", true)
          ]),
          vue.renderSlot(_ctx.$slots, "duration", vue.normalizeProps(vue.guardReactiveProps({ formatDuration: formatDuration.value })), () => [
            hasDuration.value ? (vue.openBlock(), vue.createElementBlock(
              "span",
              {
                key: 0,
                class: vue.normalizeClass(vue.unref(ns).e("duration"))
              },
              vue.toDisplayString(formatDuration.value),
              3
            )) : vue.createCommentVNode("v-if", true)
          ]),
          vue.createElementVNode("video", {
            ref_key: "videoRef",
            ref: videoRef,
            controls: "",
            class: vue.normalizeClass(vue.unref(ns).e("video")),
            src: _ctx.src,
            hidden: hasPoster.value,
            onEnded: handlePause,
            onPause: handlePause,
            onPlay: handlePlay
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 42, ["src", "hidden"]),
          hasPoster.value ? (vue.openBlock(), vue.createElementBlock(
            "div",
            {
              key: 0,
              class: vue.normalizeClass(vue.unref(ns).e("player-wrap")),
              onClick: handleClick
            },
            [
              vue.renderSlot(_ctx.$slots, "player", vue.normalizeProps(vue.guardReactiveProps({ handleClick })), () => [
                vue.createVNode(vue.unref(elementPlus.ElIcon), {
                  class: vue.normalizeClass(vue.unref(ns).e("player")),
                  size: "42",
                  color: "rgba(0,0,0,0.6)"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(VideoPlayer))
                  ]),
                  _: 1
                }, 8, ["class"])
              ])
            ],
            2
          )) : vue.createCommentVNode("v-if", true)
        ],
        2
      );
    };
  }
});
var Video = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "video.vue"]]);

exports["default"] = Video;
//# sourceMappingURL=video2.js.map
