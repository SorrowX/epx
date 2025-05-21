import { defineComponent, markRaw, ref, effectScope, shallowRef, computed, watch, nextTick, onMounted, openBlock, createBlock, resolveDynamicComponent, Teleport, withCtx, createVNode, Transition, createElementVNode, normalizeClass, unref, normalizeStyle, withModifiers, createCommentVNode, createElementBlock, Fragment, renderList, withDirectives, vShow, renderSlot } from 'vue';
import { useEventListener } from '@vueuse/core';
import { throttle } from 'lodash-unified';
import { useLocale, useNamespace, useZIndex, ElIcon } from 'element-plus';
import { FullScreen, ScaleToOriginal, Close, ArrowLeft, ArrowRight, ZoomOut, ZoomIn, RefreshLeft, RefreshRight } from '@element-plus/icons-vue';
import { videoViewerProps, videoViewerEmits } from './video-viewer.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { EVENT_CODE } from '../../../constants/aria.mjs';
import { keysOf } from 'element-plus/es/utils/index';

const __default__ = defineComponent({
  name: "ElVideoViewer"
});
const _sfc_main = defineComponent({
  ...__default__,
  props: videoViewerProps,
  emits: videoViewerEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a;
    const modes = {
      CONTAIN: {
        name: "contain",
        icon: markRaw(FullScreen)
      },
      ORIGINAL: {
        name: "original",
        icon: markRaw(ScaleToOriginal)
      }
    };
    const props = __props;
    const emit = __emit;
    const { t } = useLocale();
    const ns = useNamespace("video-viewer");
    const { nextZIndex } = useZIndex();
    const wrapper = ref();
    const imgRefs = ref([]);
    const scopeEventListener = effectScope();
    const loading = ref(true);
    const activeIndex = ref(props.initialIndex);
    const mode = shallowRef(modes.CONTAIN);
    const transform = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
    const isSingle = computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = computed(() => {
      return activeIndex.value === 0;
    });
    const isLast = computed(() => {
      return activeIndex.value === props.urlList.length - 1;
    });
    const currentImg = computed(() => {
      return props.urlList[activeIndex.value];
    });
    const arrowPrevKls = computed(() => [
      ns.e("btn"),
      ns.e("prev"),
      ns.is("disabled", !props.infinite && isFirst.value)
    ]);
    const arrowNextKls = computed(() => [
      ns.e("btn"),
      ns.e("next"),
      ns.is("disabled", !props.infinite && isLast.value)
    ]);
    const imgStyle = computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
      let translateX = offsetX / scale;
      let translateY = offsetY / scale;
      const radian = deg * Math.PI / 180;
      const cosRadian = Math.cos(radian);
      const sinRadian = Math.sin(radian);
      translateX = translateX * cosRadian + translateY * sinRadian;
      translateY = translateY * cosRadian - offsetX / scale * sinRadian;
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
        transition: enableTransition ? "transform .3s" : ""
      };
      if (mode.value.name === modes.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    function hide() {
      unregisterEventListener();
      emit("close");
    }
    function registerEventListener() {
      const keydownHandler = throttle((e) => {
        switch (e.code) {
          case EVENT_CODE.esc:
            props.closeOnPressEscape && hide();
            break;
          case EVENT_CODE.space:
            toggleMode();
            break;
          case EVENT_CODE.left:
            prev();
            break;
          case EVENT_CODE.up:
            handleActions("zoomIn");
            break;
          case EVENT_CODE.right:
            next();
            break;
          case EVENT_CODE.down:
            handleActions("zoomOut");
            break;
        }
      });
      const mousewheelHandler = throttle((e) => {
        const delta = e.deltaY || e.deltaX;
        handleActions(delta < 0 ? "zoomIn" : "zoomOut", {
          zoomRate: props.zoomRate,
          enableTransition: false
        });
      });
      scopeEventListener.run(() => {
        useEventListener(document, "keydown", keydownHandler);
        useEventListener(document, "wheel", mousewheelHandler);
      });
    }
    function unregisterEventListener() {
      scopeEventListener.stop();
    }
    function handleImgLoad() {
      loading.value = false;
    }
    function handleImgError(e) {
      loading.value = false;
      e.target.alt = t("el.image.error");
    }
    function handleMouseDown(e) {
      if (loading.value || e.button !== 0 || !wrapper.value)
        return;
      transform.value.enableTransition = false;
      const { offsetX, offsetY } = transform.value;
      const startX = e.pageX;
      const startY = e.pageY;
      const dragHandler = throttle((ev) => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        };
      });
      const removeMousemove = useEventListener(document, "mousemove", dragHandler);
      useEventListener(document, "mouseup", () => {
        removeMousemove();
      });
      e.preventDefault();
    }
    function reset() {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    }
    function toggleMode() {
      if (loading.value)
        return;
      const modeNames = keysOf(modes);
      const modeValues = Object.values(modes);
      const currentMode = mode.value.name;
      const index = modeValues.findIndex((i) => i.name === currentMode);
      const nextIndex = (index + 1) % modeNames.length;
      mode.value = modes[modeNames[nextIndex]];
      reset();
    }
    function setActiveItem(index) {
      const len = props.urlList.length;
      activeIndex.value = (index + len) % len;
    }
    function prev() {
      if (isFirst.value && !props.infinite)
        return;
      setActiveItem(activeIndex.value - 1);
    }
    function next() {
      if (isLast.value && !props.infinite)
        return;
      setActiveItem(activeIndex.value + 1);
    }
    function handleActions(action, options = {}) {
      if (loading.value)
        return;
      const { minScale, maxScale } = props;
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: props.zoomRate,
        rotateDeg: 90,
        enableTransition: true,
        ...options
      };
      switch (action) {
        case "zoomOut":
          if (transform.value.scale > minScale) {
            transform.value.scale = Number.parseFloat(
              (transform.value.scale / zoomRate).toFixed(3)
            );
          }
          break;
        case "zoomIn":
          if (transform.value.scale < maxScale) {
            transform.value.scale = Number.parseFloat(
              (transform.value.scale * zoomRate).toFixed(3)
            );
          }
          break;
        case "clockwise":
          transform.value.deg += rotateDeg;
          emit("rotate", transform.value.deg);
          break;
        case "anticlockwise":
          transform.value.deg -= rotateDeg;
          emit("rotate", transform.value.deg);
          break;
      }
      transform.value.enableTransition = enableTransition;
    }
    watch(currentImg, () => {
      nextTick(() => {
        const $img = imgRefs.value[0];
        if (!($img == null ? void 0 : $img.complete)) {
          loading.value = true;
        }
      });
    });
    watch(activeIndex, (val) => {
      reset();
      emit("switch", val);
    });
    onMounted(() => {
      registerEventListener();
    });
    __expose({
      setActiveItem
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.teleported ? Teleport : "div"), {
        to: "body",
        disabled: !_ctx.teleported
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: "viewer-fade",
            appear: ""
          }, {
            default: withCtx(() => [
              createElementVNode(
                "div",
                {
                  ref_key: "wrapper",
                  ref: wrapper,
                  tabindex: -1,
                  class: normalizeClass(unref(ns).e("wrapper")),
                  style: normalizeStyle({ zIndex: zIndex.value })
                },
                [
                  createElementVNode("div", {
                    class: normalizeClass(unref(ns).e("mask")),
                    onClick: withModifiers(($event) => _ctx.hideOnClickModal && hide(), ["self"])
                  }, null, 10, ["onClick"]),
                  createCommentVNode(" CLOSE "),
                  createElementVNode(
                    "span",
                    {
                      class: normalizeClass([unref(ns).e("btn"), unref(ns).e("close")]),
                      onClick: hide
                    },
                    [
                      createVNode(unref(ElIcon), null, {
                        default: withCtx(() => [
                          createVNode(unref(Close))
                        ]),
                        _: 1
                      })
                    ],
                    2
                  ),
                  createCommentVNode(" ARROW "),
                  !isSingle.value ? (openBlock(), createElementBlock(
                    Fragment,
                    { key: 0 },
                    [
                      createElementVNode(
                        "span",
                        {
                          class: normalizeClass(arrowPrevKls.value),
                          onClick: prev
                        },
                        [
                          createVNode(unref(ElIcon), null, {
                            default: withCtx(() => [
                              createVNode(unref(ArrowLeft))
                            ]),
                            _: 1
                          })
                        ],
                        2
                      ),
                      createElementVNode(
                        "span",
                        {
                          class: normalizeClass(arrowNextKls.value),
                          onClick: next
                        },
                        [
                          createVNode(unref(ElIcon), null, {
                            default: withCtx(() => [
                              createVNode(unref(ArrowRight))
                            ]),
                            _: 1
                          })
                        ],
                        2
                      )
                    ],
                    64
                  )) : createCommentVNode("v-if", true),
                  createCommentVNode(" ACTIONS "),
                  createElementVNode(
                    "div",
                    {
                      class: normalizeClass([unref(ns).e("btn"), unref(ns).e("actions")])
                    },
                    [
                      createElementVNode(
                        "div",
                        {
                          class: normalizeClass(unref(ns).e("actions__inner"))
                        },
                        [
                          createVNode(unref(ElIcon), {
                            onClick: ($event) => handleActions("zoomOut")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ZoomOut))
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(unref(ElIcon), {
                            onClick: ($event) => handleActions("zoomIn")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(ZoomIn))
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createElementVNode(
                            "i",
                            {
                              class: normalizeClass(unref(ns).e("actions__divider"))
                            },
                            null,
                            2
                          ),
                          createVNode(unref(ElIcon), { onClick: toggleMode }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(mode.value.icon)))
                            ]),
                            _: 1
                          }),
                          createElementVNode(
                            "i",
                            {
                              class: normalizeClass(unref(ns).e("actions__divider"))
                            },
                            null,
                            2
                          ),
                          createVNode(unref(ElIcon), {
                            onClick: ($event) => handleActions("anticlockwise")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(RefreshLeft))
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(unref(ElIcon), {
                            onClick: ($event) => handleActions("clockwise")
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(RefreshRight))
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ],
                        2
                      )
                    ],
                    2
                  ),
                  createCommentVNode(" CANVAS "),
                  createElementVNode(
                    "div",
                    {
                      class: normalizeClass(unref(ns).e("canvas"))
                    },
                    [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(_ctx.urlList, (url, i) => {
                          return withDirectives((openBlock(), createElementBlock("img", {
                            ref_for: true,
                            ref: (el) => imgRefs.value[i] = el,
                            key: url,
                            src: url,
                            style: normalizeStyle(imgStyle.value),
                            class: normalizeClass(unref(ns).e("img")),
                            crossorigin: _ctx.crossorigin,
                            onLoad: handleImgLoad,
                            onError: handleImgError,
                            onMousedown: handleMouseDown
                          }, null, 46, ["src", "crossorigin"])), [
                            [vShow, i === activeIndex.value]
                          ]);
                        }),
                        128
                      )),
                      createCommentVNode(' <el-video\n            duration="00:11"\n            style="max-width: 80%; max-height: 65%"\n            src="https://realbot-oss.oss-accelerate.aliyuncs.com/scrm/2025/2025-22-19/ab77e3d0-8933-4746-94af-bb66f6e58d38/\u89C6\u9891.mp4"\n            poster="https://realbot-oss.oss-accelerate.aliyuncs.com/scrm/2025/2025-22-19/ab77e3d0-8933-4746-94af-bb66f6e58d38/\u89C6\u9891.mp4?x-oss-process=video/snapshot,t_1000,f_jpg,m_fast"\n          /> ')
                    ],
                    2
                  ),
                  renderSlot(_ctx.$slots, "default")
                ],
                6
              )
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["disabled"]);
    };
  }
});
var VideoViewer = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "video-viewer.vue"]]);

export { VideoViewer as default };
//# sourceMappingURL=video-viewer2.mjs.map
