import { getCurrentInstance, mergeProps } from 'vue';
import { ElScrollbar } from 'element-plus';

var Scrollbar = {
  extends: ElScrollbar,
  props: {
    wrapOptions: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, ctx) {
    const instance = getCurrentInstance();
    const render = ElScrollbar.setup(props, ctx);
    return () => {
      const VNode = render(instance.ctx, instance.proxy);
      const wrapVNode = VNode.children[0];
      wrapVNode.props = mergeProps(wrapVNode.props, {
        ...props.wrapOptions
      });
      return VNode;
    };
  }
};

export { Scrollbar as default };
//# sourceMappingURL=scrollbar.mjs.map
