'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var vue$1 = require('@formily/vue');

const PortalMap = /* @__PURE__ */ new Map();
const createPortalProvider = (id) => {
  const Portal = vue.defineComponent({
    name: "PortalProvider",
    props: {
      id: {
        type: [String, Symbol],
        default: id
      }
    },
    setup(props) {
      vue.onBeforeUnmount(() => {
        const { id: id2 } = props;
        if (id2 && PortalMap.has(id2)) {
          PortalMap.delete(id2);
        }
      });
    },
    render() {
      const { id: id2 } = this;
      if (id2 && !PortalMap.has(id2)) {
        PortalMap.set(id2, this);
      }
      return vue$1.h(vue$1.Fragment, {}, this.$slots);
    }
  });
  return Portal;
};
function getPortalContext(id) {
  return PortalMap.get(id);
}

exports.createPortalProvider = createPortalProvider;
exports.getPortalContext = getPortalContext;
//# sourceMappingURL=portal.js.map
