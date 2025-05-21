import { defineComponent, ref, computed, h } from 'vue';
import { useNamespace, useZIndex } from 'element-plus';
import { useFullscreen } from '@vueuse/core';
import { fullScreenProps, fullScreenEmits } from './full-screen.mjs';
import Teleport from './teleport.mjs';
import { useWindowFullscreen } from './hooks.mjs';
import { DIV_TAG } from '../../../constants/tags.mjs';

const WINDOW_TYPE = "window";
const BROWSER_TYPE = "browser";
var FullScreen = defineComponent({
  name: "ElFullScreen",
  inheritAttrs: false,
  props: fullScreenProps,
  emits: fullScreenEmits,
  setup(props, { attrs, slots, expose }) {
    const ns = useNamespace("full-screen");
    const fullType = ref();
    const target = ref();
    const teleportEl = ref();
    const browserReturn = useFullscreen(target);
    const windowReturn = useWindowFullscreen();
    const { nextZIndex } = useZIndex();
    const zIndex = ref(nextZIndex());
    const transferTo = computed(
      () => fullType.value === WINDOW_TYPE && isFullscreen.value ? "body" : ""
    );
    const isBrowser = computed(() => fullType.value === BROWSER_TYPE);
    const wrapKlass = computed(() => {
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
    const isFullscreen = computed(
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
      return h(
        Teleport,
        {
          to: transferTo.value
        },
        {
          default: () => {
            var _a, _b;
            return h(
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
                h(DIV_TAG, {
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

export { FullScreen as default };
//# sourceMappingURL=index.mjs.map
