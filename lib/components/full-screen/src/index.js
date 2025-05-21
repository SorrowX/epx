'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');
var core = require('@vueuse/core');
var fullScreen = require('./full-screen.js');
var teleport = require('./teleport.js');
var hooks = require('./hooks.js');
var tags = require('../../../constants/tags.js');

const WINDOW_TYPE = "window";
const BROWSER_TYPE = "browser";
var FullScreen = vue.defineComponent({
  name: "ElFullScreen",
  inheritAttrs: false,
  props: fullScreen.fullScreenProps,
  emits: fullScreen.fullScreenEmits,
  setup(props, { attrs, slots, expose }) {
    const ns = elementPlus.useNamespace("full-screen");
    const fullType = vue.ref();
    const target = vue.ref();
    const teleportEl = vue.ref();
    const browserReturn = core.useFullscreen(target);
    const windowReturn = hooks.useWindowFullscreen();
    const { nextZIndex } = elementPlus.useZIndex();
    const zIndex = vue.ref(nextZIndex());
    const transferTo = vue.computed(
      () => fullType.value === WINDOW_TYPE && isFullscreen.value ? "body" : ""
    );
    const isBrowser = vue.computed(() => fullType.value === BROWSER_TYPE);
    const wrapKlass = vue.computed(() => {
      return {
        [ns.m("full")]: fullType.value === WINDOW_TYPE && isFullscreen.value
      };
    });
    const setType = (type) => {
      var _a;
      type = (_a = type != null ? type : props.type) != null ? _a : WINDOW_TYPE;
      fullType.value = type !== WINDOW_TYPE ? BROWSER_TYPE : WINDOW_TYPE;
    };
    const enter = async (type) => {
      setType(type);
      zIndex.value = nextZIndex();
      isBrowser.value ? browserReturn.enter() : windowReturn.enter();
    };
    const exit = async (type) => {
      setType(type);
      zIndex.value = nextZIndex();
      isBrowser.value ? browserReturn.exit() : windowReturn.exit();
    };
    const toggle = async (type) => {
      setType(type);
      zIndex.value = nextZIndex();
      isBrowser.value ? browserReturn.toggle() : windowReturn.toggle();
    };
    const isFullscreen = vue.computed(
      () => isBrowser.value ? browserReturn.isFullscreen.value : windowReturn.isFullscreen.value
    );
    expose({
      enter,
      exit,
      toggle,
      isFullscreen,
      appendTo: teleportEl
    });
    return () => {
      return vue.h(
        teleport["default"],
        {
          to: transferTo.value
        },
        {
          default: () => {
            var _a, _b;
            return vue.h(
              props.tag,
              {
                ...attrs,
                ref: target,
                class: [ns.b(), attrs.class, wrapKlass.value],
                style: {
                  ...(_a = attrs.style) != null ? _a : {},
                  zIndex: zIndex.value
                }
              },
              [
                (_b = slots.default) == null ? void 0 : _b.call(slots, {
                  enter,
                  exit,
                  toggle,
                  isFullscreen,
                  appendTo: teleportEl.value
                }),
                vue.h(tags.DIV_TAG, {
                  ref: teleportEl,
                  role: "none",
                  class: ns.e("teleport")
                })
              ]
            );
          }
        }
      );
    };
  }
});

exports["default"] = FullScreen;
//# sourceMappingURL=index.js.map
