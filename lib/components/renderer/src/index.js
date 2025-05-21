'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var renderer = require('./renderer.js');

var Renderer = vue.defineComponent({
  name: "ElRenderer",
  props: renderer.rendererProps,
  setup(props, { slots }) {
    return () => {
      var _a;
      if (typeof props.renderer !== "function") {
        return vue.renderSlot(slots, "default", props.data);
      }
      return (_a = props.renderer) == null ? void 0 : _a.call(props, props.data);
    };
  }
});

exports["default"] = Renderer;
//# sourceMappingURL=index.js.map
