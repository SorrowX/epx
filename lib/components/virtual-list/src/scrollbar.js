'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var elementPlus = require('element-plus');

var Scrollbar = {
  extends: elementPlus.ElScrollbar,
  props: {
    wrapOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, ctx) {
    const instance = vue.getCurrentInstance();
    const render = elementPlus.ElScrollbar.setup(props, ctx);
    return () => {
      const VNode = render(instance.ctx, instance.proxy);
      const wrapVNode = VNode.children[0];
      wrapVNode.props = vue.mergeProps(wrapVNode.props, {
        ...props.wrapOptions
      });
      return VNode;
    };
  }
};

exports["default"] = Scrollbar;
//# sourceMappingURL=scrollbar.js.map
