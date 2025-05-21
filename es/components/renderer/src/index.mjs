import { defineComponent, renderSlot } from 'vue';
import { rendererProps } from './renderer.mjs';

var Renderer = defineComponent({
  name: "ElRenderer",
  props: rendererProps,
  setup(props, { slots }) {
    return () => {
      var _a;
      if (typeof props.renderer !== "function") {
        return renderSlot(slots, "default", props.data);
      }
      return (_a = props.renderer) == null ? void 0 : _a.call(props, props.data);
    };
  }
});

export { Renderer as default };
//# sourceMappingURL=index.mjs.map
