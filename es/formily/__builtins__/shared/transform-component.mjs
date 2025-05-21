import { defineComponent, h } from 'vue';
import { each, merge } from '@formily/shared';

const noop = () => {
};
const transformComponent = (tag, transformRules, defaultProps) => {
  return defineComponent({
    setup(props, { attrs, slots }) {
      return () => {
        let data = {
          ...attrs
        };
        if (transformRules) {
          const listeners = transformRules;
          each(listeners, (event, extract) => {
            data[`on${event[0].toUpperCase()}${event.slice(1)}`] = attrs[`on${extract[0].toUpperCase()}${extract.slice(1)}`] || noop;
          });
        }
        if (defaultProps) {
          data = merge(defaultProps, attrs);
        }
        return h(tag, data, slots);
      };
    }
  });
};

export { transformComponent };
//# sourceMappingURL=transform-component.mjs.map
