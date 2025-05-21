'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@formily/shared');

const noop = () => {
};
const transformComponent = (tag, transformRules, defaultProps) => {
  return vue.defineComponent({
    setup(props, { attrs, slots }) {
      return () => {
        let data = {
          ...attrs
        };
        if (transformRules) {
          const listeners = transformRules;
          shared.each(listeners, (event, extract) => {
            data[`on${event[0].toUpperCase()}${event.slice(1)}`] = attrs[`on${extract[0].toUpperCase()}${extract.slice(1)}`] || noop;
          });
        }
        if (defaultProps) {
          data = shared.merge(defaultProps, attrs);
        }
        return vue.h(tag, data, slots);
      };
    }
  });
};

exports.transformComponent = transformComponent;
//# sourceMappingURL=transform-component.js.map
