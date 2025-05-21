import { defineComponent, onBeforeUnmount } from 'vue';
import { h, Fragment } from '@formily/vue';

const PortalMap = /* @__PURE__ */ new Map();
const createPortalProvider = (id) => {
  const Portal = defineComponent({
    name: "PortalProvider",
    props: {
      id: {
        type: [String, Symbol],
        default: id
      }
    },
    setup(props) {
      onBeforeUnmount(() => {
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
      return h(Fragment, {}, this.$slots);
    }
  });
  return Portal;
};
function getPortalContext(id) {
  return PortalMap.get(id);
}

export { createPortalProvider, getPortalContext };
//# sourceMappingURL=portal.mjs.map
